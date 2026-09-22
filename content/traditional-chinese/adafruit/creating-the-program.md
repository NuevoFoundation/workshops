---
title: "創建程式"
description: ""
draft: false
weight: 3
---
打開您最喜歡的網路瀏覽器（如 Edge、Firefox、Google Chrome、Internet Explorer），然後訪問 https://aka.ms/oranges。您的螢幕應該如下所示：

![無法加載圖片](../img/adafruit.png?classes=border,shadow)

## 定義變數

今天我們將使用橙子來告訴我們的 Adafruit 什麼時候發出聲音。我們需要做的第一件事是給每個橙子一個名稱，並告訴電腦從哪裡查看它們的輸出。首先要通過定義變數來做到這一點。點擊標註為「VARIABLES」的部分，它是橙紅色的，在頂部向下數第 7 個位置。然後點擊「Make a Variable」來定義一個變數，並給它一個名稱。執行兩次定義，這裡我們定義的名稱是 analog1 和 analog2，但您可以選擇任意命名。

![無法加載圖片](../img/adafruit-define-variables.png?classes=border,shadow)
![無法加載圖片](../img/adafruit-make-variable-dialog.png?classes=border,shadow)
![無法加載圖片](../img/adafruit-variables-created.png?classes=border,shadow)

## 解讀輸入訊號

現在我們已經為橙子指定了變數名稱，接下來需要告訴 Adafruit 如何理解它們。有兩種輸入方式：數位（digital）和類比（analog）。開關燈和電源按鈕是數位輸入的例子，它們只有開和關、1 和 0 兩種狀態。而類比輸入則像是調光器或音量按鈕，有更多的值選擇。我們的橙子將作為類比輸入，並通過觸摸或擠壓來改變它們傳送給 Adafruit 的值。

再次點擊「Variables」部分。現在，您應該會看到一些新增的選項，因為我們已經定義了兩個變數。將其中一個「set ___ to __」積木拖到我們工作區的綠色「forever」積木中。使用白色下拉箭頭，將第一個空格更改為「analog1」。

![無法加載圖片](../img/adafruit-set-variable-block.png?classes=border,shadow)

接下來，點擊「ADVANCED」旁邊的箭頭，然後選擇「PINS」。找到「analog read pin __」積木（在頂部列表中的第三個），並將其插入我們的「set analog1 to 0」積木中的 0 位置。要將其插入該區域，請將它拖放到 0 的上方，檢查 0 是否被黃色突出顯示，然後鬆開滑鼠（或觸控板）。您應該會看到積木自動延展以適應這塊新積木。如果看不到，請再嘗試一次。

![無法加載圖片](../img/adafruit-analog-read-pin.png?classes=border,shadow)
![無法加載圖片](../img/adafruit-analog1-complete.png?classes=border,shadow)

完成這一步後，您的工作區應該與上述圖片相似。使用相同的方式再執行一次，不過這次選擇 analog2 和 A2。檢查下面的圖片以驗證您的操作是否正確。
![無法加載圖片](../img/adafruit-analog2-complete.png?classes=border,shadow)

## 創建迴圈

現在，電腦已經知道了我們對橙子的命名以及如何理解它們的輸入，接下來我們要創建一個迴圈，用於監測我們握住橙子的情況。點擊「LOGIC」部分，然後將「If ____ then」積木拖出來，放在變數積木的下方。

![無法加載圖片](../img/adafruit-if-then-block.png?classes=border,shadow)

讓我們通過一個音量旋鈕的例子來理解我們將在迴圈中進行的比較。每個人都有一個個人音量的「最佳舒適點」，使音樂聽起來最悅耳。這樣的舒適區域對於我們的橙子來說也是一樣的。當它們靜止不動時會給電腦傳送一個數值，而當我們觸摸它們時，這個數值會變小。我們的目標是找出這兩者之間的臨界值，讓其僅在我們希望時發出聲音。

為了實現這個設定，請再次前往「LOGIC」部分，並從比較子區選擇第二個六邊形的「 __ < __ 」積木。將其放在「if __ then」積木中的「true」位置上。請確保放置時黃色部分已高亮。檢查下面的圖片以驗證您的操作是否正確。

![無法加載圖片](../img/adafruit-comparison-block.png?classes=border,shadow)

現在，讓我們來設定比較的條件。再次進入「Variables」部分，將 analog1 拉出來，放置到第一個空格中。然後，點擊第二個空格並輸入 40。對於大多數人來說，40 是一個合適的值。若最後發現橙子在未觸摸時也會發出聲音，您可以回到這一步將這個數值調大。如果橙子在您觸摸時沒有發出聲音，您也可以回來將這個值調小。現在，暫時將值保留為 40。

![無法加載圖片](../img/adafruit-threshold-value.png?classes=border,shadow)

現在我們可以選擇音樂了！點擊「MUSIC」部分，將第二塊「play _____ until done」積木拖到我們的「If-Then」積木中。您可以點擊下拉箭頭來選擇自己喜歡的音效。

![無法加載圖片](../img/adafruit-play-sound-block.png?classes=border,shadow)

接著，將最後幾步重複操作一次，不過這