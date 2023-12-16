---
title: "Criando animações"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 7
---

## Animação em Phaser

A animação funciona mostrando um conjunto de imagens consecutivas muito rapidamente. Quando fazemos isso rapidamente, nossa mente vê isso como movimento. De certa forma, você está enganando a mente fazendo-a pensar que esse conjunto de imagens é apenas uma coisa que está se movendo.

![animação](../media/animation.png)

Usamos spritesheets para coisas que queremos animar porque podemos criar essa animação percorrendo as spritesheets. Para animar spritesheets, há duas etapas que devemos seguir.

O primeiro passo é criar as “instruções” para a animação

```javascript
this.anims.create({
    key: "dude_anim",
	frames: this.anims.generateFrameNumbers("dude"),
	frameRate: 10,
	repeat: -1
});
```

Isso cria uma animação chamada "dude_anim" que funciona em cima de "dude". A taxa de quadros é essencialmente a velocidade da animação. Repetir refere-se essencialmente a quantas vezes a animação se repete quando reproduzida, e um número negativo significa que a animação é reproduzida infinitamente.

O próximo passo é simplesmente dizer ao jogo para reproduzir a animação especificada em nossas instruções. Isso também pode ser feito em `create()`.

```javascript
this.dude.anims.play("cara_anim");
```

{{% notice note %}}

Quando você faz essa declaração de jogo, a linha deve ser colocada depois que o cara é colocado na tela, porque o código é escrito de cima para baixo, então se fizermos essa declaração de jogo antes de colocar o cara, o computador não saberá o que animar .

{{% /notice %}}

Tente animar o cara da última lição. Sinta-se à vontade para brincar com os valores e ver como eles alteram o resultado final.
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorAnimation" target="_blank">Iniciar Replit</a>