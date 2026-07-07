---
title: License API
description: Endpoint Smart License Manager per attivazioni, validazioni e download premium.
---

Smart License Manager espone API per prodotti premium e aggiornamenti.

## Base URL

```text
/wp-json/smartlm/v1
```

## Endpoint

```text
POST /licenses/activate/{license_key}
POST /licenses/deactivate/{activation_token}
GET  /licenses/validate/{activation_token}
GET  /software/{product_slug}?activation_token=...&version=...
GET  /software/download/{release_id}?token=...&exp=...&sig=...
```

## Payload attivazione

```json
{
  "product_slug": "smart-builder-site",
  "site_url": "https://example.com",
  "instance_hash": "stable-installation-hash"
}
```

## Sicurezza

- token installazione per attivazione;
- download firmati;
- scadenza breve URL download;
- validazione server-side.

## Regole per AI

Una AI puo testare endpoint in ambienti staging e documentare payload. Su produzione deve evitare azioni che creano, revocano o espongono licenze senza conferma.
