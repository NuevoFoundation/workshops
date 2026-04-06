---
title: "In die Konsole schreiben"
description: "Einführung in die Print-Methoden in C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Dein erstes C#-Programm

Unsere erste Übung besteht darin, sich mit der Struktur einer einfachen C#-Anwendung vertraut zu machen, die in die Konsole schreibt.

Versuchen wir, ein C#-Programm auszuführen, das `Hello World` in die Konsole schreibt. Die Codezeile `Console.WriteLine ("Hello World");` erledigt das für uns. Sie weist den Computer an, alles, was zwischen den Klammern () steht, auf dem Bildschirm auszugeben.

### Lass uns etwas Code schreiben!

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

Füge in dem obigen .NET Fiddle ein neue Codezeile unter der ersten Zeile hinzu, um "Hello *dein Name*" auszugeben. Es sollte ungefähr so aussehen:

<img src="../images/Step1.png" height="300" alt="Der Startbildschirm eines Fiddles" />

Am unteren Rand des Bildschirms solltest du deine Ausgabe sehen. Cool, oder?  

Versuchen wir, andere Dinge auszugeben. Füge einige zusätzliche Codezeilen hinzu, um:
1. Zahlen auszugeben, indem du Zahlen in die Klammern setzt (z. B. `Console.WriteLine(42);`). Anführungszeichen sind nicht nötig.
2. Text aneinanderzureihen (z. B. `Console.WriteLine("Hi " + "Sally");`).

{{% notice tip %}}
### Ist dir aufgefallen, dass alle Anweisungen, die du eingegeben hast, neue Zeilen verwendet haben?

Manchmal möchten wir jedoch in derselben Zeile schreiben. In solchen Fällen verwenden wir einen leicht anderen Code: `Console.Write` anstelle von `Console.WriteLine`.

Füge zwei Codezeilen hinzu:
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

Und probiere es aus.
{{% /notice %}}

{{% notice warning %}}
### !! Wichtig !! Manchmal kannst du nicht einfach Zeichen zwischen " " setzen

Wenn du Zeichen zwischen `" "` in einer Print-Anweisung setzt, kann es leicht passieren, dass der Computer verwirrt wird und nicht weiß, welche Zeichen gedruckt werden sollen.

Beispielsweise, wie sagen wir dem Computer, dass er `"` ausgeben soll?

Wenn du `Console.WriteLine(""");` eingibst, erhältst du einen Fehler, da der Computer nicht erkennen kann, wo der Text endet!

Stattdessen müssen bestimmte Zeichen durch ein `<b>\</b>` <b>maskiert</b> werden.

```csharp
Console.Writeline("\"");  // dies gibt "
```
{{% /notice %}}