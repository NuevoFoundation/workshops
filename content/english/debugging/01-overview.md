---
title: "An Overview of Debugging"
difficulty: "Intermediate"
weight: 2
draft: false
---

There are many different ways to debug a program. In this guide, we’ll start off with some general steps so that you don’t get lost when you debug a program. There are 3 basic steps to debugging a program:

1. **Identify the problem**. In this step, your goal is to identify what is causing the bug. This involves finding the conditions that led to the bug. Being able to reproduce the bug gives you some of the information you need, which lets you narrow down the problem and perhaps helps you understand why the bug is occurring in the first place.

2. **Find a solution**. In this step, your goal is to fix the bug. Sometimes this is the easiest step, but at other times it is difficult because you might find that your program's logic was incorrect to begin with! This step combined with step 3 can easily take the longest amount of time.

3. **Test the solution**. If your fix doesn’t actually fix the bug, what good will it do? You also need to make sure your fix doesn’t introduce more bugs. This step can be as simple as recompiling and running the program again once you've applied the fix. Or, it can involve running a whole suite of automated tests in an environment. Either way, the goal of this step is to establish program *correctness*.

Arguably the most frustrating part of debugging is step 1. As programmers, our job is to write code, but we can't write code to fix the problem if we don't know what the problem is in the first place! Thus, the bulk of this workshop will focus on finding where a bug could be hiding, as well as how you can use some tools to aid in your search.