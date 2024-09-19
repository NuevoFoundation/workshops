---
title: "Steuerstrukturen"
description: "Einführung in If-Else, For- und While-Schleifen in C#."
date: 2024-09-16T00:00:00Z
weight: 6
---

## Eine Entscheidung treffen: If-Anweisung

Patrick 🐥 ist eine sehr höfliche Ente, die jeden gerne mit „Guten Morgen“, „Guten Tag“ oder „Gute Nacht“ je nach aktueller Uhrzeit begrüßt.

![Sonne geht schnell über einem Berg auf](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(Bild von National Geographic: giphy.com/natgeochannel)</p>

Wie wir zuvor gelernt haben, können wir diese Aussagen wie unten ausdrucken:

```C#
Console.WriteLine("Guten Morgen");   // sagen zwischen 0:00 - 11:59
Console.WriteLine("Guten Tag");      // sagen zwischen 12:00 - 19:59
Console.WriteLine("Gute Nacht");     // sagen zwischen 20:00 - 23:59
```

Allerdings wissen wir auch, dass Patrick 🐥 sich abhängig von der aktuellen Zeit für eine dieser Aussagen entscheiden sollte.

Mit anderen Worten, wir müssen Code schreiben, der eine Entscheidung darüber trifft, was basierend auf den Bedingungen der Situation (bedingt) ausgedruckt werden soll.

In C# treffen wir Entscheidungen mit einer **If-Anweisung** oder einer **If-Else-Anweisung**. Lesen Sie die folgenden Notizen:

{{% notice note %}}
### If-Anweisung

```
if(boolean expression){
    Action(s) to Take
}
```

Eine **If-Anweisung** folgt dem oben gezeigten Aufbau. Die auszuführenden Aktionen (Anweisungen) im Block werden nur ausgeführt, wenn der boolesche Ausdruck `true` ist. Andernfalls überspringt das Programm die Anweisung nach dem Block, wenn der Boolesche Ausdruck `false` ist.
### If-Else-Anweisung

```
if(boolean expression){
    Action(s) to Take A
}else{
    Action(s) to Take B
}
```

Eine **If-Else-Anweisung** folgt dem oben gezeigten Aufbau. Wenn der boolesche Ausdruck `true` ist, führt das Programm die `Action(s) to Take A` innerhalb des `if`-Blocks aus. Andernfalls führt das Programm nur `Action(s) to Take B` innerhalb des `else`-Blocks aus.

### Beispiel

```C#
    bool likeMusic = true;
    if(likeMusic == true) 
    {
        Console.WriteLine("I like Music");
    } 
    else 
    {
        Console.WriteLine("I don't like Music");
    }   
```

Der obige Code druckt die Aussage „I like Music“ aus, da der boolesche Ausdruck `likeMusic == true` wahr ist.
{{% /notice %}}

Lassen Sie uns das obige Begrüßungsbeispiel erneut betrachten und für Patrick die Entscheidung treffen, ob er „Guten Morgen“, „Guten Tag“ oder „Gute Nacht“ sagen soll.

Patrick sollte „Guten Morgen“ zwischen 0:00 - 11:59, „Guten Tag“ zwischen 12:00 - 19:59 und „Gute Nacht“ zwischen 20:00 - 23:59 sagen.

1. Wir haben eine Variable `currentHour`, die die aktuelle Stunde speichert. 
2. Füllen Sie den korrekten `boolean expression A` und `boolean expression B` aus, um das Programm zu vervollständigen.
3. Testen Sie Ihr Ergebnis, indem Sie die Variable `currentHour` auf Zahlen von 0 bis 23 zuweisen:

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" frameborder="0"></iframe>

## Wiederholen: For-Schleife, While-Schleife

Im Mathematikunterricht stellt Patricks 🐥 Lehrer der Klasse eine mathematische Herausforderung, und er könnte Hilfe benötigen.

Der Lehrer fordert sie auf, die **Summe von 1, 2, 3, ..., 100** zu finden. Das heißt, was ist **1 + 2 + 3 + 4 ... + 99 + 100**?

Obwohl wir dies in einen Taschenrechner eingeben können, dauert das eine Weile. Zum Glück kann man in C# dies mit Hilfe einer **For-Schleife** oder **While-Schleife** in 3 Zeilen leicht berechnen.

{{% notice note %}}
**For-Schleifen** und **While-Schleifen** sind Steuerstrukturen in C