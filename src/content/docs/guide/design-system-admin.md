---
title: Design System delle interfacce amministrative
description: Contratto UI comune per plugin e temi Smart eCommerce in WordPress.
---

Il Design System Smart Admin 2.3 definisce un unico guscio grafico per i
prodotti Smart eCommerce. La dashboard di Smart Builder Site e il riferimento
visivo: cambiano contenuti e strumenti, non la struttura dell'interfaccia.

## Struttura comune

Ogni prodotto usa una barra di intestazione, un menu laterale da 260 px, un
percorso pagina, un'area contenuti bianca e un footer. Il menu e organizzato in
gruppi: Panoramica, aree operative del prodotto e Sistema o supporto.

Le pagine operative occupano tutta la larghezza disponibile. I pannelli
principali non sono affiancati e non usano arrotondamenti decorativi. Le card
sono riservate a KPI, azioni ripetute e componenti realmente indipendenti, con
un raggio massimo di 8 px.

## Colore WordPress

La barra con nome e versione del prodotto segue automaticamente lo schema
colori scelto nel profilo WordPress. Il menu interno mantiene invece il blu
WordPress canonico per link, stato attivo e azioni principali. In questo modo
la personalizzazione del profilo non modifica il significato degli stati UI.

## Tipografia e navigazione

Tutti i prodotti usano la stessa famiglia di font di sistema di WordPress, le
stesse dimensioni per titoli, descrizioni e voci di menu, icone da 30 px e una
barra attiva sul lato sinistro. Su schermi piccoli il menu passa a una griglia
compatta e il contenuto mantiene margini e leggibilita coerenti.

Il contratto si applica a Smart Builder Site, Smart Bootstrap Manager, Smart
Login, Smart eCommerce Selective Cleanup e al tema AI-HTML. Le funzioni proprie
di ciascun prodotto restano separate dal guscio condiviso.
