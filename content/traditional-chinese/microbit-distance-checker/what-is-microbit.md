---
title: "什麼是 micro:bit？"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

## 什麼是 micro:bit？

micro:bit 是一款可編程的微控制器！它可以從任何網頁瀏覽器中以多種程式語言進行編碼，例如 JavaScript、Python、Scratch 和 Block 編程。今天我們的課程將使用 MakeCode Blocks。

你的 micro:bit 擁有許多可操作的功能和感測器，包括：

- 25 顆可單獨編址的 LED
- 2 個實體按鈕
- 2 個輸入/輸出 (IO) 接腳
- 羅盤感測器
- 加速度感測器（運動感測器）
- 藍牙功能

<!--- ![Image of simulated micro:bits with the radio highlighted](../img/simulatorStart.png) --->
<img src="../img/microbit-hardware-access.jpg" alt="microbit components" style="width:800px;"/>

如果你想更深入了解每個元件以及你的 micro:bit 所帶來的所有功能，可以點擊 [這裡](https://micro:bit.org/guide/features/)。

現在請拿出 micro:bit 和包裡的其他元件。你應該有一個 micro:bit、兩顆電池、一條微型 USB 線以及電池盒（有紅色和黑色電線伸出的黑色盒子）。如果遺失任何物品或需要幫助，隨時可以向指導員尋求協助！

## 使用模擬器

雖然不如實際操作硬體有趣，但你也可以通過模擬器來觀看你的程式碼效果。在螢幕左側找到模擬的 micro:bit 圖像。如果你沒看到，可以尋找左側的 ">" 符號並點擊它以顯示模擬器。在模擬的 micro:bit 上，找到藍牙無線電天線。它看起來像是一個黃色方波圖案：

<!--- ![microbit components](../img/microbit-hardware-access.jpg) --->
<img src="../img/simulatorStart.png" alt="Image of simulated micro:bits with the radio highlighted" style="width:500px;"/>

當你將滑鼠游標懸停在這個波狀天線上時，實際信號強度將會顯示在旁邊。然後，你可以點擊天線並拖動滑鼠游標向左降低信號強度或向右增加信號強度。如果信號強度足夠強（`strength > -67`），另一個 micro:bit 會更新為顯示一個皺眉的臉。再次降低信號強度，micro:bit 就會微笑。

<!---![Sowing RSSI](../img/showingRSSI.png) --->
<img src="../img/showingRSSI.png" alt="Sowing RSSI" style="width:300px;"/> 
<!---![Image of sad simulator](../img/sadSimulator.png) --->
<img src="../img/sadSimulator.png" alt="Image of sad simulator" style="width:300px;"/>

現在，我們開始編碼吧！