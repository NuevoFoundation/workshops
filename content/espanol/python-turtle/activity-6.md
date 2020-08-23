---
title: "Actividad 6 - Moviendo la tortuga"
date: 2019-07-25T13:24:17-07:00
weight: 9
draft: false
---

Nuestro primer paso es mover la tortuga a una nueva posición para dibujar la flor (¡no queremos dibujar la flor encima de la colmena!). Para hacer esto, primero necesitamos usar los siguientes métodos:

```
turtle.penup() 
turtle.goto(x,y)
turtle.pendown()
```

`turtle.penup()` le dice a la tortuga que levante su pluma para que no dibuje mientras se mueve. Entonces, con `turtle.goto(x,y)`, le estamos diciendo a la tortuga la posición donde debe moverse. Después de eso le decimos a la tortuga que vuelva a bajar su pluma usando `turtle.pendown()` para que pueda comenzar a dibujar nuevamente. 

<!--TODO: Add a picture of a graph with the x and y coordinates.-->

{{% notice info %}}

### Pista

La `x` y la `y` en el método `turtle.goto()` son las coordenadas `x` y `y` de la tortuga. Queremos cambiar las coordenadas `x`, `y` de la tortuga desde `(0, 0)` que es el centro de la imagen, a algún lugar un poco mas lejos para que la flor de mandala no cubra parte de la colmena.

{{% /notice %}}

Para completar esta actividad, mueve a la tortuga a la posición (300, 300) sobre el lienzo. Esto la moverá a la esquina superior derecha.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity6?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>