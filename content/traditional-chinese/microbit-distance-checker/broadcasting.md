---
title: "發送信號"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

## 開啟無線電

我們將使用 micro:bit 上的藍牙功能來判斷你與其他 micro:bit 之間的距離。首先要做的是開啟無線電並將其調整到某個頻道。點擊「Radio」部分，它是從上往下數第五個粉紅色部分。選擇「radio set group 1」，並將其拖到工作區中的藍色「on start」塊中。確保你使用與其他人相同的群組號碼。如果使用不同的群組號碼，你的 micro:bit 將無法彼此通訊。完成後，你的工作區應如下所示：

![MakeCode 菜單顯示選擇了 Radio 部分](../img/radioMenu.png)
![MakeCode 工作區顯示「radio set group」塊放置在「on start」塊中](../img/setRadioGroup.png)

## 發送信號

現在，micro:bit 已設置為接收信號，我們需要發送一個信號，以便它們能接收。再次點擊「Radio」部分。這次將「radio send number 0」塊拖到工作區中的藍色「forever」塊內。這將使你的 micro:bit 持續發送該數字給任意在相同群組內監聽的設備。

![MakeCode 工作區顯示「radio send number」塊放置在「forever」塊中](../img/radioSendNumber.png)