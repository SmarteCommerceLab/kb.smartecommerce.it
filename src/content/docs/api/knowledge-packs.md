---
title: KnowledgePack API
description: Catalogo canonico e versionato della conoscenza usata da Smart AI Studio.
---

La Knowledge Base pubblica i contratti approvati che Smart AI Studio puo usare
per pianificare e governare un sito. Il repository software resta separato: la
KB distribuisce conoscenza, non plugin o temi.

## Catalogo runtime

```http
GET https://kb.smartecommerce.it/v1/packs
```

La risposta contiene esclusivamente pack con manifest verificabile. Ogni
manifest dichiara:

- identificativo e versione immutabile;
- stato del ciclo di vita;
- locale e workflow supportati;
- prodotti richiesti e intervallo di compatibilita;
- documenti sorgente con SHA-256;
- regole operative sintetiche;
- digest SHA-256 dell'intero manifest.

Smart AI Studio confronta questi requisiti con le capability lette dal plugin
Smart AI Studio installato nel sito. Un pack sospeso, incompatibile o con digest
non valido non viene passato al provider AI.

## Stati

I pack disponibili al runtime sono `approved`. Gli stati `deprecated`,
`suspended` e `retired` restano esclusi dalle nuove generazioni salvo procedure
storiche esplicitamente governate.

## Evidenze

Ogni piano conserva almeno `pack_id`, `version` e `digest`. In questo modo una
generazione puo essere ricostruita senza dipendere dal contenuto corrente della
pagina pubblica.

## Sicurezza

Il catalogo non contiene API key, password, token WordPress, dati cliente,
backup, media o pacchetti ZIP. Le credenziali dei provider restano cifrate in
Smart AI Studio e non vengono inviate alla KB.
