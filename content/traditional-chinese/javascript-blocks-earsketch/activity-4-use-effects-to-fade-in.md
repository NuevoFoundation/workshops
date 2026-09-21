```markdown
---
title: "Activity 4 - 使用效果淡入"
date: 2019-07-23T11:45:38-07:00
weight: 6
draft: false
---

現在你已經在你的歌曲中使用了一個效果，接下來讓我們嘗試讓歌曲的開頭淡入。

在活動 3 中，我們使用了 `setEffect` 函數，將效果應用到整首歌的特定音軌上。但是，如果你只希望歌曲的某一特定部分有一個效果該怎麼辦？只需使用 `setEffect` 函數並添加更多參數！

<img src="../img/screenshot-seteffect2.png" height="30"/>

- `startValue`: 參數的起始值
- `start`: 設置起始值的小節
- `endValue`: 參數的結束值
- `end`: 設置結束值的小節

這個版本的 `setEffect` 函數讓我們可以在歌曲的某一部分執行*自動化*操作。自動化是一種在時間上改變效果值的方法。自動化的一個用途是讓歌曲淡入或淡出。要實現這樣的效果，我們需要按時間調整 **VOLUME** 的 **GAIN** `parameter` 的音量值。例如，我們若在起始值中定義 -60db 並在結束值中定義 0db，聽起來就像歌曲隨時間逐漸淡入。要調整效果的啟動點和持續時間，需要指定 `start` 和 `end`。

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## 在你的歌曲中新增另一個 setEffect 函數

1. 在你的代碼中新增另一個 `setEffect` 代碼塊，並確保代碼塊包含 7 個參數。
2. 使用下拉選單選擇 VOLUME 作為 `effectType`。
3. 使用下拉選單選擇 GAIN 作為 `parameter`。
4. 如果我們想讓某些聲音聽起來像是淡入，我們必須讓聲音的音量從非常低開始並逐漸提高。為了達到此效果，將 `startValue` 設定為非常低的值（例如 -60），並將 `endValue` 設定為較高的值（例如 0）。

{{% notice tip %}}
*提示：* 音量是以分貝為單位測量的。在分貝中，數字越高，聲音就越大。另外，請盡量不要超過 0 分貝。
{{% /notice %}}

5. 為 `start` 和 `end` 參數設置值，以指定何時開始和結束淡入效果。

你的代碼現在應該看起來像這樣：

<img src="../img/screenshot-set-effect-2.png" height="400"/>
```