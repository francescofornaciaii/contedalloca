# Emanuele Dall’Oca

Portfolio fotografico completo: 87 foto nell’archivio, 10 best shots e cinque categorie. Include hero desktop/mobile, soggetto a colori su sfondo in bianco e nero, loghi dell’oca e Cormorant Garamond locale con licenza.

Su mobile la hero mantiene foto e titolo, menu su una riga nella sfumatura e due etichette ai lati. Una piccola oca non specchiata, larga 32–44 px sui formati verificati, è bilanciata visivamente tra Italian model e Available worldwide con uno spostamento di 6–9 px verso sinistra. Nei contatti un’altra oca, larga 58–80 px, accompagna inquiries. La disposizione desktop resta invariata.

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

`VERIFICA-MOBILE.txt` riporta i controlli su dieci viewport del browser, le correzioni per schermi stretti e i limiti della verifica su dispositivi fisici.
