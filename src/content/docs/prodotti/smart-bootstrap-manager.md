---
title: Smart Bootstrap Manager
description: Runtime Bootstrap, token visuali, librerie UI/UX e motion system.
---

Smart Bootstrap Manager `1.8.5` e la sorgente unica per Bootstrap 5.3.8, token CSS, palette, tipografia, librerie UI/UX e runtime motion dell'ecosistema Smart eCommerce.

## Responsabilita

- Fornire Bootstrap e componenti condivisi.
- Gestire token CSS, palette e tipografia.
- Esporre librerie UI/FX senza duplicazioni.
- Eseguire effetti dichiarati tramite attributi `data-sbin-*`.
- Governare compliance visuale e `prefers-reduced-motion`.

## Regola di integrazione

Tema e plugin consumer non devono caricare copie proprie di Bootstrap o GSAP se SBM e attivo. Devono consumare i contratti SBM e produrre markup compatibile.

## Operativita AI

SBM e interrogabile e modificabile tramite il namespace REST:

```text
/wp-json/smart-bootstrap-manager/v1
```

Una AI autenticata deve seguire il flusso `context -> schema -> validate -> confirm -> update -> verify`. Consulta [API AI Smart Bootstrap Manager](/api/smart-bootstrap-manager-ai-api/) e [Governare SBM con una AI](/guide/smart-bootstrap-manager-ai-workflow/).

Una AI puo:

- aggiornare token e preset documentati;
- correggere compliance motion;
- documentare librerie integrate;
- verificare che i consumer non duplicano asset;
- proporre effetti con fallback content-first.

Una AI non deve:

- spostare responsabilita di rendering widget dentro SBM;
- aggiungere librerie globali senza contratto e changelog;
- forzare motion critico senza `prefers-reduced-motion`;
- cambiare palette dominante senza verificare pagine consumer.

## Verifica

- nessun doppio Bootstrap;
- attributi `data-sbin-*` interpretati correttamente;
- degrado senza JavaScript accettabile;
- documentazione librerie aggiornata.

## Contratto AI-HTML

AI-HTML deve leggere il consumer contract SBM e usare i token runtime `--bs-*` e `--sbin-*`. Non deve caricare una seconda copia di Bootstrap, sostituire la palette con token paralleli o inizializzare librerie motion gia governate da SBM.

```text
GET /wp-json/smart-bootstrap-manager/v1/ai/consumer-contract?consumer=ai-html
```

La specifica centrale e disponibile nello [Swagger SBM](https://repository.smartecommerce.it/swagger/smart-bootstrap-manager/).

## Documenti locali utili

- `smart-bootstrap-manager/INTEGRATION-GUIDE.md`
- `smart-bootstrap-manager/MOTION-EFFECTS-CATALOG.md`
- `smart-bootstrap-manager/COMPLIANCE-GUIDE-2026.md`
- `smart-bootstrap-manager/SMART-BUILDER-SITE-INTEGRATION.md`
- `smart-bootstrap-manager/LIBRARIES-OFFICIAL-REFERENCES.md`
