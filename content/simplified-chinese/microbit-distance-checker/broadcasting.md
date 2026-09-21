---
title: "广播信号"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

## 打开无线电

我们将使用 micro:bit 上的蓝牙无线电来确定您与其他 micro:bit 的距离。首先需要打开无线电并将其调到一个频道。点击名为 Radio 的部分，它是从顶部数第五个粉色部分。选择“radio set group 1”并将其拖到工作区中的蓝色“on start”模块中。确保您使用与其他人相同的组号码。如果使用不同的组号码，您的 micro:bit 将无法相互通信。完成后，您的工作区应如下所示：

![MakeCode菜单显示选中的Radio部分](../img/radioMenu.png)
![MakeCode工作区显示"on start"模块中的"radio set group"模块](../img/setRadioGroup.png)

## 广播信号

现在我们的 micro:bit 已经设置为监听，我们需要发送一个信号让它们接收。再次点击 Radio 部分。这次，将“radio send number 0”模块拖到工作区中的蓝色“forever”模块中。这将使您的 micro:bit 持续向同一组内正在监听的设备发送该数字。

![MakeCode工作区显示"forever"模块中的"radio send number"模块](../img/radioSendNumber.png)