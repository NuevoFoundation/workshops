---
title: "Methoden"
description: "Einführung in Methoden in Java."
date: 2021-10-13T00:00:00Z
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/mO6S9Yq_K4I" title="Java methods video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Was ist eine Methode?

Bis jetzt haben wir gelernt, wie man Daten in Variablen speichert, Daten und Sätze druckt und Entscheidungen mit if-Anweisungen, For-Schleifen und While-Schleifen trifft.

Aus der letzten Übung wissen wir, dass der folgende Codeblock die Summe von 1 bis 100 berechnet:

```java
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
System.out.println("Summe: " + total);
```

Aber was, wenn wir die Summe von 1 bis 77 berechnen wollen? Wie machen wir das, ohne den gesamten Codeblock erneut schreiben zu müssen?

Wir möchten eine ✨ magische Box ✨ im Code erstellen, die die Berechnung für uns durchführt, egal für welche beiden Zahlen wir die Summe erstellen möchten!
<img src="../images/method.png" height="250" alt="Num 1 und Num 2 mit einem Pfeil, der in einen Kreis mit den Worten Magic Box zeigt, und ein Pfeil, der aus dem Kreis heraus auf die Summe von Num 1 bis Num 2 zeigt"/> 

In Java ist eine **Methode** wie eine magische Box, die eine bestimmte Aufgabe ausführt, indem sie einen Codeblock verwendet, der Benutzereingaben verarbeiten kann.

Eine Methode besteht aus 2 Teilen: Header und Rumpf:

{{% notice note %}}
### Methoden-Header

Um eine Methode zu definieren, müssen wir zunächst ihren <b>Methoden-Header</b> schreiben. Ein Methoden-Header besteht aus vier Hauptteilen:

**Teilname** | **Beschreibung** | **Beispiele oder mögliche Optionen**
----|----|----
**Zugriffsmodifikator** | Definiert, auf welche Weise auf die Methode zugegriffen werden kann | `public` zeigt an, dass jeder diese Methode verwenden kann. `private` zeigt an, dass sie nur innerhalb einer Klasse aufgerufen werden kann. (Wir lernen auf der nächsten Seite mehr über Klassen!) `protected` zeigt an, dass sie von Objekten derselben Klasse aufgerufen werden kann.
**Rückgabetyp** | Datentyp, der an die aufrufende Funktion zurückgegeben wird | Verwenden Sie `void`, wenn die Methode nichts zurückgeben soll.
**Methodenname** | Name der Methode, die aufgerufen wird | Vom Benutzer basierend auf der Funktion der Methode definiert
**Liste der Parameter** | Liste der Eingaben, die bei der Verwendung der Methode bereitgestellt werden müssen | Format von (`Typ` `Eingabename`, `Typ` `Eingabename`, ... ).

```
// Ein Beispiel
public void sing (String songName)
   1.    2.   3.        4.
```
**Hinweis:** Die Variablennamen für die Parameter müssen nicht mit dem Namen der Variablen übereinstimmen, die in die Methode übergeben werden.

<br />

### Methoden-Rumpf

Als nächstes geben wir den Codeblock ein, der der Methode zugeordnet ist, im **Methoden-Rumpf** zwischen `{` und `}` nach dem Methoden-Header.

Um Daten zurückzugeben, verwenden wir das Schlüsselwort `return`, gefolgt von einem Variablennamen oder einem zurückzugebenden Wert. 

**Hinweis:** Sobald Sie `return` verwenden, wird nichts nach dieser Anweisung in der Methode weiter ausgeführt.

Dies ist ein Beispiel, wie man eine Methode definiert, die die Summe der Zahlen von `numA` bis einschließlich `numB` berechnet:

```java
/* Methodenname: sumNum
 * Eingabe/Parameter: 2 Zahlen vom Typ int
 * Funktionalität: gibt die Summe von numA bis einschließlich numB zurück
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // Die erste Eingabe wird mit dem Namen numA angesprochen
    while(num <= numB){  // Die zweite Eingabe wird mit dem Namen numB angesprochen
        total = total + num;
        num = num + 1;
    }
    return total; // Rückgabe-Anweisung
}
```

<br />

### Methodenaufruf

Schließlich, um eine Methode in Ihrem Code auszuführen, müssen wir einen <b>Methodeaufruf</b> machen. Wir schreiben den Methodennamen mit den gegebenen Eingaben. 
Zum Beispiel:

```java
sumNum(1, 3); // Eine Zeile Code, die die Methode sumNum() mit der Rückgabe 6 aufruft
```

Da `sumNum(1, 3)` einen `int` mit der Summe von 1 bis 3 zurückgibt, können wir Folgendes tun, um den Wert zu speichern:

```java
int sum1to3 = sumNum(1, 3); 
```
{{% /notice %}}

## Zähle die Pyramide!🔺

<img src="../images/pyramid.png" height="250" alt="Pyramide mit Schichten aus bunten Perlen. Unterste Schicht ist gelb, dann blau, braun, weiß, rosa, hellblau, orange, koralle, grün, zuletzt rot" /> 
<p style="text-align: center;">(Bildnachweis: aliexpress.com/item/32306945847.html)</p>

Oben ist ein Bild von einer Quadrat-Zahlen-Pyramide zu sehen, wobei jede Ebene ein perfektes Quadrat der Anzahl der aktuellen Ebene (von oben gezählt) darstellt. 

Das bedeutet, dass die oberste Ebene `1 * 1` Perlen hat, die 2. Ebene `2 * 2` Perlen.

<br />
Lass uns eine Methode schreiben, die die Gesamtanzahl der Ebenen nimmt und die Gesamtanzahl der Perlen in der Pyramide ausgibt!

Wenn Sie die Herausforderung erfolgreich lösen, sehen Sie die folgende Nachricht:

```
Herzlichen Glückwunsch! Herausforderung gelöst!
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsPyramid" target="_blank">Replit starten</a>