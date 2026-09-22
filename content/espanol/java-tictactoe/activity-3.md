```markdown
---
title: "3. Actualizar el Tablero de Juego"
description: "aprende a generar un movimiento para la computadora y a actualizar el tablero"
date: 2021-10-14T00:00:00Z
prereq: "¡Configura el Tablero!, Leer y Procesar Entrada"
difficulties: ["intermedio"]
weight: 4
---

En el último ejercicio, tenemos un programa que muestra el tablero y solicita `Introduce tu movimiento (1-9):` al usuario con cada movimiento válido. Sin embargo, el tablero permanecía vacío (se muestra abajo). En este ejercicio, aprenderemos cómo actualizar el tablero y generar un movimiento aleatorio para la computadora.

```
<<<~  Tic  Tac  Toe  ~>>>
* Elige un número del 1 al 9 para colocar tu movimiento
* Jugador: 'X' Computadora: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Introduce tu movimiento (1-9): 1
   |   |   
---+---+---
   |   |                                    <--------------- El tablero no tiene los movimientos del jugador/computadora
---+---+---
   |   |   
Introduce tu movimiento (1-9): d
Entrada inválida; por favor, introduce tu movimiento (1-9): 3
   |   |   
---+---+---
   |   |                                    <--------------- El tablero no tiene los movimientos del jugador/computadora
---+---+---
   |   |   
Introduce tu movimiento (1-9): 
```

## Mostrando Movimientos del Usuario

Dentro de la declaración `if` de `hasNextInt()`, antes de la llamada al método `printBoard(board)`, actualiza el arreglo `board` con la entrada del usuario en el índice correspondiente.

Nota que el jugador está representado por `"X"` en el tablero de juego.

{{% notice tip %}}
### Recordatorios

- Java usa indexación desde cero y se le solicitó al jugador que introduzca un número del 1 al 9.
- Para acceder a un elemento de un arreglo, usas la notación de índices: `miVariable[indiceNumero]`.
{{% /notice %}}

## Configurando Movimientos de la Computadora

Crea un nuevo método `getComputerMove(String[] curBoard)` que produzca un movimiento válido para la computadora (entre 1 y 9) con una entrada que es el tablero actual del juego.

Sigue los pasos a continuación para implementar el método.

## Implementando el Movimiento de la Computadora

En `getComputerMove()`, generaremos aleatoriamente un número entre 1 y 9 para la computadora.

Haremos esto con la ayuda de la clase `Random`, que es comúnmente utilizada en Java para generar números aleatorios.

Para usar esta clase y todos sus métodos, necesitamos importar la clase con la siguiente línea de código en la parte superior del archivo.

```java
import java.util.Random;
```

Crea un objeto `Random` llamando al constructor `Random()`.

```java
Random rand = new Random();
```

## Generando Números Aleatorios

Llama al método `int nextInt(int num)` en el objeto `Random` que creaste para generar un número entre 1 y 9 de manera aleatoria.

Una llamada al método `int nextInt(int num)` devolverá un número aleatorio entre 0 y `num-1`.

```java
int position = rand.nextInt(9);
```

## Verificando el Movimiento Válido

Después de tener un número aleatorio entre 1 y 9, necesitamos verificar si el espacio está disponible.

Usa un bucle `while` para generar un movimiento válido para la computadora, si el número generado anteriormente no es un espacio disponible.

Devuelve el número una vez que encontremos un movimiento válido para la computadora.

```java
while (!curBoard[position].equals(" ")){
   position = rand.nextInt(9);
}
return position;
```

## Actualizar el Arreglo del Tablero

Así como en el paso uno, deberíamos actualizar el arreglo `board` para la computadora antes de la llamada al método `printBoard(board)`.

¡Genera aleatoriamente un movimiento llamando a `getComputerMove()`!

Nota que la computadora está representada por `"O"` en el tablero de juego.

```java
board[getComputerMove(board)] = "O"; //getComputerMove devuelve el entero 0-8 que es la posición correcta en el arreglo
printBoard(board);
```

## Ejecuta el Programa

¡Ejecuta el programa ahora! El tablero debería actualizarse correctamente con los movimientos tanto del jugador como de la computadora con cada entrada, como se muestra a continuación:

```
<<<~  Tic  Tac  Toe  ~>>>
* Elige un número del 1 al 9 para colocar tu movimiento
* Jugador: 'X' Computadora: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Introduce tu movimiento (1-9): 1
 X |   |   
---+---+---
   |   |   
---+---+---
   | O |   
Introduce tu movimiento (1-9): 1
Posición inválida; por favor, introduce tu movimiento (1-9): 2
 X | X |   
---+---+---
   |   | O 
---+---+---
   | O |   
Introduce tu movimiento (1-9): 
```

¡Todo parece estar funcionando bien! Solo necesitamos determinar quién es el ganador o perdedor del juego, lo cual implementaremos en el próximo ejercicio.
```