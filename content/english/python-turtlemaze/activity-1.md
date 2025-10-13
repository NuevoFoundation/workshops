---
title: "Activity 1 - Meet Nuvo the Explorer"
date: 2025-10-12T12:00:00-04:00
weight: 1
draft: false
---

<img src="../media/nuvo_intro.png" alt="Nuvo the turtle" width="25%" />

Welcome, young explorer! 🐢✨ Today, you will meet **Nuvo**, a curious little turtle who loves adventures. Before Nuvo can start exploring the meadow and find Nuvi, we need to help him appear on the screen using Python’s **turtle module**.

Let’s start with the simplest magic trick: **making Nuvo show up on your screen**.  

Here’s what we need to do:

1. Import the turtle library.
2. Create a screen for Nuvo to live in.
3. Give the screen a title.
4. Create Nuvo the turtle.
5. Keep the window open so we can see him.

```python
import turtle

# Step 1: Create a screen for Nuvo
screen = turtle.Screen()

# Step 2: Give the window a title
screen.title("Nuvo the Explorer")

# Step 3: Create Nuvo the turtle
nuvo = turtle.Turtle()

# Step 4: Keep the window open
turtle.done()
```

{{% notice tip %}}
💡 Nuvo’s Tip:
If the window does not appear, make sure you are running the code in a Python environment that supports graphics, such as Trinket, Repl.it, or Thonny.

Try changing Nuvo’s shape or color next — it’s fun to customize your turtle explorer!
{{% /notice %}}

<p style="text-align: center;"> <iframe src="https://trinket.io/embed/python/placeholder-trinket" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe> </p>

Awesome! You’ve successfully met Nuvo. 🐢
In the next activity, we’ll help him decorate his meadow with bright colors and fun text, and prepare for the maze ahead!
