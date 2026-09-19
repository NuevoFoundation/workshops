```markdown
---
title: "Métodos"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

## Pilas

Una pila es similar a una cola. La única diferencia son los nombres de los métodos y la forma en que se recuperan los elementos.

Antes de crear una pila, tendremos que `importar` la clase `stack`. Para facilitar las cosas, podemos usar un `*` en su lugar para importar todas las clases de la biblioteca. Se verá algo como esto.

```js javascript
// Esto importará stack, entre otras clases
import java.util.*;
```
Hay varios métodos para usar en una pila. Si estás interesado, puedes buscar en internet más información sobre estos métodos. Sin embargo, solo vamos a explicar los métodos más importantes por ahora: `push()`, `peek()` y `pop()`.

<hr>

## Creando una Pila
    
```js javascript
Stack driver = new Stack();
```

<hr>

## Agregando Elementos

Para agregar un elemento a la pila, podemos usar el método `push()`. Esta operación `push()` coloca el elemento en la cima de la pila.

```js javascript
push(1);
push(2);
push(3);

// Crea una pila con los elementos [3, 2, 1]
```

<hr>

## Accediendo a Elementos

Para recuperar u obtener el primer elemento de la pila o el elemento presente en la cima de la pila, podemos usar el método `peek()`. El elemento recuperado no se elimina ni se remueve de la pila.

```js javascript
stack.peek();

// Devuelve 3
// La pila contiene [3, 2, 1]
```

<hr>

## Eliminando Elementos 

Para eliminar un elemento de la pila, podemos usar el método `pop()`. El elemento es extraído y eliminado de la cima de la pila.

```js javascript
stack.pop();

// Devuelve 3
// La pila contiene [2, 1]
```

<hr>

Con estos tres métodos en mente, vamos a echar un vistazo a un ejemplo.

```js javascript
import java.util.*;
public class Driver {
    public static void main(String []args) {
        // Inicialización predeterminada de la pila 
        Stack stack = new Stack(); 
  
        // Empujando los elementos 
        stack.push("Burger King"); 
        stack.push("Subway"); 
        stack.push("Jack in the Box"); 
  
        // Imprimiendo los elementos de la pila 
        System.out.println(stack); 
    }
}
```

Salida:

```js javascript
["Jack in the Box", "Subway", "Burger King"]
```
```