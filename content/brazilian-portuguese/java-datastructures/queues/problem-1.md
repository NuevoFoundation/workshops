---
title: "Problema 1: Fundamentos de Queue"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 
<!--<link rel="stylesheet" href="../../style.css">-->

## Tarefa 1: Limpando a Queue para novos pedidos

Um novo restaurante foi adicionado ao Nuevo Eats! Novos pedidos estão chegando e a Queue (Fila) está inundada de pedidos! A popularidade dos diferentes tacos cresceu rapidamente e o restaurante está sobrecarregado. Procure uma maneira de limpar todos os elementos para salvar o restaurante!

{{% notice tip %}}
1. Como você pode iterar atráves da Queue?
2. Tente limpar a fila à medida em que você avança!
3. Veja o menu de exemplo!
{{% /notice%}}

```js javascript
// Isso usa uma lista como organizadora da fila.
Queue<String> orders = new PriorityQueue<>();

orders.add("Fish Taco");
orders.add("Beef Taco");
orders.add("Chicken Taco");
orders.add("Fish Taco");
orders.add("Beef Taco");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Clear" target="_blank">Iniciar Replit</a>

## Tarefa 2: Usando a Priority Queue para encontrar o preço mínimo

Um restaurante está usando uma Priority Queue (fila prioritária) para gerenciar pedidos. O restaurante deseja poder analisar os pedidos com base nos preços para preparar melhor as refeições que está preparando. Especificamente, eles gostariam de encontrar o enésimo preço mínimo atualmente em sua lista. Escreva uma função que analise a fila de pedidos e retorne o enésimo preço mínimo.

{{% notice tip %}}
1. Como você garantirá que a lista esteja em ordem?
2. O que torna mais fácil encontrar o preço mínimo?
3. E se eles estiverem procurando o 5º preço mínimo (ou mais baixo)?
{{% /notice%}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Min" target="_blank">Iniciar Replit</a>