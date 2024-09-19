---
title: "Methoden"
description: "Methoden in C# einführen."
date: 2024-09-16T00:00:00Z
weight: 7
---

## Was ist eine Methode?

Bisher haben wir gelernt, wie man Daten in Variablen speichert, Daten und Sätze ausgibt und Entscheidungen mit `if`-Anweisungen, `for`-Schleifen und `while`-Schleifen trifft.

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

Aber was, wenn wir die Summe von 1 bis 77 berechnen wollen? Wie machen wir das, ohne den ganzen Codeblock erneut zu schreiben?

Wir wollen eine ✨ Zauberkiste ✨ im Code erstellen, die die Berechnung für uns durchführt, egal für welche 2 Zahlen wir eine Summe bilden wollen!
<img src="../images/method.png" height="250" alt="Num 1 und Num 2 mit Pfeil, der in einen Kreis mit den Worten Magische Box zeigt und ein Pfeil, der aus dem Kreis zur Summe von Num 1 bis Num 2 zeigt"/> 

In C# ist eine **Methode** wie die Zauberkiste, die eine bestimmte Aufgabe ausführt, indem sie einen Codeblock ausführt, der Benutzereingaben verwenden kann.

Es gibt 2 Teile in einer Methode: Signatur und Körper:

{{% notice note %}}
### Methodensignatur

Um eine Methode zu definieren, müssen wir zuerst ihre <b>Methodensignatur</b> schreiben. Ein Signaturheader hat vier Hauptteile:

```
zugriffs_spezifizierer rückgabe_typ methoden_name(liste_von_parametern)
```

**Teilname** | **Beschreibung** | **Beispiele oder mögliche Optionen**
----|----|----
**Zugriffsspezifizierer** | bietet das Zugriffslevel zur Methode  | `public` sagt dem Computer, dass jeder diese Methode verwenden kann. `private` sagt, dass sie nur innerhalb einer Klasse aufgerufen werden kann. (Wir lernen auf der nächsten Seite über Klassen!) `protected` sagt, dass sie von Objekten derselben Klasse aufgerufen werden kann.
**Rückgabetyp** | Datentyp, der an die aufrufende Funktion zurückgegeben wird, technisch gesehen gehört der Rückgabetyp nicht zur Signatur in C# | `string` oder `int`, verwende `void`, wenn die Methode nichts zurückgibt.
**Methodenname** | Name der Methode, wird verwendet, um sie aufzurufen | ein beschreibender Name, den Sie basierend auf der Funktion der Methode wählen.
**Liste von Parametern** | Liste der Eingaben, die bereitgestellt werden müssen, wenn die Methode verwendet wird | kann null oder mehr Parameter in der Form von (`typ` `eingabename`, `typ` `eingabename`, ... ) haben. Verwende () für keine Parameter.

```
// ein Beispiel, das einen String als Parameter nimmt und einen anderen String als Antwort zurückgibt
public string artist (string songName)
```
**Hinweis:** Die Variablennamen für die Parameter müssen nicht mit dem Variablennamen der Daten übereinstimmen, die in die Methode übergeben werden.

### Methodenkörper

Als nächstes platzieren wir den Codeblock in den **Methodenkörper**, der sich zwischen `{` und `}` nach der Methodensignatur befindet.

Um einige Daten zurückzugeben, verwenden wir das Schlüsselwort `return` gefolgt von einem Variablennamen oder einem Wert, der zurückgegeben werden soll.

**Hinweis:** Sobald Sie `return` verwenden, wird nichts mehr danach in der Methode ausgeführt.

Dies ist ein Beispiel, wie man eine Methode definiert, die die Summe der Zahlen von `numA` bis `numB` berechnet:

```c#
/* Methodenname: sumNum
 * Eingabe/Parameter: 2 Zahlen vom Typ int
 * Funktionalität: gibt die Summe von numA bis numB zurück
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // wir greifen auf die erste Eingabe mit dem Namen numA zu
    while(num <= numB){  // wir greifen auf die erste Eingabe mit dem Namen numB zu
        total = total + num;
        num = num + 1;
    }
    return total; // Rückgabeb