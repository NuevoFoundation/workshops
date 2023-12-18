---
title: "Actividad 6 - Moviendo la tortuga"
date: 2019-07-25T13:24:17-07:00
weight: 9
draft: false
---

<img src="../media/bee_turtle_chat.png" alt="Abeja y tortuga conversando" width="25%"/>

Nuestro primer paso es dibujar una colmena más pequeña para poder dibujar tanto la colmena como la flor en la pantalla. Ya lo hemos hecho: ¿ves lo que hemos cambiado para dibujar una colmena más pequeña?

``` python
def draw_hexagon():
  for i in range(6):
    turtle.forward(20)
    turtle.left(60)
def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(20)
    turtle.right(60)
```

Después, necesitamos mover la tortuga a una nueva posición para dibujar la flor (¡no queremos dibujar la flor encima de la colmena!). Para hacer esto, primero necesitamos usar los siguientes métodos:

``` python
turtle.penup() 
turtle.goto(x,y)
turtle.pendown()
```

`turtle.penup()` le dice a la tortuga que levante su pluma para que no dibuje mientras se mueve. Entonces, con `turtle.goto(x,y)`, le estamos diciendo a la tortuga la posición donde debe moverse. Después de eso le decimos a la tortuga que vuelva a bajar su pluma usando `turtle.pendown()` para que pueda comenzar a dibujar nuevamente.

<img src="../media/graph.png" alt="Grafica" width="50%"/>

{{% notice info %}}

## Pista

La `x` y la `y` en el método `turtle.goto()` son las coordenadas `x` y `y` de la tortuga. Queremos cambiar las coordenadas `x`, `y` de la tortuga desde `(0, 0)` que es el centro de la imagen, a algún lugar un poco mas lejos para que la flor de mandala no cubra parte de la colmena.

{{% /notice %}}

Para completar esta actividad, mueve a la tortuga a la posición (100, 100) sobre el lienzo. Esto la moverá a la esquina superior derecha.

<iframe src="https://trinket.io/embed/python/459dfbb0fe" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>