---
title: "2. Leer y Procesar Entrada"
description: "Leer entrada con la clase Scanner y gestionar casos de error"
date: 2021-10-14T00:00:00Z
prereq: "¡Configura el Tablero!"
difficulties: ["intermedio"]
weight: 3
draft: false
---

## Importar Paquetes

En Java, una forma eficiente de obtener entrada del usuario es utilizando la clase `Scanner` que se encuentra en el paquete `java.util`. Para usar esta clase y todos sus métodos, necesitamos `importar` la clase con la siguiente línea de código al inicio del archivo.

```java
import java.util.Scanner;
```

## Usando la Clase Scanner

En `main()`, primero necesitamos crear un objeto `Scanner` llamado `sc` llamando a su constructor (mostrado a continuación).

Queremos que el `Scanner` lea nuestra entrada desde el flujo de entrada estándar. Para hacerlo, necesitamos pasar `System.in` (el objeto de flujo de entrada estándar).

```java
// Crear un objeto Scanner
Scanner sc = new Scanner(System.in);
```

## Obtener Entrada del Usuario

En la actividad anterior, solicitamos al usuario que ingrese números del 1 al 9. Por lo tanto, esperamos que el flujo de entrada reciba un valor de tipo `int`.

Para obtener el `int` almacenado en el objeto `Scanner`, llamamos al método `nextInt()` en el objeto `sc`.

```java
int input = sc.nextInt();
```

## Probar tu Programa (opcional)

Para probar tu programa, añade una declaración de impresión para mostrar el valor almacenado desde `nextInt()`.

Intenta ejecutar tu programa, escribe algunos números y presiona `enter`. Deberías ver tu número impreso correctamente. Por ejemplo:

```
<<<~  Tres En Línea  ~>>>
* Elige un número del 1 al 9 para colocar tu movimiento
* Jugador: 'X' Computadora: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Introduce tu movimiento (1-9): 2                 <------- el número que escribiste
Número ingresado: 2                              <------- La declaración imprime correctamente el número ingresado
```

{{% notice warning %}}
#### ¿Qué pasa si el usuario escribe algo que no es un número?

Cuando escribimos programas, nunca podemos asumir que los usuarios ingresarán valores correctos, incluso cuando las instrucciones son claras.

Dado que nuestro programa solo espera una entrada de tipo `int`, el programa se bloqueará si ingresas algo que no sea un entero, como: `hola`, `$`, `20.1`. Verás un mensaje de error como el siguiente:

```
Exception in thread "main" java.util.InputMismatchException      <------ indica cuál es el error
    at java.base/java.util.Scanner.throwFor(Scanner.java:939)
    at java.base/java.util.Scanner.next(Scanner.java:1594)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2258)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2212)
    at Main.main(Main.java:15)                                   <------ indica en qué línea del código sucede el error (línea 15 en Main.java)
```

Además, ten en cuenta que los números ingresados que no estén en el rango de 1 a 9 no harán que el programa falle, pero estos también son entradas no deseadas.
{{% /notice %}}

## Manejo de Entradas Inválidas con Scanner

La clase Scanner proporciona métodos que verifican si las entradas son válidas o inválidas. Por ejemplo, el método `hasNextInt` comprueba si el valor ingresado por el usuario es un entero y devuelve `true` o `false`. Este método puede ser utilizado para asegurarse de que la entrada del usuario sea válida.

Utiliza estructuras de control para validar la entrada del usuario. Si la entrada no es válida, solicita una entrada válida nuevamente.

```java
if(sc.hasNextInt()) { //¿Se ingresó un número entero?
	move = sc.nextInt(); // obtener entrada entera
   if (!(move > 0 && move <= 9)) { //¿El entero está entre 1 y 9?
		System.out.print("Posición inválida; ingrese su movimiento nuevamente (1-9): ");
   }
} else { // si no se ingresó un número entero
   sc.next(); // limpiar el Scanner
	System.out.print("Entrada inválida; ingrese su movimiento nuevamente (1-9): ");
}
```

## Probar tu Programa (opcional)

Prueba tu programa haciendo clic en `Run`. Deberías ver el mensaje `Posición inválida; ingrese su movimiento nuevamente (1-9):` si introduces una entrada que no sea un número, o un número que no esté entre 1 y 9.

## Tomar Múltiples Entradas

Ahora que tenemos un programa que toma una entrada y verifica si es válida, queremos pedirle al jugador que lo haga nuevamente hasta que termine el juego.

Para seguir solicitando al usuario que introduzca su próximo movimiento, colocamos todo el bloque `hasNextInt` dentro de un `bucle while`. Este `bucle while` toma un argumento de `true`, lo que significa que el programa seguirá ejecutándose en bucle hasta que se le indique detenerse.

Ten en cuenta que llamamos a `printBoard(board)` y volvemos a solicitar al usuario al final de cada iteración, como se muestra a continuación:

```java
while(true){
    // inserta aquí el bloque de hasNextInt()

   // mueve esto dentro del bloque de hasNextInt() 
    printBoard(board);
    System.out.print("Introduce tu movimiento (1-9): "); 
}
```

## Gestión de Entradas Inválidas

Cuando un usuario introduce una entrada inválida, no queremos que el programa llame a `printBoard(board)` ni imprima `Introduce tu movimiento (1-9):`.

En otras palabras, queremos que el programa pase al siguiente loop de iteración en el bucle `while`.

Colocamos `continue;` en el código para indicar al programa que se salte el resto del código en el loop actual y vuelva al inicio del mismo.

Al final de este ejercicio, deberías tener un programa que te pida volver a introducir un valor válido cuando sea necesario y que imprima un tablero vacío con el aviso `Introduce tu movimiento (1-9): ` para cualquier entrada válida.

```
<<<~  Tres En Línea  ~>>>
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
   |   |                                    <--------------- El tablero no muestra los movimientos del jugador/computadora
---