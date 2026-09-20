```markdown
---
title: "4. 检查胜者"
description: "编写方法以检查获胜者，并提供当前棋盘的输入"
date: 2021-10-14T00:00:00Z
prereq: "设置棋盘！读取和处理输入，更新游戏棋盘"
difficulties: ["中级"]
weight: 5
---

## 显示胜者

编写方法 `getWinner(String[] curBoard)`，接收当前游戏棋盘的一个 `数组` 输入，返回一个 `String` 类型的胜者信息。

- 如果玩家获胜，返回 `"恭喜！\n你赢了游戏 :)"`。
- 如果电脑获胜，返回 `"游戏结束！\n你输了游戏 :("`。
- 如果平局，返回 `"平局了！再试一次"`。
- 如果尚未有胜者，返回 `""`。

有几种方法可以编写此方法。

首先在以下 Replit 中尝试；它会告诉你方法是否正确！
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaTicTacToegetWinner" target="_blank">启动 Replit</a>

{{% notice note %}}
#### 编写 `getWinner()` 方法的思路/提示

- 将表示水平、垂直或对角线的 3 个位置的 `String` 连接起来。
- 使用 `equals()` 检查每个连接的字符串是否为 `"XXX"` 或 `"OOO"`，以确定是否有胜者。（你甚至可以创建一个额外的方法，用于检查输入的 `String` 是否为 `"XXX"` 或 `"OOO"`）
- 如果数组中的所有位置都被填满（一个 `for` 循环可能会有帮助），但没有胜者，游戏以平局结束。
{{% /notice %}}

## 调用胜者方法

在 `main()` 中，于放置玩家 `"X"` 的那行代码之后，调用方法 `getWinner()`。

检查游戏是否应该继续（当尚无胜者或平局时）。

如果有胜者或平局，打印最终棋盘和游戏结果！并添加代码行 `break;`，这将让程序跳出 `while` 循环！

## 重复上述步骤

在 `main()` 中，于放置电脑 `"O"` 之后的代码中重复之前的步骤（检查胜者并在需要时打印结果）。

## 关闭 Scanner 对象

在 while 循环之外，添加代码 `sc.close()`，以关闭 `Scanner` 对象，从而停止读取新输入。

如果在 `break` 退出 `while` 循环后不再获取输入，关闭 `Scanner` 对象是一个良好的编程习惯！

## 全部完成 :)!

到现在为止，你应该已经完成了一个运行良好的井字棋游戏！为完成这个工作坊感到骄傲吧！干得漂亮 👍！

##### 总结来看，你的代码结构应该是这样的：
<img src="../images/code.png" height="500" alt="井字棋：你的 Java 项目。包含 void main(String args[])，用来读取玩家输入、处理输入、提示游戏每个回合的操作，或打印游戏胜者。void printBoard(String[] curBoard) 是一个用于打印游戏棋盘的方法。int getComputerMove(String[] curBoard) 随机返回一个供电脑使用的可用位置。String getWinner(String[] curBoard) 返回游戏的胜者/平局信息或在游戏应继续时返回''。"/>
```