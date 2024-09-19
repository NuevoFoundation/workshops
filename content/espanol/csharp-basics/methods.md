```markdown
---
title: "Métodos"
description: "Introducir métodos en C#."
date: 2024-09-16T00:00:00Z
weight: 7
---

## ¿Qué es un Método?

Hasta ahora, hemos aprendido cómo almacenar datos en variables, imprimir datos y frases, y tomar decisiones con `if`, `for` y `while`.

Del último ejercicio, sabemos que el siguiente bloque de código calcula la suma de 1 a 100:

```C#
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
Console.WriteLine("Suma: " + total);
```

¿Pero qué pasa si queremos calcular la suma de 1 a 77 en su lugar? ¿Cómo lo hacemos sin reescribir todo el bloque de código?

¡Queremos crear una ✨ caja mágica ✨ en el código que haga el cálculo por nosotros sin importar qué dos números queremos sumar!
<img src="../images/method.png" height="250" alt="Num 1 y Num 2 con una flecha apuntando a un círculo con las palabras Caja Mágica y una flecha apuntando fuera del círculo hacia la Suma de Num 1 a Num 2"/> 

En C#, un **método** es como la caja mágica que realiza una tarea específica ejecutando un bloque de código que puede utilizar entradas del usuario.

Hay 2 partes en un método: firma y cuerpo:

{{% notice note %}}
### Firma del Método

Para definir un método, primero necesitamos escribir su <b>firma del método</b>. Un encabezado de firma tiene cuatro partes principales:

```
access_specifier return_type method_name(list_of_parameters)
```

**Parte Nombre** | **Descripción** | **Ejemplos o opciones posibles**
----|----|----
**especificador de acceso** | proporciona el nivel de acceso al método  | `public` le dice a la computadora que cualquiera puede usar este método. `private` le dice a la computadora que solo se puede llamar dentro de una clase. (¡Aprenderemos sobre las clases en la próxima página!) `protected` le dice a la computadora que puede ser llamado por objetos de la misma clase.
**tipo de retorno** | tipo de datos que se devuelve a la función que llama, técnicamente el tipo de retorno no es parte de la firma en C#  | `string` o `int`, usa `void` si el método no devuelve nada.
**nombre del método** | nombre del método, usado para llamarlo | un nombre descriptivo que eliges basado en lo que hace el método.
**lista de parámetros** | lista de entradas que se deben proporcionar cuando se utiliza el método | puede tener cero o más parámetros en la forma de (`type` `input name`, `type` `input name`, ... ). Usa () para ningún parámetro.

```
// un ejemplo que toma un string como parámetro y devuelve otro string en respuesta
public string artist (string songName)
```
**Nota:** Los nombres de las variables para los parámetros no tienen que coincidir con el nombre de la variable de los datos que se pasan al método.

### Cuerpo del Método

A continuación, ponemos el bloque de código asociado con el método en el **cuerpo del método**, que está entre `{` y `}` después de la firma del método.

Para devolver algunos datos, ponemos la palabra clave `return` seguida de un nombre de variable o un valor para ser devuelto. 

**Nota:** Una vez que haces `return`, nada más después de eso en el método se ejecuta.

Este es un ejemplo de cómo definir un método que suma números desde `numA` hasta `numB`:

```c#
/* Nombre del Método: sumNum
 * Entrada/Parámetro: 2 números de tipo int
 * Funcionalidad: devuelve la suma de numA a numB
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // accedemos a la primera entrada con el nombre numA
    while(num <= numB){  // accedemos a la primera entrada con el nombre numB
        total = total + num;
        num = num + 1;
    }
    return total; // declaración de return
}
```

### Llamada al Método

Por último, para ejecutar un método en tu código, necesitamos hacer una **llamada al método**. Escribimos el nombre del método con la entrada adecuada. 
Por ejemplo:

```C#
sumNum(1, 3); // una línea de código que llama al método sumNum() con el valor de retorno 6
```

Sabiendo que `sum