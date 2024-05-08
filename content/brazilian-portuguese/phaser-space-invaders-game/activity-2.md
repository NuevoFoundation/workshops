---
title: “Atividade 2 – Animando a Nave do Jogador”
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 8
---

Para adicionar um pouco de vida ao nosso jogo, vamos fazer as coisas andarem! Anime o player que criamos.

<!--- ![parte_animação](../media/4/animation_part.png) --->
<img src="../media/4/animation_part.png" alt="parte_animação" style="width:950px;"/>

<!--- ![jogo_animação](../media/4/play_animation.png) --->
<img src="../media/4/play_animation.png" alt="jogo_animação" style="width:950px;"/>

Assim que sua nave estiver animada, ela deverá ficar assim. Observe as chamas saindo do motor da nave! (Embora possa ser mais rápido ou mais lento dependendo da taxa de quadros escolhida).

<!--- ![animação](../media/4/animation-ship.gif) --->
<img src="../media/4/animation-ship.gif" alt="animação" style="width:300px;"/>

Faremos um toque final na animação - moveremos o fundo também. Mude o plano de fundo de uma imagem normal para um TileSprite assim:

```javascript
this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
this.background.setOrigin(0, 0);
```

`TileSprites` permitirá que nosso plano de fundo se mova mesmo que não seja uma spritesheet porque é um tipo de Sprite com textura repetida, para que possa ser rolado pelo Canvas infinito do Phaser.

<!--- ![fundo_movimento](../media/4/move_background.png) --->
<img src="../media/4/move_background.png" alt="fundo_movimento" style="width:950px;"/>

Agora experimente! Se estiver funcionando corretamente, parecerá que a nave está voando pelo espaço!

<!--- ![nave espacial animação e fundo](../media/4/animation-flying.gif) --->
<img src="../media/4/animation-flying.gif" alt="nave espacial animação e fundo" style="width:300px;"/>
