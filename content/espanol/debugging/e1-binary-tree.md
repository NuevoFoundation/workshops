---
title: "Ejercicio 1 - Implementación de Árbol Binario"
difficulties: ["intermedio"]
weight: 9
draft: false
---

El árbol binario es una de las estructuras de datos más simples en ciencias de la computación, y las ideas que utiliza son muy útiles. Almacena datos ordenables y cuenta con un tiempo de ejecución óptimo de O(log n) para buscar, añadir y eliminar elementos. Sin embargo, este rendimiento depende en gran medida del orden en que se añaden o eliminan los elementos, lo que limita su uso a una discusión más académica.

## La Teoría

Un árbol binario consiste en muchos nodos que están vinculados entre sí. Cada nodo tiene un nodo padre, o su predecesor, y hasta dos nodos hijos. Un nodo que no tiene hijos se denomina hoja.

En un árbol binario **enraizado**, un nodo está especificado como raíz, lo que significa que no tiene padre. En el diagrama a continuación, el nodo A es el padre de los nodos B y C. Del mismo modo, B es el padre de D y E. A es la raíz, y D, E, F y G son hojas.

![Conceptos Básicos del Árbol Binario](../resources/e1-01.png "Gráfica de un árbol binario con etiquetas apuntando a la raíz, hojas, padre, y los hijos izquierdo y derecho.")

El árbol binario es una estructura de datos recursiva. Cada nodo puede contener de 0 a 2 hijos, y 1 padre. Podemos limitarnos a observar un subárbol específico del árbol binario original sin preocuparnos demasiado por el árbol completo, y ese subárbol es un árbol binario válido por sí solo.

### Usando el Árbol Binario

Podemos utilizar un árbol binario para almacenar información sobre el orden de una lista. Cada nodo puede almacenar un valor, y sus hijos deben estar ordenados de la siguiente manera:
- El hijo izquierdo debe tener un valor menor que su padre.
- El hijo derecho debe tener un valor mayor que su padre.
- Los valores duplicados pueden almacenarse a la izquierda o a la derecha; sin embargo, es importante asegurarse de que los duplicados se almacenen de manera consistente. Así que, si los duplicados se almacenan a la izquierda, solo se almacenan a la izquierda, y lo mismo ocurre para la derecha.

El siguiente diagrama muestra un ejemplo de un árbol binario. Observa que los hijos izquierdos son más pequeños que su padre, mientras que los hijos derechos son más grandes. Además de esta propiedad de orden del árbol, se puede notar que no hay un requisito estricto sobre la forma del árbol.

![Ejemplo de Árbol Binario 1](../resources/e1-02.png "Un ejemplo de un árbol binario donde los hijos izquierdos son más pequeños que su padre, mientras que los hijos derechos son más grandes.")

### Añadiendo Elementos al Árbol Binario

Para añadir un elemento, necesitamos encontrar dónde encaja en el árbol. Para hacerlo, realizaremos un **recorrido del árbol**. La idea es movernos de nodo en nodo hasta encontrar un "lugar" para el elemento que queremos añadir. Primero, comenzamos en la raíz. Luego, comparamos el valor en la raíz con el elemento para agregar. Si el elemento es mayor, nos movemos al hijo derecho. De lo contrario, nos movemos al izquierdo.

Podemos repetir este proceso, hasta encontrar un nodo que pueda ser el padre del nuevo elemento. El siguiente diagrama ilustra cómo añadir el número 7 a un árbol binario.

![Añadir a un Árbol Binario](../resources/e1-03.png "Diagrama que ilustra el proceso de añadir el número 7 a un árbol binario.")

1. En el paso 1 (azul), comparamos `10` y `7`. Como `7 < 10`, procedemos hacia el hijo izquierdo.
2. En el paso 2 (verde), comparamos `5` y `7`. Como `7 > 5`, procedemos hacia su hijo derecho, solo para descubrir que ¡`5` no tiene un hijo derecho! Por lo tanto, podemos insertar `7` en ese lugar.

### Eliminando Elementos del Árbol Binario

Para eliminar un elemento, es un poco más complicado. Primero necesitamos encontrar el elemento que vamos a eliminar. Sin embargo, una vez que lo eliminemos, tendremos que llenar el "hueco" que hemos creado en el árbol. No podemos simplemente rellenar el hueco con cualquier elemento; necesitamos mantener la propiedad de orden del árbol binario. Un elemento conveniente para tomar es el elemento más profundo y más a la izquierda del subárbol derecho del hueco.

El siguiente diagrama muestra cómo eliminar elementos en diversos casos. Las líneas punteadas indican que la conexión puede o no puede existir. Por ejemplo, en el caso 2, el nodo padre azul podría no existir si el nodo a eliminar es la raíz del árbol.
- En el primer caso, el nodo no tiene hijos: podemos eliminarlo de manera segura sin problemas.
- En el segundo caso, el nodo tiene 1 hijo a la izquierda o a la derecha. Podemos mover al hijo para ocupar el lugar del nodo eliminado. Esto funciona tanto para el lado izquierdo como para el derecho.
- En el tercer caso, el nodo tiene 2 hijos. Hay varias formas de hacer esto, pero la que usaremos es tomar el elemento más pequeño del subárbol derecho e insertarlo en el "hueco" que hemos creado. Si ese elemento tiene un hijo derecho (el nodo verde), necesitamos mover ese nodo hacia arriba, para que su antiguo padre (nodo naranja) se convierta en el padre de ese hijo.

![Eliminación en Árbol Binario](../resources/e1-04.png "Diagrama que ilustra los 3 casos de eliminación de un elemento de un árbol binario.")

El tercer caso es complicado de implementar correctamente debido a la cantidad de casos límite que existen. Por ejemplo, el valor más pequeño del subárbol derecho podría ser el hijo derecho en sí. O, el nodo mínimo podría no contener ningún hijo derecho.

## La Implementación

En el equipo de Nuevo, hemos creado una implementación para el árbol binario. Sin embargo, el programador fue descuidado y no revisó su trabajo, ¡así que hay errores y fallos! Para este ejercicio, tú debes corregir esos errores y fallos. **Tu objetivo es conseguir que todas las pruebas sean exitosas.**

* Para depurar el código, puedes usar el comando `make debug`. Esto regenerará los archivos de depuración necesarios en el directorio `debug/` y ejecutará `gdb` por ti.
* Para usar `valgrind`, puedes ejecutar el comando `make valgrind`. Esto recompilará tu código y ejecutará `valgrind` con los argumentos apropiados.
* Para probar el código, puedes hacer clic en el botón verde "run", o usar el comando `make test`.

Veamos qué está haciendo el código existente. Primero, la estructura de datos del árbol binario está definida en el archivo `binary_tree.h`. Se