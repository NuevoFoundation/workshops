---
title: "Activity 1 - Meet Nuvo the Explorer"
date: 2025-10-12T12:00:00-04:00
weight: 1
draft: false
---

Welcome, young explorer! 🐢✨ Today, you will meet **Nuvo**, a curious little turtle who loves adventures. Before Nuvo can start exploring the meadow and find Nuvi, we need to help him **appear on the screen** using Python’s **turtle module**.

<img src="../media/nuvo.png" alt="Nuvo the turtle" width="25%" />

Here’s what we’ll do in this activity:

1. Import the turtle library and our helper module.
2. Create Nuvo the turtle.
3. Make him appear on the screen at a starting position.
4. Keep the window open to see him.

Before Nuvo can explore the meadow and the maze, he needs some **helpful tools**. 🐢✨  
In Python, we can create **helper functions** — little instructions that make coding easier and faster.  

Today, we will learn **two magic helper tools** from `turtlehelper.py`:

1. **`create_turtle_object()`** — makes a new turtle quickly.
2. **`set_cursor()`** — moves a turtle to any position on the screen.

---

### 🌟 Step 1: The `set_cursor()` function

This function **moves a turtle to any position** on the screen.

```python
def set_cursor(t, x, y, isPenDown=True):
    t.penup()            # Lift the pen so it does not draw
    t.goto(x, y)         # Move turtle to (x, y)
    if isPenDown:        # If True, put the pen down to draw
        t.pendown()
    return
```

{{% notice info %}}

🔍 Explanation

1. t.penup() – lifts the turtle’s pen so it won’t draw a line while moving.
2. t.goto(x, y) – moves the turtle to the coordinates (x, y) on the screen. The `x` and  `y` in the `t.goto()` method are the `x` and `y` coordinates of the turtle. We want to change the `x` and  `y` coordinates of the turtle from `(0, 0)` which is center of the image, to somewhere a little further away so that the Nuvo can navigate within the maze and Nuvi can hide inside the maze.
3. if isPenDown: – checks if we want the turtle to start drawing again.
4. t.pendown() – puts the pen down so it can draw.
5. return – ends the function (optional, but good practice).

{{% /notice %}}

### 🌟 Step 2: The create_turtle_object() function

This function creates a new turtle with custom settings like color, size, shape, and speed.

```python
def create_turtle_object(color_name=None, size=None, turtle_shape=None, speed=None):
    t = turtle.Turtle()       # Create a new turtle
    if color_name:
        t.color(color_name)   # Set the pen color
    if size:
        t.pensize(size)       # Set the pen thickness
    if turtle_shape:
        t.shape(turtle_shape) # Set the turtle’s shape (arrow, turtle, circle, etc.)
    if speed:
        return t
    t.speed(speed)            # Set how fast the turtle moves
    return t
```

{{% notice info %}}

🔍 Explanation

1. t = turtle.Turtle() – creates a new turtle object.
2. if color_name: – sets the pen color if provided.
3. if size: – sets how thick the lines will be.
4. if turtle_shape: – chooses the turtle’s appearance.
5. if speed: – sets the turtle’s speed.
6. return t – gives back the turtle so we can use it in our code.

{{% /notice %}}

### 🌟 Step 3: Let’s create a text turtle for Nuvo to show messages

```python
# Create Nuvo's text object (for messages later)
text = th.create_turtle_object("black", 4, "arrow")
text.hideturtle()  # Hide the turtle icon
th.set_cursor(text, 0, 160, False)
text.write("Welcome to the Tale of Nuvo and Nuvi", align="center", font=("Comic Sans MS", 14, "bold"))
th.set_cursor(text, 0, 140, False)
text.write("The Great Maze Adventure", align="center", font=("Comic Sans MS", 14, "bold"))
```

{{% notice info %}}

🔍 Explanation

1. text.hideturtle() – hides the turtle so only the text is visible.
2. text.write() – displays a message on the screen.
3. set_cursor positions the text at the correct spot.
4. align="center" – positions the text in the center of the turtle’s location. Other options: "left" or "right".
5. font=("Comic Sans MS", 14, "bold") – controls the text style: "Comic Sans MS" → font type, 14 → font size and "bold" → font weight (can also use "normal" or "italic").

{{% /notice %}}

{{% notice tip %}}
💡 Nuvo’s Tip:
Helper functions are like giving your turtle a magic backpack — it carries all the instructions so your code stays neat and easy.

Try changing the text, font size, or alignment to see how it looks.
{{% /notice %}}

### 🌟 Step 4: Creating Nuvo & Nuvi

Let’s bring our heroes to life using the helper function we made earlier!

```python
# Create our turtle friends
nuvo = th.create_turtle_object("green", 3, "turtle", 6)
nuvi = th.create_turtle_object("purple", 3, "turtle", 6)
```

{{% notice info %}}

🔍 Explanation

1. "green" and "purple" – choose their colors.
2. 3 – line thickness (pen size).
3. "turtle" – gives them a cute turtle shape!
4. 6 – sets how fast they move (higher numbers are faster).

{{% /notice %}}

### 🌟 Step 5: Make them wave hello 👋

Let’s make sure Nuvo and Nuvi start side by side, ready for adventure.

```python
# Move Nuvo and Nuvi to their places
th.set_cursor(nuvo, -20, 0, False)
th.set_cursor(nuvi, 20, 0, False)
```

We can make Nuvo and Nuvi “wave” by turning left and right quickly!

```python
for i in range(3):
    nuvo.left(30)
    nuvo.right(30)
    nuvi.right(30)
    nuvi.left(30)
```

Nuvo and Nuvi are happy to meet you! 💫

<p style="text-align: center;"><iframe src="https://codebunga.com/embed/6uad9aii" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe> </p>

Awesome! 🎉 You now know how to:

1. Create turtles using create_turtle_object()

2. Move them around using set_cursor()

3. Display text on the screen

In the next activity, we’ll create the maze Nuvi is hiding in and make Nuvo ready for his adventure! 🌿