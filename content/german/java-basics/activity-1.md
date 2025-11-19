---
title: "Ausgabeanweisungen und Kommentare"
description: "Einführung in println()-Methoden und Kommentare in Java."
date: 2021-10-13T00:00:00Z
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/uYoq-4juYBY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Lass das Programm sprechen!

Lass uns versuchen, ein Programm zu schreiben, das `Hello World` ausgibt, indem wir die Codezeile `System.out.print("Hello World");` eingeben.

Das Programm gibt alles aus, was du in die Klammern von `System.out.print` eingibst. Und jede Codezeile endet mit `;`.

Füge anschließend weitere Anweisungen hinzu, um Zahlen auszugeben, indem du Zahlen in die Klammern setzt (z. B. `System.out.print(2020)`), oder ein Symbol, indem du ein Symbol zwischen zwei einfache Anführungszeichen `'` setzt (z. B. `System.out.print('@')`).

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsHelloWorld" target="_blank">Launch Replit</a>

{{% notice tip %}}
### Hast du bemerkt, dass alle Anweisungen, die du eingegeben hast, in einer Zeile ausgegeben wurden?

Manchmal möchten wir beim Tippen eine neue Zeile beginnen.
Um das zu tun, geben wir einen leicht abgewandelten Code ein: `System.out.println();`

(Hinweis: Wir schreiben `println` statt `print`, um nach der Ausgabe eine neue Zeile zu erzeugen)

Probiere es aus! Lass alle Anweisungen in verschiedenen Zeilen ausgeben.
{{% /notice %}}

{{% notice tip %}}
### Wie gibt man mehrere Symbole in einer Zeile aus?

Wir haben gelernt, dass wir Symbole mit einem einfachen Anführungszeichen `'` umgeben können, aber wie drucken wir mehrere Symbole in einer Zeile?

Wir können sie einfach zwischen zwei Doppelanführungszeichen `"` setzen (z. B. `System.out.print("@ , - h A #");`).

{{% /notice %}}

{{% notice tip %}}
### !! Wichtig !! Manchmal kann man Zeichen nicht einfach in " " setzen

Wenn man Zeichen zwischen `" "` in einer Ausgabeanweisung setzt, kann es manchmal passieren, dass der Computer verwirrt ist, welche Zeichen er ausgeben soll.

Zum Beispiel, wie sagen wir dem Computer, dass er `"` ausgeben soll?

Wenn du schreibst `System.out.print(""");`, erhältst du einen Fehler! Der Computer kann nicht erkennen, wo der Text endet!

Stattdessen müssen bestimmte Zeichen <b>escaped</b> werden, indem ein `\` davor gesetzt wird.

     System.out.print("\"");  // dies gibt " aus

Andere Zeichen, die in Java escaped werden müssen, sind: `'`, `"`, `\`.
{{% /notice %}}

## Drucke eine Eule

Lass uns 🐥 Patricks ersten Freund kennenlernen, die Eule Minerva 🦉!

Nutze das, was du gerade gelernt hast, und erstelle diese Eule unten mit nur 4 Zeilen Code neu! (Kunst-Credit: asciiart.eu/animals/birds-land)

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Hi, ich bin Minerva. Patricks Freundin!  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 


<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOwl" target="_blank">Launch Replit</a>

{{% notice warning %}}
#### Ich habe einen Fehler erhalten!

     Main.java:4: error: reached end of file while parsing
Wenn du einen Fehler wie oben erhältst, ist es möglich, dass du vergessen hast, Zeichen wie `"` und `\` zu escapen.

Schau dir den dritten Tipp oben nochmals an, um zu sehen, wie man Zeichen in einer Ausgabeanweisung escapen kann!
{{% /notice %}}

## Schreibe einen Kommentar

Beim Erstellen eines Java-Programms können wir Notizen durch Einfügen eines Einzeilenkommentars mit `//` oder eines