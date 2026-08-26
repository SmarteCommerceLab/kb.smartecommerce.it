---
title: Flusso AI standalone
description: Lavorare con Smart eCommerce senza ai.smartecommerce.it, mantenendo contesto, generazione e applicazione sotto il controllo dell'operatore.
---

Il flusso standalone non usa `ai.smartecommerce.it` e non richiede Smart AI Studio. E adatto a chi vuole usare una chat commerciale, una AI locale o un proprio processo di generazione mantenendo manuale l'applicazione su WordPress.

## Architettura

```text
AI-HTML Esporta per AI
-> documento smart-ecommerce-ai-context
-> AI scelta dall'utente
-> Code Slot / Canvas / Blueprint
-> validazione WordPress
-> inserimento e attivazione manuali
```

## Responsabilita

| Componente | Responsabilita |
| --- | --- |
| AI-HTML | Esporta manifest, hook e contratto della shell globale |
| SBM | Fornisce design mode, token e runtime UI |
| SBS | Fornisce registry e schema dei contenuti pagina |
| AI esterna o locale | Genera proposte conformi al documento allegato |
| Operatore | Controlla, incolla, valida e attiva |

## Limiti rispetto allo Studio

Il percorso standalone non offre automaticamente:

- pairing e discovery continua del sito;
- KnowledgePack selezionati dal runtime;
- preview e diff centralizzati;
- coda di operazioni e approvazioni;
- Visual QA automatica;
- audit e rollback coordinati.

Questi limiti non impediscono la generazione, ma rendono obbligatori controllo e validazione manuali.

## Uso di API locali

Le API REST dei prodotti possono essere usate da strumenti tecnici controllati dall'utente. Questa e un'integrazione per sviluppatori, non il percorso richiesto a una persona non tecnica. Le credenziali sito restano fuori dai prompt e i permessi di lettura, scrittura e pubblicazione devono rimanere separati.

Per la normale chat usare [Esportare il contesto per una chat AI](/guide/esporta-contesto-ai/).
