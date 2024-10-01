---
title: "Atividade 5 - Fazendo os Inimigos se Moverem"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 12
---

No momento, os inimigos são um pouco chatos porque estão parados. Vamos fazê-los se mover um pouco! Nosso objetivo será fazer com que eles se movam da esquerda para a direita assim:
![mover](../media/6/enemy-move.gif)

Vamos começar fazendo com que os inimigos se movam para a esquerda depois de criados. Podemos fazer isso simplesmente adicionando uma linha de código:

```javascript
enemy.body.velocity.x = -90;
```

Coloque em nosso método createEnemies():

<!--- ![mover inimigos](../media/6/move_enemies.png)--->
<img src="../media/6/move_enemies.png" alt="mover inimigos" style="width:950px;"/>

Mas se você testar o código agora, podemos ver que os inimigos continuam indo para a esquerda infinitamente por causa da tela infinita do Phaser. Vamos fazê-los mudar de direção antes de saírem da tela. Podemos fazer isso com um temporizador, uma ferramenta que nos permite chamar uma função após um determinado período de tempo. A função que o temporizador chama mudará a direção do inimigo. Também podemos fazer o temporizador funcionar infinitamente para que ele continue executando a função após cada intervalo de tempo (o que faremos aqui). Coloque o temporizador abaixo no final do método `createEnemy()`.

```javascript
this.enemyTimer = this.time.addEvent({
    delay: 1500,
    callback: this.changeEnemyDirection,
    callbackScope: this,
    loop: true
});
```

<!--- ![função_temporizador](../media/6/timer_function.png)--->
<img src="../media/6/timer_function.png" alt="função_temporizador" style="width:950px;"/>

Este é um temporizador que chama continuamente o método `changeEnemyDirection()` após um determinado intervalo de tempo. No entanto, ainda não colocamos nenhum conteúdo nele. Vamos fazer isso agora: coloque o código no método `changeEnemyDirection()` que mudará a direção de cada inimigo no grupo de inimigos (esta é uma das razões pelas quais criamos um grupo!):

<!--- ![mudar_direção](../media/6/change_direction.png)--->
<img src="../media/6/change_direction.png" alt="mudar_direção" style="width:950px;"/>

{{% notice hint %}}

Observe como, entretanto, (se você usou os mesmos valores de temporizador que usamos), sua nave está entrando e saindo da tela. Em vez de vinculá-lo à tela como fizemos com a nave do jogador, simplesmente moveremos a posição inicial do inimigo um pouco para a direita (porque o temporizador tem o tempo correto para ir e voltar na tela).

{{% /notice %}}
