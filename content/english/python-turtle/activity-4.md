---
title: "Activity 4 - Simplifying code with functions"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

We drew one hexagon. But this is just one of many hexagons Alex needs to build his honeycomb. Once again, it seems that we would have to repeat the code many times to draw multiple hexagons. Fortunately, we don't have to! Functions to the rescue!

{{% notice tip %}}

## Functions

A function is a way to group together lines of code to do something. For instance, `turtle.forward(50)` moves the turtle forward 50 steps, and `turtle.left(120)` turns the turtle left 120 degrees. What if we want to always do these two actions together? We can put them in a function called `draw_line()`, so that whenever this function is called, both of these actions take place simultaneously. Think of this like a recipe: we compile all the instructions together, and the recipe's name is the food we are making.

{{% /notice %}}

Here is an example of a **function definition**, and how we would use it:

```
def draw_line():
  turtle.forward(50)
  turtle.left(120)
```

The first line is called the function definition **header**. The `def` keyword tells the computer that we are defining a new function. Next, we give the function a name, in this case `draw_line`. Finally, don't forget the `():` at the end of the line, which tells the computer that we are starting the function body.

{{% notice tip %}}

## Extra material - parameters

Inside the parentheses `()` we would normally define **parameters** for the function. Parameters are inputs that we can give into the function, which the function can use to produce its output. For example, we must have two numbers to add them together and produce a result - the two numbers we used can be considered **parameters**. Today, we will not use parameters, and leave it as `()`. 

{{% /notice %}}

Similar to a for-loop, anything that we wish to define within the function needs to be preceded by 1 tab.

If you press **run** with just this code, you will notice that you won't see any output! We've only created the functions, but we need to use them. To use the function we created, type in `draw_line()` again, but without the `def`. 

```
def draw_line():    # Function definition
  turtle.forward(50)
  turtle.left(120)

draw_line()         # Function call
```

This is called a **function call** for the `draw_line()` function. A function call runs the code that’s defined in the function with the same name. With the recipe analogy, think of it as actually performing the recipe.

{{% notice info %}}

## Tips

1. Always make sure the names of your functions are descriptive enough to explain what the code in the function does. 
2. Your function call must be below the function definition.

{{% /notice %}}

{{% notice warning %}}

## Tricky Python syntax - Part 2

Notice that functions use similar syntax rules with `for`-loops - you must have a `:` at the end of the function declaration, and anything in the function body needs to start with a tab.

What happens when you need a `for`-loop inside of a function? Then, you need to combine the rules together! Here is an example on how to properly put a `for`-loop inside of a function.

```
def draw_line():
  for i in range(3):
    turtle.forward(50)
```

Notice that `turtle.forward(50)` has 2 tabs in front of it, because it is both inside of a function definition, and inside of a `for`-loop!

{{% /notice %}}

So, let’s try that out by making our own `draw_hexagon()` function! Remember to include the function definition header, the number of sides a hexagon has, and the angle associated with a hexagon: 60 degrees.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity4?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
