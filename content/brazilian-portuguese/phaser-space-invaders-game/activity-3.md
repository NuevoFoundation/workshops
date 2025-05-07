---
title: "Atividade 3 - Adicionar entrada de teclado para mover o player"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 10
---

Agora, vamos permitir que nossa nave se mova quando o jogador usar o teclado. O primeiro passo é criar um atributo cursor no método `create()` em `Scene2.js`:

<!--- ![criar_tecla_cursor](../media/4/create_cursor_key.png) --->
<img src="../media/4/create_cursor_key.png" alt="criar_tecla_cursor" style="width:950px;"/>

A maneira mais eficiente de criar movimento é criar uma função auxiliar que usa o atributo cursor para verificar se o teclado foi pressionado. Já criamos esta função para você e ela se chama `movePlayer()`:

<!--- ![função_movimentar_jogador](../media/4/move_player_function.png) --->
<img src="../media/4/move_player_function.png" alt="função_movimentar_jogador" style="width:950px;"/>

Em seguida, movemos o player com esta função. Podemos chamar esta função no método `update()` para verificarmos o movimento durante cada ciclo de atualização (isso também já foi feito para você).

Agora, vá para o método `movePlayer()` e escreva o código que irá verificar o movimento e mover o player de acordo.

{{% notice hint %}}

* Recomendamos uma velocidade de movimento de 200
* Use uma declaração if
* Depois de fazer as declarações `if`, você poderá descobrir que seu player continua se movendo mesmo depois de você parar de pressionar o teclado. Para consertar isso, pense: quando o jogador não está pressionando o teclado, o que a nave deveria estar fazendo?

{{% /notice %}}

Agora teste! Você pode notar uma coisa; o jogador é capaz de se mover para fora da tela assim:

<!--- ![limites](../media/4/player-off.gif) --->
<img src="../media/4/player-off.gif" alt="limites" style="width:100px;"/>

Isso acontece porque o Phaser usa uma tela ilimitada que existe mesmo fora da janela da tela. Podemos consertar isso restringindo o player à tela com uma linha de código:

```javascript
this.player.body.setCollideWorldBounds(true); // o jogador não pode sair da tela
```

Encontre o método `create()` da Cena 2:

<!--- ![alterar_limite](../media/4/set_bound.png) --->
<img src="../media/4/set_bound.png" alt="alterar_limite" style="width:950px;"/>

Agora que seu jogador está preso na tela, você poderá mover sua nave assim:

<!--- ![nave espacial animação e fundo](../media/4/player-move-example.gif)
 --->
<img src="../media/4/player-move-example.gif" alt="nave espacial animação e fundo" style="width:300px;"/>
