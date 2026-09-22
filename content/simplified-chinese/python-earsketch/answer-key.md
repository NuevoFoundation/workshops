```yaml
---
title: "Python: EarSketch - 答案参考"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
以下是EarSketch工作坊的示例解决方案。由于EarSketch是创造性的音乐工作坊，可能有许多有效的答案。您选择的声音片段、节奏和轨道编号都由您决定。只要代码运行没有错误并能够产生音乐，就说明您的代码是正确的！下面的示例与每个活动中的示例代码一致。
{{% /notice %}}

## 活动 1：设置节奏并添加声音

使用 `fitMedia()` 设置节奏并添加一个声音：

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

**每个参数的含义：**

| 参数       | 值                                   | 意义 |
|------------|--------------------------------------|------|
| 音频片段   | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | 要播放的音频（在声音面板中可浏览找到） |
| 轨道       | `3`                                  | 将音频放在哪个轨道上（任意正整数） |
| 开始       | `1`                                  | 声音从哪一个小节开始 |
| 结束       | `17`                                 | 声音在哪一个小节结束 |

{{% notice tip %}}
**常见学生问题：**“我设置的节奏应该是多少？”

任何介于 45-220 的数字都有效。以下是一些指导意见：
- **80-90**：Hip-hop、Trap
- **100-130**：Pop、House
- **140-180**：Drum & Bass、Dubstep
{{% /notice %}}

## 活动 2：制作一首歌曲（多种声音）

在不同轨道上添加四个不同的音频片段：

```python
from earsketch import *

setTempo(120)
fitMedia(RD_TRAP_BELLLEAD_1, 1, 5, 9)
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
fitMedia(YG_TRAP_BASS_9, 4, 1, 9)
```

{{% notice tip %}}
**核心概念：**每次 `fitMedia()` 调用都应该使用不同的轨道编号。这样可以组织声音，并允许多个声音同时播放。轨道1播放一种声音，轨道2播放另一种声音，依此类推。
{{% /notice %}}

## 活动 3：使用函数组织

使用函数以A-B-A模式创建歌曲的部分：

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# 部分A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

# 部分B
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
```

**A-B-A结构的工作方式：**

| 小节范围 | 部分 | 调用的函数       |
|----------|------|-----------------|
| 1-9      | A    | `sectionA(1, 9)` |
| 9-17     | B    | `sectionB(9, 17)` |
| 17-25    | A（重复） | `sectionA(17, 25)` |

{{% notice tip %}}
**常见学生问题：**“为什么要使用函数，而不是直接调用更多的fitMedia？”

使用函数让您可以重复使用一组声音，而无需复制所有`fitMedia`调用。要让部分A播放两次，您只需调用`sectionA()`两次并指定不同的开始/结束小节，而无需重复写6次`fitMedia`调用。
{{% /notice %}}

## 活动 4：添加效果

使用 `setEffect()` 添加延迟效果：

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# 部分A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

# 部分B
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
setEffect(2, DELAY, DELAY_TIME, 1200.0)
```

**setEffect参数（使用4个参数版本）：**

| 参数     | 值        | 意义                           |
|----------|-----------|--------------------------------|
| 轨道     | `2`       | 应用效果的轨道（使用 `0` 表示主轨道/所有轨道） |
| 类型     | `DELAY`   | 效果类型                       |
| 参数     | `DELAY_FEEDBACK` | 调整哪个设置                 |
| 值       | `-6.0`    | 该设置的值（范围：