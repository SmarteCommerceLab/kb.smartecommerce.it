---
title: Guida Sviluppatori
description: Workflow tecnico per sviluppare prodotti Smart eCommerce senza rompere i contratti.
---

Questa guida definisce il modo corretto di sviluppare nello Smart Stack.

## Prima di sviluppare

1. Identificare il prodotto proprietario.
2. Leggere pagina prodotto nella KB.
3. Leggere documenti locali indicati.
4. Controllare changelog e status.
5. Verificare se esiste schema JSON o endpoint REST.

## Regole di ownership

- AI-HTML non deve diventare page builder.
- Smart Builder Site non deve possedere header, footer o menu.
- Smart Bootstrap Manager non deve renderizzare contenuti pagina.
- Smart Customizer Framework non deve salvare logica business proprietaria.
- Smart AI Assistant deve usare i tool dei prodotti, non bypassarli.
- Smart License Manager e l'unico proprietario di licenze e release premium.

## Quando aggiornare documentazione

Aggiornare KB e documenti locali se cambia:

- endpoint REST;
- schema JSON;
- capability;
- workflow admin;
- campo configurabile;
- formato import/export;
- dipendenza runtime;
- comportamento pubblico.

## Verifiche consigliate

| Tipo modifica | Verifica |
| --- | --- |
| PHP | lint PHP e smoke test WordPress |
| JS | `node --check` quando applicabile |
| CSS/UI | browser desktop/mobile, no overflow |
| REST API | `curl` con metodo, payload e status atteso |
| JSON builder | validazione schema e rendering pagina |
| KB Astro | `npm.cmd run build` |
| Deploy statico | HTTP `200`, sitemap, robots, asset ricerca |

## Standard di rilascio

Un rilascio completo include codice, changelog, documentazione, build/test, pacchetto pulito e verifica su staging o produzione.
