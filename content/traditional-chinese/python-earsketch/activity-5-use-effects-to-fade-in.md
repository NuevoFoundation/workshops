---
title: "Activity 5 - 使用效果來淡入"
description: "設置耳機"
weight: 9
prereq: "Python 基礎: 印出、註解、函數"
difficulties: ["中階"]
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/VSm6m5p3CUg" title="Activity 5 - Use effects to fade in - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

既然你已經在你的歌曲中添加了一個效果，現在讓我們試著讓歌曲的開頭淡入。

在活動 4 中，我們使用了 `setEffect` 函數將效果應用到整首歌曲的特定音軌，但是如果您只希望歌曲的某個特定部分擁有效果該怎麼辦？使用帶有更多參數的 `setEffect` 函數！

<img src="../img/screenshot-seteffect2.png" alt="Code snippet" width="60%"/>

- `startValue`: 起始值，應用到參數的值
- `start`: 設定起始值的時間點（小節）
- `endValue`: 結束值，參數的終止值
- `end`: 設定結束值的時間點（小節）

此 `setEffect` 函數的版本使我們能夠對歌曲中的特定片段執行*自動化*。自動化是一種隨時間改變效果值的方法。自動化的一種用途是讓歌曲淡入或淡出。為此，我們需要在“**VOLUME**”類型中調整 **GAIN** `parameter` 的音量。例如，如果我們將 `startValue` 定義為 -60 分貝並將 `endValue` 定義為 0 分貝，聽起來就像我們的歌曲隨著時間淡入。要調整效果的起始點和長度，只需指定 `start` 和 `end`。

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## 在你的歌曲中添加另一個 setEffect 函數

1. 在你的代碼中添加另一個 `setEffect` 函數呼叫，但確保呼叫中包含所有 7 個參數。
2. 將 `type` 設置為 VOLUME。
3. 使用“每種效果詳細解釋”參考指南來查看 `VOLUME` 擁有哪些參數。要調整音頻片段的響度，請使用 GAIN `parameter`。
4. 如果我們希望讓某段聲音聽起來像是淡入效果，我們必須讓聲音的音量從完全消失開始逐漸增加，直到大約 0 分貝。為此，將 effectStartValue 設置為非常低的值，將 effectEndValue 設置為更高的值。

{{% notice tip %}}
*提示:* 音量以分貝測量。在分貝中，數字越正，聲音越大。另外，盡量不要超過 0 分貝。
{{% /notice %}}

5. 設置 `start` 和 `end` 值以指定何時開始和停止淡入效果。

你的代碼現在應看起來像這樣：

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

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000")
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-")
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000")

setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
setEffect(2, DELAY, DELAY_TIME, 1200.0)
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3)
```