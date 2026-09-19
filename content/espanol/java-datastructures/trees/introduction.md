---
title: "Introducción"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 1
---

Los árboles están compuestos por dos componentes: **aristas** y **nodos**. Veamos cada uno de estos componentes con más detalle.

### Aristas

Puedes imaginar una arista como la línea que conecta dos nodos. Las aristas siempre conectan exactamente dos nodos. Las aristas pueden llevar información, pero no es obligatorio.

### Nodos

Los nodos son simplemente puntos en un árbol que representan algún dato. Un árbol necesita al menos un nodo, y cada nodo puede tener tantas aristas como desee, siempre y cuando esté conectado a otro nodo diferente.

### ¿Por qué Árboles?

Los árboles son estructuras de datos muy simples que pueden almacenar una gran cantidad de información, permitiéndote encontrarla rápidamente. Muchos algoritmos que necesitan encontrar la mejor coincidencia organizan sus datos en un árbol antes de buscar para optimizar su velocidad. Algunos ejemplos de uso de árboles en el mundo real incluyen:
* <a href="https://es.wikipedia.org/wiki/Spanning_Tree_Protocol" target="_blank">Protocolo de Árbol de Expansión</a> - Un protocolo fundamental para el uso de Internet,
* <a href="https://es.wikipedia.org/wiki/Algoritmo_de_b%C3%BAsqueda_binaria" target="_blank">Búsqueda Binaria</a> - Uno de los algoritmos más eficientes para buscar datos en un conjunto ordenado,
* <a href="https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html" target="_blank">TreeMaps</a> - El hermano de la estructura de datos HashMap en Java que utiliza un árbol para organizar los datos.

Algunos árboles tienen reglas más específicas sobre cómo se añaden los datos a ellos y cómo se mantiene la información en su interior. Esto significa que casi siempre hay un árbol adecuado para cualquier escenario.

## Visualizando Árboles

Los árboles tendrán lo que se llama un **nodo raíz**, que es el nodo al que se conecta el resto del árbol, ya sea directa o indirectamente. Llamamos a esta estructura de datos "árbol" porque los nodos se ramifican desde el nodo raíz. Cuando veas un árbol dibujado, usualmente verás el nodo raíz en la parte superior, ¡pero no siempre será así!

![image](../img/tree.png)