---
title: Usare Smart Reset
description: Ripristinare in modo controllato i dati governati da plugin e temi Smart eCommerce.
---

**Smart Reset** e la pagina comune di ripristino dei prodotti Smart eCommerce.
Agisce soltanto sui dati posseduti dal prodotto aperto: non e un reset generale
di WordPress e non modifica automaticamente tema, altri plugin o contenuti.

## Procedura

1. Apri **Smart Reset** dal menu del prodotto.
2. Seleziona un solo ambito oppure **Impostazioni di fabbrica**.
3. Controlla la descrizione dell'ambito e il numero di scelte.
4. Scrivi `RESET` nel campo di conferma.
5. Seleziona **Esegui ripristino**.

La scelta **Impostazioni di fabbrica** e esclusiva: quando e attiva, le scelte
selettive vengono deselezionate. Il server applica la stessa regola anche se la
richiesta non proviene dall'interfaccia.

## Ambiti per prodotto

| Prodotto | Ambiti principali | Non viene modificato |
| --- | --- | --- |
| Smart Login | design e contenuti, identity e passwordless, URL login, sicurezza e registro | tema, altri plugin, utenti WordPress |
| Smart Bootstrap Manager | design token, UI/FX, preset e strumenti, CSS compilato | contenuti, tema, configurazioni di altri plugin |
| Smart Builder Site | opzioni, widget pagina, revisioni builder, cache runtime | pagine e articoli, salvo la rimozione esplicita dei dati widget SBS |
| AI-HTML | code slot, opzioni tema, cache runtime | plugin, contenuti e impostazioni esterne al tema |
| Selective Cleanup Community | cronologia locale del plugin | contenuti e configurazione WordPress |
| Selective Cleanup Premium | cronologia, operazioni interne e backup creati da Cleanup | contenuti WordPress; il reset installazione usa un flusso separato |

## Snapshot e sicurezza

Quando previsto, Smart Reset crea uno snapshot prima dell'operazione. Gli
snapshot sono salvati in una posizione protetta o gestiti dal sistema backup
del prodotto. Il download richiede un amministratore autenticato, capability e
nonce validi.

In Selective Cleanup Premium, **Smart Reset** ripristina il plugin. La funzione
separata di reset dell'intera installazione WordPress conserva conferme e
protezioni proprie e non viene presentata come un normale ambito Smart Reset.
