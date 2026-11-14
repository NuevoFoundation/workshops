---
title: "Python Turtle - Answer Key"
date: 2026-11-14
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

```python
for i in range(5):
  turtle.forward(50)
  turtle.left(144)
```

```python
for i in range(5):
  turtle.forward(50)
  turtle.left(72)
  turtle.forward(50)
  turtle.right(144)
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

### Activity 11

This optional activity has many possible answers. Students can make their own designs instead of a spiral. The examples below are complete programs for a fresh editor; they do not need code from earlier activities.

#### Growing spiral

```python
import turtle

turtle.shape("turtle")
turtle.speed(0)
turtle.color("blue")

for i in range(80):
  turtle.forward(i * 2)
  turtle.right(61)
```

The loop uses `i` values from `0` to `79`. Multiplying by `2` makes each move 2 pixels longer than the previous move. The first move has length `0`, so 80 repetitions produce 79 visible line segments.

#### Experiment results

Each comparison starts from the growing spiral above and changes only the value shown.

| Change | Expected result |
|---|---|
| `range(40)` | The drawing stops earlier, after 39 visible segments, so it does not grow as far. |
| `i * 1` | Every move is half as long as before, so the spiral is half the size. |
| `turtle.right(60)` | The lines follow six repeating directions, giving the spiral a hexagonal appearance without the extra twist from 61-degree turns. |
| `turtle.right(90)` | The lines follow four repeating directions, creating a square spiral. |

Even with 60-degree turns, this does not draw a closed regular hexagon: the line lengths keep increasing.

#### Repeating colors

```python
import turtle

turtle.shape("turtle")
turtle.speed(0)

colors = ["red", "orange", "blue", "green", "cyan", "gold"]

for i in range(80):
  turtle.color(colors[i % len(colors)])
  turtle.forward(i * 2)
  turtle.right(61)
```

`len(colors)` is `6`, so `i % len(colors)` repeats the list indexes `0` through `5`. At `i = 6`, the index returns to `0`. The first move, at `i = 0`, has length `0`, so the first visible line is orange.

#### Two personalized spirals

The repeating-color example above can be the first spiral. For a second design, students can use this complete program:

```python
import turtle

turtle.shape("turtle")
turtle.speed(0)

colors = ["blue", "green", "gold"]

for i in range(80):
  turtle.color(colors[i % len(colors)])
  turtle.forward(i * 1)
  turtle.right(90)
```

One possible explanation: "I used three colors instead of six. I changed the turn from 61 to 90 degrees to make a square spiral, and I changed the multiplier from 2 to 1 to shorten the lines."

The list must contain at least one color. Because the loop uses `len(colors)`, a three-color list automatically cycles through indexes `0`, `1`, and `2`. Other color choices, angles, and original designs are valid answers too.
