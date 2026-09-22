```markdown
---
title: "Einführung"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

Wir haben etwas über Arrays gelernt und uns sogar mit mehrdimensionalen Arrays beschäftigt. Leider haben Arrays viele Einschränkungen und können manchmal schwer zu handhaben sein. Eine Einschränkung eines Arrays ist seine explizite Größe. Wenn Sie nur 10 Elemente in einem Array speichern können, können Sie nur bis zu 10 Elemente speichern. `ArrayList`s sind eine großartige Datenstruktur mit einer dynamischen Größe, was bedeutet, dass Sie jederzeit Elemente hinzufügen oder entfernen können. Es gibt noch viele weitere Dinge, die `ArrayList`s können, was sie zu so mächtigen Datenstrukturen macht.

![image](../img/arraylist.png)

Bevor wir eine `ArrayList` erstellen, müssen wir die `ArrayList`-Klasse importieren. Es wird so aussehen:

```js javascript
import java.util.ArrayList; // die ArrayList-Klasse importieren
```

Denken Sie daran, unser Ziel ist es, eine `ArrayList` zu erstellen, die die Bestellung des Kunden nachverfolgt. Wir können dies wie folgt tun:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
    }
}
```

Wie Sie sehen können, müssen wir ähnlich wie beim Array angeben, welche Datentypen die `ArrayList` enthalten wird. In diesem Fall wird sie `String`s enthalten, da Menüpunkte `String`s sein werden. 

Um Elemente zu einer Bestellung hinzuzufügen, verwenden wir die Methode `add()`. Wenn der Kunde bei Burger King bestellt und ein Menü mit einem Whopper, Chicken Nuggets und Pommes bestellen möchte, könnte Ihre Methode in etwa so aussehen:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
    }
}
```
Falls wir das erste Element einer `ArrayList` abrufen möchten, verwenden Sie die Methode `get()` zusammen mit der Indexnummer des Elements, wie folgt:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.get(0));
        // Gibt Whopper aus
  }
}
```

Es gibt viele weitere Methoden, die Sie auf einer `ArrayList` verwenden können. Dies hier ist jedoch nur ein Überblick über das, was eine `ArrayList` leisten kann. Die Methoden finden Sie auf der nächsten Seite.
```