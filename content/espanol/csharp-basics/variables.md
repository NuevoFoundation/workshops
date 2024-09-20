---
title: "Variables and Data Types"
description: "Introduce types and variables in C#."
date: 2024-09-16T00:00:00Z
weight: 4
---

## Variables: ¡Nómbralo!

En el primer ejercicio, aprendimos a imprimir diferentes sentencias con `Console.WriteLine() y Console.Write()`.

Aunque está bien imprimir un número o una frase, no les hemos dado significado y si quisiéramos usar la frase o el número nuevamente, tendríamos que escribirlo de nuevo.

En C#, introducimos la idea de una **variable** para los datos. Una variable almacena un dato con un nombre.

Por ejemplo, puede haber una variable llamada `myName` que tiene asignado el valor de `"Ann"`. Otra variable podría llamarse `age` y se le asigna el número `12`.

## ¡Qué tipo!

Entonces, ¿cómo creamos estas variables en C# para almacenar datos?

Antes de aprender cómo crear variables, necesitamos aprender el concepto de **tipo de dato** en C# o simplemente **tipo** para abreviar. El tipo en C# describe lo que se está almacenando. Si tienes una variable numérica, solo puede contener números, no frases o símbolos. Cada variable tiene su propio tipo que controla qué tipo de datos puede contener.

Por ejemplo, podríamos tener una variable llamada `age` que almacena el número `12`. Si intentas almacenar la palabra `"twelve"` en `age` generará un error porque solo conoce los números.

En C#, para que una variable almacene números enteros, usamos el tipo `int`. Declaramos una variable `int` llamada `age` con el dato `3` con la línea de código:

```
int age = 12;
```
En general, para declarar una variable las escribimos en el formato: `[tipo de dato] [nombre de la variable] = [dato];`.
{{% notice note %}}
Los siguientes son los tipos de datos importantes que han sido incorporados en C#:

**Tipo** | **Descripción** | **Ejemplos**
--------|-----------|----------
`int` | entero | `20`, `30`, `35`
`char` | carácter como un símbolo o una sola letra del alfabeto | `'A'`,`'b'`, `'('`, `']'`
`string` | una secuencia de `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`bool` | booleano, tiene un valor de `true` o `false` | `true`, `false`
`double` | números fraccionarios | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Usando nuestro ejemplo anterior, para declarar estas variables en C#, escribimos lo siguiente:

```C#
string name = "Ann";
int age = 12;
boolean loveMusic = true;
```

La última variable es interesante. Solo puede tener un valor de `true` o `false`. Veremos que esto puede ser muy útil en las secciones más avanzadas de este taller.

## Jugar con variables

Veamos qué podemos hacer con las variables.

En el marco de .NET Fiddle a continuación, haz un fork del Fiddle e intenta ingresar estas líneas y **ejecuta**:

```C#
int age = 10;
Console.WriteLine(age); // imprime 10
age = 12; // asigna el dato 12 a la variable age
Console.WriteLine(age); // imprime 12
```
Podemos asignar un valor a una variable, referenciarlo y luego cambiar el valor.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" frameborder="0"></iframe>

## Qué tipo -- ¡Ayuda a Patrick!

¡Patrick 🐥 no es un maestro de los tipos de datos! A menudo los mezcla al declarar variables. Vamos a ayudarlo a corregir sus errores en el .NET Fiddle a continuación.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" frameborder="0"></iframe>
