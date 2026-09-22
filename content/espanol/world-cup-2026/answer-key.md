---
title: "Copa Mundial 2026 - Clave de Respuestas"
date: 2026-09-15
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Estas son soluciones de muestra. Se debe animar a los estudiantes para que inventen sus propios detalles del equipo y mensajes de los comentaristas.
{{% /notice %}}

### Actividad 1: Crear la Hoja del Equipo

**Desafío:** Personalizar el nombre del equipo, el oponente, el capitán y el color de la camiseta.

```python
team_name = "Lightning FC"
opponent_name = "Mountain Stars"
captain_name = "Jordan"
jersey_color = "green"

print("Final del campeonato")
print("Equipo local:", team_name)
print("Equipo visitante:", opponent_name)
print("Capitán:", captain_name)
print("Color de la camiseta:", jersey_color)
```

Salida esperada:

```text
Final del campeonato
Equipo local: Lightning FC
Equipo visitante: Mountain Stars
Capitán: Jordan
Color de la camiseta: green
```

### Actividad 2: Informar sobre el Partido

**Desafío:** Agregar un anuncio de medio tiempo y el puntaje actual usando f-strings.

```python
team_name = "Lightning FC"
opponent_name = "Mountain Stars"
captain_name = "Jordan"
jersey_color = "green"

team_goals = 2
opponent_goals = 1

print(f"¡Bienvenidos a la final: {team_name} contra {opponent_name}!")
print(f"{captain_name} lidera a {team_name} hacia el campo.")
print(f"{team_name} está usando camisetas de color {jersey_color}.")
print(f"Puntaje: {team_name} {team_goals} - {opponent_goals} {opponent_name}")
print(f"¡Medio tiempo! {team_name} y {opponent_name} se dirigen a los vestuarios.")
print(f"El puntaje al medio tiempo es {team_goals} a {opponent_goals}.")
```

Los estudiantes pueden usar frases diferentes siempre que ambas nuevas líneas sean f-strings e incluyan las variables solicitadas.

### Actividad 3: Decidir el Campeón

**Desafío:** Personalizar y probar ambos finales del campeonato.

```python
team_name = "Lightning FC"
opponent_name = "Mountain Stars"
captain_name = "Jordan"
jersey_color = "green"

team_goals = 3
opponent_goals = 2

print(f"¡Bienvenidos a la final: {team_name} contra {opponent_name}!")
print(f"{captain_name} lidera a {team_name} hacia el campo.")
print(f"Puntaje: {team_name} {team_goals} - {opponent_goals} {opponent_name")

if team_goals > opponent_goals:
    print(f"¡{team_name} gana! Confeti llena el estadio.")
    print(f"¡El capitán {captain_name} levanta la copa junto con todo el equipo!")
else:
    print(f"{opponent_name} gana el campeonato.")
    print(f"{team_name} jugó con valentía y regresará aún más fuerte.")
```

Prueba el camino victorioso con:

```python
team_goals = 3
opponent_goals = 2
```

Prueba el otro camino con:

```python
team_goals = 1
opponent_goals = 2
```

El taller utiliza intencionalmente dos caminos finales. Se puede discutir un puntaje empatado como una extensión después de que los estudiantes estén cómodos con `if`/`else`.