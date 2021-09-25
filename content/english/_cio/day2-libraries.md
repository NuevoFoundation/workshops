---
title: "C:I/O"
description: "Creating a file format using C"
date: 2021-07-221T14:51:26-07:00
prereq: "???"
difficulty: "Intermediate"
download: " "
draft: true
hidden: false 
weight: 2
---

# C Libraries
It takes a lot of effort to code everything up from scratch. Luckily C provides a set of utility code, the C Standard Library, which you can use so that you don't need to code the nitty gritty details of everything.

## Header Files and `#include`
The C Standard Library is provided in the form of header files. Header files have the extension `.h`, and you can add its code using the C preprocessor statement, `#include`.

{{% notice note%}}
    The C preprocessor looks for preprocessor statements, which all begin with a `#`, such as `#include`. Before your code is compiled, the preprocessor changes the source text depending on what statements it found.
{{% /notice%}}

Using `#include` indicates to the C preprocessor to replace the `#include` line with the entirety of the indicated file, which allows you to work with variables and functions defined in it.

A header file usually does not contain any definitions, but rather only declarations. Definitions are written within a `.c` file, which can be *linked* to any program that included the header file. This `.c` file is usually part of the compiler package that you download, and is specific to your operating system.

## `stdio.h`
The library we will be using the most is `stdio.h`, which has many functions that make it easier for us to work with files. We'll write our first complete program now:
<!--Replit section-->
```c
    #include <stdio.h>

    int main()
    {
        printf("Hello World!");
        return 0;
    }
```
<!--End replit section-->
This is the famous *Hello World* program that every beginner learns at first. Alas, we've put it off until now. If you compile and run it, you should see "Hello World!" printed out! Let's break down this program.
* `#include <stdio.h>` tells the preprocessor to copy the entire contents of `stdio.h` to where it was included. This lets you use the `printf` function contained within it.
* `int main() {...}` is the function definition for a function called `main`. Like previously stated, the `main` function is the starting point of a C program.
* `printf(...);` allows you to print "Hello World". Notice that the parentheses have an argument ("Hello World!"), which we previously stated to be information we need to pass to the function. In this case, we are passing what we want to print to the function.
* `return 0` indicates that the function should stop and return `0` to the caller. In the context of the `main` function, however, it means that the program ran successfully and there were no errors (the `0` means success).

