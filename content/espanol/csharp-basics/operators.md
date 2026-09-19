```markdown
---
title: "Operadores"
description: "Introducir operadores y realizar operaciones en variables en C#."
date: 2024-09-16T00:00:00Z
weight: 5
---

## Hagamos Matemáticas: Operadores Aritméticos

En el último ejercicio, aprendimos sobre variables y cómo podemos asignar valores a una variable de un tipo específico, como:

```C#
int age = 3;  // declarar la variable age de tipo int con valor 3
age = 4;      // asignar 4 a la variable age
```

Observando el código anterior, esencialmente agrega 1 al valor de la variable `age`.

Y, en C#, podemos realizar operaciones matemáticas directamente en variables usando **operadores aritméticos**: `+`, `-`, `*`, `/`, `%`.
Por ejemplo, podemos usar el operador de suma `+` para sumar 1 a `age`:

```c#
int age = 3;  // declarar la variable age de tipo int con valor 3
age = age + 1;// sumar 1 a age
```

{{% notice note %}}
Los siguientes son los operadores aritméticos en C#:

**Operador** | **Descripción** | **Ejemplo**
------|------|--------
`+` | adición | `1 + 1 = 2`
`-` | sustracción | `2 - 1 = 1`
`*` | multiplicación | `3 * 3 = 9`
`/` | división | `9 / 3 = 3`
`%` | módulo/resto | `10 % 4 = 2`

**Nota**: Si ambos operandos de la división son enteros, el resultado también será un entero. Por ejemplo, `10 / 4` devuelve 2, no 2.5 ya que descartamos el resto. Si cualquiera de los operandos es un número de tipo `double`, el resultado será un `double`.

**Nota**: Usa la operación de módulo (`%`) para obtener el resto de la operación de división.

{{% /notice %}}

{{% notice tip %}}
El operador de suma (`+`) también se utiliza en Strings como un operador de concatenación. Por ejemplo:

`String name = "Patric" + "k";` es lo mismo que `String name = "Patrick";`
{{% /notice %}}

### Instrucciones
1. Usa el siguiente programa para practicar el uso de los operadores aritméticos. Cambia los números para ver las respuestas.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/dUSTOt" title="Ejercicio interactivo C# operadores aritméticos" frameborder="0"></iframe>

## Comparaciones: Operadores Relacionales

A continuación, aprendamos cómo comparar números, usando **operadores relacionales**.

Tal como en las matemáticas, podemos comparar números usando `>`, `<`, `>=`, `<=`. Por ejemplo: `(3 > 2)` es `true`, un valor booleano.

{{% notice note %}}
Los siguientes son los operadores relacionales en C#:

**Operador** | **Descripción** | **Ejemplo**
------| ------| ------
`==` | igual a | `(3 == 3)` es `true`
`!=` | no igual a | `(3 != 3)` es `false`
`>` | mayor que | `(3 > 2)` es `true`
`<` | menor que | `(3 < 2)` es `false`
`>=` | mayor o igual que | `(3 >= 2)` es `true`
`<=` | menor o igual que | `(2 <= 2)` es `true`

Nota: `==` y `!=` solo pueden ser usados en datos del mismo tipo. Por ejemplo:
```csharp
int x = 3; 
double y = 3.0; 
x == y; // Esto produciría un error porque x y y son de tipos diferentes.
```

{{% /notice %}}

{{% notice tip %}}
Usar 1 signo igual asigna un valor a la variable. Usar 2 signos iguales compara los valores de dos elementos.

```csharp
age = 3;  // asigna el valor de 3 a age
age == 3; // verifica si el valor de age es 3
```
{{% /notice %}}

### Práctica de Comparación

1. Usa el siguiente programa para practicar el uso de los operadores de comparación. Cambia los números para ver las respuestas.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/tZs8tb" title="Ejercicio interactivo C# operadores de comparación" frameborder="0"></iframe>

## ¡Estadísticas de Examen!

Patrick 🐥 y 4 de sus compañeros de clase acaban de tener un examen de música en esta clase. Estas son las calificaciones de sus exámenes: Patrick(88), Tom(89), Mary(95), Chris(84), Jen(92).

Queremos producir un informe estadístico de calificaciones de toda la clase.

Este informe lista la calificación de cada estudiante, el promedio de calificaciones de la clase, y si el promedio de la clase es mayor a 60, 70, 80, 90 (`true` o `false`), como el siguiente:

```
---------------------------
     Informe de Música    
---------------------------

Calificaciones de los Estudiantes:          
- Patrick: ...
- Tom: ...
...

Promedio de la Clase: ...
- Promedio Mayor a 60: ...
- Promedio Mayor a 70: ...
- Promedio Mayor a 80: ...
- Promedio Mayor a 90: ...
```

¡Escribámoslo con la ayuda de operadores 🎵!

{{% notice note %}}

### Instrucciones:

1. Identifica todas las variables en las declaraciones `print` y decláralas comenzando en la línea 12 con el tipo de datos correcto y su valor. Nota que hay 10 variables en total, y `average` ya ha sido declarada para ti.

   Sugerencia: por ejemplo, la variable `patrickGrade` debe ser declarada y asignada en la línea 13 como `int patrickGrade = 88;`.

2. Calcula el promedio correcto de la clase y asígnalo a la variable `average` usando **operadores aritméticos** como `+`, `-`, `*`, `/`, `%`. Asegúrate de usar paréntesis alrededor del total de puntos.

   Nota que un promedio se calcula como `(puntos totales)`/`(número de estudiantes)`.

3. Asigna las variables `over60`, `over70`, `over80`, `over90` con el valor correcto usando **operadores relacionales** como `>`, `<`, `>=`, `<=`.

4. Ejecuta el programa y observa el informe impreso.

{{% /notice %}}

<iframe width="100%" height="475" src="https