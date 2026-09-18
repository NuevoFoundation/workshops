---
title: "Actividad 5 - Usa declaraciones condicionales"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 15
---

## Actividad 5

Esta actividad está dividida en dos partes. Usa tu conocimiento de declaraciones `if`-`else` para completar las actividades. Como siempre, presiona **run** después de completar cada parte para verificar si hay errores.

### Actividad 5.1

Después de que el jugador adivine una letra y verifiquemos si la letra aparece en la palabra, necesitamos comprobar si se ha adivinado la palabra completa. Si toda la palabra ha sido identificada correctamente, deberíamos indicarle al ordenador que el jugador ha ganado el juego. Usa una declaración `if` para cambiar el valor de la variable `won` solo si el número de letras correctamente adivinadas es igual al número de letras en la palabra a adivinar.

### Actividad 5.2

Al final del juego, deberíamos informar al jugador si ganó o perdió el juego.

- Si el jugador ha ganado el juego, imprime en la consola `You won!`.
- De lo contrario, dile al jugador que perdió e imprime la respuesta correcta. Por ejemplo, si el jugador no pudo adivinar la respuesta correcta `"Hello"`, imprime `You lost! The answer was 'Hello'`.

Para probar ambas partes de la actividad, establece el banco de palabras para que solo contenga una palabra de dos letras (consulta la **Actividad 2** si olvidaste cómo hacerlo). Presiona **run** y adivina correctamente la palabra mientras juegas. Asegúrate de que se imprima `You won!`. **Run** nuevamente y verifica que se imprima `You lost!` cuando pierdas el juego.