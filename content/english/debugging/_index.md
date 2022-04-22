---
title: "The Debugging Process"
description: "An introduction to debugging programs"
date: 2021-10-13T00:00:00Z
difficulty: "Intermediate"
prereq: "C"
icon: ""
draft: false
---

## Introduction

So, you’ve learned the basics of a programming language. You’ve probably mastered the art of “Hello World” and have either started a personal project, or followed enough tutorials to be able to turn an idea into code.

However, what happens when your code fails to compile? At first, beginners to programming usually turn to others by posting their errors online, or look online to see if others have encountered the same problem. This is a bit tedious, as you'd need to turn to the internet every single time you ran into a compilation error!

Or, what happens when your program compiles, but doesn't work the way you expect it to - a bug? Going back to fix your code is annoying, tiring, and perhaps more difficult than writing code. Learning how to navigate these bugs and errors takes skill, patience, and experience. In this workshop, we'll unravel the basic process for debugging your code.

While debugging is part of all programming languages, exercises in this workshop will focus on C. Most of the examples require you to use simple commands on the command line.

## About this workshop

This workshop assumes that you understand C code, and can write programs in C. The examples we will use are data structures and algorithms that are usually taught in an introductory computer science course. We'll have a brief explanation for them, but it is intended to be a refresher so you have an idea of what the example code is doing.

## Repl.it and the Command Line

Let's try using Repl.it to run some code and get more familiar with the command line. In the Repl.it frame below, open the **Shell** tab.

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/Debugging-Samples-C#HelloWorld.c" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Type 

```bash
make HelloWorld
```

Now hit the enter key to run the command. Running the `make` command compiles your program.

To actually run your program, you need to use a different command:
```bash
./examples/HelloWorld
```

You should see `Hello, World!` printed!

{{% panel theme="success" header="Why use the command line?"%}}

The command line may seem unintuitive and not user-friendly to beginners. However, knowing how to use it is another extremely important skill in your programming career. We'll be using it to run `gdb` and `valgrind` later in the workshop, so the more experience you have with it, the better!

The examples were written on a single Replit. We'll be providing all the commands you need to know to compile and run them, so don't worry if you haven't used the command line so far. 

{{% /panel %}}

## Workshop Contents

{{% children %}}


