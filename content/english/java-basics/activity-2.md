---
title: "Variables and Types"
description: "Introduce types and variables in Java."
date: 2020-07-08T00:00:00Z
weight: 3
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/KE0fNb-hTKE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 1. Variables: Name It!
In the last exercise, we learn to print different statements with `System.out.print()`. 

While it's great to print out a number or a sentence, we haven't given them a meaning. 

In Java, we introduce the idea of a <b>variable</b> for data. A variable is like a box that stores a piece of data with a name. 

For example, there can be a variable called `myName` that stored `"Patrick"`, another variable called `loveMusic` that stored `true`, and another variable called `age` that stored `3`. Just like the image below:

<img src="../images/variable.png" height="200"/> 

### 2. What the Type! 

So how do we create these boxes or variables in Java to store data?

Before learning that we need to learn the concept of <b>type</b> in Java. Each variable has its own type that restrict it to store a specific kind of data.

For example, the variable called `age` that store the number `3` should contain contain integers, not sentences or symbols. 

In Java, for a variable to store whole numbers, it is type `int`. And, we declare a `int` variable called `age` with data `3` with the line of code:
```java
int age = 3;
```

In general, to declare a variable we write them in the format: `[data type] [variable name] = [data];`.
{{% notice note %}}
The following are the important data types that have been built-in in Java:

- `int` type: an integer (i.e. `20`, `30`, `35`).

- `char` type: a character such as a symbol or single alphabet letter (i.e. `'A'`, `'b'`, `'('`, `']'`). 

- `String` type: a sequence of `char` (i.e. `"Hello"`, `"Bonjour"`, `"Hola"`).

- `boolean` type: a type that is either the value `true` or `false`.

- `double` type: type that store fractional numbers (i.e. `2.0`, `3.14`, `9.33`).
{{% /notice %}}

Let's revisit the three variables we talked about and identify their data types. 

<img src="../images/dataType.png" height="200"/> 

To declare these variables in Java, we type the following:
```java
String name = "Patrick";
int age = 10;
boolean loveMusic = true;
```

### 3. What the Type -- Help Patrick! 
Patrick 🐥 isn't a master of data types! He often mixed them up when declaring variables. Let's help him fix his mistake:
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsDataType?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% notice tip %}}
By storing data in variables, you can use that data later or change it by assigning it to a different data of the same type. For example:

```java
int age = 10;
System.out.println(age); // prints out 10
age = 11; // assign data 11 to the variable age
System.out.println(age); // prints out 11
```
{{% /notice %}}

### 4. What the Type -- Track Numbers! 
Now consider the following code. What do you think the output is? Track the values of each variable by yourself then test it out below!

```java
double x = 2.3;
double y = 10.0;
int z = 4;

x = y;
y = x;
z = 0;
z = z;
System.out.println("x: " + x + " y: " + y + " z: " + z );
```
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsVariable?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>