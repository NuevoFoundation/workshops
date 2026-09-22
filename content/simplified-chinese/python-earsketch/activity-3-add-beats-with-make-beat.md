```markdown
---
title: "活动 3 - 使用 makeBeat 给你的歌曲添加节拍"
description: "设置耳机"
prereq: "Python 基础：函数"
difficulties: ["中级"]
weight: 7
draft: false
---

让我们尝试为歌曲添加一些有趣的节拍！我们将使用 `makeBeat` 函数。

在使用 `makeBeat` 函数之前，我们先来理解 `字符串` 是如何工作的。

## 字符串

任何你看到以**引号**括起来的内容，都称为**字符串**。字符串只是字符的序列（无论是字母、数字还是符号）。例如，`"hello world"` 就是一个字符串。

对于 `makeBeat`，我们将混合使用以下三种类型的节拍来为歌曲创建一个有趣的节奏：

- `"0"` 播放一个音符长的声音。
- `"-"` 停顿（即产生一个音符长的静音）。
- `"+"` 持续（即让声音或静音延长一个音符的时长）。

`makeBeat` 函数默认认为我们要创建的节拍覆盖的一个小节有 16 个音符。因此，为了简化操作，我们将通过长度恰好为 16 个字符的字符串来创建节拍。虽然你可以使用任意长度的字符串，但长度是 16 的倍数（例如 16、32、48 等）效果最佳。

以下是一些有效节拍的例子：

- `"0+------0+------"`: 每小节播放 2 个音符，每个音符持续 2 个音符的时长，接着是 6 个音符的静音。

<figure>
    <audio
        controls
        src="../audio/makebeat1.mp3">
            测试音频，查看浏览器是否支持音频元素。如果无法播放音频，可能是你的浏览器不支持该
            <code>audio</code> 元素。
    </audio>
</figure>

- `"0-0-0-0-0-0-0-0-"`: 每小节播放 8 个音符，每个音符持续 1 个音符的时长。

<figure>
    <audio
        controls
        src="../audio/makebeat2.mp3">
            测试音频，查看浏览器是否支持音频元素。如果无法播放音频，可能是你的浏览器不支持该
            <code>audio</code> 元素。
    </audio>
</figure>

- `"0++0++0++0++0-0-"`: 以摇摆模式播放 6 个音符。

<figure>
    <audio
        controls
        src="../audio/makebeat3.mp3">
            测试音频，查看浏览器是否支持音频元素。如果无法播放音频，可能是你的浏览器不支持该
            <code>audio</code> 元素。
    </audio>
</figure>

现在，让我们开始为你的歌曲添加节拍吧！

## 活动 3

1. 确保程序中的光标位于所有 `fitMedia()` 函数的下方。

2. 滚动查看代码编辑器左侧的 **API** 列表，找到第一个 `makeBeat()` 函数。

<img src="../img/screenshot-find-makebeat.png" height="400"/>

3. 点击 `makeBeat()` 右上角的 **Paste** 图标，将函数粘贴到 `fitMedia` 函数下方。

<img src="../img/icon-paste.png"/>

4. 再次粘贴函数时，Earsketch 会生成一些我们稍后需要替换的`参数`。

<img src="../img/screenshot-makebeat.png" />

你可以为以下内容指定自己的值：

- `sound` - 前往 **Sounds** 面板。点击 **GENRES**，然后点击 **MAKEBEAT** 过滤器。从该列表中找到你喜欢的声音。

<img src="../img/screenshot-makebeat-sounds.png" height="400"/>

- `track` - 选择任何正整数作为轨道编号。确保该轨道编号尚未被使用。
- `start` - 指定节拍的起始小节。
- `beat` - 指定你想添加的节拍，使用理想的长度为 16 个字符的 `字符串`。

如果你不确定如何选择这些值，可以尝试以下代码：

- `makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")`

接着，再为你的歌曲添加一些新的 `makeBeat` 函数。尝试至少添加两个 `makeBeat` 函数。

你的代码现在应该看起来像这样：

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)  

fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000")
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-")
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000")
```
```