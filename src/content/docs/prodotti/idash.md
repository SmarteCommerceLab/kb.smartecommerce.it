---
title: iDash
description: Tema applicativo Tabler per MVP gestionali e dashboard.
---

iDash e il tema applicativo Smart Stack per creare rapidamente MVP gestionali su WordPress.

## Posizionamento

- shell applicativa monolitica;
- navigazione e componenti basati su Tabler;
- dashboard, KPI, tabelle e workflow;
- funzionalita dominio fornite da plugin verticali;
- percorso evolutivo verso configurazione completa via JSON/API.

## Ownership

iDash governa shell, template e presentazione della navigazione. I plugin di dominio governano dati, permessi e logica business.

Smart Builder Site e AI Canvas sono adatti a superfici editoriali o presentazionali, non a sostituire schermate transazionali gestionali.

## Roadmap API

Nuovi lavori devono esporre:

1. manifest tema versionato;
2. import/export JSON delle impostazioni shell;
3. REST read/write con capability check;
4. componenti runtime per menu, logo e identita;
5. migrazione schema-versioned senza alias legacy non documentati.

## Documenti locali utili

- `iDash/doc/PRODUCT-OVERVIEW.md`
- `iDash/doc/MENU-FUNZIONAMENTO-IMPLEMENTAZIONE-TECNICA.md`
- `iDash/doc/FOOTER-ARCHITETTURA-ESTENSIONE-PLUGIN.md`
