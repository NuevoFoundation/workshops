---
title: "Python Turtle - Clave de respuestas"
date: 2026-11-14
weight: 15
draft: false
hidden: true
---

Las siguientes 3 líneas son necesarias para la actividad de introducción y todas las demás actividades también.

```python
import turtle
turtle.color("orange")
turtle.shape("turtle")
```

### Actividad de introducción

```python
turtle.color("orange")
turtle.forward(50)
```

### Actividad 1

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

### Actividad 2

```python
for i in range(4):
  turtle.forward(50)
  turtle.left(90)
```

### Actividad 3

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

### Actividad 4

```python
def draw_hexagon():
  for i in range(6):
    turtle.forward(50)
    turtle.left(60)

draw_hexagon()
```

### Actividad 5

```python
def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(50)
    turtle.right(60)

draw_honeycomb()
```

### Actividad 6

```python
turtle.penup()
turtle.goto(300, 300)
turtle.pendown()
```

### Actividad 7

```python
def figure_8():
  turtle.circle(50)
  turtle.circle(-50)

figure_8()
```

### Actividad 8

```python
def mandala_flower():
  for i in range(35):
    figure_8()
    turtle.right(10)

mandala_flower()
```

### Actividad 9

```python
def mandala_flower():
  turtle.color(30, 100, 160)
  for i in range(35):
    figure_8()
    turtle.right(10)

mandala_flower()
```

### Actividad 10

```python
def mandala_flower():
  for i in range(35):
    turtle.color(random.randint(0, 256),random.randint(0, 256), random.randint(0, 256))
    figure_8()
    turtle.right(10)

mandala_flower()
```

### Actividad 11

Esta actividad opcional tiene muchas respuestas posibles. Puedes crear tus propios diseños en lugar de una espiral. Los ejemplos de abajo son programas completos para un nuevo editor; no necesitan código de las actividades anteriores.

#### Espiral que crece

```python
import turtle

turtle.shape("turtle")
turtle.speed(0)
turtle.color("blue")

for i in range(80):
  turtle.forward(i * 2)
  turtle.right(61)
```

El ciclo usa valores de `i` desde `0` hasta `79`. Al multiplicar por `2`, cada movimiento es 2 píxeles más largo que el anterior. El primer movimiento tiene una longitud de `0`, así que 80 repeticiones producen 79 segmentos de línea visibles.

#### Resultados de los experimentos

Cada comparación empieza con la espiral de arriba y cambia solamente el valor indicado.

| Cambio | Resultado esperado |
|---|---|
| `range(40)` | El dibujo termina antes, después de 39 segmentos visibles, así que no crece tanto. |
| `i * 1` | Cada movimiento mide la mitad que antes, así que la espiral tiene la mitad del tamaño. |
| `turtle.right(60)` | Las líneas siguen seis direcciones que se repiten, dándole a la espiral una apariencia hexagonal sin el grado adicional de cada giro de 61 grados. |
| `turtle.right(90)` | Las líneas siguen cuatro direcciones que se repiten, creando una espiral cuadrada. |

Incluso con giros de 60 grados, no se dibuja un hexágono regular cerrado: las longitudes de las líneas siguen aumentando.

#### Colores que se repiten

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

`len(colors)` es `6`, así que `i % len(colors)` repite los índices de la lista del `0` al `5`. Cuando `i = 6`, el índice vuelve a `0`. El primer movimiento, cuando `i = 0`, tiene una longitud de `0`, así que la primera línea visible es naranja.

#### Dos espirales personalizadas

El ejemplo de colores que se repiten puede ser la primera espiral. Para un segundo diseño, puedes usar este programa completo:

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

Una explicación posible: "Usé tres colores en lugar de seis. Cambié el giro de 61 a 90 grados para crear una espiral cuadrada y cambié el multiplicador de 2 a 1 para acortar las líneas".

La lista debe tener al menos un color. Como el ciclo usa `len(colors)`, una lista de tres colores recorre automáticamente los índices `0`, `1` y `2`. Otros colores, ángulos y diseños originales también son respuestas válidas.
