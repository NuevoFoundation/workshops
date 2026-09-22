---
title: "活动 1 - 设置节奏和添加声音"
description: "设置耳机"
prereq: "Python 基础：打印、注释、函数"
difficulties: ["中级"]
weight: 5
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/INHMwQoni-M" title="Activity 1 - Set tempo &amp; add sounds - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

让我们仔细看看已存在的代码并理解它的含义。

<img src="../img/screenshot-setup-complete.png" height="400"/>

`setTempo()` 函数允许你设置整个项目的节奏。节奏是指一段音乐演奏的速度。改变项目的节奏可以创建不同风格的音乐。试着通过改变 `setTempo` 函数中数字的值来改变节奏，看看会发生什么！请确保这个数字在 45-220 之间。以下是一些可以参考的节奏建议：

<img src="../img/img-tempo1.png" height="200"/>

现在我们的节奏已经设定好，是时候添加声音了。为此，我们必须使用 `fitMedia()` 函数。我们将在 `setTempo()` 函数的下方添加新的代码。

## 活动 1

1. 确保程序中的光标位于 `setTempo()` 函数的下方。

<img src="../img/screenshot-cursor.png" height="200"/>

2. 滚动代码编辑器左侧的 **API** 列表，找到 `fitMedia()` 函数。

<img src="../img/screenshot-find-fitmedia.png" height="400"/>

3. 点击 `fitMedia()` 右上角的 **粘贴** 图标，将该函数粘贴到 `setTempo` 函数下方。

<img src="../img/icon-paste.png"/>

4. 你可能会注意到，当你粘贴函数时，Earsketch 会生成一些占位文本，我们稍后需要替换这些占位文本。这些占位文本被称为 `参数`。

<img src="../img/screenshot-fitmedia.png" />

你可以为以下内容指定自己的值：

- `sound` - 前往“声音”面板，找到你喜欢的声音。
- `track` - 选择任何正整数作为轨道编号。
- `start/end` - 这些参数以小节为单位。小节是与特定节拍数量对应的时间段。

如果你不确定选择哪些值，可以试试以下内容：

- `fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)`

你的代码现在应该看起来像这样：

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

{{% notice warning %}}
确保方法调用的大小写正确。大多数编程语言（包括 Python）对大小写敏感。这意味着大小写不同可能会调用不同的函数。例如，`fitMedia()` 和 `FitMedia()` 是不同的函数。
{{% /notice %}}

6. 一旦你输入了自己的参数，按下运行，然后点击播放按钮来听你的音频片段！

<img src="../img/icon-play.png" />

- **如果你看到红色文本，就说明你遇到了错误！请寻求帮助。** `fitMedia()` 函数是 Earsketch 中制作音乐的核心功能。我们将会频繁使用这个函数，所以如果你对它的用法有任何疑问，请随时提问！

{{% notice info %}}

数字音频工作站 (DAW) 是显示声音的区域，位于 EarSketch 窗口的正中顶部。以下是 DAW 中一首歌曲不同部分的示例：

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}