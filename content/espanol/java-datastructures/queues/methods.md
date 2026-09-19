---
title: "Métodos"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 
## Colas de Prioridad

Una `PriorityQueue` se utiliza cuando los objetos deben procesarse según la prioridad. En este caso, queremos ordenar la cola según el tiempo que el cliente ha estado esperando. Se sabe que una Cola sigue el algoritmo de Primero en Entrar, Primero en Salir (First-In-First-Out), pero a veces los elementos de la cola necesitan procesarse de acuerdo con la prioridad; ahí es cuando entra en juego la `PriorityQueue`. La PriorityQueue se basa en el montón de prioridad. Los elementos de la cola de prioridad están ordenados según su orden natural o mediante un Comparator proporcionado en el momento de la construcción de la cola, dependiendo de qué constructor se utilice.

Antes de crear una cola, tendremos que `importar` la clase `PriorityQueue`. Para simplificar las cosas, podemos usar un `*` para importar todas las clases de la biblioteca. Se verá algo así.

```js javascript
// Importará PriorityQueue, entre otras clases
import java.util.*; 
```
Existen varios métodos para usar una Priority Queue, y si te interesa, puedes buscar los métodos por tu cuenta. Sin embargo, solo hablaremos de los métodos más importantes ahora: `add()`, `peek()` y `poll()`.

<hr>

## Creando una Cola de Prioridad
    
```js javascript
Queue<Integer> orders = new PriorityQueue<>();
```

Hay varias formas de ordenar la cola de prioridad y depende de ti decidir cómo quieres implementarla.

<hr>

## Añadiendo Elementos

Puedes añadir a una cola usando el método `add()`. La `PriorityQueue` ordenará automáticamente los elementos por ti. Su configuración predeterminada es por el orden natural del objeto, pero puedes cambiarla según lo que desees.

```js javascript
add(1);
add(2);
add(3);

// Crea una cola con los elementos [1, 2, 3]
```

<hr>

## Accediendo a Elementos

`peek()` devolverá el elemento superior sin eliminarlo.

```js javascript
queue.peek();

// Devuelve 1
// Cola contiene [1, 2, 3]
```

<hr>

## Eliminando Elementos

`poll()` devolverá el elemento superior y lo eliminará de la cola.

```js javascript
queue.poll();

// Devuelve 1
// Cola contiene [2, 3]
```

<hr>

Con estos tres métodos en mente, vamos a echar un vistazo a un ejemplo.

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // Método principal
    public static void main(String args[]) {
        // Creando cola de prioridad vacía
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>();
 
        // Añadiendo elementos a la pQueue usando add()
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // Imprimiendo el elemento superior de PriorityQueue
        System.out.println(pQueue.peek());
 
        // Imprimiendo el elemento superior y eliminándolo
        // del contenedor PriorityQueue
        System.out.println(pQueue.poll());
 
        // Imprimiendo nuevamente el elemento superior
        System.out.println(pQueue.peek());
    }
}
```

Entonces tenemos tres clientes con tiempos de espera de `10`, `30` y `60`. ¿Qué crees que imprimirá el compilador?

Analicemos un poco el código. En la primera línea, llamamos a `pQueue.peek()`. ¿Qué hace `peek()`? Peek simplemente devuelve el elemento que está en la parte superior. ¿Qué hay en la parte superior? Bueno, dado que ya está ordenado, debería imprimir el elemento más pequeño, que es `10`.

¿Qué pasa con `pQueue.poll()`? Bueno, debería hacer exactamente lo mismo que peek anteriormente, pero ahora elimina el elemento superior de la cola, que es `10`.

¿Qué pasa si tratamos de llamar a `peek()` nuevamente? Bueno, ahora que el `10` ya no existe, será el `30`.

Entonces, la salida final podría ser esta:

```js javascript
10
10
30
```

Espera, ¿no queríamos que las personas esperando más tiempo en la fila estuvieran en la parte superior de la cola primero? Parece que la cola imprime los elementos más pequeños primero, pero lo que realmente queremos son los elementos más grandes. Para lograr esto, solo tendríamos que instanciar la cola de manera un poco diferente. `Collections.reverseOrder()` esencialmente revertirá el orden de nuestra cola. Así:

```js javascript
PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
```
Ahora nuestra implementación debería estar correctamente configurada.

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // Método principal
    public static void main(String args[]) {
        // Creando cola de prioridad vacía
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
 
        // Añadiendo elementos a la pQueue usando add()
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // Imprimiendo el elemento superior de PriorityQueue
        System.out.println(pQueue.peek());
 
        // Imprimiendo el elemento superior y eliminándolo
        // del contenedor PriorityQueue
        System.out.println(pQueue.poll());
 
        // Imprimiendo nuevamente el elemento superior
        System.out.println(pQueue.peek());
    }
}
```

Pregunta de Comprobación: ¿Qué imprimirá ahora este `pQueue`?

Respuesta:
```js javascript
60
60
30
```