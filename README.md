# SeC kLab - Knowledge Base Smart eCommerce

Repository Astro/Starlight della Knowledge Base pubblica `kb.smartecommerce.it`.

La documentazione e pensata per due lettori principali:

- sviluppatori che lavorano sullo stack Smart eCommerce;
- agenti AI che devono capire prodotti, contratti tecnici, API e procedure operative senza inventare integrazioni non presenti.

## Stack

- Astro
- Starlight
- contenuti Markdown/MDX in `src/content/docs/`
- asset statici in `public/`
- output statico in `dist/`

URL pubblico:

```text
https://kb.smartecommerce.it/
```

## Comandi

Installa le dipendenze:

```powershell
npm install
```

Avvia il server locale:

```powershell
npm run dev
```

Genera la build statica:

```powershell
npm run build
```

Anteprima locale della build:

```powershell
npm run preview
```

Deploy FTP, dopo aver configurato le variabili ambiente locali:

```powershell
npm run deploy:ftp
```

## Struttura contenuti

Le pagine pubbliche sono in:

```text
src/content/docs/
```

Aree principali:

- `ai/`: manuale operativo AI, matrice prodotti, contesto training;
- `ecosistema/`: architettura e contratti tecnici;
- `prodotti/`: schede dei prodotti Smart eCommerce;
- `guide/`: procedure operative e guide sviluppatori;
- `api/`: endpoint, manifest, contratti JSON e integrazioni;
- `operazioni/`: checklist di rilascio.

La navigazione e configurata in:

```text
astro.config.mjs
```

Quando aggiungi una nuova pagina importante, aggiorna anche la sidebar Starlight se deve essere raggiungibile dalla navigazione principale.

## File per agenti AI

La KB espone risorse pensate per crawler e agenti AI:

```text
public/llms.txt
public/ai-index.md
public/robots.txt
```

Quando aggiungi o sposti contenuti rilevanti per agenti AI:

1. aggiorna la pagina Markdown/MDX in `src/content/docs/`;
2. aggiorna `astro.config.mjs` se la pagina deve apparire in sidebar;
3. aggiorna `public/llms.txt` con i link principali;
4. aggiorna `public/ai-index.md` con il contesto sintetico;
5. esegui `npm run build` e verifica che la sitemap generata includa la pagina.

Regola editoriale chiave: gli agenti AI devono leggere i manifest e i contratti pubblicati. Non devono inventare menu, logo, social, contatti, form, attachment o risorse WordPress quando il manifest espone gia una risorsa configurata.

## Manifest AI-HTML

Pagina pubblica principale:

```text
https://kb.smartecommerce.it/api/ai-html-integration-manifest/
```

Endpoint documentati:

```text
GET /wp-json/aihtml/v1/ai/integration-manifest
GET /wp-json/aihtml/v1/ai/addons
GET /wp-json/aihtml/v1/ai/introspection
GET /wp-json/aihtml/v1/ai/options
GET /wp-json/aihtml/v1/ai/menus
GET /wp-json/aihtml/v1/ai/code-slots
```

Sul progetto Smart eCommerce la location menu operativa e `naviga`, ma la regola corretta resta leggere `resources.menus` dal manifest del sito.

## Deploy

Il progetto genera un sito statico in:

```text
dist/
```

Lo script disponibile e:

```text
scripts/deploy-ftp.ps1
```

Variabili ambiente richieste:

```powershell
$env:KB_FTP_HOST='kb.smartecommerce.it'
$env:KB_FTP_USER='...'
$env:KB_FTP_PASS='...'
$env:KB_FTP_REMOTE_ROOT='httpdocs'
```

In alternativa copia `.env.example` in `.env` per documentare i valori locali, ma non committare mai `.env`.

## Sicurezza

Non versionare:

- credenziali FTP, SSH, Plesk o WordPress;
- `.env`;
- dump, backup o export contenenti secret;
- `node_modules/`;
- `dist/`;
- `.astro/`.

`.env.example` puo contenere solo nomi di variabili e valori non sensibili.

## GitHub

Il repository locale e gia inizializzato. Prima di pubblicare:

```powershell
git status --short
npm run build
```

Poi collega un remote GitHub dedicato o esistente:

```powershell
git remote add origin <url-repository>
git push -u origin master
```

Non inserire secret nel repository remoto.

## Contesto operativo

Il file `CHAT-TRANSFER.md` contiene il trasferimento della chat originaria: decisioni, modifiche gia effettuate, note di deploy, feedback su indicizzazione AI e prossimi passi. Leggilo prima di interventi strutturali.
