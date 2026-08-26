---
title: Creare un sito completo
description: Prompt guidato per progettare architettura, pagine e componenti globali di un sito Smart eCommerce.
---

Usa questo caso quando il sito e nuovo oppure deve essere riprogettato nel suo insieme.

## Dati che l'utente deve conoscere

- attivita o progetto;
- pubblico principale;
- offerta o servizio;
- obiettivo di conversione;
- tono desiderato;
- eventuali pagine obbligatorie.

Non servono nomi di hook, menu location, token, ID o widget.

## Prompt pronto

```text
Leggi il file di contesto allegato come fonte autorevole del sito. Non inventare menu, pagine, URL, immagini, widget, token o integrazioni assenti. Usa le risorse dinamiche WordPress e rispetta la governance SBM.

Voglio progettare o completare questo sito. Guidami con domande semplici su obiettivo, pubblico, offerta, pagine necessarie, tono e CTA principale. Non chiedermi dettagli tecnici gia presenti nel file.

Proponi prima:
1. mappa del sito;
2. ruolo di ogni pagina;
3. struttura di header e footer;
4. sezioni principali delle pagine;
5. contenuti o risorse mancanti.

Aspetta la mia conferma. Poi restituisci separatamente:
- Code Slot AI-HTML per header e footer, con HTML, CSS e JS distinti;
- Canvas SBS compatibili con il registry disponibile;
- istruzioni brevi per copiarli negli editor corretti;
- checklist desktop, mobile, accessibilita e runtime.

Mantieni tutto inattivo o in bozza fino alla verifica.
```

## Cosa non deve fare la AI

- generare subito tutte le pagine senza approvare la struttura;
- scrivere menu o contatti statici quando WordPress li espone;
- sostituire i token SBM con colori e font arbitrari;
- dichiarare di avere applicato modifiche al sito.
