---
title: "Variables and Types"
description: "Introducción a types y variables en Java."
date: 2020-07-08T00:00:00Z
weight: 3
---

### 1. Variables: Define el nombre
En el último ejercicio, aprendimos como imprimir distintas delcaraciones con el método `System.out.print()`. 

Está genial saber como imprimir números y oraciones. Pero todavía no les hemos dado un significado más profundo.

En Java, ahora vamos a introducir el concepto de una <b>variable</b>. Una variable es como una caja donde guardas un pedazo de data o información con un nombre.

Por ejemplo, puede haber una variable llamada  `myName` que guarda la información `"Patrick"`, y otra variable llamada `loveMusic` que guarda el valor de `true`, y otra variable llamada `age` que guarda el valor `3`. Como puedes ver en la siguiente imagen:

<img src="../images/variable.png" height="200"/> 

### 2. Tipos de variables

Entonces, cómo podemos crear estas cajas o variables en Java para guardar data?

Antes de aprender cómo, tenemos que aprender sobre el concepto de un <b>type</b> en Java. Cada variable tiene su propio type que especifica el tipo de data que se puede guardar en esa variable.

Por ejemplo, la variable llamada `age` guarda el número `3` debería contener <b>integers</b>, y no oraciones ni símbolos. 

Cuando usamos Java, para que una variable pueda guardar números enteros, la variable tiene que ser type <b>int</b>. Así podemos declarar una variable `int` llamada `age` con data `3` para guardar, con la siguiente línea the código:
```java
int age = 3;
```

Por lo general, para declarar una variable, se utiliza el siguiente formato: `[data type] [variable name] = [data];`.
{{% notice note %}}
Los siguientes son distintos tipos de variables ya disponibles en Java:

- `int` type: un número entero (i.e. `20`, `30`, `35`).

- `char` type: un caracter, ya sea símbolo or letra individual del abecedario (i.e. `'A'`, `'b'`, `'('`, `']'`). 

- `String` type: una secuencia de caracteres de tipo `char` (i.e. `"Hello"`, `"Bonjour"`, `"Hola"`).

- `boolean` type: una variable que solo puede tener valor de cierto o falso `true` or `false`.

- `double` type: un número que puede guardar fraciones (i.e. `2.0`, `3.14`, `9.33`).
{{% /notice %}}

Repasemos las trés variables que aprendimos. 

<img src="../images/dataType.png" height="200"/> 

Para declarar estas variables en Java, escribimos lo siguiente:
```java
String name = "Patrick";
int age = 10;
boolean loveMusic = true;
```

### 3. Cuál es el Type o Tipo de variable -- Ayuda a Patrick
Patrick 🐥 no es un experto en tipos de data. Frecuentemente los confunde cuando intenta declarar una variable. Vamos a ayudarlo a corregir sus errores:
<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/JavaBasicosDataType?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% notice tip %}}
Luego de Guardar data en una variable, uno puede usar la data guardada en esa variable o modificarla al asignarle un nuevo valor del mismo tipo. Por ejemplo:

```java
int age = 10; // crea una variable age con el valor de 11
System.out.println(age); // imprime 10
age = 11; // asigna el valor de 11 a la variable age
System.out.println(age); // imprime 11
```
{{% /notice %}}

### 4. Cuál es el Tipo -- Imrpime los Valores 
Primero considera el siguiente código. Qué crees que será su resultado? Imprime los valores de cada variable 

```java
double x = 2.3;
double y = 10.0;
int z = 4;

x = y;
y = x;
z = 0;
z = z;
System.out.println("x: " + x + " y: " + y + " z: " + z );
```
<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/JavaBasicosVariable?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
