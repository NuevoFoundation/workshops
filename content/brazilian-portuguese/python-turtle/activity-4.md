---
title: "Atividade 4 – Simplificando código com funções"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

Desenhamos um hexágono. Mas este é apenas um dos muitos hexágonos que Alex precisa para construir seu favo de mel. Mais uma vez, parece que teríamos que repetir o código muitas vezes para desenhar vários hexágonos. Felizmente, não precisamos! Funções para nos resgatar!

{{% notice tip %}}

## Funções

Uma função é uma forma de agrupar linhas de código para fazer algo. Por exemplo, `turtle.forward(50)` move a tartaruga 50 passos para frente e `turtle.left(120)` gira a tartaruga 120 graus para a esquerda. E se quisermos sempre fazer essas duas ações juntas? Podemos colocá-los em uma função chamada `draw_line()`, de modo que sempre que esta função for chamada, ambas as ações ocorram simultaneamente. Pense nisso como uma receita: compilamos todas as instruções juntas e o nome da receita é a comida que estamos preparando.

{{% /notice %}}

Aqui está um exemplo de **definição de função** e como a usaríamos:

``` python
def draw_line():
  turtle.forward(50)
  turtle.left(120)
```

A primeira linha é chamada de definição de função **cabeçalho**. A palavra-chave `def` informa ao computador que estamos definindo uma nova função. A seguir, damos um nome à função, neste caso `draw_line`. Por fim, não se esqueça do `():` no final da linha, que informa ao computador que estamos iniciando o corpo da função.

{{% notice tip %}}

## Material extra - parâmetros

Dentro dos parênteses `()` normalmente definiríamos **parâmetros** para a função. Parâmetros são entradas que podemos fornecer à função, que a função pode usar para produzir sua saída. Por exemplo, precisamos ter dois números para somá-los e produzir um resultado - os dois números que usamos podem ser considerados **parâmetros**. Hoje não usaremos parâmetros e deixaremos como `()`.

{{% /notice %}}

Semelhante a um loop for, qualquer coisa que desejemos definir dentro da função precisa ser precedida por 1 tabulação.

Se você pressionar **run** apenas com este código, notará que não verá nenhuma saída! Apenas criamos as funções, mas precisamos usá-las. Para usar a função que criamos, digite `draw_line()` novamente, mas sem o `def`.

``` python
def draw_line():    # Definição da função
  turtle.forward(50)
  turtle.left(120)

draw_line()         # Chamada de função
```

Isso é chamado de **chamada de função** para a função `draw_line()`. Uma chamada de função executa o código definido na função com o mesmo nome. Com a analogia da receita, pense nisso como uma execução real da receita.

{{% notice info %}}

## Pontas

1. Sempre certifique-se de que os nomes de suas funções sejam descritivos o suficiente para explicar o que o código da função faz.
2. Sua chamada de função deve estar abaixo da definição da função.

{{% /notice %}}

{{% notice warning %}}

## Sintaxe complicada do Python - Parte 2

Observe que as funções usam regras de sintaxe semelhantes com loops `for` - você deve ter um `:` no final da declaração da função, e qualquer coisa no corpo da função precisa começar com uma tabulação.

O que acontece quando você precisa de um loop `for` dentro de uma função? Então, você precisa combinar as regras! Aqui está um exemplo de como colocar corretamente um loop `for` dentro de uma função.

``` python
def draw_line():
  for i in range(3):
    turtle.forward(50)
```

Observe que `turtle.forward(50)` tem 2 guias na frente dele, porque está dentro de uma definição de função e dentro de um loop `for`!

{{% /notice %}}

Então, vamos tentar fazer nossa própria função `draw_hexagon()`! Lembre-se de incluir o cabeçalho de definição da função, o número de lados que um hexágono possui e o ângulo associado a um hexágono: 60 graus.

<iframe src="https://trinket.io/embed/python/c3ef894658" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>