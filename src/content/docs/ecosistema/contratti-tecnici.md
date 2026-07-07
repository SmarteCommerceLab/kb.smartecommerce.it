---
title: Contratti Tecnici
description: Regole di integrazione tra tema, plugin, builder, Customizer e API.
---

I contratti tecnici servono a mantenere separati ownership, rendering e configurazione.

## Tema e builder

AI-HTML pubblica il contratto di integrazione tema-builder. Smart Builder Site deve usare il tema per cornice, menu, logo e fallback, evitando copie statiche di header e footer.

Endpoint principale:

```text
GET /aihtml/v1/ai/integration-manifest
```

Il manifest espone risorse come logo, menu, social, contatti, add-on e politiche di fallback. Per i dettagli pubblici usare [Manifest AI-HTML](/api/ai-html-integration-manifest/).

## Componenti runtime AI-HTML

Quando un AI Canvas, un Code Slot o un builder deve mostrare identita o navigazione, deve usare componenti runtime server-side:

```html
<smart-logo variant="transparent" class="site-logo"></smart-logo>
<smart-menu location="naviga" class="site-menu" depth="3"></smart-menu>
<smart-social class="site-social-link"></smart-social>
<smart-contact field="email" link="true"></smart-contact>
<smart-addon provider="contact_form_7" id="123"></smart-addon>
```

`smart-logo` e `smart-menu` sono il contratto corretto per logo e navigazione. Non usare immagini statiche o link hardcoded quando il manifest indica risorse assegnate.

## Builder e Bootstrap Manager

Smart Builder Site produce markup semantico e attributi dichiarativi `data-sbin-*`. Smart Bootstrap Manager interpreta questi attributi ed esegue effetti, token e librerie condivise.

Il builder non deve caricare copie autonome di Bootstrap, GSAP o librerie motion gia governate da SBM.

## Customizer e JSON

Smart Customizer Frameworks produce configurazione ordinata e JSON salvabile. Non renderizza pagine e non deve contenere logica widget duplicata.

## Reset e manutenzione

Ogni prodotto ha reset autonomo, snapshot preventivo e registry locale. Una procedura AI deve chiamare solo l'endpoint del prodotto proprietario dei dati.

## Documenti locali correlati

- `AI-html/THEME-INTEGRATION-CONTRACT.md`
- `smart-bootstrap-manager/INTEGRATION-GUIDE.md`
- `smart-bootstrap-manager/SMART-BUILDER-SITE-INTEGRATION.md`
- `smart-customizer-frameworks/INTEGRATION-CONTRACT.md`
- `smart-builder-site/MOTION-SYSTEM.md`
