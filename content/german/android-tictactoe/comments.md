---
title: "Kommentare"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 6
---
Entwickler müssen oft mit anderen Entwicklern zusammenarbeiten. Kommentare sind eine einfache Möglichkeit für Entwickler, Notizen im Code zu hinterlassen und mit anderen zu kommunizieren. Kommentare werden vom Computer ignoriert; daher sind sie auch eine einfache Möglichkeit, dem Computer mitzuteilen, bestimmte Codezeilen nicht auszuführen. Es gibt zwei Möglichkeiten, Kommentare zu erstellen:

1. Um eine einzelne Zeile zu kommentieren, setze `//` vor eine Codezeile. Zum Beispiel:

```kotlin
// Dies ist ein einzeiliger Kommentar.
```

2. Um mehrere Zeilen gleichzeitig zu kommentieren, markiere den Beginn des Kommentars mit `/*` und das Ende mit `*/`. Zum Beispiel:

```kotlin
/* Dies ist ein mehrzeiliger Kommentar.
Diese Zeile gehört ebenfalls zum Kommentar. */
```

Um einen Kommentar zu entfernen (oder eine Zeile zu entkommentieren), lösche einfach das `//` bei einem einzeiligen Kommentar oder die Zeichen `/*` und `*/` bei einem mehrzeiligen Kommentar.

{{% notice tip %}}
## Zusammenarbeit

1. Schreibe `//` vor `Toast.makeText(this, "Welcome to Tic-Tac-Toe”, Toast.LENGTH_LONG).show()`. Drücke nach dem Betätigen des Play-Buttons (►) und überprüfe, ob `Welcome to Tic-Tac-Toe` nicht auf dem Bildschirm erscheint.
2. Lösche das `//` und umschließe stattdessen `Toast.makeText(this, "Welcome to Tic-Tac-Toe”, Toast.LENGTH_LONG).show()` mit `/*` und `*/`. Überprüfe, dass `Welcome to Tic-Tac-Toe` weiterhin nicht in der Konsole ausgegeben wird, nachdem du den Play-Button (►) gedrückt hast.
3. Lösche sowohl `/*` als auch `*/` und drücke den Play-Button (►). Jetzt sollte Welcome to Tic-Tac-Toe in der Konsole ausgegeben werden.
   Während der heutigen Rätsel wirst du verschiedene mehrzeilige Kommentare und `// PUZZLE` Kommentare sehen (wie den für Puzzle 2). Diese Kommentare werden uns dabei leiten, das Tic-Tac-Toe-Spiel zu vervollständigen, also stelle sicher, dass du verstehst, wie man Code kommentiert und entkommentiert.

{{% /notice %}}