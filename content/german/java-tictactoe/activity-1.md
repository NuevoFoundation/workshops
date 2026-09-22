---
title: "1. Setze das Spielfeld auf!"
description: "Mit Print-Anweisungen die Spielregeln und das Spielfeld anzeigen"
date: 2021-10-14T00:00:00Z
weight: 2
---

In dieser Aktivität werden wir ein Programm erstellen, das das Spielfeld und die Spielaufforderung wie im folgenden Beispiel ausgibt:

```
<<<~  Tic  Tac  Toe  ~>>>
* Wähle eine Zahl von 1 - 9, um deinen Zug zu setzen
* Spieler: 'X' Computer: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Gib deinen Zug ein (1-9): 2
 O | X |   
---+---+---
   |   |   
---+---+---
   |   |   
Gib deinen Zug ein (1-9): 
```

## Die Hauptklasse und die Hauptmethode

Beachte, dass im Startcode die Klasse `Main` und die Methode `main()` vorhanden sind. Die `main()`-Methode ist der Punkt, an dem das Programm startet, wenn wir auf die Schaltfläche `Ausführen` klicken.

```java
public class Main {
  public static void main(String[] args) {
  }
}
```

## Print-Anweisungen

Schreibe in der `main()`-Methode Print-Anweisungen, um die Begrüßungsnachricht und die Regeln für das Spiel auszugeben!

```
<<<~  Tic  Tac  Toe  ~>>>
* Wähle eine Zahl von 1 - 9, um deinen Zug zu setzen
* Spieler: 'X' Computer: 'O'
```

## Variablen und Arrays

In diesem Spiel müssen wir verfolgen, welches Symbol sich an den 9 Positionen auf dem Spielfeld befindet.

Daher müssen im Programm 9 Datenstücke gespeichert werden. Wir verwenden ein `Array` (eine Datenstruktur) der Größe 9, um dies zu speichern.

Wie in den Regeln angegeben, bedeutet auf dem Spielfeld `"X"` einen Spielzug des Spielers, `"O"` einen Spielzug des Computers und `" "` eine verfügbare Stelle.

Um dies zu tun, deklarieren wir ein Array-`Variable` mit dem Namen `board` und initialisieren alle 9 Positionen mit dem Wert `" "` (d. h. `{" ", " ", " ", " ", " ", " ", " ", " ", " "}`).

## Das Spielfeld anzeigen

Nun, da wir die Variable `board` haben, die die aktuellen Symbole auf dem Spielfeld speichert, versuchen wir, ein leeres Spielfeld mit Print-Anweisungen auszugeben (siehe unten).

Beachte, dass jedes Spielfeld aus 5 Zeilen besteht. Es ist daher sinnvoll, 5 Print-Anweisungen zu verwenden, um jede Zeile zu drucken.

Jeder der 9 Blöcke ist eine `String` von der Länge 3, wobei das mittlere Zeichen das aktuelle Symbol ist, das im `board` an der entsprechenden Position gespeichert ist.

Dein Programm sollte nach Abschluss dieses Schrittes die folgende Ausgabe haben:

```
<<<~  Tic  Tac  Toe  ~>>>
* Wähle eine Zahl von 1 - 9, um deinen Zug zu setzen
* Spieler: 'X' Computer: 'O'

   |   |  
---+---+---
   |   |  
---+---+---
   |   | 
```

## Methoden

Da wir im Laufe des Spiels mehrmals das aktuelle Spielfeld ausgeben müssen, ist es eine gute Idee, den dafür geschriebenen Codeblock in eine Methode zu verschieben.

Diese Methode sollte ein `String[]` als Eingabe entgegennehmen und das aktuelle Spielfeld ausgeben. Beachte, dass diese Methode außerhalb der Methode `main()` geschrieben werden sollte.

Lass uns eine Methode mit folgendem Header schreiben:

```java
public static void printBoard(String[] curBoard);
```

## Methodenaufrufe

Rufe in `main()` die Methode `printBoard()` auf, sodass das anfängliche Spielfeld mit den beschrifteten Positionen ausgegeben wird. Du kannst dies tun, indem du ein weiteres `String-Array` mit dem Inhalt `"1", "2", ..., "9"` erstellst.

Füge eine Zeile hinzu, die `Gib deinen Zug ein (1-9): ` ausgibt.

```
<<<~  Tic  Tac  Toe  ~>>>
* Wähle eine Zahl von 1 - 9, um deinen Zug zu setzen
* Spieler: 'X' Computer: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Gib deinen Zug ein (1-9): 
```

## Programm ausführen

Führe dein Programm aus. Wenn die Ausgabe wie oben angegeben ist, bist du bereit, weiterzumachen 👍!