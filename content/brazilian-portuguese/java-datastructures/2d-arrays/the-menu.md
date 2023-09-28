---
title: "O Cardápio"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

## Armazenamento de informações do restaurante

Vamos relembrar o array de restaurantes que fizemos anteriormente na seção de arrays.

![restaurant](../../arrays/img/array2.png)

Como você pode ver, esse conjunto contém todos os diferentes restaurantes do nosso aplicativo. Agora, vamos tentar fazer com que cada restaurante contenha uma variedade de todos os itens do cardápio. Se feito corretamente, o elemento `0` do nosso array, "Burger King", deve agora conter seus respectivos itens de cardápio. Pode ser algo assim:

![burgerkingarray](../img/2darray2.png)

Como você pode ver, o elemento `0` deve ser nosso array do Burger King. Assim como nos nossos arrays 1D, indexamos a zero os itens de nosso array. Se quiséssemos fazer um pedido de um Whopper, simplesmente chamaríamos `Restaurant[0][0]`. Isso chamaria nosso array do Burger King e o primeiro elemento desse array, o que é incrível. Se quiséssemos batatas fritas em nosso array, chamaríamos `Restaurant[0][2]`.

Pergunta: Se quiséssemos pedir frango com laranja e frango com laranja fosse o décimo elemento de nosso array do Panda Express, como poderíamos acessar esse elemento?

Se você respondeu `Restaurant[2][9]`, então você acertou! Panda Express é o terceiro array `[2]` e frango com laranja é o décimo elemento `[9]`.