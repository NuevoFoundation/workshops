---
title: "Actividad 3 - Dibujando las Paredes Internas del Laberinto"
date: 2025-10-13T10:30:00-04:00
weight: 3
draft: false
---

¡Nuvo y Nuvi están listos para comenzar su aventura! 🐢✨  
Pero antes de que puedan explorar, necesitan un **laberinto** — lleno de giros y vueltas.  
En esta actividad, dibujaremos las **paredes internas** del laberinto usando Python Turtle.

---

### Paso 1: Agrega caminos internos al laberinto 🌀

Agreguemos algunos pasajes para que Nuvo pueda deambular.  
Puedes seguir utilizando `set_cursor()` para saltar a nuevos puntos de inicio sin dibujar líneas no deseadas.

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

Siempre que quieras dibujar una nueva pared en otro lugar,  
simplemente mueve la tortuga usando `set_cursor()` — ¡no es necesario empezar desde cero!

{{% /notice %}}

<p style="text-align: center;"><iframe src="https://codebunga.com/embed/a4i3d3pk" title="Actividad 3 - Dibujando las Paredes Internas del Laberinto - Editor de Codebunga 1" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></p>

#### 🌟 Reto para Ti

Las paredes no son solo barreras, ¡son invitaciones a explorar! Agrega giros, vueltas y caminos escondidos para que cada paso sea un emocionante descubrimiento.

Aquí tienes un laberinto de ejemplo como referencia:

<p style="text-align: center;"><iframe src="https://codebunga.com/embed/3s58emjh" title="Actividad 3 - Dibujando las Paredes Internas del Laberinto - Editor de Codebunga 2" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></p>

### Paso 2: Es hora de que Nuvi se esconda en el laberinto

Ocultemos a Nuvi dentro del laberinto, para que Nuvo pueda buscarla.

```python
nuvi = th.create_turtle_object("green",5,"turtle",1)
th.set_cursor(nuvi,10,-135)
nuvi.right(90)
nuvi.right(90)
```

¡Excelente trabajo, Maestro del Laberinto! 🏆  
Acabas de crear el laberinto para la aventura.

En la Actividad 4, Nuvo comenzará a moverse por el laberinto y lo guiarás hacia Nuvi utilizando lógica y giros.