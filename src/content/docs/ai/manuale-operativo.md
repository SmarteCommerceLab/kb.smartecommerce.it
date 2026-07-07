---
title: Manuale Operativo AI
description: Regole, flussi e limiti per agenti AI che lavorano sullo stack Smart eCommerce.
---

Questa pagina e il punto di ingresso per una AI che deve lavorare in autonomia sui prodotti Smart eCommerce.

## Regola principale

Prima di modificare codice, contenuti o configurazioni, l'agente deve identificare il prodotto proprietario della responsabilita. Non deve correggere un problema nel livello sbagliato.

| Se devi modificare | Prodotto proprietario |
| --- | --- |
| Header, footer, menu, template, opzioni tema, code slots | AI-HTML Theme |
| Token Bootstrap, palette, font, librerie UI/FX, motion runtime | Smart Bootstrap Manager |
| Widget pagina, JSON builder, AI Canvas, blueprint | Smart Builder Site |
| Controlli Customizer e configurazione visuale widget | Smart Customizer Framework |
| Chat AI admin e tool agentici interni | Smart AI Assistant |
| Generazione articoli nell'editor | Smart AI Writer |
| Login personalizzata, OAuth, redirect ruoli | Smart Site Login Personalize |
| Licenze, release premium, update e download firmati | Smart License Manager |
| Shell gestionale Tabler, dashboard e navigazione applicativa | iDash |

## Flusso obbligatorio

1. Identificare il prodotto proprietario della responsabilita.
2. Leggere la pagina prodotto nella KB.
3. Leggere i contratti API collegati.
4. Se la modifica riguarda AI Canvas, header, footer, logo, menu, social, contatti o form, leggere [Manifest AI-HTML](/api/ai-html-integration-manifest/) prima di generare markup.
5. Eseguire la modifica nel livello corretto.
6. Verificare output pubblico, responsive, accessibilita e contenuto server-side.

## Regole specifiche AI Canvas e risorse sito

AI Canvas non deve inventare risorse globali. Logo, menu, social, contatti e add-on devono arrivare da AI-HTML quando il manifest li espone.

Usare:

```html
<smart-logo variant="transparent" class="site-logo"></smart-logo>
<smart-menu location="naviga" class="site-menu" depth="3"></smart-menu>
<smart-social class="site-social-link"></smart-social>
<smart-contact field="email" link="true"></smart-contact>
<smart-addon provider="contact_form_7" id="123"></smart-addon>
```

Sul progetto Smart eCommerce la location menu attiva e `naviga`, ma una AI deve sempre verificare `resources.menus` nel manifest del sito su cui lavora.

1. Leggere la pagina prodotto in questa KB.
2. Leggere i documenti locali indicati nella pagina prodotto.
3. Capire se la modifica e tema, builder, runtime, API, admin o contenuto.
4. Fare una modifica minima nel prodotto proprietario.
5. Eseguire build/lint/test disponibili.
6. Aggiornare la documentazione se cambia un contratto o una procedura.
7. Pubblicare solo dopo verifica.

## Confini di autonomia

Una AI puo procedere autonomamente quando:

- opera su file locali del prodotto corretto;
- usa endpoint documentati;
- aggiorna contenuti statici o documentazione;
- esegue build, lint e deploy gia autorizzati;
- non espone credenziali, token o dati personali.

Una AI deve fermarsi quando:

- servono credenziali non disponibili;
- l'azione elimina dati o resetta configurazioni live;
- cambia licenze, pagamenti, download premium o accessi utenti;
- l'endpoint non e documentato e l'effetto non e reversibile;
- la modifica richiede una decisione commerciale.

## Verifica minima

Ogni intervento deve chiudersi con:

- file modificati;
- comando di verifica eseguito;
- risultato del comando;
- URL o schermata verificata se il cambiamento e pubblico;
- note su rischi residui.

## Fonti locali canoniche

- `docs/smart-stack/PRODUCT-CATALOG.md`
- `ECOSYSTEM-DEVELOPMENT-STATUS.md`
- `TECHNICAL-FILES-INDEX.md`
- `SMART-ADMIN-PANEL-DESIGN-SYSTEM.md`
