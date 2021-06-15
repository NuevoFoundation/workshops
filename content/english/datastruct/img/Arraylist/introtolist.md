---
title: "Introduction"
draft: false
weight: 1
---
<link rel="stylesheet" href="../../style.css">

![listintro](../../img/listintro.png)
<hr>

Now that the customer has access to all the items on the menu, it’s time for them to place their order. A customer may want to add an item to their order, remove an item, change an item, or access an item. After finalizing the order, you want to return a receipt of the # of items that the customer ordered as well as each item in a list for the customer to checkout. We will accomplish all these feats utilizing an `ArrayList`.

Before we create an `ArrayList`, we will have to import the ArrayList class. It will look something like this.

```java

import java.util.ArrayList; // import the ArrayList class

```

Remember, our goal is to create an `ArrayList` that keeps track of the customers order. We can do this like so:


    
```java

import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> order = new ArrayList<String>();
  }
}

```

As you can see, similar to the array, we have to declare what types of data the `ArrayList` will contain. In this case, we will make it contains Strings, since menu items will have strings.

To add items to an order, we will use the add method. If the customer were ordering from Burger King and wanted to order a combo with a Whopper, Chicken Nuggets, and Fries, your method might look something like this.

```java
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
If we wanted to get the first item of an `ArrayList`, you would use the `get()` method along with the index number of the element like so:

```java
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

There are many more methods that you can use on an `ArrayList`, but this is just the gist of what an `ArrayList` can do. The methods can be found on the next page. 