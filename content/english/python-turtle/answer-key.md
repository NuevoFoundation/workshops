---
title: "Python Turtle - Answer Key"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

The below 3 lines are needed for the introduction activity and all the other activities as well. 

```python
import turtle
turtle.color("orange")
turtle.shape("turtle")
```

### Introduction Activity

```python
turtle.color("orange")
turtle.forward(50)
```

### Activity 1

```python
turtle.forward(50)
turtle.left(90)
turtle.forward(50)
turtle.left(90)
turtle.forward(50)
turtle.left(90)
turtle.forward(50)
turtle.left(90)
```

### Activity 2

```python
for i in range(4):
  turtle.forward(50)
  turtle.left(90)
```

### Activity 3

```python
for i in range(6):
  turtle.forward(50)
  turtle.left(60)
```

### Activity 4

```python
def draw_hexagon():
  for i in range(6):
    turtle.forward(50)
    turtle.left(60)

draw_hexagon()
```

### Activity 5

```python
def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(50)
    turtle.right(60)

draw_honeycomb()
```

### Activity 6

```python
turtle.penup()
turtle.goto(300, 300)
turtle.pendown()
```

### Activity 7

```python
def figure_8():
  turtle.circle(50)
  turtle.circle(-50)

figure_8()
```

### Activity 8

```python
def mandala_flower():
  for i in range(35):
    figure_8()
    turtle.right(10)

mandala_flower()
```

### Activity 9

```python
def mandala_flower():
  turtle.color(30, 100, 160)
  for i in range(35):
    figure_8()
    turtle.right(10)

mandala_flower()
```

### Activity 10

```python
def mandala_flower():
  for i in range(35):
    turtle.color(random.randint(0, 256),random.randint(0, 256), random.randint(0, 256)) 
    figure_8()
    turtle.right(10)

mandala_flower()
```
