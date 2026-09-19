---
title: "Lesen aus der Konsole"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 12
---

## Lesen aus der Konsole

Da wir nun die Grundlagen über Variablen kennen, können wir Eingaben vom Benutzer akzeptieren. Verwenden Sie die folgende Zeile, um der Konsole mitzuteilen, dass sie warten soll, bis der Benutzer etwas in die Konsole eingibt. Anschließend nimmt der Computer das, was in die Konsole eingegeben wurde, und speichert es in der Variablen namens `input`.

```csharp
var input = Console.ReadLine();
```

Hier ist ein Beispiel, wie `Console.ReadLine` verwendet wird, um Benutzereingaben entgegenzunehmen:

```csharp
Console.WriteLine("Geben Sie etwas ein:");
var input = Console.ReadLine();
Console.WriteLine("Sie haben eingegeben: " + input);
```

Wenn der Benutzer **Ausführen** drückt, wird der Benutzer mit folgendem Programm begrüßt:

![alt text height="600px" width="70%"](../media/reading-input-1.png "Lesen aus der Eingabe vor der Eingabe")

In diesem Fall, nachdem der Benutzer `Hallo Welt!` in die Konsole eingetippt hat, beendet das Programm die Ausgabe in der Konsole:

![alt text height="600px" width="70%"](../media/reading-input-2.png "Lesen aus der Eingabe nach der Eingabe")

{{% notice tip %}}

## Zusammenarbeit

Schreiben Sie ein Programm, das zunächst die folgenden zwei Zeilen in der Konsole ausgibt:

```
Willkommen!
Wie kann ich Ihnen heute helfen?
```

Anschließend wartet die Konsole auf Benutzereingaben. Nachdem der Benutzer etwas eingegeben hat und die Eingabetaste gedrückt hat, gibt der Computer Folgendes aus:

```
Sie haben gefragt: [input]?
Ich kenne die Antwort darauf nicht! Auf Wiedersehen!
```

`[input]` sollte durch das ersetzt werden, was der Benutzer in die Konsole eingegeben hat.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Lesen aus der Konsole - .NET Fiddle Editor" frameborder="0"></iframe>

{{% /notice %}}