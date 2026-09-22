---
title: "Байланыштуу 2 - Оюндун оюнчунун кемесин анимациялоо"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 8
---

Оюндун жандуулугун арттыруу үчүн, бир нерселерди кыймылга келтиребиз! Биз жараткан оюнчуну анимациялайлы.

<!--- ![animation_part](../media/4/animation_part.png) --->
<img src="../media/4/animation_part.png" alt="animation_part" style="width:950px;"/>

<!--- ![play_animation](../media/4/play_animation.png) --->
<img src="../media/4/play_animation.png" alt="play_animation" style="width:950px;"/>

Кемеңиз анимацияланган соң, ал ушундай көрүнөт. Кеменин кыймылдаткычынан чыккан жалынды байкадыңызбы! (Албетте, бул сиз тандаган кадр ылдамдыгына жараша тез же жай болушу мүмкүн).

<!--- ![animation](../media/4/animation-ship.gif) --->
<img src="../media/4/animation-ship.gif" alt="animation" style="width:300px;"/>

Анимацияга акыркы тийүү киргизебиз – фонду дагы кыймылдатабыз. Фондун кадимки сүрөтүн `TileSprite` катары өзгөртүү керек, муну төмөнкүдөй кылсаңыз болот:

```javascript
this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
this.background.setOrigin(0, 0);
```

`TileSprites` фонуңузду кыймылдатууга мүмкүнчүлүк берет, ал спрайт эмес болсо да, анткени ал кайталанган текстурасы бар спрайттын бир түрү, жана ал Phaser'дин чексиз Canvas аркылуу жылдырылат.

<!--- ![move_background](../media/4/move_background.png) --->
<img src="../media/4/move_background.png" alt="move_background" style="width:950px;"/>

Эми аны байкап көрүңүз! Эгер туура иштесе, анда кеме мейкиндикте учуп бараткандай көрүнөт!

<!--- ![animation spaceship and background](../media/4/animation-flying.gif) --->
<img src="../media/4/animation-flying.gif" alt="animation spaceship and background" style="width:300px;"/>