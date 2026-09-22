---
title: "Placeholder"
date: 2020-07-23T00:00:00Z
weight: 15
draft: true
hidden: true
---

## 读取和处理输入

在 Java 中，一个高效获取用户输入的方法是使用 `java.util` 包中的 `Scanner` 类。为了使用这个类及其所有方法，我们需要在文件顶部通过以下代码行引入该类：

```java
import java.util.Scanner;
```

## 错误处理

在 Java 中，我们可以通过将可能导致错误的代码放在 `try-catch` 块中来处理潜在错误。

在 `try` 块中，我们放置可能导致错误的代码块。

在 `catch` 块中，我们指示如何处理执行 `try` 块时出现的错误。通过这种方式，我们可以防止程序崩溃。
例如：

```java
try{
   //  尝试执行的代码块
} catch(Exception e){
   //  处理错误的代码块
}
```

运行你的程序，并输入非数字的输入。现在你的程序应该不会崩溃了！

## Try 块

在 `try` 块中，我们从用户那里获取数字输入。然而，并非所有输入都是有效的，因为我们只能接受棋盘上可用的位置。

使用 `if` 语句检查数字输入是否有效。（提示：访问 `board` 数组以检查输入是否有效）。

如果输入无效，打印语句 `Invalid Position; re-enter your move (1-9):`。

{{% notice hint %}}
#### 如何检查两个字符串是否相同？

要检查两个字符串是否包含相同的内容，我们可以调用方法 `equals()`。例如：

```java
String s1 = "hi";
boolean b1 = s1.equals("hi"); // 这将返回 true
boolean b2 = s1.equals("HI"); // 这将返回 false
```

{{% /notice %}}

## Catch 块

在 `catch` 块中，我们知道玩家输入了非数字输入。首先，我们需要通过调用我们创建的 `Scanner` 对象的 `next()` 方法擦除该无效输入，从而忽略此无效输入。然后，我们还应该打印语句通知玩家重新输入一个棋步 `Invalid Position; re-enter your move (1-9):`。

## （可选）测试你的程序

通过点击 `Run` 测试你的程序，如果你输入了非数字输入或一个不在 1 到 9 之间的数字，你应该看到消息 `Invalid Position; re-enter your move (1-9):`。

## 多次输入

现在，我们拥有了一个可以接受一次输入并判断其有效性的程序，但是我们希望在游戏结束之前，持续提示玩家输入下一个棋步。

为了继续提示用户输入他的下一个棋步，我们将整个 `try-catch` 块放在一个 `while` 循环中。这个 `while` 循环以 `true` 作为参数，意味着程序将在被指示停止之前不断循环。

注意，我们在每次迭代结束时调用 `printBoard(board)` 并提示用户，如下所示：

```java
while(true){
    // 插入 try-catch 块

    printBoard(board);
    System.out.print("Enter your move (1-9): "); 
}
```

## 处理无效输入

当用户输入无效输入时，我们不希望程序调用 `printBoard(board)` 并打印 `Enter your move (1-9):`。

换句话说，我们希望程序直接跳到 `while` 循环的下一次迭代。

我们在代码中加入 `continue;` 来指示计算机跳过当前循环并从 `while` 循环的顶部重新开始执行。

在完成这一练习后，你的程序应该能够在任何无效输入情况下提示用户重新输入，并在任何有效输入情况下打印一个空的棋盘，并提示 `Enter your move (1-9):`！

```
<<<~  Tic  Tac  Toe  ~>>>
* 选择 1 - 9 的数字放置你的棋步
* 玩家: 'X' 电脑: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 1
   |   |   
---+---+---
   |   |                                    <--------------- 棋盘没有显示玩家/电脑的棋步
---+---+---
   |   |   
Enter your move (1-9): d
Invalid Input; re-enter your move (1-9): 3
   |   |   
---+---+---
   |   |                                    <--------------- 棋盘没有显示玩家/电脑的棋步
---+---+---
   |   |   
Enter your move (1-9): 
```

让我们继续这次学习，看看如何更新我们的游戏棋盘吧！