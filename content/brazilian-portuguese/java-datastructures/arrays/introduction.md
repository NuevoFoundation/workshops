---
title: "Introdução"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 1
---

Arrays são uma estrutura de dados onde cada um de seus elementos é organizado em uma sequência numérica e cada item é referenciado por seu número de posição. Em Java, cada um desses elementos é de um tipo (`String`, `int`, `double`, etc.) e tem indexação zero, o que significa que o primeiro elemento em um array começa em `0`, o segundo elemento com `1` e assim por diante.

![image](../img/array.png)

Aqui estão alguns vocabulários importantes que você precisa saber antes de falarmos mais sobre arrays.

- O número de itens em uma matriz é chamado de **lenght** (comprimento) da matriz.
- O tipo dos itens individuais em uma matriz é chamado de **base type** (tipo base) da matriz.
- O número da posição de um item em uma matriz é chamado de **index** (índice) desse item.

Para nossos propósitos, queremos criar um array que possa conter todos os vários restaurantes em nosso aplicativo. Digamos que nosso programa precise processar os nomes de mil restaurantes diferentes. Precisaremos encontrar uma maneira de classificar e lidar com todos os dados. Sem uma estrutura de dados array, teríamos que resolver o problema criando mil variáveis ​​diferentes para cada restaurante e se quiséssemos fazer algo tão simples como, por exemplo, imprimir os nomes de cada restaurante, teríamos que colocar 1000 instruções de impressão . Realizar esse feito seria um grande desafio.

Pelo contrário, os arrays têm a capacidade de nos permitir realizar as mesmas ações, mas num único passo. A matriz é simplesmente uma única variável, mas contém todos os 1.000 restaurantes dentro dela.

![image](../img/array2.png)

O **lenght** do array seria 1.000, já que existem 1.000 nomes individuais. O **base type** do array seria `String`, pois os itens do array são strings. O primeiro nome estaria em **index** `0` no array, o segundo nome no índice `1` e assim por diante, até o milésimo nome no índice `999`.


