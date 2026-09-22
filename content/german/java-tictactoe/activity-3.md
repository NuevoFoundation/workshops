```markdown
---
title: "3. Aktualisiere das Spielbrett"
description: "Lerne, wie man einen Zug für den Computer generiert und das Spielfeld aktualisiert"
date: 2021-10-14T00:00:00Z
prereq: "Spielfeld einrichten!, Eingaben lesen und verarbeiten"
difficulties: ["mittel"]
weight: 4
---

Im letzten Abschnitt hatten wir ein Programm, das das Spielfeld ausgibt und bei jedem gültigen Zug den Benutzer mit `Enter your move (1-9):` auffordert. Allerdings blieb das Spielfeld leer (siehe unten). In dieser Übung werden wir lernen, wie man das Spielfeld aktualisiert und einen zufälligen Zug für den Computer generiert.

```
<<<~  Tic  Tac  Toe  ~>>>
* Wähle eine Zahl von 1 - 9, um deinen Zug zu machen
* Spieler: 'X' Computer: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 1
   |   |   
---+---+---
   |   |                                    <--------------- Das Spielfeld zeigt keine Spieler-/Computer-Züge
---+---+---
   |   |   
Enter your move (1-9): d
Invalid Input; re-enter your move (1-9): 3
   |   |   
---+---+---
   |   |                                    <--------------- Das Spielfeld zeigt keine Spieler-/Computer-Züge
---+---+---
   |   |   
Enter your move (1-9): 
```

## Benutzerzüge anzeigen

Innerhalb der `hasNextInt()` if-Anweisung, vor dem Methodenaufruf `printBoard(board)`, aktualisiere das `board`-Array mit der Benutzereingabe am entsprechenden Index.

Beachte, dass der Spieler auf dem Spielfeld durch `"X"` dargestellt wird.

{{% notice tip %}}
### Erinnerungen

- Java verwendet 0-basiertes Indexing und der Benutzer wurde aufgefordert, eine Zahl zwischen 1 und 9 einzugeben.
- Um auf ein Element in einem Array zuzugreifen, benutzt man die Index-Schreibweise: `myVariable[indexNumber]`.
{{% /notice %}}

## Computerzüge einrichten

Erstelle eine neue Methode `getComputerMove(String[] curBoard)`, die einen gültigen Zug für den Computer zwischen 1 und 9 erzeugt, basierend auf dem aktuellen Spielfeld.

Gehe die nächsten Schritte durch, um die Methode zu implementieren.

## Bewegung des Computers implementieren

In der Methode `getComputerMove()` werden wir mit Hilfe der Klasse `Random` eine Zufallszahl zwischen 1 und 9 für den Computer generieren.

Um diese Klasse und alle ihre Methoden zu verwenden, müssen wir sie mit folgendem Code oben in die Datei importieren.

```java
import java.util.Random;
```

Erstelle ein `Random`-Objekt durch Aufruf des Konstruktors `Random()`.

```java
Random rand = new Random();
```

## Zufallszahlen generieren

Rufe die Methode `int nextInt(int num)` des erstellten `Random`-Objekts auf, um eine Zufallszahl zwischen 1 und 9 zu generieren.

Ein Methodenaufruf `int nextInt(int num)` gibt eine Zufallszahl zwischen 0 und `num-1` zurück.

```java
int position = rand.nextInt(9);
```

## Gültigkeit des Zuges prüfen

Nachdem eine Zufallszahl zwischen 1 und 9 generiert wurde, müssen wir prüfen, ob der Platz verfügbar ist.

Nutze eine `while`-Schleife, um einen gültigen Zug für den Computer zu erhalten, falls die zuvor generierte Zufallszahl keine verfügbare Position ist!

Gib die Zahl zurück, sobald ein gültiger Zug gefunden wurde.

```java
while (!curBoard[position].equals(" ")){
   position = rand.nextInt(9);
}
return position;
```

## Spielfeld-Array aktualisieren

Wie im ersten Schritt sollten wir das `board`-Array für den Computer vor dem Methodenaufruf `printBoard(board)` aktualisieren.

Generiere einen zufälligen Zug, indem du `getComputerMove()` aufrufst!

Beachte, dass der Computer auf dem Spielfeld durch `"O"` dargestellt wird.

```java
board[getComputerMove(board)] = "O"; //getComputerMove gibt die richtige Position im Array zurück (Wert zwischen 0 und 8)
printBoard(board);
```

## Programm ausführen

Führe das Programm jetzt aus! Das Spielfeld sollte sowohl die Züge des Spielers als auch des Computers korrekt mit jeder Eingabe aktualisieren, wie unten gezeigt:

```
<<<~  Tic  Tac  Toe  ~>>>
* Wähle eine Zahl von 1 - 9, um deinen Zug zu machen
* Spieler: 'X' Computer: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 1
 X |   |   
---+---+---
   |   |   
---+---+---
   | O |   
Enter your move (1-9): 1
Invalid Position; re-enter your move (1-9): 2
 X | X |   
---+---+---
   |   | O 
---+---+---
   | O |   
Enter your move (1-9): 
```

Alles scheint bestens zu funktionieren! Jetzt müssen wir nur noch bestimmen, wer das Spiel gewonnen bzw. verloren hat. Dies werden wir in der nächsten Übung implementieren!
```