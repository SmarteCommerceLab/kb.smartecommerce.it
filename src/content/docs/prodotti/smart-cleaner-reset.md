---
title: Smart Cleaner Reset
description: Pulizia, snapshot, ripristino e reset governato di WordPress.
---

Smart Cleaner Reset gestisce la pulizia selettiva e il ripristino di WordPress
senza trasformare una richiesta in linguaggio naturale in una cancellazione
diretta. L'operatore o la AI preparano prima un piano verificabile.

## Flusso governato

1. Leggere il registro delle componenti disponibili.
2. Eseguire il dry-run e mostrare ambito, conteggi e rischi.
3. Creare uno snapshot preventivo verificato.
4. Richiedere la conferma prevista dalla policy attiva.
5. Eseguire soltanto le componenti incluse nel piano.
6. Verificare risultato, audit e possibilita di ripristino.

Il reset completo e distinto dalla pulizia selettiva e richiede una conferma
esplicita. La AI non deve dedurre autonomamente che una richiesta generica come
"rifai il sito" autorizzi la cancellazione dell'installazione.

## Snapshot e restore

Gli snapshot SQL hanno manifest, checksum SHA-256 e controllo dello spazio
disponibile. Prima di un restore viene creato un ulteriore safety snapshot. Un
file con checksum non valido non puo essere ripristinato.

## Regole per Smart AI Studio

- non eseguire scritture senza un dry-run coerente con le capability correnti;
- non esporre percorsi o file snapshot a utenti non autorizzati;
- mantenere separati contenuti, configurazioni e reset dei prodotti;
- registrare request ID, piano, pre-stato, risultato e strategia di rollback;
- interrompere l'operazione se lo snapshot preventivo fallisce.

Le route e i componenti effettivamente disponibili devono essere letti dal
contratto pubblicato dal plugin installato, non ricostruiti dal modello AI.
