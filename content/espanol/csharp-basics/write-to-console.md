---
title: "Escribir en la consola"
description: "Introducir métodos de impresión en C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Tu primer programa en C#

Nuestro primer ejercicio consiste en familiarizarnos con la estructura de una aplicación simple de C# que escribe en la consola.

Vamos a intentar ejecutar un programa en C# que imprima `Hello World` en la consola. La línea de código `Console.WriteLine ("Hello World");` hace esto por nosotros. Le dice a la computadora que escriba lo que esté entre los paréntesis () en la pantalla.

### ¡Escribamos algo de código!

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

En el marco .NET Fiddle anterior, agrega una nueva línea de código debajo de la primera línea para imprimir "Hola *tu nombre*". Debería parecer algo como esto.

<img src="../images/Step1.png" height="300" alt="La pantalla inicial de un fiddle" />

Deberías ver tu salida en la parte inferior de la pantalla. Genial, ¿verdad?  

Intentemos imprimir otras cosas. Agrega algunas líneas adicionales de código para:
1. Imprimir números poniendo números dentro de los paréntesis (ej. `Console.WriteLine(42);`). No se necesitan comillas dobles.
2. Combinar texto (ej. `Console.WriteLine("Hola " + "Sally");`).

{{% notice tip %}}
### ¿Notaste que todas las declaraciones que escribiste se imprimieron en líneas diferentes?

A veces queremos escribir en la misma línea. Usamos un código ligeramente diferente `Console.Write` en lugar de `Console.WriteLine`.

Agrega dos líneas de código:
```csharp
Console.Write("Me gusta comer ");
Console.Write("manzanas.");
```

Y pruébalo.
{{% /notice %}}

{{% notice warning %}}
### ¡¡Importante!! A veces no puedes simplemente poner caracteres entre " "

Al poner caracteres entre `" "` en una declaración de impresión, a veces es fácil confundir a la computadora sobre qué caracteres imprimir.

Por ejemplo, ¿cómo le decimos a la computadora que imprima `"`?

Si escribes `Console.WriteLine(""");`, obtendrás un error porque la computadora no puede identificar dónde termina el texto.

En cambio, ciertos caracteres necesitan ser <b>escapados</b> agregando un `\` delante de ellos.

```csharp
Console.WriteLine("\"");  // esto imprime "
```
{{% /notice %}}