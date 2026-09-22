```markdown
---
title: "活動 4 - LCD 顯示屏"
draft: false
weight: 7
---

## 接線圖

現在您已掌握對 LED 輸出信號的操作，我們來嘗試使用簡單的顯示屏來顯示文本。只需要用到 1 個電阻（5K）來限制顯示屏的亮度。請根據下圖進行接線，而不提供具體說明。

![備註文字: Elegoo 和 LCD 顯示屏的接線圖](../img/LCD-wiring.png)

## 程式碼:
``` c++
//www.elegoo.com
//2016.12.9

/*
  LiquidCrystal Library - Hello World

 示範如何使用 16x2 的 LCD 顯示屏。LiquidCrystal
 函式庫適用於所有與 Hitachi HD44780 驅動相容的 LCD 顯示屏。
 這類顯示屏種類繁多，通常可以通過 16 針介面辨別。

 此範例將 "Hello World!" 輸出到 LCD
 並顯示所經過的時間。

 電路連接:
 * LCD RS 接腳接到數字接腳 7
 * LCD Enable 接腳接到數字接腳 8
 * LCD D4 接腳接到數字接腳 9
 * LCD D5 接腳接到數字接腳 10
 * LCD D6 接腳接到數字接腳 11
 * LCD D7 接腳接到數字接腳 12
 * LCD R/W 接腳接到接地
 * LCD VSS 接腳接到接地
 * LCD VCC 接腳接到 5V
 * 10K 電阻:
 * 兩端接 +5V 和接地
 * 滑動觸點接 LCD VO 接腳（第 3 腳）

 函式庫最初添加於 2008 年 4 月 18 日
 作者: David A. Mellis
 函式庫修改於 2009 年 7 月 5 日
 作者: Limor Fried (http://www.ladyada.net)
 範例添加於 2009 年 7 月 9 日
 作者: Tom Igoe
 修改於 2010 年 11 月 22 日
 作者: Tom Igoe

 此範例代碼屬於公共領域。

 http://www.arduino.cc/en/Tutorial/LiquidCrystal
 */

// 引入函式庫:
#include <LiquidCrystal.h>

// 初始化函式庫和介面接腳號碼
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

void setup() {
  // 設置 LCD 的列數和行數:
  lcd.begin(16, 2);
  // 在 LCD 上打印一條訊息
  lcd.print("Hello, World!");
}

void loop() {
  // 將游標設置到第 0 列，第 1 行
  // （注意: 第 1 行是第二行，因為計數從 0 開始）:
  lcd.setCursor(0, 1);
  // 打印重置後經過的秒數:
  lcd.print(millis() / 1000);
}
```