---
title: "Escribir en la Consola"
description: "Introduce métodos de impresión en C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Tu primer programa en C#

Nuestro primer ejercicio es familiarizarnos con la estructura de una aplicación simple en C# que escribe en la consola.

Intentemos ejecutar un programa en C# que imprima `Hello World` en la consola. La línea de código `Console.WriteLine ("Hello World");` hace esto por nosotros. Le dice a la computadora que escriba en pantalla lo que esté entre los ().

### ¡Vamos a escribir algo de código!

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

En el marco anterior de .NET Fiddle, añade una nueva línea de código debajo de la primera línea para imprimir "Hello *tu nombre*". Debería verse algo así.

<img src="../images/Step1.png" height="300" alt="La pantalla inicial de un fiddle" />

Deberías ver tu salida en la parte inferior de la pantalla. ¿Genial, no?

Intentemos imprimir otras cosas. Añade algunas líneas adicionales de código para:
1. Imprimir números colocando números entre paréntesis (por ejemplo, `Console.WriteLine(42);`). No se necesitan comillas dobles.
2. Juntar algunos textos (por ejemplo, `Console.WriteLine("Hi " + "Sally");`)

{{% notice tip %}}
### ¿Notaste que todas las declaraciones que escribiste se imprimieron en líneas diferentes?

A veces queremos escribir en la misma línea. Usamos un código ligeramente diferente, `Console.Write` en lugar de `Console.WriteLine`.

Añade dos líneas de código:
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

Y pruébalo.
{{% /notice %}}

{{% notice warning %}}
### !! Importante !! A veces no puedes simplemente poner caracteres entre " "

Al poner caracteres entre `" "` en una declaración de impresión, a veces es fácil confundir a la computadora sobre qué caracteres imprimir.

Por ejemplo, ¿cómo le decimos a la computadora que imprima `"`?

Si escribes `Console.WriteLine(""");`, obtendrás un error porque la computadora no puede identificar dónde termina el texto.

En su lugar, ciertos caracteres deben ser <b>escapados</b> añadiendo un `\` delante de ellos.

```csharp
Console.Writeline("\"");`  // esto imprime "
```
{{% /notice %}}