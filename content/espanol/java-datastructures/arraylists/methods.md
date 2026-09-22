---
title: "Métodos"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

## Modificando Elementos

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.set(1, "Coke");
        // Esto cambia el primer elemento (chicken nuggets) a una coke en su lugar
    }
}
```
Usando `set()`, puedes establecer el elemento en un índice específico con un nuevo elemento.

<hr>

## Eliminando Elementos

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.remove(2);
        // Elimina Fries del ArrayList
    }
}
```
Similar a `set()`, el método `remove()` elimina un elemento en un índice específico.

<hr>

## Obteniendo el Tamaño de un ArrayList

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.size());
        // Imprime el tamaño del ArrayList, en este caso: 3
    }
}
```
`size()` devuelve el tamaño de la `ArrayList`.

<hr>

## Iterando Sobre los Elementos

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        for (int i = 0; i < order.size(); i++) {
            System.out.println(order.get(i));
        }
        // Imprime:
        // Whopper
        // Chicken Nugget
        // Fries
    }
}
```

Usando una combinación del bucle `for` y el método `get`, podemos iterar a través del `ArrayList` e imprimir cada elemento en cada índice.