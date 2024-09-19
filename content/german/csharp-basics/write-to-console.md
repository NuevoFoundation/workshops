---
title: "In die Konsole schreiben"
description: "Einführung in die Print-Methoden in C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Dein erstes C#-Programm

Unsere erste Übung besteht darin, uns mit der Struktur einer einfachen C#-Anwendung vertraut zu machen, die in die Konsole schreibt.

Lass uns versuchen, ein C#-Programm auszuführen, das `Hello World` in die Konsole druckt. Die Codezeile `Console.WriteLine ("Hello World");` macht genau das für uns. Sie weist den Computer an, alles zwischen den () auf den Bildschirm zu schreiben.

### Lass uns etwas Code schreiben!

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

Füge im obigen .NET Fiddle-Fenster eine neue Codezeile unter der ersten Zeile hinzu, um "Hello *dein Name*" zu drucken. Es sollte ungefähr so aussehen:

<img src="../images/Step1.png" height="300" alt="Der Startbildschirm eines Fiddle" />

Du solltest deine Ausgabe unten auf dem Bildschirm sehen. Cool, oder?

Lass uns versuchen, andere Dinge zu drucken. Füge einige zusätzliche Codezeilen hinzu, um:
1. Zahlen zu drucken, indem du Zahlen in die Klammern setzt (z.B. `Console.WriteLine(42);`). Keine Anführungszeichen benötigt.
2. Texte zusammenzufügen (z.B. `Console.WriteLine("Hi " + "Sally");`)

{{% notice tip %}}
### Hast du bemerkt, dass alle Anweisungen, die du getippt hast, auf verschiedenen Zeilen gedruckt wurden?

Manchmal wollen wir auf derselben Zeile schreiben. Dafür verwenden wir einen etwas anderen Code `Console.Write` anstelle von `Console.WriteLine`.

Füge zwei Codezeilen hinzu:
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

Und probiere es aus.
{{% /notice %}}

{{% notice warning %}}
### !! Wichtig !! Manchmal kannst du nicht einfach Zeichen in " " setzen

Beim Einfügen von Zeichen in `" "` in einer Druckanweisung kann es manchmal leicht passieren, dass der Computer verwirrt wird, welche Zeichen gedruckt werden sollen.

Zum Beispiel, wie sagen wir dem Computer, dass er `"` drucken soll?

Wenn du `Console.WriteLine(""");` eingibst, bekommst du einen Fehler, weil der Computer nicht erkennen kann, wo der Text endet!

Stattdessen müssen bestimmte Zeichen <b>escaped</b> werden, indem ein `\` davor gesetzt wird.

```csharp
Console.Writeline("\"");`  // dies druckt "
```
{{% /notice %}}