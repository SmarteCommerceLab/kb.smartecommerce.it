---
title: Authoring AI Canvas
description: Regole per generare sezioni AI Canvas compatibili con Smart Builder Site.
---

AI Canvas e il widget Smart Builder Site libero per esperienze generate da codice. Opera dentro un wrapper isolato e riceve il contratto di WordPress, AI-HTML e Smart Bootstrap Manager.

## Sequenza obbligatoria

1. Leggere contesto SBS.
2. Leggere [Manifest AI-HTML](/api/ai-html-integration-manifest/).
3. Leggere governance SBM.
4. Identificare pagina, intento, pubblico e modalita Canvas.
5. Produrre HTML semantico completo.
6. Leggere `contracts.sbm_authoring_contract` dal contesto esportato e applicare solo i token elencati.
7. Aggiungere CSS confinato alla classe radice.
8. Aggiungere JavaScript solo come progressive enhancement.
9. Dichiarare dipendenze e plugin GSAP.
10. Validare schema, accessibilita, responsive e reduced motion.

## Risorse AI-HTML obbligatorie

AI Canvas puo creare UI e contenuti locali, ma non possiede identita, menu, social, contatti o form globali. Quando una sezione deve usare queste risorse, deve consumare i componenti runtime dichiarati dal manifest:

```html
<smart-logo variant="transparent" class="canvas-logo"></smart-logo>
<smart-menu location="naviga" class="canvas-menu" depth="3"></smart-menu>
<smart-social class="canvas-social"></smart-social>
<smart-contact field="email" link="true" class="canvas-contact"></smart-contact>
<smart-addon provider="contact_form_7" id="123"></smart-addon>
```

Sul progetto Smart eCommerce la location menu operativa e `naviga`. La AI deve comunque verificare `resources.menus` nel manifest e usare una location assegnata. Se nessun menu e assegnato, non deve inventare link: deve chiedere o produrre una sezione senza navigazione globale.

### Esempio corretto

```html
<section class="sec-canvas-hero">
  <header class="sec-canvas-hero__bar">
    <smart-logo variant="transparent" class="sec-canvas-hero__logo"></smart-logo>
    <smart-menu location="naviga" class="sec-canvas-hero__menu" depth="3"></smart-menu>
  </header>
  <h1>Esperienza generata con AI Canvas</h1>
</section>
```

### Esempio vietato

```html
<section class="sec-canvas-hero">
  <img src="/logo.png" alt="Logo inventato">
  <nav><a href="/servizi">Servizi</a><a href="/contatti">Contatti</a></nav>
</section>
```

## Payload base

```json
{
  "name": "project-example",
  "widget": "ai_canvas",
  "active": "on",
  "code": {
    "design_mode": "governed",
    "inherit_colors": "inherit",
    "inherit_typography": "inherit",
    "inherit_spacing": "inherit",
    "inherit_radius": "inherit",
    "inherit_components": "inherit",
    "inherit_motion": "inherit",
    "html": "<section class=\"project-example\">...</section>",
    "css": ".project-example { color: var(--canvas-text); background: var(--canvas-surface); padding: var(--canvas-space); border-radius: var(--canvas-radius); }",
    "js": "",
    "gsap_plugins": []
  }
}
```

## Divieti

- Non modificare globalmente `html`, `body`, header o footer.
- Non nascondere contenuto iniziale in attesa di JavaScript.
- Non duplicare Bootstrap, GSAP o librerie governate da SBM.
- Non inventare menu, form, attachment o social.
- Non hardcodare logo o menu quando `smart-logo` e `smart-menu` sono disponibili.
- Non usare form statici se il manifest espone `smart-addon`.
- Non usare immagini senza `alt`, larghezza, altezza o strategia responsive.
- Non inserire credenziali, nonce o dati personali.
- In `governed` non usare colori HEX/RGB/HSL, `font-family`, spacing in `px`/`rem`/`em`, radius o scale tipografiche dirette.
- Non inventare nomi di token: usare `semantic_tokens` e `required_tokens` del contesto esportato.

## Design mode

| Mode | Uso |
| --- | --- |
| `governed` | massimo allineamento a SBM |
| `adaptive` | landing e sezioni editoriali ad alto impatto |
| `autonomous` | design locale isolato, senza toccare globali |
| `inherit` | eredita modalita globale |

La modalita globale SBM e un limite. Uno slot puo scegliere una modalita piu restrittiva, ma non una piu permissiva. Se il contesto dichiara `governed`, il Canvas deve usare `governed`; non va cambiata la policy globale per attivare codice non conforme.

### Esempio governed

```css
.project-example {
  color: var(--canvas-text);
  background: var(--canvas-surface);
  padding: var(--canvas-space);
  border-radius: var(--canvas-radius);
  font-family: var(--canvas-font);
}
```

### Esempio adaptive

Usare solo quando la modalita globale consente `adaptive`. Le specializzazioni locali devono comunque derivare dai token SBM:

```css
.project-example {
  --canvas-space-local: calc(var(--canvas-space) * 1.5);
  padding: var(--canvas-space-local);
}
```

### Esempio autonomous

Usare solo quando la modalita globale e `autonomous`. Bootstrap, accessibilita, contenuto server-side e ownership delle librerie restano comunque governati dalla piattaforma.

## Prompt operativo

```text
Genera un widget AI Canvas Smart eCommerce.
Usa HTML semantico completo e contenuto leggibile senza JavaScript.
Conserva CSS sotto una classe radice univoca.
Leggi global_mode, semantic_tokens e required_tokens da contracts.sbm_authoring_contract.
Imposta design_mode uguale a global_mode, salvo una scelta esplicitamente piu restrittiva.
In governed non generare valori visuali diretti e non inventare token.
Dichiara media, dipendenze e fallback.
Restituisci solo JSON valido conforme allo schema AI Canvas e conferma la verifica dichiarazione per dichiarazione.
```
