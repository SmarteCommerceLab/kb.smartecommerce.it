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
- font di sistema oppure dodici Google Fonts caricabili localmente o da Google;
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

## Configurazione CAPTCHA

Nella scheda **Sicurezza**, la voce **Verifica anti-bot** permette di scegliere:

- **Cloudflare Turnstile**, consigliato quando si desidera una verifica poco
  invasiva;
- **Google reCAPTCHA v2**, utile quando il sito usa gia i servizi Google;
- **Nessuna**, se la verifica viene gestita da un altro livello del sito.

La chiave del sito e la chiave segreta si ottengono nel pannello del provider
scelto, registrando il dominio WordPress. La chiave del sito puo essere mostrata
nel browser; la chiave segreta deve rimanere riservata.

Per installazioni gestite, la chiave segreta puo essere definita in
`wp-config.php` senza salvarla nel database:

```php
define('SSLPP_CAPTCHA_SECRET', 'chiave-segreta-del-provider');
```

In questo caso il campo **Chiave segreta** puo rimanere vuoto. Smart Login usa
la costante durante la verifica e non include il valore nelle esportazioni JSON.

## Interfaccia orientata agli utenti

Le impostazioni usano scelte guidate e nomi visibili invece di richiedere slug,
costanti o identificatori tecnici. I dettagli avanzati restano nella KB secondo
un approccio di **human-centered design** e **progressive disclosure**: prima si
presenta l'azione utile, poi la spiegazione tecnica quando serve.

## Laboratorio Demo

La pagina **Demo** permette di valutare un aspetto completo della login prima
di applicarlo. I KPI iniziali mostrano layout attivo, risorse disponibili e
presenza di un backup; gli scenari possono essere filtrati tra business,
creativi ed essenziali.

Selezionando un preset, l'anteprima mostra il risultato nei formati desktop,
tablet e mobile e confronta layout, posizione e raggio con la configurazione
corrente. **Applica preset** salva prima una copia delle impostazioni esistenti,
carica automaticamente le immagini necessarie e applica il nuovo stile. Il
pulsante di ripristino recupera l'ultima configurazione salvata.

Le risorse manuali, il catalogo tecnico completo e gli esempi JSON restano in
sezioni richiudibili: non servono nel normale percorso guidato, ma rimangono
disponibili per supporto e integrazioni.

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
