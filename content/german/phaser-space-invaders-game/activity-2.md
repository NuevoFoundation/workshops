```markdown
---
title: "Aktivität 2 - Animieren des Spieler-Schiffs"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 8
---

Bringen wir etwas Leben in unser Spiel! Lassen Sie uns das Spielerobjekt animieren.

<!--- ![animation_part](../media/4/animation_part.png) --->
<img src="../media/4/animation_part.png" alt="animation_part" style="width:950px;"/>

<!--- ![play_animation](../media/4/play_animation.png) --->
<img src="../media/4/play_animation.png" alt="play_animation" style="width:950px;"/>

Sobald Ihr Schiff animiert ist, sollte es so aussehen. Beachten Sie die Flammen, die aus dem Motor des Schiffs kommen! (Es kann jedoch schneller oder langsamer sein, je nach der Bildrate, die Sie ausgewählt haben).

<!--- ![animation](../media/4/animation-ship.gif) --->
<img src="../media/4/animation-ship.gif" alt="animation" style="width:300px;"/>

Wir werden der Animation einen letzten Schliff geben – wir werden den Hintergrund ebenfalls bewegen. Ändern Sie den Hintergrund von einem normalen Bild zu einem TileSprite wie folgt:

```javascript
this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
this.background.setOrigin(0, 0);
```

`TileSprites` erlauben es unserem Hintergrund, sich zu bewegen, obwohl es sich nicht um ein Spritesheet handelt. Es ist eine Art Sprite mit einer wiederholenden Textur, sodass es durch Phasers unendliche Canvas gescrollt werden kann.

<!--- ![move_background](../media/4/move_background.png) --->
<img src="../media/4/move_background.png" alt="move_background" style="width:950px;"/>

Probieren Sie es jetzt aus! Wenn es richtig funktioniert, sieht es so aus, als ob das Schiff durch den Weltraum fliegt!

<!--- ![animation spaceship and background](../media/4/animation-flying.gif) --->
<img src="../media/4/animation-flying.gif" alt="animation spaceship and background" style="width:300px;"/>
```