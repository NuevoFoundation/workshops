---
title: "活动5 - 使用效果淡入"
description: "设置耳机"
weight: 9
prereq: "Python基础：打印、注释、函数"
difficulties: ["中级"]
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/VSm6m5p3CUg" title="活动5 - 使用效果淡入 - YouTube视频" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

现在你已经在歌曲中添加了一个效果，让我们尝试为歌曲的引入部分添加淡入效果。

在活动4中，我们使用了 `setEffect` 函数为特定轨道应用效果，并作用于整个歌曲的持续时间。但如果你只想为歌曲的某一特定部分添加效果，该怎么办呢？使用带更多参数的 `setEffect` 函数吧！

<img src="../img/screenshot-seteffect2.png" alt="代码片段" width="60%"/>

- `startValue`：应用于参数的起始值
- `start`：设定起始值的时间点（小节）
- `endValue`：参数的结束值
- `end`：设定结束值的时间点（小节）

这种版本的 `setEffect` 函数允许我们对歌曲的特定部分执行**自动化**操作。自动化是一种随着时间改变效果值的方式。自动化的一种用途是让歌曲淡入或淡出。要实现这一点，我们需要在 **VOLUME** 的 **GAIN** 参数中调整音量。例如，如果我们将 `startValue` 定义为 -60 分贝，将 `endValue` 定义为 0 分贝，就会让我们的歌曲随着时间慢慢淡入。要调整效果的开始位置和持续时间，指定 `start` 和 `end` 即可。

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## 为你的歌曲添加另一个 `setEffect` 函数

1. 在代码中添加另一个 `setEffect` 函数调用，但要确保调用中包含所有7个参数。
2. 将 `type` 设置为 VOLUME。
3. 使用《每种效果的详细解释》参考指南，查看 `VOLUME` 的参数。要调整音频剪辑的响度，请使用 GAIN 参数。
4. 如果我们希望让某些声音听起来像是渐渐淡入，需要将声音的音量从无到逐渐增加至接近 0 分贝。为此，设置一个非常低的 `effectStartValue`，并将 `effectEndValue` 设置为较高的值。

{{% notice tip %}}
*提示：* 音量以分贝为单位测量。分贝越高，声音越响亮。此外，尽量不要超过 0 分贝。
{{% /notice %}}

5. 设置 `start` 和 `end` 的值来指定淡入效果的开始和结束时间。

你的代码现在应该看起来像这样：

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
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3)
```