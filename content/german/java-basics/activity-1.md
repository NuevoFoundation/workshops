---
title: "Printanweisungen und Kommentare"
description: "Einführung in println() Methoden und Kommentare in Java."
date: 2021-10-13T00:00:00Z
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/uYoq-4juYBY" title="Video zu Java Print-Anweisungen und Kommentaren" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Lass das Programm sprechen!

Versuchen wir, ein Programm zu schreiben, das `Hello World` ausgibt, indem wir die Codezeile `System.out.print("Hello World");` eingeben.

Das Programm gibt genau das aus, was du in die Klammern von `System.out.print` eingegeben hast. Und jede Codezeile endet mit `;`.

Füge anschließend weitere Anweisungen hinzu, um Zahlen auszugeben, indem du Zahlen in die Klammern schreibst (z. B. `System.out.print(2020)`), oder ein Symbol, indem du ein Symbol zwischen zwei einfache Anführungszeichen `'` setzt (z. B. `System.out.print('@')`).

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsHelloWorld" target="_blank">Replit starten</a>

{{% notice tip %}}
### Ist dir aufgefallen, dass alle Anweisungen, die du eingegeben hast, in einer Zeile ausgegeben wurden?

Manchmal möchten wir nach einer eingegebenen Zeile eine neue beginnen.  
Um dies zu tun, schreiben wir einen leicht veränderten Code: `System.out.println();`

(Hinweis: Wir schreiben `println` statt `print`, um nach der Ausgabe eine neue Zeile zu generieren.)

Probiere es gleich aus. Lasse alle Anweisungen in verschiedenen Zeilen ausgeben!
{{% /notice %}}

{{% notice tip %}}
### Wie druckt man mehrere Symbole in einer einzigen Codezeile?

Wir haben gelernt, dass wir Symbole drucken können, indem wir sie in zwei einfache Anführungszeichen `'` einschließen. Aber wie drucken wir mehrere Symbole in einer Zeile?

Wir können sie ganz einfach in doppelte Anführungszeichen `"` setzen (z. B. `System.out.print("@ , - h A #");`).

{{% /notice %}}

{{% notice tip %}}
### !! Wichtig !! Manchmal kannst du nicht einfach Zeichen zwischen " " setzen.

Wenn du Zeichen in `" "` einer Print-Anweisung platzierst, kann es manchmal den Computer verwirren, welche Zeichen gedruckt werden sollen.

Zum Beispiel: Wie sagen wir dem Computer, dass er `"` ausgeben soll?

Wenn du `System.out.print(""");` eingibst, erhältst du einen Fehler! Denn der Computer kann nicht erkennen, wo der Text endet!

Bestimmte Zeichen müssen stattdessen <b>entkommentiert</b> werden, indem man ein `\` davor setzt.

     System.out.print("\"");  // das gibt " aus

Andere Zeichen, die in Java entkommentiert werden müssen, sind: `'`, `"`, `\`.
{{% /notice %}}

## Eine Eule drucken

Lerne Minerva 🦉 kennen, Patricks erste Freundin 🐥!

Nutze, was du gerade gelernt hast, und erstelle diese Eule unten mit nur vier Zeilen Code nach! (Kunstquelle: asciiart.eu/animals/birds-land)

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Hi, I am Minerva. Patrick's friend!  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOwl" target="_blank">Replit starten</a>

{{% notice warning %}}
#### Ich habe einen Fehler erhalten!

     Main.java:4: error: reached end of file while parsing
Wenn du einen Fehler wie diesen erhälst, ist es möglich, dass du vergessen hast, Zeichen wie `"` und `\` zu entkommentieren.

Siehe dir den dritten Tipp oben noch einmal an, um herauszufinden, wie man Zeichen in einer Print-Anweisung entkommentiert!
{{% /notice %}}

## Einen Kommentar erstellen

Beim Erstellen eines Java-Programms können wir durch Hinzufügen von Notizen mit einzeiligen Kommentaren (`//`) oder mehrzeiligen Kommentaren (`/*` und `*/`) Anmerkungen hinzufügen. (Hinweis: Die Anweisungen in den vorherigen Aktivitäten wurden als Kommentare geschrieben.)

Außerdem haben Kommentare absolut keine Auswirkungen auf das Programm. Du kannst also überall in deinem Code Notizen als Kommentare hinzufügen!

     // Beispiel für einen einzeiligen Kommentar
     /* Beispiel
      * mehrzeiliger
      * Kommentar */