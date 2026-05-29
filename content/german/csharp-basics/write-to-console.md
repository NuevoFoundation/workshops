---
title: "In die Konsole schreiben"
description: "Einführung in die Print-Methoden in C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Dein erstes C#-Programm

Unsere erste Übung besteht darin, sich mit der Struktur einer einfachen C#-Anwendung, die in die Konsole schreibt, vertraut zu machen.

Lass uns versuchen, ein C#-Programm auszuführen, das `Hello World` in die Konsole schreibt. Die Codezeile `Console.WriteLine("Hello World");` erledigt dies für uns. Sie weist den Computer an, alles, was sich zwischen den Klammern () befindet, auf dem Bildschirm auszugeben.

### Lass uns Code schreiben!

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

Füge im obenstehenden .NET Fiddle-Fenster eine neue Codezeile unter der ersten Zeile hinzu, um "Hello *dein Name*" auszugeben. Es sollte etwa so aussehen:

<img src="../images/Step1.png" height="300" alt="Der Startbildschirm eines Fiddles" />

Unten auf dem Bildschirm solltest du deine Ausgabe sehen. Cool, oder?  

Lass uns versuchen, andere Dinge auszugeben. Füge einige zusätzliche Codezeilen hinzu, um:
1. Zahlen auszugeben, indem du Zahlen in die Klammern setzt (z. B. `Console.WriteLine(42);`). Keine Anführungszeichen nötig.
2. Text zusammenzufügen (z. B. `Console.WriteLine("Hi " + "Sally");`).

{{% notice tip %}}
### Hast du bemerkt, dass alle Anweisungen, die du eingegeben hast, auf verschiedenen Zeilen gedruckt wurden?

Manchmal möchten wir auf der gleichen Zeile schreiben. Dafür verwenden wir den leicht abgeänderten Code `Console.Write` anstelle von `Console.WriteLine`.

Füge zwei Codezeilen hinzu:
```csharp
Console.Write("Ich esse gerne ");
Console.Write("Äpfel.");
```

Und probiere es aus.
{{% /notice %}}

{{% notice warning %}}
### !! Wichtig !! Manchmal kannst du nicht einfach Zeichen zwischen " " setzen

Wenn man Zeichen zwischen `" "` in einer Print-Anweisung setzt, kann es leicht passieren, dass der Computer verwirrt wird, welche Zeichen er ausgeben soll.

Zum Beispiel: Wie weisen wir den Computer an, ein `"`-Zeichen auszugeben?

Wenn du `Console.WriteLine(""");` eingibst, erhältst du einen Fehler, da der Computer nicht erkennen kann, wo der Text endet!

Stattdessen müssen bestimmte Zeichen durch Hinzufügen eines `\` davor <b>escaped</b> werden.

```csharp
Console.WriteLine("\"");  // Dies gibt " aus
```
{{% /notice %}}