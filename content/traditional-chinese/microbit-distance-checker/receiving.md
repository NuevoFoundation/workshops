---
title: "接收訊息"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

現在我們已經能發送訊息且能接收訊息，下一步是利用這些資訊來計算 micro:bits 之間的距離。要做到這點，我們需要知道所接收訊號的強度。回到 Radio 部分，這次拖曳「on radio received (receivedNumber)」區塊到你的工作區內的空白處。這個區塊不應該包含在其他任何區塊中。

這個區塊的作用是讓 micro:bit 在接收到來自其他 micro:bit 發送的數字時執行某些動作。

!["on radio received" 區塊已新增到工作區](../img/onRadioReceived.png)

接下來，點選紅色的 Variables 部分，再點擊「Make a Variable...」。在彈出的文字框中輸入「strength」作為新變數的名稱，然後按下「Ok ✔」。

![MakeCode 菜單顯示選擇變數部分](../img/makeVariable.png)
![變數名稱彈出窗口](../img/variableModal.png)

現在，回到 Variables 菜單，拖曳「set strength to 0」區塊到粉紅色的「on radio received (receivedNumber)」區塊內。接著回到 Radio 菜單，將「received packet (signal strength)」拖曳到「set strength to 0」區塊的 `0️` 位置上。完成後，工作區應該看起來像這樣：

![工作區包含 on start、forever 和 received packet 區塊並已填入](../img/savedRSSI.png)

變數是用來存儲資訊的一個位置，其名稱友好且清楚，方便我們理解其內容。所以，通過建立名為「strength」的變數，我們是為存儲一個數值預留了空間，這個數值是接收到的訊息的信號強度。我們可以在需要的地方使用「strength」來檢查目前存儲的值或者將其與其他值比較。如果稍後收到的訊息有更強或更弱的信號，「strength」的值會自動更新為新的信號強度。而這就是「on radio received」區塊的作用：每次收到新訊息時，「strength」的值會自動更新為最新的信號強度，而無需手動操作。