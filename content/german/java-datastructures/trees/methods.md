```yaml
---
title: "Methoden"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 2
---
```

## Binärbäume

Bäume sind eine spezielle Art von Datenstruktur, da sie aus einer Sammlung von Knoten bestehen, die durch Kanten verbunden sind. Es gibt keinen zentralen Initialisierer, um einen neuen generischen Baum wie bei den anderen von uns betrachteten Datenstrukturen zu erstellen. Um es einfacher zu machen, betrachten wir speziell **Binärbäume**, eine spezielle Art von Baum mit strengen Regeln für die Platzierung der Knoten.

Die Regeln für einen Binärbaum lauten:
* Jeder Knoten hat genau zwei Kanten, einen linken Knoten und einen rechten Knoten.
* Knoten links sind kleiner als der aktuelle Knoten.
* Knoten rechts sind größer als der aktuelle Knoten.

Der Baum, den wir zuvor betrachtet haben, ist ein Beispiel für einen Binärbaum. Schauen Sie sich jeden der Knoten an und überprüfen Sie selbst, ob sie den Regeln entsprechen!
![image](../img/tree.png)

## Elemente durchsuchen

Bevor wir uns die Implementierung des Suchens mit Code ansehen, schauen wir uns an, wie ein Binärbaum ein Element suchen könnte. Wenn wir die Elemente innerhalb eines Baums betrachten, beginnen wir immer beim Wurzelknoten, der in einem Binärbaum mehr oder weniger die Mitte der Daten sein sollte.

Sobald wir am Wurzelknoten beginnen, prüfen wir den Wert und stellen uns die Frage: „Ist der Wert, den wir suchen, kleiner, gleich oder größer als dieser Wert?“ Wenn der Wert gleich ist, super! Wir haben unsere Antwort gefunden. Wenn der Wert, den wir wollen, kleiner ist als der aktuelle Wert, gehen wir zum linken Knoten und stellen uns die gleiche Frage. Wenn der Wert, den wir wollen, größer ist als der aktuelle Wert, gehen wir zum rechten Knoten und stellen uns die gleiche Frage.

Versuchen Sie, dieses Beispiel nachzuvollziehen. Das ist der gleiche Baum wie zuvor, und wir möchten den Wert 9 finden.

![image](../img/binarysearch.gif)

## Elemente traversieren

Jetzt, da wir das Konzept des Suchens nach Elementen verstehen, können wir erkennen, dass das Suchen nach Elementen nur das wiederholte Ausführen derselben Operation ist. Das bedeutet, dass die Suchalgorithmus automatisch durchgeführt wird, wenn wir die Operation korrekt programmieren.

Nehmen wir an, wir haben Knoten, die wie unten definiert sind:
```js javascript
class Node {
    int value;
    Node left;
    Node right;
}
```

Wir können jetzt die Logik anwenden, um das richtige Element zu finden, über das wir im obigen Abschnitt gesprochen haben. Betrachten Sie diesen Code-Ausschnitt:
```js javascript
Node current = root;
if (current.value < desired) {
    current = root.right;
} else if (current.value > desired) {
    current = root.left;
}
```
Wir sehen, dass uns dies von einem Schritt zum nächsten bringt. Wir könnten diese Logik dann in einer `for`-Schleife verwenden, bis wir den gesuchten Wert finden.
