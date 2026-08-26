---
title: Gateway ChatGPT storico
description: Riferimento storico del collegamento diretto via Actions, non usato dal flusso consumer attuale.
---

Questa pagina conserva il riferimento tecnico del precedente collegamento diretto tra ChatGPT e WordPress tramite Actions/OpenAPI. Non descrive l'architettura consumer attuale.

:::caution[Percorso storico, non proseguire per nuovi siti]
Il percorso Custom GPT Actions/connector/MCP e stato scartato come esperienza consumer. Per generare codice dalla normale chat usare [ChatGPT e Claude dalla chat classica](/guide/ai-commerciali-chat-classica/) con il pacchetto **Contesto per AI**. Per discovery automatica, scelta della AI privata o di provider commerciali, preview, conferma, esecuzione e rollback usare [Smart AI Studio](/guide/attivare-smart-ai-studio/).
:::

## Obiettivo

Creare un agente ChatGPT capace di lavorare con qualsiasi sito Smart eCommerce che espone il Gateway SAIA.

```text
ChatGPT / Custom GPT
-> OpenAPI / Actions
-> Smart AI Assistant Gateway
-> AI-HTML / SBS / SBM / SCF
-> WordPress
```

ChatGPT non deve chiamare direttamente endpoint WordPress o plugin specifici. Deve passare dal Gateway SAIA.

## Requisiti sito

Sul sito devono essere presenti:

- WordPress REST API attiva;
- Smart AI Assistant installato e attivo;
- endpoint `smart-ai-assistant/v1` registrati;
- utente admin autenticato o Bearer token gateway;
- stack Smart installato secondo il contesto del sito.

Endpoint di controllo:

```text
https://example.com/wp-json/smart-ai-assistant/v1/ai/context
https://example.com/wp-json/smart-ai-assistant/v1/ai/openapi
```

`/ai/openapi` e leggibile pubblicamente per consentire a ChatGPT Actions di importare lo schema. Gli endpoint operativi restano protetti da admin WordPress o Bearer token.

## Configurazione token

Nel sito WordPress:

1. aprire Smart AI Assistant;
2. andare in Impostazioni;
3. abilitare Gateway AI esterno;
4. impostare un token lungo e casuale;
5. salvare.

Il token va usato come:

```http
Authorization: Bearer TOKEN
```

Non usare password admin reali nei prompt o nella documentazione. Le application password servono solo per test controllati e vanno revocate dopo l'uso.

## Import OpenAPI in ChatGPT Actions

Nel Custom GPT:

1. aprire Actions;
2. importare lo schema:

```text
https://example.com/wp-json/smart-ai-assistant/v1/ai/openapi
```

3. configurare autenticazione Bearer;
4. salvare;
5. testare prima solo operazioni read-only.

## Prompt consigliato

```text
Sei un agente operativo Smart eCommerce.
Prima di qualsiasi azione chiama smartGetOperationalContext.
Poi crea sempre un piano con smartCreateOperationPlan.
Per modifiche strutturali usa operations, dry-run e conferma esplicita.
Non chiamare direttamente API WordPress diverse dal Gateway Smart AI Assistant.
Rispondi in italiano.
Non inventare ID, media, nonce, credenziali, licenze o capability.
```

## Flusso operativo

1. `smartGetOperationalContext`
2. `smartCreateOperationPlan`
3. `smartCreateOperation`
4. `smartExecuteOperation` in modalita dry-run se la operation scrive o modifica struttura
5. conferma admin
6. `smartConfirmOperation`
7. `smartExecuteOperation` con `dry_run=false` e `confirm="EXECUTE"`
8. lettura audit

## Test sicuro iniziale

Chiedere a ChatGPT:

```text
Leggi il contesto operativo del sito e dimmi quali prodotti Smart sono attivi.
```

Poi:

```text
Crea una operation di sola lettura per leggere il contesto operativo ed eseguila.
```

Il tool previsto e `get_operational_context`. Non deve modificare contenuti, impostazioni o reset.

## Test pilota

Sul sito `https://demo.smartecommerce.it` sono stati verificati:

- autenticazione REST con application password;
- `GET /ai/context`;
- `GET /ai/openapi`;
- `GET /ai/operations`;
- operation read-only con `get_operational_context`;
- audit read-only;
- reset registry con `saia:operations`.

## Multi-sito

Il modello e riutilizzabile su piu siti Smart eCommerce.

Fase iniziale:

- ogni sito espone il proprio OpenAPI;
- ogni Custom GPT/Action punta al sito specifico.

Fase avanzata:

- un gateway centrale Smart eCommerce riceve una chiave sito (`site`) e usa token salvati server-side;
- ChatGPT parla con il gateway centrale;
- il gateway centrale inoltra al SAIA Gateway del sito cliente.

La fase avanzata e implementata dal progetto Smart AI Gateway Hub. Vedi [Smart AI Gateway Hub API](/api/smart-ai-gateway-hub-api/).
