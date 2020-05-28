---
title: "Activity 11 - Now, it's your turn!"
date: 2019-07-25T13:24:17-07:00
weight: 14
draft: false
---

If there is any time left, try drawing your own shapes and designs! Make your picture interesting using various shapes and colors.

Click [here](https://repl.it/languages/python_turtle) to open a new blank repl.it window to start on your creation.

## Help, I am stuck!

Stuck? Check the Answer key for the activity that you are stuck on!

```
### INTRODUCTION
import turtle

# This is a comment. Add your code below this line.
turtle.shape("turtle")
turtle.color("orange")
turtle.forward(50)

--

### ACTIVITY 1
import turtle

turtle.shape("turtle")
turtle.color("orange")

# Activity 1 - Draw a square. Add your code below this line.
turtle.forward(50)
turtle.right(90)
turtle.forward(50)
turtle.right(90)
turtle.forward(50)
turtle.right(90)
turtle.forward(50)
turtle.right(90)

--

### ACTIVITY 2
import turtle

turtle.shape("turtle")
turtle.color("orange")

# Activity 2 - Change the following code to draw
# a square, instead of a triangle.
for i in range(4):
  turtle.forward(50)
  turtle.right(90)

--

### ACTIVITY 3
import turtle

turtle.shape("turtle")
turtle.color("orange")

# Activity 3 - Draw a hexagon, using a for-loop.
# Add your code after this line.
for i in range(6):
  turtle.forward(50)
  turtle.right(60)

--

### ACTIVITY 4
import turtle

# Activity 4 - Define a function below called
# draw_hexagon, and use your code from Activity 3.
def draw_hexagon():
  for i in range(6):
    turtle.forward(50)
    turtle.right(60)

# Do not delete the following lines of code.
turtle.shape("turtle")
turtle.color("orange")

draw_hexagon()

--


### ACTIVITY 5
import turtle

def draw_hexagon():
  for i in range(6):
    turtle.forward(50)
    turtle.left(60)

# Activity 5 - Define a new function below called
# draw_honeycomb that draws a honeycomb.
# HINTS:
# - Start off with a for loop that repeats 6 times.
# - Draw a hexagon using draw_hexagon
# - Move the turtle forward 50 pixels
# - Turn the turtle right 60 degrees
def draw_honeycomb():
  draw_hexagon()
  turtle.forward(50)
  turtle.right(60)

# Do not delete the following lines of code:
turtle.shape("turtle")
turtle.color("orange")

# If you want the turtle to move faster, uncomment
# the line of code below:
# turtle.speed(8)

draw_honeycomb()

--

### ACTIVITY 6
import turtle

def draw_hexagon():
  for i in range(6):
    turtle.forward(50)
    turtle.left(60)

def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(50)
    turtle.right(60)

turtle.shape("turtle")
turtle.color("orange")
turtle.speed(8)

draw_honeycomb()

# Activity 6 - After drawing the honeycomb, 
# move the turtle to position (300, 300) on
# the canvas, without drawing extra lines.
# Add your code below.
turtle.penup()
turtle.goto(300, 300)
turtle.pendown()

--

### ACTIVITY 7
import turtle

def draw_hexagon():
  for i in range(6):
    turtle.forward(50)
    turtle.left(60)

def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(50)
    turtle.right(60)

# Activity 7 - Define a new function called 
# figure_8 which draws a figure 8.
# HINT: draw two circles, one going in
#       counterclockwise direction, the other
#       going in the clockwise direction.
def figure_8():
  turtle.circle(50)
  turtle.circle(-50)

# Do not delete the following lines of code.
turtle.shape("turtle")
turtle.color("orange")
turtle.speed(8)

draw_honeycomb()

turtle.penup()
turtle.goto(300, 300)
turtle.pendown()

figure_8()

--

### ACTIVITY 8
import turtle

def draw_hexagon():
  for i in range(6):
    turtle.forward(50)
    turtle.left(60)

def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(50)
    turtle.right(60)

def figure_8():
  turtle.circle(50)
  turtle.circle(-50)

# Activity 8 - Define a new function called
# mandala_flower which draws a mandala flower.
# HINTS:
# - Use a for-loop which repeats at least 35 times.
# - Each time the loop runs, draw a figure 8, and
#   then rotate the turtle slightly.
def mandala_flower():
  for i in range(35):
    figure_8()
    turtle.right(10)

# Do not delete the following lines of code
turtle.shape("turtle")
turtle.color("orange")
turtle.speed(8)

draw_honeycomb()

turtle.penup()
turtle.goto(300, 300)
turtle.pendown()

mandala_flower()

--

### ACTIVITY 9
import turtle

def draw_hexagon():
  for i in range(6):
    turtle.forward(50)
    turtle.left(60)

def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(50)
    turtle.right(60)

def figure_8():
  turtle.circle(50)
  turtle.circle(-50)

def mandala_flower():
  for i in range(35):
    figure_8()
    turtle.right(10)

# Do not delete the following lines of code.
turtle.shape("turtle")
turtle.color("orange")
turtle.speed(8)

draw_honeycomb()

turtle.penup()
turtle.goto(300, 300)
turtle.pendown()

# Activity 9 - Set the turtle's color using an RGB
# value here:
turtle.color(30, 100, 160)

mandala_flower()

--

### ACTIVITY 10
import turtle
import random

def draw_hexagon():
  for i in range(6):
    turtle.forward(50)
    turtle.left(60)

def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(50)
    turtle.right(60)

def figure_8():
  turtle.circle(50)
  turtle.circle(-50)

# Activity 10 - Update the following mandala_flower
# function so that each time the loop runs, the
# turtle changes color to a new random color.
# HINTS:
# - Use turtle.color, and pass in three arguments
#   into the method.
# - Generate three random numbers, one for each
#   value of RGB.
# - Remember that we need to change the color
#   each time we run the loop.
def mandala_flower():

  for i in range(35):
    turtle.color(random.randint(0, 256),random.randint(0, 256), random.randint(0, 256))  
    figure_8()

    turtle.right(10)

# Do not delete the following lines
turtle.speed(0)
turtle.shape("turtle")
turtle.color("orange")

draw_honeycomb()

turtle.penup()
turtle.goto(300, 300)
turtle.pendown()

mandala_flower()
```
