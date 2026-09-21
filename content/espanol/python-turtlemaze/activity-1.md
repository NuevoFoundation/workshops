```markdown
---
title: "Actividad 1 - Conoce a Nuvo el Explorador"
date: 2025-10-12T12:00:00-04:00
weight: 1
draft: false
---

¡Bienvenido, joven explorador! 🐢✨ Hoy conocerás a **Nuvo**, una pequeña tortuga curiosa que ama las aventuras. Antes de que Nuvo pueda comenzar a explorar el prado y encontrar a Nuvi, necesitamos ayudarlo a **aparecer en la pantalla** usando el **módulo turtle** de Python.

<img src="../media/nuvo.png" alt="Nuvo la tortuga" width="25%" />

Esto es lo que haremos en esta actividad:

1. Importar la biblioteca turtle y nuestro módulo auxiliar.
2. Crear a Nuvo la tortuga.
3. Hacer que aparezca en la pantalla en una posición inicial.
4. Mantener la ventana abierta para verlo.

Antes de que Nuvo pueda explorar el prado y el laberinto, necesita algunas herramientas **útiles**. 🐢✨  
En Python podemos crear **funciones auxiliares** — pequeñas instrucciones que hacen que programar sea más fácil y rápido.  

Hoy aprenderemos **dos herramientas mágicas auxiliares** de `turtlehelper.py`:

1. **`create_turtle_object()`** — crea una nueva tortuga rápidamente.
2. **`set_cursor()`** — mueve una tortuga a cualquier posición en la pantalla.

---

### 🌟 Paso 1: La función `set_cursor()`

Esta función **mueve una tortuga a cualquier posición** en la pantalla.

```python
def set_cursor(t, x, y, isPenDown=True):
    t.penup()            # Levanta el lápiz para que no dibuje
    t.goto(x, y)         # Mueve la tortuga a (x, y)
    if isPenDown:        # Si es verdadero, baja el lápiz para dibujar
        t.pendown()
    return
```

{{% notice info %}}

🔍 Explicación

1. t.penup() – levanta el lápiz de la tortuga para que no dibuje una línea mientras se mueve.
2. t.goto(x, y) – mueve la tortuga a las coordenadas (x, y) en la pantalla. Las variables `x` y `y` en el método `t.goto()` son las coordenadas `x` y `y` de la tortuga. Queremos cambiar las coordenadas de la tortuga desde `(0, 0)`, que es el centro de la imagen, a un lugar un poco más alejado para que Nuvo pueda moverse por el laberinto y Nuvi pueda esconderse dentro del mismo.
3. if isPenDown: – verifica si queremos que la tortuga comience a dibujar de nuevo.
4. t.pendown() – baja el lápiz para que pueda dibujar.
5. return – termina la función (opcional, pero buena práctica).

{{% /notice %}}

### 🌟 Paso 2: La función create_turtle_object()

Esta función crea una nueva tortuga con configuraciones personalizadas como color, tamaño, forma y velocidad.

```python
def create_turtle_object(color_name=None, size=None, turtle_shape=None, speed=None):
    t = turtle.Turtle()       # Crea una nueva tortuga
    if color_name:
        t.color(color_name)   # Define el color del lápiz
    if size:
        t.pensize(size)       # Define el grosor del lápiz
    if turtle_shape:
        t.shape(turtle_shape) # Define la forma de la tortuga (flecha, tortuga, círculo, etc.)
    if speed:
        return t
    t.speed(speed)            # Define la velocidad de movimiento de la tortuga
    return t
```

{{% notice info %}}

🔍 Explicación

1. t = turtle.Turtle() – crea un nuevo objeto tortuga.
2. if color_name: – define el color del lápiz si se proporciona.
3. if size: – define qué tan gruesas serán las líneas.
4. if turtle_shape: – elige la apariencia de la tortuga.
5. if speed: – ajusta la velocidad de la tortuga.
6. return t – devuelve la tortuga para que podamos usarla en nuestro código.

{{% /notice %}}

### 🌟 Paso 3: Creemos un objeto de texto para Nuvo para mostrar mensajes

```python
# Crear el objeto de texto de Nuvo (para mensajes más adelante)
text = th.create_turtle_object("black", 4, "arrow")
text.hideturtle()  # Ocultar el ícono de la tortuga
th.set_cursor(text, 0, 160, False)
text.write("Bienvenido a la Historia de Nuvo y Nuvi", align="center", font=("Comic Sans MS", 14, "bold"))
th.set_cursor(text, 0, 140, False)
text.write("La Gran Aventura del Laberinto", align="center", font=("Comic Sans MS", 14, "bold"))
```

{{% notice info %}}

🔍 Explicación

1. text.hideturtle() – oculta la tortuga para que solo se vea el texto.
2. text.write() – muestra un mensaje en la pantalla.
3. set_cursor posiciona el texto en el lugar correcto.
4. align="center" – posiciona el texto en el centro de la ubicación de la tortuga. Otras opciones: "left" o "right".
5. font=("Comic Sans MS", 14, "bold") – controla el estilo de texto: "Comic Sans MS" → tipo de fuente, 14 → tamaño de la fuente y "bold" → peso de la fuente (también puedes usar "normal" o "italic").

{{% /notice %}}

{{% notice tip %}}
💡 Consejo de Nuvo:
Las funciones auxiliares son como darle a tu tortuga una mochila mágica: lleva todas las instrucciones para que tu código esté ordenado y fácil de entender.

Intenta cambiar el texto, tamaño de la fuente o alineación para ver cómo se ve.
{{% /notice %}}

### 🌟 Paso 4: Creando a Nuvo & Nuvi

¡Demos vida a nuestros héroes usando la función auxiliar que creamos anteriormente!

```python
# Crear a nuestros amigos tortuga
nuvo = th.create_turtle_object("green", 3, "turtle", 6)
nuvi = th.create_turtle_object("purple", 3, "turtle", 6)
```

{{% notice info %}}

🔍 Explicación

1. "green" y "purple" – elige sus colores.
2. 3 – grosor de línea (tamaño del lápiz).
3. "turtle" – les da una forma linda de tortuga.
4. 6 – ajusta cuán rápido se mueven (números más altos son más rápidos).

{{% /notice %}}

### 🌟