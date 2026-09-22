```markdown
---
title: "活动 4 - LCD 显示屏"
draft: false
weight: 7
---

## 接线图

现在您已经掌握了向 LED 发送信号的技能，让我们来看看如何使用一个简单的显示屏显示文本。只需要一个电阻器（5K）来限制显示屏的亮度。请按照示意图尝试接线，不需要具体的说明。

![Alt Text: Elegoo 和 LCD 显示屏的接线图](../img/LCD-wiring.png)

## 代码:
``` c++
//www.elegoo.com
//2016.12.9

/*
  LiquidCrystal Library - Hello World

 演示如何使用一个16x2的 LCD 显示屏。LiquidCrystal 
 库适用于所有兼容 Hitachi HD44780 驱动程序的 LCD 显示屏。
 市面上有很多这样的显示屏，通常可以通过 16 针接口来识别。

 这个程序会向 LCD 显示屏输出 “Hello World!" 并显示时间。

  电路连接:
 * LCD RS 引脚连接到数字引脚 7
 * LCD Enable 引脚连接到数字引脚 8
 * LCD D4 引脚连接到数字引脚 9
 * LCD D5 引脚连接到数字引脚 10
 * LCD D6 引脚连接到数字引脚 11
 * LCD D7 引脚连接到数字引脚 12
 * LCD R/W 引脚连接到地
 * LCD VSS 引脚连接到地
 * LCD VCC 引脚连接到 5V
 * 10K 电阻:
 * 两端连接到 +5V 和地
 * 滑臂连接到 LCD VO 引脚（引脚 3）

 库最早添加于 2008 年 4 月 18 日
 由 David A. Mellis 创建
 库于 2009 年 7 月 5 日由 Limor Fried 修改 (http://www.ladyada.net)
 示例于 2009 年 7 月 9 日添加
 由 Tom Igoe 创建
 于 2010 年 11 月 22 日修改
 由 Tom Igoe 修改

 本示例代码为公共领域。

 http://www.arduino.cc/en/Tutorial/LiquidCrystal
 */

// 包含库代码:
#include <LiquidCrystal.h>

// 用接口引脚号初始化库
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

void setup() {
  // 设置 LCD 的列数和行数:
  lcd.begin(16, 2);
  // 向 LCD 打印一条消息:
  lcd.print("Hello, World!");
}

void loop() {
  // 将光标设置为第 0 列，第 1 行
  // （注意: 行 1 是第二行，因为从 0 开始计数）:
  lcd.setCursor(0, 1);
  // 打印自复位以来的秒数:
  lcd.print(millis() / 1000);
}
```