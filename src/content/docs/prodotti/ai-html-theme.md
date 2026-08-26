---
title: AI-HTML Theme
description: Tema base Smart eCommerce, header, footer, template, API e Code Slots.
---

AI-HTML `1.15.1` e il tema base dell'ecosistema Smart eCommerce. Fornisce cornice sito, template, menu, header, footer, SEO, bridge verso plugin, Code Slots ed export del contesto per chat AI.

## Responsabilita

- Header, footer e template base.
- Menu WordPress e risorse di identita del sito.
- Bridge verso Smart Bootstrap Manager, Smart Builder Site e Smart Customizer Frameworks.
- API di integrazione per AI e builder.
- Code Slots per sezioni controllate del tema.

## Code Slots

I Code Slots permettono di aggiungere o sostituire blocchi controllati del tema, per esempio header e footer. Gli slot sono ordinati per hook e priorita.

Gli override completi `header_full` e `footer_full` sono sottoposti alla governance SBM. In modalita `governed`, un Canvas con valori visuali hardcoded viene salvato ma resta disattivato finche non usa token semantici conformi.

Endpoint principale:

```text
/wp-json/aihtml/v1/ai/code-slots
```

## Operativita AI

Una AI puo:

- leggere [Manifest AI-HTML](/api/ai-html-integration-manifest/);
- aggiornare opzioni whitelist;
- creare, disattivare o rimuovere Code Slots non distruttivi;
- generare pagine base;
- verificare menu, logo, social e contatti.

Una AI non deve:

- duplicare contenuti di Smart Builder Site nel tema;
- sostituire menu WordPress con copie statiche;
- hardcodare logo, menu, social, contatti o form quando esistono componenti runtime;
- introdurre JS critico per contenuto SEO;
- fare deploy/reset live senza conferma.

## Contratto runtime pubblico

AI-HTML espone risorse dinamiche a Smart Builder Site, AI Canvas e agenti AI tramite:

```text
/wp-json/aihtml/v1/ai/integration-manifest
```

Le risorse runtime da usare nel markup sono:

```html
<smart-logo variant="transparent" class="site-logo"></smart-logo>
<smart-menu location="naviga" class="site-menu" depth="3"></smart-menu>
<smart-social class="site-social-link"></smart-social>
<smart-contact field="email" link="true"></smart-contact>
<smart-addon provider="contact_form_7" id="123"></smart-addon>
```

## Configurazione e manifest

Le due aree JSON hanno responsabilita differenti:

- **Configurazione JSON** modifica le opzioni governate del tema, come header, footer, contatti e CTA;
- **Manifest JSON** mostra in sola lettura lo stato live generato combinando configurazione, menu, risorse e capability dei plugin.

```text
Configurazione JSON -> WordPress e plugin -> Manifest live
```

Il Manifest non possiede versionamento o modifica diretta. L'endpoint `/wp-json/aihtml/v1/ai/integration-manifest` e protetto e deve essere letto tramite un client REST autenticato.

La specifica `/wp-json/aihtml/v1/ai/openapi` e invece pubblica: consente la discovery delle route senza esporre configurazione, menu o contenuti del sito.

La Dashboard amministrativa mostra prima i KPI e poi integrazioni, diagnostica Canvas e strumenti. La navigazione e ordinata per Configurazione, Contenuti e menu, Integrazioni, Strumenti avanzati e Governance.

Per menu e logo, la AI deve leggere il manifest e usare `resources.menus` e `resources.logos`. Sul progetto Smart eCommerce la location attiva e `naviga`; non va sostituita con link statici generati a mano.

## Verifica

- endpoint manifest disponibile;
- pagina sorgente contiene header/footer corretti;
- mobile menu funzionante;
- Code Slot ordinati per hook e priorita;
- nessun duplicato Bootstrap rispetto a Smart Bootstrap Manager.

## Documenti locali utili

- `AI-html/ARCHITECTURE.md`
- `AI-html/THEME-INTEGRATION-CONTRACT.md`
- `AI-html/CODE-SLOTS-GUIDE.md`
- `AI-html/JSON-IMPORT-GUIDE.md`
- `AI-html/MOBILE-NAVIGATION-TECHNICAL.md`
