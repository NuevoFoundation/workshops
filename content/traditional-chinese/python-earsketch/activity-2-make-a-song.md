---
title: "Activity 2 - Make a song!"
description: "Setting up headphones"
prereq: "Python Basics: Print, Comments, Functions"
difficulties: ["intermediate"]
weight: 6
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/GVG8DlG1Tuo" title="Activity 2 - Make a song! - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

現在您已經學會如何將音效加入到 Earsketch 中，現在讓我們來嘗試製作一首歌曲吧！您應該已經在 Earsketch 裡有一段音頻片段，但歌曲通常由多種樂器組成，因此我們需要加入更多的音頻片段。

1. 新增另一個 `fitMedia()` 呼叫。
2. 找到您想要加入目前歌曲的音頻片段，並將其輸入到 `fileName` 參數中。
3. `track` 參數應為唯一的數字。這樣可以讓我們將音效放在不同的音軌上。將不同音軌中的音效分開能幫助我們保持音效的組織性並且能同時播放不同的音效。例如：如果第一個 `fitMedia()` 呼叫是在音軌 1，則第二個 `fitMedia()` 呼叫應該是在音軌 2。
4. 完成其他參數。
5. 重複上述步驟，直到您的歌曲中至少擁有四個不同的音效。

您的程式碼現在應看起來像這樣：
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

![機器人正在製作歌曲](https://media.giphy.com/media/9RJRzvIuKGrL3tAchc/giphy.gif)