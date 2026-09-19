---
title: "Problema 1: Conceptos Básicos de Árboles"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 3
--- 

## Tarea 1: Encontrar un Valor en un Árbol Binario

Ahora que conocemos los conceptos básicos para recorrer un árbol, implementa la búsqueda binaria basada en el proceso (o algoritmo) que hablamos en la página anterior. Aquí tienes un breve repaso:
* Si el valor actual es menor que el que queremos, ve al nodo derecho.
* Si el valor actual es mayor que el que queremos, ve al nodo izquierdo.
* Si el valor actual es el que queremos, ¡has terminado!

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/BinarySearch?lite=true" title="Problema 1: Conceptos Básicos de Árboles - Editor de Replit" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% showanswer "¡SPOILER: Haz clic aquí si necesitas ayuda con la solución!" %}}
```js javascript
public static Node findValue(Node root, int value) {
    // Comenzamos en la raíz del árbol
    Node current = root;

    // Seguimos la lógica que describimos anteriormente 
    while (current.value != value) {
        System.out.println("el valor actual es: " + current.value);
        if (value < current.value) {
            current = current.left;
        }
        if (value > current.value) {
            current = current.right;
        }
    }

    // Si hemos llegado aquí, alcanzamos el nodo con 
    // el valor correcto
    return current;
}
```
{{% /showanswer %}}

### ¡Felicidades! Si has llegado hasta aquí, entonces oficialmente has programado la búsqueda binaria.