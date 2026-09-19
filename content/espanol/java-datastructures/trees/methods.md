---
title: "Métodos"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 2
--- 

## Árboles Binarios

Los árboles son un tipo especial de estructura de datos porque están formados por una colección de nodos conectados mediante aristas. No existe un inicializador único para crear un nuevo árbol genérico como en las otras estructuras de datos que hemos explorado. Para simplificar las cosas, nos centraremos específicamente en los **Árboles Binarios**, que son un tipo específico de árbol con reglas estrictas sobre dónde debe ubicarse cada nodo.

Las reglas para un árbol binario son:
* cada nodo tiene exactamente dos aristas: un nodo izquierdo y un nodo derecho.
* los nodos a la izquierda son menores que el nodo actual.
* los nodos a la derecha son mayores que el nodo actual.

El árbol que vimos anteriormente es un ejemplo de un árbol binario. ¡Echa un vistazo a cada uno de los nodos y comprueba por ti mismo que siguen las reglas!
![image](../img/tree.png)

## Buscar Elementos

Antes de analizar la implementación de cómo buscar con código, veamos cómo un árbol binario podría buscar un elemento. Cuando examinamos los elementos dentro de un árbol, siempre comenzamos en el nodo raíz, que en un árbol binario debería ser, más o menos, el medio de los datos.

Una vez que comenzamos en la raíz, examinamos el valor y nos preguntamos: "¿el valor que buscamos es menor, igual o mayor que este valor?" Si el valor es igual, ¡genial! Encontramos nuestra respuesta. Si el valor que queremos es menor que el que tenemos actualmente, entonces vamos al nodo izquierdo y nos hacemos la misma pregunta. Si el valor que queremos es mayor que el que tenemos actualmente, entonces vamos al nodo derecho y nos hacemos la misma pregunta.

Intenta seguir este ejemplo a continuación. Este es el mismo árbol de antes y queremos encontrar el valor 9.

![image](../img/binarysearch.gif)

## Recorrer Elementos

Ahora que entendemos conceptualmente cómo buscar elementos, podemos ver que buscar elementos es simplemente repetir la misma operación una y otra vez. Esto significa que, si programamos correctamente la operación, el algoritmo completo de búsqueda estará listo.

Imagina que tenemos nodos definidos como se muestra a continuación:
```js javascript
class Node {
    int value;
    Node left;
    Node right;
}
```

Ahora podemos aplicar la lógica para encontrar el elemento correcto que discutimos en la sección anterior. Observa este fragmento de código:
```js javascript
Node current = root;
if (current.value < desired) {
    current = root.right;
} else if (current.value > desired) {
    current = root.left;
}
```
Podemos ver que esto nos lleva de un paso al siguiente; luego podríamos usar esta lógica en un bucle `for` hasta encontrar el valor que queremos.