---
title: Smart Site Login Personalize
description: Plugin WordPress per login personalizzata, OAuth Google e redirect post-login.
---

Smart Site Login Personalize personalizza la schermata di login WordPress con template, media, stile form, URL personalizzata, Google OAuth e redirect per ruolo.

## Funzioni

- template `custom`, `classic-right`, `centered`, `split`, `fullscreen`;
- preset colore light, dark, glass, corporate;
- login URL personalizzata;
- blocco opzionale di `wp-login.php`;
- Google OAuth;
- redirect post-login per ruolo;
- preview admin;
- import/export JSON.

## REST API

Base:

```text
/wp-json/sslpp/v1/ai/
```

Le API richiedono utente autenticato con `manage_options` e nonce REST.

## Regole per AI

Una AI puo configurare campi in whitelist usando dot-notation. Non deve inserire segreti OAuth o cambiare redirect critici senza autorizzazione esplicita.

## Documenti locali utili

- `smart-site-login-personalize/docs/README.md`
- `smart-site-login-personalize/docs/AI-CONTEXT.md`
- `smart-site-login-personalize/sdk/README.md`
