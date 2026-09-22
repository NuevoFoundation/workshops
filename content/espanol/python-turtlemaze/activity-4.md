```markdown
---
title: "Actividad 4 - Prueba de manejo de Nuvo a través del laberinto"
date: 2025-10-13T11:00:00-04:00
weight: 4
draft: false
---

¡Nuvo está emocionado! 🐢  
Finalmente tiene un laberinto para explorar — pero antes de enviarlo a buscar a Nuvi, ayudémoslo a practicar cómo moverse de manera segura.  

En esta actividad, **manejarás manualmente a Nuvo** a través de algunos giros utilizando comandos simples de Turtle.  
¡Es como controlar a tu amigo tortuga con código! 🎮  

---

### Paso 1: Importa tus módulos y establece la escena 🎨

Vamos a reutilizar nuestros archivos de laberinto y ayudantes anteriores para que Nuvo pueda moverse en su laberinto.

```python
import turtle
import turtlehelper as th
import maze
```

Luego dibuja el laberinto y crea a Nuvo.

```python
# Dibujar las paredes del laberinto
maze.draw_maze()

# Crear a Nuvo (nuestro explorador)
nuvo = th.create_turtle_object("purple", 4, "turtle", 3)
th.set_cursor(nuvo, -20, 120)   # Comienza cerca de la entrada del laberinto
```

### Paso 1: Mueve a Nuvo hacia adelante 🐾

Intenta mover a Nuvo un poco hacia adelante dentro del laberinto.

```python
nuvo.forward(50)
```

Cada vez que llamas a forward(50), Nuvo avanza 50 pasos.  
Puedes experimentar con diferentes números: ¡los pasos más pequeños son más seguros al navegar por espacios estrechos!

### Paso 2: Aprende a girar a la izquierda y a la derecha 🔄

Para hacer girar a Nuvo, usa:

```python
nuvo.left(90)   # girar a la izquierda
nuvo.right(90)  # girar a la derecha
```

Cada comando hace que Nuvo gire el número de grados que le indiques: 90 grados significa un giro perfecto en las esquinas.

Prueba esta pequeña ruta de prueba:

```python
nuvo.forward(50)
nuvo.left(90)
nuvo.forward(50)
nuvo.right(90)
nuvo.forward(50)
```

¿Nuvo se mueve como lo esperabas?  
Si no, ajusta los ángulos — por ejemplo, usa 45 o 120 para hacer giros diagonales o triangulares.

### Paso 3: Combina movimientos en un camino simple 🚶‍♂️

Guía a Nuvo alrededor de una parte del laberinto.  
Puedes escribir una ruta pequeña para él:

```python
# Una prueba de manejo personalizada para Nuvo
nuvo.forward(100)
nuvo.right(90)
nuvo.forward(80)
nuvo.left(90)
nuvo.forward(60)
```

Cada paso es como una instrucción de manejo:

1. “Avanza esta distancia”
2. “Gira en esta dirección”
3. “Ahora sigue moviéndote”

### Paso 4: Esconde o reinicia a Nuvo si se atasca 🔁

Si Nuvo choca con una pared o se sale del camino — ¡no hay problema!  
Puedes levantarlo y empezar de nuevo.

```python
th.set_cursor(nuvo, 10, -135)
```

🌟 Desafío para ti

🧩 ¡Intenta crear tu propia mini ruta de aventura!

1. ¿Puedes hacer que Nuvo trace un cuadrado dentro del laberinto?
2. ¿Qué pasa si giras 45 grados en vez de 90?
3. ¿Puedes guiar a Nuvo desde la esquina inferior izquierda hasta la superior derecha?

<p style="text-align: center;"> <iframe src="https://codebunga.com/embed/yuftctjd" title="Actividad 4 - Prueba de manejo de Nuvo a través del laberinto - Editor Codebunga" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe> </p>

¡Bravo, Conductor de Tortugas! 🚗💨  
Acabas de aprender a controlar la dirección, la distancia y los giros — todas las herramientas que necesitas para navegar en cualquier laberinto.

En la próxima actividad, ¡enseñaremos a Nuvo cómo encontrar a Nuvi!
```