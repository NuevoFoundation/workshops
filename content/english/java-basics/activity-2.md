---
title: "Variables and Types"
description: "Introduce types and variables in Java."
date: 2021-10-13T00:00:00Z
weight: 3
---

<p style="text-align: center;"><iframe width="50%" height="500px" src="https://www.youtube.com/embed/KE0fNb-hTKE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

### 1. Variables: Name It!

In the last exercise, we learned to print different statements with `System.out.print()`.

While it's great to print out a number or a sentence, we haven't given them a meaning.

In Java, we introduce the idea of a **variable** for data. A variable is like a box that stores a piece of data with a name.

For example, there can be a variable called `myName` that stored `"Patrick"`, another variable called `loveMusic` that stored `true`, and another variable called `age` that stored `3`. Just like the image below:

<img src="../images/variable.png" height="200" alt="3 boxes. The first box has white text outside, myName, and white text inside, 'Patrick'. The second box has white text outside, loveMusic, and white text inside, true. The third box has white text outside, age, and white text inside, 3." / > 

### 2. What the Type!

So how do we create these boxes or variables in Java to store data?

Before learning how to create variables, we need to learn the concept of **type** in Java. Type in Java describes what is being stored in the box. If you have an integer box, it will only contain integers, not sentences or symbols. Each variable has its own type that restricts it to store a specific kind of data.

For example, the variable called `age` that stores the number `3` should contain contain integers, not sentences or symbols. 

In Java, for a variable to store whole numbers, it is type `int`. And, we declare an `int` variable called `age` with data `3` with the line of code:

```java
int age = 3;
```

In general, to declare a variable we write them in the format: `[data type] [variable name] = [data];`.
{{% notice note %}}
The following are the important data types that have been built-in in Java:

**Type** | **Description** | **Example**
--------|-----------|----------
`int` | integer | `20`, `30`, `35`
`char` | character such as a symbol or a single alphabet letter | `'A'`,`'b'`, `'('`, `']'`
`String` | a sequence of `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`boolean` | has a value of either `true` or `false` | `true`, `false`
double | fractional numbers | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Let's revisit the three variables we talked about and identify their data types. 

<img src="../images/dataType.png" height="200" alt="3 boxes. The first box has white text outside, myName, and white text inside, 'Patrick'. Red arrow pointing to box with text type String. The second box has white text outside, loveMusic, and white text inside, true. Red arrow pointing to the box with text type boolean. The third box has white text outside, age, and white text inside, 3. Red arrow pointing to the box with text type int"/> 

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

{{% notice tip %}}
### Explaining the example
In lines 1-3 we declare the variables and set the intitial values for x (2.3), y (10.0), and z (4). 
In line 4, we set x to the value of y (10.0). 
In line 5, we set y to the value of x, which was just set to 10.0 (10.0). 
In line 6, we set z to 0.
In line 7, we set z to the value of z, which is 0 (0).
{{% /notice %}}