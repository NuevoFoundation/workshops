```markdown
---
title: "Introducción"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

Hemos aprendido sobre los arreglos e incluso nos hemos aventurado en arreglos multidimensionales. Desafortunadamente, los arreglos tienen muchas limitaciones y a veces pueden ser difíciles de usar. Una limitación que tienen los arreglos es su tamaño explícito. Si solo tienes 10 elementos de espacio asignado en ese arreglo, solo puedes almacenar hasta 10 elementos. Los `ArrayList` son una excelente estructura de datos que tiene un tamaño dinámico, lo que significa que puedes agregar o quitar elementos en cualquier momento. Hay muchas más cosas que los `ArrayList` pueden hacer, lo que los convierte en estructuras de datos muy poderosas.

![image](../img/arraylist.png)

Antes de crear un `ArrayList`, tendremos que importar la clase `ArrayList`. Se verá algo así:

```js javascript
import java.util.ArrayList; // importar la clase ArrayList
```

Recuerda, nuestro objetivo es crear un `ArrayList` que realice un seguimiento del pedido del cliente. Esto se puede hacer de la siguiente manera:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
    }
}
```

Como puedes ver, similar a un arreglo, tenemos que declarar qué tipos de datos contendrá el `ArrayList`. En este caso, haremos que contenga `String`s, ya que los elementos del menú serán `String`s. 

Para agregar elementos a un pedido, utilizaremos el método `add()`. Si el cliente estuviera ordenando en Burger King y quisiera pedir un combo con un Whopper, nuggets de pollo y papas fritas, tu método podría verse algo así:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
    }
}
```
Si quisiéramos obtener el primer elemento de un `ArrayList`, usaríamos el método `get()` junto con el número de índice del elemento, de la siguiente manera:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.get(0));
        // Imprime Whopper
  }
}
```

Hay muchos más métodos que puedes usar en un `ArrayList`, pero esto es solo una idea general de lo que un `ArrayList` puede hacer. Los métodos se encuentran en la siguiente página.
```