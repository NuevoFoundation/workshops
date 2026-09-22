---
title: "5. (Opcional) Movimiento de la IA"
description: "Usar el algoritmo Minimax para seleccionar el movimiento del ordenador"
date: 2021-10-14T00:00:00Z
weight: 6
prereq: "¡Configura el Tablero!, Leer y Procesar la Entrada, Actualizar el Tablero del Juego, Comprobar el Ganador"
difficulties: ["avanzado"]
---

### Hagamos que el ordenador piense

Anteriormente, usamos un objeto `Random` para generar de manera aleatoria un movimiento para el ordenador. Como resultado, la competitividad del ordenador era bastante baja.

En este ejercicio, queremos aumentar la dificultad del juego tomando decisiones óptimas para el ordenador.

Lo haremos añadiendo inteligencia artificial a nuestro programa mediante el uso del algoritmo **Minimax** (un procedimiento bien definido que permite a las computadoras resolver problemas).

### Algoritmo Minimax

Minimax es un algoritmo que se utiliza en juegos de dos jugadores para tomar decisiones óptimas para un jugador.

- Los dos jugadores se etiquetan como <b>maximizador</b> y <b>minimizador</b>, respectivamente. Mientras el maximizador maximiza sus posibilidades de ganar, el minimizador intenta minimizar sus pérdidas.
- El algoritmo examina todos los posibles estados futuros del juego basándose en el tablero actual asumiendo que tanto el maximizador como el minimizador elegirán el movimiento que más los beneficie.
- En nuestro caso, seleccionamos al ordenador como el maximizador y al jugador como el minimizador. ¡Intentaremos tomar decisiones óptimas para el ordenador maximizando sus posibilidades de ganar!

### ¿Cómo funcionará el Algoritmo Minimax en el Tres en Raya?

- Examinamos todos los movimientos posibles de `"X"` y `"O"` y asignamos un puntaje al tablero de juego si hay un ganador o un empate.
- Dado que queremos que el ordenador gane con la menor cantidad de pasos posible, diseñamos el sistema de puntuación para los tableros de juego de la siguiente manera:

- Si el ordenador gana, calculamos el puntaje con la fórmula `1 * (número de espacios disponibles en el tablero + 1)`.
- Si el jugador gana, calculamos el puntaje con la fórmula `-1 * (número de espacios disponibles en el tablero + 1)`.
- Si hay un empate, el puntaje es `0`.
- Observa que al dar mayores puntajes a los estados del juego donde el ordenador puede ganar con menos movimientos, estamos enseñando a nuestro código a elegir el movimiento óptimo para el ordenador.

Veamos un ejemplo a continuación:

<img src="../images/minimax.png" height="500" alt="ejemplo de opciones posibles para ganar al tres en raya según lo descrito en el texto a continuación." />

1. En la primera fila, consideramos los 3 posibles movimientos para el ordenador `"O"`, que es el maximizador.
2. Examinamos todos los estados del juego hasta que todos los movimientos terminen en una victoria del ordenador, una victoria del jugador o un empate. Luego les asignamos el puntaje correspondiente.

    Por ejemplo, en el segundo tablero de la fila 1, el ordenador gana colocando `"O"` en la posición 8. Ese estado obtendrá un puntaje de `1 * (número de espacios disponibles en el tablero + 1)` = `1 * (2+1)` = `3`.

3. En los estados del juego que no tienen un ganador ni un empate, elegimos el puntaje más bajo en rondas de minimización (cuando `"X"` realiza un movimiento) y el puntaje más alto en rondas de maximización (cuando `"O"` realiza un movimiento).
4. Si sigues las rondas de maximización/minimización en la imagen anterior, notarás que el movimiento óptimo para el ordenador es colocar `"O"` en la posición 8, permitiendo al ordenador ganar en 1 movimiento desde el tablero de inicio.

### Estructura del Código

En la actividad-3, escribiste el método `int getComputerMove(String[] curBoard)` para generar aleatoriamente una posición para el ordenador. Vamos a escribir otro método llamado `getComputerMoveAI(String[] curBoard)` que devuelva el movimiento óptimo para el ordenador llamando al método `int minimax(String[] curBoard, boolean isMaximizing)`.

```java
int getComputerMove(String[] curBoard){
    // 1. este método llama a minimax() en todos los posibles movimientos que el ordenador puede elegir
    // 2. toma el máximo de todos ellos
    // 3. devuelve el movimiento óptimo
}
int minimax(String[] curBoard, boolean isMaximizing){
    // 1. En la ronda de maximización, llama a minimax() en todos los posibles movimientos para el ordenador, "O", y devuelve el puntaje máximo
    // 2. En la ronda de minimización, llama a minimax() en todos los posibles movimientos para el jugador, "X", y devuelve el puntaje mínimo
}
```

{{% notice note %}}

- El método `minimax()` es una <b>función recursiva</b>, lo que significa que la función se llama a sí misma dentro de su propia implementación.
- En nuestro método, `minimax()` se llama a sí mismo con diferentes tableros posibles al colocar `"X"` o `"O"` en cada espacio disponible. Y, el método elige el puntaje máximo o mínimo dependiendo de si es una ronda de maximización.

{{% /notice %}}

### Escribe el Método `getComputerMoveAI()`

1. Para cada espacio disponible en el tablero de juego, coloca `"O"` en ese espacio y obtén el puntaje de ese tablero llamando a `minimax()`.

{{% notice hint %}}

- Nota que deberías pasar `false` como segundo argumento ya que sería el turno del minimizador.
- Deberías cambiar ese espacio de vuelta a `" "` después de obtener el puntaje, para mantener el estado original del tablero durante la próxima iteración.

{{% /notice %}}

2. Registra el puntaje más alto y su posición correspondiente en cada iteración. Devuelve la posición con el puntaje más alto.

{{% notice hint %}}

- Ten una variable llamada `bestScore` que almacene el puntaje más alto actual y que tenga un valor inicial de `Integer.MIN_VALUE` (el valor mínimo de un entero).
- Esta es una forma útil de encontrar el valor máximo en una estructura de datos. 
Por ejemplo:

```java
public int getLargestNum() {
    // el siguiente código encuentra el valor máximo en el array "nums"
    int[] nums = {3, 5, -2, 10};
    int largestNum = Integer.MIN_VALUE;
    for(int i = 0; i < nums.length; i++){
        if(nums[i] > largestNum){
            largestNum = nums[i];
        }
    }
    return largestNum;
}
```

{{% /notice %}}

### Escribe el Método `minimax()`

Como discutimos anteriormente,