---
title: "2. 读取与处理输入"
description: "使用 Scanner 类读取输入并检查错误情况"
date: 2021-10-14T00:00:00Z
prereq: "设置棋盘!"
difficulties: ["中级"]
weight: 3
draft: false
---

## 导入包

在 Java 中，一个高效的获取用户输入的方法是使用 `java.util` 包中的 `Scanner` 类。要使用这个类及其所有方法，我们需要在文件顶部添加如下代码来导入该类：

```java
import java.util.Scanner;
```

## 使用 Scanner 类

在 `main()` 方法中，我们首先需要创建一个名为 `sc` 的 `Scanner` 对象，通过调用其构造函数（如下所示）。

我们希望 `Scanner` 从标准输入流读取输入。要实现这一点，我们需要传入 `System.in`（标准输入流对象）。

```java
// 创建一个 Scanner 对象
Scanner sc = new Scanner(System.in);
```

## 获取用户输入

在上一个活动中，我们提示用户输入 1 到 9 的数字。因此，我们期望从输入流中获取一个 `int` 类型的值。

要获取存储在 `Scanner` 对象中的 `int` 值，我们调用 `sc`（即 `Scanner` 对象）的 `nextInt()` 方法。

```java
int input = sc.nextInt();
```

## 测试程序（可选）

为了测试你的程序，可以添加一条打印语句，用于打印从 `nextInt()` 方法中存储的值。

运行你的程序，输入一些数字然后按下 `enter` 键。你应该会看到你输入的数字被正确打印出来。例如：

```
<<<~  Tic  Tac  Toe  ~>>>
* 选择数字 1 - 9 来放置你的棋子
* 玩家: 'X' 电脑: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
请输入你的落子位置（1-9）：2                  <------- 你输入的数字
输入的数字：2                                <------- 打印语句正确打印了输入的数字
```

{{% notice warning %}}
#### 如果用户输入的不是数字，会发生什么？

在编写程序时，我们不能保证用户总是会按照提示正确输入数据。

由于我们的程序只能接收 `int` 类型的输入，当你输入不是整数的内容时，例如：`hi`、`$` 或者 `20.1`，程序将会崩溃，并显示如下错误信息：

```
Exception in thread "main" java.util.InputMismatchException      <------ 显示错误类型
    at java.base/java.util.Scanner.throwFor(Scanner.java:939)
    at java.base/java.util.Scanner.next(Scanner.java:1594)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2258)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2212)
    at Main.main(Main.java:15)                                   <------ 指出导致错误的代码行（Main.java 中的第 15 行）
```

另外，如果输入的数字不在 1 - 9 范围内，程序不会崩溃，但这些输入同样是我们不希望的。
{{% /notice %}}

## 使用 Scanner 处理无效输入

Scanner 类提供了检查输入是否有效或无效的方法。例如，方法 `hasNextInt()` 会检查用户输入的值是否为整数，并返回 `true` 或 `false`。使用此方法，可以确保用户的输入是有效的。

通过控制结构来验证用户的输入。如果输入无效，要求用户重新输入有效的数据。

```java
if(sc.hasNextInt()) { // 是否输入了一个整数
	move = sc.nextInt(); // 获取整数输入
   if (!(move > 0 && move <= 9)) { // 输入的整数是否在 1 到 9 之间
		System.out.print("无效位置; 请重新输入你的落子位置（1-9）：");
   }
} else { // 如果输入的不是整数
   sc.next(); // 清除 Scanner
	System.out.print("无效输入; 请重新输入你的落子位置（1-9）：");
}
```

## 测试程序（可选）

通过点击 `运行` 测试你的程序。如果你输入了一个非数字的内容，或者不是 1 到 9 范围内的数字，你应该会看到消息 `无效位置; 请重新输入你的落子位置（1-9）：`。

## 处理多个输入

现在，我们有了一个程序可以接受一个输入并验证其是否有效。接下来，我们希望玩家不断输入，直到游戏结束为止。

为了继续提示用户输入下一个落子位置，我们把整个 `hasNextInt` 的 if 语句放到一个 `while 循环`中。这个 `while 循环` 接受一个参数 `true`，意味着程序将一直循环，直到指示其停止。

请注意，我们在每次循环结束时调用了 `printBoard(board)` 并提示用户，如下所示：

```java
while(true){
    // 在这里插入 hasNextInt() 的 if 语句

   // 将这些内容放入 hasNextInt() 的 if 语句中
    printBoard(board);
    System.out.print("请输入你的落子位置（1-9）："); 
}
```

## 处理无效输入

当用户输入了一个无效的值时，我们不希望程序调用 `printBoard(board)` 或打印 `请输入你的落子位置（1-9）：`。

换句话说，我们希望程序跳过当前无效输入，直接从 `while` 循环的顶部重新开始。

我们可以在代码中添加 `continue;`，表示让计算机跳回并从 `while` 循环的顶部重新执行。

完成本练习后，你应该可以编写一个程序，当检测到无效输入时，会提示重新输入；对于有效输入，则会打印空白棋盘，并提示 `请输入你的落子位置（1-9）：`。

```
<<<~  Tic  Tac  Toe  ~>>>
* 选择数字 1 - 9 来放置你的棋子
* 玩家: 'X' 电脑: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
请输入你的落子位置（1-9）：1
   |   |   
---+---+---
   |   |                                    <--------------- 显示棋盘但未更新玩家/电脑的落子
---+---+---
   |   |   
请输入你的落子位置（1-9）：d
无效输入; 请重新输入你的落子位置（1-9）：3
   |   |   
---