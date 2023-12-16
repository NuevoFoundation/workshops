---
title: "Habilitando entradas do usuário"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 9
---

## Entradas do usuário

As entradas são essenciais porque sem o usuário inserir coisas com controles, nosso jogo não é exatamente um jogo. Embora o Phaser suporte uma variedade de opções de entrada diferentes, abordaremos três que você usará no jogo Space Invaders.

## Teclas de seta

Vamos começar com um dos controles mais importantes: as teclas de seta. Primeiro, criaremos uma variável que seja capaz de detectar quando o jogador pressiona uma tecla de seta.

```javascript
this.cursors = this.input.keyboard.createCursorKeys();
```

Para usar esta variável, você deve escolher entre 4 declarações booleanas.

```javascript
this.cursors.up.isDown
this.cursors.down.isDown
this.cursors.left.isDown
this.cursors.right.isDown
```

Cada uma dessas declarações booleanas será igual a verdadeira se a tecla associada for pressionada e falsa se não for.

## Barra de espaço

Para adicionar uma entrada de barra de espaço, o processo será muito semelhante ao das teclas de seta. Primeiro criaremos uma variável que detecta a barra de espaço sendo pressionada.

```javascript
this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
```

Então podemos usar uma instrução booleana para verificar se a entrada foi pressionada.

```javascript
Phaser.Input.Keyboard.JustDown(this.spacebar)
```

## Clique Único

Você também pode usar o mesmo processo que usamos para adicionar entradas de teclas de seta e barra de espaço para cliques, mas abordaremos um método um pouco diferente aqui porque é algo que você provavelmente usará no jogo Space Invaders.

```javascript
this.input.once("pointerdown", this.restart, this);
```

Esta linha chama o método `this.restart` quando o jogador clica. No entanto, esta é uma entrada de uso único, o que significa que após o jogador clicar uma vez, ela não poderá mais ser usada sem ser chamada novamente. Você normalmente usará isso em algum lugar dentro de update() ou nas funções auxiliares em vez de create().
