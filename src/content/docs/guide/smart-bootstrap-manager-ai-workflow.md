---
title: Governare SBM con una AI
description: Procedura sicura per leggere, proporre, validare e applicare modifiche Smart Bootstrap Manager.
---

Questa procedura vale per Smart AI Studio e per qualsiasi agente dotato di accesso autenticato al sito WordPress.

## Flusso obbligatorio

### 1. Leggi il contesto

```text
GET /wp-json/smart-bootstrap-manager/v1/ai/context
GET /wp-json/smart-bootstrap-manager/v1/ai/capabilities
```

Verifica versione, runtime Bootstrap, fonti asset, modalità tema, librerie ed eventuali incompatibilita.

### 2. Leggi lo schema

```text
GET /wp-json/smart-bootstrap-manager/v1/ai/schema
```

Lo schema e la fonte autorevole per chiavi, tipi, range, enum, default e valori correnti.

### 3. Leggi il contratto consumer

Quando la modifica coinvolge AI-HTML:

```text
GET /wp-json/smart-bootstrap-manager/v1/ai/consumer-contract?consumer=ai-html
```

AI-HTML deve consumare token e asset SBM senza duplicare Bootstrap, GSAP o un secondo design system.

### 4. Prepara una proposta minima

Modifica solo i campi necessari. Descrivi:

- valore corrente;
- valore proposto;
- pagine e componenti coinvolti;
- rischio responsive, contrasto o motion;
- modalità di verifica.

### 5. Valida senza salvare

```text
POST /wp-json/smart-bootstrap-manager/v1/ai/validate
```

Correggi ogni campo rifiutato prima di chiedere conferma.

### 6. Mostra diff e chiedi conferma

Nessuna scrittura deve essere nascosta dentro una risposta conversazionale. L'utente deve sapere quali token cambiano e con quale effetto.

### 7. Applica

```text
PATCH /wp-json/smart-bootstrap-manager/v1/ai/options
```

Usa `POST` o `PUT` solo quando il contratto richiede un payload completo.

### 8. Verifica

Rileggi `/ai/options`, ispeziona frontend desktop/mobile e controlla:

- contrasto e leggibilita;
- container e breakpoint;
- pulsanti, form, card e navigazione;
- `prefers-reduced-motion`;
- assenza di Bootstrap o GSAP duplicati;
- coerenza AI-HTML e Smart Builder Site.

### 9. Audit e revisione

```text
GET /wp-json/smart-bootstrap-manager/v1/ai/audit
GET /wp-json/smart-bootstrap-manager/v1/ai/revisions
```

Registra esito, versione e revisione nel job Smart AI Studio.

## Cosa appartiene a SBM

| Richiesta | Prodotto proprietario |
| --- | --- |
| Palette, font, spacing, radius | SBM |
| Bootstrap, fonti CSS/JS, tema light/dark | SBM |
| Motion ed effetti dichiarativi | SBM |
| Header, footer, menu e risorse globali | AI-HTML |
| Struttura e contenuti delle pagine | Smart Builder Site |
| Controlli Customizer riutilizzabili | Smart Customizer Frameworks |

## Operazioni da non automatizzare senza conferma

- reset globale;
- import in modalita replace;
- cambio sorgente CDN/local;
- download o aggiornamento Bootstrap;
- attivazione di motion globale;
- variazione radicale della palette;
- modifica delle API key.

## Uso da ChatGPT o Claude classici

Una chat commerciale puo generare proposte conformi leggendo questa KB e OpenAPI. Per eseguire sul sito serve però uno dei seguenti ponti:

- Smart AI Studio con sito collegato;
- plugin Smart AI Studio con credenziali sito separate;
- connettore/tool autenticato conforme al contratto REST.

Senza questo ponte la chat deve fermarsi a JSON, istruzioni e diff proposti.
