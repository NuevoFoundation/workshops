---
title: "Problem 1: Grundlagen des Baums"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 3
--- 

## Aufgabe 1: Finde einen Wert in einem Binärbaum

Da wir nun die Grundlagen des Traversierens durch einen Baum kennen, implementiere die binäre Suche basierend auf dem Prozess (oder Algorithmus), über den wir auf der vorherigen Seite gesprochen haben. Hier eine kurze Auffrischung:
* Wenn der aktuelle Wert kleiner ist als der gesuchte, gehe zum rechten Knoten.
* Wenn der aktuelle Wert größer ist als der gesuchte, gehe zum linken Knoten.
* Wenn der aktuelle Wert der gesuchte ist, bist du fertig!

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/BinarySearch?lite=true" title="Problem 1: Tree Basics - Replit editor" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% showanswer "SPOILER: Klicke hier, wenn du Hilfe bei der Lösung benötigst!" %}}
```js javascript
public static Node findValue(Node root, int value) {
    // Wir beginnen beim Wurzelknoten des Baums
    Node current = root;

    // Wir folgen der oben beschriebenen Logik 
    while (current.value != value) {
        System.out.println("Aktueller Wert ist: " + current.value);
        if (value < current.value) {
            current = current.left;
        }
        if (value > current.value) {
            current = current.right;
        }
    }

    // Wenn wir hier sind, haben wir den Knoten mit
    // dem richtigen Wert erreicht!
    return current;
}
```
{{% /showanswer %}}

### Glückwunsch! Wenn du es bis hierher geschafft hast, hast du offiziell die binäre Suche programmiert!