---
title: "Introdução"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

## O que é um Array 2D?

Já aprendemos muito sobre vetores (arrays). Sabemos que um array pode conter muitos tipos diferentes (integers (inteiros), strings, doubles (duplos) etc.), mas que tal um array que contém arrays?

![imagem de uma tabela com colunas denominadas Array de 0 a 4 e linhas denominadas Index de 0 a 4. Na intersecção Array 0 e Index 0 temos [0][0], na Array 1 e Index 0 temos [1][0], na Array 3 e Index 4, temos [3][4] e assim por diante](../img/2darray.png)

Um array 2D tem um tipo como `int[][]` ou `String[][]`, com dois pares de colchetes. Os elementos de um array 2D são organizados em linhas e colunas, e o novo operador para arrays 2D especifica o número de linhas e o número de colunas. Por exemplo,

```js javascript
int[][] A;
A = new int[3][4];
```

Isso cria um array 2D de `int` que tem 12 elementos organizados em 3 linhas e 4 colunas. Existem também inicializadores para arrays 2D. Por exemplo, esta instrução cria o array 3 por 4 mostrado na imagem abaixo:


```js javascript
int[][] A = {    
                {  1,  0, 12, -1 },
                {  7, -3,  2,  5 },
                { -5, -2,  2, -9 }
            };
```

Um inicializador de array para um array 2D contém as linhas de `A`, separadas por vírgulas e colocadas entre colchetes. Cada linha, por sua vez, é uma lista de valores separados por vírgulas e entre colchetes. Existem também literais de array 2D com sintaxe semelhante que podem ser usados ​​em qualquer lugar, não apenas em declarações. Por exemplo,

```js javascript
A = new int[][] { 
                    {  1,  0, 12, -1 },
                    {  7, -3,  2,  5 },
                    { -5, -2,  2, -9 }
                };
```
                  
Tudo isso se estende naturalmente a arrays tridimensionais, quadridimensionais e até mesmo de dimensões superiores.
