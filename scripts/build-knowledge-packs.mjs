import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsRoot = path.join(projectRoot, 'src', 'content', 'docs');
const catalogPath = path.join(projectRoot, 'knowledge', 'packs', 'catalog.json');
const outputPath = path.join(projectRoot, 'public', 'v1', 'packs');
const aliasPath = path.join(projectRoot, 'public', 'v1', 'packs.json');

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]));
  }
  return value;
}

function digest(value) {
  return `sha256:${createHash('sha256').update(JSON.stringify(stable(value))).digest('hex')}`;
}

function documentId(relativePath) {
  return relativePath.replace(/\.(md|mdx)$/i, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
}

async function compileManifest(source) {
  const manifest = { ...source };
  const documentPaths = Array.isArray(manifest.document_paths) ? manifest.document_paths : [];
  delete manifest.document_paths;
  manifest.documents = [];

  for (const relativePath of documentPaths) {
    const fullPath = path.resolve(docsRoot, relativePath);
    if (!fullPath.startsWith(`${docsRoot}${path.sep}`)) throw new Error(`Invalid document path: ${relativePath}`);
    const content = await readFile(fullPath);
    manifest.documents.push({
      document_id: documentId(relativePath),
      path: relativePath,
      source_url: `https://kb.smartecommerce.it/${relativePath.replace(/\.(md|mdx)$/i, '')}/`,
      sha256: createHash('sha256').update(content).digest('hex'),
      content_type: 'text/markdown',
    });
  }

  manifest.digest = digest(manifest);
  return manifest;
}

const sourceIndex = JSON.parse(await readFile(catalogPath, 'utf8'));
if (sourceIndex.schema !== 'smart-ecommerce.knowledge-pack-source-index' || sourceIndex.schema_version !== 1) {
  throw new Error('Unsupported KnowledgePack source index');
}

const items = [];
for (const source of sourceIndex.items ?? []) items.push(await compileManifest(source));

const output = `${JSON.stringify({
  schema: 'smart-ecommerce.knowledge-pack-index',
  schema_version: 1,
  status: 'ready',
  generated_at: '2026-08-03T00:00:00Z',
  items,
}, null, 2)}\n`;

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, output, 'utf8');
await writeFile(aliasPath, output, 'utf8');
console.log(`Generated ${items.length} KnowledgePacks.`);
