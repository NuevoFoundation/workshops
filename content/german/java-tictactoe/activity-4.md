```markdown
---
title: "4. Überprüfe den Gewinner"
description: "Schreibe eine Methode, um den Gewinner mit einem Eingabebrett zu überprüfen"
date: 2021-10-14T00:00:00Z
prereq: "Das Spielfeld einrichten!, Eingaben lesen und verarbeiten, Das Spielfeld aktualisieren"
difficulties: ["mittlere Stufe"]
weight: 5
---

## Den Gewinner anzeigen

Schreibe eine Methode `getWinner(String[] curBoard)`, die den Gewinner in einem `String` zurückgibt, basierend auf einem `Array`, das das aktuelle Spielfeld darstellt.

- Wenn der Spieler gewinnt, gib zurück: `"Herzlichen Glückwunsch! \nDu hast das Spiel gewonnen :)"`.
- Wenn der Computer gewinnt, gib zurück: `"Spiel vorbei! \nDu hast das Spiel verloren :("`.
- Falls es ein Unentschieden gibt, gib zurück: `"Es ist ein UNENTSCHIEDEN! Versuch's nochmal"`.
- Wenn es noch keinen Gewinner gibt, gib zurück: `""`.

Es gibt mehrere Möglichkeiten, diese Methode zu schreiben.

Probiere es zuerst in folgendem Replit; es wird dir sagen, ob deine Methode korrekt ist!  
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaTicTacToegetWinner" target="_blank">Replit starten</a>

{{% notice note %}}
#### Ideen/Tipps zum Schreiben der Methode `getWinner()`

- Verkette die `Strings` an den 3 Positionen, die eine horizontale, vertikale oder diagonale Reihe bilden.
- Verwende `equals()`, um zu überprüfen, ob einer der verketteten Strings `"XXX"` oder `"OOO"` für einen Gewinner entspricht. (Du kannst sogar eine weitere Methode erstellen, die überprüft, ob ein Eingabe-`String` `"XXX"` oder `"OOO"` ist.)
- Wenn alle Felder des Arrays gefüllt sind (eine `for-Schleife` kann hier hilfreich sein) und es keinen Gewinner gibt, endet das Spiel mit einem Unentschieden.
{{% /notice %}}

## Aufrufen der Gewinner-Methode

Rufe in `main()` die Methode `getWinner()` direkt nach der Codezeile auf, bei der der Spielerzug `"X"` erfolgt.

Überprüfe, ob das Spiel fortgesetzt werden soll (falls kein Gewinner oder Unentschieden vorliegt).

Wenn es einen Gewinner oder ein Unentschieden gibt, gib das endgültige Spielfeld und das Spielergebnis aus! Füge außerdem die Codezeile `break;` hinzu, die das Programm auffordert, die `while`-Schleife zu verlassen.

## Wiederhole den obigen Schritt

Wiederhole in `main()` den Code aus dem vorherigen Schritt (Überprüfe den Gewinner und gib das Ergebnis aus, falls nötig), nachdem du den Zug des Computers `"O"` gemacht hast.

## Scanner-Objekt schließen

Füge außerhalb der while-Schleife den Code `sc.close()` hinzu, um das `Scanner`-Objekt zu schließen, sodass keine weiteren Eingaben mehr gelesen werden können.

Es ist eine gute Praxis, das `Scanner`-Objekt zu schließen, wenn wir keine neuen Eingaben mehr benötigen, nachdem wir die `while`-Schleife mit `break` verlassen haben!

## Alles geschafft :)!

Du hast jetzt ein funktionierendes Tic-Tac-Toe-Spiel! Du kannst wirklich stolz darauf sein, diesen Workshop abgeschlossen zu haben! Gute Arbeit 👍!

##### Zur Übersicht sollte der Aufbau deines Codes wie folgt aussehen:
<img src="../images/code.png" height="500" alt="Tic Tac Toe: Dein Java-Projekt. void main(String args[]), das Spielereingaben liest, Eingaben verarbeitet, jede Spielrunde anstößt oder den Gewinner des Spiels ausgibt. void printBoard(String[] curBoard) ist eine Methode, um das Spielfeld auszugeben. int getComputerMove(String[] curBoard) gibt zufällig einen verfügbaren Zug für den Computer zurück. String getWinner(String[] curBoard) gibt den Gewinner des Spiels/UNENTSCHIEDEN oder '' zurück, wenn das Spiel fortgeführt werden soll."/>
```