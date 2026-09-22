```markdown
---
title: "Activity 3 - 使用函数组织你的歌曲"
description: "设置耳机"
prereq: "Python基础：函数"
difficulties: ["中级"]
weight: 7
draft: true
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/cApCvf3hoiQ" title="Activity 3 - 使用函数组织你的歌曲 - YouTube视频" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

在EarSketch中，函数主要用于组织歌曲的不同部分。最常见的音乐形式是A-B-A，其中每一部分有四小节，并且A部分和B部分的声音不同。

现在我们已经学习了如何使用函数，让我们尝试用它们更好地组织我们的歌曲。

1. 使用`startMeasure`参数和`endMeasure`参数定义你的函数。
2. 将你希望函数表示的声音放在函数定义下方。
3. 尝试创建歌曲的多个部分（如主歌、合唱、前奏等），并用函数定义它们。如果你不这样做，仅使用多个`fitMedia`调用，你会发现你的程序会变得很长且难以理解。为了避免项目文件过大，请使用函数！

你的代码现在应该看起来像这样：

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# 部分 A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)  

# 部分 B
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
```
```