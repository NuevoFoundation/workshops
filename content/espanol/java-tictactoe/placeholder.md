```markdown
---
title: "Placeholder"
date: 2020-07-23T00:00:00Z
weight: 15
draft: true
hidden: true
---

## Leer y Procesar Entrada

En Java, una forma eficiente de obtener la entrada del usuario es utilizar la clase `Scanner` en el paquete `java.util`. Para usar esta clase y todos sus métodos, necesitamos realizar un `import` de la clase con la siguiente línea de código en la parte superior del archivo.

```java
import java.util.Scanner;
```

## Manejo de Errores

En Java, podemos manejar posibles errores colocando el código que podría causar un error dentro de un bloque `try-catch`.

En el bloque `try`, colocamos el bloque de código que podría causar un error.

En el bloque `catch`, colocamos instrucciones sobre qué hacer si ocurre un error al ejecutar el bloque `try`. De esta manera podemos evitar que el programa se cierre inesperadamente.
Por ejemplo:

```java
try{
   // Bloque de código para probar
} catch(Exception e){
   // Bloque de código para manejar errores
}
```

   ¡Ejecuta tu programa e ingresa entradas que no sean números. Tu programa ya no debería fallar!

## El Bloque Try

En el bloque `try`, obtenemos entradas de números de los usuarios. Sin embargo, no todas las entradas son válidas, ya que solo deberíamos aceptar lugares disponibles en el tablero.

Usa una(s) declaración(es) `if` para verificar si la entrada numérica es válida. (Pista: accede al arreglo `board` para verificar si la entrada es válida).

Si no lo es, imprime la declaración `Posición inválida; vuelve a ingresar tu movimiento (1-9):`.

{{% notice hint %}}
#### ¿Cómo puedo comprobar si dos cadenas son iguales?

Para comprobar si dos cadenas contienen el mismo contenido, llamamos al método `equals()`. Por ejemplo:

```java
String s1 = "hi";
boolean b1 = s1.equals("hi"); // esto es true
boolean b2 = s1.equals("HI"); // esto es false
```

{{% /notice %}}

## El Bloque Catch

En el bloque `catch`, sabemos que el jugador ingresó una entrada que no es numérica. Primero, necesitamos ignorar esta entrada no válida borrándola del objeto `Scanner`. Para ello, llamamos al método `next()` en el objeto `Scanner` que creamos. Luego, también deberíamos imprimir el mensaje para informar al jugador que vuelva a ingresar su movimiento `Posición inválida; vuelve a ingresar tu movimiento (1-9):`.

## (opcional) Prueba tu Programa

Prueba tu programa haciendo clic en `Run`. Deberías ver el mensaje `Posición inválida; vuelve a ingresar tu movimiento (1-9):` si ingresaste una entrada que no es numérica o un número que no está entre 1 y 9.

## Entradas Múltiples

Ahora que tenemos un programa que acepta una entrada y evalúa si es válida, queremos pedir al jugador que vuelva a hacerlo hasta que termine el juego.

Para continuar solicitando al usuario que ingrese su próximo movimiento, colocamos todo el bloque `try-catch` dentro de un `while loop`. Este `while loop` lleva un argumento de `true`, lo que significa que el programa continuará ejecutándose hasta que se le ordene detenerse.

Ten en cuenta que llamamos a `printBoard(board)` y mostramos la solicitud al final de cada iteración, como se muestra a continuación:

```java
while(true){
    // insertar el bloque try-catch aquí

    printBoard(board);
    System.out.print("Enter your move (1-9): "); 
}
```

## Manejo de Entrada Inválida

Cuando un usuario ingresa una entrada inválida, no queremos que el programa llame a `printBoard(board)` ni que imprima `Enter your move (1-9):`.

En otras palabras, queremos que el programa se `continue` a la próxima iteración del bucle `while`.

Colocamos `continue;` en el código para indicar que el programa debe regresar y ejecutar desde la parte superior del bucle `while` nuevamente.

Al final de este ejercicio, deberías tener un programa que te solicite que vuelvas a ingresar cualquier entrada inválida, y que imprima un tablero vacío con la solicitud `Enter your move (1-9):` para cualquier entrada válida.

```
<<<~  Tic  Tac  Toe  ~>>>
* Elige un número del 1 al 9 para colocar tu movimiento
* Jugador: 'X' Computadora: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 1
   |   |   
---+---+---
   |   |                                    <--------------- El tablero no tiene los movimientos del jugador/computadora
---+---+---
   |   |   
Enter your move (1-9): d
Entrada inválida; vuelve a ingresar tu movimiento (1-9): 3
   |   |   
---+---+---
   |   |                                    <--------------- El tablero no tiene los movimientos del jugador/computadora
---+---+---
   |   |   
Enter your move (1-9): 
```

¡Continuemos en el taller para ver cómo debemos actualizar nuestro tablero de juego!
```