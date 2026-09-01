---
title: Smart Login API
description: API AI di Smart Site Login Personalize.
---

Smart Site Login Personalize espone API per configurare la pagina login via JSON.

## Base URL

```text
/wp-json/sslpp/v1/ai/
```

## Autenticazione

- utente autenticato;
- capability `manage_options`;
- header `X-WP-Nonce` con nonce REST WordPress.

## Formato dati

Le API usano dot-notation flat:

```json
{
  "image.background": 123,
  "image.logo": 456,
  "login.login_template": "centered",
  "login.form_bg_color": "#ffffff",
  "google.enabled": true,
  "redirects.administrator": "https://example.com/wp-admin/"
}
```

## Regole per AI

Leggere prima lo schema, inviare solo campi da modificare e non alterare
`wp-login.php` o redirect ruoli senza verifica. `google.client_secret` e
scrivibile solo da un amministratore autorizzato, viene oscurato in lettura e
non compare nelle esportazioni JSON. L'assenza del campo durante un'importazione
preserva il valore gia configurato.

## Fonte locale

- `smart-site-login-personalize/docs/README.md`
