---
title: "Activity 11 - Your turn!"
date: 2019-07-25T13:24:17-07:00
weight: 14
draft: false
---

# Activity 11 - Now, it's your turn!

If there is any time left, try drawing your own shapes and designs! Make your picture interesting using various shapes and colors.

Click [here](https://repl.it/languages/python_turtle) to open a new blank repl.it window to start on your creation.

## Help, I am stuck!

Stuck? Check the Answer key for the activity that you are stuck on!

```
#The below 3 lines are needed for the introduction activity and all the other activities as well.

import turtle
turtle.color("orange")
turtle.shape("turtle")

# Introduction activity
def draw_line():
  turtle.color("orange")
  turtle.forward(50)
#TODO: Uncomment the below line to call the draw_line() function so that it runs
#remember to comment it back out again before going to the next part!
#draw_line()

#Activity 1
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

#TODO: Uncomment the below line to call the draw_square() function so that it runs
#remember to comment it back out again before going to the next part!
#draw_square()

#Activity 2
def draw_square_using_for_loop():  
  turtle.color("red")
  for i in range(4):
    turtle.forward(50)
    turtle.left(90)

#TODO: Uncomment the below line to call the draw_square_using_for_loop() function so that it runs
#remember to comment it back out again before going to the next part!
#draw_square_using_for_loop()

#Activity 3
def draw_hexagon():
  for i in range(6):
    turtle.color("orange")
    turtle.forward(50)
    turtle.left(60)
    
#TODO: Uncomment the below line to call the draw_square_using_for_loop() function so that it runs
#remember to comment it back out again before going to the next part!   
#draw_hexagon()

# Activity 4
def draw_hexagon():
  for i in range(6):
    draw_line()
    turtle.left(60)
    
#TODO: Uncomment the below line to call the draw_hexagon() function so that it runs
#remember to comment it back out again before going to the next part!
#draw_hexagon()

# Activity 5
def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(50)
    turtle.right(60)

#TODO: Uncomment the below line to call the draw_honeycomb() function so that it runs
#remember to comment it back out again before going to the next part!
#draw_honeycomb()

# Activity 6
turtle.penup()
turtle.goto(300, 300)
turtle.pendown()

# Activity 7
def figure_8():
  turtle.circle(50)
  turtle.circle(-50)
  turtle.left(10)

#TODO: Uncomment the below line to call the figure_8() function so that it runs
#remember to comment it back out again before going to the next part!
#figure_8()

# Activity 8
def mandala_flower():
  for i in range(35):
    figure_8()
    
#mandala_flower()

# Activity 9
def mandala_flower():
  turtle.color(30, 100, 160)
  for i in range(35):
    figure_8()
    
#mandala_flower()

# Activity 10
def mandala_flower():
  for i in range(35):
    turtle.color(random.randint(0, 256),random.randint(0, 256), random.randint(0, 256))  
    figure_8()

#mandala_flower()
```
-->
