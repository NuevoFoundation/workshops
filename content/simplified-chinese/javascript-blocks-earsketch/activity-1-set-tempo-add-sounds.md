```markdown
---
title: "活动 1 - 设置节奏并添加声音"
date: 2019-07-23T11:45:38-07:00
weight: 3
draft: false
---

让我们更仔细地研究一下已有的代码并了解其含义。

<img src="../img/screenshot-setup-complete.png" height="400"/>

`setTempo()` 函数允许您设置整个项目的节奏（Tempo）。节奏是音乐演奏的速度。改变项目的节奏可以创造不同风格的音乐。尝试通过更改代码块中的数字来更改 `setTempo` 函数的节奏，看看会发生什么吧！请确保数字在 45 至 220 之间。以下是一些可以使用的节奏建议。

<img src="../img/img-tempo1.png" height="200"/>

现在我们已经设置了节奏，是时候添加声音了。为此，我们需要使用 `fitMedia()` 函数。我们将在 `setTempo()` 函数代码的下方插入新代码。

## 活动 1

1. 在代码编辑器左侧找到紫色的 `fitMedia()` 代码块。
2. 拖动 `fitMedia()` 代码块并将其插入到 `setTempo` 代码块的下面。
3. 您可能会注意到，当代码块被添加时，Earsketch 会显示一些需要稍后替换的占位文本。这些占位文本也被称为 `参数`。

<img src="../img/screenshot-parameters.png" height="100"/>

我们将用有效值替换这些占位文本。

- `sound` - 前往“Sounds”面板并找到您喜欢的声音。点击 `fitMedia()` 函数代码块中的 "sound"，然后按旁边“Paste”按钮把您想要添加的声音粘贴进去。声音的名称现在应该出现在 `fitMedia()` 代码块中。
- `trackNumber` - 使用下拉菜单选择任意正整数作为轨道编号。在此示例中，选择 `1`。
- `start/end` - 这些参数是以小节为单位的正整数。小节是与一定数量节拍相关的时间段。尝试将 `start` 设置为 `1`，将 `end` 设置为 `9`。

您的代码现在应该看起来像这样：

<img src="../img/screenshot-fit-media.png" height="400"/>

{{% notice warning %}}

确保函数块和文本放置正确。

{{% /notice %}}

5. 一旦您输入了自己的参数，按下运行按钮，然后点击播放按钮，聆听您的音频片段！

    - **如果您看到任何红色文本，表示您遇到了一些错误！请寻求帮助。** `fitMedia()` 函数是 Earsketch 音乐创作的核心工具。我们会经常使用这个函数，所以如果您对其用法有任何疑问，请随时询问！

{{% notice info %}}

**数字音频工作站** (DAW) 是声音显示的区域，它位于您 EarSketch 窗口的正中央顶部。以下是歌曲不同部分在 DAW 中显示的示例。

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}
```