---
title: "An Overview of Debugging"
difficulty: "Intermediate"
weight: 1
draft: true
---



There are many different ways to debug a program. In this guide, we’ll start off with some general steps so that you don’t get lost when you debug a program. There are 3 basic steps to debugging a program:

1. Identify the problem. This is the most important step, because if you don’t know what is causing the bug, how can you fix it reliably? We’ll go into detail as to how you can find the problem using various ways. Code inspection, print statements, and debuggers all help you out here.
2. Find a solution. Sometimes this is the easiest step, but at other times it is difficult because you might find that your program logic was incorrect to begin with! This step combined with step 3 can easily take the longest amount of time.
3. Test the solution. If your fix doesn’t actually fix the bug, what good will it do? You also need to make sure your fix doesn’t introduce more bugs.

Sounds simple, right? Wrong. The frustrating part of debugging comes from step 1, because you first need to find the cause of a bug before you can effectively fix it, and a bug can be very elusive.

Finding the solution is not always an easy walk in the park, either. If you're lucky, you’ll find that all you needed to do was to change the name of a variable, or add some parentheses around an arithmetic expression. At other times, you’ll need to rethink the entire part of the program from scratch.

Finally, testing a fix can be tedious as well. Tests need to be meticulous and thorough to be effective. We won't be focusing on testing in this workshop, but knowing how to write good tests is an important skill to have.

Let's dive into these steps some more.