```markdown
---
title: "Variables y Tipos de Datos"
description: "Introducir tipos y variables en C#."
date: 2024-09-16T00:00:00Z
weight: 4
---

## Variables: ¡Ponle Nombre!

En el primer ejercicio, aprendimos a imprimir diferentes enunciados con `Console.WriteLine() y Console.Write()`.

Aunque es genial imprimir un número o una oración, no les hemos dado un significado y si quisiéramos usar la oración o el número nuevamente, tendríamos que escribirlo otra vez.

En C#, introducimos la idea de una **variable** para los datos. Una variable almacena un dato con un nombre.

Por ejemplo, puede haber una variable llamada `myName` a la que se le asigna el valor `"Ann"`. Otra variable podría llamarse `age` y se le asigna el número `12`.

## ¡Qué Tipo!

Entonces, ¿cómo creamos estas variables en C# para almacenar datos?

Antes de aprender a crear variables, necesitamos aprender el concepto de **tipo de dato** en C# o simplemente **tipo** para abreviar. El tipo en C# describe lo que se está almacenando. Si tienes una variable numérica, solo puede contener números, no oraciones o símbolos. Cada variable tiene su propio tipo que controla qué tipo de datos puede contener.

Por ejemplo, podríamos tener una variable llamada `age` que almacena el número `12`. Si intentas almacenar la palabra `"twelve"` en `age`, generará un error porque solo reconoce números.

En C#, para que una variable almacene números enteros, usa el tipo `int`. Declaramos una variable `int` llamada `age` con el dato `3` con la línea de código:

```
int age = 12;
```
En general, para declarar una variable las escribimos en el formato: `[tipo de dato] [nombre de la variable] = [dato];`.
{{% notice note %}}
Los siguientes son los tipos de datos importantes que están integrados en C#:

**Tipo** | **Descripción** | **Ejemplos**
--------|-----------|----------
`int` | entero | `20`, `30`, `35`
`char` | carácter como un símbolo o una letra del alfabeto | `'A'`,`'b'`, `'('`, `']'`
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

## Juega con variables

Veamos qué podemos hacer con las variables.

En el marco de .NET Fiddle a continuación, bifurca el Fiddle e intenta ingresar estas líneas y **ejecuta**:

```C#
int age = 10;
Console.WriteLine(age); // imprime 10
age = 12; // asigna el dato 12 a la variable age
Console.WriteLine(age); // imprime 12
```
Podemos asignar un valor a una variable, referencia su valor y luego cambiarlo.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" frameborder="0"></iframe>

## Qué Tipo -- ¡Ayuda a Patrick!

¡Patrick 🐥 no es un maestro de los tipos de datos! A menudo confunde los tipos al declarar variables. Ayudémosle a corregir sus errores en el .NET Fiddle a continuación.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" frameborder="0"></iframe>
```