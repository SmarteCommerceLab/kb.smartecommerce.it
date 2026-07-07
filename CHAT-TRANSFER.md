# Trasferimento chat - SeC kLeb / kb.smartecommerce.it

Questo documento porta nel progetto `SmarteCommerceLab` il contesto operativo della chat usata per progettare, sviluppare, pubblicare e rifinire la Knowledge Base pubblica `kb.smartecommerce.it`.

Nota sicurezza: nella chat originale sono state fornite credenziali di accesso al server. Non sono state riportate in questo file perche la cartella e destinata a GitHub. Le credenziali vanno gestite fuori repository, tramite secret manager, variabili ambiente o documentazione privata.

## Obiettivo iniziale

Creare su Smart eCommerce una Knowledge Base pubblica per documentare i prodotti realizzati, utile sia agli sviluppatori sia ad agenti AI che devono lavorare in autonomia sullo stack.

Decisioni prese:

- usare Astro + Starlight;
- pubblicare su sottodominio `kb.smartecommerce.it`;
- mantenere i contenuti pubblici, senza login, per permettere a crawler e AI di leggerli;
- costruire una documentazione tecnica orientata a prodotti, contratti, API, procedure e autonomia AI.

## Hosting e deploy

Il sottodominio e stato creato su server Linux/Plesk con nginx davanti ad Apache.

Percorso remoto indicato:

```text
/var/www/vhosts/kb.smartecommerce.it/httpdocs
```

Accesso remoto usato durante la chat:

```text
Host: kb.smartecommerce.it
Port: 22
User: kbwppg_logic_22_wfalez7ejs
Root: /var/www/vhosts/kb.smartecommerce.it/httpdocs
```

La password e stata omessa da questo documento.

Il deploy e stato eseguito caricando la build statica `dist/` via FTP su:

```text
ftp://kb.smartecommerce.it/httpdocs/
```

## Stack creato

Cartella sorgente originale:

```text
C:\Users\derad\OneDrive - drea\developer\WordPress-developer\Smart eMagazine\wp-smart-daily\smart-daily-crm 1.1.04\smart-daily-crm\smart-ecommerce-kb
```

Cartella trasferita in `SmarteCommerceLab`:

```text
C:\Users\derad\OneDrive - drea\developer\WordPress-developer\Smart eMagazine\GitHUB\SmarteCommerceLab\kb.smartecommerce.it
```

Comandi principali:

```powershell
npm install
npm run build
```

Output statico:

```text
dist/
```

## Identita e UI

Nome piattaforma richiesto, case-sensitive:

```text
SeC kLeb
```

Richieste UI/brand ricevute:

- rimuovere il nome precedente `MEDI KLEB`;
- usare il logo Smart eCommerce/SeC fornito dall'utente;
- usare solo la favicon/logo allegato, con sfondo trasparente;
- usare il primary color di `smartecommerce.it`;
- mantenere il titolo `SeC kLeb` esattamente con maiuscole/minuscole indicate.

Risultato:

- `public/sec-kleb-logo.png`
- `public/favicon.png`
- titolo Starlight `SeC kLeb`
- colore primary `#e509f9`
- tema e meta color coerenti.

## Contenuti principali creati

La KB documenta:

- Manuale operativo AI;
- Matrice prodotti;
- Contesto training AI;
- Architettura ecosistema;
- Contratti tecnici;
- prodotti Smart eCommerce;
- guide operative;
- API e integrazioni;
- checklist di rilascio;
- manifest AI-HTML.

Prodotti documentati:

- iDash;
- Smart Bootstrap Manager;
- Smart Customizer Framework;
- Smart Builder Site;
- AI-HTML Theme;
- Smart AI Assistant;
- Smart AI Writer;
- Smart Site Login Personalize;
- Smart License Manager.

Rimozioni richieste:

- rimosso `Smart Daily CRM`;
- rimosso `L'Inserto` dalla guida/nav/sitemap.

## Indicizzazione AI

Problema segnalato:

> Perplexity dice che il sito non e navigabile.

Verifiche eseguite:

- home rispondeva `200 OK`;
- `robots.txt` permetteva indicizzazione;
- sitemap valida;
- pagina interna accessibile anche con user-agent `PerplexityBot`.

Migliorie aggiunte:

- `public/llms.txt`;
- `public/ai-index.md`;
- `robots.txt` esplicito per:
  - `PerplexityBot`;
  - `GPTBot`;
  - `ChatGPT-User`;
  - `ClaudeBot`;
  - `Claude-User`;
  - `Google-Extended`;
- doppia sitemap:
  - `https://kb.smartecommerce.it/sitemap-index.xml`;
  - `https://kb.smartecommerce.it/sitemap-0.xml`.

## Feedback plugin e correzioni KB

Feedback ricevuto da altri plugin/AI:

> nella KB pubblica e indicata la regola generale per AI Canvas: leggere il manifest AI-HTML e non inventare menu/risorse. La pagina Authoring AI Canvas menziona smart-logo e smart-menu solo nel contratto tecnico locale AI-HTML, non nella pagina KB pubblica indicizzata.

Interventi fatti:

- creata pagina pubblica `src/content/docs/api/ai-html-integration-manifest.md`;
- aggiunta in navigazione Starlight;
- aggiunta in `llms.txt`;
- aggiunta in `ai-index.md`;
- aggiornata sitemap con nuova pagina;
- aggiornati:
  - `ai/manuale-operativo.md`;
  - `ai/contesto-training.md`;
  - `guide/authoring-ai-canvas.md`;
  - `prodotti/ai-html-theme.md`;
  - `ecosistema/contratti-tecnici.md`;
  - `api/import-export-stack.md`.

Dettagli ora pubblici:

```html
<smart-logo variant="transparent" class="site-logo"></smart-logo>
<smart-menu location="naviga" class="site-menu" depth="3"></smart-menu>
<smart-social class="site-social-link"></smart-social>
<smart-contact field="email" link="true"></smart-contact>
<smart-addon provider="contact_form_7" id="123"></smart-addon>
```

Regola pubblicata:

- AI Canvas non deve inventare logo, menu, social, contatti, form o attachment quando il manifest espone una risorsa WordPress o AI-HTML gia configurata.
- Sul progetto Smart eCommerce la location menu operativa e `naviga`.
- La AI deve comunque leggere `resources.menus` nel manifest del sito.

## Endpoint documentati

```text
GET /wp-json/aihtml/v1/ai/integration-manifest
GET /wp-json/aihtml/v1/ai/addons
GET /wp-json/aihtml/v1/ai/introspection
GET /wp-json/aihtml/v1/ai/options
GET /wp-json/aihtml/v1/ai/menus
GET /wp-json/aihtml/v1/ai/code-slots
```

## Stato finale pubblicato

Build finale verificata:

- 29 pagine generate;
- nuova pagina `Manifest AI-HTML` inclusa;
- sitemap aggiornata;
- `llms.txt` aggiornato;
- `ai-index.md` aggiornato.

URL principali:

- `https://kb.smartecommerce.it/`
- `https://kb.smartecommerce.it/llms.txt`
- `https://kb.smartecommerce.it/ai-index.md`
- `https://kb.smartecommerce.it/api/ai-html-integration-manifest/`
- `https://kb.smartecommerce.it/guide/authoring-ai-canvas/`

Verifiche HTTP effettuate:

- logo/favicons `200 OK`;
- home `200 OK`;
- `robots.txt` leggibile;
- `llms.txt` leggibile;
- `ai-index.md` leggibile;
- nuova pagina Manifest AI-HTML leggibile;
- pagina Authoring AI Canvas contiene `smart-logo`, `smart-menu` e `naviga`;
- sitemap contiene `ai-html-integration-manifest`.

## File da non versionare

Non includere in GitHub:

- `node_modules/`;
- `dist/`;
- `.astro/`;
- `.env`;
- credenziali FTP/SSH;
- password Plesk;
- dump o file contenenti secret.

## Prossimi passi GitHub

La cartella e pronta per diventare repository autonomo:

```powershell
cd "C:\Users\derad\OneDrive - drea\developer\WordPress-developer\Smart eMagazine\GitHUB\SmarteCommerceLab\kb.smartecommerce.it"
git init
git add .
git commit -m "Add SeC kLeb knowledge base"
```

Prima del push creare repository GitHub dedicato o collegare un remote esistente.
