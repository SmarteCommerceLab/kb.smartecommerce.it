import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const endpointPath = path.join(projectRoot, 'public', 'v1', 'packs');

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]));
  }
  return value;
}

function manifestDigest(manifest) {
  const payload = Object.fromEntries(Object.entries(manifest).filter(([key]) => !['digest', 'source'].includes(key)));
  return `sha256:${createHash('sha256').update(JSON.stringify(stable(payload))).digest('hex')}`;
}

const index = JSON.parse(await readFile(endpointPath, 'utf8'));
if (index.schema !== 'smart-ecommerce.knowledge-pack-index' || index.schema_version !== 1) {
  throw new Error('Invalid KnowledgePack index schema');
}
if (index.status !== 'ready' || !Array.isArray(index.items) || index.items.length < 1) {
  throw new Error('KnowledgePack index is not ready');
}

const ids = new Set();
for (const manifest of index.items) {
  if (manifest.schema !== 'smart-ecommerce.knowledge-pack' || manifest.schema_version !== 1) {
    throw new Error(`Invalid manifest schema: ${manifest.pack_id ?? 'unknown'}`);
  }
  if (manifest.lifecycle !== 'approved') throw new Error(`Pack is not approved: ${manifest.pack_id}`);
  if (ids.has(manifest.pack_id)) throw new Error(`Duplicate pack: ${manifest.pack_id}`);
  ids.add(manifest.pack_id);
  if (manifest.digest !== manifestDigest(manifest)) throw new Error(`Invalid digest: ${manifest.pack_id}`);
  if (!Array.isArray(manifest.documents) || manifest.documents.length < 1) {
    throw new Error(`Pack has no documents: ${manifest.pack_id}`);
  }
}

console.log(`Verified ${index.items.length} approved KnowledgePacks.`);
