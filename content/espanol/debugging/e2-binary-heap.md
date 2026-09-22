```markdown
---
title: "Ejercicio 2 - Implementación de Binary Heap"
difficulties: ["intermedio"]
weight: 10
draft: false
---

Un binary heap es una estructura de datos importante que se utiliza con mayor frecuencia para implementar un tipo de datos llamado cola de prioridad. También se utiliza conceptualmente en el algoritmo de ordenamiento llamado heapsort. Su característica distintiva es su consulta de `O(1)` para el valor más grande o más pequeño dentro de sus contenidos, dependiendo del tipo de heap del que estemos hablando.

## La Teoría

El binary heap es conceptualmente un árbol binario completo. Esto significa que los nodos se agregan al árbol en orden de nivel, y la profundidad del árbol aumenta solo cuando no hay espacio en el nivel más profundo del árbol.

Además de esta restricción estructural, sigue la propiedad del orden de heaps: los hijos de un nodo deben tener un valor mayor o menor que el propio nodo. En un **min-heap**, los hijos deben ser mayores. En un **max-heap**, los hijos deben ser menores. Efectivamente, esto significa que la raíz debe contener el elemento más grande en el heap.

A continuación, se muestra un ejemplo de un binary heap máximo, que es el tipo de heap en el que nos centraremos en este ejercicio.

![Ejemplo de Binary Heap](../resources/e2-01.png "Ejemplo de binary heap máximo")

Se puede observar que cada nodo tiene 2 o ningún hijo, excepto el nodo más a la derecha. Los nodos se llenan de izquierda a derecha antes de comenzar una nueva fila. Todos los hijos son menores que su padre.

{{% notice note %}}
Los duplicados se manejan fácilmente en este esquema. Necesitaríamos mantener que todos los hijos sean menores *o iguales* que su padre.
{{% /notice %}}

Podemos usar un arreglo para representar esta estructura de datos. Un nodo i se puede acceder mediante su índice, i. Para acceder a su hijo izquierdo, se multiplica por 2. Para acceder a su hijo derecho, se multiplica por 2 y se le suma 1. El siguiente diagrama ilustra esto:

![Array de Binary Heap](../resources/e2-02.png "Imagen de un binary heap y su arreglo correspondiente")

### Agregar a un binary heap

Para agregar un elemento, primero lo colocamos en el siguiente lugar disponible. Luego, retroactivamente "reparamos" cualquier problema causado por esto deslizando hacia arriba y intercambiando nodos hasta que alcance una posición estable, es decir, su padre es mayor o igual que él.

El siguiente diagrama ilustra este proceso para agregar `34` al binary heap del ejemplo.
1. Insertamos `34` en el último espacio de forma provisional (círculo verde, paso 1).
2. Luego comparamos con su padre (flecha azul), y encontramos que `34 > 19`. Por lo tanto, intercambiamos los dos nodos.
3. En el paso 2, comparamos con `85`, y encontramos que `34 < 85`, lo que indica que hemos terminado.

![Agregar a Binary Heap](../resources/e2-03.png "Ilustración del proceso de agregar a un binary heap")

### Eliminar el Máximo del Heap

Un binary heap máximo también necesita soportar `removeMax`, que elimina el elemento más grande en el heap. Afortunadamente, el elemento más grande es simplemente la raíz. Sin embargo, necesitamos reparar los problemas causados por este nuevo agujero que hemos creado.

Para llenar ese agujero, tomamos el último elemento y lo colocamos en el lugar superior. Al igual que antes, retroactivamente "reparamos" cualquier problema que esto ocasione. Repetidamente realizamos intercambios hacia abajo con el hijo menor hasta que alcance una posición estable en el heap.

El siguiente diagrama muestra cómo ocurre una eliminación máxima.
1. La raíz se elimina y se reemplaza con el elemento más a la derecha en la fila inferior.
2. En el paso 1, comparamos `19` y `42`. Dado que `42` es el mayor de los dos, comparamos `12` y `42` (flecha azul) y encontramos que `12 < 42`. Por lo tanto, intercambiamos `12` con `42`.
3. Repetimos el proceso para el paso 2. Encontramos que `28` es el mayor de los dos hijos, y dado que `12 < 28` intercambiamos nuevamente.
4. Finalmente alcanzamos una posición estable en el paso 3.

![Eliminar de Binary Heap](../resources/e2-04.png "Ilustración del proceso de eliminar el máximo de un binary heap")

## La Implementación

En nuestra implementación, comenzamos indexando desde `1` para ahorrar un poco de cálculo. Así que la raíz del binary heap se encuentra en `heap.__arr[1]` en lugar de en `heap.__arr[0]`. Todas las funciones tienen comentarios sobre su función en `binary_heap.h`.

La implementación **será** probada con duplicados, así que asegúrate de manejarlos. Además, mientras el heap está en tamaño fijo, los datos se almacenan en el heap. Asegúrate de que los datos sean liberados con `free`.

{{% notice tip %}}
Las funciones `createHeap` y `heapPrint` ya han sido probadas y se ha verificado que funcionan.
{{% /notice %}}

Tu objetivo es ejecutar `make test` y no tener errores. Usa cualquier herramienta, como `gdb`, `valgrind`, etc., para tu ventaja. ¡Buena suerte!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-2" target="_blank">Lanzar Replit</a>
```