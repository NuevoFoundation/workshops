---
title: "Variablen"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
Variablen sind einfach Namen, die wir Werten wie Zeichenketten (Strings), Zahlen und Booleschen Werten geben können. Wir verwenden Variablen, um Informationen zu speichern, sodass der Computer diese verfolgen kann. Variablen werden erstellt, indem man den Typ der Variablen und den Namen der Variablen angibt. Anschließend kann man der Variablen die gewünschte Information zuweisen, indem man `=` und den Inhalt verwendet.

Betrachten Sie die Variablen am Anfang von `MainActivity.kt`.

```kotlin
    var Player1 = ArrayList<Int>()
    var Player2 = ArrayList<Int>()
    var ActivePlayer = 1
    var setPlayer = 1
    var colorBlue = Color.rgb(0, 161, 241)
    // PUZZLE 3
    var colorGreen = Color.BLACK
```

- `Player1` enthält die Werte der Züge von Spieler 1 im Spiel.
- `Player2` enthält die Werte der Züge von Spieler 2 im Spiel.
- `ActivePlayer` verfolgt, wer gerade an der Reihe ist.
- `setPlayer` speichert den Wert dafür, ob das Spiel Spieler gegen Spieler oder Spieler gegen Computer ist.
- `colorBlue` und `colorGreen` speichern die Werte für die Spielerfarben.