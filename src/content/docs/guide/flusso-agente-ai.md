---
title: Flusso Agente AI
description: Procedura standard per una AI che deve modificare prodotti Smart eCommerce.
---

Questo flusso e obbligatorio per lavorare in autonomia mantenendo confini chiari.

## 1. Diagnosi

Identificare:

- sito o prodotto interessato;
- livello responsabile: tema, builder, runtime, Customizer, AI, login, licenze;
- file sorgente e documenti locali;
- effetto atteso;
- test disponibile.

## 2. Lettura minima

Leggere sempre:

1. pagina prodotto in questa KB;
2. documenti locali indicati;
3. changelog o development status se esistono;
4. file di codice direttamente coinvolti.

## 3. Modifica

Applicare cambiamenti piccoli e reversibili. Aggiornare documentazione e changelog quando cambia comportamento pubblico, endpoint, schema JSON, capability o workflow.

## 4. Verifica

Scegliere in base al prodotto:

- `npm.cmd run build` per KB e progetti Astro;
- lint PHP quando disponibile;
- `node --check` per JS standalone;
- test endpoint via `curl`;
- verifica HTTP/HTML per pagine pubbliche;
- controllo browser quando la modifica e visuale.

## 5. Deploy

Distribuire solo artefatti necessari. Per la KB pubblicare `dist/` su `kb.smartecommerce.it/httpdocs`.

## 6. Report finale

Il report deve indicare:

- cosa e stato cambiato;
- dove;
- comandi eseguiti;
- esito;
- URL verificati;
- rischi residui.
