---
title: Smart AI Gateway Hub API
description: API centrale multi-sito per inoltrare richieste AI ai Gateway SAIA registrati.
---

Smart AI Gateway Hub espone un'unica API centrale per agenti esterni. Ogni richiesta indica la chiave del sito (`site`), non il token del sito.

## Autenticazione

Lo schema OpenAPI e pubblico:

```text
GET /wp-json/smart-ai-gateway-hub/v1/openapi
```

Tutti gli endpoint operativi richiedono:

```http
Authorization: Bearer HUB_TOKEN
```

## Lista siti

```http
GET /wp-json/smart-ai-gateway-hub/v1/sites
```

Risposta:

```json
{
  "sites": [
    {
      "key": "demo",
      "label": "Demo Smart eCommerce",
      "base_url": "https://demo.smartecommerce.it"
    }
  ]
}
```

## Contesto sito

```http
POST /wp-json/smart-ai-gateway-hub/v1/context
Content-Type: application/json

{
  "site": "demo"
}
```

L'Hub inoltra a:

```text
https://demo.smartecommerce.it/wp-json/smart-ai-assistant/v1/ai/context
```

## Piano

```http
POST /wp-json/smart-ai-gateway-hub/v1/plan
Content-Type: application/json

{
  "site": "demo",
  "intent": "Ricostruire la homepage con SBS e AI Canvas"
}
```

## Operations

Creazione:

```http
POST /wp-json/smart-ai-gateway-hub/v1/operations
Content-Type: application/json

{
  "site": "demo",
  "intent": "Lettura contesto operativo",
  "tool": "get_operational_context",
  "input": {}
}
```

Lista:

```http
GET /wp-json/smart-ai-gateway-hub/v1/operations?site=demo
```

Conferma:

```http
POST /wp-json/smart-ai-gateway-hub/v1/operations/{id}/confirm
Content-Type: application/json

{
  "site": "demo"
}
```

Esecuzione:

```http
POST /wp-json/smart-ai-gateway-hub/v1/operations/{id}/execute
Content-Type: application/json

{
  "site": "demo",
  "input": {
    "dry_run": true
  }
}
```

## Regola anti-SSRF

L'Hub non accetta URL arbitrari nelle richieste operative. Accetta solo `site` registrati nelle impostazioni admin.
