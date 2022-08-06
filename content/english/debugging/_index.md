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

So, you’ve learned the basics of a programming language. You’ve probably mastered the art of `“Hello World”` and have either started a personal project, or followed enough tutorials to be able to turn an idea into code.

However, what happens when your code fails to compile? Beginners to programming usually search online to see if others have encountered similar problems. This is a bit tedious, as you'd need to turn to the internet every single time you ran into an error. 

What happens when your program compiles, but doesn't work the way you expect it to (i.e., you found **a bug? 🪲)**

Going back to fix your code can be a challenge more difficult than writing the code itself. Learning how to navigate these bugs and errors takes skill, patience, and experience. In this workshop, we'll unravel the basic process for debugging your code. Remember that debugging is part of all programming languages.

{{% panel theme="info" header="Why call it a bug?"%}}
The first recorded programming bug was recorded all the way back in 1947 when a moth decided to be in the wrong place. Check out [The World’s First Computer Bug.](https://education.nationalgeographic.org/resource/worlds-first-computer-bug)

{{% /panel %}}

## About this workshop

This workshop assumes that you understand and can write code in the **C** programming language. The examples used in this workshop make use of data structures and algorithms, topics that are usually taught in an introductory computer science course. We'll have a brief explanation of them, but it is intended to be a refresher so you have an idea of what the example code is doing.

## Replit and the Command Line

Let's try using Replit to run some code and get more familiar with the command line. In the Replit frame below, open the **Shell** tab.

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/Debugging-Samples-C?lite=true#HelloWorld.c" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

First let's compile our code. Within the shell tab, type the following and click **ENTER**:

```bash
make HelloWorld
```

After compiling our code, we need to use a different command to run it. Type the following and click **ENTER**:

```bash
./examples/HelloWorld
```

You should see a `Hello, World!` text printed on the shell!

{{% panel theme="info" header="Why use the command line?"%}}

The command line may seem unintuitive and not user-friendly to beginners. However, knowing how to use it is extremely important for your programming career. We'll be using it to run `gdb` and `valgrind` later in the workshop, so the more experience you have with it, the better!

The examples were written on a single Replit. We'll be providing all the commands you need to know to compile and run them, so don't worry if you haven't used the command line so far. 

{{% /panel %}}

## Workshop Contents

{{% children %}}