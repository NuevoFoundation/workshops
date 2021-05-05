---
title: "Métodos"
description: "Introducción a métodos en Java."
date: 2020-07-13T00:00:00Z
weight: 6
---

### 1. Qué Son Métodos?
Ya aprendimos como guardar data en variables, imprimir data, imprimir oraciones, y como tomar decisiones con los if-statement, for-loop, y while-loop. 

En nuestro último ejemplo, aprendimos que el siguiente código calcula la suma del 1 al 100:
```java
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
System.out.println("Sum: " + total);
```
Pero si en vez queremos calcular la suma del 1 al 77? Cómo podemos lograr eso sin tener que reescribir el mismo código?

Queremos crear un ✨ magic box ✨ en el código sin importar para qué dos números queremos para la suma.
<img src="../images/method.png" height="250"/> 

En Java, un <b>method</b> es como un magic box que ejecuta ciertos pasos al ejecutar un código usando los valores que ingrese un usuario.

Hay 2 partes en un method: header y body:

{{% notice note %}}
#### Method Header
Para definir un method, primero escribimos el <b>method header</b>. Un method header tiene cuatro partes:

1. <b>access specifier</b>. `public` le deja saber a la computadora que cualquira puede usar ese method. `private` si solamente se puede accesar dentro de la misma clase donde se declara.

2. <b>return type</b>. `void` significa que el método no retorna nada.

3. <b>method name</b>. 

4. <b>list of parameters</b>/ formate de input del usuario (`type` `input name`, `type` `input name`, ... ).

```
// an example
public void sing (String songName)
   1.    2.   3.        4.
```
<br />

#### Method Body
Ahora ponemos el bloque de código asociado con el método en el <b>method body</b>, que es entre medio de `{` and `}` después del method header.

Para retornar data, usamos la palabra clave `return` seguida por la variable name o un valor para ser retornado. 

Esto es un ejemplo de como definir un método que suma números del `numA` al `numB`:
```java
/* Method Name: sumNum
 * Input/Parameter: 2 numbers of type int
 * Funtionality: return the sum from numA through numB
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // accesamos la primera entrada llamada numA  
    while(num <= numB){  // accesamos la primera entrada llamada numB
        total = total + num;
        num = num + 1;
    }
    return total; // valor de la variable llamada total
}
```
<br />

#### Method Call
Por último, para ejecutar un método in tu código, tenemos que asegura llamar el método via un <b>method call</b>. Lo gramos este escribiendo el nombré del método con las entrada requeridas. Por ejemplo:

```java
sumNum(1, 3); // una línea que llama el método sumNum() resultando en el valor de  6
```
Knowing `sumNum(1, 3)` returns an `int` with the sum from 1 to 3, we can do the following to store the value:
```java
int sum1to3 = sumNum(1, 3); 
```
{{% /notice %}}

### 2. Count the Pyramid!🔺
<img src="../images/pyramid.png" height="250"/> 
<p style="text-align: center;">(photo credit: aliexpress.com/item/32306945847.html)</p>

The above is an image of square-number pyramid where each level is a perfect square of the number of current level counting from the top. 

That is the top level has `1 * 1` bead, the 2nd level has `2 * 2` beads.

<br />
Let's write a method that takes in the number of total levels and output the total number of beads in the pyramid!

Once you solved the challenge, you will see the following message:
```
Congratulations! Challenge Solved!
```

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsPyramid?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
