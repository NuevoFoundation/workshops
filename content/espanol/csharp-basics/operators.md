```markdown
---
title: "Operadores"
description: "Introduce los operadores y realiza operaciones en variables en C#."
date: 2024-09-16T00:00:00Z
weight: 5
---

## Hagamos Matemáticas: Operador Aritmético

En el último ejercicio, aprendimos sobre las variables y cómo podemos asignar valores a una variable de un tipo específico, como:

```C#
int age = 3;  // declarar variable age de tipo int con valor 3
age = 4;      // asignar 4 a la variable age
```

Mirando el código anterior, esencialmente suma 1 al valor de la variable `age`. 

Y, en C#, podemos realizar operaciones matemáticas en variables directamente con **operadores aritméticos**: `+`, `-`, `*`, `/`, `%`.
Por ejemplo, podemos usar el operador de suma `+` para sumar 1 a `age`:

```c#
int age = 3;  // declarar variable age de tipo int con valor 3
age = age + 1;// sumar 1 a age
```

{{% notice note %}}
Los siguientes son los operadores aritméticos en C#:

**Operador** | **Descripción** | **Ejemplo**
------|------|--------
`+` | suma | `1 + 1 = 2`
`-` | resta | `2 - 1 = 1`
`*` | multiplicación | `3 * 3 = 9`
`/` | división | `9 / 3 = 3`
`%` | módulo/residuo | `10 % 4 = 2`

**Nota**: Si ambos operandos de la división son enteros, el resultado también será un entero. Por ejemplo, `10 / 4` devuelve 2, no 2.5, ya que descartamos el residuo. Si cualquiera de los operandos es un double, el resultado será un double.

**Nota**: Usa la operación de módulo (`%`) para obtener el residuo de la operación de división.

{{% /notice %}}

{{% notice tip %}}
El operador de suma (`+`) se utiliza en Strings como un operador de concatenación. Por ejemplo:

`String name = "Patric" + "k";` es igual a `String name = "Patrick";`
{{% /notice %}}

### Instrucciones
1. Usa el programa a continuación para practicar usando los operadores aritméticos. Cambia los números para ver las respuestas.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/dUSTOt" frameborder="0"></iframe>

## Comparaciones: Operador Relacional

A continuación, aprendamos cómo comparar números, usando **operadores relacionales**.

Al igual que en matemáticas, podemos comparar números usando `>`, `<`, `>=`, `<=`. Por ejemplo: `(3 > 2)` es `true`, un valor booleano.

{{% notice note %}}
Los siguientes son los operadores relacionales en C#:

**Operador** | **Descripción** | **Ejemplo**
------| ------| ------
`==` | igual a | `(3 == 3)` es `true`
`!=` | no igual a | `(3 != 3)` es `false`
`>` | mayor que | `(3 > 2)` es `true`
`<` | menor que | `(3 < 2)` es `false`
`>=` | mayor o igual a | `(3 >= 2)` es `true`
`<=` | menor o igual a | `(2 <= 2)` es `true`

Nota: `==` y `!=` solo pueden usarse en datos del mismo tipo. Por ejemplo:
```csharp
int x=3; 
double y=3.0; 
x==y; // Esto produciría un error porque x e y son de diferentes tipos.
```

{{% /notice %}}

{{% notice tip %}}
Usar 1 signo igual asigna un valor a la variable. Usar 2 signos iguales compara los valores de dos elementos.

```csharp
age = 3;  // establece el valor de age a 3
age == 3; // verifica si el valor de age es 3
```
{{% /notice %}}

### Práctica de Comparación

1. Usa el programa a continuación para practicar usando los operadores de comparación. Cambia los números para ver las respuestas.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/tZs8tb" frameborder="0"></iframe>

## ¡Estadísticas del Examen!

Patrick 🐥 y