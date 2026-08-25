---
title: Runtime WordPress per Canvas e header
description: Contratto per usare menu, pagine, URL, identita e impostazioni Smart eCommerce senza incorporare dati statici nel codice generato.
---

Il codice generato descrive la composizione; WordPress continua a possedere identita, navigazione, URL, contenuti, media e configurazioni. AI-HTML espande i componenti runtime sul server prima di inviare l'HTML al browser.

## Confini di proprieta

| Risorsa | Proprietario | Come consumarla |
| --- | --- | --- |
| Menu, voci e URL | WordPress | `smart-menu` con location assegnata |
| Logo e nome sito | WordPress + AI-HTML | `smart-logo` |
| Telefono, email, indirizzo | AI-HTML options | `smart-contact` |
| Social | AI-HTML / SBS | `smart-social` |
| Form configurati | Plugin add-on + AI-HTML | `smart-addon` |
| Header, footer e shell | AI-HTML | struttura nativa o Code Slot governato |
| Sezioni e Canvas | Smart Builder Site | widget e payload SBS |
| Bootstrap, token e motion | Smart Bootstrap Manager | `--bs-*`, `--sbin-*`, consumer contract |
| Controlli visuali | Smart Customizer Framework | schema e payload esposti |

## Letture obbligatorie

Prima di generare una pagina o un header leggere, se accessibili:

```text
GET /wp-json/aihtml/v1/ai/integration-manifest
GET /wp-json/aihtml/v1/ai/options
GET /wp-json/aihtml/v1/ai/menus
GET /wp-json/sbs/v1/ai/widgets
GET /wp-json/smart-bootstrap-manager/v1/ai/consumer-contract?consumer=ai-html
```

Una chat classica senza accesso agli endpoint deve chiedere all'utente di fornire il manifest oppure lasciare le risorse non risolte come componenti runtime.

## Header corretto

Il tema AI-HTML possiede gia l'header nativo e risolve menu e opzioni a runtime. Un Canvas di pagina non deve duplicarlo. Solo una richiesta esplicita di override globale puo produrre un Code Slot `header_full`.

```html
<header class="sec-runtime-header">
  <div class="container d-flex align-items-center justify-content-between">
    <smart-logo variant="transparent" class="sec-runtime-header__logo"></smart-logo>
    <nav aria-label="Navigazione principale">
      <smart-menu location="naviga" class="sec-runtime-header__menu" depth="3"></smart-menu>
    </nav>
    <smart-contact field="phone" link="true" class="sec-runtime-header__contact"></smart-contact>
  </div>
</header>
```

AI-HTML sostituisce i tag `smart-*` con HTML server-side. Se la location richiesta non ha un menu, il renderer non inventa collegamenti. Il chiamante deve scegliere una location assegnata riportata dal manifest.

## Link a pagine e CTA

- Le voci di navigazione arrivano sempre dal menu WordPress.
- Una CTA editoriale puo usare un URL fornito e verificato nel brief.
- Un link a una pagina WordPress non deve essere dedotto dal titolo.
- ID pagina, attachment e form non devono essere inventati.
- Gli URL assoluti presenti nel manifest possono essere riusati; i valori sensibili no.

## Configurazioni dei prodotti

La AI deve produrre proposte separate per proprietario:

1. AI-HTML per shell, header, footer, menu package, opzioni tema e Code Slot.
2. Smart Builder Site per pagine, widget, blueprint e Canvas.
3. Smart Bootstrap Manager per palette, tipografia, spaziatura, Bootstrap e motion.
4. Smart Customizer Framework per i controlli visuali esposti.

Non e ammesso correggere un colore globale nel CSS del Canvas se il sito e in modalita `governed`: va modificato il token SBM. Non e ammesso modificare un menu riscrivendo l'HTML dell'header: va modificato il menu WordPress.

## Validazione minima

- il manifest e stato letto o dichiarato non disponibile;
- il menu usa una location assegnata;
- nessun URL, ID o dato di contatto e inventato;
- il Canvas non duplica header, footer o Bootstrap;
- CSS e JavaScript sono confinati alla classe radice;
- il contenuto e leggibile senza JavaScript;
- responsive, contrasto e reduced motion sono verificati;
- il payload indica prodotto proprietario, destinazione e prerequisiti.
