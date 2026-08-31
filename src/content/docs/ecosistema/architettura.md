---
title: Architettura Ecosistema
description: Piramide applicativa Smart eCommerce e responsabilita dei componenti principali.
---

L'ecosistema Smart eCommerce e una piattaforma WordPress enterprise dove contenuti, layout, API, Customizer e strumenti AI collaborano senza duplicare responsabilita.

## Piramide applicativa

1. **WordPress core** gestisce utenti, contenuti, Customizer, REST API, template loading e capability.
2. **Smart Bootstrap Manager** governa Bootstrap, token CSS, palette, tipografia, librerie UI/UX, motion runtime, controlli Customizer e cataloghi componenti. Dalla versione 1.9 incorpora SCF.
3. **Smart Builder Site** converte JSON builder in HTML semantico Bootstrap-first.
4. **AI-HTML Theme** fornisce cornice sito, header, footer, template base, menu, SEO/API e bridge verso i plugin.
5. **AI/API/Admin** scrivono configurazioni coerenti nei contratti dei prodotti proprietari.

## Principi

- Il contenuto critico deve essere server-side e leggibile senza JavaScript.
- Bootstrap non va duplicato tra tema e plugin.
- Gli effetti sono progressivi e rispettano `prefers-reduced-motion`.
- Ogni prodotto espone reset, registry e API proprie.
- Il reset totale cross-prodotto non e consentito.

## Stato componenti

| Componente | Versione locale rilevata | Responsabilita |
| --- | --- | --- |
| Smart Bootstrap Manager | 1.9.0 | Bootstrap, token, componenti SCF incorporati, Customizer, GSAP, preset motion e API AI |
| Smart Customizer Frameworks | 1.8.0 transizione | plugin storico da rimuovere dopo l'aggiornamento a SBM 1.9 |
| Smart Builder Site | 1.20.0 | rendering widget, AI Canvas, JSON page builder |
| AI-HTML | 1.14.4 | tema, header/footer, configurazione e manifest live, code slots, bridge plugin |
| Smart AI Assistant | 1.3.1 | assistant admin, tools sito, registry reset |
| Smart AI Writer | 0.6.1 | generazione contenuti e impostazioni writer |

## Fonte locale

Questa pagina sintetizza `ECOSYSTEM-DEVELOPMENT-STATUS.md` e `TECHNICAL-FILES-INDEX.md`.
