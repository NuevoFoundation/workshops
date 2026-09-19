---
title: "Introducción"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://youtube.com/embed/DZkUUk64mWM" title="Introducción - video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## ¿Qué es un Array 2D?

Ya hemos aprendido mucho sobre arrays. Sabemos que un array puede contener muchos tipos diferentes (enteros, cadenas, dobles, etc.), pero ¿qué pasa con un array que contiene otros arrays?

![imagen](../img/2darray.png)

Un array 2D tiene un tipo como `int[][]` o `String[][]`, con dos pares de corchetes. Los elementos de un array 2D están organizados en filas y columnas, y el operador `new` para arrays 2D especifica tanto el número de filas como el número de columnas. Por ejemplo,

```js javascript
int[][] A;
A = new int[3][4];
```

Esto crea un array 2D de tipo `int` que tiene 12 elementos organizados en 3 filas y 4 columnas. También existen inicializadores para arrays 2D. Por ejemplo, esta declaración crea el array de 3 por 4 que se muestra en la imagen de abajo:


```js javascript
int[][] A = {    
                {  1,  0, 12, -1 },
                {  7, -3,  2,  5 },
                { -5, -2,  2, -9 }
            };
```

Un inicializador de array para un array 2D incluye las filas de `A`, separadas por comas y encerradas entre llaves. Cada fila, a su vez, es una lista de valores separados por comas y encerrados entre llaves. También existen literales de arrays 2D con una sintaxis similar que pueden usarse en cualquier lugar, no solo en declaraciones. Por ejemplo,

```js javascript
A = new int[][] { 
                    {  1,  0, 12, -1 },
                    {  7, -3,  2,  5 },
                    { -5, -2,  2, -9 }
                };
```
                  
Todo esto se extiende naturalmente a arrays tridimensionales, cuatridimensionales e incluso de dimensiones superiores.