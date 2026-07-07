---
title: Installazione Stack WordPress
description: Ordine consigliato di installazione dei componenti Smart eCommerce.
---

Questa guida definisce l'ordine operativo consigliato per installare uno stack Smart eCommerce su WordPress.

## Sequenza

1. Installare WordPress e configurare permalink, SSL e utenti tecnici.
2. Installare AI-HTML come tema base.
3. Installare Smart Bootstrap Manager.
4. Installare Smart Customizer Frameworks.
5. Installare Smart Builder Site.
6. Installare moduli AI, login, writer, licensing o prodotti verticali necessari al progetto.
7. Importare JSON builder, opzioni tema e Code Slots.
8. Verificare homepage, menu, header, footer, mobile e contenuti server-side.

## Verifiche minime

- Nessun duplicato Bootstrap/GSAP.
- Menu WordPress assegnato alla location corretta.
- Header e footer provenienti da contratto tema-builder.
- Contenuti principali presenti nel sorgente HTML.
- Effetti disattivabili con `prefers-reduced-motion`.

## Output atteso

Un sito WordPress in cui tema, builder, Customizer e runtime motion lavorano come livelli separati ma coerenti.
