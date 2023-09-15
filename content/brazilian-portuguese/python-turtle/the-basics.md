---
title: "Noções básicas - Desenhando uma linha colorida"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/uSQGtnlot2s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Antes que Alex possa aprender a criar uma colmeia, ele deve primeiro aprender a desenhar uma linha colorida. Adicionaremos código à janela Trinket abaixo, e faremos isso em duas partes.

<iframe src="https://trinket.io/embed/python/1363ac22be" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Primeiro, precisamos dizer à tartaruga que cor queremos que a linha seja. Para fazer isso, vamos digitar:

``` python
turtle.color("orange")
```

Vamos tentar entender essa linha de código com mais detalhes.

{{% notice tip %}}

## Strings

Qualquer coisa que você veja entre **aspas** é chamada de **string**. Uma string é apenas uma sequência de caracteres (sejam eles letras, números ou símbolos).

No código acima, `"orange"` é uma string. Outros exemplos de strings incluem `"123"`, `"abc!"` e `"green"`. Tenha cuidado, `123`, `abc!` e `green` não são strings porque faltam aspas!

## Métodos

`turtle.color()` é um **método.** Usamos métodos para fazer com que a tartaruga execute certas ações. Neste caso, `turtle.color()` está mudando a cor das linhas que ele desenha para a cor que nós dizemos. Dissemos a ele para mudar a cor para laranja enviando a **string** `"laranja"` como um **argumento**.

## Argumentos

Os argumentos são entradas que você passa para os **métodos** usarem. Em nosso exemplo, `turtle.color()` precisa de um argumento **string** representando o nome da cor para definir a tartaruga, então passamos `"orange"` como um **argumento** para o método. Também poderíamos ter dito para mudar a cor para outra coisa, mas deve ter sido uma cor que `turtle.color()` entenda. As cores que ele reconhece são: `"vermelho"`, `"laranja"`, `"amarelo"`, `"verde"`, `"azul"`, `"roxo"`, `"preto"`, ` "rosa"` e `"cinza"`. Se enviarmos qualquer outra coisa além de uma dessas sequências de cores, obteremos a cor padrão, que é o preto.

{{% /notice %}}

Agora que escolhemos a cor que queremos, podemos desenhar uma linha! Para desenhar uma linha, existem dois **métodos** que podemos usar:

``` python
turtle.forward(50)
turtle.backward(50)
```

`turtle.forward(50)` fará com que a tartaruga avance 50 pixels e desenhe uma linha na direção em que está voltada, enquanto `turtle.backward(50)` fará o mesmo, mas na direção oposta.

{{% notice tip %}}

## Pixels

Uma imagem é composta por milhares, senão milhões de pixels. Um pixel é uma unidade de medida para imagens digitais, semelhante à forma como medimos peso em libras ou longas distâncias em milhas.

## Inteiros

Um número inteiro é qualquer número inteiro, seja positivo ou negativo. Neste exemplo, tanto `turtle.forward()` quanto `turtle.backward()` esperam um **integer** como um argumento ao invés de uma string. Isso ocorre porque o argumento representa o número de pixels que você deseja que a tartaruga mova ao desenhar. Uma string claramente não funcionaria para esses métodos!

{{% /notice %}}

Vamos fazer a tartaruga avançar, então digite `turtle.forward(50)`. Agora seu código deve ficar mais ou menos assim:

``` python
import turtle

turtle.color("orange")
turtle.forward(50)
```

Agora que completamos nosso código, pressione **executar**. Você deve ver o seguinte na tela de resultados:

![alt text height="600px" width="70%"](../media/basics-trinket.png "Janela do trinket")

Se sim, ótimo! Se não, por favor, peça ajuda.

Como exercício, tente entender o que a linha de código a seguir faz e tente adicioná-la ao seu código. O que isso faz?

``` python
turtle.shape("turtle")
```

{{% notice warning %}}

## AJUDA! Nada aparece na tela!

Se após apertar **run** você não visualizar nada na tela, verifique se há um **x** vermelho ao lado da aba **console** (a aba **console** é ao lado da guia **resultado** no meio da tela). Se fizer isso, você encontrou alguns erros! Clique na guia **console** e peça ajuda. Cuidado com o seguinte ao codificar em python:

1. Não use letras maiúsculas.
2. Certifique-se de que nenhuma das linhas que você escreveu até agora comece com espaços.
3. Certifique-se de que o nome da cor que você escolheu esteja entre aspas e que a cor esteja entre parênteses em `turtle.color()`.

{{% /notice %}}
