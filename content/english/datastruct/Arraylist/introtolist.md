---
title: "Introduction"
draft: false
weight: 1
---
<link rel="stylesheet" href="../../style.css">

![image](../../img/listintro.png)
<hr>

We've learned about arrays and even ventured into multidimensional arrays. Unfortunately arrays have many limitations and can sometimes be hard to use. One limitation that an array has is its explicit size. If you only have 10 elements of allotted space in that array, you can only store up to 10 elements. Arraylists are a great data structure that has a dynamic size, meaning that you can add or subtract items at any time. There are many more things that arraylists can do, which is what makes arraylists such powerful data structures.

Before we create an arraylist, we will have to import the ArrayList class. It will look something like this.

```js javascript

import java.util.ArrayList; // import the ArrayList class

```

Remember, our goal is to create an arraylist that keeps track of the customers order. We can do this like so:


    
```js javascript

import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> order = new ArrayList<String>();
  }
}

```

As you can see, similar to the array, we have to declare what types of data the arraylist will contain. In this case, we will make it contains Strings, since menu items will have strings. 

To add items to an order, we will use the add method. If the customer were ordering from Burger King and wanted to order a combo with a Whopper, Chicken Nuggets, and Fries, your method might look something like this.

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
If we wanted to get the first item of an arraylist, you would use the get() method along with the index number of the element like so:

```js javascript
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> order = new ArrayList<String>();
    order.add("Whopper");
    order.add("Chicken Nugget");
    order.add("Fries");
    System.out.println(order.get(0));
    //outputs whopper
  }
}
```

There are many more methods that you can use on an ArrayList, but this is just the gist of what an arraylist can do. The methods can be found on the next page. 