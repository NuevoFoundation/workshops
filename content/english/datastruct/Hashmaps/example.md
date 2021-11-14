---
title: "Example"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://www.youtube.com/embed/tTYzBv-8qRU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<link rel="stylesheet" href="../../style.css">

![mapExample](../../img/mapExample.png)

## Hashmaps

<hr>

A hashmap can store items in key/value pairs and you can assign those pairs to different types such as `String`s or `Integer`s.

As usual, to create a hashmap, you will have to import the `HashMap` class like so.


```java

import java.util.HashMap; // will import HashMap
HashMap<String, String> addresses = new HashMap<String, String>();

```
In this case, we created a `HashMap` called `addresses` which holds a key of a `String` type and a value of `String` type.

<hr>

## Adding items to the HashMap

To add key/value pairs into the hashmap, use the `put()` method.

```java

// Import the HashMap class
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    // Create a HashMap object called capitalCities
    HashMap<String, String> addresses = new HashMap<String, String>();

    // Add keys and values (Country, City)
    addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
    addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
    addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
    addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
  }
}

```
As you can see, the code above inserts a key/value pair into our hashmap addresses.

![mapgraphic](../../img/hashmapgraphic.png)

<hr>

## Look up an item
To look up an item in a HashMap, use the `get()` method.

```java

// Import the HashMap class
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    // Create a HashMap object called capitalCities
    HashMap<String, String> addresses = new HashMap<String, String>();

    // Add keys and values (Name, Address)
    addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
    addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
    addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
    addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
                                          
    String junAddress = addresses.get("Jun");
    System.out.println("Jun's address is: " + junAddress); //outputs Jun's address
  }
}

```
Using the `get()` method, we call `addresses.get("Jun")` and returns Jun's address.
![hashmapgraphic](../../img/hashmapgraphic2.png)

Those are some of the most basic methods of the `HashMap`. Other methods may include the `remove()` method, which removes an item or the `size()` method which returns how many items are in the `HashMap`. We will give more examples to let you try it out in the next page!
