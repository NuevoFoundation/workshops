---
title: "C:I/O"
description: "Creating a file format using C"
date: 2021-07-221T14:51:26-07:00
prereq: "???"
difficulty: "Intermediate"
download: " "
draft: true
hidden: false 
weight: 3
---

# Numbers
So far, we've worked with `char`s and pointers for a bit. Unfortunately, `char`s hold only one byte of information, which means that they can only hold small numbers. If we want to hold larger numbers in variables, we'll need bigger data types. Luckily, C defines some data types that can hold much larger values.

{{% notice note%}}
    C does not specify the exact size of data types, and only requires data types to have a minimum value range that it can store. The only exception is `char`, which must be one byte in size. `char`s also must be able to store values between -127 and 127, inclusive. You can check the size of a data type in C code using `sizeof()`, which will yield the size in bytes; for example, `sizeof(char)` must be one, since it is defined to be one byte.
{{% /notice%}}

## `short` and `int`
The `short` is a data type that is at least 2 bytes in size. It can store numbers between -32,767 and 32,767. `short`s are often used when a system needs to store lots of relatively small numbers - particularly when memory is a concern.

The `int` is also at least 2 bytes in size and store numbers between -32,767 and 32,767. **However**, in modern computers, `int` is **4** bytes in size and store numbers between -2,147,483,647 and 2,147,483,647.

## `long` and `long long`
The `long` is a data type that is at least 4 bytes in size and can store numbers between -2,147,483,647 and 2,147,483,647. Like the `int`, however, in modern processors it is **8** bytes in size.

The `long long` is at least 8 bytes in size and can store numbers between −9,223,372,036,854,775,807 and 9,223,372,036,854,775,807.

In modern computers, there is no difference between `long` and `long long`.

## `float` and `double`
The types we discussed above are *integer* types, so they don't work with decimals. If we want decimals, we'll need the *floating-point* data types. Do note that floating-point numbers only approximate most decimals, so each type has a limit to how exact a decimal can be represented in a floating-point number.

`float` is one such floating-point type. In most computers it is 4 bytes in size. It is precise to around 6-7 decimal places.

`double` is another floating-point type and is usually 8 bytes in size, and is more precise than a `float`.

## Arithmetic
We can perform mathematical operations on the data types in C. Let's start with the simple operations: addition, subtraction, multiplication, and division.

### Addition and Subtraction
To add two numbers, you use the `+` operator. Here are some examples.
```c
    int x = 2, y = 5;
    int z0 = 5 + 3; //add two numeric constants together
    int z1 = x + 1; //add a variable and numeric constant together
    int z2 = x + y; //add two variables together and store in a third variable
```
{{% notice note%}}
    `x+y` is an example of an expression. It is not a valid statement in C by itself, but can be combined with other code to become a statement. An expression is usually associated with operations, but a variable by itself, e.g. `x`, is also an expression!
{{% /notice%}}

{{% notice note%}}
    The compiler is smart enough to optimize out expressions that can be calculated before runtime. For example, adding two constants like `5 + 3` will be simplified to `8`.
{{% /notice%}}

To subtract two numbers, you use the `-` operator. Here are some examples.
```c
    int x = 2, y = 5;
    int z = y - 2; //subtract between a variable and a constant

```

### Multiplication and Division
To multiply two numbers, you use the `*` operator. Here are some o

## Signed and Unsigned Types
Integer data types can be *signed* or *unsigned*.

### Differences Between Data Types
As far as C is concerned, the only difference between the integer data types (`char`, `short`, `int`, `long`, `long long`) are the number of bytes used to store the data.
