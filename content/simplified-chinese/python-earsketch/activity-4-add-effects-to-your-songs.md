---
title: "活动 4 - 给你的歌曲添加效果"
description: "设置耳机"
weight: 8
prereq: "Python 基础: 打印、注释、函数"
difficulties: ["中级"]
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/vryYSBvwnIY" title="活动 4 - 给你的歌曲添加效果 - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 在 EarSketch 中使用效果

**效果** 允许制作人将音频剪辑的声音修改为独特的声音。类似于我们使用 `fitMedia()` 来添加新的音频片段，我们需要使用 `setEffect()` 函数为每个音频片段定义特定效果。需要注意的是，多个效果可以同时应用于同一轨道。这使得制作人可以将多个效果组合在一起。EarSketch 内置了许多效果。要查看所有效果，请访问此 [链接](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python)，并确保 *课程* 面板出现在屏幕右侧。

在我们开始为歌曲添加效果之前，先来分解一下两个 `setEffect` 函数的组成部分：

![](../img/screenshot-seteffect1.png)

- `track`：应用效果的轨道编号。注意：要将效果应用于主轨道，请将轨道值设置为 0。主轨道是所有音频一起播放的地方。这是一种快速将效果应用于所有声音的方式。
- `type`：使用的具体效果类型
- `parameter`：效果的设置参数
- `value`：应用于效果参数的值

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

## 在你的歌曲中添加 setEffect 函数

既然我们对使用效果有所了解，现在就来为我们的歌曲添加一个效果。

1. 在左侧的 API 浏览器中，滚动到 `setEffect` API。
2. 使用粘贴图标将 `setEffect` 函数调用插入到代码中。
3. 我们需要用自己的值替换参数。为 `track` 放入一个整数值。我们可以设置为 2。
4. 对于其他的效果参数，点击 `setEffect` API 旁边的 **Open**，你将看到一个链接“Every Effect Explained in Detail”（每种效果的详细解释）。点击该链接打开窗口右侧的对应部分。

<img src="../img/screenshot-seteffect-open.png" height="400"/>

<img src="../img/screenshot-seteffect-explain.png" width="200"/>

5. 你可能会注意到 EarSketch 有许多不同类型的效果。默认情况下，你应该会看到右侧显示第 10.1 节 BANDPASS。现在，我们将使用 10.4 节中的 DELAY 作为 `setEffect` 函数调用中的 `type`。
6. 现在我们已经选择了 `type`，需要一个 `parameter`。导航到右侧的第 10.4 节，查看 DELAY 支持的不同参数。以下是该部分的图片。我们推荐使用 DELAY\_FEEDBACK。

![参数效果图片](../img/screenshot-effect-parameter.png)

7. 对于最后一个参数，输入一个有效的值。既然我们选择了 DELAY\_FEEDBACK，我们需要指定一个介于 -120.0 到 -1.0 之间的数字（如上图所示）。例如: 使用 -6.0 作为 DELAY\_FEEDBACK 的效果值。

此时你的代码应类似于以下内容：

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, 1, 9)
fitMedia(HOUSE_MAIN_BEAT_002, 4, 1, 9)
fitMedia(HOUSE_ROADS_BASS_001, 5, 1, 9)

fitMedia(Y37_ORGAN_1, 2, 9, 17)
fitMedia(HOUSE_ROADS_BASS_001, 5, 9, 17)
fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, 9, 17)

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000")
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-")
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000")

setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
setEffect(2, DELAY, DELAY_TIME, 1200.0)
```