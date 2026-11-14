---
title: "Actividad 11 - Una espiral para el jardín de Alex"
date: 2026-11-14
weight: 14
draft: false
---

Ayudaste a Alex a construir un panal y una flor de colores. ¡Buen trabajo! Ahora vamos a divertirnos con nuestra tortuga y crear una espiral para el jardín de Alex.

Este es un **desafío opcional**. ¡Prueba la espiral de abajo o usa el editor para dibujar tus propias figuras y diseños!

## 1. Dibuja una espiral que crece

En las figuras anteriores, todas las líneas tenían la misma longitud. Una espiral da vueltas alrededor de un centro y crece hacia afuera. Vamos a hacer que cada línea nueva sea un poco más larga que la anterior.

Usa este nuevo editor para conservar tu panal y tu flor en la actividad anterior. Reemplaza todo el código de este editor con el siguiente programa y presiona **Run** para ejecutarlo.

```python
import turtle

turtle.shape("turtle")
turtle.speed(0)
turtle.color("blue")

for i in range(80):
  turtle.forward(i * 2)
  turtle.right(61)
```

<iframe title="Editor interactivo de Python Turtle para la espiral del jardín de Alex" src="https://codebunga.com/embed/wm8xfj5y" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

¿No puedes ver el editor? <a href="https://codebunga.com/embed/wm8xfj5y" target="_blank" rel="noopener noreferrer">Abre el editor de Turtle en una pestaña nueva</a>.

Esto es lo que hace crecer la espiral:

- `range(80)` le da a `i` los valores de `0` a `79`, uno a la vez.
- `*` significa multiplicación. `i * 2` hace que la tortuga avance `0`, `2`, `4`, `6` píxeles, y así sucesivamente. El primer movimiento tiene una longitud de `0`, así que no dibuja ninguna línea.
- `turtle.right(61)` gira la tortuga 61 grados a la derecha después de cada movimiento.
- `turtle.speed(0)` usa la velocidad más rápida de Turtle. A diferencia de las velocidades de `1` a `10`, `0` desactiva la animación del movimiento.

## 2. Dale tu propio estilo

Antes de cada experimento, intenta predecir qué cambiará. Cambia **una sola cosa a la vez**, presiona **Run** y compara el resultado con la espiral inicial.

| Prueba este cambio | En qué fijarte |
|---|---|
| Cambia `range(80)` por `range(40)` | ¿La espiral crece tanto como antes? |
| Cambia `i * 2` por `i * 1` | ¿Cómo cambia el tamaño? |
| Cambia `turtle.right(61)` por `turtle.right(60)` y luego prueba `turtle.right(90)` | ¿Cómo cambia la figura? |

{{% notice tip %}}
Vuelve al código inicial antes de probar otro experimento. Conserva los espacios al principio de las dos líneas dentro del ciclo. Si tu dibujo se sale del lienzo, prueba con menos repeticiones o un número más pequeño después de `*`.
{{% /notice %}}

## 3. Desafío extra: repite tus colores favoritos

¿Quieres agregar colores? Primero, vuelve al código inicial. Usaremos una **lista**, que guarda varios elementos en orden. La lista de abajo se llama `colors`. Cada nombre de color es una cadena entre comillas, y las comas separan los elementos dentro de los corchetes `[]`.

Reemplaza todo el ciclo `for` con este código. Conserva las líneas de preparación que están arriba, incluida `import turtle`.

```python
colors = ["red", "orange", "blue", "green", "cyan", "gold"]

for i in range(80):
  turtle.color(colors[i % len(colors)])
  turtle.forward(i * 2)
  turtle.right(61)
```

Presiona **Run**. ¡Los colores se repiten en el mismo orden mientras la tortuga dibuja!

{{% expand "¿Cómo elige la tortuga un color?" %}}
Cada elemento de una lista tiene una posición llamada **índice**. Python empieza a contar las posiciones desde `0`, así que `colors[0]` es `"red"` y `colors[1]` es `"orange"`.

`len(colors)` cuenta los elementos de la lista. Aquí hay `6`.

El símbolo `%` da el **residuo** de una división, es decir, lo que sobra. Por ejemplo, `7 % 6` es `1`, porque 6 cabe una vez en 7 y sobra 1. A medida que `i` aumenta, `i % 6` pasa por `0`, `1`, `2`, `3`, `4`, `5` y vuelve a empezar en `0`.

`colors[i % len(colors)]` usa ese índice que se repite para elegir un color. Usar `len(colors)` en vez de un número fijo te permite agregar o quitar colores sin cambiar el ciclo.

El primer color se elige cuando `i` es `0`, pero ese movimiento tiene una longitud de `0`. La primera línea visible usa el segundo color.
{{% /expand %}}

**Tu desafío:** Elige tus propios colores y crea dos espirales diferentes para el jardín de Alex. Explica qué números cambiaste y cómo afectaron tu dibujo. ¡También puedes crear un diseño completamente diferente!

{{% notice tip %}}
Conserva al menos un color en la lista, con comillas alrededor de cada nombre y comas entre los nombres. Mantén los nombres de los colores en inglés para que Turtle los reconozca. Prueba `["blue", "green", "gold"]` para un patrón de colores más corto. Cambia el ángulo o el número después de `*` para que tu segunda espiral sea diferente.
{{% /notice %}}

## ¡Ayuda, estoy atascado!

Consulta la [clave de respuestas de la actividad 11](../answer-key/#actividad-11) para ver ejemplos completos y explicaciones.
