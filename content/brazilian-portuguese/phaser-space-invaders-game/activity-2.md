---
title: "Atividade 2 - Animando a Nave do Jogador"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 8
---

Para dar mais vida ao nosso jogo, vamos colocar as coisas em movimento!  
Vamos animar o jogador que já criamos.

<img src="../media/4/animation_part.png" alt="animation_part" style="width:950px;"/>

<img src="../media/4/play_animation.png" alt="play_animation" style="width:950px;"/>

Quando a sua nave estiver animada, ela deve ficar assim.  
Repare nas chamas saindo do motor! (A velocidade pode variar dependendo da taxa de quadros — *frame rate* — que você escolheu).

<img src="../media/4/animation-ship.gif" alt="animation" style="width:300px;"/>

---

Vamos fazer um último ajuste na animação: também vamos mover o fundo.  
Troque o fundo de uma imagem comum para um **TileSprite** assim:

```javascript
this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
this.background.setOrigin(0, 0);
```

O **TileSprite** permite que o fundo se mova, mesmo sem ser uma spritesheet, pois é um tipo de *Sprite* com textura repetitiva que pode ser rolada no **canvas infinito** do Phaser.

<img src="../media/4/move_background.png" alt="move_background" style="width:950px;"/>

---

Agora teste!  
Se estiver funcionando, vai parecer que a nave está voando pelo espaço! 🚀

<img src="../media/4/animation-flying.gif" alt="animation spaceship and background" style="width:300px;"/>
