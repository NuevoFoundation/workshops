```markdown
---
title: "活动 2 - 带有串行输出的摇杆"
draft: false
weight: 5
---

## 连接摇杆

既然您已经了解如何让系统通过程序提供信号（输出）并用它们来控制 LED，那么让我们来看看如何将动态输入引入系统。在本次活动中，我们将使用一个与视频游戏控制台类似的摇杆输入。

![说明文字：摇杆模块的接线图](../img/act2_Joystick.png)

1. 将跳线的一端连接到摇杆上的 GND，另一端连接到 Elegoo 的 GND。
2. 将跳线的一端连接到摇杆上的 +5V，另一端连接到 Elegoo 的 5V。
3. 将跳线的一端连接到摇杆上的 VRx，另一端连接到 Elegoo 的 A0（模拟引脚 0）。
4. 将跳线的一端连接到摇杆上的 VRy，另一端连接到 Elegoo 的 A1（模拟引脚 1）。
5. 将跳线的一端连接到摇杆上的 SW，另一端连接到 Elegoo 的 2（数字引脚 2）。
6. 通过 USB 将 Arduino 板连接到您的电脑，并打开 Arduino IDE 应用程序。

## 识别并打印模拟输入
我们仍然将使用样例代码作为我们的程序，这次我们从 Elegoo 官方网站获取代码。将以下代码复制到您的 Arduino IDE 中。

``` c++
//www.elegoo.com
//2016.12.09

// Arduino 引脚编号
const int SW_pin = 2; // 连接到开关输出的数字引脚
const int X_pin = A0; // 连接到 X 输出的模拟引脚
const int Y_pin = A1; // 连接到 Y 输出的模拟引脚

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

7. 现在点击上传按钮，将程序部署到 Arduino。
8. 点击屏幕右上方的“串行监视器”按钮以显示控制台。
![说明文字：Arduino IDE 中显示串行监视器按钮位置的屏幕截图](../img/SerialMonitor-button.png)  
9. 注意当您移动摇杆时，X 和 Y 值如何变化。
```