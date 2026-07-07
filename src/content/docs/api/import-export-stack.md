---
title: Import/Export Stack
description: API, JSON e portabilita delle configurazioni Smart eCommerce.
---

Ogni configurazione operativa deve poter essere letta e scritta tramite API o import/export JSON. Customizer e admin sono client della stessa configurazione, non archivi paralleli.

## Endpoint principali

| Prodotto | Endpoint | Scopo |
| --- | --- | --- |
| SBM | `/wp-json/smart-bootstrap-manager/v1/design-governance` | modalita e assi di ereditarieta |
| SBM | `/wp-json/smart-bootstrap-manager/v1/effects` | librerie e configurazione UI/FX |
| SBS | `/wp-json/sbs/v1/ai/context` | contesto consolidato per AI |
| SBS | `/wp-json/sdc/v1/smart-builder-site/site/export` | pacchetto portabile del sito |
| SBS | `/wp-json/sdc/v1/smart-builder-site/site/import` | import merge/replace |
| AI-HTML | `/wp-json/aihtml/v1/ai/integration-manifest` | identita, capability e runtime |
| AI-HTML | `/wp-json/aihtml/v1/ai/options` | opzioni del tema |
| AI-HTML | `/wp-json/aihtml/v1/ai/code-slots` | header/footer/CSS/JS/body |
| AI-HTML | `/wp-json/aihtml/v1/ai/menus` | import/export menu WordPress e metadati AIHL |
| AI-HTML | `/wp-json/aihtml/v1/ai/addons` | add-on disponibili e risorse selezionabili |

## Export unificato SBS

L'export comprende:

- pagine builder e payload widget;
- opzioni globali SBS;
- gruppi completi SBM, inclusa governance;
- opzioni AI-HTML;
- code slot AI-HTML.
- manifest AI-HTML, menu e add-on quando si genera AI Canvas, header o footer.

I payload `builder_json` e `compose_json` viaggiano anche dentro la rispettiva pagina. Durante l'import vengono rimappati per slug sul nuovo ID WordPress; le chiavi basate sull'ID del sito sorgente non vengono importate.

## Compatibilita

Ogni pacchetto contiene:

- `schema_version`;
- versioni componenti;
- timestamp UTC;
- report import/export.

Una modifica incompatibile incrementa la major dello schema e richiede una migrazione esplicita.

## Controlli minimi

1. validazione JSON Schema;
2. verifica capability per scritture;
3. backup prima dell'import;
4. transazione logica con report errori;
5. invalidazione cache;
6. confronto export dopo import.
