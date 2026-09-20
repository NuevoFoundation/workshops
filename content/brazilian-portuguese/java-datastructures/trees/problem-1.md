---
title: "Problema 1: Noções Básicas de Árvores"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 3
---

## Tarefa 1: Encontrar um Valor em uma Árvore Binária

Agora que sabemos o básico sobre como percorrer uma árvore, implemente a busca binária com base no processo (ou algoritmo) que discutimos na página anterior. Aqui está um rápido lembrete:
* Se o valor atual for menor do que o que queremos, vá para o nó à direita.
* Se o valor atual for maior do que o que queremos, vá para o nó à esquerda.
* Se o valor atual for o que queremos, você terminou!

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/BinarySearch?lite=true" title="Problema 1: Noções Básicas de Árvores - Editor Replit" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% showanswer "SPOILER: Clique aqui se precisar de ajuda com a solução!" %}}
```js javascript
public static Node findValue(Node root, int value) {
    // Começamos na raiz da árvore
    Node current = root;

    // Seguimos a lógica que descrevemos acima
    while (current.value != value) {
        System.out.println("o valor atual é: " + current.value);
        if (value < current.value) {
            current = current.left;
        }
        if (value > current.value) {
            current = current.right;
        }
    }

    // Se chegarmos aqui, encontramos o nó com
    // o valor correto!
    return current;
}
```
{{% /showanswer %}}

### Parabéns! Se você chegou até aqui, então programou com sucesso a busca binária!