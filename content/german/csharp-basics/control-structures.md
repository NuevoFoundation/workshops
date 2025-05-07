---
title: "Kontrollstrukturen"
description: "Einführung in if-else, for- und while-Schleifen in C#."
date: 2024-09-16T00:00:00Z
weight: 6
---

## Eine Entscheidung treffen: If-Anweisung

Patrick 🐥 ist eine sehr höfliche Ente, die gerne jeden, den sie trifft, mit „Guten Morgen“, „Guten Nachmittag“ oder „Gute Nacht“ je nach aktueller Uhrzeit begrüßt.

![Schnell über einem Berg aufgehende Sonne](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(Bild von National Geographic: giphy.com/natgeochannel)</p>

Wie wir bereits gelernt haben, können wir diese Aussagen wie folgt ausdrucken:

```C#
Console.WriteLine("Guten Morgen");   // sage es zwischen 0:00 - 11:59
Console.WriteLine("Guten Nachmittag"); // sage es zwischen 12:00 - 19:59
Console.WriteLine("Gute Nacht");     // sage es zwischen 20:00 - 23:59
```

Wir wissen jedoch auch, dass Patrick 🐥 nur eine dieser Aussagen basierend auf der aktuellen Uhrzeit treffen sollte.

Mit anderen Worten, wir müssen Code schreiben, der eine Entscheidung darüber trifft, was unter den Gegebenheiten der Situation ausgegeben werden soll (bedingt).

In C# treffen wir eine Entscheidung mit einer **if-Anweisung** oder einer **if...else-Anweisung**. Lesen Sie die folgenden Hinweise:

{{% notice note %}}
### If-Anweisung

```
if(boolean expression){
    Aktion(en) ausführen
}
```

Eine **if-Anweisung** folgt der oben gezeigten Struktur. Die Aktionen im Block werden nur ausgeführt, wenn der boolesche Ausdruck `true` ist. Andernfalls überspringt das Programm zur Anweisung nach dem Block, wenn der boolesche Ausdruck `false` ist.

### If-Else-Anweisung

```
if(boolean expression){
    Aktion(en) ausführen A
}else{
    Aktion(en) ausführen B
}
```

Eine **if-else-Anweisung** folgt der oben gezeigten Struktur. Wenn der boolesche Ausdruck `true` ist, führt das Programm die `Aktion(en) A aus` im `if`-Block aus. Andernfalls führt das Programm nur `Aktion(en) B aus` im `else`-Block.

### Beispiel

```C#
    bool likeMusic = true;
    if(likeMusic == true) 
    {
        Console.WriteLine("Ich mag Musik");
    } 
    else 
    {
        Console.WriteLine("Ich mag keine Musik");
    }   
```

Der obige Code gibt die Aussage `Ich mag Musik` aus, da der boolesche Ausdruck `likeMusic == true` wahr ist.
{{% /notice %}}

Lassen Sie uns das obige Grußbeispiel noch einmal besuchen und für Patrick eine Entscheidung treffen, ob er „Guten Morgen“, „Guten Nachmittag“ oder „Gute Nacht“ sagen soll.

Patrick sollte „Guten Morgen“ zwischen 0:00 - 11:59, „Guten Nachmittag“ zwischen 12:00 - 19:59 und „Gute Nacht“ zwischen 20:00 - 23:59 sagen.

1. Wir haben eine Variable `currentHour`, die die aktuelle Stunde speichert.
2. Füllen Sie den korrekten `booleschen Ausdruck A` und `booleschen Ausdruck B` aus, um das Programm abzuschließen.
3. Testen Sie Ihr Ergebnis, indem Sie die Variable `currentHour` auf Zahlen von 0 bis 23 setzen:

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" frameborder="0"></iframe>

## Erneut wiederholen: For-Schleife, While-Schleife

Im Mathematikunterricht bittet Patricks 🐥 Lehrer die Klasse, eine mathematische Aufgabe zu lösen, und er könnte Hilfe brauchen.

Der Lehrer fordert sie auf, die **Summe von 1, 2, 3, ...., 100** zu finden. Das heißt, was ist **1 + 2 + 3 + 4 ... + 99 + 100**?

Obwohl wir dies in einen Taschenrechner einstecken können, dauert das eine Weile. Glücklicherweise können Sie in C# mit Hilfe einer **for-Schleife** oder **while-Schleife** dies in 3 Zeilen leicht berechnen.

{{% notice note %}}
**For-Schleifen** und **While-Schleifen** sind Kontrollstrukturen in C#,