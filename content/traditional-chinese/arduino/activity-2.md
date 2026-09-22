```markdown
---
title: "Activity 2 - Joystick with Serial Output"
draft: false
weight: 5
---

## 連接搖桿

現在您已了解如何讓系統提供程式的信號（輸出），並利用這些信號控制 LED，接下來我們來看看如何將動態輸入引入系統。在這個活動中，我們將使用搖桿輸入，類似於用於遊戲主機的搖桿。

![圖解說明：搖桿模組的接線示意圖](../img/act2_Joystick.png)

1. 使用跳接線將一端連接到搖桿的 GND，另一端連接到 Elegoo 的 GND。
2. 使用跳接線將一端連接到搖桿的 +5V，另一端連接到 Elegoo 的 5V。
3. 使用跳接線將一端連接到搖桿的 VRx，另一端連接到 Elegoo 的 A0（類比端口 0）。
4. 使用跳接線將一端連接到搖桿的 VRy，另一端連接到 Elegoo 的 A1（類比端口 1）。
5. 使用跳接線將一端連接到搖桿的 SW，另一端連接到 Elegoo 的 2（數字端口 2）。
6. 透過 USB 將 Arduino 板連接到您的電腦，並打開 Arduino IDE 應用程式。

## 識別並打印類比輸入
我們將使用範例程式碼進行編程。這次我們將從 Elegoo 的官方網站中獲得程式碼。將以下程式碼複製到您的 Arduino IDE 中。
``` c++
//www.elegoo.com
//2016.12.09

// Arduino pin numbers
const int SW_pin = 2; // digital pin connected to switch output
const int X_pin = A0; // analog pin connected to X output
const int Y_pin = A1; // analog pin connected to Y output

void setup() {
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(9600);
}

void loop() {
  Serial.print("Switch:  ");
  Serial.print(digitalRead(SW_pin));
  Serial.print("\n");
  Serial.print("X-axis: ");
  Serial.print(analogRead(X_pin));
  Serial.print("\n");
  Serial.print("Y-axis: ");
  Serial.println(analogRead(Y_pin));
  Serial.print("\n\n");
  delay(500); 
}
```
7. 現在，點擊「上傳」按鈕將程式部署到 Arduino。
8. 點擊螢幕右上方的「Serial Monitor」按鈕顯示控制台。
![圖解說明：Arduino IDE 的螢幕截圖，顯示串列監視器按鈕的位置](../img/SerialMonitor-button.png)
9. 當您移動搖桿時，觀察 X 和 Y 的數值如何改變。
```