```---
title: "Methoden"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

## Stapel (Stacks)

Ein Stapel ist ähnlich wie eine Warteschlange. Der einzige Unterschied sind die Methodennamen und die Art und Weise, wie wir die Elemente abrufen.

Bevor wir einen Stapel erstellen, müssen wir die Klasse `stack` importieren. Um es einfacher zu machen, können wir stattdessen `*` verwenden, um alle Klassen in der Bibliothek zu importieren. Es sieht etwa so aus:

```js javascript
// Dies importiert unter anderem die Klasse Stack
import java.util.*;
```
Es gibt mehrere Methoden, die auf einem Stapel verwendet werden können. Wenn Sie interessiert sind, können Sie im Internet nach weiteren Informationen zu diesen Methoden suchen. Wir werden jedoch zunächst nur die wichtigsten Methoden erklären: `push()`, `peek()` und `pop()`.

<hr>

## Einen Stapel erstellen
    
```js javascript
Stack driver = new Stack();
```

<hr>

## Elemente hinzufügen

Um ein Element zum Stapel hinzuzufügen, können wir die Methode `push()` verwenden. Diese `push()`-Operation platziert das Element oben im Stapel.

```js javascript
push(1);
push(2);
push(3);

// Erstellt einen Stapel mit den Elementen [3, 2, 1]
```

<hr>

## Elemente abrufen

Um das erste Element des Stapels oder das Element, das oben im Stapel vorhanden ist, abzurufen oder zu holen, können wir die Methode `peek()` verwenden. Das abgerufene Element wird dabei nicht gelöscht oder entfernt.

```js javascript
stack.peek();

// Gibt 3 zurück
// Der Stapel enthält [3, 2, 1]
```

<hr>

## Elemente entfernen 

Um ein Element aus dem Stapel zu entfernen, können wir die Methode `pop()` verwenden. Das Element wird "gepoppt" und vom oberen Ende des Stapels entfernt.

```js javascript
stack.pop();

// Gibt 3 zurück
// Der Stapel enthält [2, 1]
```

<hr>

Mit diesen drei Methoden im Hinterkopf, werfen wir einen Blick auf ein Beispiel.

```js javascript
import java.util.*;
public class Driver {
    public static void main(String []args) {
        // Standardinitialisierung des Stapels 
        Stack stack = new Stack(); 
  
        // Elemente hinzufügen 
        stack.push("Burger King"); 
        stack.push("Subway"); 
        stack.push("Jack in the Box"); 
  
        // Stapel Elemente ausdrucken 
        System.out.println(stack); 
    }
}
```

Ausgabe:

```js javascript
["Jack in the Box", "Subway", "Burger King"]
```
```