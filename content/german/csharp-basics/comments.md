---
title: "Kommentare"
description: "Kommentare in C# einführen."
date: 2024-09-16T00:00:00Z
weight: 3
---

## Einen Kommentar erstellen

Beim Erstellen eines C#-Programms können wir Notizen machen, indem wir einen einzeiligen Kommentar mit `//` oder einen mehrzeiligen Kommentar mit `/*` und `*/` hinzufügen (Hinweis: Die Anweisungen in den vorherigen Aktivitäten wurden als Kommentare geschrieben).

Das Hinzufügen von Kommentaren beeinflusst das Programm in keiner Weise. Daher können Sie Kommentare in Ihrem Code hinzufügen, um zu dokumentieren, wie er für Sie und andere Programmierer funktioniert.

```c#
     // Beispiel für einen einzeiligen Kommentar

     /* Beispiel
      * mehrzeiliger
      * Kommentar */
```

## Mit Kommentaren spielen

Fügen Sie im untenstehenden .NET Fiddle-Frame einen einzeiligen Kommentar und einen mehrzeiligen Kommentar in Ihr Programm ein.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" frameborder="0"></iframe>

{{% notice tip %}}

Sie können Ihren Code kommentieren, damit der Computer ihn nicht ausführt.

```c#
Console.Write("Ich esse gerne");
// Console.Write("Äpfel.");
```

Wird "Ich esse gerne" in die Konsole schreiben, aber nicht "Äpfel".
{{% /notice %}}