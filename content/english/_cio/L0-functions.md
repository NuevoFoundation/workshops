---
title: "C:I/O"
description: "Creating a file format using C"
date: 2021-07-221T14:51:26-07:00
prereq: "???"
difficulty: "Intermediate"
download: " "
draft: true
hidden: false 
weight: 0
---

# Welcome to C!
C is an old programming language. Despite this, it is still often used today as the language of choice for many systems programmers. We will be introducing the C programming a bit out of order compared to traditional teaching methods, and we won't be covering the language in detail; rather, we'll only explain the parts that we'll need to build our file reader and writer.
<!--Maybe will swap this with L1-->
## An Introduction to Functions
First, let's go over a very useful feature of C: functions. Functions serve two primary purposes: code readability and code reusability. By putting code in a function, you can inform the reader what the code as a whole does, and . Functions also allow you to execute the code written in a function by *calling* it. In this way, you can call the same function many times, alloying you to run the same code repeatedly.

{{% notice tip%}}
    In other languages, functions are also called methods or procedures.
{{% /notice%}}

## Defining a Function

In C, you can define a function like so:

```c
    void functionA()
    {}
```
Let's break it down. 

* **void**. This is the *return type* of the function. When we call the function, the function can
* **functionA**. This is the name of the function. We can use this name to call it.
* `{}`. The curly braces show where the function definition begins and ends.

We can put our code statements in between the curly braces. For instance:

```c
    int main() 
    {
        return 0;
    }
```

A few things to unpack here. The `main` function is special in C. When a C program starts, it begins running code within the `main` function. For now, the code will run in the order you wrote it, sequentially.

(Image of the flow: Main -> code within main -> Return)

{{% notice note%}}
    A *statement* in C is hard to define precisely without jumping into nitty-gritty detail. For most programmers, a statement is a line of code that does something and ends with a semicolon.
{{% /notice%}}

{{% notice note%}}
    Comments are notes that programmers can type next to code. We can start a comment on a line in C by using `//`; any text beyond this will be *commented*.
    If single line comments aren't enough, you can write comments across multiple lines. Start the comment with `/*`, and end it with `*/`. Any code between them will be commented.
    You'll see a lot of code snippets with comments that explain the code in this workshop.
{{% /notice%}}

## Function Workflow: Calling and Returning

A function can be called by some code. Let's define an example function.
```c
    void functionB() 
    {
    }
```
This function does nothing, but we can still call it using its name, like so:

```c
    functionB();
```

In general, functions are used in the following workflow:

(Image of the flow 1: Caller -> Function does stuff -> Function returns to caller)

Finallly, when a function reaches a `return` statement, or it reaches the end of the function block, it stops running, and execution goes back to where the function was first called.

