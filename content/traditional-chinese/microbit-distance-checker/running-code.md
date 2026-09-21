---
title: "下載程式碼並進行測試"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

現在程式碼已經撰寫完成，是時候來試用它了。首先，我們需要將 micro:bit 與電腦配對。找到 USB 線，將較小的一端連接到 micro:bit 頂部的銀色 USB 插口。將另一端較大的 USB 插頭連接到電腦上的 USB 插口。在 MakeCode 工作區中，點擊下載按鈕旁邊的三個點（...），會彈出一個小選單。在選單中，點擊「配對設備」（Pair device）。

在新彈出的視窗中，點擊右下角的紫色「配對設備」（Pair device）按鈕。最後，另一個視窗會彈出。點擊「BBC micro:bit CMSIS-DAP」，然後按下底部的連接（Connect）按鈕。現在，我們已經連接完成並準備下載程式碼了。通常情況下，只需配對一次即可。

![已展開的下載按鈕選項，選擇了「配對設備」](../img/pairDevice.png)
![彈出視窗指示用戶連接 micro:bit 並配對設備](../img/pairModal.png)
![瀏覽器的已連接設備列表](../img/connectToDevice.png)

現在再次點擊紫色下載按鈕旁邊的三個點（...）。這次，點擊「下載到 micro:bit」（Download to micro:bit）選項。當下載按鈕停止旋轉時，尋找「下載完成」（Download complete）泡泡訊息：這意味著我們已經完成了！移動到其他使用相同無線電頻道的 micro:bit 之外，觀察 micro:bit 上的皺眉表情是否變成笑臉！

![顯示下載完成泡泡訊息](../img/downloadComplete.png)

## 就這樣完成了！
恭喜你！你剛剛成功撰寫了可以讓兩個硬體設備以**無線方式**通訊並檢測距離的程式碼。做得好！👏🏽👏🏽👏🏽