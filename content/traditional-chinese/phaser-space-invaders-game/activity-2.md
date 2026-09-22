```markdown
---
title: "活動 2 - 為玩家的飛船添加動畫效果"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 8
---

為了讓我們的遊戲更加生動，我們來讓遊戲中的角色動起來吧！讓我們為已經建立的玩家添加動畫效果。

<!--- ![animation_part](../media/4/animation_part.png) --->
<img src="../media/4/animation_part.png" alt="animation_part" style="width:950px;"/>

<!--- ![play_animation](../media/4/play_animation.png) --->
<img src="../media/4/play_animation.png" alt="play_animation" style="width:950px;"/>

當你的飛船被添加動畫效果後，它應該看起來像這樣。注意看飛船引擎冒出的火焰！（雖然動畫速度可能會因為你選擇的幀率不同而有所快慢）。

<!--- ![animation](../media/4/animation-ship.gif) --->
<img src="../media/4/animation-ship.gif" alt="animation" style="width:300px;"/>

我們將為動畫添加最後一個細節——讓背景也移動。將背景從普通圖像更改為 `TileSprite`，如下所示：

```javascript
this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
this.background.setOrigin(0, 0);
```

`TileSprite` 允許我們的背景移動，儘管它不是一個精靈圖集，因為它是一種具有重複紋理的精靈，所以可以通過 Phaser 的無限 Canvas 進行滾動。

<!--- ![move_background](../media/4/move_background.png) --->
<img src="../media/4/move_background.png" alt="move_background" style="width:950px;"/>

現在試試看吧！如果它正常運作，畫面應該看起來像飛船正穿梭於太空中。

<!--- ![animation spaceship and background](../media/4/animation-flying.gif) --->
<img src="../media/4/animation-flying.gif" alt="animation spaceship and background" style="width:300px;"/>
```