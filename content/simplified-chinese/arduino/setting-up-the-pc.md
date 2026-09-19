```markdown
---
title: "设置电脑"
draft: false
weight: 2
---

## 了解 Arduino IDE

下载并安装 Arduino IDE：

* 从 Microsoft Store 下载（安装速度更快） - <https://www.microsoft.com/store/productId/9NBLGGH4RSD8>
* 或从 Arduino 网站下载 <https://www.arduino.cc/en/Main/Software>（选择最新版本）

安装完成后，打开软件。这就是 Arduino IDE，也是所有编程工作的场所。花点时间熟悉它并了解如何使用。

![Alt Text: Arduino IDE 的标注图片](../img/ArduinoIDE-labeled.png)
*<https://www.makerspaces.com/simple-arduino-projects-beginners/>*

1. 菜单栏：提供创建和保存 Arduino 项目的工具。
2. 验证按钮：编译代码，检查拼写或语法错误。
3. 上传按钮：将代码发送到连接的板子（例如，Arduino Uno）。上传时板子上的灯会快速闪烁。
4. 新项目：打开一个包含空白代码的新窗口。
5. 项目名称：保存项目后，项目名称会显示在此。
6. 打开现有项目：允许打开已保存的项目或储存的示例项目。
7. 保存项目：保存当前打开的项目。
8. 串口监视器：当板子连接后，此处会显示 Arduino 的串行信息。
9. 代码区域：这里是撰写项目代码的地方，用于指示板子需要完成的任务。
10. 消息区域：显示保存状态、代码编译状态、错误信息等。
11. 文本控制台：显示错误信息的详细内容、编译的程序大小及其他信息。
12. 板子和串口：显示正在使用的板子类型及连接的串口。

## 连接您的 Arduino

现在可以将 Arduino 连接到您的电脑。将 USB 电缆的一端插入 Arduino Uno，然后将另一端插入您的电脑的 USB 接口。

板子连接后，您需要打开 Tools，然后选择 Board，最后选择 Arduino Uno。

![Alt Text: Arduino IDE 的屏幕截图，显示如何选择板子类型](../img/board-select.png)

接下来，您需要告诉 Arduino 您的电脑正在使用哪个端口。

选择端口：打开 Tools，然后选择 Port，再选择显示 Arduino 的端口。

![Alt Text: Arduino IDE 的屏幕截图，显示如何选择 COMM 端口](../img/COMM-port.png)
```