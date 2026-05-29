---
title: "Activity 4 - Test Drive Nuvo Through the Maze"
date: 2025-10-13T11:00:00-04:00
weight: 4
draft: false
---

Nuvo is excited! 🐢  
He finally has a maze to explore — but before we send him off to find Nuvi, let’s help him practice moving around safely.  

In this activity, you’ll **manually drive Nuvo** through a few turns using simple Turtle commands.  
It’s like remote-controlling your turtle friend with code! 🎮  

---

### Step 1: Import your modules and set the scene 🎨

Let’s reuse our maze and helper files from before so Nuvo can move around inside his maze.

```python
import turtle
import turtlehelper as th
import maze
```

Then draw the maze and create Nuvo!

```python
# Draw the maze walls
maze.draw_maze()

# Create Nuvo (our explorer)
nuvo = th.create_turtle_object("purple", 4, "turtle", 3)
th.set_cursor(nuvo, -20, 120)   # Start near the maze entrance
```

### Step 1: Move Nuvo forward 🐾

Try moving Nuvo a little bit forward inside the maze.

```python
nuvo.forward(50)
```

Every time you call forward(50), Nuvo moves 50 steps ahead.
You can experiment with different numbers — smaller steps are safer when navigating tight spaces!

### Step 2: Learn to turn left and right 🔄

To make Nuvo turn, use:

```python
nuvo.left(90)   # turn left
nuvo.right(90)  # turn right
```

Each command turns Nuvo by the number of degrees you tell it — 90 degrees means a perfect corner turn.

Try this small test route:

```python
nuvo.forward(50)
nuvo.left(90)
nuvo.forward(50)
nuvo.right(90)
nuvo.forward(50)
```

Does Nuvo move the way you expect?
If not, adjust the angles — for example, use 45 or 120 to make diagonal or triangle turns.

### Step 3: Combine movements into a simple path 🚶‍♂️

Let’s guide Nuvo around one part of the maze.
You can write a mini route for him:

```python
# A custom test drive for Nuvo
nuvo.forward(100)
nuvo.right(90)
nuvo.forward(80)
nuvo.left(90)
nuvo.forward(60)
```

Each step is like a driving instruction:

1. “Go forward this far”
2. “Turn this way”
3. “Now keep moving”

### Step 4: Hide or reset Nuvo if he gets stuck 🔁

If Nuvo bumps into a wall or goes off track — no problem!
You can lift him up and start again.

```python
th.set_cursor(nuvo, 10, -135)
```

🌟 Challenge for You

🧩 Try making your own mini adventure route!

1. Can you make Nuvo trace a square inside the maze?
2. What happens if you turn by 45 degrees instead of 90?
3. Can you guide Nuvo from the bottom-left corner to the top-right?

<p style="text-align: center;"> <iframe src="https://trinket.io/embed/python/32ed0926a91f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe> </p>

Bravo, Turtle Driver! 🚗💨
You’ve just learned to control direction, distance, and turns — all the tools you need to navigate any maze.

In the next activity, we’ll teach Nuvo how to find Nuvi!!
