---
title: "Operadores"
description: "Introduccíon de operadores y cómo realizar operaciones con variables en Java."
date: 2020-07-13T00:00:00Z
weight: 4
---

### 1. Matemática : Operadores de Artimétic
En el último ejercicio, aprendimos sobre distintos tipos de variables y cómo podemos aignarles un valor. Por ejemplo:

```java
int age = 3;  // declara la variable age de type int con valor de 3
age = 4;      // asingnale el valor de 4 a la variable age
```

El código de arriba le suma 1 a la variable `age`. 

Y en Java, podemos realizar operaciones matemáticas directamente en las variables y con los siguientes <b>opereadores aritméticos</b>: `+`, `-`, `*`, `/`, `%`.
Por ejemplo, podemos usar el operator de suma `+` para sumarle 1 a la variable `age`:
```java
int age = 3;  // declara la variable age de type int con valor de 3
age = age + 1;// suma 1 a la variable age
```
{{% notice note %}}
Lista de operadores de aritmética en Java:

- `+`: suma.

- `-`: resta. 

- `*`: multiplicación.

- `/`: (regural) división. <b>Note</b>: `10 / 4` resulta 2, en vez de 2.5 ya que se descarta el resto de la división.

- `%`: modulo. <b>Note</b>: `10 / 4` resulta 2. Esta operación resulta en el resto de una división.
{{% /notice %}}

{{% notice tip %}}
Suma (`+`) se usa en String como uno operador de unificación. Por ejemplo:

`String name = "Patric" + "k";` es igual que `String name = "Patrick";`
{{% /notice %}}

### 2. Comparación: Operador Relacional
Ahora vamos aprender como compara números. Para eso necesitaremos el <b>operador relacional</b>.

Al igual que en matemáticas, podemos comparar variables usando estos operadores `>`, `<`, `>=`, `<=`. Por ejemplo: `(3 > 2)` resulta en el valor `true`, un valor boolean.

{{% notice note %}}
Estos son los operadores relacionale en Java:

- `==`: igual a. (i.e. `(3 == 3)` is `true`)

- `!=`: no igual a. (i.e. `(3 != 3)` is `false`)

- `>`: mayor a.

- `<`: menor a.

- `>=`: mayor a o igual a.

- `<=`: menor a o igual a.

Note: puedes usar  `==` y `!=` en dos variables con data del mismo tipo.
{{% /notice %}}

### 3. Examen de estadística
Patrick 🐥 y 4 alumnos acaban de tener un examen de música. Los resultados de sus exámenes: Patrick(88), Tom(89), Mary(95), Chris(84), Jen(92).

Queremos producir un reporte de estádisticas de la clase de música. 

Este reporte contiene los resultados de cada estudiante, el promedio de la clase, y si el promedio de la clase está sobre 60, 70, 80, 90 (`true` or `false`):
```
---------------------------
     Music Grade Report    
---------------------------

Student Grades:          
- Patrick: ...
- Tom: ...
...

Class Average: ...
- Average Over 60: ...
- Average Over 70: ...
- Average Over 80: ...
- Average Over 90: ...
```
Ahora vamos a escribir el programa usando operadores relacionales 🎵

{{% notice note %}}
#### Instrucciones:

1. Identifique todas las variables en las declaraciones de <b>print</b> y declaralas empezando en la línea 12 con el  valor y tipo de data correcto. (Note que hay 10 variables en total, y la variable `average` ya ha sido declarada).
   Hint: Por ejemplo, la variable `patrickGrade` debería ser declarada y asignada en la línea 13 como `int patrickGrade = 88;`.

2. Calcule el promedio correcto para la clase y asignale el valor a la variable `average` usando <b>operadores aritméticos</b> como `+`, `-`, `*`, `/`, `%`.

   Note que el promedio es `(total points)`/`(number of students)`.

3. Asigna las variables `over60`, `over70`, `over80`, `over90` con los valores correctos usando <b>operadores relacionales</b> como `>`, `<`, `>=`, `<=`.

4. Ejecuta el código de tu programa y be el reported impreso.

{{% /notice %}}

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/JavaBasicosOperators?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
