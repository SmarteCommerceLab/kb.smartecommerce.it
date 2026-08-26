---
title: Analisi e correzione
description: Prompt per diagnosticare problemi di layout, responsive, accessibilita e integrazione WordPress.
---

## Prompt diagnostico

```text
Leggi il file di contesto allegato e analizza il problema che descrivero o mostrero con uno screenshot. Distingui tra contenuto, layout, responsive, accessibilita, runtime WordPress e governance SBM.

Rispondi prima con:
1. causa probabile;
2. evidenze osservabili;
3. correzione minima consigliata;
4. componente interessato;
5. verifiche da eseguire.

Non generare codice finche non confermo la diagnosi. Dopo la conferma restituisci soltanto l'artefatto necessario e indica esattamente quale Code Slot o Canvas sostituire. Non dichiarare che la modifica e gia applicata.
```

## Informazioni utili da allegare

- screenshot desktop e mobile;
- URL della pagina, se pubblico;
- comportamento atteso;
- browser e dispositivo;
- messaggio di errore completo, senza password o token.

## Criterio di completamento

La correzione e conclusa solo dopo controllo visivo, prova responsive, navigazione da tastiera e verifica delle risorse dinamiche WordPress coinvolte.
