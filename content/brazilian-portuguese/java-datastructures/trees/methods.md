---
title: "Métodos"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 2
--- 

## Árvores Binárias

Árvores são um tipo especial de estrutura de dados porque são compostas por uma coleção de nós conectados por arestas. Não existe um inicializador único para criar uma nova árvore genérica, como ocorre com outras estruturas de dados que vimos. Para simplificar, vamos olhar especificamente para **Árvores Binárias**, que são um tipo específico de árvore com regras estritas sobre onde cada nó deve estar.

As regras para uma árvore binária são:
* cada nó tem exatamente duas arestas: um nó à esquerda e um nó à direita;
* nós à esquerda são menores que o nó atual;
* nós à direita são maiores que o nó atual.

A árvore que vimos anteriormente é um exemplo de árvore binária. Observe cada um dos nós e confira você mesmo se eles seguem essas regras!
![image](../img/tree.png)

## Buscando Elementos

Antes de analisarmos a implementação de como realizar buscas com código, vamos observar como uma árvore binária pode buscar por um elemento. Quando analisamos os elementos dentro de uma árvore, sempre começamos no nó raiz, que, em uma árvore binária, deve estar mais ou menos no meio dos dados.

Uma vez que começamos pela raiz, examinamos o valor e nos perguntamos: "o valor que estamos procurando é menor, igual ou maior que esse valor?" Se o valor for igual, ótimo! Encontramos nossa resposta. Se o valor que queremos for menor do que temos atualmente, então seguimos para o nó à esquerda e nos fazemos a mesma pergunta. Se o valor que queremos for maior do que temos atualmente, então seguimos para o nó à direita e repetimos a mesma pergunta.

Veja se consegue acompanhar este exemplo abaixo. Essa é a mesma árvore de antes, e queremos encontrar o valor 9.

![image](../img/binarysearch.gif)

## Percorrendo Elementos

Agora que entendemos conceitualmente como buscar elementos, podemos ver que buscar um elemento é apenas repetir a mesma operação várias vezes. Isso significa que, se programarmos a operação corretamente, todo o algoritmo de busca estará concluído.

Imagine que temos nós definidos da seguinte maneira:
```js javascript
class Node {
    int value;
    Node left;
    Node right;
}
```

Agora podemos aplicar a lógica para encontrar o elemento correto que discutimos na seção anterior. Considere este trecho de código:
```js javascript
Node current = root;
if (current.value < desired) {
    current = root.right;
} else if (current.value > desired) {
    current = root.left;
}
```
Podemos ver que isso nos leva de um passo para o próximo. Em seguida, poderíamos usar essa lógica em um loop `for` até encontrarmos o valor que desejamos.