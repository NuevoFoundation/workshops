```markdown
---
title: "Kontrollstrukturen"
description: "Einführung in if-else, for- und while-Schleifen in C#."
date: 2024-09-16T00:00:00Z
weight: 6
---

## Eine Entscheidung treffen: If-Anweisung

Patrick 🐥 ist eine sehr höfliche Ente, die jeden, den er trifft, je nach aktueller Uhrzeit mit „Guten Morgen“, „Guten Tag“ oder „Gute Nacht“ begrüßt.

![Schnell über einem Berg aufgehende Sonne](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(Bild von National Geographic: giphy.com/natgeochannel)</p>

Wie wir zuvor gelernt haben, können wir diese Aussagen wie folgt ausgeben:

```C#
Console.WriteLine("Guten Morgen");   // zwischen 0:00 - 11:59 sagen
Console.WriteLine("Guten Tag");     // zwischen 12:00 - 19:59 sagen
Console.WriteLine("Gute Nacht");    // zwischen 20:00 - 23:59 sagen
```

Allerdings wissen wir auch, dass Patrick 🐥 nur eine dieser Aussagen basierend auf der aktuellen Uhrzeit treffen sollte.

Anders ausgedrückt: Wir müssen Code schreiben, der auf Grundlage der Gegebenheiten (konditional) entscheidet, was ausgegeben werden soll.

In C# treffen wir Entscheidungen mithilfe einer **if-Anweisung** oder einer **if...else-Anweisung**. Lies die folgenden Informationen:

{{% notice note %}}
### If-Anweisung

```
if(boolescher Ausdruck){
    Aktion(en), die ausgeführt werden
}
```

Eine **if-Anweisung** folgt der obigen Struktur. Die Aktionen im Block werden nur ausgeführt, wenn der boolesche Ausdruck `true` ist. Andernfalls überspringt das Programm den Block und fährt mit der Anweisung nach dem Block fort, wenn der boolesche Ausdruck `false` ist.
### If-Else-Anweisung

```
if(boolescher Ausdruck){
    Aktion(en), die ausgeführt werden A
}else{
    Aktion(en), die ausgeführt werden B
}
```

Eine **if-else-Anweisung** folgt der oben gezeigten Struktur. Wenn der boolesche Ausdruck `true` ist, führt das Programm die Aktion(en) im `if`-Block aus. Andernfalls führt das Programm nur die Aktion(en) im `else`-Block aus.

### Beispiel

```C#
    bool magMusik = true;
    if(magMusik == true) 
    {
        Console.WriteLine("Ich mag Musik");
    } 
    else 
    {
        Console.WriteLine("Ich mag Musik nicht");
    }   
```

Der obige Code gibt die Aussage `Ich mag Musik` aus, da der boolesche Ausdruck `magMusik == true` wahr ist.
{{% /notice %}}

Lass uns das obige Begrüßungsbeispiel noch einmal aufgreifen und für Patrick entscheiden, ob er „Guten Morgen“, „Guten Tag“ oder „Gute Nacht“ sagen soll.

Patrick sollte zwischen 0:00 - 11:59 „Guten Morgen“, zwischen 12:00 - 19:59 „Guten Tag“ und zwischen 20:00 - 23:59 „Gute Nacht“ sagen.

1. Wir haben eine Variable `currentHour`, die die aktuelle Stunde speichert. 
2. Fülle die korrekten `Boolean Expression A` und `Boolean Expression B` aus, um das Programm zu vervollständigen.
3. Teste dein Ergebnis, indem du die Variable `currentHour` auf Werte zwischen 0 und 23 setzt:

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" title="Interaktive Übung zu bedingten Anweisungen in C#" frameborder="0"></iframe>

## Wiederholen: For-Schleife, While-Schleife

Im Mathematikunterricht stellt Patrick's 🐥 Lehrer der Klasse eine mathematische Aufgabe, bei der er möglicherweise Hilfe benötigt. 

Der Lehrer fordert sie auf, die **Summe von 1, 2, 3, …, 100** zu finden. Das heißt **1 + 2 + 3 + 4 … + 99 + 100**?

Während wir dies in einen Taschenrechner eingeben könnten, würde das eine Weile dauern. Zum Glück kannst du das in C# mit Hilfe einer **for-Schleife** oder einer **while-Schleife** in nur 3 Zeilen leicht berechnen.

{{% notice note %}}
**For-Schleifen** und **While-Schleifen** sind Kontrollstrukturen in C#, die es dir ermöglichen, Codeblöcke mehrfach auszuführen.

### While-Schleife

```
while(boolescher Ausdruck){
    Aktion(en), die ausgeführt werden
}
```

Die `Aktion(en)` im While-Block werden ausgeführt, solange der `boolesche Ausdruck` `true` ist. 

Das folgende Beispiel gibt die Zahlen 1 bis 10 aus:

```C#
int zahl = 1;
while(zahl <= 10){
    Console.WriteLine(zahl);
    zahl = zahl + 1;        // zahl wird um 1 erhöht
}
```

In der obigen While-Schleife gibt das Programm den Wert von `zahl` aus und erhöht `zahl`. Dieser Schritt wird so lange ausgeführt, wie `zahl <= 10` wahr ist. Die Schleife endet, wenn `zahl` auf 11 erhöht wird.

**Hinweis:** Bei `while`-Schleifen musst du daran denken, die Bedingungsvariable zu erhöhen, da du sonst eine Endlosschleife in deinem Programm einführst.

### For-Schleife

```
for(Initialisierung; Terminierungsbedingung; Aktualisierungsanweisung){
    Aktion(en), die ausgeführt werden
}
```

In einer `for`-Schleife gibt es drei Teile im Bedingungsblock: `Initialisierung`, `Terminierungsbedingung` und `Aktualisierungsanweisung`.

1. Beim Ausführen einer for-Schleife führt das Programm zuerst den `Initialisierung`-Teil aus. Ein Beispiel wäre: `int zahl = 1`.
2. Danach überprüft das Programm die `Terminierungsbedingung`. Ein Beispiel wäre: `zahl <= 10`.
3. Wenn die Bedingung `true` ist:
    1. führt das Programm die `Aktion(en)` aus.
    2. führt das Programm die `Aktualisierungsanweisung` aus (z. B. `zahl = zahl + 1`).
4. Wiederhole Schritt 2 und 3.
5. Ist die `Terminierungsbedingung` `false`, verlässt das Programm die `for`-Schleife.

Das folgende Beispiel gibt die Zahlen 1 bis 10 aus:

```C#
for(int zahl = 1; zahl <= 10; zahl = zahl + 