---
title: Smart AI Gateway Hub
description: Gateway centrale multi-sito per collegare ChatGPT e agenti AI a piu siti Smart AI Assistant.
---

Smart AI Gateway Hub e il livello centrale multi-sito dello stack AI Smart eCommerce.

Serve quando un unico Custom GPT o agente AI deve lavorare con piu siti WordPress che espongono Smart AI Assistant Gateway.

```text
ChatGPT / Custom GPT
-> Smart AI Gateway Hub
-> Smart AI Assistant Gateway del sito selezionato
-> AI-HTML / SBS / SBM / SCF
```

## Responsabilita

- Esporre un unico schema OpenAPI centrale.
- Mantenere un registry server-side dei siti Smart.
- Conservare i token dei siti cliente senza esporli a ChatGPT.
- Inoltrare richieste context, plan e operations al sito selezionato.
- Fornire audit minimo delle chiamate proxy.

## Cosa non fa

Smart AI Gateway Hub non modifica direttamente i siti.

Non deve conoscere API interne di AI-HTML, SBS, SBM o SCF. Deve inoltrare solo alle API ufficiali di Smart AI Assistant Gateway installato sul sito cliente.

## Configurazione

Ogni sito registrato ha:

```json
{
  "key": "demo",
  "label": "Demo Smart eCommerce",
  "base_url": "https://demo.smartecommerce.it",
  "token": "TOKEN_GATEWAY_SAIA_DEL_SITO",
  "active": true
}
```

ChatGPT usa solo il token dell'Hub. Il token del sito resta nel backend WordPress dell'Hub.

## Endpoint Hub

| Endpoint | Scopo |
| --- | --- |
| `GET /wp-json/smart-ai-gateway-hub/v1/openapi` | Schema OpenAPI pubblico per ChatGPT Actions. |
| `GET /wp-json/smart-ai-gateway-hub/v1/sites` | Lista siti registrati, senza token. |
| `POST /wp-json/smart-ai-gateway-hub/v1/context` | Legge il contesto operativo del sito selezionato. |
| `POST /wp-json/smart-ai-gateway-hub/v1/plan` | Crea un piano sul sito selezionato. |
| `GET /wp-json/smart-ai-gateway-hub/v1/operations?site=demo` | Lista operations del sito. |
| `POST /wp-json/smart-ai-gateway-hub/v1/operations` | Crea una operation sul sito. |
| `POST /wp-json/smart-ai-gateway-hub/v1/operations/{id}/confirm` | Conferma una operation sul sito. |
| `POST /wp-json/smart-ai-gateway-hub/v1/operations/{id}/execute` | Esegue una operation sul sito. |

## Flusso AI multi-sito

1. `smartHubListSites`
2. selezione `site`
3. `smartHubGetContext`
4. `smartHubCreatePlan`
5. `smartHubCreateOperation`
6. dry-run/confirm/execute tramite operation del sito selezionato

## Confini di sicurezza

- L'Hub accetta solo chiavi sito registrate.
- L'Hub non accetta URL arbitrari dal prompt.
- I token dei siti non vengono restituiti dalle API.
- Le regole dry-run/conferma restano applicate dal Gateway SAIA del sito cliente.
