---
title: AI Assistant Tools
description: Catalogo tool e confini operativi di Smart AI Assistant.
---

Smart AI Assistant porta lo sviluppo del sito dentro WordPress tramite chat admin, tool locali e un gateway REST per agenti AI esterni.

## Loop agentico

```text
Browser admin
-> admin-ajax.php action=saia_chat
-> proxy.php
-> provider AI
-> tool_use
-> saia_execute_tool()
-> tool_result
-> risposta finale
```

Il loop massimo e di 10 iterazioni. L'esecuzione tool e in-process: chiama funzioni PHP locali di AI-HTML, Smart Builder Site e Smart Reset.

## Tool principali

| Gruppo | Tool |
| --- | --- |
| Contesto operativo | `get_operational_context` |
| Lettura tema | `get_site_status`, `get_options_schema`, `get_available_hooks` |
| Opzioni/menu/pagine | `update_options`, `import_menus`, `create_page`, `list_content`, `update_post`, `set_front_page` |
| Code slots | `create_code_slot`, `list_code_slots`, `update_code_slot`, `delete_code_slot`, `toggle_code_slot` |
| Smart Builder Site | `sbs_get_context`, `sbs_get_widgets`, `sbs_get_page_builder`, `sbs_update_page_builder`, `sbs_list_blueprints`, `sbs_apply_blueprint` |
| Media/tassonomie | `list_media`, `upload_media`, `list_terms`, `create_term` |
| Smart Bootstrap Manager | `get_effects`, `update_effects`, `get_design_governance` |
| Knowledge locale | `list_knowledge`, `read_knowledge` |
| Deploy/reset | `deploy_project`, `reset_components`, `get_reset_registry` |

## Confini

Il tema AI-HTML gestisce contenitore, menu, header, footer e code slots. Smart Builder Site gestisce contenuti pagina e JSON builder. Smart Bootstrap Manager gestisce runtime visuale e motion.

## Sicurezza

- Richiede `manage_options`.
- Usa nonce AJAX.
- API key server-side.
- I tool scrivono tramite pipeline di sanitizzazione dei prodotti target.
- Reset e deploy distruttivi devono avere conferma umana.
- Gateway esterno con Bearer token opzionale.
- Operations tracciate per intenti/tool/input.
- Audit persistente dei tool eseguiti.
- `deploy_project` e `reset_components` fanno dry-run di default e richiedono `confirm="EXECUTE"` per l'esecuzione reale.

## Gateway REST

| Endpoint | Uso |
| --- | --- |
| `GET /wp-json/smart-ai-assistant/v1/ai/context` | Primo endpoint da chiamare: descrive sito, stack Smart, KB, capabilities, policy. |
| `GET /wp-json/smart-ai-assistant/v1/ai/tools` | Restituisce definizioni tool e capabilities. |
| `GET /wp-json/smart-ai-assistant/v1/ai/openapi` | Schema importabile in Custom GPT / Actions. |
| `POST /wp-json/smart-ai-assistant/v1/ai/plan` | Crea un piano non mutante. |
| `POST /wp-json/smart-ai-assistant/v1/ai/execute` | Esegue un tool singolo. |
| `POST /wp-json/smart-ai-assistant/v1/ai/operations` | Crea una operation tracciata. |
| `POST /wp-json/smart-ai-assistant/v1/ai/operations/{id}/confirm` | Conferma una operation strutturale. |
| `POST /wp-json/smart-ai-assistant/v1/ai/operations/{id}/execute` | Esegue una operation tracciata. |

## Flusso per AI esterne

```text
GET /ai/context
-> POST /ai/plan
-> POST /ai/operations
-> POST /ai/operations/{id}/execute con dry_run=true se scrittura/strutturale
-> POST /ai/operations/{id}/confirm se l'admin approva
-> POST /ai/operations/{id}/execute con dry_run=false e confirm=EXECUTE
-> audit
```

Nota: `/ai/openapi` puo essere pubblico per facilitare l'import in ChatGPT Actions. Non contiene credenziali e non esegue operazioni. Gli endpoint operativi richiedono comunque admin WordPress o Bearer token.

## Documento locale

- `smart-ai-assistant/SAIA-DEVELOPMENT-GUIDE.md`
