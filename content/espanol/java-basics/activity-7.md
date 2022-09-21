---
title: "Data Structures (Array & ArrayList)"
description: "Introduce basic data structures in Java."
date: 2020-07-16T00:00:00Z
weight: 8
---
En los últimos ejercicios, aprendimos sobre varilables que nos permiten accesar y guardar un pedazo de data. Pero, y si quereos guardar mucha data parecida? Habrá una manera buena de organizarlas sin declarar multiples variables?

En programación, <b>estructuras de dato</b> son escructuras que permiten que programadores guarden multiples pedazos de data del mismo tipo. Usando estructuras de data es una manera eficiente de guardar y accesar pedazos grandes de data. En este ejercisio, aprederemos sobre 2 estructucas de data usadas en Java: <b>array</b> y <b>ArrayList</b>.

Mientras un array es un estructura de data de tamaño fijo, ArrayList es una estructura de data de tamaño variable donde uno puede cambiar el tamaño de la estructura de dato. 
Empecemos con arrays.

### 1. Array
Digamos que queremos guardar la 5 películas favoritas de Patrick 🐥. En vez de crear 5 variables, podemos guardar las 5 pedazos de data en una array, nuestra primera estructura de dato.

Para guardar data en un array, hacemos lo siguiente:

1. Primero declaramos un array especificando el tipo de data y su tamaño (cantidad de data que puede ser guardada).
```java
String topMovies[] = new String[5]; // crea un array de tipo Strings de tamaño 5.
```
2. Vamos a iterar por el array (pasar por todos sus espacios) y asignarlo un pedazo de data a cada espacio en el array. 

Note que tenemos acceso el espacio usando el nombre del array y una índice (`0` para accesar el primero espacio, `1` para el segundo ... ).
```java
topMovies[0] = "Birds Of Prey";
topMovies[1] = "The Birds";
topMovies[2] = "Angry Birds";
topMovies[3] = "Bird Box";
topMovies[4] = "The Secret Life of Pets";
// el array topMovies ahora guarda "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets" en ese orden
```
{{% notice info %}}
#### Por qué el índice de un array comineza en 0?
Es razonable pensar que para accesar el primer espacio de un array, usaríamos un índice 1.

Sin embargo, cuando la computadora lee `arr[1]`, no piensa en ver el `1er` espacio de `arr`. 

En realidad, de la manera que la computadora lo piensa es `arr[1]` significa ver el espacio a `1` distancia del principo del array.

En otras palabras, el índice de hecho es desplazamiento de memoria. Para accesar el primer elemento debemos conseguir el elemento que está a una distancia de `0` desde el principio del array (i.e. `arr[0]`).
{{% /notice %}}

{{% notice tip %}}
#### Alternativa para crear un array:
Si sabemos que todos los pedazos de data para un array de por adelantado, podemos crear un array en una línea al listar la data entre `{` y `}`. 

Por ejemplo:
```java
String topMovies[] = {"Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"};
```
Al giaul que podemos accesar la data con un índice, también podemos accesar y modificar cada pedazo de data con su índice correspondiente. 

Por ejemplo:
```java
String movie1 = topMovies[0]; // movie1 tiene el valor de "Birds Of Prey"
```
{{% /notice %}}

Es útil saber cuantos espacios habrán en un array luego de crearse (por ejemplo, para accesar el último espacio en un array). También podemos conseguir el número de espacios en un array con `length` al escribir `array_name.length`. 

Por ejemplo:
```java
int numOfMovie = topMovies.length; // numOfMovie tiene un valor de 5
```
<br />

#### Ejercicio: Esriber un método `printArr()` que tome un array como entrada e imprima todos los elementos en el array en orden 
(Sugerencia: Utilice un for loop y `.length`).

Luego de `Run`, su programa debe imprimir lo siguiente:
```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```
<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/JavaBasicosArray?lite=true#Bird.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### 2. ArrayList
ArrayList es otra estructura e data popular en Java. `ArrayList` es una clase que fue implementada usando arrays. Es similar a un array en cuanto a que un usuario puede accesar, guardar y modificar data usando un índice.

Creas un ArrayList especificando su nombre y tipo entre `<` y `>`. 
Por ejemplo:
```java
ArrayList<String> topMoviesList = new ArrayList<String>();
```

Para añadir elementos nuevos, llamamos al método `add()` en el ArrayList. 
Por ejemplo:
```java
topMoviesList.add("Birds Of Prey");
topMoviesList.add("The Birds");
topMoviesList.add("Angry Birds");
topMoviesList.add("Bird Box");
topMoviesList.add("The Secret Life of Pets");
// el ArrayList ahora guarda "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets" en orden
```

Para accesar un espacio en específico, llamamos el método `get()`. Note Java usa índices empezando en el número 0, asi que para accesr el primer elemento en un ArrayList llamamos el método `get(0)`. Por ejemplo:
```java
String movie1 = topMoviesList.get(0); // movie1 tiene el valor "Birds Of Prey"
```

Y para conseguir el número de elementos (espacios) en un ArrayList, llamamos el método `size()`.
For example:
```java
int numOfMovie2 = topMoviesList.size(); // numOfMovie2 tiene el valor 5
```
<br />

La diferencia más importante entre array y ArrayList es que necesitas saber el número de espacios que vas a necesitar para un array desde el principio antes de crearse, pero no para un ArrayList.

- Con la línea de código `String topMovies[] = new String[5]` el array `topMovies` siempre tendrá un tamaño de 5. No puedes guardar más de 5 Strings en `topMovies` luego de crearse.

- Sin embargo, con la línea de código `ArrayList<String> topMoviesList = new ArrayList<String>()`, el ArrayList empieza con 0 elementos a la cual se le puede añadir infinitamente o remover elementos del mismo.

Para remover un elemento de un ArrayList, llamamos el método `remove()`. 
Por ejemplo:
```java
System.out.print(topMoviesList.size()); // imprime 5
topMoviesList.remove("Birds Of Prey");
System.out.print(topMoviesList.size()); // imprime 4
```
<br />

#### Ejercicio: Escriba un método `printList()` que tome un ArrayList como entrada e imprime todos los elementos del ArryList en orden 
(Hint: Utilize for loop y `size()`).

Luego de `Run`, el programa debe imprimir lo siguiente:
```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```
<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/JavaBasicosList?lite=true#Bird.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Fin del Workshop 🐥 
<b>Patrick</b> 🐥 gracias por participar. Esperamos que hayas aprendido mucho en este curso :)
![animation of duck Patrick](https://media.giphy.com/media/l49JKwmJLChtS6d44/giphy.gif) 

<p style="text-align: center;">(image created by Molang: giphy.com/molangofficialpage)</p>
