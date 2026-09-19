```markdown
---
title: "Setting up the PC"
draft: false
weight: 2
---

## 認識 Arduino IDE

下載並安裝 Arduino IDE：

* 從 Microsoft Store 下載（安裝速度較快） - <https://www.microsoft.com/store/productId/9NBLGGH4RSD8>
* 或從 Arduino 網站下載 <https://www.arduino.cc/en/Main/Software>（選擇最新版本）

當軟體成功安裝到您的電腦後，開啟它。這就是 Arduino IDE，也是所有程式編寫將進行的地方。花些時間熟悉並了解其介面。

![Alt Text: Labeled picture of the Arduino IDE](../img/ArduinoIDE-labeled.png)
*<https://www.makerspaces.com/simple-arduino-projects-beginners/>*

1. 功能表列：提供存取需要的工具，用於創建與儲存 Arduino 程式。
2. 驗證按鈕：編譯您的程式並檢查拼寫或語法中的錯誤。
3. 上傳按鈕：將程式上傳到已連接的板子，例如 Arduino Uno。在上傳過程中，板上的指示燈會快速閃爍。
4. 新程式：開啟一個新視窗，包含一個空白的程式。
5. 程式名稱：當程式被儲存後，程式的名稱將顯示在這裡。
6. 開啟現有程式：允許您打開已儲存的程式或範例中的程式。
7. 儲存程式：儲存當前開啟的程式。
8. 序列監視器：當版子連接時，顯示 Arduino 的序列信息。
9. 程式區域：這是您撰寫程式碼的地方，用於指示板子將執行的指令。
10. 訊息區域：顯示有關儲存、程式編譯、錯誤等的狀態訊息。
11. 文本控制台：顯示錯誤訊息的詳細資訊、編譯程式的大小以及其他訊息。
12. 板子和序列端口：顯示您正在使用的板子類型以及它所連接的序列端口。

## 連接您的 Arduino

現在您可以將 Arduino 連接到電腦了。將 USB 線的一端插入 Arduino Uno，然後另一端插入電腦的 USB 端口。

板子連接後，您需要進入功能表中的 Tools，再選擇 Board，最後選 Arduino Uno。

![Alt Text: Screenshot of Arduino IDE showing how to select our board type](../img/board-select.png)

接下來，您需要告訴 Arduino 您的電腦正在使用哪個端口。

要選擇端口，請進入 Tools，然後選擇 Port，再選擇標注為 Arduino 的端口。

![Alt Text: Screenshot of Arduino IDE showing how to select the COMM port](../img/COMM-port.png)
```