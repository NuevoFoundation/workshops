```markdown
---
title: "Variables y Tipos de Datos"
description: "Introducir tipos y variables en C#."
date: 2024-09-16T00:00:00Z
weight: 4
---

## Variables: ¡Dales un Nombre!

En el primer ejercicio, aprendimos a imprimir diferentes sentencias con `Console.WriteLine()` y `Console.Write()`.

Aunque es genial imprimir un número o una oración, no les hemos dado un significado, y si quisiéramos usar esa oración o número nuevamente, tendríamos que escribirlo otra vez.

En C#, introducimos la idea de una **variable** para los datos. Una variable almacena una pieza de información bajo un nombre.

Por ejemplo, podría haber una variable llamada `miNombre` que se le asigne el valor `"Ann"`. Otra variable podría llamarse `edad` y contener el número `12`.

## ¡Qué Tipo!

Entonces, ¿cómo creamos estas variables en C# para almacenar datos?

Antes de aprender cómo crear variables, necesitamos conocer el concepto de **tipo de datos** en C# o simplemente **tipo**. El tipo en C# describe qué se está almacenando. Si tienes una variable numérica, solo puede contener números, no frases o símbolos. Cada variable tiene su propio tipo que controla qué tipo de datos puede contener.

Por ejemplo, podríamos tener una variable llamada `edad` que almacena el número `12`. Si intentas almacenar la palabra `"doce"` en `edad`, generará un error porque solo entiende números.

En C#, para una variable que almacena números enteros, se utiliza el tipo `int`. Declaramos una variable `int` llamada `edad` con el dato `12` usando la siguiente línea de código:

```
int edad = 12;
```

En general, para declarar una variable escribimos el formato: `[tipo de dato] [nombre de variable] = [dato];`.
{{% notice note %}}
Los siguientes son los tipos de datos importantes que están integrados en C#:

**Tipo** | **Descripción** | **Ejemplos**
--------|-----------|----------
`int` | entero | `20`, `30`, `35`
`char` | carácter como un símbolo o una sola letra del alfabeto | `'A'`,`'b'`, `'('`, `']'`
`string` | una secuencia de `char` | `"Hola"`, `"Bonjour"`, `"Buenas"`
`bool` | booleano, tiene un valor de `true` o `false` | `true`, `false`
`double` | números fraccionarios | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Usando nuestro ejemplo anterior, para declarar estas variables en C#, escribimos lo siguiente:

```C#
string nombre = "Ann";
int edad = 12;
boolean amaLaMúsica = true;
```

La última variable es interesante. Solo puede tener un valor de `true` o `false`. Veremos que esto puede ser muy útil en las secciones más avanzadas de este taller.

## Juega con las variables

Veamos qué podemos hacer con las variables. 

En el marco de .NET Fiddle a continuación, haz un fork del Fiddle e intenta ingresar estas líneas y **ejecuta**:

```C#
int edad = 10;
Console.WriteLine(edad); // imprime 10
edad = 12; // asigna el dato 12 a la variable edad
Console.WriteLine(edad); // imprime 12
```
Podemos asignar un valor a una variable, referenciarlo y luego cambiar su valor.  

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" title="Ejercicio interactivo de variables en C#" frameborder="0"></iframe>

## ¡Qué Tipo! - ¡Ayuda a Patrick!

¡Patrick 🐥 no es un experto en tipos de datos! A menudo los confunde al declarar variables. Ayudémosle a corregir sus errores en el .NET Fiddle a continuación.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" title="Ejercicio interactivo de tipos de datos en C#" frameborder="0"></iframe>
```