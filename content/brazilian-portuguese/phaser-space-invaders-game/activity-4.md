---
title: "Atividade 4 - Adicionando Inimigos"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 11
---

Agora vamos fazer alguns inimigos para o nosso jogador lutar! Vamos primeiro carregar uma planilha de sprites para nossos inimigos na Cena 1, assim como fizemos para o jogador. Use a mesma sintaxe que você usou para carregar no player, mas use um nome diferente, `assets/enemies.png` como fonte da planilha sprite, e um frameWidth e frameHeight de 16:

<!--- ![carregar_sprite](../media/5/load_sprite.png) --->
<img src="../media/5/load_sprite.png" alt="carregar_sprite" style="width:950px;"/>

Além disso, crie outra animação na Cena 1 da mesma forma que você criou a animação do jogador. Você pode usar os mesmos argumentos para `frameRate` e `repeat`, mas lembre-se de usar `enemies` para `frames`:

<!--- ![criar_sprite](../media/5/create_sprite.png) --->
<img src="../media/5/create_sprite.png" alt="criar_sprite" style="width:950px;"/>

Este jogo usará muitos inimigos que parecem idênticos e se comportam de maneira muito semelhante. Para facilitar essa codificação, usaremos um conceito no Phaser chamado grupo para controlar todos os nossos inimigos de uma vez. Um grupo é exatamente o que parece - um grupo de coisas. Podemos fazer referência a este grupo quando quisermos que uma alteração seja feita em cada membro dele.

Declaramos nosso grupo inimigo assim:

```javascript
this.enemies = this.physics.add.group();
```

Isso criará um grupo chamado `inimigos`.

Agora, vamos colocar nossos inimigos na tela. Para tornar isso mais fácil, usaremos outro método auxiliar chamado `createEnemies()` (que, novamente, já foi feito para você sem nada dentro dele):

<!--- ![criar_inimigos](../media/5/create_enemies.png) --->
<img src="../media/5/create_enemies.png" alt="criar_inimigos" style="width:950px;"/>

Agora, chame este método no método `create()` em vez do método `update()` como fizemos para o movimento do jogador porque queremos gerar o inimigo apenas uma vez no início do jogo:

<!--- ![mover_inimigos](../media/5/enemies_move.png) --->
<img src="../media/5/enemies_move.png" alt="mover_inimigos" style="width:950px;"/>

A sintaxe para criar uma variável inimiga "enemy" na coordenada (X, Y), com a planilha de sprites `enemies` e dentro do grupo `enemies` que você declarou anteriormente é semelhante a esta:

```javascript
var enemies = this.enemies.create(X, Y, 'enemies');
```

## Atividade 1: Colocando um Inimigo

Experimente escolhendo uma coordenada (X, Y) e colocando esta linha de código no método createEnemies(). Você também precisará reproduzir a animação logo após criar o inimigo (então será no método createEnemies()).
![declarar](../media/5/enemy-one.PNG)
Deve ser algo assim (com uma localização potencialmente diferente - este inimigo foi colocado em (300, 100))

## Atividade 2: Colocando mais Inimigos

Agora vamos adicionar mais alguns inimigos. Adicione alguns novos inimigos no mesmo método, mas tenha cuidado porque cada variável inimiga que você cria dentro do mesmo escopo deve ter um nome de variável diferente.
![declarar](../media/5/enemy-multiple.PNG)

## Atividade 3: Colocando um Bloco de Inimigos

Agora que você pegou o jeito, vamos tentar algo um pouco desafiador e criar os inimigos neste padrão de bloco mostrado abaixo. No entanto, há um problema: faça isso SEM declarar cada inimigo com uma linha individual.

`DICA: use um loop for nested`
![declarar](../media/5/enemy-block.PNG)
