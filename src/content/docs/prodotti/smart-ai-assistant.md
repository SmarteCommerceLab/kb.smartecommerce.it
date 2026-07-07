---
title: Smart AI Assistant
description: Assistant admin, strumenti sito e registry reset prodotti attivi.
---

Smart AI Assistant e il livello operativo per assistenza AI dentro l'amministrazione WordPress e il gateway controllato per agenti AI esterni. Lavora con strumenti sito, registry dei prodotti attivi, procedure controllate, audit e operations.

## Responsabilita

- Assistant admin.
- Tool operativi su sito e prodotti.
- Lettura dei registry reset disponibili.
- Supporto a procedure tecniche assistite.
- Gateway REST per ChatGPT, Claude, Perplexity, Codex e altri agenti esterni.
- Catalogo capabilities, audit tool call e operations tracciate.
- Reset autonomo delle sole impostazioni/cache/operations SAIA.

## Regole

L'assistant non deve orchestrare reset distruttivi cross-prodotto con logica propria. Deve chiamare gli endpoint o registry autonomi del prodotto proprietario dei dati e rispettare capability, nonce, Bearer token e policy definite localmente.

Smart AI Assistant resetta solo se stesso:

- `saia:factory`
- `saia:settings`
- `saia:cache`
- `saia:operations`

## Operativita AI

Una AI che lavora attraverso Smart AI Assistant deve:

1. chiamare `get_operational_context` o `GET /ai/context`;
2. leggere manifest, schema, capabilities e KB;
3. creare un piano con `POST /ai/plan` quando opera da client esterno;
4. usare operations per modifiche tracciate;
5. usare dry-run prima di operazioni strutturali;
6. chiedere conferma esplicita prima di esecuzioni reali;
7. modificare contenitore con AI-HTML solo se serve;
8. modificare contenuto pagina con SBS;
9. verificare output e riportare tool usati.

## Gateway AI esterno

Endpoint principali:

| Endpoint | Scopo |
| --- | --- |
| `GET /wp-json/smart-ai-assistant/v1/ai/context` | Contesto operativo del sito, stack Smart, KB, capabilities, policy. |
| `GET /wp-json/smart-ai-assistant/v1/ai/tools` | Tool SAIA disponibili e gruppi capabilities. |
| `GET /wp-json/smart-ai-assistant/v1/ai/openapi` | Schema OpenAPI per Custom GPT / Actions e client esterni. |
| `POST /wp-json/smart-ai-assistant/v1/ai/plan` | Piano non mutante a partire da un intento. |
| `POST /wp-json/smart-ai-assistant/v1/ai/execute` | Esecuzione controllata di un tool SAIA. |
| `GET /wp-json/smart-ai-assistant/v1/ai/operations` | Lista operations tracciate. |
| `POST /wp-json/smart-ai-assistant/v1/ai/operations` | Crea una operation da intento, tool e input. |
| `POST /wp-json/smart-ai-assistant/v1/ai/operations/{id}/confirm` | Conferma esplicita di una operation strutturale. |
| `POST /wp-json/smart-ai-assistant/v1/ai/operations/{id}/execute` | Esegue una operation tracciata. |

Accesso:

- admin WordPress autenticato con `manage_options`;
- oppure Bearer token gateway abilitato nelle impostazioni SAIA.

Il gateway non sostituisce i contratti dei prodotti. Li usa come livello di orchestrazione sicuro e leggibile da agenti esterni.

## Tool boundary

I tool SAIA sono un ponte operativo, non una scorciatoia per ignorare i contratti. Se un tool fallisce per prodotto non attivo, l'agente deve degradare con errore esplicito e non inventare endpoint.

## Test pilota demo

Sul sito pilota `https://demo.smartecommerce.it` sono stati verificati:

- `GET /ai/context`
- `GET /ai/openapi`
- `GET /ai/operations`
- `POST /ai/operations`
- `POST /ai/operations/{id}/execute`
- audit read-only con `get_operational_context`
- registry reset con `saia:operations`

## Documenti locali utili

- `smart-ai-assistant/SAIA-DEVELOPMENT-GUIDE.md`
- `smart-ai-assistant/knowledge/01-authoring-contract.md`
- `smart-ai-assistant/knowledge/03-design-and-tokens.md`
