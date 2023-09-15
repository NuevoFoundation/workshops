---
title: "Atividade 2 - Simplificando o código com loops"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kGhMGdqqV-w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Ótimo! Você desenhou um quadrado. Mas observe que estamos escrevendo as mesmas linhas repetidamente! Tivemos que repetir as instruções para traçar uma linha e virar à esquerda 4 vezes. Não seria ótimo se pudéssemos dar instruções uma vez e dizer ao programa para repeti-las 4 vezes? Não tema, nós podemos!

Para fazer isso, precisamos usar loops. Os loops executam um conjunto de instruções várias vezes. Para ver isso em ação, aqui está um exemplo de código que desenha um triângulo:

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

Vamos entender o que esse código faz. `for i in range(3):` Esta instrução diz ao programa para executar as instruções em um loop. `range(3)` define um limite para quantas vezes o loop é executado (neste caso, 3 vezes). A letra `i` é chamada de **variável**. Ele é usado para acompanhar quantas vezes executamos o conteúdo do loop.
{{% notice warning %}}

Vamos entender o que esse código faz. `for i in range(3):` Esta instrução diz ao programa para executar as instruções em um loop. `range(3)` define um limite para quantas vezes o loop é executado (neste caso, 3 vezes). A letra `i` é chamada de **varia## Sintaxe complicada do Python - Parte 1

**Sintaxe** é como escrevemos idiomas para que sejam compreensíveis. Em inglês, temos regras de ortografia e gramática para ajudar a entender um ao outro. Da mesma forma, a linguagem Python possui regras de sintaxe para que o computador possa entender nosso código.

Primeiro, observe que no final da linha com `for`, adicionamos dois pontos (`:`); isso significa que a próxima linha fará parte do loop `for`. O computador reclamará se você perder o `:`!

Além disso, adicionamos uma guia na frente de algumas linhas de código no exemplo acima. A guia informa ao computador que essas instruções são consideradas parte do loop `for`.

Para ver a diferença que isso faz, dê uma olhada no código abaixo. Como removemos a guia na frente de `turtle.left(120)`, o código não funcionará mais como esperado. Agora, apenas repetimos `turtle.forward(50)` três vezes, e em vez disso obtemos uma linha reta!able**. Ele é usado para acompanhar quantas vezes executamos o conteúdo do loop.

``` python
for i in range(3):
  turtle.forward(50)
turtle.left(120)
```

{{% /notice %}}

Agora, pegue o código de exemplo que fornecemos e modifique-o ligeiramente para que, em vez de desenhar um triângulo, desenhe um quadrado. Você pode relembrar o que fez na Atividade 1 como uma dica.

<iframe src="https://trinket.io/embed/python/892913b49a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>