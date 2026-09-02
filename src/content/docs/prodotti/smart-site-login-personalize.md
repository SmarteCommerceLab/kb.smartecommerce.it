---
title: Smart Login
description: Identity, Security & Design for WordPress.
---

Smart Login e un prodotto **Premium autonomo**. Non dipende da
Smart Bootstrap Manager e mantiene una responsabilita distinta: governare
l'esperienza di accesso WordPress, la sua identita visiva e i flussi successivi
all'autenticazione. Puo quindi essere venduto e installato anche fuori dallo
stack Bootstrap Smart eCommerce.

## Panoramica prodotto

Il posizionamento ufficiale e **Identity, Security & Design for WordPress**. La
pagina di configurazione separa il lavoro in tab contestuali: template, media,
stile, posizione, URL login, Identity/OAuth, sicurezza, redirect e JSON. Le tab
sono navigabili da tastiera, mantengono un collegamento diretto
tramite URL e diventano scorrevoli sui display stretti. La sidebar del plugin
rimane invece la navigazione tra le aree principali del prodotto.

## Funzioni

- template `custom`, `classic-right`, `centered`, `split`, `fullscreen`,
  `commerce`, `membership` e `corporate-secure`;
- preset colore light, dark, glass, corporate;
- login URL personalizzata;
- blocco opzionale di `wp-login.php`;
- OAuth Google, Microsoft, GitHub e Apple;
- policy 2FA basata sul motore ufficiale WordPress Two-Factor, con TOTP e codici
  di recupero;
- rate limiting, Cloudflare Turnstile e Google reCAPTCHA;
- regole di accesso per ruolo, indirizzo IP e fascia oraria;
- audit locale ricercabile, retention configurabile ed export CSV;
- redirect post-login per ruolo;
- preview admin;
- import/export JSON;
- font di sistema oppure Inter, Roboto, Lato, Montserrat, Poppins e Playfair Display;
- pagina Sistema con aggiornamenti, manifest e Compatibility Lab.

La procedura completa per creare le applicazioni nei portali dei provider,
recuperare i parametri e collaudare le callback e disponibile in
[Configurare OAuth in Smart Login](/guide/configurare-oauth-smart-login/).

## Valutazione commerciale

Smart Login copre tre bisogni che normalmente richiedono prodotti separati:
branding della login, identity federation e protezione degli accessi. Il
posizionamento Premium autonomo e quindi coerente anche fuori dallo stack Smart
eCommerce. Il vantaggio competitivo deve essere la configurazione guidata e
governata, non il semplice numero di template o provider.

Prima della commercializzazione sono prioritari test E2E reali dei quattro
provider, passkey/WebAuthn, gestione e revoca sessioni, accessibilita WCAG 2.2 AA,
matrice di compatibilita certificata e onboarding visuale versionato. Freemius
resta l'ultimo passaggio, dopo la stabilizzazione funzionale e documentale.

## Font esterni e privacy

I font possono usare il sistema, essere richiesti da Google oppure essere
scaricati dal server e pubblicati localmente. La modalita locale mantiene la
varieta tipografica senza richieste del browser verso servizi esterni.

## Identity e sicurezza

Google verifica state, nonce e claim OIDC. Apple firma il client secret ES256 e
verifica l'ID token con le chiavi pubbliche Apple; Microsoft e GitHub usano
callback e scambio token server-side. Le chiavi sensibili possono essere
definite in `wp-config.php` e non sono incluse negli export.

La modifica dell'URL riduce scansioni e tentativi automatici, ma non viene
presentata come protezione completa: opera insieme a rate limit, CAPTCHA, 2FA,
audit, aggiornamenti e password robuste. Una chiave di recovery separata evita
che un errore di rewrite impedisca l'accesso amministrativo.

## Compatibilita

Il Compatibility Lab rileva WordPress multisite, WooCommerce, BuddyPress,
MemberPress, WordPress Two-Factor, cache/CDN e plugin concorrenti che riscrivono
la login. OAuth e CAPTCHA sono inseriti anche nei form compatibili dei prodotti
rilevati.

## Sicurezza JSON

Il JSON rimane sempre ispezionabile e modificabile dagli amministratori. Le
esportazioni non includono secret OAuth, chiave Apple o secret CAPTCHA; un'importazione che
non contiene il segreto preserva quello gia configurato. Le modifiche REST e
JSON passano dalla stessa whitelist e sanitizzazione usata dalla UI.

## REST API

Base:

```text
/wp-json/sslpp/v1/ai/
```

Le API richiedono utente autenticato con `manage_options` e nonce REST.

## Regole per AI

Una AI puo configurare campi in whitelist usando dot-notation. Non deve inserire
segreti OAuth o cambiare redirect critici senza autorizzazione esplicita.

## Documenti locali utili

- `smart-site-login-personalize/docs/README.md`
- `smart-site-login-personalize/docs/AI-CONTEXT.md`
- `smart-site-login-personalize/sdk/README.md`
