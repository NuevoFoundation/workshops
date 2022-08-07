---
title: "Methods"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

## Hashmaps

A HashMap can store items in key/value pairs and you can assign those pairs to different types such as strings or integers.

As usual, to create a `HashMap`, you will have to import the HashMap class like so.

```js javascript
import java.util.HashMap; // will import HashMap

HashMap<String, String> addresses = new HashMap<String, String>();
```
In this case, we created a `HashMap` called addresses which stores keys of `String` type and values of `String` type.

<hr>

## Adding Elements

To add key/value pairs into the HashMap, use the `put()` method.

```js javascript
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
As you can see, the code above inserts a key/value pair into our HashMap addresses.

![image](../../img/hashmapgraphic.png)

<hr>

## Accessing Elements

To access an item in a `HashMap`, use the `get()` method.

```js javascript
// Import the HashMap class
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Create a HashMap object called addresses
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
![image](../../img/hashmapgraphic2.png)

Those are some of the most basic methods of the HashMap. Other methods may include the `remove()` method, which removes an item or the `size()` method which returns how many items are in the HashMap. We will give more examples to let you try it out in the next page!
