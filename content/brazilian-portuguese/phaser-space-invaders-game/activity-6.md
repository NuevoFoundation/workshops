---
title: "Atividade 6 - Reiniciando o Jogador após Ser Destruído"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 13
---

Nós já criamos inimigos bem sólidos, mas agora existe um problema — eles não fazem nada com o jogador!  
Especificamente, eles não conseguem te machucar de nenhuma forma. Vamos mudar isso.  
No jogo final, haverá duas maneiras de você receber dano: ser atingido por um laser inimigo ou encostar diretamente em um inimigo. Vamos começar pelo segundo caso, pois é mais simples.

A colisão no Phaser é relativamente fácil de implementar.

---

Primeiro, vamos importar uma spritesheet de **explosão** e implementar sua animação na **Scene 1**:

<img src="../media/7/load_sprite.png" alt="load_sprite" style="width:950px;"/>
<img src="../media/7/create_sprite.png" alt="create_sprite" style="width:950px;"/>

Essa será a explosão que toca quando o jogador é destruído!

---

O Phaser possui formas bem práticas de lidar com colisões entre objetos.  
Podemos simplesmente adicionar esta linha no `create()` da **Scene 2**:

```javascript
this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
```

<img src="../media/7/overlap_hurtPlayer.png" alt="overlap with player" style="width:950px;"/>

Essa linha chama o método `hurtPlayer()` quando `this.player` e algum inimigo do grupo `this.enemies` se encostam.  
O método é chamado passando o jogador e o inimigo como argumentos.

---

Agora vamos criar o método `hurtPlayer()`:

<img src="../media/7/function.png" alt="hurtPlayer" style="width:950px;"/>

Primeiro, destruímos o inimigo e desativamos o jogador com:

```javascript
enemy.destroy();
player.disableBody(true, true);
```

Isso faz o inimigo desaparecer e o jogador ficar invisível e não interativo (mas ainda existe no código).  

---

Agora, vamos fazer o jogador **reviver** após uma pequena pausa (dando tempo para o jogador reagir ao dano).  
Para isso, usaremos um **timer** (como fizemos para mudar a direção dos inimigos), mas com:
- Função `resetPlayer()` como callback
- Um delay menor
- Sem repetição (loop)

---

No método `resetPlayer()`, escolha uma coordenada para o respawn e defina a posição `(X, Y)` do jogador.  
Depois, habilite o jogador novamente com:

```javascript
this.player.enableBody(true, x, y, true, true);
```

<img src="../media/7/resetPlayer.png" alt="reset_player" style="width:950px;"/>

---

Agora vamos criar um novo objeto de explosão editando `explosion.js`:

<img src="../media/7/explosion.png" alt="explosion" style="width:950px;"/>

Ele estende `Phaser.GameObjects.Sprite`, o que nos permite usar o construtor dessa classe.  
Esse objeto vai tocar a animação de explosão na posição especificada.  
O código fica todo no construtor e requer apenas duas linhas para serem preenchidas.

---

Depois, volte ao `hurtPlayer()` na **Scene 2** e crie **duas explosões**:

1. Uma na posição do jogador  
2. Outra na posição do inimigo  

<img src="../media/7/create_explosion.png" alt="create_explosion" style="width:950px;"/>

---

Para deixar o renascimento do jogador mais suave, vamos usar um **tween** após ele aparecer:  

<img src="../media/7/reset_tween.png" alt="reset_tween" style="width:950px;"/>

O tween é usado para animar alguma característica do objeto.  
Neste caso, vamos animar a **alpha** (visibilidade) do jogador, começando em 0.5 até chegar a 1:

```javascript
var tween = this.tweens.add({
    targets: this.player,
    y: config.height - 64,
    ease: 'Power1',
    duration: 1500,
    repeat: 0,
    onComplete: function(){
        this.player.alpha = 1;
    },
    callbackScope: this
});
```

---

Agora sim! A animação de revival do jogador fica muito mais suave.

![collision](../media/respawn-second.gif)
