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
        // Isso troca o elemento 1, Chicken Nugget (nuggets de frango) para uma Coke (Coca-Cola).
    }
}
```
Usando `set()`, você pode definir o elemento no número do índice para um novo elemento.

<hr>

## Removendo Elementos

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.remove(2);
        // Remove batatas fritas do ArrayList
    }
}
```
Semelhante a `set()`, o método `remove()` remove um elemento em um número de índice.

<hr>

## Obtendo o tamanho de um ArrayList

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.size());
        // Gera o tamanho do ArrayList, neste caso: 3
    }
}
```
`size()` retorna o tamanho do `ArrayList`.

<hr>

## Iterando sobre elementos

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
        // Saída:
        // Whopper
        // Chicken Nugget
        // Fries
    }
}
```

Usando uma combinação do loop `for` e do método `get`, podemos iterar através do `ArrayList` e imprimir cada elemento em cada índice.
