---
title: "什么是 micro:bit?"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

## 什么是 micro:bit?

micro:bit 是一种可编程的微控制器！它可以使用各种编程语言进行编程，包括 JavaScript、Python、Scratch 和 Blocks，并可以通过任意网页浏览器实现。在今天的课程中，我们将使用 MakeCode Blocks。

您的 micro:bit 拥有许多不同的功能和传感器，包括：

- 25 个独立可控的 LED 灯
- 2 个物理按钮
- 2 个输入/输出（IO）引脚
- 指南针传感器
- 加速度计（运动传感器）
- 蓝牙

<!---![Image of simulated micro:bits with the radio highlighted](../img/simulatorStart.png) --->
<img src="../img/microbit-hardware-access.jpg" alt="microbit组件" style="width:800px;"/>

如果您想了解更多关于每个组件的信息以及 micro:bit 所带有的所有功能，可以点击[这里](https://micro:bit.org/guide/features/)。

接下来，取出袋子里的 micro:bit 和其他组件。您应该会有一个 micro:bit、2 节电池、一根 micro USB 数据线和一个电池盒（黑色的小盒，带有红色和黑色的导线）。如果缺少任何部件或需要帮助，请随时向讲师寻求帮助！

## 使用模拟器

虽然不如实际操作硬件那么有趣，但您也可以使用模拟器测试您的代码。寻找屏幕左侧的 micro:bit 图标。如果您没有看到它们，请寻找左侧的 “>” 符号，并点击它以显示模拟器。在模拟器的 micro:bit 上，找到蓝牙天线。它看起来像一个黄色的方波：

<!---![microbit components](../img/microbit-hardware-access.jpg) --->
<img src="../img/simulatorStart.png" alt="标注了无线电的模拟micro:bit" style="width:500px;"/>

将鼠标光标悬停在这个波状天线上时，实际的信号强度会显示在旁边。您也可以点击该天线并将鼠标指针向左拖动以减弱信号强度，或向右拖动以增强信号强度。如果信号足够强（`strength > -67`），另一个 micro:bit 会显示出一个皱着眉的表情。再次减弱信号可以让 micro:bit 变回微笑脸。

<!---![Sowing RSSI](../img/showingRSSI.png) --->
<img src="../img/showingRSSI.png" alt="显示 RSSI" style="width:300px;"/> 
<!---![Image of sad simulator](../img/sadSimulator.png) --->
<img src="../img/sadSimulator.png" alt="皱眉的模拟器图片" style="width:300px;"/>

现在，让我们开始编程吧！