---
title: Smart Product Hub
description: Catalogo verificato e governo del ciclo di vita dei prodotti Smart eCommerce.
---

Smart Product Hub e lo strumento amministrativo per inventario, compatibilita,
licenze, installazione, aggiornamento e audit dei prodotti Smart eCommerce.

## Catalogo firmato

L'Hub accetta solo l'envelope RSA-SHA256 pubblicato da
`repository.smartecommerce.it/updates/index.json`. Il catalogo include chiave,
firma, scadenza e prodotti. Se la firma manca, non e valida o il catalogo e
scaduto, installazioni e aggiornamenti vengono bloccati senza modificare i
plugin gia presenti.

Il repository centrale e l'unico proprietario dell'indice firmato. I workflow
dei singoli prodotti possono pubblicare manifest e ZIP, ma non devono scrivere
direttamente `index.json`, perche ne invaliderebbero la firma.

## Interfaccia

Dalla versione `0.2.9` la shell segue Smart Admin Design System 2.4: colore
header derivato dallo schema WordPress, sidebar bianca raggruppata, body senza
arrotondamenti strutturali, KPI canonici e stati operativi con azione successiva.

## Differenza dallo Store

Product Hub e uno strumento di governo tecnico e operativo. Smart eCommerce
Store e invece il catalogo commerciale destinato alla scelta e acquisizione dei
prodotti.
