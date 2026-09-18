```markdown
---
title: "Métodos"
description: "Introducción a los métodos en C#."
date: 2024-09-16T00:00:00Z
weight: 7
---

## ¿Qué es un Método?

Hasta ahora, hemos aprendido cómo almacenar datos en variables, imprimir datos y oraciones, y tomar decisiones con `if`-statements, `for`-loops y `while`-loops. 

En el ejercicio anterior, sabemos que el siguiente bloque de código calcula la suma de los números del 1 al 100:

```C#
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
Console.WriteLine("Suma: " + total);
```

Pero, ¿qué pasa si queremos calcular la suma del 1 al 77? ¿Cómo podemos hacerlo sin tener que escribir todo el bloque de código otra vez?

¡Queremos crear una ✨ caja mágica ✨ en código que realice el cálculo por nosotros, sin importar qué dos números queremos sumar!
<img src="../images/method.png" height="250" alt="Número 1 y Número 2 con una flecha que apunta hacia un círculo con las palabras Caja Mágica y otra flecha que sale del círculo apuntando a Suma de Número 1 a Número 2"/> 

En C#, un **método** es como la caja mágica que realiza una tarea específica ejecutando un bloque de código que puede usar las entradas del usuario.

Hay 2 partes en un método: firma y cuerpo:

{{% notice note %}}
### Firma del Método

Para definir un método, primero necesitamos escribir su <b>firma del método</b>. Un encabezado de firma tiene cuatro partes principales:

```
access_specifier return_type method_name(list_of_parameters)
```

**Nombre de la Parte** | **Descripción** | **Ejemplos o Opciones Posibles**
----|----|----
**specificador de acceso** | proporciona el nivel de acceso al método  | `public` dice a la computadora que cualquiera puede usar este método. `private` dice a la computadora que solo puede ser llamado dentro de una clase. (¡Aprenderemos sobre clases en la siguiente página!) `protected` dice a la computadora que puede ser llamado por objetos de la misma clase.
**tipo de retorno** | tipo de dato que es retornado a la función que llama, técnicamente el tipo de retorno no es parte de la firma en C# | `string` o `int`, usa `void` si el método no retorna nada.
**nombre del método** | nombre del método, usado para llamarlo | un nombre descriptivo que elijas basado en lo que hace el método.
**lista de parámetros** | lista de entradas que deben ser proporcionadas cuando se usa el método | puede tener cero o más parámetros en la forma de (`tipo` `nombre del input`, `tipo` `nombre del input`, ... ). Usa () para ningún parámetro.

```
// un ejemplo que toma una cadena como parámetro y devuelve otra cadena en respuesta
public string artista (string nombreCancion)
```
**Nota:** Los nombres de las variables de los parámetros no tienen que coincidir con el nombre de la variable de los datos que se pasan al método.

### Cuerpo del Método

A continuación, ponemos el bloque de código asociado con el método en el **cuerpo del método**, que está entre `{` y `}` después de la firma del método.

Para retornar algunos datos, usamos la palabra clave `return` seguida por el nombre de una variable o un valor que se retornará. 

**Nota:** Una vez que usas `return`, nada más después de eso en el método se ejecutará.

Este es un ejemplo de cómo definir un método que suma números de `numA` a `numB`:

```c#
/* Nombre del Método: sumaNumeros
 * Entrada/Parámetro: 2 números de tipo int
 * Funcionalidad: retorna la suma de numA a numB
 */
public int sumaNumeros(int numA, int numB){
    int total = 0;
    int num = numA;      // accedemos a la primera entrada con el nombre numA
    while(num <= numB){  // accedemos a la segunda entrada con el nombre numB
        total = total + num;
        num = num + 1;
    }
    return total; // declaración de retorno
}
```

### Llamada al Método

Por último, para ejecutar un método en tu código, debemos hacer una **llamada al método**. Escribimos el nombre del método con la entrada correspondiente. 
Por ejemplo:

```C#
sumaNumeros(1, 3); // una línea de código que llama al método sumaNumeros() con el valor de retorno 6
```

Sabiendo que `sumaNumeros(1, 3)` retorna un `int` con la suma de 1 a 3, podemos hacer lo siguiente para almacenarlo y luego imprimir el valor:

Para llamar a este método, podrías hacer esto:
```c#
    int suma = 0;
    suma = sumaNumeros(1, 3);
    Console.WriteLine(suma); // imprime 6
```

Una de las razones por las que los métodos son poderosos es que podemos llamarlos más de una vez:
```C#
    int suma = 0;
    suma = sumaNumeros(1, 3);
    Console.WriteLine(suma); // imprime 6
    suma = sumaNumeros(1, 4);
    Console.WriteLine(suma); // imprime 10
```

Podríamos haber escrito lo anterior solo para imprimir los números retornados sin almacenarlos en una variable:
```c#
    Console.WriteLine(sumaNumeros(1,3)); // imprime 6
    Console.WriteLine(sumaNumeros(1,4)); // imprime 10
```
{{% /notice %}}

## ¡Cuenta la Pirámide!🔺

Aquí hay una imagen de una pirámide de números cuadrados donde cada nivel es un cuadrado perfecto del número del nivel actual, contando desde arriba.

<img src="../images/pyramid.png" height="250" alt="pirámide con capas de cuentas coloridas. La capa inferior es amarilla, luego azul, luego marrón, luego blanca, luego rosa, luego azul claro, luego naranja, luego coral, luego verde, y la última roja." /> 

El nivel superior tiene `1 * 1` cuenta, el segundo nivel tiene `2 * 2` cuentas, y así sucesivamente.

¡Escribamos un método que tome como entrada el número total de niveles y devuelva el número total de cuentas en la pirámide!

Una vez que resuelvas el desafío, verás el siguiente mensaje:

```
¡Felicidades! ¡Desafío Resuelto!
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ireaAA" title="Reto interactivo de métodos en C#" frameborder="0"></iframe>
