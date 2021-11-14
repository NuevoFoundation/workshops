---
title: "Stack Implementation"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 
<link rel="stylesheet" href="../../style.css">

![image](../../img/stackExample.png)

<h1>Stacks</h1>

<hr>

A stack is eerily similar to a queue. The only difference are the method names and the manner in which we retrieve the items.

Before we create a stack, we will have to import the stack class. To make life easier, we can use a * instead to import all. It will look something like this.

```js javascript

import java.util.*; // will import stack

```
There are several methods to use on a stack and if you are interested, feel free to google the methods yourself. However, we are only going to talking about the most important methods now: push(), peek(), and pop().

<hr>

<h1>Creating a Stack</h1>
    
```js javascript

Stack driver = new Stack();

```

<hr>

<h1>Push()</h1>

Adding Elements: In order to add an element to the stack, we can use the push() method. This push() operation place the element at the top of the stack.

<hr>

<h1>Peek()</h1>

Accessing the Element: To retrieve or fetch the first element of the Stack or the element present at the top of the Stack, we can use peek() method. The element retrieved does not get deleted or removed from the Stack.

<hr>

<h1>pop()</h1>

Removing Elements: To pop an element from the stack, we can use the pop() method. The element is popped from the top of the stack and is removed from the same.

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
<h1>Output:</h1>

```js javascript
[Burger King, Subway, Jack in the Box]
```

