---
title: Attivare Smart AI Studio
description: Percorso cliente dalla richiesta del servizio al primo sito WordPress collegato e governabile dalla AI.
---

Smart AI Studio si attiva con un percorso governato. La registrazione
dell'account non e libera: nasce da una richiesta approvata e viene poi
collegata a uno o piu siti WordPress autorizzati.

## Il percorso in cinque azioni

Memorizzare questa sequenza:

```text
Richiedi -> Attiva -> Installa -> Collega -> Crea
```

### 1. Richiedi

1. Apri [studio.smartecommerce.it](https://studio.smartecommerce.it).
2. Seleziona **Richiedi Smart AI Studio**.
3. Compila la pratica con referente, email, azienda, sito e obiettivo.
4. Conserva il link della pratica per controllarne lo stato.

La richiesta viene registrata in `repository.smartecommerce.it` con stato
**In verifica**. In questa fase non sono ancora disponibili account, download
o collegamento del sito.

### 2. Attiva

L'amministratore Smart eCommerce controlla la pratica e puo:

- approvarla;
- rifiutarla;
- richiedere informazioni aggiuntive.

Quando la pratica viene approvata, il Repository genera un link firmato con
scadenza e numero massimo di download. Dalla pratica approvata il cliente puo:

1. scaricare il pacchetto ufficiale del plugin;
2. creare l'account Smart AI Studio usando la stessa email approvata;
3. accedere alla pagina Account dello Studio.

L'account riceve l'abilitazione `smart-site-studio`. Il piano standard consente
di associare fino a cinque siti, mantenendo credenziali e policy separate.

### 3. Installa

Nel sito WordPress:

1. apri **Plugin > Aggiungi plugin > Carica plugin**;
2. carica lo ZIP ufficiale senza rinominarlo;
3. attiva **Smart AI Studio**;
4. apri il pannello del plugin e controlla che il sito non risulti ancora
   collegato.

Il plugin e il runtime locale del sito. Non conserva le API key dei provider e
non sostituisce la piattaforma Studio.

### 4. Collega

1. In Studio apri **Account > I tuoi siti**.
2. Seleziona **Collega un sito** e scegli la modalita operativa iniziale.
3. Genera il codice monouso, valido dieci minuti.
4. In WordPress apri **Smart AI Studio > AI privata**.
5. Inserisci il codice e seleziona **Collega sito**.
6. Torna in Studio e attendi la conferma dell'associazione.

Il sito entra nel catalogo personale dell'account. Studio e WordPress ricevono
credenziali tecniche separate e il codice non puo essere riutilizzato.

Per aggiungere un altro sito, installare il plugin anche nella nuova
installazione e ripetere soltanto questa fase con un nuovo codice.

### 5. Crea

Nel workspace del sito:

1. scegli la **Smart eCommerce AI privata** oppure configura una API key
   OpenAI personale nella sezione Provider;
2. seleziona il sito e la pagina da modificare;
3. descrivi in chat il sito, la pagina o la sezione da realizzare;
4. lascia che Studio legga capability e versioni dei prodotti installati;
5. verifica i KnowledgePack selezionati;
6. controlla piano, anteprima e differenze proposte;
7. conferma l'operazione oppure usa la policy automatica autorizzata;
8. controlla esecuzione, verifica e Visual QA;
9. usa il rollback quando il risultato non supera i controlli.

Le API key commerciali vengono inserite dal cliente soltanto nello Studio.
Non devono essere copiate nel plugin WordPress, nella Knowledge Base o nei
prompt.

## Stati da riconoscere

| Stato | Significato | Azione successiva |
| --- | --- | --- |
| In verifica | La pratica deve essere controllata | Attendere la decisione |
| Approvata | Download e account sono disponibili | Scaricare e attivare l'account |
| Account attivo | L'utente puo entrare nello Studio | Installare e collegare il plugin |
| Da collegare | Il sito non ha ancora un grant Studio | Generare il codice monouso |
| Collegato | Account e sito sono associati | Verificare capability e provider |
| Solo anteprima | Studio puo leggere e pianificare | Abilitare le scritture quando opportuno |
| Operativo | Creazione e modifica sono disponibili | Avviare il primo progetto |

## Chi fa cosa

| Soggetto | Responsabilita |
| --- | --- |
| Cliente | Richiesta, account, scelta provider e conferma delle operazioni |
| Amministratore Smart eCommerce | Verifica della pratica, entitlement e assistenza commerciale |
| Amministratore WordPress | Installazione plugin e inserimento del codice di pairing |
| Smart AI Studio | Chat, progetti, provider, KnowledgePack, preview, job e governance |
| Plugin Smart AI Studio | Capability del sito, esecuzione tipizzata, verifica e rollback locale |
| Repository | Pacchetto ufficiale, checksum, link firmati e limiti di download |
| Knowledge Base | Manuali, contratti, regole e KnowledgePack versionati |

## Regola di sicurezza

Non inviare mai via email o chat password WordPress, token del sito o API key
dei provider. Il pairing usa un codice temporaneo; i secret operativi restano
nei rispettivi servizi.

