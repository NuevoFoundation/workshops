---
title: "Atividade 10 – Adicionando uma Tela de Título"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 17
---

Agora, faremos bom uso de nossa separação entre a cena 1 e a cena 2, adicionando uma tela de título para finalizar nosso jogo!

Isto é muito simples! primeiro comentaremos a linha `startGame()` na parte inferior de `create()` na `Cena 1`. Usaremos a função `startGame()` para iniciar o jogo em vez de iniciar automaticamente como antes:

<!--- ![startGame()](../media/11/comment_out.png)--->
<img src="../media/11/comment_out.png" alt="startGame comentar" style="width:950px;"/>

O console voltará para uma tela preta. Para fazer uma tela de título, precisamos importar a tela de fundo e algum texto na seção `start page` da cena 1:

<!--- ![start_page](../media/11/start_page.png)--->
<img src="../media/11/start_page.png" alt="start_page" style="width:950px;"/>

Você só pode criar um plano de fundo como uma imagem em `create()`, porque as imagens só podem ser movidas em funções `update()`!

Para os textos, recomendamos diferentes `fontes` e `preenchimentos` para o texto do título e o texto inicial.

Agora, chamaremos o método `startGame()` apenas se o jogador clicar para iniciar o jogo:

<!--- ![on_click](../media/11/on_click.png)--->
<img src="../media/11/on_click.png" alt="on_click" style="width:950px;"/>

Sua tela deverá ficar semelhante a esta:
![tela_título](../media/11/title_screen.gif)

## Parabéns!

Agora você completou todas as lições e criou seu próprio jogo de invasão espacial! Divirta-se! 👏🏽👏🏽👏🏽
