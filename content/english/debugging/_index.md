---
title: "The Debugging Process"
description: "An introduction to debugging programs"
date: 2021-10-13T00:00:00Z
difficulty: "Intermediate"
prereq: "none"
icon: ""
draft: false
---

# The Debugging Process

So, you’ve learned the basics of a programming language. You’ve probably mastered the art of “Hello World” and have either started a personal project, or followed enough tutorials to be able to turn an idea into code. However, you've been plagued with all sorts of bugs and errors during this time, and you're now tired of having to search for answers.

Learning how to navigate these bugs and errors takes skill, patience, and experience. Unfortunately, debugging isn’t typically taught to newer programmers, yet programmers spend a substantial amount of time trying to fix their programs rather than writing new code. One can argue that trying to write code right the first time is the solution. In reality, this rarely happens, and this expectation can hurt your mental state. This workshop aims to give an idea of how to debug a program more efficiently.

While debugging is part of all programming languages, exercises in this workshop will focus on C. Most of the examples require you to use simple commands on the command line.

# About this workshop

This workshop assumes that you understand C code, and can write programs in C. In addition, it is helpful to be familiar with how to use the command line. We will be using Repl.it and its command line interface to demonstrate code examples, as well as exercises.

The examples we use are of data structures and algorithms that are usually taught in an introductory course. 

## Try it!


<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/Debugging-Samples-C#HelloWorld.c" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


In the Repl.it frame above, open the "shell" tab. Type `make HelloWorld` and hit `Enter`.

The `make` command will let you compile your C code in this workshop. To run your code, you will not be using the big green run button, but instead use the command: `./HelloWorld`. You should be able to see "Hello World!" printed!

{{% notice tip %}}
# Why are we using the command line?

The command line may seem unintuitive and not user-friendly to beginners. However, knowing how to use it is another extremely important skill in your programming career. We'll be using it to run `gdb` and `valgrind` later in the workshop, so the more experience you get with it, the better!

{{% /notice %}}

## Table of Contents

{{% children %}}


