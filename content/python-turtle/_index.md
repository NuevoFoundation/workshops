---
title: "Python Turtle"
description: "Learning Python with Turtle"
date: 2019-07-25T13:24:17-07:00
prereq: ""
difficulty: "Beginner"
download: ""
image: ""
draft: false
---

# Python with Turtle

# Introduction

Welcome to the Nuevo Beehive! You are right on time to help our new baby bee Alex. 

![animation of baby bee Alex](https://media1.giphy.com/media/ozjz5omKqJYex8CaDV/giphy.gif)

Alex lives in a country named the Turtle Islands. Residents of the Turtle Islands speak a language called Python. We are going to use Python to teach Alex how to live in a beehive. Are you up for the challenge? In this tutorial, we will learn how to use the Python language to help Alex *bee*come a busy bee!

# Part 1 - Building a Honeycomb

To help Alex live in a beehive, he needs to learn how to create a honeycomb! We will use Python's `turtle` library to draw a honeycomb for Alex.

## Using Repl.it

Today you will be using Repl.it to learn how to code in Python. Here is an example interactive window that you will use today:

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleIntroduction?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Before we start, let's first understand how the window works. The `main.cs` file contains code, or instructions for the computer to run. By pressing the **run** button, you tell the computer to perform the instructions in the code. Any results from running the code will be displayed on the right side. Today, our results will be an animation of a drawing being created.

Next, let's explain further some of the code that has been provided to you in the `main.cs` file.

### Libraries and import statements

Look at the top of the code. You will see the following line:

```
import turtle
```

This statement allows us to import all of the drawing functionality provided by the `turtle` library. In particular, it introduces a cursor (the turtle) in the result window, which we can control using our code to draw images.

### Comments

The gray line that starts with `#` is called a **comment**. These are notes in the code that helps to explain what is happening in plain English. As they are ignored by the computer, they are often used so that when other developers work on the same code, they will have an easier time reading and understanding what is going on.

## Introduction - Drawing a colored line

Before Alex can learn how to create a beehive, he must first learn how to draw a colored line. We will do this in two parts.

First, we need tell the turtle what color we want the line to be. To do this, let's type in:

```
turtle.color("yellow")
```

Let's try to understand this line of code in more detail.

{{% notice tip %}}

### Strings

Anything you see in **quotation marks** is called a **string**. A string is just a sequence of characters (whether they are letters, numbers, or symbols).

In the code above, `"yellow"` is a string. Other examples of strings include `"123"`, `"abc!"` and `"green"`. Be careful, `123`, `abc!` and `green` are not strings because there are missing quotation marks!

### Methods

`turtle.color()` is a **method.**  We use methods to get the turtle to perform certain actions. In this case, turtle.color() is changing the color of the lines it draws to what color we tell it to. We told it to change the color to yellow by sending it the **string** “yellow” as an **argument**. 

### Arguments

Arguments are inputs that you pass in to **methods** to use. In our example, turtle.color() needs a **string** argument representing the name of the color to set the turtle, so we passed in `"yellow"` as an **argument** to the method. We could also have told it to change the color to something else, but it has to have been a color that `turtle.color()` understand. The colors that it recognizes are: `"red"`, `"orange"`, `"yellow"`, `"green"`, `"blue"`, `"purple"`, `"black"`, `"pink"`, and `"gray"`. If we send in anything else besides one of these color strings, we would get an error!

{{% /notice %}}

Now that we have picked the color that we want, we can now draw a line! To draw a line there are two **methods** that we can use:

```
turtle.forward(50)
turtle.backward(50)
```

TODO: add diagram here.

`turtle.forward(50)` will make the turtle go forward 50 pixels and draw a line in the direction it's facing, while `turtle.backward(50)` will do the same, but in the opposite direction.

{{% notice tip %}}

### Integers

An integer is just any whole number, whether positive or negative. In this example, both `turtle.forward()` and `turtle.backward()` expect an **integer** as an argument instead of a string. This is because the argument represents the number of pixels you want the turtle to move when drawing. A string would clearly not work for these methods!

Let's make the turtle go forward, so type in `turtle.forward(50)`. Now your code should look something like this:

```
import turtle

turtle.color("yellow")
turtle.forward(50)
```

{{% /notice %}}

Now that we have completed our code, press **run**. You should see the following in the result screen:

TODO: insert picture.

{{% notice warning %}}

### HELP! I got a lot of red text!

If you see any red text, you have encountered some errors! Please ask for help or check the debugging page at the end of this tutorial. Beware of the following when coding in python:

1.	Do not use any capital letters.
2.	Make sure that that none of the lines you have written so far start with any spaces.
3.	Ensure that the color that you have chosen is surrounded in quotation marks, and that the color is between the parentheses in `turtle.color()`.

{{% /notice %}}

## Activity 1 - Drawing a square

Kudos! You helped Alex draw a line! Now let’s step it up and help Alex draw a square. To draw a square, we need to follow these steps:

1. Go forward for 50 steps
2. Turn left by 90 degrees
3. Go forward for 50 steps
4. Turn left by 90 degrees
5. Go forward for 50 steps
6. Turn left by 90 degrees
7. Go forward for 50 steps

Remember to use `turtle.forward()` to draw lines. To turn 90 degrees left, you need to pass `90` as the argument to the `turtle.left()` method:

```
turtle.left(90)
```

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity1?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Activity 2 - Simplifying code with loops

Great! You drew a square. But notice that we are writing the same lines over and over again! We had to repeat the instructions to draw a line and turn left 4 times. Wouldn’t it be great if we can give instructions once and tell the program to repeat it 4 times? Fear not, we can!

To do this, we need to use loops. Loops run a set of instructions multiple times. To see this in action, here is some example code that draws a triangle:

```
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

Let’s understand what this code does. `for i in range(3):` This statement tells the program to run the instructions in a loop. `range(3)` sets a limit to how many times the loop rus (in this case, 3 times). The letter `i` is called a **variable**. It is used to keep track of how many times we have run the contents of the loop.

{{% notice warning %}}

### Spacing in Python

Notice that we added extra spaces in front of some lines of code in the example above. The spaces tell the computer these statements are considered a part of the `for` loop. 

Take a look at the below code. Because we removed the spaces in front of `turtle.left(120)`, the code will no longer work as expected. Now, we only repeat `turtle.forward(50)` three times, and we get a straight line instead!

```
for i in range(3):
  turtle.forward(50)
turtle.left(120)
```

{{% /notice %}}

Now, take the example code that we have provided, and modify it slightly so that, instead of drawing a triangle, it draws a square. You can look back at what you did in Activity 1 as a hint. 

## Activity 3 - Drawing a hexagon

Great job! You just drew your first shape in Python with Turtle! Now let’s slightly change the code we already wrote to draw a square to instead draw a hexagon. Alex is a bee, after all, and he needs to draw hexagons to build his first honeycomb.

To help you draw a hexagon, think of how many sides a hexagon has. How many degrees are in each angle of a hexagon?

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity3?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Activity 4 - Simplifying code with functions

We drew one hexagon. But this is just one of many Alex needs to make to build his honeycomb. Once again, it seems that we would have to repeat the code many times to draw multiple hexagons. Fortunately, we don't have to! Functions to the rescue!

### Functions
A function is a way to group together lines of code to do something. For instance, `turtle.forward(50)` moves the turtle forward 50 steps, and `turtle.left(120)` turns the turtle left 120 degrees. What if we want to always do these two actions together? We can put them in a function called `draw_line()`, so that whenever this function is called, both of these actions take place simultaneously. Think of this like a recipe: we compile all the instructions together, and the recipe's name is the food we are making.

Here is an example of a function, and how we would use it:

```
def draw_line():
  turtle.forward(50)
  turtle.left(120)
```

The first line is called the function definition header. The `def` keyword tells the computer that we are defining a new function. Next, we give the function a name, in this case `draw_line`. In the parentheses `()` we would normally define **parameters** for the function. For now, we will leave it as `()`. Finally, don't forget the `:` at the end of the line, which tells the computer that we are starting the function body.

Similar to a for-loop, anything that we wish to define within the function needs to be preceded by 2 spaces.

If you press **run** with just this code, you will notice that you won't see any output! We've only created the functions, but we need to use them. To use the function we created, type in `draw_line()` again, but without the `def`. 

```
def draw_line():
  turtle.forward(50)
  turtle.left(120)
```
 
This is called a **function call** for the `draw_line()` function. A function call runs the code that’s defined in the function with the same name. With the recipe analogy, think of it as actually performing the recipe.

> Tip: Always make sure the names of your functions are descriptive enough to explain what the code in the function does. 

So, let’s try that out by making our own `draw_hexagon()` function! Remember to include the function definition header, the number of sides a hexagon has, and the angle associated with a hexagon: 60 degrees.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity4?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Activity 5 - Drawing a honeycomb

TODO: download to repo.
![](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563991066657_honey_comb.png)

This is the finale! Let's create the honeycomb that Alex will live in. Fortunately, a honeycomb is simply 6 hexagons, so let's combine our knowledge of functions and loops to make our honeycomb! 

First create a loop that repeats 6 times. Inside the loop we have to first draw a hexagon using our `draw_hexagon()` function we previously defined. Next, move the turtle so it can draw the next hexagon. To do so, after the turtle draws each hexagon, we need to tell our turtle to move forward **50 pixels** and then turn right **60 degrees**. 

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity5?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

# Part 2: Building a Mandala Flower 

Great job! You finished building a honeycomb for Alex’s beehive, but Alex needs to also get his pollen from flowers! Wouldn’t it be nice to add a flower to the picture as well? In part 2, we will be creating a mandala flower!

### Moving the turtle

Our first step is to move the turtle to a new location to draw the flower (we don’t want to draw the flower on top of the beehive!). To do this, we first need to use the following methods:

```
turtle.penup() 
turtle.goto(x,y)
turtle.pendown()
```

`turtle.penup()` tells the turtle to pick up its pen so it doesn’t draw while it is moving. Then, with `turtle.goto(x,y)`, we are telling the turtle where to move . After that we tell the turtle to put its pen back down using `turtle.pendown()` so it can start drawing again. 

TODO: Add a picture of a graph with the x and y coordinates.

> Tip: The `x` and  `y` in the `turtle.goto()` method are the `x` and `y` coordinates of the turtle. We want to change the `x, `y` coordinates of the turtle from `(0, 0)` which is the default top-left corner, to somewhere a little farther away so that the mandala flower doesn’t cover up part of the honeycomb.


## Activity 6 - Drawing a figure 8

![drawing a figure 8](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563992981796_figure8.PNG)

Great! Now let’s make a figure 8 as the first step to making a mandala flower! A figure 8 is just two circles that are opposite to each other. 
To do this we can make use of the `turtle.circle(x)` method, which takes an integer `x` as the radius of the circle. Having the radius as an **argument** means we can decide how big or small the circle should be.

> Tip: `2 * radius` is how wide the circle is.

```
  import turtle
  turtle.circle(10)
```

In the above example, the circle is 20 pixels wide and the circle is drawn in a counterclockwise direction. If the argument to `turtle.circle()` is negative, then the circle is drawn in a clockwise direction and it is opposite to the original version. 

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity6?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Activity 7 -  Creating a mandala flower 

We’re done creating our first figure 8!
But we’re not done quite yet, we need an extra step to rotate the turtle by some number of degrees to prepare to draw the next figure 8 for our mandala flower!

We can now use the figure 8 function to create a mandala flower! To do this we need to use a... you guessed it, a loop! In the loop we will call the figure 8 function we wrote earlier to create a figure 8 and then rotate the turtle either left or right a certain number of degrees. To make a mandala flower, it’s a good idea to create a loop that repeats at least 35 times. 

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity7?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Activity 8 - Coloring your mandala flower

![mandala flower with blue pedals](https://paper-attachments.dropbox.com/s_F078714AB8FA59FD292476DB5E3304D54CD817148B6A8087A90D63D6C59A7C0D_1563989987816_mandala+one+color.PNG)

Now that we have the shape of a mandala flower, it’s time to color it! We’re still going to use the `turtle.color()` method; however this time we’re going to use an RBG value instead of a string color value, so that we can produce a larger variety of colors.

{{% notice tip %}}

### RBG (Red-Green-Blue) colors

In primary school, you might recall that by mixing colors together, you can produce new colors. For example, combining red and blue together make purple. We can also change the amount of red and blue mixed together to create different shades of purple. The computer does something similar to produce colors. By combining various intensities of red, green, and blue, we can create more varied colors, such as powder blue, golden yellow, and salmon pink.

In the `turtle.color()` method, we can specify three integer arguments corresponding to the amount of red, green, and blue to mix. Each integer must be between `0` and `255` inclusive. One example can be `turtle.color(30, 100, 238)`, which produces a dark shade of blue.

{{% /notice %}}

Update your mandala flower to use a color of your liking. Feel free to experiment with different colors!

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity7?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Activity 9 - Randomizing the color of your mandala flower petals

![mandala flower with random color petals](https://paper-attachments.dropbox.com/s_F078714AB8FA59FD292476DB5E3304D54CD817148B6A8087A90D63D6C59A7C0D_1563989900782_mandala+colors.PNG)

We’ve successfully set the color of the mandala flower to an RGB value. Now, let's explore changing the color of the individual mandala flower petals? 

We will make use of python’s `random` library. The `random.randint()` method allows us to choose a random value for each of the red, green, or blue value. To choose a value that is between 0 inclusive and 256 exclusive (in other words, between 0 and 255 inclusive), we need to use `random.randint(0, 256)`.

Use `random.randint(0, 256)` three times to produce three random values, and plug them into the `turtle.color()` method. You should now be able to see a multi-colored mandala flower! This is definitely a flower from which Alex would be interesting in collecting nectar!

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity7?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Congratulations! You helped Alex make a honeycomb and a flower! He can now happily live in his beehive, and make lots of honey! Your final image should look something like this:

![final product](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563991731125_final_image.png)

## Activity 10 - Now, it's your turn!

If there is any time left, try drawing your own shapes and designs! Make your picture interesting using various shapes and colors.

Click [here](https://repl.it/languages/python_turtle) to open a new blank repl.it window to start on your creation.

## Help, I am stuck!

Stuck? Check the Answer key for the activity that you are stuck on!

```
# Activity 1
def draw_line():
  turtle.color("yellow")
  turtle.forward(50)
  
#Activity 2
def draw_square():
  turtle.color("red")
  turtle.forward(50)
  turtle.left(90)
  turtle.forward(50)
  turtle.left(90)
  turtle.forward(50)
  turtle.left(90)
  turtle.forward(50)
  turtle.left(90)

def draw_square_using_for_loop():  
  turtle.color("red")
  for i in range(4):
    turtle.forward(50)
    turtle.left(90)

# Activity 3
def draw_hexagon():
  for i in range(6):
    draw_line()
    turtle.left(60)

# Activity 4
def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(50)
    turtle.right(60)

# Activity 5
turtle.penup()
turtle.goto(300, 300)
turtle.pendown()

# Activity 6
def figure_8():
  turtle.circle(50)
  turtle.circle(-50)
  turtle.left(10)

# Activity 7
def mandala_flower():
  for i in range(35):
    figure_8()

# Activity 8
def mandala_flower():
  turtle.color(30, 100, 160)
  for i in range(35):
    figure_8()

# Activity 9
def mandala_flower():
  for i in range(35):
    turtle.color(random.randint(0, 256),random.randint(0, 256), random.randint(0, 256))  
    figure_8()
```
