---
title: "Methods"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<!--<link rel="stylesheet" href="../../style.css">-->

![image](../../img/listex.png)
<hr>

## Change an Item

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.set(1, "Coke");
        //this sets the first element(chicken nuggets) to a coke instead
    }
}
```
Using `set()`, you can set the element at the index number to a new element.

<hr>

## Remove an Item

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.remove(2);
        //removes fries from the arraylist
    }
}
```
Similar to `set()`, the `remove()` method removes an element at an index number.

<hr>

## Size of ArrayList

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.size());
        //outputs the size of the arraylist, in this case: 3
    }
}
```
`size()` returns the size of the `ArrayList`.

<hr>

## Iterating through an ArrayList

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
    }
}
```

By using a combination of the `for` loop and the `get` method, we can iterate through the `ArrayList` and print out each element at every index.
