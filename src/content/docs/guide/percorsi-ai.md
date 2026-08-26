---
title: Scegliere il percorso AI
description: I tre punti di ingresso supportati per lavorare con Smart eCommerce tramite chat classica, Smart AI Studio o flusso standalone.
---

Questa e la pagina di ingresso per utenti e sistemi AI. Prima di generare codice o modificare WordPress, scegliere un solo percorso operativo.

## 1. Chat AI classica

Usare questo percorso con ChatGPT, Claude o Gemini quando la chat non e collegata direttamente al sito.

```text
WordPress -> Esporta per AI -> allega il JSON -> descrivi il sito -> copia Code Slot e Canvas
```

L'utente non deve spiegare manifest, menu location, hook, token o widget. Il file esportato contiene il contesto macchina necessario e non contiene credenziali.

[Apri la guida Esporta per AI](/guide/esporta-contesto-ai/)

## 2. Smart AI Studio

Usare questo percorso per discovery automatica, scelta della AI privata o di un provider commerciale configurato nello Studio, preview, diff, operazioni governate e rollback.

```text
Studio -> Smart Private AI/provider BYOK -> sito collegato -> piano -> conferma -> verifica
```

Le API key dei provider restano nello Studio. Non vengono inserite nella KB, nei prompt o nel plugin WordPress.

[Apri la guida Smart AI Studio](/guide/attivare-smart-ai-studio/)

## 3. Standalone senza ai.smartecommerce.it

Usare questo percorso quando non si vuole utilizzare il servizio centrale. WordPress genera il contesto, una AI o un processo locale produce gli artefatti e l'operatore li inserisce manualmente.

```text
WordPress -> contesto read-only -> AI scelta dall'utente -> validazione -> copia manuale
```

Non include orchestrazione centrale, applicazione automatica, audit unificato o rollback Studio.

[Apri la guida standalone](/guide/flusso-ai-standalone/)

## Regola per le AI

Se il prompt non dichiara il percorso, chiedere soltanto quale delle tre modalita viene usata. Non proporre Actions, connector o MCP come percorso consumer. Non chiedere credenziali in chat.
