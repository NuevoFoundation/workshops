---
title: "Problema 1: Fundamentos de ArrayList"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

<!--<link rel="stylesheet" href="../../style.css">-->

## Tarefa 1: Inserção

Tacos Truck já está disponível na rua! Novos funcionários estão lutando para acompanhar todos os diferentes pedidos. Ajude-os a organizar todos os itens usando `ArrayList`s!

```js javascript
/*
Dan está pedindo tacos em sua loja favorita:
    - 2 pedidos de "carne asada"
    - 4 pedidos de "carnitas"
    - 1 pedido de "pollo"
    - 2 pedidos de "birria"

    Retorne um ArrayList de todos esses elementos nessa ordem
*/
```

{{% notice tip %}}
1. Como você pode adicionar itens à lista?
2. O que Dan deseja no pedido?
{{% /notice %}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DInsert?lite=true"></iframe>

## Tarefa 2: Obtendo elementos

Um restaurante que vende comida chinesa acaba de abrir nas proximidades. Um grande número de pedidos acabou de chegar e o gerente tem dificuldade em acompanhar tudo, então eles colocaram tudo em um `ArrayList`. Ajude a finalizar o programa para retornar a string fornecida em um determinado índice.

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Hotdog"); 

// Retorna "Pizza" pois é o item número 0 do cardápio
item = find(menu, 0);
```

{{% notice tip %}}
1. Como você pode percorrer a lista?
2. Veja o menu de exemplo!
{{% /notice%}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DFind?lite=true"></iframe>

## Tarefa 3: Removendo Elementos

O mesmo restaurante chinês tem um bug no código! Os pedidos foram duplicados aleatoriamente e o `ArrayList` é preenchido com cópias dos pedidos. Ajude o proprietário escrevendo um programa para remover as primeiras `n` ocorrências de um determinado pedido no `ArrayList`.

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Pizza");
menu.add("Pizza");
menu.add("Hotdog"); 

// Remova os dois primeiros pedidos de pizza
item = remove(menu,"Pizza", 2);

// O menu não será o seguinte array: {"Hotdog", "Hamburger", "Pizza", "Hotdog"}
```

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DRemove?lite=true"></iframe>


