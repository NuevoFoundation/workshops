---
title: "Activity 2 - Simplifying code with loops"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://www.youtube.com/embed/kGhMGdqqV-w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Great! You drew a square. But notice that we are writing the same lines over and over again! We had to repeat the instructions to draw a line and turn left 4 times. Wouldn’t it be great if we can give instructions once and tell the program to repeat it 4 times? Fear not, we can!

To do this, we need to use loops. Loops run a set of instructions multiple times. To see this in action, here is some example code that draws a triangle:

```
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

Let’s understand what this code does. `for i in range(3):` This statement tells the program to run the instructions in a loop. `range(3)` sets a limit to how many times the loop runs (in this case, 3 times). The letter `i` is called a **variable**. It is used to keep track of how many times we have run the contents of the loop. 

{{% notice warning %}}

## Tricky Python syntax - Part 1

**Syntax** is how we write languages so that it is understandable. In English we have spelling and grammar rules to help understand each other. Similarly, the Python language has syntax rules so that the computer can understand our code.

First, notice that at the end of the line with `for`, we added a colon (`:`); this signifies that the next line will be part of the `for` loop. The computer will complain if you miss the `:`!

As well, we added a tab in front of some lines of code in the example above. The tab tells the computer these statements are considered a part of the `for` loop. 

To see how big of a difference this makes, take a look at the below code. Because we removed the tab in front of `turtle.left(120)`, the code will no longer work as expected. Now, we only repeat `turtle.forward(50)` three times, and we get a straight line instead!

```
for i in range(3):
  turtle.forward(50)
turtle.left(120)
```

{{% /notice %}}

Now, take the example code that we have provided, and modify it slightly so that, instead of drawing a triangle, it draws a square. You can look back at what you did in Activity 1 as a hint. 

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
