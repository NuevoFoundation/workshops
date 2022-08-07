---
title: "Introduction"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

We've learned about arrays and even ventured into multidimensional arrays. Unfortunately arrays have many limitations and can sometimes be hard to use. One limitation that an array has is its explicit size. If you only have 10 elements of allotted space in that array, you can only store up to 10 elements. `ArrayList`s are a great data structure that has a dynamic size, meaning that you can add or subtract items at any time. There are many more things that `ArrayList`s can do, which is what makes `ArrayList`s such powerful data structures.

Before we create an `ArrayList`, we will have to import the `ArrayList` class. It will look something like this.

```js javascript
import java.util.ArrayList; // import the ArrayList class
```

Remember, our goal is to create an `ArrayList` that keeps track of the customer's order. We can do this like so:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
    }
}
```

As you can see, similar to the array, we have to declare what types of data the `ArrayList` will contain. In this case, we will make it contains `String`s, since menu items will be `String`s. 

To add items to an order, we will use the `add()` method. If the customer were ordering from Burger King and wanted to order a combo with a Whopper, chicken nuggets, and fries, your method might look something like this.

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
If we wanted to get the first item of an `ArrayList`, you would use the `get()` method along with the index number of the element like so:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.get(0));
        // Outputs whopper
  }
}
```

There are many more methods that you can use on an `ArrayList`, but this is just the gist of what an `ArrayList` can do. The methods can be found on the next page. 