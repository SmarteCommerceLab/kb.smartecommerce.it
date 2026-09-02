---
title: Smart eCommerce Store
description: Catalogo commerciale per scegliere, acquistare e installare i prodotti Smart eCommerce.
---

Smart eCommerce Store presenta il catalogo pubblico dei prodotti approvati per
la distribuzione. Separa prodotti gratuiti, Premium e prodotti gia installati,
guidando l'utente verso installazione, attivazione o acquisto.

## Sicurezza del catalogo

Lo Store usa lo stesso catalogo RSA-SHA256 verificato da Smart Product Hub, ma
ne espone solo la proiezione pubblica e commerciale. Se firma o scadenza non
sono valide, acquisti e installazioni restano disabilitati e i prodotti gia
installati non vengono modificati.

## Interfaccia

Dalla versione `0.2.14` lo Store segue Smart Admin Design System 2.4: header
legato allo schema colore WordPress, navigazione raggruppata, KPI con icona,
etichetta e valore, body canonico e messaggi di recupero comprensibili.

## Differenza dal Product Hub

Lo Store risponde a "quale prodotto scelgo e come lo ottengo". Product Hub
risponde a "cosa e installato, compatibile, aggiornabile e autorizzato". Le due
funzioni condividono il catalogo, ma non devono duplicare la stessa esperienza.
