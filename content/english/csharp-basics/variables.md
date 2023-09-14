---
title: "Variables and Data Types"
description: "Introduce types and variables in C#."
date: 2023-09-12T00:00:00Z
weight: 4
---

## Variables: Name It!

In the last exercise, we learned to print different statements with `Console.WriteLine() and Console.Write()`.

While it's great to print out a number or a sentence, we haven't given them a meaning.

In C#, we introduce the idea of a **variable** for data. A variable is stores a piece of data with a name.

For example, there can be a variable called `myName` that is assign a value of `"Ann"`.  Another varable might be called `age` and it is assigned the number `12`.

## What the Type!

So how do we create these boxes or variables in C# to store data?

Before learning how to create variables, we need to learn the concept of **data type** in C# or just **type** for short. Type in C# describes what is being stored in the box. If you have an number box, it will only contain numbers, not sentences or symbols. Each variable has its own type that controls what kind of data it can hold.

For example, we could have a variable called `age` that stores the number `12`.  If you try to store the word `"twelve"` in `age` will generate an error because it only knows about numbers.

In C#, for a variable to store whole numbers, it is type `int`. And, we declare an `int` variable called `age` with data `3` with the line of code:

```
int age = 12;
```
In general, to declare a variable we write them in the format: `[data type] [variable name] = [data];`.
{{% notice note %}}
The following are the important data types that have been built-in in C#:

**Type** | **Description** | **Examples**
--------|-----------|----------
`int` | integer | `20`, `30`, `35`
`char` | character such as a symbol or a single alphabet letter | `'A'`,`'b'`, `'('`, `']'`
`string` | a sequence of `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`bool` | boolean, has a value of either `true` or `false` | `true`, `false`
`double` | fractional numbers | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Using our previous example, to declare these variables in C#, we type the following:

```C#
string name = "Ann";
int age = 12;
boolean loveMusic = true;
```

The last varable is an interesting one.  It can only have a value of `true` or `false`.  We will see that this can be very helpful in the more advanced sections of this workshop.

# Play with variables

Let's see what we can do with variables. Launch and fork the repl.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/CSharpBasicsVariables" target="_blank">Launch Replit</a>

Try entering these lines and **run**:

```C#
int age = 10;
Console.WriteLine(age); // prints out 10
age = 12; // assign data 12 to the variable age
Console.WriteLine(age); // prints out 10
```
We can assign a value to a varable, reference it and then change the value.  

## What the Type -- Help Patrick!

Patrick 🐥 isn't a master of data types! He often mixed them up when declaring variables. Let's help him fix his mistakes.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/CSharpBasicsDataTypes" target="_blank">Launch Replit</a>

