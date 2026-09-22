---
title: "1. ¡Configura el Tablero!"
description: "Usando declaraciones print para mostrar las reglas del juego y el tablero"
date: 2021-10-14T00:00:00Z
weight: 2
---

En esta actividad, tendremos un programa que imprime el tablero del juego y las indicaciones del juego, como la salida que se muestra a continuación:

```
<<<~  Tres en Raya  ~>>>
* Escoge un número del 1 al 9 para realizar tu movimiento
* Jugador: 'X' Computadora: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Introduce tu movimiento (1-9): 2
 O | X |   
---+---+---
   |   |   
---+---+---
   |   |   
Introduce tu movimiento (1-9): 
```

## La Clase Principal y el Método Principal

Observa que en el código inicial, tenemos la clase `Main` y el método `main()`. El método `main()` es donde comienza el programa cada vez que hacemos clic en el botón `Run`.

```java
public class Main {
  public static void main(String[] args) {
  }
}
```

## Declaraciones Print

En `main()`, escribe declaración(es) print para imprimir el mensaje de bienvenida y las reglas del juego.

```
<<<~  Tres en Raya  ~>>>
* Escoge un número del 1 al 9 para realizar tu movimiento
* Jugador: 'X' Computadora: 'O'
```

## Variables y Arreglos

En este juego, ten en cuenta que tendremos que hacer un seguimiento de los símbolos actualmente ubicados en cada una de las 9 posiciones del tablero.

Por lo tanto, necesitaremos guardar 9 piezas de datos en el programa. Usemos un `array` (una estructura de datos) de tamaño 9 para almacenar estos.

Como se indica en las reglas, en el tablero de juego, `"X"` es el movimiento del jugador, `"O"` es el movimiento de la computadora y `" "` es un espacio disponible.

Para hacer esto, vamos a declarar un `array` llamado `board` con el valor `" "` (un String) en las 9 posiciones (es decir, `{" ", " ", " ", " ", " ", " ", " ", " ", " "}`).

## Mostrando el Tablero

Ahora que tenemos la variable `board` almacenando los símbolos actuales del tablero de juego, vamos a intentar imprimir un tablero vacío usando declaraciones print (como se muestra a continuación).

Ten en cuenta que cada tablero de juego está compuesto por 5 líneas, por lo que es razonable incluir 5 declaraciones print para imprimir cada línea del tablero.

Cada uno de los 9 bloques es un `String` de longitud 3, donde el carácter central es el símbolo actual almacenado en `board` en la posición correspondiente.

Después de completar este paso, deberías tener un programa que produzca la siguiente salida:

```
<<<~  Tres en Raya  ~>>>
* Escoge un número del 1 al 9 para realizar tu movimiento
* Jugador: 'X' Computadora: 'O'

   |   |  
---+---+---
   |   |  
---+---+---
   |   | 
```

## Métodos

Como sabemos que necesitaremos imprimir el tablero del juego actual varias veces durante el juego, será una buena idea mover el bloque de código que escribas en el paso 4 a un método.

Este método debería tomar como entrada un `String[]` y debe imprimir el tablero actual. Ten en cuenta que este método debe estar escrito fuera de `main()`.

Escribamos un método con el siguiente encabezado:

```java
public static void printBoard(String[] curBoard);
```

## Llamando a Métodos

En `main()`, llama al método `printBoard()` para que imprima el tablero inicial con las posiciones etiquetadas. Puedes hacerlo creando otro `array de strings` con el contenido `"1", "2", ..., "9"`.

Incluye una línea de código que imprima `Introduce tu movimiento (1-9): `

```
<<<~  Tres en Raya  ~>>>
* Escoge un número del 1 al 9 para realizar tu movimiento
* Jugador: 'X' Computadora: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Introduce tu movimiento (1-9): 
```

## Ejecuta el Programa

Ejecuta tu programa; si muestra el texto anterior, ¡ya estás listo para continuar! 👍