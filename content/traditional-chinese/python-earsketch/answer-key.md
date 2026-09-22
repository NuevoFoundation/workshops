```markdown
---
title: "Python: EarSketch - 解答範例"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
這些是 EarSketch 工作坊的範例答案。由於 EarSketch 是一個創意音樂工作坊，因此有許多正確的答案。您選擇的音效剪輯、節奏與音軌號碼可以自由決定。如果您的程式能正常運行並創建出音樂，那麼就算正確！以下的例子與每個活動中展示的範例程式碼相匹配。
{{% /notice %}}

## 活動 1：設置節奏與添加聲音

使用 `fitMedia()` 設置節奏並添加一段聲音：

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

**每個參數的含義：**

| 參數      | 值       | 含義                       |
|-----------|----------|----------------------------|
| 音效剪輯  | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | 要播放的音效剪輯（可在聲音面板中瀏覽剪輯） |
| 音軌      | `3`      | 要放置聲音的音軌（任何正整數） |
| 起始位置  | `1`      | 聲音開始的小節數           |
| 結束位置  | `17`     | 聲音結束的結束小節數       |

{{% notice tip %}}
**常見學生問題:** 「我應該使用什麼樣的節奏？」

任何介於 45-220 的值都可以使用。以下是一些指導方針：
- **80-90**：嘻哈（Hip-hop）、陷阱音樂（Trap）
- **100-130**：流行音樂（Pop）、浩室音樂（House）
- **140-180**：鼓&貝斯（Drum & Bass）、Dubstep
{{% /notice %}}

## 活動 2：創建一首歌曲（多個聲音）

在不同的音軌上添加四個不同的音效剪輯：

```python
from earsketch import *

setTempo(120)
fitMedia(RD_TRAP_BELLLEAD_1, 1, 5, 9)
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
fitMedia(YG_TRAP_BASS_9, 4, 1, 9)
```

{{% notice tip %}}
**關鍵概念:** 每次 `fitMedia()` 調用應使用不同的音軌號碼。這樣能夠保持聲音的組織性，同時也能讓多個聲音同時播放。例如，音軌 1 播放一個聲音，音軌 2 播放另一個聲音，以此類推。
{{% /notice %}}

## 活動 3：使用函數組織結構

使用函數以 A-B-A 模式創建歌曲的段落：

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# 段落 A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

# 段落 B
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
```

**A-B-A 結構的運作方式：**

| 小節範圍 | 段落 | 調用的函數            |
|----------|------|---------------------|
| 1-9      | A    | `sectionA(1, 9)`    |
| 9-17     | B    | `sectionB(9, 17)`   |
| 17-25    | A（重複） | `sectionA(17, 25)` |

{{% notice tip %}}
**常見學生問題:** 「為什麼要使用函數而不是只用更多的 fitMedia 調用？」

函數允許您重複使用一組聲音，而不必重複多次撰寫 `fitMedia` 調用。如果要播放兩次段落 A，您只需兩次調用 `sectionA()` 並指定不同的起始/結束小節，而不是撰寫六次 `fitMedia` 調用。
{{% /notice %}}

## 活動 4：新增效果

使用 `setEffect()` 添加延遲效果：

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# 段落 A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

# 段落 B
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17