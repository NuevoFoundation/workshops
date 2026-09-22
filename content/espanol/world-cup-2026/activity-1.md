---
title: "Actividad 1: Crear la Hoja del Equipo"
date: 2026-09-16
draft: false
weight: 3
---

## Inicio: conoce a los finalistas

Ya has visto algo de Python, así que considera esta actividad como un repaso rápido. Antes de que comience un partido, el comentarista necesita los nombres de los equipos y del capitán. Tu programa almacenará esos detalles en **variables**.

Repasar las variables ahora proporcionará información que se puede reutilizar en las siguientes actividades. En la Actividad 2, colocarás estas variables dentro de mensajes formateados sobre el partido y agregarás variables para los puntajes. En la Actividad 3, una decisión `if`/`else` comparará esos puntajes para anunciar al ganador.

Como recordatorio, una **variable** es un lugar nombrado donde un programa almacena información. El valor a la derecha del `=` se guarda en la variable nombrada a la izquierda.

```python
team_name = "Nuvi United"
opponent_name = "Comet City"
captain_name = "Maya"
jersey_color = "blue"
```

Los valores de texto están rodeados por comillas. Python llama a un fragmento de texto una **cadena (string)**.

## Código inicial

Reemplaza el contenido de `world_cup_2026.py` con este programa funcional:

```python
team_name = "Nuvi United"
opponent_name = "Comet City"
captain_name = "Maya"
jersey_color = "blue"

print("Final del Campeonato")
print("Equipo local:", team_name)
print("Equipo visitante:", opponent_name)
print("Capitán:", captain_name)
print("Color de camiseta:", jersey_color)
```

Ejecuta el archivo. Deberías ver:

```text
Final del Campeonato
Equipo local: Nuvi United
Equipo visitante: Comet City
Capitán: Maya
Color de camiseta: blue
```

La función `print()` muestra información. Una **función** es una instrucción nombrada que realiza una tarea.

## Reto: personaliza tu equipo

Cambia las cuatro variables para que el programa presente:

1. un nombre de equipo que tú inventes;
2. un nombre de oponente que tú inventes;
3. el capitán de tu elección; y
4. el color de la camiseta de tu equipo.

Ejecuta el programa y verifica que aparezcan los cuatro nuevos valores. Conserva estas variables porque las siguientes actividades se basan en ellas.

{{% notice tip %}}
Cambia solo el texto entre las comillas. Mantén cada nombre de variable y el signo `=`.
{{% /notice %}}