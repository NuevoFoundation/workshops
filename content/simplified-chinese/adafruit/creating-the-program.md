---

title: "创建程序"
description: ""
draft: false
weight: 3
---

打开你喜欢的网络浏览器（例如 Edge、Firefox、Google Chrome、Internet Explorer），并访问 https://aka.ms/oranges。屏幕应显示如下内容：

![无法加载图片](../img/adafruit.png?classes=border,shadow)

## 定义变量

今天，我们将使用橙子来告诉我们的 Adafruit 何时发出声音。首先，我们需要为每个橙子定义一个名称，并告诉计算机在哪里检测它们的信号。我们通过定义变量完成第一步。点击标有 “VARIABLES” 的部分，它是三文鱼色的，在顶部向下数第七个。然后通过点击 “Make a Variable” 并为其命名来定义一个变量。做两次操作，在这里我们将它们定义为 analog1 和 analog2，但你可以随意命名。

![无法加载图片](../img/adafruit-define-variables.png?classes=border,shadow)  
![无法加载图片](../img/adafruit-make-variable-dialog.png?classes=border,shadow)  
![无法加载图片](../img/adafruit-variables-created.png?classes=border,shadow)

## 解释输入信息

现在，我们已经为橙子定义了计算机可识别的名称，我们需要让 Adafruit 理解它们。有两种类型的输入：数字和模拟。比如，灯开关和电源按钮是数字输入，它们只有开或关，即 1 或 0。而模拟输入例如灯光调节器或音量按钮，它们有更多的数值选项。我们的橙子会是模拟输入，根据我们触摸或握紧的力度，它们向 Adafruit 报告的值会发生变化。

再次点击 VARIABLES 部分。这次你应该会看到一些更多选项，因为我们已经定义了两个变量。将一个 “set ___ to __” 的模块拖到绿色的 “forever” 模块中。使用白色向下箭头，将第一个空白处变更为 “analog1”。

![无法加载图片](../img/adafruit-set-variable-block.png?classes=border,shadow)

接下来，点击 ADVANCED 附近的向下箭头，然后点击 PINS。找到 “analog read pin __” 模块，它位于顶部的第三个位置，并将其插入到 “set analog1 to 0” 模块的 0 位置。为了插入，只需将其拖到 0 上方，确认 0 被黄色高亮，随后释放鼠标（或触控板）。你应该会看到模块展开以适应新模块内容。如果没有看到这种效果，请重试。

![无法加载图片](../img/adafruit-analog-read-pin.png?classes=border,shadow)  
![无法加载图片](../img/adafruit-analog1-complete.png?classes=border,shadow)

完成后，你的工作区应该看起来像上图。再次重复这个过程，但这次使用白色向下箭头选择 analog2 和 A2。完成后，请参照下图验证正确性。  
![无法加载图片](../img/adafruit-analog2-complete.png?classes=border,shadow)

## 创建循环

现在，计算机已经知道如何识别橙子，并理解它们的输入信号，让我们创建一个循环来检测何时握住橙子。点击 LOGIC 部分，将一个 “If ____ then” 模块拖到变量模块下面放置。

![无法加载图片](../img/adafruit-if-then-block.png?classes=border,shadow)

让我们结合音量旋钮的例子来理解循环中要进行的比较。每个人都有自己喜欢的音乐音量，这个音量就是我们听音乐的最佳点。对于我们的橙子来说，同样也适用这一点。当它们静置时，会给计算机一个“较高的数值”，而当我们触摸它们时，会变成“较低的数值”。关键在于找到一个中间值，以便仅在我们想要时发出声音。

要设置这个值，前往 LOGIC 部分，再次拖一个六边形的 “ __ < __ “ 模块（比较模块，位于 Comparison 子部分的第二个）。将它拖入 “if __ then” 模块中的 “true” 部分，并确保放下之前看到了黄色高亮。用图片检查你的工作区是否正确。

![无法加载图片](../img/adafruit-comparison-block.png?classes=border,shadow)

现在我们开始设置需要比较的内容。回到 VARIABLES 部分，拖动 analog1，并将其放入第一个空格中。然后点击第二个空格，输入 40。此数值对于大多数人来说应该是个不错的“最佳点”。如果之后橙子在未触碰时发出声音，可以回到这一步，并将该数值调大。如果橙子在触摸时没能发出声音，可以回来将数值调小。现在我们先设定为 40。

![无法加载图片](../img/adafruit-threshold-value.png?classes=border,shadow)

现在我们可以挑选音乐啦！点击 MUSIC 部分，将第二个模块 “play _____ until done” 拖入我们的 If-Then 模块中。可以点击下拉箭头，自由选择想要播放的声音。

![无法加载图片](../img/adafruit-play-sound-block.png?classes=border,shadow)

接下来重复之前的几步，但这次应用于 analog2。当完成后，你的工作区应该看起来跟下图类似（但你的音乐选项可以不同）。

![无法加载图片](../img/adafruit-complete-workspace.png?classes=border,shadow)

## 用灯光增添趣味（时间允许的情况下）

Adafruit 芯片上有许多酷炫的灯！可以玩出很多有趣的效果，让我们为声音添加一点色彩，以便在触摸橙子时可以通过视觉和听觉感知变化。点击 LIGHT 部分，将 “Set all Pixels to ___” 模块拖入到两个 If-Then 块中。在我们播放声音之前加入这两个模块。可以点击颜色部分，选择你喜欢显示的颜色。

![无法加载图片](../img/adafruit-lights-added.png?classes=border,shadow)