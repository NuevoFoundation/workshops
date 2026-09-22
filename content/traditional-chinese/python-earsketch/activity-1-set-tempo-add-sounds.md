```yaml
---
title: "活動 1 - 設定節奏與添加音效"
description: "設置耳機"
prereq: "Python 基礎：打印、註解、函數"
difficulties: ["中級"]
weight: 5
draft: false
---
```

<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/INHMwQoni-M" title="Activity 1 - Set tempo &amp; add sounds - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

讓我們更仔細地了解現有的程式碼以及它的意義。

<img src="../img/screenshot-setup-complete.png" height="400"/>

`setTempo()` 函數允許你設置整個專案的節奏（Tempo）。節奏是音樂播放的速度。更改專案的節奏可以創造出不同風格的音樂。嘗試更改 `setTempo` 函數中的數字來調整節奏，並觀察會發生什麼！請確保這個數字在 45 到 220 之間。以下是一些建議的節奏值：

<img src="../img/img-tempo1.png" height="200"/>

既然我們已經設定了節奏，現在是時候添加音效了。為此，我們需要使用 `fitMedia()` 函數。我們將在 `setTempo()` 函數的下方插入這段新程式碼。

## 活動 1

1. 確保程式的游標位於 `setTempo()` 函數的下方。

<img src="../img/screenshot-cursor.png" height="200"/>

2. 滾動至程式碼編輯器左側的 **API** 列表，並找到 `fitMedia()` 函數。

<img src="../img/screenshot-find-fitmedia.png" height="400"/>

3. 點擊 `fitMedia()` 右上角的 **Paste** 圖標，將該函數插入到 `setTempo` 函數的下方。

<img src="../img/icon-paste.png"/>

4. 你可能會注意到，在粘貼該函數後，EarSketch 會生成一些需要後續替換的預設文本。這些預設文本也稱為 `參數`。

<img src="../img/screenshot-fitmedia.png" />

你可以為以下內容指定自己的值：

- `sound` - 瀏覽「音效」區，並選擇你喜歡的音效。
- `track` - 選擇任何正整數作為音軌編號。
- `start/end` - 這些參數以小節為單位進行量化。小節是一段時間的分段，對應於固定數量的節拍。

如果你不確定要選擇什麼值，可以嘗試以下代碼：

- `fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)`

你的程式碼現在應該看起來類似於以下內容：

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

{{% notice warning %}}
確保方法調用的大小寫是正確的。大多數程式語言（包括 Python）對大小寫敏感。這意味著添加大寫字母可能會調用不同的函數。例如：`fitMedia()` 和 `FitMedia()` 並不相同。
{{% /notice %}}

6. 一旦輸入自己的參數，按下運行鍵，然後點擊播放按鈕以聆聽你的音頻片段！

<img src="../img/icon-play.png" />

- **如果你看到任何紅色文字，表明遇到了一些錯誤！請尋求幫助。** `fitMedia()` 函數是 EarSketch 中創作音樂的核心。我們將頻繁使用這個函數，因此如果你對它的使用有任何疑問，請務必詢問！

{{% notice info %}}

數字音頻工作站 (Digital Audio Workstation, DAW) 是顯示聲音的區域，位於 EarSketch 視窗的頂部中心。以下是一首歌曲不同部分在 DAW 中的顯示範例。

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}
```