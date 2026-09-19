```markdown
---
title: "Übung 3 - Die Burrows-Wheeler-Transformation"
difficulties: ["mittel"]
weight: 11
draft: false
---

Die Burrows-Wheeler-Transformation (BWT) ist ein Algorithmus, der in der Datenkompression verwendet wird. Er nimmt als Eingabe einen String und gibt einen codierten String aus, bei dem ähnliche Zeichen normalerweise zusammen gruppiert sind.

## Die Theorie

Der Algorithmus ist relativ einfach und leicht zu verstehen.

1. Nimm den Eingabestring und erstelle alle seine rotatorischen Transformationen. (Siehe Bild).
2. Sortiere die Rotationen in lexikografischer Reihenfolge, aufsteigend.
3. Nimm die letzte Spalte der sortierten Transformation; dies ist die Ausgabe.

![Burrows-Wheeler-Transformation](../resources/e3-01.png "Die 3 Schritte der Burrows-Wheeler-Transformation")

Im obigen Diagramm verwenden wir den String `banana` als Beispiel. Das `\0` ist ein Symbol, das das Ende des Strings kennzeichnet (wie das Nullterminierungszeichen in C), ist jedoch lexikografisch das GRÖSSTE Zeichen im Vergleich zu den anderen.

Eine effiziente Möglichkeit, die BWT zu implementieren, ist die Verwendung einer Datenstruktur namens Suffix-Array. Um ein Suffix-Array zu erstellen, nehmen wir zunächst alle Suffixe eines Eingabestrings und geben diesen eine nummerierte Bezeichnung. Anschließend sortieren wir die Suffixe lexikografisch.

![Suffix-Arrays](../resources/e3-02.png "Schritte zur Erstellung eines Suffix-Arrays")

Am Beispiel von `Nuevo\0` nehmen wir zunächst die Suffixe davon und listen sie auf. Danach sortieren wir sie in lexikografischer Reihenfolge, wobei `\0` wie zuvor das null-terminierende Zeichen ist und als größtes Zeichen wirkt. Schließlich nehmen wir den Index des ersten Buchstabens jedes Suffixes und platzieren ihn in ein Array. Zum Beispiel ist der Index des Buchstabens `N` in `Nuevo\0` `0`, während der Index von `e` `2` ist. Da sie alphabetisch die kleinsten sind, kommen sie in die Plätze 0 und 1 des Arrays.

Wir können Suffixe also als Rotationen für die Burrows-Wheeler-Transformation betrachten! Alles, was wir tun müssen, ist, das *Präfix*, das wir „abgeschnitten“ haben, an das Ende des Strings anzuhängen. So wird aus `evo\0` beispielsweise `evo\0Nu`, wenn wir das Suffix als Rotation betrachten. Wenn wir dies für alle Suffixe tun, erhalten wir die sortierten Rotationen, die wir für die Burrows-Wheeler-Transformation benötigen.

![Suffixe zu Rotationen](../resources/e3-03.png "Tabelle zur Sortierung von Rotationen aus Suffixen für die Burrows-Wheeler-Transformation")

Ein wichtiger Hinweis ist, dass wir die Rotationen nicht tatsächlich speichern müssen, da uns die Indizes im Suffix-Array diese Information bereits geben. Wenn `suffix_array[i] == 0`, dann wissen wir, dass die Rotation, die wir betrachten, `Nuevo\0` ist. Wenn `suffix_array[i] == 3`, dann betrachten wir die Rotation `vo\0Nue`. Man kann sich das so vorstellen, dass wir `N` Stellen nach rechts rotieren im Fall, dass `suffix_array[i] == N`. Die obige Abbildung demonstriert dies.

Mit diesem Ansatz können wir den letzten Buchstaben der Rotation einfach erhalten, indem wir `suffix_array[i]` nehmen, 1 subtrahieren und dann den Modulus der Gesamtlaenge des Suffix-Arrays berechnen, um den Index des ursprünglichen Strings zu finden, den wir suchen. Dies ergibt die Burrows-Wheeler-Transformation für jeden gegebenen String.

## Die Implementierung

Die von uns verwendete Implementierungsstrategie wurde oben hervorgehoben: ein Suffix-Array erstellen, dann die Indizes nehmen, 1 subtrahieren und schließlich eine Modulo-Operation mit der Länge des Strings (einschließlich des Nullterminators) ausführen.

Wir haben das Suffix-Array implementiert und damit die Burrows-Wheeler-Transformation. Allerdings waren wir beim Implementieren müde und haben einige Bugs übersehen. Diese Übung kann knifflig sein, da sie viele Indizierungsschritte und Trickserei damit erfordert. Ein Hinweis, um die Fehler zu beheben: Die meisten Probleme sind im Zusammenhang mit dem Suffix-Array und dessen Verwendung zu finden.

{{% notice tip %}}
Das Nullterminator-Zeichen kann beeinflussen, wie deine Strings gedruckt werden. In dieser Übung musst du den transformierten String Zeichen für Zeichen ausgeben, da das Nullterminator-Zeichen die `printf`-Funktion dazu bringt, das Drucken nach dem Fund des Zeichens zu stoppen. Der folgende Code gibt das Ergebnis des Aufrufs von `bwt(dest, src)` aus, wobei `STR_LEN` die statische Länge des Strings **einschließlich des Nullterminators** ist.
```c
for(int i = 0; i < STR_LEN; ++i) {
    printf("%c", dest[i]);
}
```
Beachte, dass `strlen()` die Länge des Strings *ohne* den Nullterminator zurückgibt.

Ein letzter Tipp: `%` ist in C **nicht** der Modulo-Operator! Es ist der Modulo-Restoperator. Vielleicht ist das der Grund, warum bei einigen Indizierungen etwas schiefgelaufen ist...
{{% /notice %}}

Alle Funktionen sind in `bwt.h` dokumentiert. Nutze alle Werkzeuge wie gdb und valgrind zu deinem Vorteil. Viel Glück!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-3" target="_blank">Replit öffnen</a>
```