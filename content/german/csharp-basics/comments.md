---
title: "Kommentare"
description: "Einführung in Kommentare in C#."
date: 2024-09-16T00:00:00Z
weight: 3
---

## Kommentar erstellen

Beim Erstellen eines C#-Programms können wir Notizen hinzufügen, indem wir entweder einen einzeiligen Kommentar mit `//` oder mehrzeilige Kommentare mit `/*` und `*/` verwenden (Hinweis: Die Anweisungen in den vorherigen Aktivitäten wurden als Kommentare geschrieben).

Das Hinzufügen von Kommentaren hat keinerlei Auswirkung auf das Programm. Daher kannst du Kommentare in deinem Code hinzufügen, um zu dokumentieren, wie er funktioniert – sowohl für dich selbst als auch für andere Entwickler.

```c#
     // Beispiel für einen einzeiligen Kommentar

     /* Beispiel für
      * mehrzeiligen
      * Kommentar */
```

## Mit Kommentaren experimentieren

Füge im .NET Fiddle unten einen einzeiligen und einen mehrzeiligen Kommentar zu deinem Programm hinzu.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" title="Interaktives C# Kommentar-Übungsmodul" frameborder="0"></iframe>

{{% notice tip %}}

Du kannst deinen Code kommentieren, damit der Computer ihn nicht ausführt.

```c#
Console.Write("Ich esse gerne");
// Console.Write("Äpfel.");
```

Dieser Code zeigt "Ich esse gerne" in der Konsole an, aber nicht "Äpfel".
{{% /notice %}}