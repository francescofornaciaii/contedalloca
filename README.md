# Emanuele Dall’Oca

Portfolio fotografico completo: 87 foto nell’archivio, 10 best shots e cinque categorie. Include hero desktop/mobile, soggetto a colori su sfondo in bianco e nero, loghi dell’oca e Cormorant Garamond locale con licenza.

Su mobile la hero mantiene foto e titolo, menu su una riga nella sfumatura e due etichette ai lati. Una piccola oca non specchiata, larga 32–44 px sui formati verificati, è bilanciata visivamente tra Italian model e Available worldwide con uno spostamento di 6–9 px verso sinistra. Il bordo inferiore del logo è allineato al bordo inferiore delle etichette. Nei contatti l’oca specchiata occupa l’angolo superiore destro su mobile, con larghezza CSS di 96–160 px, centrata nello spazio tra la fine di inquiries e il bordo destro dello schermo. Su desktop è ripristinata la disposizione precedente: oca grande fino a 460 px, allineata a destra e centrata sul blocco dei contatti.

Quando si apre una fotografia, il portfolio sottostante resta bloccato. Chiudendo la galleria si torna alla posizione salvata, con il focus sulla foto di partenza. La X vettoriale, senza cerchio né sfondo e con tratto sottile, ha un’area cliccabile invisibile di 48×48 px; restano disponibili swipe orizzontale, rotella, frecce e pulsanti precedente/successiva.

## Deploy su Vercel

1. Importare il repository `francescofornaciaii/contedalloca` in Vercel.
2. Production Branch: `main`.
3. Root Directory: radice del repository (`./`).
4. Framework Preset: **Other**.
5. Build Command e Install Command: vuoti. Output Directory: `.`.
6. Eseguire il deploy. `vercel.json` contiene già queste impostazioni.

Il sito è statico: non richiede npm, compilazione, database, variabili d’ambiente o servizi Codex/ChatGPT.

Il dominio previsto nel README iniziale è `contedalloca.exagonagency.com`: collegarlo nelle impostazioni Domains di Vercel e configurare il DNS secondo i valori indicati da Vercel.

Documentazione: [configurazione Vercel](https://vercel.com/docs/project-configuration/vercel-json).

## File del sito

- `index.html`: contenuti, foto, misure e contatti.
- `styles.css`: grafica e responsive.
- `site.js`: galleria, navigazione da tastiera, swipe e rotella.
- `images/`: tutte le immagini, loghi e titoli SVG.
- `fonts/`: Cormorant Garamond e licenza OFL.

Contatto: `contedalloca@gmail.com`. Il link `mailto:` apre il gestore email configurato dal visitatore. Instagram e TikTok: `@emadalloo_`.

## Verifica della consegna

`MANIFEST-SITO.json` elenca i 187 file del sito con dimensioni e SHA-256. La copia caricata coincide con il sito del pacchetto di consegna verificato.

`VERIFICA-MOBILE.txt` riporta i controlli della galleria su sei viewport, i test sintetici delle gesture, le verifiche precedenti di hero e contatti e i limiti della verifica su dispositivi fisici.
