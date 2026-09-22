```markdown
---
title: "Platzhalter"
date: 2020-07-23T00:00:00Z
weight: 15
draft: true
hidden: true
---

## Eingabe lesen und verarbeiten

In Java ist eine effiziente Möglichkeit, Benutzereingaben zu erhalten, die Verwendung der Klasse `Scanner` im Paket `java.util`. Um diese Klasse und alle ihre Methoden zu verwenden, müssen wir die Klasse mit der folgenden Codezeile am Anfang der Datei `importieren`.

```java
import java.util.Scanner;
```

## Fehlerbehandlung

In Java können wir potenzielle Fehler behandeln, indem wir den Code, der möglicherweise einen Fehler verursacht, in einen `try-catch`-Block setzen.

Im `try`-Block platzieren wir den Codeblock, der möglicherweise einen Fehler verursacht.

Im `catch`-Block geben wir Anweisungen, was zu tun ist, wenn beim Ausführen des `try`-Blocks ein Fehler auftritt. Auf diese Weise können wir verhindern, dass das Programm abstürzt.
Zum Beispiel:

```java
try {
   //  Codeblock, der versucht wird
} catch (Exception e) {
   //  Codeblock zur Fehlerbehandlung
}
```

   Führen Sie Ihr Programm aus und geben Sie ungültige Eingaben (z. B. Nicht-Nummern) ein. Ihr Programm sollte jetzt nicht mehr abstürzen!

## Der Try-Block

Im `try`-Block erhalten wir Nummerneingaben von Benutzern. Allerdings sind nicht alle Eingaben gültig, da wir nur verfügbare Positionen auf dem Spielfeld akzeptieren sollten.

Verwenden Sie `if`-Anweisungen, um zu überprüfen, ob die Nummerneingabe gültig ist. (Tipp: Greifen Sie auf das `board`-Array zu, um zu überprüfen, ob die Eingabe gültig ist).

Wenn dies nicht der Fall ist, geben Sie die Aussage aus: `Ungültige Position; bitte geben Sie Ihren Zug erneut ein (1-9):`.

{{% notice hint %}}
#### Wie überprüfe ich, ob zwei Strings gleich sind?

Um zu überprüfen, ob zwei Strings denselben Inhalt haben, rufen wir die Methode `equals()` auf. Zum Beispiel:

```java
String s1 = "hi";
boolean b1 = s1.equals("hi"); // das ist true
boolean b2 = s1.equals("HI"); // das ist false
```

{{% /notice %}}

## Der Catch-Block

Im `catch`-Block wissen wir, dass der Spieler eine ungültige Eingabe (z. B. keine Zahl) eingegeben hat. Zuerst müssen wir diese ungültige Eingabe ignorieren, indem wir diese Eingabe aus dem `Scanner` löschen. Dies tun wir, indem wir die Methode `next()` für das Scanner-Objekt aufrufen, das wir erstellt haben. Danach sollten wir auch die Aussage ausgeben, um den Spieler darüber zu informieren, dass er einen neuen Zug eingeben soll: `Ungültige Position; bitte geben Sie Ihren Zug erneut ein (1-9):`.

## (optional) Testen Sie Ihr Programm

Testen Sie Ihr Programm, indem Sie auf `Ausführen` klicken. Sie sollten die Meldung `Ungültige Position; bitte geben Sie Ihren Zug erneut ein (1-9):` sehen, wenn Sie eine ungültige Eingabe tätigen oder eine Zahl, die nicht zwischen 1 und 9 liegt.

## Mehrfache Eingaben

Jetzt haben wir ein Programm, das eine Eingabe nimmt und bewertet, ob sie gültig ist. Wir möchten den Spieler auffordern, dies so lange zu wiederholen, bis das Spiel endet.

Um den Benutzer weiterhin aufzufordern, seinen nächsten Zug einzugeben, setzen wir den gesamten `try-catch`-Block in eine `while-Schleife`. Diese `while-Schleife` hat das Argument `true`, was bedeutet, dass das Programm fortlaufend wiederholt wird, bis es angewiesen wird, anzuhalten.

Beachten Sie, dass wir `printBoard(board)` aufrufen und den Benutzer am Ende jeder Iteration auffordern, wie unten gezeigt:

```java
while (true) {
    // hier den try-catch-Block einfügen

    printBoard(board);
    System.out.print("Enter your move (1-9): "); 
}
```

## Umgang mit ungültigen Eingaben

Wenn ein Benutzer eine ungültige Eingabe macht, möchten wir nicht, dass das Programm `printBoard(board)` aufruft und `Enter your move (1-9):` ausgibt.

Mit anderen Worten, wir möchten, dass das Programm zur nächsten Iteration der `while`-Schleife übergeht.

Wir fügen `continue;` in den Code ein, um dem Computer zu signalisieren, wieder an den Anfang der `while`-Schleife zurückzuspringen und die Ausführung von dort aus fortzusetzen.

Am Ende dieser Übung sollten Sie ein Programm haben, das Sie auffordert, ungültige Eingaben erneut einzugeben, und ein leeres Spielfeld mit der Eingabeaufforderung `Enter your move (1-9): ` für alle gültigen Eingaben ausgibt!

```
<<<~  Tic  Tac  Toe  ~>>>
* Wählen Sie eine Nummer von 1 - 9, um Ihren Zug zu platzieren
* Spieler: 'X' Computer: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 1
   |   |   
---+---+---
   |   |                                    <--------------- Das Spielfeld zeigt noch nicht die Spieler- bzw. Computerzüge an
---+---+---
   |   |   
Enter your move (1-9): d
Ungültige Eingabe; bitte geben Sie Ihren Zug erneut ein (1-9): 3
   |   |   
---+---+---
   |   |                                    <--------------- Das Spielfeld zeigt noch nicht die Spieler- bzw. Computerzüge an
---+---+---
   |   |   
Enter your move (1-9): 
```

Lassen Sie uns mit dem Workshop fortfahren, um zu sehen, wie wir unser Spielbrett aktualisieren sollten!
```