---
title: Header e footer
description: Prompt per creare componenti globali dinamici con AI-HTML e WordPress runtime.
---

## Prompt header

```text
Leggi il file di contesto allegato come fonte autorevole. Crea o migliora l'header del sito usando logo, top bar, menu WordPress, social, ricerca e CTA soltanto quando risultano disponibili nel manifest. Il menu deve rimanere dinamico tramite i componenti runtime AI-HTML.

Prima mostrami una proposta sintetica per desktop e mobile e chiedimi solo le informazioni commerciali mancanti. Dopo la mia conferma restituisci lo slot header_full con HTML, CSS e JS separati, conforme alla governance SBM, seguito dalle istruzioni per provarlo senza attivarlo subito.
```

## Prompt footer

```text
Leggi il file di contesto allegato come fonte autorevole. Crea o migliora il footer usando soltanto identita, menu, contatti, social, pagine e integrazioni presenti. Mantieni dinamici tutti i dati governati da WordPress.

Prima proponi contenuti e colonne. Dopo la mia conferma restituisci lo slot footer_full con HTML, CSS e JS separati, conforme alla governance SBM, e una checklist desktop e mobile.
```

## Controlli essenziali

- nessuna voce di menu duplicata nel codice;
- logo e varianti risolti dal runtime;
- apertura e chiusura mobile accessibili da tastiera;
- nessuna barra amministrativa WordPress incorporata nello slot;
- header e footer salvati prima come inattivi.
