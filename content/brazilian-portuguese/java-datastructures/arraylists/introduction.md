---
title: "Introdução"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

Aprendemos sobre arrays e até nos aventuramos em arrays multidimensionais. Infelizmente, os arrays têm muitas limitações e às vezes podem ser difíceis de usar. Uma limitação de um array é seu tamanho explícito. Se você tiver apenas 10 elementos de espaço alocado nessa matriz, poderá armazenar apenas até 10 elementos. `ArrayList`s (Lista de Vetores) são uma ótima estrutura de dados que possui um tamanho dinâmico, o que significa que você pode adicionar ou subtrair itens a qualquer momento. Há muito mais coisas que `ArrayList`s podem fazer, e é isso que torna as `ArrayList`s estruturas de dados tão poderosas.

![Quatro caixas com números em ordem ascendente de 0 a 3, com um sinal de menor à esquerda e um sinal de maior à direita](../img/arraylist.png)

Antes de criarmos um `ArrayList`, teremos que importar a classe `ArrayList`. Vai parecer algo assim.

```js javascript
import java.util.ArrayList; // importar a classe ArrayList
```

Lembre-se, nosso objetivo é criar um `ArrayList` que acompanhe o pedido do cliente. Podemos fazer isso assim:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
    }
}
```

Como você pode ver, semelhante ao array, temos que declarar quais tipos de dados o `ArrayList` conterá. Neste caso, faremos com que contenha `String`s, já que os itens de menu serão `String`s.

Para adicionar itens a um pedido, usaremos o método `add()`. Se o cliente estivesse fazendo um pedido no Burger King e quisesse pedir um combo com Whopper, nuggets de frango e batatas fritas, seu método poderia ser mais ou menos assim.

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Nuggets");
        order.add("Batata Frita");
    }
}
```
Se quiséssemos obter o primeiro item de um `ArrayList`, você usaria o método `get()` junto com o número de índice do elemento assim:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Nuggets");
        order.add("Batata Frita");
        System.out.println(order.get(0));
        // Saída: Whopper
  }
}
```

Existem muitos outros métodos que você pode usar em um `ArrayList`, mas isso é apenas a essência do que um `ArrayList` pode fazer. Os métodos podem ser encontrados na próxima página.
