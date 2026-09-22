---
title: "Zahlen"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 7
---

## Zahlen

Der Computer kann auch ganz normale Mathematik ausführen, die du aus der Schule kennst. Verwende `Console.WriteLine`, um das Ergebnis der mathematischen Ausdrücke auszugeben. Für Zahlen sind keine Anführungszeichen erforderlich!

```csharp
Console.WriteLine(5 + 4);
Console.WriteLine(6 * (9 - 7) / 3);
```

![alt text height="600px" width="70%"](../media/numbers-intro.png "Zahlen ausgeben")

Hier ist die vollständige Liste der mathematischen Symbole, die du verwenden kannst:

| Operator | Beschreibung | Operator     | Beschreibung       |
| -------- | ------------ | ------------ | ------------------ |
| `+`      | Addition     | `\`          | Division           |
| `-`      | Subtraktion  | `%`          | Modulo (Restwert)  |
| `*`      | Multiplikation | `(`,`)`    | Klammern           |

{{% notice info %}}

## Interessante Tatsache: Division am Computer

Der Computer führt Division anders aus als dein gewöhnlicher Taschenrechner. Die Division am Computer schließt Reste oder Dezimalzahlen aus. Zum Beispiel ergibt `15 / 4` `3` und nicht `3,75`.

{{% /notice %}}

{{% notice tip %}}

## Gemeinsam arbeiten

Versuche, die Antworten der folgenden Beispiele in der Konsole auszugeben. Überprüfe, ob die Klammern korrekt zusammenpassen. Verwende einen Taschenrechner (oder Kopfrechnen), um zu verifizieren, dass der Computer die richtige Antwort liefert.

- `2 - 19`
- `(3 + 5) * 6`
- `(13 + 5 * 8) / (6 - (3 + 7))`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Zahlen - .NET Fiddle Editor" frameborder="0"></iframe>

{{% /notice %}}

{{% notice info %}}

## Interessante Tatsache: Zufallszahlen

So kannst du eine Zufallszahl zwischen `1` (einschließlich) und `10` (ausschließlich) ausgeben:

```csharp
Random random = new Random();
Console.WriteLine(random.Next(1, 10));
```

Versuche herauszufinden, wo wir `Random` im Spiel GuessTheWord verwenden! Allerdings sind die Details, wie dies funktioniert, kompliziert, daher überspringen wir diese Diskussion.

{{% /notice %}}