---
title: "Problema 1: Fundamentos de Array"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---
<!--<link rel="stylesheet" href="../../style.css">-->

## Tarefa 1: Impressão

Criamos uma série de restaurantes existentes em nosso sistema! Precisamos da sua ajuda para imprimir tudo para não incluirmos os mesmos restaurantes.

{{% notice tip %}}
1. Use um loop (laço) `for` para imprimir o conteúdo do array.
2. Use o método `length()` para encontrar o tamanho do array.
3. Veja o exemplo abaixo.
{{% /notice%}}

Se recebermos o array abaixo:

```js javascript
String[] restaurants = { "Burger King", "Chipotle", "Panda Express", "McDonalds" };
```

a resposta deve ser impressa:

```js javascript
String answer = "Burger King,Chipotle,Panda Express,McDonalds";
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-1-getRestaurant" target="_blank">Iniciar Replit</a>

## Tarefa 2: Alterando Elementos

Oh não! McDonalds está sem comida! Mude a lista de restaurantes antes que as pessoas comecem a fazer pedidos no McDonalds e fiquem desapontados por não ter comida. Felizmente a "Pizza Hut" está disposta a ajudar! Substitua o McDonalds pela Pizza Hut no índice.

{{% notice tip %}}
1. Inicie
1. Encontre primeiro o índice do McDonalds
2. Lembre-se das citações em torno de `"Pizza Hut"`
3. Veja o exemplo abaixo!
{{% /notice%}}

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "McDonalds"};
//substitua “McDonalds” por “Pizza Hut”

```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-2-insertRestaurant" target="_blank">Iniciar Replit</a>