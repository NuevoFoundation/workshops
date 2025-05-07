---
title: "Methoden"
description: "Einführung in Methoden in C#."
date: 2024-09-16T00:00:00Z
weight: 7
---

## Was ist eine Methode?

Bisher haben wir gelernt, wie man Daten in Variablen speichert, Daten und Sätze ausdruckt, und Entscheidungen mit `if`-Anweisungen, `for`-Schleifen und `while`-Schleifen trifft.

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

Aber was, wenn wir die Summe von 1 bis 77 berechnen möchten? Wie machen wir das, ohne den gesamten Codeblock erneut zu schreiben?

Wir möchten eine ✨ Zauberkiste ✨ im Code erstellen, die die Berechnung für uns durchführt, egal für welche 2 Zahlen wir eine Summe bilden wollen!
<img src="../images/method.png" height="250" alt="Num 1 und Num 2 mit einem Pfeil, der in einen Kreis mit den Worten Magic Box zeigt, und einem Pfeil, der aus dem Kreis hinaus auf Summe von Num 1 bis Num 2 zeigt"/> 

In C# ist eine **Methode** wie die Zauberkiste, die eine spezifische Aufgabe durch das Ausführen eines Codeblocks erledigt, der Benutzereingaben verwenden kann.

Eine Methode besteht aus 2 Teilen: Signatur und Körper:

{{% notice note %}}
### Methodensignatur

Um eine Methode zu definieren, müssen wir zuerst ihre <b>Methodensignatur</b> schreiben. Eine Signaturkopfzeile hat vier Hauptteile:

```
access_specifier return_type method_name(list_of_parameters)
```

**Teilname** | **Beschreibung** | **Beispiele oder mögliche Optionen**
----|----|----
**Zugriffsspezifizierer** | gibt das Zugriffslevel auf die Methode an  | `public` sagt dem Computer, dass jeder diese Methode verwenden kann. `private` sagt dem Computer, dass sie nur innerhalb einer Klasse aufgerufen werden kann. (Über Klassen lernen wir auf der nächsten Seite!) `protected` sagt dem Computer, dass sie von Objekten derselben Klasse aufgerufen werden kann.
**Rückgabetyp** | Datentyp, der an die aufrufende Funktion zurückgegeben wird, technisch gesehen ist der Rückgabetyp kein Teil der Signatur in C#  | `string` oder `int`, verwenden Sie `void`, wenn die Methode nichts zurückgibt.
**Methodenname** | Name der Methode, mit dem sie aufgerufen wird | ein beschreibender Name, den Sie basierend darauf wählen, was die Methode macht.
**Liste der Parameter** | Liste der Eingaben, die bereitgestellt werden müssen, wenn die Methode verwendet wird | kann null oder mehr Parameter in der Form haben von (`Typ` `Eingabename`, `Typ` `Eingabename`, ... ). Verwenden Sie () für keine Parameter.

```
// ein Beispiel, das einen String als Parameter nimmt und als Antwort einen anderen String zurückgibt
public string artist (string songName)
```
**Hinweis:** Die Variablennamen für die Parameter müssen nicht mit dem Namen der Daten übereinstimmen, die in die Methode übergeben werden.

### Methodenkörper

Als Nächstes fügen wir den Codeblock ein, der mit der Methode im **Methodenkörper** verbunden ist, welcher sich zwischen `{` und `}` nach der Methodensignatur befindet.

Um einige Daten zurückzugeben, verwenden wir das Schlüsselwort `return`, gefolgt von einem Variablennamen oder einem Wert, der zurückgegeben werden soll. 

**Hinweis:** Sobald Sie `return` verwenden, wird nichts anderes mehr in der Methode ausgeführt.

Dies ist ein Beispiel, wie man eine Methode definiert, die die Summe von Zahlen von `numA` bis `numB` bildet:

```c#
/* Methodenname: sumNum
 * Eingabe/Parameter: 2 Zahlen vom Typ int
 * Funktionalität: die Summe von numA bis numB zurückgeben
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // wir greifen auf die erste Eingabe mit dem Namen numA zu
    while(num <= numB){  // wir greifen auf die zweite Eingabe mit dem Namen numB zu
        total = total + num;
        num = num + 1;
    }
   