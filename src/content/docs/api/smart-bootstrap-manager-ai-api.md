---
title: API AI Smart Bootstrap Manager
description: Endpoint, autenticazione, schema e payload per interrogare e governare SBM con una AI.
---

Smart Bootstrap Manager `1.8.5` espone un contratto REST/JSON per agenti AI, Smart AI Studio, plugin consumer e strumenti OpenAPI.

Namespace:

```text
/wp-json/smart-bootstrap-manager/v1
```

## Accesso

Gli endpoint OpenAPI sono pubblici in sola lettura. Contesto, configurazione e operazioni richiedono invece un'identita autorizzata:

- `smart_ai_can_read($request)` per le letture;
- `smart_ai_can_write($request)` per le scritture;
- in assenza del core AI condiviso, capability WordPress `manage_options`.

Una chat ChatGPT o Claude priva di un connettore autenticato puo studiare OpenAPI e KB, ma non puo leggere o modificare direttamente la configurazione del sito. Smart AI Studio e il plugin WordPress devono fornire credenziali e trasporto.

## Endpoint operativi

| Metodo | Endpoint | Scopo |
| --- | --- | --- |
| `GET` | `/ai/context` | Versioni, runtime, token e contesto del plugin. |
| `GET` | `/ai/capabilities` | Capability runtime, librerie ed esito compatibilita. |
| `GET` | `/ai/consumer-contract?consumer=ai-html` | Contratto destinato ad AI-HTML. |
| `GET` | `/ai/schema` | Campi scrivibili, tipi, default, range e valori correnti. |
| `GET` | `/ai/options` | Configurazione corrente completa. |
| `POST` | `/ai/validate` | Validazione senza persistenza. |
| `POST/PATCH/PUT` | `/ai/options` | Aggiornamento completo o parziale. |
| `GET` | `/ai/options/export` | Esportazione portabile. |
| `POST` | `/ai/options/import` | Importazione completa o parziale. |
| `POST` | `/ai/options/reset` | Ripristino dei default, solo su conferma esplicita. |
| `GET` | `/ai/presets` | Preset grafici, motion ed effetti. |
| `POST` | `/ai/sources/refresh` | Invalidazione cache delle fonti. |
| `POST` | `/ai/sources/check` | Controllo versione Bootstrap disponibile. |
| `POST` | `/ai/sources/download` | Download locale degli asset Bootstrap. |
| `GET` | `/ai/audit` | Ultime operazioni AI/API. |
| `GET` | `/ai/revisions` | Revisioni create prima delle scritture. |

## OpenAPI pubblico

- [Swagger UI](https://repository.smartecommerce.it/swagger/smart-bootstrap-manager/)
- [OpenAPI JSON](https://repository.smartecommerce.it/api-docs/plugins/smart-bootstrap-manager/openapi.json)
- [OpenAPI YAML](https://repository.smartecommerce.it/api-docs/plugins/smart-bootstrap-manager/openapi.yaml)

Sul singolo sito sono disponibili anche:

```text
GET /wp-json/smart-bootstrap-manager/v1/ai/openapi
GET /wp-json/smart-bootstrap-manager/v1/ai/openapi.yaml
GET /wp-json/smart-bootstrap-manager/v1/openapi
GET /wp-json/smart-bootstrap-manager/v1/openapi.yaml
```

## Esempio di lettura

```http
GET /wp-json/smart-bootstrap-manager/v1/ai/options
Authorization: Bearer <credenziale-sito>
```

## Esempio di modifica parziale

Prima validare:

```http
POST /wp-json/smart-bootstrap-manager/v1/ai/validate
Content-Type: application/json
Authorization: Bearer <credenziale-sito>

{
  "options": {
    "smart_bootstrap_option_color_primary": "#102599",
    "smart_bootstrap_option_typography_headings_weight": "700",
    "smart_bootstrap_option_layout_section_padding_y": "5"
  }
}
```

Solo dopo approvazione applicare lo stesso payload con `PATCH /ai/options`.

## Gruppi governati

- colori e palette Bootstrap;
- tipografia e Google Fonts;
- spacing, container, grid e radius;
- dimensioni dei componenti;
- sorgenti Bootstrap CDN/local;
- librerie ed effetti motion;
- design governance per i consumer.

I valori esatti non vanno inventati: devono essere letti ogni volta da `/ai/schema`.

## Regole di sicurezza

1. Non inserire API key nei prompt, nel markup o nei JSON persistenti.
2. Validare prima di ogni scrittura non banale.
3. Mostrare proposta e differenze prima della conferma.
4. Consultare audit e revisioni dopo l'esecuzione.
5. Usare reset, import sostitutivi e download fonti solo su richiesta esplicita.
