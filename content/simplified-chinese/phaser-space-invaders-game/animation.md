```markdown
---
title: "创建动画"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 7
---

## Phaser中的动画

动画是通过快速连续展示一组图片来实现的。当我们快速地展示这组图片时，大脑会将其视为一种运动。从某种意义上来说，你是在欺骗大脑，让它以为这组图片是一个在移动的整体。

![animation](../media/animation.png)

对于我们想要制作动画的元素，会使用精灵表（spritesheets），因为我们可以通过滚动精灵表来创建动画。为了对精灵表进行动画处理，需要完成两个步骤。

第一步是为动画创建“指令”。

```javascript
this.anims.create({
    key: "dude_anim",
	frames: this.anims.generateFrameNumbers("dude"),
	frameRate: 10,
	repeat: -1
});
```

这段代码创建了一个名为 "dude_anim" 的动画，用于 "dude" 上。`frameRate` 定义了动画的播放速度。`repeat` 指定动画播放的次数，负数表示动画会无限循环播放。

下一步是告诉游戏播放我们在指令中指定的动画。这一步可以在 `create()` 方法中完成。

```javascript
this.dude.anims.play("dude_anim");
```

{{% notice note %}}

当你编写这行播放动画的代码时，必须放在 `dude` 被添加到屏幕之后。因为代码是从上到下执行的，如果我们在`dude`被放置之前调用了这行代码，计算机将不知道要对哪个对象进行动画处理。

{{% /notice %}}

试着为上一课中的 `dude` 制作动画吧！随意更改参数值，观察它们对最终效果的影响。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorAnimation" target="_blank">启动Replit</a>
```