---
title: "Data Structures (Array & ArrayList)"
description: "Introduce basic data structures in Java."
date: 2020-07-16T00:00:00Z
weight: 8
---
En los últimos ejercisios, aprendimos sobre varilables que nos permiten accesar y guardar un pedazo de data. Pero, y si quereos guardar mucha data parecida? Habrá una manera buena de organizarlas sin declarar multiples variables?

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
#### Por qué el índice de un array cominezo en 0?
Es razonable pensar que para accesar el primer espacio de un array, usaríamos un índice 1.

Sin embargo, cuando la computadora lee `arr[1]`, no piensa en ver el `1er` espacio de `arr`. 

En realidad, de la manera que la computadora lo piensa es `arr[1]` significa ver el espacio a `1` distancia del principo del array.

En otras palabras, el índice de hecho es desplazamiento de memoria. Para accesar el primer elemento debemos conseguir el elemento que está a una distancia de `0` desde el principio del array (i.e. `arr[0]`).
{{% /notice %}}

{{% notice tip %}}
#### Una alternativa para crear un array:
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

Es útil saber cuantos espaciosa habrán en un array luego de crearse (to access the last element in the array for example). And, we can get the number of elements in the array from the `length` field of the array, typing `array_name.length`. 

For example:
```java
int numOfMovie = topMovies.length; // numOfMovie has value 5
```
<br />

#### Exercise: Write a method `printArr()` that takes an array input and prints out all the elements in that array in order 
(Hint: utilize for loop and `.length` to help you).

After clicking `Run`, the program should print the following:
```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsArray?lite=true#Bird.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### 2. ArrayList
ArrayList is another popular data structure in Java. `ArrayList` is a class that was implemented using arrays. It is similiar to an array that user access, store, and modify data by an index.

You create an ArrayList by specifying a name and the type between `<` and `>`. 
For example:
```java
ArrayList<String> topMoviesList = new ArrayList<String>();
```

To add elements, we call the method `add()` on the ArrayList. 
For example:
```java
topMoviesList.add("Birds Of Prey");
topMoviesList.add("The Birds");
topMoviesList.add("Angry Birds");
topMoviesList.add("Bird Box");
topMoviesList.add("The Secret Life of Pets");
// the ArrayList now store "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets" in order
```

To access an element at a particular index, we call the method `get()`. Note that Java use 0-based indexing, so to get the first element in an ArrayList we make a method call `get(0)`. For example:
```java
String movie1 = topMoviesList.get(0); // movie1 has value "Birds Of Prey"
```

And, to get the number of elements in the ArrayList, we call the method `size()`.
For example:
```java
int numOfMovie2 = topMoviesList.size(); // numOfMovie2 has value 5
```
<br />

As we briefly mentioned above, the critical difference between array and ArrayList is that you need to know number of elements to store in an array upfront, but you do not for an ArrayList.

- With the line of code `String topMovies[] = new String[5]` the array `topMovies` will forever have length 5. As a result, you can't store more than 5 Strings in `topMovies` after creating it.

- However, with the line of code `ArrayList<String> topMoviesList = new ArrayList<String>()`, the ArrayList starts with 0 element and can be infinitely added to or remove from.

To remove an element from an ArrayList, we call the method `remove()`. 
For example:
```java
System.out.print(topMoviesList.size()); // prints out 5
topMoviesList.remove("Birds Of Prey");
System.out.print(topMoviesList.size()); // prints out 4
```
<br />

#### Exercise: Write a method `printList()` that takes an ArrayList as input and prints out all the elements in that ArrayList in order 
(Hint: utilize for loop and `size()` to help you).

After clicking `Run`, the program should print the following:
```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsList?lite=true#Bird.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### End Of Workshop 🐥 
<b>Patrick</b> 🐥 thank you for participating! Hope you learned a lot from this course :)
![animation of duck Patrick](https://media.giphy.com/media/l49JKwmJLChtS6d44/giphy.gif) 

<p style="text-align: center;">(image created by Molang: giphy.com/molangofficialpage)</p>
