---
title: "Métodos"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

## Stacks

Uma stack é semelhante a uma queue. A única diferença são os nomes dos métodos e a maneira como recuperamos os itens.

Antes de criarmos uma stack, teremos que `importar` a classe `stack`. Para facilitar a vida, podemos usar um `*` para importar todas as classes da biblioteca. Vai parecer algo assim.

```js javascript
// Isso importará a stack, entre outras classes
import java.util.*;
```
Existem vários métodos para usar em uma stack. Se estiver interessado, você pode pesquisar na internet para obter mais informações sobre esses métodos. No entanto, vamos explicar apenas os métodos mais importantes por enquanto: `push()`, `peek()`, e `pop()`.

<hr>

## Criando uma pilha
    
```js javascript
Stack driver = new Stack();
```

<hr>

## Adicionando Elementos

Para adicionar um elemento à stack, podemos usar o método `push()`. Esta operação `push()` coloca o elemento no topo da stack.

```js javascript
push(1);
push(2);
push(3);

// Cria uma pilha com elementos [3, 2, 1]
```

<hr>

## Acessando Elementos

Para recuperar ou buscar o primeiro elemento da stack ou o elemento presente no topo da stack, podemos usar o método `peek()`. O elemento recuperado não é excluído ou removido da pilha.

```js javascript
stack.peek();

// Retorna 3
// A stack contém [3, 2, 1]
```

<hr>

## Removendo Elementos

Para remover um elemento da stack, podemos usar o método `pop()`. O elemento é retirado e removido do topo da stack.

```js javascript
stack.pop();

// Retorna 3
// A Stack contém [2, 1]
```

<hr>

Com esses três métodos em mente, vamos dar uma olhada em um exemplo.

```js javascript
import java.util.*;
public class Driver {
    public static void main(String []args) {
        // Inicialização padrão do Stack
        Stack stack = new Stack(); 
  
        // pushing (empurrando) os elementos 
        stack.push("Burger King"); 
        stack.push("Subway"); 
        stack.push("Jack in the Box"); 
  
        // Imprimindo os elementos da stack
        System.out.println(stack); 
    }
}
```

Saída:

```js javascript
["Jack in the Box", "Subway", "Burger King"]
```

