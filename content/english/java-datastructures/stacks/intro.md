---
title: "Stack Implementation"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 
<!--<link rel="stylesheet" href="../../style.css">-->

![image](../../img/stackExample.png)

## Stacks

<hr>

A stack is eerily similar to a queue. The only difference are the method names and the manner in which we retrieve the items.

Before we create a stack, we will have to `import` the `stack` class. To make life easier, we can use a `*` instead to import all classes in the library. It will look something like this.

```js javascript

import java.util.*; // will import stack, among other classes

```
There are several methods to use on a stack. If you are interested, you may search the internet for more information about these methods. However, we are only going to explain the most important methods for now: `push()`, `peek()`, and `pop()`.

<hr>

### Creating a Stack
    
```js javascript
Stack driver = new Stack();
```

<hr>

### Adding elements with push()

In order to add an element to the stack, we can use the `push()` method. This `push()` operation place the element at the top of the stack.

<hr>

### Accessing elements with peek()

To retrieve or fetch the first element of the stack or the element present at the top of the stack, we can use the `peek()` method. The element retrieved does not get deleted or removed from the stack.

<hr>

### Removing elements with pop()

To remove an element from the stack, we can use the `pop()` method. The element is popped and removed from the top of the stack.

<hr>

With these three methods in mind, let's go ahead and take a look at an example.

```js javascript
import java.util.*;
public class Driver{
    public static void main(String []args){
        // Default initialization of Stack 
        Stack stack = new Stack(); 
  
        // pushing the elements 
        stack.push("Burger King"); 
        stack.push("Subway"); 
        stack.push("Jack in the Box"); 
  
        // Printing the Stack Elements 
        System.out.println(stack); 
    }
}
```

Output:

```js javascript
[Burger King, Subway, Jack in the Box]
```

