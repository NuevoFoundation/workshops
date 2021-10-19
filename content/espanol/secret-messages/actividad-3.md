---
title: "Actividad 3 - Ciclos"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

¡Genial! 

El rey nos ha pedido que escribamos letra por letra el nombre del destinatario para luego poder cambiarlas mediante alguna forma y así hacer secreto nuestro mensaje.

Para hacer esto tenemos que usar **CICLOS** (o loops en inglés). Un ciclo ejecuta un grupo de instrucciones varias veces. Veamos este ejemplo donde imprimimos números:

```
for(int i=0; i<3; i++){
  cout << i << endl;
}
```
Intentemos entender lo que hace ese código:

{{% notice tip %}}


### Ciclos

 `for(int i=0; i<3; i++) { }`. 
Esta línea le dice al programa que las instrucciones que están dentro de sus llaves `{ }` deben correrse dentro de un ciclo. 
Podemos diferenciar 3 partes dentro de los paréntesis: 
1. `int i=0;` está declarando una variable del tipo `int` (numero entero) llamada `i` y esta inicializada en 0. Esta variable llevará la cuenta de cuántas veces hemos recorrido el ciclo.
2. `i<3;` es la condición que se tiene que cumplir para que el ciclo se siga repitiendo. Entonces, mientras la variable `i` sea menor a 3 (`<`), el ciclo se repetirá.
3. `i++` le suma 1 a la variable `i` cada vez que el ciclo termina.  

{{% /notice %}}

Una propiedad que tienen las variables **strings**, es que podemos acceder a cada carácter que lo compone y a la cantidad de estos.

{{% notice tip %}}

### Acceder a cada carácter de un string

Cada carácter de una variable string, es un char.
Podemos acceder a cada char de un string mediante el número de su posición dentro del string.
Imaginémoslo como una fila de caracteres.
El primer carácter va a ser el número 0, el que le sigue el 1, el que le sigue el 2, y así sucesivamente.

Entonces, para acceder a cada uno de ellos, debemos usar esta instrucción:

```
string palabra = "hola";
char letra = palabra[0];
cout << "La primera letra es: " << letra << endl;
```
Esto imprimirá: 
```
La primera letra es: h
```

Para obtener un caracter, debemos usar el nombre de la variable seguidas de corchetes `[ ]`, y dentro de ellos, la posición de la letra que queremos.

### Tamaño de un string

Además de poder acceder a cada caracter de un string, con la siguiente instrucción podemos saber cuál es la cantidad de caracteres que tiene.

```
string palabra = "hola";
int tamaño = palabra.size();
cout << "El tamaño es: " << tamaño << endl;
```
Imprimirá: 
```
El tamaño es: 4
```
Debemos escribir el nombre de la variable, seguidos de ` .size()` para obtener el tamaño. Esto devolverá un número entero, por lo que lo podemos guardar en una variable del tipo int.

{{% /notice %}}

Bueno, ahora tomemos el código que teníamos y modifiquémoslo un poco para imprimir cada letra del nombre en vez de un "Hola" y el nombre.

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/actividad-3?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

