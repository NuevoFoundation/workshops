---
title: "Methods"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

## Modifying Elements

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.set(1, "Coke");
        // This sets the first element (chicken nuggets) to a coke instead
    }
}
```
Using `set()`, you can set the element at the index number to a new element.

<hr>

## Removing Elements

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.remove(2);
        // Removes Fries from the ArrayList
    }
}
```
Similar to `set()`, the `remove()` method removes an element at an index number.

<hr>

## Getting the Size of an ArrayList

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.size());
        // Outputs the size of the ArrayList, in this case: 3
    }
}
```
`size()` returns the size of the `ArrayList`.

<hr>

## Iterating Over Elements

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
        // Outputs:
        // Whopper
        // Chicken Nugget
        // Fries
    }
}
```

By using a combination of the `for` loop and the `get` method, we can iterate through the `ArrayList` and print out each element at every index.
