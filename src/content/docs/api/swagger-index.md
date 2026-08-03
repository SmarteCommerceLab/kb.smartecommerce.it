---
title: API e Swagger
description: Indice centrale dei contratti OpenAPI e delle interfacce Swagger dei prodotti Smart eCommerce.
---

Questa sezione raccoglie i contratti API pubblicati su Smart Repository.
La UI Swagger resta centralizzata, mentre ogni prodotto mantiene il proprio
contratto OpenAPI in formato YAML e JSON.

Il catalogo della conoscenza non appartiene al repository software. I manifest
versionati usati dalla AI sono pubblicati dalla [KnowledgePack API](/api/knowledge-packs/)
e dal relativo endpoint runtime `https://kb.smartecommerce.it/v1/packs`.

## Catalogo centrale

- [Indice Swagger prodotti](https://repository.smartecommerce.it/swagger/products/)
- [Swagger UI centrale](https://repository.smartecommerce.it/swagger/)
- [Indice machine-readable](https://repository.smartecommerce.it/api-docs/index.json)

## Prodotti disponibili

| Prodotto | Tipo | Swagger | YAML | JSON |
| --- | --- | --- | --- | --- |
| Smart Bootstrap Manager | Plugin | [Apri](https://repository.smartecommerce.it/swagger/smart-bootstrap-manager/) | [YAML](https://repository.smartecommerce.it/api-docs/plugins/smart-bootstrap-manager/openapi.yaml) | [JSON](https://repository.smartecommerce.it/api-docs/plugins/smart-bootstrap-manager/openapi.json) |
| Smart Site Login Personalize | Plugin | [Apri](https://repository.smartecommerce.it/swagger/smart-site-login-personalize/) | [YAML](https://repository.smartecommerce.it/api-docs/plugins/smart-site-login-personalize/openapi.yaml) | [JSON](https://repository.smartecommerce.it/api-docs/plugins/smart-site-login-personalize/openapi.json) |
| AI-HTML | Tema | [Apri](https://repository.smartecommerce.it/swagger/ai-html/) | [YAML](https://repository.smartecommerce.it/api-docs/themes/ai-html/openapi.yaml) | [JSON](https://repository.smartecommerce.it/api-docs/themes/ai-html/openapi.json) |
| 1oT Daily Platform | App | [Apri](https://repository.smartecommerce.it/swagger/1ot-dailyplatform/) | [YAML](https://repository.smartecommerce.it/api-docs/apps/1ot-dailyplatform/openapi.yaml) | [JSON](https://repository.smartecommerce.it/api-docs/apps/1ot-dailyplatform/openapi.json) |

## Test verso un sito target

La Swagger UI centrale accetta due parametri:

```text
url=/api-docs/{tipo}/{slug}/openapi.yaml
server=https://dominio.it
```

Esempio:

```text
https://repository.smartecommerce.it/swagger/?url=/api-docs/plugins/smart-bootstrap-manager/openapi.yaml&server=https://dy22.it
```

Se `server` non termina con `/wp-json`, la UI lo normalizza automaticamente.

## Standard per nuovi prodotti

Ogni nuovo plugin, tema o applicazione deve pubblicare:

- `https://repository.smartecommerce.it/api-docs/{tipo}/{slug}/openapi.yaml`
- `https://repository.smartecommerce.it/api-docs/{tipo}/{slug}/openapi.json`
- `https://repository.smartecommerce.it/swagger/{slug}/`

Il prodotto deve essere registrato anche in:

```text
https://repository.smartecommerce.it/api-docs/index.json
```

Per plugin e temi WordPress, il manifest update deve includere:

```json
{
  "documentation_url": "https://repository.smartecommerce.it/swagger/{slug}/",
  "openapi_yaml": "https://repository.smartecommerce.it/api-docs/{tipo}/{slug}/openapi.yaml",
  "openapi_json": "https://repository.smartecommerce.it/api-docs/{tipo}/{slug}/openapi.json"
}
```
