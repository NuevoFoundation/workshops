---
title: "Example"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://www.youtube.com/embed/2Y_1XG3QtAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<link rel="stylesheet" href="../../style.css">

![listexample](../../img/listex.png)
<hr>

## Change an Item

```java
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
Using `set`, you can set the element at the index number to a new element.

<hr>

## Remove an Item

```java
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
Similar to `set`, the `remove` method removes an element at an index number.

<hr>

## Size of ArrayList

```java
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

## Iterating through an Arraylist

```java
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

By using a combination of the `for` loop and the `get()` method, we can iterate through the arraylist and print out each element at every index.
