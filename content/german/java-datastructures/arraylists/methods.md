---
title: "Methoden"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

## Elemente Ändern

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.set(1, "Coke");
        // Dadurch wird das erste Element (Chicken Nuggets) stattdessen durch eine Coke ersetzt
    }
}
```
Mit `set()` kannst du das Element an einer bestimmten Indexnummer durch ein neues Element ersetzen.

<hr>

## Elemente Entfernen

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.remove(2);
        // Entfernt Fries aus der ArrayList
    }
}
```
Ähnlich wie `set()` entfernt die Methode `remove()` ein Element an einer bestimmten Indexnummer.

<hr>

## Die Größe einer ArrayList Abrufen

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.size());
        // Gibt die Größe der ArrayList aus, in diesem Fall: 3
    }
}
```
`size()` gibt die Größe der `ArrayList` zurück.

<hr>

## Über Elemente Iterieren

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        for (int i = 0; i < order.size(); i++) {
            System.out.println(order.get(i));
        }
        // Gibt aus:
        // Whopper
        // Chicken Nugget
        // Fries
    }
}
```

Durch die Kombination von `for`-Schleife und der `get`-Methode können wir durch die `ArrayList` iterieren und jedes Element an jedem Index ausgeben.