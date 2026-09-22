---
title: "Actividad 2: Reporta el Partido"
date: 2026-09-15
draft: false
weight: 4
---

## Convierte datos en comentarios

¡El partido ha comenzado! Tu programa ya recuerda la información de los equipos. Ahora combinará variables con texto para crear anuncios del partido.

Una **f-string** es una cadena formateada. Coloca la letra `f` antes de la comilla de apertura y luego pon una variable dentro de llaves `{ }`. Python reemplaza las llaves y el nombre de la variable con el valor almacenado.

```python
print(f"¡{captain_name} lidera a {team_name} hacia el campo de juego!")
```

## Código inicial

Mantén tus valores personalizados de la Actividad 1. Agrega variables de marcador y anuncios formateados:

```python
team_name = "Nuvi United"
opponent_name = "Comet City"
captain_name = "Maya"
jersey_color = "azul"

team_goals = 2
opponent_goals = 1

print(f"¡Bienvenidos a la final: {team_name} vs. {opponent_name}!")
print(f"{captain_name} lidera a {team_name} hacia el campo de juego.")
print(f"{team_name} lleva uniforme {jersey_color}.")
print(f"Marcador: {team_name} {team_goals} - {opponent_goals} {opponent_name}")
```

Ejecuta el programa. Cada par de llaves debe ser reemplazado por un nombre, color o número.

Los números no necesitan comillas:

```python
team_goals = 2
```

Si escribiste `"2"` en su lugar, Python lo trataría como texto en lugar de un número.

## Desafío: escribe una actualización de medio tiempo

Agrega dos nuevas líneas `print()`:

1. Anuncia que el primer tiempo ha terminado e incluye los nombres de ambos equipos.
2. Informa al público el marcador actual e incluye ambas variables de marcador.

Tus palabras exactas pueden ser diferentes. Haz que el anuncio suene como un verdadero comentarista, luego cambia uno de los marcadores y ejecuta el programa nuevamente.

{{% notice tip %}}
Comienza cada línea con `print(f"` y coloca cada variable dentro de llaves, como `{team_goals}`.
{{% /notice %}}