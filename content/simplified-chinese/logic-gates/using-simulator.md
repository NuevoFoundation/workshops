```markdown
---
title: "使用模拟器"
date: 2025-10-20T01:00:18-05:00
weight: 1
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

## 简介

欢迎来到哥斯达黎加的魔法森林。在这里生活着一个保护动物和自然的能量球，但它的能量正在消失。  
为了恢复它，我们首先需要学习如何使用逻辑电路模拟器。

---

<img src="../media/pattern.webp" alt="逻辑工作坊装饰图案" width="100%" />

## 模拟器基本使用方法

在学习逻辑门之前，我们需要了解如何放置组件以及正确连接它们。

### 1. 主界面

左侧有一个工具栏，包含所有可用组件，如：

- 输入（Input）  
<img src="../media/logicinput.png" alt="输入图标" width="40px" class="lg-img"/>

- 输出（Output）  
<img src="../media/logicoutput.png" alt="输出图标" width="40px" class="lg-img"/>

- 时钟（CLK）  
<img src="../media/logicclock.png" alt="时钟图标" width="64px" class="lg-img"/>

- 逻辑门（AND、OR、NOT等）  
<div style="margin-left: 20px; display: flex; gap: 5px; align-items: center;">
   <img src="../media/logicand.png" alt="AND逻辑门图标" width="64px"/>
   <img src="../media/logicor.png" alt="OR逻辑门图标" width="64px"/>
   <img src="../media/logicnot.png" alt="NOT逻辑门图标" width="64px"/>
</div>

顶部有一些重要按钮：
- **编辑**: 用于放置组件的模式。
- **移动**: 移动已经放置好的组件。
- **删除**: 移除组件。
- **保存 / 加载**: 保存或加载电路。
<img src="../media/menu.png" alt="模拟器菜单图标" class="lg-img"/>

白色区域是你构建电路的地方。

---

## 第一个任务：连接一个输入到一个输出

### 步骤

1. 确保选择了 **编辑** 模式。
2. 在左侧工具栏，点击 **输入**。
3. 点击白色空间中的任意位置以放置输入。
4. 然后选择 **输出**，再次点击以将其放置在输入的右侧或附近。
5. 要连接它们：
   - 点击输入的小圆圈。
   - 然后点击输出的小圆圈。
   - 一条连接线会自动绘制出来。
6. 点击输入符号以切换其值为开或关：
   - `0` = 关闭
   - `1` = 开启

如果输入为 `1` 且输出显示为 `1`，你的电路就是工作的。

---

## 你学到了什么？

- 如何放置组件（点击组件后，再点击白色空间）。
- 如何通过连接圆圈连接它们。
- 如何切换输入信号。
- 此电路尚未使用逻辑门，只是一个直接连接。

## 模拟器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="逻辑门模拟器" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 即将学习

当你准备好后，在下一项活动中，你将遇到巨嘴鸟并学习如何使用 **AND** 逻辑门。
```