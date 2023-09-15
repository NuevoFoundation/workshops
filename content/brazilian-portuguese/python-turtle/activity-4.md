---
title: "Atividade 4 - Simplificando o código com funções"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

Desenhamos um hexágono. Mas este é apenas um dos muitos hexágonos que Alex precisa para construir seu favo de mel. Mais uma vez, parece que teríamos que repetir o código várias vezes para desenhar vários hexágonos. Felizmente, não precisamos! Funções para o resgate!

{{% notice tip %}}

## Funções

Uma função é uma maneira de agrupar linhas de código para fazer algo. Por exemplo, `turtle.forward(50)` move a tartaruga para frente 50 passos, e `turtle.left(120)` vira a tartaruga 120 graus para a esquerda. E se quisermos sempre fazer essas duas ações juntas? Podemos colocá-los em uma função chamada `draw_line()`, de modo que sempre que esta função for chamada, ambas as ações ocorram simultaneamente. Pense nisso como uma receita: compilamos todas as instruções juntas e o nome da receita é a comida que estamos fazendo.

{{% /notice %}}

Aqui está um exemplo de **definição de função** e como a usaríamos:

``` python
def draw_line():
  turtle.forward(50)
  turtle.left(120)
```

A primeira linha é chamada de definição de função **cabeçalho**. A palavra-chave `def` informa ao computador que estamos definindo uma nova função. Em seguida, damos um nome à função, neste caso `draw_line`. Finalmente, não se esqueça do `():` no final da linha, que informa ao computador que estamos iniciando o corpo da função.

{{% notice tip %}}

## Material extra - parâmetros

Dentro dos parênteses `()` nós normalmente definimos **parâmetros** para a função. Parâmetros são entradas que podemos fornecer à função, que a função pode usar para produzir sua saída. Por exemplo, devemos ter dois números para somá-los e produzir um resultado - os dois números que usamos podem ser considerados **parâmetros**. Hoje, não usaremos parâmetros e deixaremos como `()`.

{{% /notice %}}

Semelhante a um loop for, tudo o que desejamos definir dentro da função precisa ser precedido por uma tabulação.

Se você pressionar **run** apenas com este código, notará que não verá nenhuma saída! Apenas criamos as funções, mas precisamos usá-las. Para usar a função que criamos, digite `draw_line()` novamente, mas sem o `def`.

``` python
def draw_line():    # Function definition
  turtle.forward(50)
  turtle.left(120)

draw_line()         # Function call
```

Isso é chamado de **chamada de função** para a função `draw_line()`. Uma chamada de função executa o código definido na função com o mesmo nome. Com a analogia da receita, pense nisso como realmente executar a receita.

{{% notice info %}}

## Dicas

1. Sempre certifique-se de que os nomes de suas funções sejam descritivos o suficiente para explicar o que o código na função faz.
2. Sua chamada de função deve estar abaixo da definição da função.

{{% /notice %}}

{{% notice warning %}}

## Sintaxe Python complicada - Parte 2

Observe que as funções usam regras de sintaxe semelhantes com loops `for` - você deve ter um `:` no final da declaração de função, e qualquer coisa no corpo da função precisa começar com uma guia.

O que acontece quando você precisa de um loop `for` dentro de uma função? Então, você precisa combinar as regras! Aqui está um exemplo sobre como colocar corretamente um loop `for` dentro de uma função.

``` python
def draw_line():
  for i in range(3):
    turtle.forward(50)
```

Observe que `turtle.forward(50)` tem 2 abas na frente dele, porque está dentro de uma definição de função, e dentro de um loop `for`!

{{% /notice %}}

Então, vamos tentar isso fazendo nossa própria função `draw_hexagon()`! Lembre-se de incluir o cabeçalho de definição de função, o número de lados que um hexágono tem e o ângulo associado a um hexágono: 60 graus.

<iframe src="https://trinket.io/embed/python/c3ef894658" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>