---
title: "Actividad 6 - Funciones"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

¡Muy bien! 

¡Ya hiciste gran parte del programa!

En esta actividad vamos a utilizar las **funciones** para agrupar partes del código.

{{% notice tip %}}

### Funciones

Las funciones nos permiten dividir el trabajo que hace un programa en tareas más pequeñas separadas de la parte principal, es decir, de la función main.

Podemos entender a las funciones como una máquina que  cuando la prendemos, ejecuta unas instrucciones y procesos, que me devuelven un resultado final. Se pueden tener varias máquinas que realizan distintos procesos, e identificamos a cada una con el tipo de resultado que devuelve y un nombre.

En esta actividad usaremos las funciones tipo **void** (vacío), que no devuelven nada, sino que solo procesan instrucciones.

Para declarar (crear) una función, debemos usar la siguiente estructura **fuera de la función main**:
```
void nombre_funcion(){
    //Acá va el código
}
```
En este código podemos distinguir:
1. El tipo de variable. Primero que todo debemos indicar qué devolverá la función. En este caso es `void` por lo que no devolverá nada.
2. El nombre que queremos darle a la función. En el ejemplo es: `nombre_funcion`.
3. Los paréntesis `()` que se añaden al nombre para identificar que es una función.
4. Las llaves `{}` que determinan el bloque de código que ejecutará la función.

### Llamar a una función

Como dijimos, las funciones van fuera de la función `main()`. Por lo tanto, cuando apretemos **Run**, el bloque de código de las funciones no se ejecutarán. Por eso, dentro de la función `main()` debemos **llamar** a la función. Debemos indicarle al programa cuando queremos que se ejecute ese bloque de código.
Para llamar a una función, debemos usar la siguiente instrucción:
```
nombre_funcion();
```
Solo debemos escribir el nombre que le dimos a la función, seguidos de los paréntesis, y por supuesto un punto y coma `;`
Esto hará que se ejecuten las instrucciones que están dentro de la función `nombre_funcion()`.

### Parámetros de una función

Cuando declaramos una función, le podemos pasar **parámetros**. Estas son variables que le damos a la función para usar, porque, la función al no estar en la función **main**, no puede acceder a las variables que declaramos allí. 
Los parámetros van dentro de los paréntesis de la función.
Ejemplo:
```
void nombre_funcion(int suma, int &numero){
    numero += suma;
}
```
Y en la función **main** deberíamos tener lo siguiente:
```
int main(){
    int x = 25;
    int y = 5;
    nombre_funcion(y, x);
}
```
Entendamos en detalle lo que hicimos:
1. En la función, escribimos dentro de los paréntesis que variables le vamos a pasar. Luego, dentro de la función podemos usar esas variables.
2. En main, teníamos dos variables ya declaradas, que luego le pasamos como parámetro a la función creada. Al hacer esto, la variable `suma` se iguala a la variable `y`.
La variable `numero` tiene este símbolo adelante `&`. Esto significa que si modificamos la variable `numero` dentro de la función, también se modificará la variable que le pasemos en la función main. Es decir, la variable `x` será modificada por la función ya que la pasamos **por referencia** al escribir ese símbolo delante. Cuando no ponemos este símbolo, aunque modifiquemos su valor en la función, en **main** no veremos ese cambio.
{{% /notice %}}

¡Genial!
Vamos a crear 2 funciones. Una para encriptar el mensaje, y la otra para desencriptarlo.
Para esto, vamos a usar código que ya teníamos, y programaremos algo nuevo también.

1. Declara una función void, igual que la de encriptar, pero para desencriptar el nombre.

2. Copia el contenido de la función encriptar() en la nueva función.

3. En la variable suma, en vez de sumar, realiza una resta del carácter del nombre y del carácter de la palabra clave, y suma una letra 'a' (no resta) para que el carácter final sea una letra del abecedario y no cualquier carácter.

4. Cambia la condición para dar vuelta en el abecedario. En vez de ver si la suma es mayor al carácter 'z', escribe si la suma es menor a 'a', y luego si se cumple esa condición, suma 25 a la variable suma (no resta).

5. En la función main, llama a la función correspondiente en la condición si es para encriptar o desencriptar un mensaje.

Cuando termines, puedes apretar **Run** y probar con los siguientes ejemplos:
```
programador
1
reina
```
```
witvczxipigrmg
2
reina
```
¡También inventa tus propias palabras secretas!

{{< alert theme="warning" >}}**Ten cuidado**, en este programa siempre debemos escribir los strings y caracteres en **letra minúscula**.  {{< /alert >}}

Recuerda que siempre puedes volver a las actividades anteriores para recordar algo.


<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/actividad-6?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{< alert theme="danger" >}}**Cuidado**. Para pegar algo en la consola, haz click derecho pegar. De otra forma puede no funcionar. {{< /alert >}}

