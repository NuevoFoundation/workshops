---
title: "活動 4 - 為你的歌曲添加效果"
description: "設置耳機"
weight: 8
prereq: "Python 基礎：打印、註解、函數"
difficulties: ["中等"]
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/vryYSBvwnIY" title="Activity 4 - Add effects to your song - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 在 EarSketch 中的效果

**效果** 允許製作人改變音頻片段的聲音，使其具有獨特的聲響。與我們之前使用 `fitMedia()` 新增音頻片段類似，我們必須使用 `setEffect()` 函數為每一個音頻片段定義特定的效果。需要注意的是，可以在同一軌道上應用多種效果，這使得製作者可以將多個效果結合在一起。EarSketch 內建了許多效果。要參考所有效果，可以訪問這個 [連結](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python)，並確保右側顯示 *課程面板*。

在開始為我們的歌曲添加效果之前，讓我們拆解 `setEffect()` 函數的結構：

![](../img/screenshot-seteffect1.png)

- `track`：應用效果的軌道號碼。注意：要將效果應用於主軌道，可以將 `track` 設置為 0。主軌道是所有音頻片段一起播放的地方，這是一個對所有處理中的聲音應用效果的簡易方法。
- `type`：使用的具體效果類型。
- `parameter`：所用效果的設置。
- `value`：應用於效果設置的值。

<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.3%;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>

<div class="row">
  <div class="column">
    <img src="../img/Robot_2_Pink.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_1_Green.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_2_Blue.PNG" width="45%">
  </div>
</div>

## 為歌曲添加 `setEffect` 函數

現在我們對效果的使用更加熟悉，讓我們為歌曲添加一個效果。

1. 在左側的 API 瀏覽器中，滾動到 `setEffect` API。
2. 使用粘貼圖標將一個 `setEffect` 函數插入到你的代碼中。
3. 我們需要用自己的值替換參數。為 `track` 輸入一個整數值。我們可以設置為 2。
4. 對於其餘的效果參數，點擊 `setEffect` API 旁的 **Open**，你會看到一個標註有“Every Effect Explained in Detail”（每種效果的詳細說明）的連結。點擊它，頁面右側將顯示相應的部分。

<img src="../img/screenshot-seteffect-open.png" height="400"/>

<img src="../img/screenshot-seteffect-explain.png" width="200"/>

5. 你可能注意到 EarSketch 有各種不同的效果選項。默認情況下，你應該會看到右側顯示的第 10.1 節 BANDPASS。暫時，我們選擇第 10.4 節的 DELAY 作為 `setEffect` 函數中的 `type`。
6. 選定 `type` 後，我們需要選擇一個 `parameter`。導航至右側的第 10.4 節，查看 DELAY 支持的不同參數。我們推薦使用 DELAY\_FEEDBACK。

![參數效果圖片](../img/screenshot-effect-parameter.png)

7. 對於最後的參數，輸入一個有效值。既然我們選擇了 DELAY\_FEEDBACK，則需要在 -120.0 到 -1.0 之間指定一個數字（如上圖所示）。例如：使用 -6.0 作為 DELAY\_FEEDBACK 的效果值。

現在你的代碼應該看起來像下面這樣：

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
```