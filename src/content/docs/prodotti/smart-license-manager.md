---
title: Smart License Manager
description: Gestione licenze, prodotti, release premium e download firmati.
---

Smart License Manager e il plugin server-side per gestire licenze e update premium dei prodotti Smart eCommerce.

## Funzioni

- dashboard KPI;
- CRUD prodotti;
- emissione licenze;
- gestione release;
- attivazione e disattivazione licenze;
- validazione token;
- URL download firmate e a scadenza breve.

## Endpoint REST

Base:

```text
/wp-json/smartlm/v1
```

Endpoint principali:

```text
POST /licenses/activate/{license_key}
POST /licenses/deactivate/{activation_token}
GET  /licenses/validate/{activation_token}
GET  /software/{product_slug}?activation_token=...&version=...
GET  /software/download/{release_id}?token=...&exp=...&sig=...
```

## Regole per AI

Una AI puo documentare, validare schema e preparare release draft. Non deve generare licenze live, invalidare attivazioni, pubblicare download o modificare prezzi senza conferma esplicita.

## Documenti locali utili

- `smart-license-manager/README.md`
- `smart-license-manager/sdk/README.md`
- `smart-license-manager/docs/LICENSING-MODEL-PHILOSOPHY.md`
