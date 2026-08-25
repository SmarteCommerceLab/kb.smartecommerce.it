---
title: Code Slots AI-HTML
description: Hook, API e regole operative per gli slot codice del tema AI-HTML.
---

I Code Slots consentono di inserire blocchi HTML, CSS e JavaScript in hook controllati del tema AI-HTML.

## Endpoint

```text
GET  /wp-json/aihtml/v1/ai/code-slots
POST /wp-json/aihtml/v1/ai/code-slots
GET  /wp-json/aihtml/v1/ai/code-slots/hooks
POST /wp-json/aihtml/v1/ai/code-slots/import
```

## Regole

- Ogni slot appartiene a un hook.
- Piu slot sullo stesso hook sono ordinati per priorita.
- HTML e JavaScript sono codice amministrativo attendibile, ma restano soggetti a sicurezza, componenti runtime e governance.
- CSS/JS condivisi devono essere centralizzati quando attraversano piu pagine o widget.

## Header e footer Canvas

Gli hook `header_full` e `footer_full` sostituiscono integralmente la struttura nativa. Per questo sono Canvas governati e devono dichiarare:

```json
{
  "hook": "header_full",
  "type": "mixed",
  "design_mode": "governed",
  "context": "global",
  "active": true,
  "code": "<header>...</header>",
  "css": ".site-header { color: var(--bs-body-color); }",
  "js": ""
}
```

Il codice va separato nei campi `code` (HTML), `css` e `js`. Non inserire un documento completo con tag `<style>` e `<script>` nella sola scheda JS.

Le risorse WordPress non vanno replicate staticamente. Usare i componenti runtime:

```html
<smart-logo variant="transparent" class="site-logo"></smart-logo>
<smart-menu location="naviga" class="site-menu" depth="2"></smart-menu>
<smart-social class="site-social"></smart-social>
<smart-contact field="email" link="true"></smart-contact>
```

La location del menu deve provenire dal Manifest AI-HTML del sito; `naviga` e solo un esempio operativo.

## Governance SBM

Prima di generare uno slot, leggere il consumer contract SBM e determinare la modalita globale. Uno slot non puo richiedere una modalita piu permissiva di quella globale.

| Modalita | Regola per il CSS |
| --- | --- |
| `governed` | Colori, font, spacing, scala tipografica e radius devono derivare da token `--bs-*`, `--sbin-*` o `--canvas-*`. |
| `adaptive` | I token restano preferiti; valori locali producono avvisi e devono essere motivati. |
| `autonomous` | Design locale consentito, sempre confinato alla classe radice dello slot. |

In modalita `governed` sono errori bloccanti:

- dichiarare o sovrascrivere token riservati `--sbin-*`;
- usare colori raw come `#fff`, `rgb(...)`, `rgba(...)`, `hsl(...)` o `hsla(...)` nelle proprieta visuali;
- usare `font-family`, spacing, `font-size`, `line-height`, `letter-spacing` o `border-radius` senza token semantici;
- non consumare alcun token semantico quando lo slot contiene CSS;
- inizializzare direttamente runtime motion o carousel posseduti da SBM.

Lo slot puo essere salvato per non perdere il lavoro, ma AI-HTML lo disattiva finche gli errori non vengono corretti. L'agente non deve tentare di aggirare il controllo impostando `active` ripetutamente.

Esempio governed:

```css
.site-header {
  color: var(--bs-body-color);
  background: var(--bs-body-bg);
  padding: var(--sbin-canvas-section-padding-y) var(--bs-gutter-x);
  border-radius: var(--bs-border-radius);
}
```

## Sequenza obbligatoria per una AI

1. Leggere Manifest AI-HTML, consumer contract e schema SBM.
2. Determinare risorse WordPress e `design_mode` effettivo.
3. Generare separatamente HTML, CSS e JS.
4. Validare componenti runtime, token, responsive e accessibilita.
5. Creare lo slot inizialmente non attivo se la validazione preventiva non e disponibile.
6. Mostrare errori e differenze all'utente.
7. Attivare solo dopo esito valido e conferma.

## Documento locale

La fonte tecnica completa e `AI-html/CODE-SLOTS-GUIDE.md`.
