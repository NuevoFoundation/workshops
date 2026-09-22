---
title: "Actividad 3: Decide el Campeón"
date: 2026-09-15
draft: false
weight: 5
---

## El silbato final

El partido ha terminado, pero el programa aún necesita decidir qué mensaje mostrar.

Una **decisión `if`/`else`** permite a un programa elegir entre dos caminos:

- `if` ejecuta su código indentado cuando una condición es verdadera.
- `else` ejecuta su código indentado cuando esa condición es falsa.

El símbolo `>` significa "es mayor que."

```python
if team_goals > opponent_goals:
    print("¡Ganamos!")
else:
    print("El oponente ganó.")
```

## Código inicial

Usa esta versión completa del programa del partido. Puedes mantener los detalles del equipo y los anuncios del medio tiempo que personalizaste anteriormente.

```python
team_name = "Nuvi United"
opponent_name = "Comet City"
captain_name = "Maya"
jersey_color = "azul"

team_goals = 3
opponent_goals = 2

print(f"¡Bienvenidos a la final: {team_name} vs. {opponent_name}!")
print(f"{captain_name} lidera a {team_name} al campo.")
print(f"Marcador: {team_name} {team_goals} - {opponent_goals} {opponent_name}")

if team_goals > opponent_goals:
    print(f"¡{team_name} gana el campeonato!")
    print(f"¡{captain_name} levanta la copa mientras la multitud celebra!")
else:
    print(f"{opponent_name} gana el campeonato.")
    print(f"{team_name} agradece a sus seguidores tras un gran torneo.")
```

Ejecuta el programa con `team_goals` mayor que `opponent_goals`. Luego intercambia los puntajes y ejecútalo nuevamente. Deberías ver un final diferente.

{{% notice warning %}}
Los cuatro espacios antes de cada `print()` indentado son importantes. Indican a Python qué instrucciones pertenecen a `if` y cuáles a `else`.
{{% /notice %}}

## Desafío: crea el final de tu campeonato

Personaliza ambos posibles finales:

1. En la ruta `if`, incluye el nombre de tu equipo, el capitán y una celebración de victoria.
2. En la ruta `else`, incluye el nombre del oponente y un mensaje alentador para tu equipo.
3. Prueba ambos caminos cambiando los puntajes.

Cuando ambos finales funcionen, tu programa del partido estará listo para el silbato final.

{{% notice tip %}}
Usa al menos una f-string en cada ruta. Tu equipo gana solo cuando `team_goals > opponent_goals` es verdadero.
{{% /notice %}}