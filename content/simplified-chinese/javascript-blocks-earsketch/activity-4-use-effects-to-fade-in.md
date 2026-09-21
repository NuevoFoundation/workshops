```markdown
---
title: "活动 4 - 使用效果淡入"
date: 2019-07-23T11:45:38-07:00
weight: 6
draft: false
---

现在你的歌曲里已经有一个效果了，让我们尝试将歌曲开头设置为淡入。

在活动 3 中，我们使用了 `setEffect` 函数将一个效果应用到整首歌的特定轨道上，但如果你只想对歌曲的某一部分应用效果呢？使用带有更多参数的 `setEffect` 函数！

<img src="../img/screenshot-seteffect2.png" height="30"/>

- `startValue`：应用到参数的起始值
- `start`：设置起始值的节拍位置
- `endValue`：参数的结束值
- `end`：设置结束值的节拍位置

此版本的 `setEffect` 函数允许我们对歌曲的特定部分执行**自动化**。自动化是一种随着时间变化调整效果值的方式。自动化的一个用途是使歌曲淡入或淡出。为了达到这一效果，我们必须在 **VOLUME** `effectType` 中的 **GAIN** `parameter` 上调整音量值。例如，如果我们定义 `startValue` 为 -60 分贝，并将 `endValue` 定义为 0 分贝，它听起来就像是歌曲随着时间渐渐淡入。通过指定 `start` 和 `end` 来调整效果的起始点和持续时间。

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## 在你的歌曲中添加另一个 setEffect 函数

1. 在代码中添加另一段 `setEffect`，确保该代码块中包含 7 个参数。
2. 使用下拉菜单选择 VOLUME 作为 `effectType`。
3. 使用下拉菜单选择 GAIN 作为 `parameter`。
4. 如果我们想让某段声音听起来像是淡入效果，它的音量必须开始非常低并逐渐增加。为此，将 `startValue` 设置为非常低的值（例如 -60），并将 `endValue` 设置为较高的值（例如 0）。

{{% notice tip %}}
*提示：* 音量以分贝为单位测量。分贝的数值越高，声音就越响。此外，尽量不要超过 0 分贝。
{{% /notice %}}

5. 为 `start` 和 `end` 参数设置值，以指定何时开始和何时结束淡入效果。

你的代码看起来应该像这样：

<img src="../img/screenshot-set-effect-2.png" height="400"/>
```