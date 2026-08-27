---
title: Header e footer
description: Prompt per creare componenti globali dinamici con AI-HTML e WordPress runtime.
---

## Prompt header

```text
Leggi il file di contesto allegato come fonte autorevole. Crea o migliora l'header del sito usando logo, top bar, menu WordPress, social, ricerca e CTA soltanto quando risultano disponibili nel manifest. Il menu deve rimanere dinamico tramite i componenti runtime AI-HTML.

Prima mostrami una proposta sintetica per desktop e mobile e chiedimi solo le informazioni commerciali mancanti. Dopo la mia conferma leggi contracts.sbm_authoring_contract, imposta design_mode uguale a global_mode e restituisci lo slot header_full con HTML, CSS e JS separati. Se global_mode e governed, usa soltanto classi Bootstrap e token presenti in semantic_tokens e required_tokens: non scrivere colori HEX/RGB/HSL, font, spacing, radius o scale tipografiche dirette e non inizializzare librerie condivise. Verifica ogni dichiarazione CSS e indica come usare Analizza codice prima del salvataggio e dell'attivazione.
```

## Prompt footer

```text
Leggi il file di contesto allegato come fonte autorevole. Crea o migliora il footer usando soltanto identita, menu, contatti, social, pagine e integrazioni presenti. Mantieni dinamici tutti i dati governati da WordPress.

Prima proponi contenuti e colonne. Dopo la mia conferma leggi contracts.sbm_authoring_contract, imposta design_mode uguale a global_mode e restituisci lo slot footer_full con HTML, CSS e JS separati. Se global_mode e governed, usa soltanto classi Bootstrap e token presenti in semantic_tokens e required_tokens: non scrivere colori HEX/RGB/HSL, font, spacing, radius o scale tipografiche dirette e non inizializzare librerie condivise. Verifica ogni dichiarazione CSS e restituisci una checklist desktop, mobile e Analizza codice.
```

## Controlli essenziali

- nessuna voce di menu duplicata nel codice;
- logo e varianti risolti dal runtime;
- apertura e chiusura mobile accessibili da tastiera;
- nessuna barra amministrativa WordPress incorporata nello slot;
- header e footer salvati prima come inattivi.
- nessun valore visuale diretto quando SBM e `governed`;
- esito positivo di **Analizza codice** prima dell'attivazione.
