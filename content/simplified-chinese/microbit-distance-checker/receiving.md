---
title: "接收消息"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

现在我们已经可以发送消息并监听消息了，接下来需要利用这些信息来计算 micro:bit 之间的距离。要做到这一点，我们需要了解接收到信号的强度。返回到 Radio 部分，这次拖动“on radio received (receivedNumber)”块到工作区的空白区域。它不应该嵌套在其他块内。

这个块告诉我们的 micro:bit，当它接收到来自另一个 micro:bit 发送的数字时，应执行某些操作。

!["on radio received"块已添加到工作区](../img/onRadioReceived.png)

接下来，点击红色的 Variables 部分，然后点击“Make a Variable...”。在弹出的文本框中，输入“strength”作为新变量的名称，然后点击“Ok ✔”。

![MakeCode 菜单显示 Variables 部分已选中](../img/makeVariable.png)
![变量名称弹窗](../img/variableModal.png)

然后，回到 Variables 菜单，将“set strength to 0”拖到粉色的“on radio received (receivedNumber)”块里面。再回到 Radio 菜单，将“received packet (signal strength)”拖到“set strength to 0”中的 `0️` 上方。当你完成后，你的工作区应类似如下所示：

![工作区包含 on start、forever 和 received packet 块](../img/savedRSSI.png)

变量就是我们可以存储信息的地方，并为它起一个友好的名字，使我们知道其中存储的内容。因此，创建一个名为 `strength` 的变量实际上就是为存储一个数值分配了一块空间，在这里存储的是我们接收到消息时测得的信号强度。我们可以简单地用名称 `strength` 来检查当前存储的数值，或者将其与其他内容进行比较。如果稍后接收到带有更强或更弱信号的消息，`strength` 的值会自动更新为新的数值。这就是“on radio received”块的作用：每当接收到新消息时，`strength` 的值会自动更新为最新的信号强度，而无需手动操作。