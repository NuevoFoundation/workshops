---
title: "活動 3 - 使用 makeBeat 為您的歌曲添加節奏"
description: "設置耳機"
prereq: "Python 基礎：函數"
difficulties: ["中等"]
weight: 7
draft: false
---

讓我們嘗試為歌曲添加一些有趣的節奏！我們將使用 `makeBeat` 函數。

在使用 `makeBeat` 函數之前，先了解一下 `字串` 的工作方式。

## 字串

任何你看到的用 **雙引號** 包裹的內容都稱為 **字串**。字串僅僅是一個字符序列（無論是字母、數字或符號）。例如，`"hello world"` 是一個字串。

在使用 `makeBeat` 時，我們將混合搭配以下三種類型的節奏來為我們的歌曲創造有趣的節奏：

- `"0"` 播放一個音符的聲音。
- `"-"` 靜止（即，創造靜音）一個音符。
- `"+"` 延續（即，持續播放）聲音或靜音一個額外音符。

`makeBeat` 函數假設我們希望創建覆蓋每小節 16 個音符的節奏。因此，為了簡化操作，我們將創建長度恰好為 16 字符的字串。雖然您也可以使用任意長度的字串，但長度為 16 的倍數（如 16, 32, 48 等）會效果最佳。

以下是一些有效的節奏示例：

- `"0+------0+------"`：每小節播放 2 個音符，每個音符持續 2 個音符，然後靜止 6 個音符。

<figure>
    <audio
        controls
        src="../audio/makebeat1.mp3">
            測試音頻以查看您的瀏覽器是否支持音頻元素。如果無法播放音頻，可能意味著您的瀏覽器不支持此 
            <code>audio</code> 元素。
    </audio>
</figure>

- `"0-0-0-0-0-0-0-0-"`：每小節播放 8 個音符，每個音符持續 1 個音符。

<figure>
    <audio
        controls
        src="../audio/makebeat2.mp3">
            測試音頻以查看您的瀏覽器是否支持音頻元素。如果無法播放音頻，可能意味著您的瀏覽器不支持此 
            <code>audio</code> 元素。
    </audio>
</figure>

- `"0++0++0++0++0-0-"`：以擺動模式每小節播放 6 個音符。

<figure>
    <audio
        controls
        src="../audio/makebeat3.mp3">
            測試音頻以查看您的瀏覽器是否支持音頻元素。如果無法播放音頻，可能意味著您的瀏覽器不支持此 
            <code>audio</code> 元素。
    </audio>
</figure>

現在是時候為您的歌曲添加節奏了！

## 活動 3

1. 確保程式的光標位於 `fitMedia()` 函數之下。

2. 滾動檢視程式編輯器左側的 **API** 列表，找到第一個 `makeBeat()` 函數。

<img src="../img/screenshot-find-makebeat.png" height="400"/>

3. 點擊 `makeBeat()` 右上角的 **Paste** 圖標，將函數插入到 `fitMedia` 函數之下。

<img src="../img/icon-paste.png"/>

4. 再次提醒，粘貼後，Earsketch 會生成一些需要稍後替換的 `參數`。

<img src="../img/screenshot-makebeat.png" />

您可以為以下各項指定自己的值：

- `sound` - 瀏覽 **Sounds** 面板。點擊 **GENRES**，然後選擇 **MAKEBEAT** 篩選器。從列表中找到您喜歡的聲音。

<img src="../img/screenshot-makebeat-sounds.png" height="400"/>

- `track` - 選擇任何正整數作為聲道編號。確保它是尚未使用的聲道編號。
- `start` - 指定從哪一小節開始播放節奏。
- `beat` - 指定您希望添加的節奏作為字串，最好為 16 字符長。

如果您不確定要選擇哪些值，可以嘗試以下內容：

- `makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")`

接下來，為您的歌曲添加更多的 `makeBeat` 函數。至少嘗試添加兩個 `makeBeat` 函數。

您的程式現在應該看起來像這樣：

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