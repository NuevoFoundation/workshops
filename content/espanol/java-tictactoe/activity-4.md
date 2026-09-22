```markdown
---
title: "4. Verifica el ganador"
description: "escribe un método para verificar al ganador con un tablero de entrada"
date: 2021-10-14T00:00:00Z
prereq: "Configura el Tablero, Lee y Procesa la Entrada, Actualiza el Tablero del Juego"
difficulties: ["intermedio"]
weight: 5
---

## Mostrando un Ganador

Escribe un método `getWinner(String[] curBoard)` que devuelva al ganador en un `String` con un `array` como entrada del tablero actual.

- Si el jugador gana, devuelve `"¡Felicidades! \nGanaste el Juego :)"`.
- Si la computadora gana, devuelve `"¡Juego Terminado! \nPerdiste el Juego :("`.
- Si hay un empate, devuelve `"¡Es un EMPATE! Intenta de nuevo"`.
- Si aún no hay un ganador, devuelve `""`.

Hay varias maneras de escribir este método.

¡Inténtalo en el siguiente Replit primero; te dirá si tu método está correctamente escrito!
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaTicTacToegetWinner" target="_blank">Lanzar Replit</a>

{{% notice note %}}
#### Ideas/Pistas para escribir el método `getWinner()`

- Concatenar `Strings` en las 3 posiciones que constituyen una fila horizontal, vertical o diagonal.
- Usa `equals()` para verificar si cada una de las cadenas concatenadas es `"XXX"` o `"OOO"` para determinar un ganador. (Incluso puedes crear otro método que compruebe si un `String` de entrada es `"XXX"` o `"OOO"`)
- Si todas las posiciones en el array están llenas (un `for loop` puede ser útil) y no hay un ganador, el juego termina en empate.
{{% /notice %}}

## Llamando al Método del Ganador

En `main()`, llama al método `getWinner()` después de la línea de código donde colocas el movimiento del jugador, `"X"`.

Verifica si el juego debe continuar (cuando no hay un ganador o un empate).

Si hay un ganador o un empate, imprime el tablero final y el resultado del juego. ¡Y añade la línea de código `break;`, que indica al programa que salga del bucle `while`!

## Repite el Paso Anterior

En `main()`, repite el código del paso anterior (verificar ganador e imprimir el resultado si es necesario) después de colocar el movimiento de la computadora, `"O"`.

## Cierra el Objeto Scanner

Fuera del bucle while, añade el código `sc.close()` para cerrar el objeto `Scanner` y evitar que lea nuevas entradas. 

¡Es una buena práctica cerrar el objeto `Scanner` si no obtendremos más entradas después de salir del bucle `while`!

## ¡Todo Listo :)!

¡Ahora deberías tener un juego de TicTacToe funcional! ¡Deberías sentirte muy orgulloso/a de haber completado este taller! ¡Buen trabajo 👍!

##### Como resumen, esta debería ser la estructura de tu código:
<img src="../images/code.png" height="500" alt="Tic Tac Toe: Tu Proyecto en Java. void main(String args[]) que lee las entradas del jugador, procesa las entradas y realiza cada ronda del juego o imprime al ganador del juego. void printBoard(String[] curBoard) es un método para imprimir el tablero del juego. int getComputerMove(String[] curBoard) devuelve aleatoriamente un movimiento disponible para la computadora. String getWinner(String[] curBoard) devuelve al ganador del juego/EMAPATE o '' si el juego debe continuar."/>
```