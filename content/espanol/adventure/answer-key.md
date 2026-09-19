```markdown
---
title: "Elige Tu Propia Aventura - Clave de Respuestas"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este taller es creativo — ¡la historia de cada estudiante será diferente! Esta clave de respuestas muestra un ejemplo completo basado en la historia de Nuvi del taller, además de una plantilla de código que los maestros pueden usar como referencia al ayudar a los estudiantes a estructurar sus propias aventuras.
{{% /notice %}}

## Conceptos Clave Utilizados

| Concepto | Código en Python | Propósito en la Historia |
|---------|------------|---------------------|
| Imprimir texto | `print("text")` | Contar la historia al lector |
| Obtener entrada del usuario | `input("question")` | Permitir que el lector tome decisiones |
| Almacenar en una variable | `choice = input(...)` | Recordar lo que el lector eligió |
| Tomar decisiones | `if` / `else` | Cambiar la historia según la elección |

## La Aventura Completa de Nuvi

Este es un ejemplo funcional basado en la historia de Nuvi del taller:

```python
# El Juego de Elige tu Propia Aventura de Nuvi

print("=" * 40)
print("¡La Aventura de Nuvi!")
print("=" * 40)
print()
print("Nuvi acaba de terminar la práctica de robótica en la escuela.")
print("¡Es hora de ir a casa!")
print()

# Elección 1: Cómo llegar a casa
choice1 = input("¿Debería Nuvi caminar o ir en bicicleta a casa? Escribe 'walk' o 'bike': ")

if choice1 == "walk":
    print()
    print("Nuvi decide caminar a casa.")
    print("En el camino, ¡Nuvi encuentra un lindo cachorro!")
    print("Nuvi acaricia al cachorro y continúa caminando.")
    print("Nuvi llega a casa sintiéndose feliz.")
elif choice1 == "bike":
    print()
    print("Nuvi se sube a la bicicleta y pedalea a casa.")
    print("¡El viento se siente genial! Nuvi pedalea muy rápido.")
    print("¡Nuvi llega a casa en tiempo récord!")
else:
    print()
    print("Nuvi no pudo decidir, así que simplemente caminó a casa.")

print()
print("¡Nuvi finalmente está en casa! Algunos amigos están afuera.")
print()

# Elección 2: Qué hacer con los amigos
choice2 = input("¿Debería Nuvi jugar fútbol o ir a nadar? Escribe 'soccer' o 'swim': ")

if choice2 == "soccer":
    print()
    print("¡Nuvi y sus amigos juegan fútbol en el parque!")
    print("¡Nuvi marca el gol de la victoria!")
    print("¡Todos aplauden! ¡Qué gran día!")
elif choice2 == "swim":
    print()
    print("¡Nuvi y sus amigos van a la piscina!")
    print("Se salpican y se divierten mucho.")
    print("¡Nuvi hace una bomba de agua! ¡CHAPUZÓN!")
else:
    print()
    print("Nuvi decide simplemente pasar el rato con sus amigos.")

print()
print("¡Qué día tan increíble! Fin.")
```

**Ejemplo de salida (si el usuario elige "walk" y luego "soccer"):**
```
========================================
¡La Aventura de Nuvi!
========================================

Nuvi acaba de terminar la práctica de robótica en la escuela.
¡Es hora de ir a casa!

¿Debería Nuvi caminar o ir en bicicleta a casa? Escribe 'walk' o 'bike': walk

Nuvi decide caminar a casa.
En el camino, ¡Nuvi encuentra un lindo cachorro!
Nuvi acaricia al cachorro y continúa caminando.
Nuvi llega a casa sintiéndose feliz.

¡Nuvi finalmente está en casa! Algunos amigos están afuera.

¿Debería Nuvi jugar fútbol o ir a nadar? Escribe 'soccer' o 'swim': soccer

¡Nuvi y sus amigos juegan fútbol en el parque!
¡Nuvi marca el gol de la victoria!
¡Todos aplauden! ¡Qué gran día!

¡Qué día tan increíble! Fin.
```

## Plantilla de Código para Estudiantes

Los estudiantes pueden usar esta plantilla como punto de partida para sus propias historias:

```python
# Mi Juego de Elige tu Propia Aventura
# ¡Reemplaza el texto entre comillas con tu propia historia!

print("¡Bienvenido a mi juego de aventuras!")
print()

# Cuenta el comienzo de tu historia
print("Estás [describe el escenario].")
print("[Algo sucede para iniciar la aventura].")
print()

# Primera elección
choice1 = input("[Haz una pregunta al lector para que tome una decisión]: ")

if choice1 == "[opción 1]":
    print("[Qué sucede si eligen la opción 1]")
elif choice1 == "[opción 2]":
    print("[Qué sucede si eligen la opción 2]")
else:
    print("[Qué sucede si escriben algo inesperado]")

print()

# Segunda elección
choice2 = input("[Haz otra pregunta al lector para que tome una decisión]: ")

if choice2 == "[opción A]":
    print("[Qué sucede si eligen la opción A]")
elif choice2 == "[opción B]":
    print("[Qué sucede si eligen la opción B]")
else:
    print("[Qué sucede si escriben algo inesperado]")

print()
print("¡Fin!")
```

{{% notice tip %}}
**Problemas comunes en los estudiantes y sus soluciones:**

**"¡Mi declaración if nunca coincide!"**
- Asegúrate de que la comparación coincida exactamente con lo que escribe el usuario. `"Walk"` no es lo mismo que `"walk"`. Consejo: usa `.lower()` para manejar mayúsculas: `if choice1.lower() == "walk":`

**"¿Cómo añado más elecciones?"**
- Puedes anidar declaraciones if/else unas dentro de otras para crear rutas ramificadas, o agregar más opciones `elif`. Cada elección crea una nueva rama de la historia.

**"¿Cómo hago la historia más larga?"**
- Agrega más declaraciones `print()` entre elecciones para contar más de la historia. También puedes agregar una tercera o cuarta elección usando el mismo patrón de `input()` y `if/else`.
{{% /notice %}}

## Mapeo de la Historia al Código

| Elemento del Story Board | Concepto de Código |
|--------------------|-------------|
| Texto de la historia que ve el lector | `print("...")` |
| El lector toma una decisión | `choice = input("...")` |
| Diferentes caminos según la decisión | `if` / `elif` / `else` |
| Combinar texto con variables | `print("Hola " + name)` |
| Finales múltiples | Varias ramas `if/else` |
```