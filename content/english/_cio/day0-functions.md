---
title: "C:I/O"
description: "Creating a file format using C"
date: 2021-07-221T14:51:26-07:00
prereq: "???"
difficulty: "Intermediate"
download: " "
draft: true
hidden: false 
---

# Functions

First, let's go over a very useful feature of C: functions. Functions serves two primary purposes: code readability and code reusability. By putting code in a function, you can inform the reader what the code as a whole does. Functions also allow you to execute the code written in a function by *calling* it. In this way, you can call the same function many times, alloying you to run the same code repeatedly.

{{% notice tip%}}
    In other languages, functions are also called methods or procedures.
{{% /notice%}}

## Defining a Function

In C, you can define a function like so:

```c
    int main() 
    {
        return 0;
    }

```
Let's break it down. 
* `int` indicates that the function *returns* an integer. We'll discuss function returning later.
* `main` is the name of the function. In C, a function named `main` has a special meaning. When a program is run, it starts executing code from inside the `main` function.
* `()` indicates that there are no *arguments* for this function. Arguments provide extra information to the function. We'll explain what arguments are in detail later.
* `{` indicates the start of the code block and `}` denotes its end. You can write any number of C *statements* in between the curly braces, which will be executed when the function is called.
* `return 0;` is a statement that indicates that the function ends at that line and should return the value 0 once the program runs it.
{{% notice note%}}
    A *statement* in C is hard to define precisely without jumping into nitty-gritty detail. For most programmers, a statement is simply a line of code that does something and ends with a semicolon.
{{% /notice%}}

## Function Workflow: Calling, Working with Arguments, and Returning

A function can be called by some code. Let's define an example function.
```c
    int generateAZero() {
        return 0;
    }
```
This function does nothing but return a 0. We can call it using its name:

```c
    generateAZero();
```

In general, functions are used in the following workflow:

(Image of the flow: Caller -> Function does stuff -> Function returns to caller)

Like mentioned previously, a C program starts within the `main` function. Within this `main` function, we can call other functions.

Functions can take extra information using arguments. Arguments are variables, which store data.

When a function reaches a `return` statement, it stops running. The function returns the value indicated by a return statement.