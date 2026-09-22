---
title: "While-Schleifen"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 3
---

Eine `while`-Schleife ist genau das: ein Abschnitt von Code, der eine bestimmte Aktion oder eine Reihe von Aktionen ausführt, "während" die Bedingung wahr ist. Wir beginnen mit dem Wort `while`, gefolgt von der Bedingung, die in Klammern `()` wahr ist, und geben dann die Aktion(en), die ausgeführt werden sollen, in geschweiften Klammern `{}` an. So sieht das aus:

```javascript
// Aufbau der While-Schleife
while (condition is true) {
  // auszuführende Aktion
}
```

Schauen wir uns nun einige Beispiele an!

## Beispiele
Angenommen, wir möchten eine Schleife erstellen, die 8 Mal ausgeführt wird.
  
```javascript
// Beispiel für 8 Durchläufe
let i = 0; // einen Zähler setzen
while (i < 8) {
  i++; // geht zur nächsten Iteration der Schleife über (lässt die Schleife diesen Teil erneut ausführen)
}
```

Die Bedingung könnte auch eine Aussage sein, wie z. B. ein boolescher Wert (wahr/falsch). Angenommen, wir möchten verschiedene Kommentare zu einem Video durchlesen, bis wir alle gelesen haben. Um dies in einer `while`-Schleife zu tun, benötigen wir einige Variablen (ignorieren Sie dabei die speziellen Node-Begriffe).

```javascript
const commentIterator = video.createNodeIterator(video, NodeFilter.SHOW_COMMENT) // dies ist eine Möglichkeit, von einem Kommentar zum nächsten im Video zu wechseln
let currentComment; // dies ist ein Platzhalter für den aktuellen Kommentar


// diese while-Schleife wird so lange durchlaufen, wie es ein "nextNode" gibt – was bedeutet, dass ein weiterer Kommentar nach diesem existiert
while (currentComment = commentIterator.nextNode()) {
  console.log(currentComment.textContent.trim()); // das gibt den aktuellen Kommentar aus, damit wir ihn lesen können!
}
```