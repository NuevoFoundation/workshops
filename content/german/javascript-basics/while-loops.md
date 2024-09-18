---
title: "While-Schleifen"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 3
---

Eine `while`-Schleife ist genau das, sie ist ein Abschnitt von Code, der weiterhin einige Aktionen ausführt, "während" die Bedingung wahr ist. Wir beginnen mit dem Wort `while`, gefolgt von der Bedingung, die in Klammern `()` wahr ist, und setzen dann die auszuführende Aktion (oder Aktionen) in geschweifte Klammern `{}`. Hier ist das Setup:

```javascript
// While-Schleifen-Setup
while (Bedingung ist wahr) {
  // auszuführende Aktion
}
```

Lassen Sie uns nun in einige Beispiele eintauchen!

## Beispiele

Sagen wir, wir möchten eine Schleife erstellen, die 8 Mal läuft.

```javascript
// 8x Beispiel
let i = 0; // Zählervariable setzen
while (i < 8) {
  i++; // geht zur nächsten Iteration der Schleife über (lässt die Schleife diesen Teil erneut durchlaufen)
}
```

Die Bedingung könnte auch eine Aussage sein, wie z.B. ein Boolean (wahr/falsch). Angenommen, wir möchten verschiedene Kommentare zu einem Video durchlesen, bis wir alle gelesen haben. Um dies in einer While-Schleife zu tun, bräuchten wir einige verschiedene Variablen (Sie können die ausgefallenen Knotenwörter ignorieren).

```javascript
const commentIterator = video.createNodeIterator(video, NodeFilter.SHOW_COMMENT) // dies ist eine Möglichkeit, von einem Kommentar zum nächsten im Video zu wechseln
let currentComment; // dies ist ein Platzhalter für den aktuellen Kommentar

// diese while-Schleife läuft weiter, solange es einen "nextNode" gibt, was eine andere Möglichkeit ist zu sagen, dass es einen weiteren Kommentar danach gibt
while (currentComment = commentIterator.nextNode()) {
  console.log(currentComment.textContent.trim()); // dies druckt den aktuellen Kommentar, damit wir ihn lesen können!
}
```