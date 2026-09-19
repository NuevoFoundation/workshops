---
title: "游戏应用结构"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 3
---

## 回归基础
现在游戏已经有了正确的标题，让我们深入了解游戏文件夹中的所有文件。这些文件都代表什么？它们如何为游戏做出贡献？
<img src="../resources/_gen/images/app_structure_files.png" height="25%" width="25%" title="展开视图显示应用文件" alt="Android Studio中的应用文件"/>

### AndroidManifest.xml
每个 Android 项目都包含一个清单文件。对于你的游戏来说，这就是 `AndroidManifest.xml` 文件。清单文件定义了游戏的元数据，例如，它可以定义游戏应用的图标和整体主题。

### activity_main.xml
此文件位于“layout”文件夹中。顾名思义，此文件夹中的文件定义了应用程序的外观。如果查看 `activity_main.xml` 的代码，你会看到像 `TableLayout` 或 `TableRow` 这样的关键字。`activity_main.xml` 文件中的关键字组合创建了用于游戏选择按钮（玩家对玩家或玩家对电脑）、井字棋棋盘及重置按钮的布局。`TableLayout` 关键字表示布局将按表格样式对齐，包括列和行。`TableRow` 关键字创建了布局中的新行，每个附加元素对应该行中的一个位置：
<img src="../resources/_gen/images/activity_main.png" height="30%" width="30%" title="按行显示的游戏棋盘布局" alt="井字棋棋盘，共 5 行。第一行包括两个游戏选择按钮，接下来是 3 行 3 列的井字棋网格，最后是包含重启按钮的第五行"/>

### MainActivity.kt

此文件位于“java”文件夹中。文件包含应用程序的代码和逻辑。

### colors.xml, strings.xml, styles.xml

这些文件位于“values”文件夹中。文件包含可以被其他 XML 文件和应用程序代码引用的值。

## 整合文件

所有这些文件共同作用，组成了你的游戏。`activity_main.xml` 文件决定了展示给你的内容。当你点击某个按钮时，事件会从 `activity_main.xml` 发送到 `MainActivity.kt`，以确定点击按钮后会发生什么。对于可重复使用的值，`activity_main.xml` 和 `MainActivity.kt` 可以查找 `colors.xml`、`strings.xml` 或 `styles.xml`，从一个便利的位置使用这些值。