```markdown
---
title: "3. 更新游戏棋盘"
description: "学习为电脑生成一个棋步并更新棋盘"
date: 2021-10-14T00:00:00Z
prereq: "设置棋盘！读取和处理输入"
difficulties: ["中级"]
weight: 4
---

在上一个练习中，我们实现了一个程序，可以打印出棋盘并在用户每次有效移动后提示 `Enter your move (1-9):`。然而，棋盘保持为空（如下所示）。在本次练习中，我们将学习如何更新棋盘并为电脑生成一个随机的棋步。

```
<<<~  Tic  Tac  Toe  ~>>>
* 选择数字 1 - 9 来放置你的棋子
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
输入无效；重新输入你的棋步 (1-9): 3
   |   |   
---+---+---
   |   |                                    <--------------- 棋盘没有显示玩家/电脑的棋步
---+---+---
   |   |   
Enter your move (1-9): 
```

## 显示玩家的棋步

在 `hasNextInt()` 的 if 条件语句中，在方法调用 `printBoard(board)` 之前，用用户的输入更新 `board` 数组中对应的索引。

注意，玩家在棋盘上用 `"X"` 表示。

{{% notice tip %}}
### 提示

- Java 使用 0 索引，而玩家被提示输入的数字是从 1 到 9。
- 要访问数组中的元素，可以使用索引表示法：`myVariable[indexNumber]`。
{{% /notice %}}

## 设置电脑的棋步

创建一个新方法 `getComputerMove(String[] curBoard)`，接受当前棋盘作为参数，为电脑生成一个从 1 到 9 的有效棋步。

按照以下步骤来实现这个方法。

## 实现电脑的移动逻辑

在 `getComputerMove()` 中，我们将随机生成一个从 1 到 9 的数字，作为电脑的棋步。

我们将使用 Java 中的 `Random` 类来生成随机数。这个类经常用来生成随机数字。

为了使用这个类及其所有的方法，需要在文件顶部添加以下代码来导入该类。

```java
import java.util.Random;
```

通过调用 `Random()` 构造方法来创建一个 `Random` 对象。

```java
Random rand = new Random();
```

## 生成随机数

调用 `Random` 对象的 `int nextInt(int num)` 方法，可以随机生成一个从 0 到 `num-1` 的数。

```java
int position = rand.nextInt(9);
```

## 检查有效位置

在生成了一个 1 到 9 的随机数后，我们需要检查对应的位置是否可用。

用一个 `while` 循环来确保为电脑生成一个有效位置。如果之前生成的数字对应的位置不可用，就重新生成一个。

找到一个有效的位置后，返回这个数字。

```java
while (!curBoard[position].equals(" ")){
   position = rand.nextInt(9);
}
return position;
```

## 更新棋盘数组

和第一个步骤一样，在调用 `printBoard(board)` 方法之前，我们也需要为电脑更新 `board` 数组。

通过调用 `getComputerMove()` 来随机生成一个电脑的棋步！

注意，电脑在棋盘上的表示是 `"O"`。

```java
board[getComputerMove(board)] = "O"; // getComputerMove 返回数组中对应的 0-8 的索引位置
printBoard(board);
```

## 运行程序

现在运行程序！每次输入后，棋盘应该正确更新玩家和电脑的棋步，如下所示：

```
<<<~  Tic  Tac  Toe  ~>>>
* 选择数字 1 - 9 来放置你的棋子
* 玩家: 'X' 电脑: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 1
 X |   |   
---+---+---
   |   |   
---+---+---
   | O |   
Enter your move (1-9): 1
位置无效；重新输入你的棋步 (1-9): 2
 X | X |   
---+---+---
   |   | O 
---+---+---
   | O |   
Enter your move (1-9): 
```

一切看起来运行正常！我们只需要确定谁是赢家/输家即可，这将在下一个练习中实现！
```