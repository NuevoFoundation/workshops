---
title: "Métodos"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 
## Filas prioritárias

Uma `PriorityQueue` (Fila Prioritária) é usada quando os objetos devem ser processados ​​com base na prioridade. Nesse caso, queremos ordenar a fila pelo tempo que o cliente está esperando. Sabe-se que uma Fila segue o algoritmo First-In-First-Out, mas às vezes é necessário que os elementos da fila sejam processados ​​​​de acordo com a prioridade; é aí que `PriorityQueue` entra em ação. O PriorityQueue é baseado no amontoado de prioridade. Os elementos da fila de prioridade são ordenados de acordo com a ordenação natural, ou por um Comparador fornecido no momento da construção da fila, dependendo de qual construtor é utilizado. 

Antes de criarmos uma fila, teremos que `importar` a classe `PriorityQueue`. Para facilitar a vida, podemos usar um `*` para importar todas as classes da biblioteca. Vai parecer algo assim.

```js javascript
// Importará PriorityQueue, entre outras classes
import java.util.*; 
```
Existem vários métodos para usar em uma fila prioritária e se você estiver interessado, sinta-se à vontade para pesquisar os métodos. Porém, agora falaremos apenas sobre os métodos mais importantes: `add()`, `peek()` e `poll()`.

<hr>

## Criando uma fila prioritária
    
```js javascript
Queue<Integer> orders = new PriorityQueue<>();
```

Existem diversas maneiras de ordenar a fila de prioridade e cabe a você decidir como deseja implementá-la.

<hr>

## Adicionando Elementos

Você pode adicionar a uma fila usando o método `add()`. O PriorityQueue` classificará automaticamente os elementos para você. O padrão é a ordem natural de um objeto, mas você pode alterá-lo com base no que desejar.

```js javascript
add(1);
add(2);
add(3);

// Cria uma fila com elementos [1, 2, 3]
```

<hr>

## Acessando Elementos

`peek()` retornará o elemento superior sem removê-lo.

```js javascript
queue.peek();

// Retorna 1
// A fila contém [1, 2, 3]
```

<hr>

## Removendo Elementos

`poll()` retornará o elemento superior e o removerá da fila.

```js javascript
queue.poll();

// Retorna 1
// A fila contém [2, 3]
```

<hr>

Com esses três métodos em mente, vamos dar uma olhada em um exemplo.

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // Método Principal
    public static void main(String args[]) {
        // Criando fila de prioridade vazia
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>();
 
        // Adicionando itens ao pQueue usando add()
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // Imprimindo o elemento superior de PriorityQueue
        System.out.println(pQueue.peek());
 
        // Imprimindo o elemento superior e removendo-o
        // do contêiner PriorityQueue
        System.out.println(pQueue.poll());
 
        // Imprimindo o elemento superior novamente
        System.out.println(pQueue.peek());
    }
}
```

Portanto, temos três clientes com tempos de espera variados de `10`, `30` e `60`. O que você acha que o compilador produzirá?

Vamos em frente e tentar digerir um pouco o código. Para a primeira linha, chamamos `pQueue.peek()`. O que `peek()` faz? Peek simplesmente retorna o elemento no topo. O que está no topo? Bem, como já está classificado, deve imprimir o menor elemento que é `10`.

Que tal `pQueue.poll()`? Bem, ele deveria fazer exatamente a mesma coisa que o peek anterior, mas agora remove o elemento superior da fila que é `10`.

E se tentarmos chamar `peek()` novamente? Bem, agora que `10` não existe mais, agora será `30`.

Portanto, o resultado final pode ser assim:

```js javascript
10
10
30
```

Espere aí! Não queríamos que as pessoas que esperavam mais tempo na fila chegassem primeiro ao topo da fila? Parece que a fila produz os elementos menores primeiro, mas o que realmente queremos é o elemento maior. Para conseguir isso, teríamos apenas que instanciar a fila de maneira um pouco diferente. `Collections.reverseOrder()` basicamente reverterá a ordem da nossa fila. Assim!

```js javascript
PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
```
Agora nossa implementação deve ser sólida.

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // Método Principal
    public static void main(String args[]) {
        // Criando fila de prioridade vazia
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
 
        // Adicionando itens ao pQueue usando add()
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // Imprimindo o elemento superior de PriorityQueue
        System.out.println(pQueue.peek());
 
        // Imprimindo o elemento superior e removendo-o
        // do contêiner PriorityQueue
        System.out.println(pQueue.poll());
 
        // Imprimindo o elemento superior novamente
        System.out.println(pQueue.peek());
    }
}
```

Pergunta de checagem: Qual será a saída deste `pQueue` agora?

Answer:
```js javascript
60
60
30
```