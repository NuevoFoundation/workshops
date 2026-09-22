---
title: "Activity 3 - 使用函數來組織你的歌曲"
description: "設定耳機"
prereq: "Python 基礎：函數"
difficulties: ["中級"]
weight: 7
draft: true
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/cApCvf3hoiQ" title="Activity 3 - Organize your song using functions - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

在 EarSketch 中，函數主要用來組織歌曲的不同部分。最常見的音樂結構是 A-B-A，其中每個部分的長度是四小節，並且 A 部分與 B 部分聽起來不同。

現在我們已經學會如何使用函數，讓我們試著用它們來更好地組織我們的歌曲。

1. 使用 `startMeasure` 參數和 `endMeasure` 參數來定義你的函數。  
2. 將你希望函數表示的聲音放在函數定義下方。  
3. 嘗試創建歌曲的多個部分（如主歌、副歌、引子等），並使用函數來定義它們。如果你不這樣做，而只使用多個 `fitMedia` 調用，你會發現你的程式會變得冗長且難以理解。為了避免產生一個過於龐大的項目檔案，請使用函數！

你的程式碼現在應該看起來類似這樣：

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# A 部分
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)  

# B 部分
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
```