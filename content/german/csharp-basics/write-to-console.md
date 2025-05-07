---
title: "In die Konsole schreiben"
description: "Einführung in die Print-Methoden in C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Dein erstes C#-Programm

Unsere erste Übung besteht darin, sich mit der Struktur einer einfachen C#-Anwendung vertraut zu machen, die in die Konsole schreibt.

Versuchen wir, ein C#-Programm auszuführen, das `Hello World` in die Konsole schreibt. Die Zeile `Console.WriteLine ("Hello World");` erledigt dies für uns. Sie weist den Computer an, das, was sich zwischen den () befindet, auf den Bildschirm zu schreiben.

### Schreiben wir etwas Code!

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

Füge im obigen .NET Fiddle-Rahmen eine neue Zeile unter der ersten hinzu, um "Hello *dein Name*" zu drucken. Es sollte ungefähr so aussehen.

<img src="../images/Step1.png" height="300" alt="Der Startbildschirm eines Fiddles" />

Du solltest deine Ausgabe unten auf dem Bildschirm sehen. Cool, oder?  

Versuchen wir, andere Dinge zu drucken. Füge einige zusätzliche Codezeilen hinzu, um:
1. Zahlen zu drucken, indem du Zahlen in die Klammern setzt (z.B. `Console.WriteLine(42);`). Keine Anführungszeichen erforderlich.
2. Text zusammenzufügen (z.B. `Console.WriteLine("Hi " + "Sally");`)

{{% notice tip %}}
### Hast du bemerkt, dass alle Anweisungen, die du getippt hast, auf unterschiedlichen Zeilen gedruckt wurden?

Manchmal möchten wir auf derselben Zeile schreiben. Wir verwenden einen etwas anderen Code `Console.Write` anstelle von `Console.WriteLine`.

Füge zwei Codezeilen hinzu:
```csharp
Console.Write("Ich esse gerne ");
Console.Write("Äpfel.");
```

Und probiere es aus.
{{% /notice %}}

{{% notice warning %}}
### !! Wichtig !! Manchmal kannst du nicht einfach Zeichen in " " setzen

Wenn du Zeichen in "`" in einer Print-Anweisung setzt, ist es manchmal leicht, den Computer zu verwirren, welche Zeichen gedruckt werden sollen.

Zum Beispiel, wie sagen wir dem Computer, dass er `"` drucken soll?

Wenn du `Console.WriteLine(""");` tippst, erhältst du einen Fehler, da der Computer nicht erkennen kann, wo der Text endet!

Stattdessen müssen bestimmte Zeichen durch ein `\` davor <b>escapet</b> werden.

```csharp
Console.Writeline("\"");`  // das druckt "
```
{{% /notice %}}