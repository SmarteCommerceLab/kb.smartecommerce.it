---
title: Smart Customizer Framework
description: Controlli visuali, registry widget e configurazione Customizer dello stack.
---

Smart Customizer Framework fornisce l'interfaccia visuale generata dal registry Smart Builder Site. Non renderizza pagine e non possiede il contenuto finale.

## Responsabilita

- controlli Customizer avanzati;
- builder/compose controls;
- catalogo configurabile dei widget;
- motion per singolo item;
- serializzazione ordinata delle configurazioni.

## Confini

SCF non deve duplicare:

- rendering widget di Smart Builder Site;
- token e librerie di Smart Bootstrap Manager;
- header/footer di AI-HTML;
- storage business dei prodotti verticali.

## Regole per AI

Una AI deve modificare SCF solo quando il problema riguarda il controllo visuale, lo schema configurabile o l'esperienza Customizer. Se il problema e nel markup pubblico, verificare prima Smart Builder Site o AI-HTML.

## Documenti locali utili

- `smart-customizer-frameworks/INTEGRATION-CONTRACT.md`
- `smart-customizer-frameworks/DEV-STATUS.md`
- `smart-customizer-frameworks/CHANGELOG.md`
