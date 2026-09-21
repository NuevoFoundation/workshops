```markdown
---
title: "活动 3 - 为你的歌曲添加效果"
date: 2019-07-23T11:45:38-07:00
weight: 5
draft: false
---

## EarSketch 中的效果

**效果** 允许制作人将音频片段的声音改变为其独特的声音。与我们使用 `fitMedia()` 添加新音频片段的方法类似，我们必须使用 `setEffect()` 函数为每个音频片段定义特定效果。需要注意的是，可以在同一轨道上添加多个效果。这使制作人能够将多个效果组合在一起。EarSketch 中内置了许多效果。要查看所有效果，请访问此 [链接](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python)，并确保导航栏中选择了 *Curriculum* 页。

在开始为歌曲添加效果之前，让我们来拆解两个 `setEffect` 函数的组成部分：

<img src="../img/screenshot-seteffect1.png" height="30"/>

- `track`: 效果应用到的轨道编号。注意：要对主轨道应用效果，请将轨道值设置为 0。主轨道是所有音频共同播放的地方。这是一个简单的方法，可以对所有声音应用效果。
- `effectType`: 使用的具体效果。
- `effectParameter`: 使用效果的设置。
- `effectValue`: 应用于效果参数的值。
<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.3%;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>

<div class="row">
  <div class="column">
    <img src="../img/Robot_2_Pink.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_1_Green.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_2_Blue.PNG" width="45%">
  </div>
</div>

## 将 setEffect 函数添加到你的歌曲

既然我们已经对使用效果更加熟悉了，现在让我们为歌曲添加一个效果。

1. 找到 `setEffect` 函数块。此处有两个 `setEffect` 块，请选择最上面的一个。将块拖到现有代码块下面的脚本中。
2. 我们需要用自己的值替换参数。使用下拉菜单将 `track` 替换为 2（或任意你想选择的数字）。
3. 使用下拉菜单查看可供选择的不同效果类型，将其应用到 `effectType` 参数。让我们选择 DELAY 作为 `effectType`。
4. 既然我们已经选择了 `effectType`，需要选择一个 `parameter`。让我们选择 DELAY_FEEDBACK 作为 `parameter`。
5. 对最后一个参数输入一个有效值。因为我们选择了 DELAY_FEEDBACK，必须指定一个介于 -120.0 和 -1.0 之间的数字。例如：使用 -6.0 作为 DELAY_FEEDBACK 的效果值。

你的代码现在应该看起来像这样：

<img src="../img/screenshot-set-effect-1.png" height="400"/>
```