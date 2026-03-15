# memory-pwa
Il classico gioco del Memory installabile su smartphone come PWA (Progressive Web App). 

## 🎮 Gioca ora
Puoi provare il gioco direttamente da questo link:
👉 https://maraa-cpu.github.io/memory-pwa/

## Demo


## Funzionalità (Feature Implementate)
* **Griglia di gioco 4x4:** 16 carte accoppiate a due a due con simboli/immagini.
* **Nuova partita e Reset:** Pulsante dedicato per rimescolare le carte e azzerare i contatori.
* **Punteggio (Mosse):** Il gioco tiene traccia del numero di mosse effettuate per completare il quadro.
* **Condizione di Vittoria:** Il gioco termina con un avviso quando tutte le coppie vengono svelate.
* **Feature Addizionale (Record):** Il sistema calcola e salva il punteggio minimo ottenuto tra tutte le partite giocate (utilizzando il `localStorage` del browser).
* **PWA (Progressive Web App):** Grazie all'implementazione del file `manifest.json` e di un `Service Worker`, l'app è installabile sulla Home dello smartphone e funziona anche offline.
* **Design e Animazioni:** Effetto 3D per il capovolgimento delle carte e layout responsive.

## Tecnologie Utilizzate
* HTML5
* CSS3 (Flexbox, Grid, Animazioni 3D)
* JavaScript
* PWA (Service Worker & Web App Manifest)

## 📱 Come installare l'App su Smartphone
1. Apri il link del gioco dal browser del tuo telefono (Chrome su Android, Safari su iOS).
2. **Su Android:** Attendi il banner "Aggiungi a schermata Home" in basso e cliccalo, oppure vai sui 3 puntini in alto a destra e seleziona "Installa app".
3. **Su iOS:** Clicca sul tasto "Condividi" in basso al centro e seleziona "Aggiungi alla schermata Home".
