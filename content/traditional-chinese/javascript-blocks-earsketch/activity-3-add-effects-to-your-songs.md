```markdown
---
title: "活動 3 - 為你的歌曲添加效果"
date: 2019-07-23T11:45:38-07:00
weight: 5
draft: false
---

## EarSketch 中的效果

**效果** 允許製作人改變音頻片段的聲音，使其獲得獨特的音色。類似於我們使用 `fitMedia()` 添加新音頻片段一樣，我們必須使用 `setEffect()` 函數來為每個音頻片段定義特定的效果。需要注意的是，可以在同一音軌上應用多個效果。這使得製作人可以將多個效果結合在一起。EarSketch 提供了許多內建效果。要查閱所有效果，請訪問此 [連結](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python) 並確保選擇了導覽列中的 *Curriculum* 面板。

在我們開始為歌曲添加效果之前，讓我們來逐步解析兩個 `setEffect` 函數的組成部分：

<img src="../img/screenshot-seteffect1.png" height="30"/>

- `track`: 應用效果的音軌編號。注意：若要將效果應用到主音軌，請使用數值 0 作為音軌值。主音軌是所有音頻片段的集合播放位置。這是一種可以將效果應用到所有聲音的簡便方式。
- `effectType`: 使用的特定效果類型
- `effectParameter`: 所使用效果的具體參數
- `effectValue`: 應用於 effectParameter 的數值
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

## 將 setEffect 函數添加至你的歌曲

現在我們對使用效果更加熟悉了，讓我們為歌曲添加一個效果。

1. 找到 `setEffect` 函數模塊。共有兩個 `setEffect` 模塊，選擇最上方的一個。將該模塊拖入到你現有代碼塊的下方腳本中。
2. 我們需要用自己的值替換參數。使用下拉選單將 `track` 替換為 2（或任何你想要的數字）。
3. 使用下拉選單查看可以為 `effectType` 參數選擇的各種效果類型。我們選擇 DELAY 作為 `effectType`。
4. 現在我們已選擇了 `effectType`，我們需要一個 `parameter`。讓我們選擇 DELAY_FEEDBACK 作為 `parameter`。
5. 對於最後一個參數，輸入一個有效值。由於我們選擇了 DELAY_FEEDBACK，因此必須指定在 -120.0 和 -1.0 之間的數值。例如：可以使用 -6.0 作為 DELAY_FEEDBACK 的效果值。

你的代碼現在應看起來像這樣：

<img src="../img/screenshot-set-effect-1.png" height="400"/>
```