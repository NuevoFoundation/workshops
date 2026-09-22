```markdown
---
title: "Steuerstrukturen"
description: "Einführung in if-else, for- und while-Schleifen in Java."
date: 2021-10-13T00:00:00Z
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/X8HzOuCel9A" title="Java Steuerstrukturen Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Eine Entscheidung treffen: If-Anweisung

Patrick 🐥 ist eine sehr höfliche Ente, die gerne jeden mit "Guten Morgen", "Guten Nachmittag" oder "Gute Nacht" begrüßt, je nach aktueller Tageszeit.

![Die Sonne steigt schnell über einem Berg auf](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(Bild von National Geographic: giphy.com/natgeochannel)</p>

Wie wir zuvor gelernt haben, können wir diese Statements wie unten gezeigt ausgeben:

```java
System.out.println("Guten Morgen");    // zwischen 0:00 - 11:59 sagen
System.out.println("Guten Nachmittag"); // zwischen 12:00 - 19:59 sagen
System.out.println("Gute Nacht");      // zwischen 20:00 - 23:59 sagen
```

Allerdings wissen wir auch, dass Patrick 🐥 nur entscheiden sollte, eines dieser Statements basierend auf der aktuellen Zeit auszugeben.

Mit anderen Worten, wir müssen Code schreiben, der eine Entscheidung trifft, was basierend auf den Bedingungen der Situation ausgegeben werden soll (konditional).

In Java treffen wir eine Entscheidung mithilfe einer **if-Anweisung** oder einer **if...else-Anweisung**. Lies die folgenden Notizen:

{{% notice note %}}
### If-Anweisung

```
if(boolean Ausdruck){
    Aktion(en) ausführen
}
```

Eine **if-Anweisung** folgt der oben gezeigten Struktur. Die Aktionen (Statements) im Block werden nur ausgeführt, wenn der boolesche Ausdruck `true` ist. Andernfalls überspringt das Programm die Aktion(en) im Block, wenn der boolesche Ausdruck `false` ist.

### If-Else-Anweisung

```
if(boolean Ausdruck){
    Aktion(en) ausführen A
}else{
    Aktion(en) ausführen B
}
```

Eine **if-else-Anweisung** folgt der oben gezeigten Struktur. Wenn der boolesche Ausdruck `true` ist, führt das Programm die `Aktion(en) ausführen A` innerhalb des `if`-Blocks aus. Andernfalls führt das Programm nur `Aktion(en) ausführen B` innerhalb des `else`-Blocks aus.

### Beispiel

```java
boolean likeMusic = true;
if(likeMusic == true) {
    System.out.println("Ich mag Musik");
} else {
    System.out.println("Ich mag Musik nicht");
}
```

Der obige Code wird die Aussage `Ich mag Musik` ausgeben, weil der boolesche Ausdruck `likeMusic == true` wahr ist.
{{% /notice %}}

Lass uns das Begrüßungsbeispiel oben noch einmal aufgreifen und für Patrick entscheiden, ob er "Guten Morgen", "Guten Nachmittag" oder "Gute Nacht" sagen soll. 

Patrick sollte zwischen 0:00 - 11:59 "Guten Morgen", zwischen 12:00 - 19:59 "Guten Nachmittag" und zwischen 20:00 - 23:59 "Gute Nacht" sagen.

1. Wir haben eine Variable `currentHour`, die die aktuelle Stunde speichert. 
2. Fülle den richtigen `booleschen Ausdruck A` und `booleschen Ausdruck B` aus, um das Programm zu vervollständigen.
3. Teste dein Ergebnis, indem du die Variable `currentHour` auf Zahlen von 0 bis 23 setzt:

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsIfStatement" target="_blank">Replit starten</a>

## Wiederhole es: For-Schleife, While-Schleife

Im Matheunterricht fragt die Lehrerin von Patrick 🐥 die Klasse, eine mathematische Herausforderung zu lösen, und er könnte dabei etwas Hilfe brauchen. 

Die Lehrerin fordert sie auf, die **Summe von 1, 2, 3, ..., 100** zu berechnen. Das entspricht **1 + 2 + 3 + 4 ... + 99 + 100**.

Während wir das in einen Taschenrechner eingeben können, würde das einige Zeit dauern. Zum Glück kann man dies in Java leicht in 3 Zeilen mit einer **for-Schleife** oder **while-Schleife** berechnen.

{{% notice note %}}
**For-Schleifen** und **While-Schleifen** sind Steuerstrukturen in Java, die es ermöglichen, Codeblöcke mehrfach auszuführen.

### While-Schleife

```
while(boolean Ausdruck){
    Aktion(en) ausführen
}
```

`Aktion(en) ausführen` im while-Block werden ausgeführt, solange der `boolesche Ausdruck` `true` ist. 

Das folgende Beispiel gibt 1 bis 10 aus:

```java
int number = 1;
while(number <= 10){
    System.out.println(number);
    number = number + 1;        // number wird um 1 erhöht
}
```

In der while-Schleife oben gibt das Programm den Wert von `number` aus und erhöht `number`. Dieser Schritt wird so lange durchgeführt, wie `number <= 10`, und die Schleife endet, wenn `number` 11 ist.

**Hinweis:** Für `while`-Schleifen muss man daran denken, die bedingte Variable zu erhöhen, andernfalls führt man eine unendliche Schleife in seinen Code ein.

### For-Schleife

```
for(initialisierung; Abbruchbedingung; Update-Anweisung){
    Aktion(en) ausführen
}
```

In einer `for`-Schleife gibt es drei Teile im Konditionsblock: `Initialisierung`, `Abbruchbedingung` und `Update-Anweisung`.

1. Beim Ausführen einer for-Schleife führt das Programm den `Initialisierung`-Teil aus, z. B. `int number = 1`.
2. Danach prüft das Programm die `Abbruchbedingung`, z. B. `number <= 10`.
3. Wenn diese `true` ist:
    1. führt die `Aktion(en) ausführen` aus 
    2. führt die `Update-Anweisung` aus (z. B. `number = number + 1`) 
4. Wiederhole Schritt 2 und 3.
5. Wenn die `Abbruchbedingung` `false` ist, beendet die Schleife.

Das folgende Beispiel gibt 1 bis 10 aus:

```java
for(int