---
title: "Activity 2 - 更改遊戲中物件的顏色。"
date: 2019-07-29T13:24:17-07:00
weight: 4
draft: false
---

太棒了！您剛剛修復了遊戲的邊界。現在，注意到遊戲中的所有內容看起來都是黑白的嗎？讓我們給它增添一些色彩，使遊戲更加生動吧。

為此，我們需要修改 `COLOR` 屬性中的 RGB 值。  
RGB 代表紅色（Red）、綠色（Green）、藍色（Blue）。在電腦螢幕上，您可以透過修改每個像素的 RGB 值來改變顏色。僅僅透過不同的 RGB 組合，您就可以創造出大約 1670 萬種顏色！這些值的順序與 RGB 的書寫順序相同。使用以下的顏色選擇器來尋找您喜愛的顏色的 RGB 值：  
<input type="color" id="colorpicker" style="height:50px;width:50px">

找到程式碼中的 `# TODO (ACTIVITY 2)`。修改 `Pong` 類別的 `COLOR` 屬性。正確地完成這一步後，物件會具備您所選擇的顏色。按下<b>運行</b>並確認結果。

{{% notice tip %}}

試試使用不同的 RGB 值，看看顏色改變如何影響遊戲中的物件。

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">啟動 Replit</a>

## 重點

您剛剛修改了 `Pong` 類別中的 `COLOR` 屬性，以影響物件在螢幕上的外觀。您學會了如何透過調整 RGB 值來獲得您想要的顏色！