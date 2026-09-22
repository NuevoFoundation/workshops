---
title: "Actividad 2 - Dibujando las Paredes del Gran Laberinto"
date: 2025-10-13T10:30:00-04:00
weight: 2
draft: false
---

¡Nuvo y Nuvi están listos para comenzar su aventura! 🐢✨  
Pero antes de que puedan explorar, necesitan un **laberinto** — lleno de giros y vueltas.  
En esta actividad, ayudaremos a Nuvo a dibujar las **paredes** del laberinto usando Python Turtle.

---

### Paso 1: Importa tus ayudantes y crea un dibujante de laberintos 🧰

Usaremos nuevamente nuestro módulo especial de ayuda para posicionar fácilmente la tortuga y mantener nuestro código ordenado.

```python
import turtle
import turtlehelper as th
```

Ahora, creemos una nueva tortuga que dibujará las paredes del laberinto.

```python
# Crear una tortuga para dibujar el laberinto
maze_drawer = th.create_turtle_object("black", 3, "arrow", 0)
```

{{% notice info %}}

🔍 Explicación

1. "black" → color de las líneas del laberinto  
2. 3 → grosor del lápiz  
3. "arrow" → forma que indica hacia dónde apunta la tortuga  
4. 0 → velocidad de dibujo más rápida (0 es instantáneo)

{{% /notice %}}

### Paso 2: Escoge el punto de inicio 🎯

Antes de dibujar, movemos nuestra tortuga al lugar correcto.

```python
th.set_cursor(maze_drawer, 0, 100)
```

{{% notice info %}}

🔍 Explicación

1. Esto le dice a la tortuga que:  
2. levante el lápiz (para que no dibuje en el camino)  
3. se mueva a (x = 0, y = 100)  
4. luego baje el lápiz nuevamente  

{{% /notice %}}

### Paso 3: Comienza a dibujar la pared exterior 🧱

¡Ahora el laberinto empieza a tomar forma!

```python
maze_drawer.forward(150)
maze_drawer.right(90)
maze_drawer.forward(250)
maze_drawer.right(90)
maze_drawer.forward(300)
maze_drawer.right(90)
maze_drawer.forward(250)
maze_drawer.right(90)
maze_drawer.forward(110)
maze_drawer.right(90)
maze_drawer.forward(30)
```

{{% notice info %}}

🧩 ¿Qué está pasando aquí?

1. forward(150) → avanza 150 pasos  
2. right(90) → gira a la derecha 90 grados (como una esquina de un cuadrado)  
3. Cada par de “avanzar + girar” dibuja un nuevo lado del laberinto.

{{% /notice %}}

### Paso 5: Oculta al constructor y admira el laberinto 👀

```python
maze_drawer.hideturtle()
```

Ahora puedes ver el contorno del laberinto claramente sin la flecha estorbando.

#### 🌟 Reto para Ti

Cambia el color del laberinto a algo divertido como "brown" o "darkgreen".  

Haz tus paredes más gruesas o más delgadas ajustando el grosor del lápiz.

Intenta crear caminos adicionales — ¿puedes hacer un atajo secreto para Nuvi?

<p style="text-align: center;"><iframe src="https://codebunga.com/embed/8sanyhiu" title="Actividad 2 - Dibujando las Paredes del Gran Laberinto - Editor Codebunga" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></p>

¡Increíble trabajo, Maestro del Laberinto! 🏆  
Acabas de crear el escenario para la aventura.

En la Actividad 3, construirás el laberinto interior y harás que Nuvi se oculte en él. ¡Esto prepara el escenario para que Nuvo comience a explorar y busque a Nuvi!  