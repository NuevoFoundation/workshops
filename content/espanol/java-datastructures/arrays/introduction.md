---
title: "Introducción"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 1
---

Los arreglos son una estructura de datos donde cada uno de sus elementos se organiza en una secuencia numérica y cada elemento se referencia por su número de posición. En Java, cada uno de estos elementos es de un solo tipo (`String`, `int`, `double`, etc.) y están indexados desde cero, lo que significa que el primer elemento en un arreglo comienza en `0`, el segundo elemento en `1`, y así sucesivamente.

![image](../img/array.png)

A continuación, se presentan algunos vocabularios importantes que necesitarás saber antes de hablar más sobre arreglos.

- El número de elementos en un arreglo se llama la **longitud** del arreglo.
- El tipo de los elementos individuales en un arreglo se llama el **tipo base** del arreglo.
- El número de posición de un elemento en un arreglo se llama el **índice** de ese elemento.

Para nuestro propósito, queremos crear un arreglo que pueda contener todos los diversos restaurantes en nuestra aplicación. Supongamos que nuestro programa necesitará procesar los nombres de mil restaurantes diferentes. Necesitaremos una manera de ordenar y manejar todos los datos. Sin una estructura de datos como un arreglo, tendríamos que resolver el problema creando mil variables diferentes, una para cada restaurante, y si quisiéramos hacer algo tan sencillo como, por ejemplo, imprimir los nombres de cada restaurante, tendríamos que escribir 1000 declaraciones `print`. Lograrlo sería un gran desafío.

Al contrario, los arreglos tienen la capacidad de permitirnos hacer las mismas acciones, pero en un solo paso. El arreglo es simplemente una sola variable, pero contiene los 1000 restaurantes dentro de ella.

![image](../img/array2.png)

La **longitud** del arreglo sería 1000, ya que hay 1000 nombres individuales. El **tipo base** del arreglo sería `String` porque los elementos en el arreglo son cadenas. El primer nombre estaría en el **índice** `0` del arreglo, el segundo nombre en el índice `1`, y así sucesivamente, hasta el milésimo nombre en el índice `999`.