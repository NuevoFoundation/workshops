---
title: "Atividade 4 - Adicionando Inimigos"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 11
---

Agora, vamos criar alguns inimigos para o nosso jogador enfrentar!  
Primeiro, vamos carregar uma **spritesheet** para os inimigos na **Scene 1**, assim como fizemos para o jogador.  
Use a mesma sintaxe que usou para carregar o jogador, mas com um nome diferente, usando `assets/enemies.png` como fonte da spritesheet, e `frameWidth` e `frameHeight` iguais a 16:

<img src="../media/5/load_sprite.png" alt="load_sprite" style="width:950px;"/>

---

Além disso, crie outra animação na **Scene 1**, do mesmo jeito que criou a animação do jogador (você pode usar os mesmos valores para `frameRate` e `repeat`, mas lembre-se de usar `enemies` no `frames`):

<img src="../media/5/create_sprite.png" alt="create_sprite" style="width:950px;"/>

---

Esse jogo terá muitos inimigos que parecem idênticos e se comportam de forma muito semelhante. Para facilitar a codificação, vamos usar um conceito do Phaser chamado **group** para controlar todos os inimigos de uma vez.  
Um **group** é exatamente o que parece — um grupo de objetos. Podemos referenciar esse grupo quando quisermos fazer alterações em todos os seus membros.

Declaramos o grupo de inimigos assim:

```javascript
this.enemies = this.physics.add.group();
```

Isso cria um grupo chamado `enemies`.

---

Agora, vamos colocar os inimigos na tela. Para facilitar, vamos usar um método auxiliar chamado `createEnemies()` (que já foi criado para você, mas está vazio):

<img src="../media/5/create_enemies.png" alt="create_enemies" style="width:950px;"/>

Chame esse método no `create()` em vez de no `update()`, pois queremos que os inimigos sejam criados apenas uma vez, no início do jogo:

<img src="../media/5/enemies_move.png" alt="enemies_move" style="width:950px;"/>

A sintaxe para criar uma variável `enemy` na coordenada `(X, Y)`, usando a spritesheet `enemies` e dentro do grupo `enemies` é:

```javascript
var enemy = this.enemies.create(X, Y, 'enemies');
```

---

## Atividade 1: Posicionando um Inimigo

Teste escolhendo uma coordenada `(X, Y)` e colocando essa linha no método `createEnemies()`.  
Você também precisa tocar a animação logo após criar o inimigo (então será tudo dentro de `createEnemies()`).

![declare](../media/5/enemy-one.PNG)

O resultado será parecido com este (mas com posição diferente — neste exemplo, foi colocado em `(300, 100)`).

---

## Atividade 2: Posicionando mais Inimigos

Agora vamos adicionar mais inimigos. Adicione alguns no mesmo método, mas cuidado: cada variável de inimigo criada no mesmo escopo precisa ter um **nome diferente**.

![declare](../media/5/enemy-multiple.PNG)

---

## Atividade 3: Criando um Bloco de Inimigos

Agora que você já pegou o jeito, vamos tentar algo mais desafiador: criar inimigos no padrão de bloco mostrado abaixo.  
Mas tem um detalhe: faça isso **sem** declarar cada inimigo com uma linha separada.

`DICA: use um loop for aninhado`  
![declare](../media/5/enemy-block.PNG)
