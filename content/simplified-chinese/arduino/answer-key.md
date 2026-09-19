---
title: "Arduino - 答案键"
date: 2024-07-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
这是用于 Arduino 光感游戏工作坊的教师参考资料。该工作坊指导学生通过使用 Arduino UNO 和 Elegoo 入门套件完成4个硬件活动。所有代码在工作坊中提供，此答案键汇总了完整的解决方案，解释了关键概念，并指出教师需注意的源代码错误。
{{% /notice %}}

## 活动 1: 闪烁 LED

### 接线概要

1. 将 LED 长引脚（正极）连接到 25J 引脚，短引脚（负极）连接到蓝色 [-] 导轨
2. 使用 220 欧姆电阻将 25H 引脚连接到红色 [+] 导轨
3. 使用跳线将红色 [+] 导轨连接到 Arduino 的 5V
4. 使用跳线将蓝色 [-] 导轨 (31Z) 连接到 Arduino 的 GND
5. 通过 USB 连接 Arduino

### 代码

学生加载内置示例： **文件 > 示例 > 01.Basics > Blink**

以下代码是内置 Blink 示例的功能核心。完整的示例代码包括更多注释和署名。

```c++
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

### 关键概念

- `setup()` 在 Arduino 启动后运行一次
- `loop()` 会无限循环运行
- `pinMode()` 将引脚设置为 INPUT 或 OUTPUT
- `digitalWrite()` 设置引脚为 HIGH（开启）或 LOW（关闭）
- `delay(1000)` 暂停 1000 毫秒（1 秒）

### 额外挑战答案

工作坊提问：“可以更改哪些内容以修改时间？” 答案是：更改 `delay(1000)` 中的数字。例如，`delay(500)` 会让 LED 的闪烁速度提升一倍。1000 毫秒 = 1 秒，因此 10 分钟 = 600000 毫秒。

## 活动 2: 带有串行输出的摇杆

### 接线概要

1. 摇杆 GND 接 Arduino GND
2. 摇杆 +5V 接 Arduino 5V
3. 摇杆 VRx 接模拟引脚 A0
4. 摇杆 VRy 接模拟引脚 A1
5. 摇杆 SW 接数字引脚 2
6. 通过 USB 连接 Arduino

### 代码

```c++
//www.elegoo.com
//2016.12.09

// Arduino 引脚号
const int SW_pin = 2; // 数字引脚连接到开关输出
const int X_pin = A0; // 模拟引脚连接到 X 输出
const int Y_pin = A1; // 模拟引脚连接到 Y 输出

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

### 关键概念

- `Serial.begin(9600)` 以 9600 波特率启动串行通信
- `Serial.print()` 将文本发送到串行监视器（在 Arduino IDE 中点击放大镜图标查看）
- `analogRead()` 读取模拟引脚的 0 到 1023 之间的值
- `digitalRead()` 读取数字引脚的 HIGH (1) 或 LOW (0) 状态
- `digitalWrite(SW_pin, HIGH)` 激活 2 号引脚的内部上拉电阻，因此当开关未按下时读取值为 HIGH，按下时为 LOW
- 摇杆中心位置大约为 X=490，Y=490

### 预期串行输出

当摇杆处于中心位置时，学生应看到类似以下的数值：
```
Switch:  1
X-axis: 490
Y-axis: 490
```

移动摇杆会改变 X 和 Y 的读数（范围 0-1023）。按下摇杆按钮会使 Switch 从 1 变为 0。

## 活动 3: 摇杆与 LED

### 接线概要

此活动将摇杆与 4 个彩色 LED（蓝色、黄色、红色、绿色）和一个用于按钮的第 5 个 LED（连接到引脚 7）结合在一起。完整接线共有 25 步，详见工作坊材料。关键连接如下：

| 组件 | Arduino 引脚 |
|------|-------------|
| 摇杆 VRx | A0 |
| 摇杆 VRy | GND |
| 摇杆 SW | 数字引脚 2 |
| 摇杆 +5V | 面包板红色 [+] 导轨 |
| 摇杆 GND | 面包板蓝色 [-] 导轨 |
| 蓝色 LED | 数字引脚 11 |
| 黄色 LED | 数字引脚 10 |
| 红色 LED | 数字引脚 9 |
| 绿色 LED | 数字引脚 8 |
| 按钮 LED | 数字引脚 7 |

### 代码

{{% notice warning %}}
**工作坊源码问题：** 此代码中使用了从未声明的变量 `joyX` 和 `joyY`。代码无法按原样编译。教师应在 `setup()` 函数之前添加下方的缺失变量声明。

此外，工作坊的第 4 步接线将 VRy 连接到 GND，而不是模拟引脚。这可能是接线错误——代码会从 `analogRead(joyY)` 读取 Y 轴信号，而这需要将 VRy 连接到 A1（与活动 2 中一样）。为使代码正常运行，教师应将 VRy 连接到 A1，而非 GND。
{{% /notice %}}

{{% notice info %}}
**关于引脚 7 的 LED 接线缺失通知：** 代码使用引脚 7 作为按钮触发的 LED 的 OUTPUT，但工作坊的 25 步接线未包含为引脚 7 连接 LED 的步骤。教师应