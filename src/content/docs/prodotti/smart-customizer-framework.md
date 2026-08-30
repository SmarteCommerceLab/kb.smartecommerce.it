---
title: Smart Customizer Frameworks - migrazione
description: Componente storico incorporato in Smart Bootstrap Manager dalla versione 1.9.
---

Smart Customizer Frameworks non e piu un prodotto autonomo per le nuove installazioni. Controlli visuali, registry widget, configurazione JSON e integrazione Customizer sono incorporati in **Smart Bootstrap Manager 1.9 o successivo**.

## Procedura di migrazione

1. Aggiornare Smart Bootstrap Manager alla versione 1.9 o successiva.
2. Verificare in SBM la pagina **Componenti e widget**.
3. Controllare che cataloghi Builder e Compose e relativi JSON siano presenti.
4. Disattivare Smart Customizer Frameworks.
5. Verificare Customizer e Smart Builder Site.
6. Rimuovere il plugin SCF separato.

## Compatibilita

SBM mantiene le option `smart_mizer_option_*`, le funzioni `smart_customizer_framework_*` e gli hook consumati da Smart Builder Site. Non e necessario convertire manualmente il JSON esistente.

La release SCF 1.8 e soltanto una transizione: se trova SBM 1.9 attivo, non avvia un secondo runtime e segnala che puo essere rimossa.
