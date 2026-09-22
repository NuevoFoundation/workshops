---
title: "Kommentare"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 2
---

## Kommentare

Entwickler müssen oft mit anderen Entwicklern zusammenarbeiten. Kommentare sind eine einfache Möglichkeit, Anmerkungen im Code zu machen und mit anderen zu kommunizieren. Kommentare werden vom Computer ignoriert; daher sind sie auch eine einfache Möglichkeit, dem Computer mitzuteilen, dass bestimmte Codezeilen nicht ausgeführt werden sollen. Es gibt zwei Möglichkeiten, Kommentare zu erstellen:

1. Um eine einzelne Zeile zu kommentieren, setzen Sie `//` vor eine Codezeile. Zum Beispiel:

```csharp
// Dies ist ein einzeiliger Kommentar.
```

2. Um mehrere Zeilen auf einmal zu kommentieren, markieren Sie den Anfang des Kommentars mit `/*` und das Ende des Kommentars mit `*/`. Zum Beispiel:

```csharp
/* Dies ist ein mehrzeiliger Kommentar.
   Diese Zeile gehört ebenfalls zum Kommentar. */
```

Um einen Kommentar zu entfernen (oder eine Zeile zu entkommentieren), löschen Sie einfach das `//` bei einem einzeiligen Kommentar oder die Zeichen `/*` und `*/` bei einem mehrzeiligen Kommentar.

{{% notice tip %}}

## Zusammenarbeit

1. Setzen Sie `//` vor `Console.WriteLine("Hello World");`. Drücken Sie anschließend **Run**, und stellen Sie sicher, dass `Hello World` nicht in der Konsole ausgegeben wird.
2. Löschen Sie das `//` und umschließen Sie stattdessen `Console.WriteLine("Hello World");` mit `/*` und `*/`. Vergewissern Sie sich, dass `Hello World` nach dem Drücken von **Run** weiterhin nicht in der Konsole ausgegeben wird.
3. Löschen Sie sowohl `/*` als auch `*/`, und drücken Sie **Run**. Nun sollte `Hello World` in der Konsole ausgegeben werden.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/pdWOTp" title="Comments - .NET Fiddle editor" frameborder="0"></iframe>

Im Verlauf der heutigen Aktivität werden Sie verschiedene mehrzeilige Kommentare und `// TODO`-Kommentare sehen. Diese Kommentare leiten uns dazu an, das Spiel "Guess the Word" zu vervollständigen. Stellen Sie also sicher, dass Sie wissen, wie man Code kommentiert und entkommentiert.

{{% /notice %}}