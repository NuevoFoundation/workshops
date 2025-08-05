---
title: "Criando Animações"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 7
---

## Animação no Phaser

A animação funciona mostrando um conjunto de imagens, uma após a outra, muito rapidamente.  
Quando isso acontece, nosso cérebro entende como se fosse movimento. É como se estivéssemos “enganando” a mente para pensar que esse conjunto de imagens é um único objeto em movimento.

![animation](../media/animation.png)

Usamos **spritesheets** para coisas que queremos animar, pois podemos criar a animação passando rapidamente por cada quadro da spritesheet.  
Para animar spritesheets, precisamos seguir dois passos.

---

O primeiro passo é criar as “instruções” para a animação:

```javascript
this.anims.create({
    key: "dude_anim",
	frames: this.anims.generateFrameNumbers("dude"),
	frameRate: 10,
	repeat: -1
});
```

Isso cria uma animação chamada `"dude_anim"` que funciona sobre o `"dude"`.  
- **frameRate** é a velocidade da animação.  
- **repeat** indica quantas vezes a animação se repete. Um número negativo significa que ela se repete infinitamente.

---

O segundo passo é simplesmente dizer para o jogo executar a animação que definimos. Isso também pode ser feito no `create()`:

```javascript
this.dude.anims.play("dude_anim");
```

{{% notice note %}}
Ao fazer essa chamada, ela **precisa** vir depois da linha onde o `dude` é colocado na tela, pois o código é lido de cima para baixo.  
Se colocarmos o comando antes, o computador não saberá o que animar.
{{% /notice %}}

Tente animar o **dude** da última lição. Brinque com os valores e veja como eles mudam o resultado final.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorAnimation" target="_blank">Abrir Replit</a>
