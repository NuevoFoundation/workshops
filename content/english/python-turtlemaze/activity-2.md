---
title: "Activity 2 - Drawing the Great Maze Walls"
date: 2025-10-13T10:30:00-04:00
weight: 2
draft: false
---

Nuvo and Nuvi are ready to begin their adventure! 🐢✨  
But before they can explore, they need a **maze** — full of twists and turns.  
In this activity, we’ll help Nuvo draw the **walls** of the maze using Python Turtle.

---

### Step 1: Import your helpers and create a maze drawer 🧰

We’ll use our special helper module again so that we can position the turtle easily and keep our code neat.

```python
import turtle
import turtlehelper as th
```

Now, let’s create a new turtle that will draw the maze walls.

```python
# Create a turtle for drawing the maze
maze_drawer = th.create_turtle_object("black", 3, "arrow", 0)
```

{{% notice info %}}

🔍 Explanation

1. "black" → color of the maze lines
2. 3 → pen thickness
3. "arrow" → shape that points where the turtle is heading
4. 0 → fastest drawing speed (0 is instant)

{{% /notice %}}

### Step 2: Choose the starting point 🎯

Before drawing, we move our turtle to the right place.

```python
th.set_cursor(maze_drawer, 0, 100)
```

{{% notice info %}}

🔍 Explanation

1. This tells the turtle to:
2. lift its pen (so it doesn’t draw on the way)
3. move to (x = 0, y = 100)
4. then put the pen back down

{{% /notice %}}

### Step 3: Start drawing the outer wall 🧱

Now the maze starts to take shape!

```python
maze_drawer.forward(150)
maze_drawer.right(90)
maze_drawer.forward(250)
maze_drawer.right(90)
maze_drawer.forward(300)
maze_drawer.right(90)
maze_drawer.forward(250)
maze_drawer.right(90)
maze_drawer.forward(110)
maze_drawer.right(90)
maze_drawer.forward(30)
```

{{% notice info %}}

🧩 What’s happening here?

1. forward(150) → move ahead 150 steps
2. right(90) → turn right 90 degrees (like a square corner)
3. Each pair of “forward + turn” draws a new side of the maze.

{{% /notice %}}

### Step 5: Hide the builder and admire the maze 👀

```python
maze_drawer.hideturtle()
```

Now you can see the maze outline clearly without the arrow in the way.

#### 🌟 Challenge for You

Change the maze color to something fun like "brown" or "darkgreen".

Make your walls thicker or thinner by adjusting the pensize.

Try creating extra paths — can you make a secret shortcut for Nuvi?

<p style="text-align: center;"><iframe src="https://trinket.io/embed/python/7795f4e596a6" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></p>

Awesome work, Maze Master! 🏆
You just created the stage for the adventure.

In Activity 3, You will build the inner maze and make Nuvi hide in it. This sets the stage for Nuvo to begin exploring and seeking Nuvi!
