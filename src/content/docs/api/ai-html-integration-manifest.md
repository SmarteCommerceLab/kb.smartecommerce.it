---
title: Manifest AI-HTML
description: Contratto pubblico per logo, menu, social, contatti, add-on e risorse runtime usate da AI Canvas e Smart Builder Site.
---

Il Manifest AI-HTML e il contratto pubblico che una AI deve leggere prima di generare o modificare un AI Canvas, un header, un footer o una sezione che usa identita e navigazione del sito.

## Endpoint

```text
GET /wp-json/aihtml/v1/ai/integration-manifest
GET /wp-json/aihtml/v1/ai/addons
GET /wp-json/aihtml/v1/ai/introspection
GET /wp-json/aihtml/v1/ai/options
GET /wp-json/aihtml/v1/ai/menus
```

La specifica OpenAPI e pubblica e puo essere letta prima della configurazione di un client:

```text
GET /wp-json/aihtml/v1/ai/openapi
GET /wp-json/aihtml/v1/openapi
```

La specifica descrive il contratto ma non contiene dati privati del sito. Manifest,
menu, opzioni, contesti e operazioni restano protetti e richiedono autenticazione.

## Regola operativa

Una AI non deve inventare logo, menu, social, contatti, form o attachment quando il manifest espone una risorsa WordPress o AI-HTML gia configurata.

Se il contenuto rappresenta l'identita o la navigazione del sito, usare i componenti runtime server-side. I componenti vengono espansi prima dell'output, quindi crawler e motori AI leggono HTML reale senza dipendere da JavaScript.

## Componenti runtime

```html
<smart-logo variant="transparent" class="site-logo"></smart-logo>
<smart-menu location="naviga" class="site-menu" depth="3"></smart-menu>
<smart-social class="site-social-link"></smart-social>
<smart-contact field="email" link="true"></smart-contact>
<smart-addon provider="contact_form_7" id="123"></smart-addon>
```

| Componente | Attributi | Uso |
| --- | --- | --- |
| `smart-logo` | `variant`, `class`, `link` | Renderizza il logo configurato o il nome sito come fallback accessibile. |
| `smart-menu` | `location`, `class`, `depth` | Renderizza un menu WordPress assegnato a una location registrata. |
| `smart-social` | `class` | Renderizza i profili social configurati. |
| `smart-contact` | `field`, `link`, `class` | Renderizza telefono, email o indirizzo configurati. |
| `smart-addon` | `provider`, `id` | Renderizza add-on configurati, per esempio Contact Form 7 o Mailchimp for WordPress. |

## Logo

Varianti supportate:

- `default`
- `transparent`
- `light`
- `footer`

Ordine di fallback:

1. variante richiesta;
2. logo principale AI-HTML;
3. logo Smart Builder Site, se disponibile;
4. logo personalizzato WordPress;
5. nome del sito come testo accessibile.

Se una sezione non deve rappresentare il brand, il logo puo essere omesso. Se invece mostra identita o header, deve usare `smart-logo` e non un'immagine statica inventata.

## Menu

Il menu deve arrivare da `smart-menu` quando WordPress ha una location assegnata. Non copiare link statici se il manifest indica un menu disponibile.

Location dichiarate da AI-HTML:

| Location | Uso |
| --- | --- |
| `topic` | navigazione principale standard |
| `naviga` | navigazione generale alternativa |
| `utili` | link utili del footer |
| `footer` | navigazione footer |
| `topic_left` | lato sinistro header mega-centered |
| `topic_right` | lato destro header mega-centered |
| `footer_col_1` ... `footer_col_4` | colonne del mega-footer |

Sul progetto Smart eCommerce la location attiva e `naviga`. Le altre possono essere registrate ma non assegnate. Una AI deve usare una location assegnata nel manifest, non la prima location disponibile a caso.

Esempio corretto per header o AI Canvas che necessita navigazione:

```html
<smart-menu location="naviga" class="sec-nav" depth="3"></smart-menu>
```

Esempio vietato quando il manifest espone il menu:

```html
<nav>
  <a href="/servizi">Servizi</a>
  <a href="/contatti">Contatti</a>
</nav>
```

## Add-on e form

Gli add-on dichiarati dal manifest includono:

| Provider | Uso |
| --- | --- |
| `contact_form_7` | form Contact Form 7 selezionato o disponibile |
| `mailchimp_for_wp` | form Mailchimp for WordPress selezionato o disponibile |

Se un form e configurato, usare `smart-addon`. Non generare form statici con action fittizie, nonce inventati o campi non collegati al plugin reale.

## Struttura manifest

Il manifest espone almeno:

```json
{
  "contract": {
    "name": "Smart Theme Integration Contract",
    "version": "1.0.0",
    "theme": "AI-HTML",
    "theme_version": "1.8.6"
  },
  "site": {
    "name": "Nome sito",
    "description": "Descrizione sito",
    "url": "https://example.com/",
    "language": "it-IT"
  },
  "resources": {
    "logos": {},
    "menus": {},
    "social": [],
    "contacts": {},
    "addons": {}
  },
  "runtime_components": {
    "smart-logo": {},
    "smart-menu": {},
    "smart-social": {},
    "smart-contact": {},
    "smart-addon": {}
  },
  "policies": {
    "content_first": true,
    "server_side_resources": true
  }
}
```

## Controlli prima del rilascio

- Il manifest risponde `200 OK`.
- `resources.menus` indica almeno una location assegnata quando serve navigazione.
- `resources.logos` contiene una variante utilizzabile o fallback testuale.
- Header, footer e AI Canvas non duplicano menu, logo, social o contatti come HTML statico.
- I form usano `smart-addon` se il provider e attivo.
- Il contenuto resta leggibile nel sorgente HTML iniziale.
