---
title: "While-Schleifen"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 16
---

## While-Schleifen

`while`-Schleifen sind eine einfache Möglichkeit, die Ausführung von Zeilen zu wiederholen, ohne eine Zeile viele Male wiederverwenden zu müssen. Zum Beispiel, um `Hallo Welt` fünfmal hintereinander auszugeben, kannst du Folgendes tun:

```csharp
var counter = 1;
while (counter <= 5)
{
    Console.WriteLine("Hallo Welt");
    counter = counter + 1;
}
```

Wie bei einer `if`-Anweisung solltest du in den `()` neben `while` einen Booleschen Ausdruck angeben. Wenn der Ausdruck `true` ist, wird der Code innerhalb der geschweiften Klammern `{ }` ausgeführt. Sobald alles innerhalb der geschweiften Klammern ausgeführt wurde, kehren wir zum Anfang der `while`-Schleife zurück und prüfen den Booleschen Ausdruck erneut. Wenn der Boolesche Ausdruck weiterhin `true` ist, wird die Schleife wiederholt.

![alt text height="600px" width="70%"](../media/while-1.png "While 1")

Du kannst auch `if`-Anweisungen in `while`-Schleifen einfügen, um interessante Verhaltensweisen zu erzeugen:

```csharp
var counter = 1;
while (counter <= 10)
{
    if (counter < 5)
    {
        Console.WriteLine("Kleiner als 5!");
    }
    else
    {
        Console.WriteLine("Größer oder gleich 5!");
    }
    counter = counter + 1;
}
```

![alt text height="600px" width="70%"](../media/while-2.png "While 2")

Hier ist ein Beispiel für eine Endlosschleife – siehst du, was falsch ist? Was kannst du tun, damit der folgende Code `Spam!` nur 100 Mal ausgibt?

```csharp
var counter = 100;
while (counter > 0)
{
    Console.WriteLine("Spam!");
}
```

{{% notice tip %}}

## Zusammenarbeit

Nimm deinen Code aus der vorherigen Aktivität. Lass uns den Code erweitern, sodass der Benutzer die Frage nicht nur einmal beantworten kann, sondern bis zu 10 Mal, bevor das Programm endet. Pass auf, dass du keine Endlosschleife erzeugst!

{{% /notice %}}