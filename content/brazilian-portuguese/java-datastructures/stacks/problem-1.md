---
title: "Problema 1: Fundamentos da Stack"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 

## Tarefa 1: Reverter usando stack

Oh não! Um novo estagiário foi contratado e bagunçou a lista de restaurantes! Os pedidos dos restaurantes estão em ordem **inversa**! Felizmente, a stack (pilha) é a estrutura de dados perfeita para isso. Você pode criar uma nova stack na ordem correta?

{{% notice tip %}}
1. Lembre-se de que a stack é Último a entrar, primeiro a sair (LIFO; pense em uma pilha de pratos).
2. Como é a stack original?
{{% /notice%}}

```js javascript
// Exemplo da atual stack
Stack<String> restaurants = new Stack<>();

restaurants.push("McDonalds");
restaurants.push("Carls Jr.");
restaurants.push("Burger King");
restaurants.push("Chipotle");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackReverse" target="_blank">Iniciar Replit</a>

## Tarefa 2: Manter o histórico

Outro uso prático da stack é a função de desfazer. Muitos programas hoje em dia incluem um botão de desfazer para acompanhar as alterações mais recentes. A stack é a estrutura de dados perfeita para isso! Você pode criar uma função para desfazer a alteração recente? Por exemplo:

```js javascript
// Exemplo da atual stack
Stack<String> myOrder = new Stack<>();

restaurants.push("Bebida");
restaurants.push("Batata Frita");
restaurants.push("Pizza");
restaurants.push("Pizza");

// O usuário pediu uma pizza extra! Como você pode desfazer a mudança recente?

Stack.undo() // Remover o push mais recente
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackUndo" target="_blank">Iniciar Replit</a>
