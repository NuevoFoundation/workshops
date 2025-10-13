---
title: "Activity 3 - Drawing the Inner Maze Walls"
date: 2025-10-13T10:30:00-04:00
weight: 3
draft: false
---

Nuvo and Nuvi are ready to begin their adventure! 🐢✨  
But before they can explore, they need a **maze** — full of twists and turns.  
In this activity, we’ll draw the **inner walls** of the maze using Python Turtle.

---

### Step 1: Add inner maze paths 🌀

Let’s add a few passages for Nuvo to wander through.
You can keep using set_cursor() to jump to new starting spots without drawing unwanted lines.

```python
th.set_cursor(maze_drawer, -120, 70)
maze_drawer.left(90)
maze_drawer.forward(30)
maze_drawer.right(90)
maze_drawer.forward(30)
maze_drawer.left(90)
maze_drawer.forward(150)
```

{{% notice info %}}

Whenever you want to draw a new wall somewhere else,
just move the turtle using set_cursor() — no need to start from scratch!

{{% /notice %}}

<p style="text-align: center;"><iframe src="https://trinket.io/embed/python/98c243243850" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></p>

#### 🌟 Challenge for You

Walls aren’t just barriers—they’re invitations to explore. Add twists, turns, and hidden paths to make every step a thrilling discovery.

Here's a sample maze for your reference:

<p style="text-align: center;"><iframe src="https://trinket.io/embed/python/180e09890a31" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></p>

### Step 2: It's time for Nuvi to hide in the maze

Let’s hide Nuvi within the maze so that Nuvo can seek her.

```python
nuvi = th.create_turtle_object("green",5,"turtle",1)
th.set_cursor(nuvi,10,-135)
nuvi.right(90)
nuvi.right(90)
```

Awesome work, Maze Master! 🏆
You just created the maze for the adventure.

In Activity 4, Nuvo will start moving through the maze and you’ll guide him toward Nuvi using logic and turns!