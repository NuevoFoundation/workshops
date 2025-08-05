---
title: "Atividade 5 - Fazendo os Inimigos se Moverem"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 12
---

No momento, os inimigos estão um pouco sem graça porque ficam parados.  
Vamos fazê-los se mover um pouco! Nosso objetivo será fazer com que se movam da esquerda para a direita assim:  
![move](../media/6/enemy-move.gif)

---

Vamos começar fazendo os inimigos se moverem para a esquerda assim que forem criados. Podemos fazer isso adicionando apenas uma linha de código:

```javascript
enemy.body.velocity.x = -90;
```

Coloque essa linha no método `createEnemies()`:

<img src="../media/6/move_enemies.png" alt="move enemies" style="width:950px;"/>

---

Se você testar agora, verá que os inimigos continuam indo para a esquerda infinitamente, por causa do **canvas infinito** do Phaser.  
Vamos fazer com que mudem de direção antes de saírem da tela. Podemos fazer isso com um **timer**, que é uma ferramenta que chama uma função após um certo intervalo de tempo.  

A função chamada pelo timer vai mudar a direção dos inimigos. Podemos também fazer com que o timer rode infinitamente (que é o que faremos aqui).  
Coloque o timer abaixo no final do método `createEnemies()`:

```javascript
this.enemyTimer = this.time.addEvent({
    delay: 1500,
    callback: this.changeEnemyDirection,
    callbackScope: this,
    loop: true
});
```

<img src="../media/6/timer_function.png" alt="timer_function" style="width:950px;"/>

---

Esse timer chama continuamente o método `changeEnemyDirection()` após um intervalo de tempo.  
Ainda não colocamos nada dentro dele, então vamos fazer isso agora: adicione código ao `changeEnemyDirection()` para mudar a direção de **todos** os inimigos do grupo (essa foi uma das razões para termos criado um grupo!):

<img src="../media/6/change_direction.png" alt="change_direction" style="width:950px;"/>

---

{{% notice hint %}}
Perceba que, se você usar os mesmos valores de timer que usamos, sua nave pode sair e entrar na tela.  
Ao invés de limitar o movimento como fizemos com a nave do jogador, vamos apenas mover a posição inicial do inimigo um pouco mais para a direita (assim, o timer terá o tempo certo para ir e voltar na tela).
{{% /notice %}}
