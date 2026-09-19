```markdown
---
title: "Methoden"
description: "Methoden in C# vorstellen."
date: 2024-09-16T00:00:00Z
weight: 7
---

## Was ist eine Methode?

Bisher haben wir gelernt, wie man Daten in Variablen speichert, Daten und Sätze ausgibt und mit `if`-Anweisungen, `for`-Schleifen und `while`-Schleifen Entscheidungen trifft. 

Aus der letzten Übung wissen wir, dass der folgende Codeblock die Summe von 1 bis 100 berechnet:

```C#
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
Console.WriteLine("Summe: " + total);
```

Aber was ist, wenn wir die Summe von 1 bis 77 berechnen möchten? Wie können wir das tun, ohne den gesamten Codeblock erneut zu schreiben?

Wir möchten eine ✨ Zauberkiste ✨ im Code erstellen, die die Berechnung für uns durchführt, egal welche zwei Zahlen wir summieren möchten!
<img src="../images/method.png" height="250" alt="Num 1 und Num 2 mit Pfeil, der in einen Kreis zeigt, auf dem die Worte Zauberkiste stehen, und ein Pfeil, der aus dem Kreis heraus zeigt, der auf Summe von Num 1 bis Num 2 zeigt"/> 

In C# ist eine **Methode** wie die Zauberkiste, die eine bestimmte Aufgabe ausführt, indem sie einen Codeblock ausführt, der Benutzereingaben verwenden kann.

Eine Methode besteht aus 2 Teilen: Signatur und Körper:

{{% notice note %}}
### Methodensignatur

Um eine Methode zu definieren, müssen wir zuerst ihre <b>Methodensignatur</b> schreiben. Ein Signaturkopf besteht aus vier Hauptbestandteilen:

```
access_specifier return_type method_name(list_of_parameters)
```

**Teilname** | **Beschreibung** | **Beispiele oder mögliche Optionen**
----|----|----
**access_specifier** | gibt die Zugriffsberechtigung für die Methode an | `public` teilt dem Computer mit, dass jeder diese Methode verwenden kann. `private` bedeutet, dass die Methode nur innerhalb einer Klasse aufgerufen werden kann. (Wir lernen im nächsten Abschnitt mehr über Klassen!) `protected` zeigt an, dass die Methode von Objekten derselben Klasse aufgerufen werden kann.
**return_type** | Datentyp, der an die aufrufende Funktion zurückgegeben wird, technisch gesehen ist der Rückgabetyp in C# nicht Teil der Signatur | `string` oder `int`, verwende `void`, wenn die Methode nichts zurückgibt.
**method_name** | Name der Methode, die verwendet wird, um sie aufzurufen | Ein beschreibender Name, den Sie basierend darauf wählen, was die Methode tut.
**list_of_parameters** | Liste der Eingaben, die bereitgestellt werden müssen, wenn die Methode verwendet wird | Kann null oder mehr Parameter in der Form (`Typ` `Eingabename`, `Typ` `Eingabename`, ...) haben. Verwende () für keine Parameter.

```
// ein Beispiel, das einen String als Parameter nimmt und einen anderen String als Antwort zurückgibt
public string artist (string songName)
```
**Hinweis:** Die Variablennamen für die Parameter müssen nicht mit dem Variablennamen der Daten übereinstimmen, die an die Methode übergeben werden.

### Methoden-Körper

Anschließend platzieren wir den mit der Methode verknüpften Codeblock im **Methoden-Körper**, der sich zwischen `{` und `}` nach der Methodensignatur befindet.

Um Daten zurückzugeben, verwenden wir das Schlüsselwort `return`, gefolgt von einem Variablennamen oder einem zurückzugebenden Wert.

**Hinweis:** Sobald `return` ausgeführt wird, läuft nichts anderes danach in der Methode weiter.

Dies ist ein Beispiel dafür, wie man eine Methode definiert, die die Summe von Zahlen von `numA` bis `numB` berechnet:

```c#
/* Methodenname: sumNum
 * Eingabe/Parameter: 2 Zahlen vom Typ int
 * Funktionalität: gibt die Summe von numA bis numB zurück
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // wir greifen mit dem Namen numA auf die erste Eingabe zu
    while(num <= numB){  // wir greifen mit dem Namen numB auf die erste Eingabe zu
        total = total + num;
        num = num + 1;
    }
    return total; // Rückgabe-Anweisung
}
```

### Methodenaufruf

Schließlich müssen wir, um eine Methode in unserem Code auszuführen, einen **Methodenaufruf** durchführen. Wir schreiben den Methodennamen mit den entsprechenden Eingaben. 
Zum Beispiel:

```C#
sumNum(1, 3); // eine Zeile Code, die die Methode sumNum() mit dem Rückgabewert 6 aufruft
```

Da `sumNum(1, 3)` ein `int` mit der Summe von 1 bis 3 zurückgibt, können wir Folgendes tun, um den Wert zu speichern und dann auszugeben:

Um diese Methode aufzurufen, könnten Sie dies tun:
```c#
    int sum = 0;
    sum = sumNum(1, 3);
    Console.WriteLine(sum); // gibt 6 aus
```

Einer der Gründe, warum Methoden mächtig sind, ist, dass wir sie mehr als einmal aufrufen können:
```C#
    int sum = 0;
    sum = sumNum(1, 3);
    Console.WriteLine(sum); // gibt 6 aus
    sum = sumNum(1, 4);
    Console.WriteLine(sum); // gibt 10 aus
```

Wir könnten das vorige Beispiel auch so schreiben, dass die Rückgabewerte direkt ausgegeben werden, ohne sie in einer Variablen zu speichern:
```c#
    Console.WriteLine(sumNum(1,3)); // gibt 6 aus
    Console.WriteLine(sumNum(1,4)); // gibt 10 aus
```
{{% /notice %}}

## Zähle die Pyramide!🔺

Hier ist ein Bild einer Pyramide aus quadratischen Zahlen, bei der jede Ebene ein perfektes Quadrat der Zahl der aktuellen Ebene (von oben gezählt) darstellt. 

<img src="../images/pyramid.png" height="250" alt="Pyramide mit Schichten aus bunten Perlen. Unterste Schicht ist gelb, dann blau, dann braun, dann weiß, dann pink, dann hellblau, dann orange, dann korallenfarben, dann grün, zuletzt rot" /> 

Die oberste Ebene hat `1 * 1` Perle, die 2. Ebene hat `2 * 2` Perlen und so weiter.

Schreiben wir eine Methode, die die