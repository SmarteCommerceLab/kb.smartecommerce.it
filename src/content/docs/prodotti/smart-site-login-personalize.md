---
title: Smart Site Login Personalize
description: Prodotto Premium autonomo per design, accesso e governance della login WordPress.
---

Smart Site Login Personalize e un prodotto **Premium autonomo**. Non dipende da
Smart Bootstrap Manager e mantiene una responsabilita distinta: governare
l'esperienza di accesso WordPress, la sua identita visiva e i flussi successivi
all'autenticazione. Puo quindi essere venduto e installato anche fuori dallo
stack Bootstrap Smart eCommerce.

## Panoramica prodotto

La pagina di configurazione separa il lavoro in tab contestuali: template,
media, stile, posizione, URL login, opzioni aggiuntive, Google OAuth, redirect e
JSON. Le tab sono navigabili da tastiera, mantengono un collegamento diretto
tramite URL e diventano scorrevoli sui display stretti. La sidebar del plugin
rimane invece la navigazione tra le aree principali del prodotto.

## Funzioni

- template `custom`, `classic-right`, `centered`, `split`, `fullscreen`;
- preset colore light, dark, glass, corporate;
- login URL personalizzata;
- blocco opzionale di `wp-login.php`;
- Google OAuth;
- redirect post-login per ruolo;
- preview admin;
- import/export JSON.
- font di sistema oppure Inter, Roboto, Lato, Montserrat, Poppins e Playfair Display;
- pagina Sistema separata per aggiornamenti, manifest e diagnostica.

## Font esterni e privacy

I font esterni servono ad ampliare la personalizzazione commerciale della pagina
login. Sono caricati da Google Fonts **solo nella pagina di accesso** e solo
quando viene selezionata una famiglia remota. La scelta "Font di sistema" non
effettua richieste esterne. Il titolare del sito deve valutare questa opzione in
base alla propria informativa privacy e alle regole applicabili al progetto.

## Sicurezza JSON

Il JSON rimane sempre ispezionabile e modificabile dagli amministratori. Le
esportazioni non includono il `client_secret` Google OAuth; un'importazione che
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
