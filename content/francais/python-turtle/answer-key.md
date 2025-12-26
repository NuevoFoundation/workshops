---
title: "Python Turtle - Clé de réponse"
date: 2024-09-17T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

Les 3 lignes ci-dessous sont nécessaires pour l'activité d'introduction et toutes les autres activités aussi. 

```python
import turtle
turtle.color("orange")
turtle.shape("turtle")
```

### Activité d'introduction

```python
turtle.color("orange")
turtle.forward(50)
```

### Activité 1

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

### Activité 2

```python
for i in range(4):
  turtle.forward(50)
  turtle.left(90)
```

### Activité 3

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

### Activité 4

```python
def draw_hexagon():
  for i in range(6):
    turtle.forward(50)
    turtle.left(60)

draw_hexagon()
```

### Activité 5

```python
def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(50)
    turtle.right(60)

draw_honeycomb()
```

### Activité 6

```python
turtle.penup()
turtle.goto(300, 300)
turtle.pendown()
```

### Activité 7

```python
def figure_8():
  turtle.circle(50)
  turtle.circle(-50)

figure_8()
```

### Activité 8

```python
def mandala_flower():
  for i in range(35):
    figure_8()
    turtle.right(10)

mandala_flower()
```

### Activité 9

```python
def mandala_flower():
  turtle.color(30, 100, 160)
  for i in range(35):
    figure_8()
    turtle.right(10)

mandala_flower()
```

### Activité 10

```python
def mandala_flower():
  for i in range(35):
    turtle.color(random.randint(0, 256),random.randint(0, 256), random.randint(0, 256)) 
    figure_8()
    turtle.right(10)

mandala_flower()
```
