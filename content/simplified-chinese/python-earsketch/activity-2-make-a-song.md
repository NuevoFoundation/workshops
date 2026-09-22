```yaml
---
title: "活动 2 - 制作一首歌曲！"
description: "设置耳机"
prereq: "Python 基础：打印、注释、函数"
difficulties: ["中级"]
weight: 6
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/GVG8DlG1Tuo" title="活动 2 - 制作一首歌曲！- YouTube 视频" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

现在你已经学会了如何将音效添加到 Earsketch，我们来试着制作一首歌曲吧！你应该已经在 Earsketch 中添加了一个音频片段，但歌曲是由各种乐器组成的，因此我们需要添加更多的音频片段。

1. 添加另一个 `fitMedia()` 调用。
2. 找一个你想要添加到当前歌曲中的音频片段，然后将其作为 `fileName` 参数传入。
3. `track` 参数应该是一个唯一的数字。这将允许我们将声音放置在不同的轨道上。在不同的轨道上放置不同的声音，有助于我们保持声音的组织，并能够同时播放不同的声音。例如：如果第一个 `fitMedia()` 调用在轨道 1 上，那么第二个 `fitMedia()` 调用应该放在轨道 2 上。
4. 完成其余的参数。
5. 重复这些步骤，直到你的歌曲中至少有四种不同的音频声音。

现在你的代码看起来应该像这样：
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
```

![机器人制作歌曲](https://media.giphy.com/media/9RJRzvIuKGrL3tAchc/giphy.gif)
```