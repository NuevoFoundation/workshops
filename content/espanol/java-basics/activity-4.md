---
title: "Control Structures"
description: "Introducción a if-else, for, y while loops en Java."
date: 2020-07-13T00:00:00Z
weight: 5
---

### 1. Tomanndo Una Decision: If-Statement
Patrick 🐥 es un pato muy cordial que le gusta saludar a todo el que conoce con "Good Morning," "Good Afternoon," o "Good Night" dependiendo del tiempo del día.

![animation of duck Patrick](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif) 
<p style="text-align: center;">(image by National Geographic: giphy.com/natgeochannel)</p>

Como aprendimos antes, podemos imprimir las siguientes oraciones:
```java
System.out.println("Good Morning");   // se dice entre 0:00 - 11:59
System.out.println("Good Afternoon"); // se dice entre 12:00 - 19:59
System.out.println("Good Night");     // se dice entre 20:00 - 23:59
```

Sin embargo, también sabemos que Patrick 🐥 solo puede decidir que decir dependiendo la hora.

En otras palabras, tenemos que escribir código que tome la decisión sobre que imprimir dependiendo la situación.

En Java, podemos tomar una decisión usando el <b>if statement</b> o <b>if...else statement</b>:

{{% notice note %}}
#### If Statement
```
if(boolean expression){
    statement(s)
}
```
Un <b>if statement</b> tiene la siguiente esctructura mostrada arriba. Este método ejecutará el código dentro del bloque solo si la expresión boolean iguala a `true`. Si no, el programa salta el bloque de código.

#### If-Else Statement
```
if(boolean expression){
    statement(s) A
}else{
    statement(s) B
}
```
Un <b>if-else statement</b> tiene la siguiente esctructura mostrada arriba. Este método ejecutará el código de `statement(s) A` del bloque solo si la expresión boolean iguala a `true`. Si no, el programa ejecutará el código de `statement(s) B` dentro del else-block.
#### Ejemplo
```java
boolean likeMusic = true;
if(likeMusic == true){
    System.out.println("I like Music");
}else{
    System.out.println("I don't like Music");
}
```
El código imprimirá `I like Music` (o 'me gusta la musica') porque la expresión boolean, `likeMusic == true`, es igual al valor de true.
{{% /notice %}}

Repasa el ejemplo de arriba, y toma una decisión si Patrick debe decir "Good Morning," "Good Afternoon," o "Good Night". 

Patrick debería decir "Good Morning" entre 0:00 - 11:59, "Good Afternoon" entre 12:00 - 19:59, y "Good Night" entre 20:00 - 23:59.

1. Tenemos la variable `currentHour` que guarda la hora actual. 
2. Llene la correcta `boolean expression A` y `boolean expression B` para completar su programa. 
3. Pruebe su resultado asignando la variable `currentHour` a un número entre 0 y 23:

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsIfStatement?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### 2. Repítalo de nuevo: For-Loop, While-Loop
En clase de matemáticas, la maestra de Patrick 🐥 le pregunta a la clase que solucione un problema, y tal vez Patrick necesite ayuda:

La maestra les pide que encuentren la suma de <b>sum of 1, 2, 3, ...., 100</b>. Es decir, que sumen <b>1 + 2 + 3 + 4 ... + 99 + 100</b>?

Meintras se puede usar la calculadora, eso tomaría demasiado tiempro. Por suerte, en Java, podemos facilmente calcular esta suma con solo 3 líneas de código usando un <b>for loop</b> o <b>while loop</b>.

{{% notice note %}}
<b>For loop</b> u <b>While loop</b> son estructuras de control en Java que te permitem ejecutar bloques de código multiples veces.

#### While Loop
```
while(boolean expression){
    statement(s)
}
```
`statement(s)` en el bloque de while serán ejecutados siempre y cuando el valor de el `boolean expression` sea true. 

El siguiente ejemplo imprime los números del 1 al 10:
```java
int number = 1;
while(number <= 10){
    System.out.println(number);
    number = number + 1;        // número incrementado por 1
}
```
En el while loop del ejemplo arriba, el programa imprimirá el valor de `number` e incrementa el valor de `number`. Este paso será ejecutado siempre y cuando la variable `number <= 10`, y en este caso el loop termina cuando `number` sea 11.
#### For Loop
```
for(initialization; termination condition; update statement){
    statement(s)
}
```
En un for loop, hay tres partes en el bloque de condiciones: `initialization`, `termination condition`, y `update statement`.
1. Cuando se ejecuta un for loop, el programa primero corre la parte de `initialization`. Un ejemplo es, `int number = 1`.
2. Luego, el programa chequea `termination condition`. Un ejemplo es `number <= 10`.
3. Si es igual a `true`, ejecuta los `statement(s)` y el `update statement` (un ejemplo es `number = number + 1`) después repite el paso 2.
   Si es `false`, se termina el for loop.

Lo siguiente es un ejemplo que imprime los números entre el 1 y el 10:
```java
for(int number = 1; number <= 10; number = number + 1){
    System.out.println(number);
}
```
{{% /notice %}}

Luego de aprender sobre el for loop y el while loop, vamos a ver si Patrick 🐥 puede calcular <b>1 + 2 + 3 + 4 ... + 99 + 100</b> fácilmente?

Ahora intenetemos lograr la sumatoria usando un while loop: 
1. Tenemos una variable llamada `total` que guarda el total de la sumatoria.
2. Tenemos una variable llamada `num` que guarda el próximo número que será sumado a `total`.
3. Declara un `boolean expression` e imprimelo dentro del while loop.

Luego de seguir estos pasos, terminamos con el siguiente código:
```java
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
System.out.println("Answer calculated in a while loop: " + total);
```
Pruebe esto presionando `Run` y escribe una versión del programa usando for loop que calcule lo mismo. Ambos programas deberían resultar en el mismo valor. 

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsForWhile?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
