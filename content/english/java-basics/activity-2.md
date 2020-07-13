---
title: "Types and Variables"
description: "Introduce types and variables in Java."
date: 2020-07-08T00:00:00Z
weight: 3
---

### 1. Variables: Name It!
In the last exercise, we learn to print different statements with `System.out.print()`. 

While it's great to print out a number or a sentence, we haven't given them a meaning. 

In Java, we introduce the idea of a <b>variable</b> for data. A variable is like a box that stores a piece of data with a name. 

<img src="images/variable.png" height="150"/> 

For example, there can be a variable called `myName` that stored `"Patrick"`, another variable called `loveMusic` that stored `true`, and another variable called `age` that stored `3`.


While it’s cool to have different types for different data, often we want to store them, so we can use the data later. 

We do so by declaring a <b>variable</b> (name) and an associated type. For example:

### 2. What the Type! 

In Java, all data has a <b>type</b>, and a different type stores different kinds of values. 

There are a set of data types that have been built-in in Java. And, we’ve actually seen 3 of such types already!

- `'@'` is type `char`, a character such as a symbol or single alphabet letter (i.e. `'A'`, `'b'`, `'('`, `']'`). 

- `"Hello world!"` is type `String`, a sequence of `char` (i.e. `"Hello"`, `"Bonjour"`, `"Hola"`).

- 2020 is type `int`, an integer (i.e. 20, 30, 35).

Other important types include:

- `boolean` type: a type that is either the value `true` or `false`.

- `double` type: type that store fractional numbers (i.e. `2.0`, `3.14`, `9.33`).


```
String name = “Patrick”;
int age = 10;
boolean loveMusic = true;
```
Patrick 🐥 isn't a master of data types! He often mixed them up when declaring variables. Let's help him fix his mistake:
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsDataType?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

By storing data in variables, you can use that data later or change it by assigning it to a different data of the same type. For example:

```
int age = 10;
System.out.println(age); // prints out 10
age = age + 1; // add one to the age variable
System.out.println(age); // prints out 11
```
Now consider the following code. What do you think the output is? Track the calculations by yourself then test it out below!

```
double x = 2.3;
double y = 10.0;
int z = 4;
x = 2 + x * z;
y = 10 * z;
System.out.println("x: " + x + " y: " + y + " z: " + z );
```
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsVariable?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>