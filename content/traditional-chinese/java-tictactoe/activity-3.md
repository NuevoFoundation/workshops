```yaml
---
title: "3. 更新遊戲棋盤"
description: "學習生成電腦的移動並更新棋盤"
date: 2021-10-14T00:00:00Z
prereq: "設置棋盤!, 讀取並處理輸入"
difficulties: ["intermediate"]
weight: 4
---

在上一個練習中，我們的程式可以列印出棋盤並提示使用者輸入每次有效的移動 `Enter your move (1-9):`。然而，棋盤仍然是空的（如下所示）。在這個練習中，我們將學習如何更新棋盤並為電腦生成隨機移動。

```
<<<~  Tic  Tac  Toe  ~>>>
* 選擇數字 1 - 9 以放置你的移動
* 玩家: 'X' 電腦: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 1
   |   |   
---+---+---
   |   |                                    <--------------- 棋盤沒有玩家/電腦的移動
---+---+---
   |   |   
Enter your move (1-9): d
Invalid Input; re-enter your move (1-9): 3
   |   |   
---+---+---
   |   |                                    <--------------- 棋盤沒有玩家/電腦的移動
---+---+---
   |   |   
Enter your move (1-9): 
```

## 顯示使用者的移動

在 `hasNextInt()` 條件語句內，在呼叫方法 `printBoard(board)` 之前，使用者輸入對應的索引值來更新 `board` 陣列。

請注意，玩家在遊戲棋盤上以 `"X"` 表示。

{{% notice tip %}}
### 提示

- Java 使用從 0 開始的索引，而玩家被提示輸入的是 1 到 9 的數字。
- 要訪問陣列的一個元素，使用索引表示法：`myVariable[indexNumber]`。
{{% /notice %}}

## 設置電腦的移動

建立一個新方法 `getComputerMove(String[] curBoard)`，輸入當前的遊戲棋盤，生成電腦的一個有效移動（介於 1 到 9）。

按照以下步驟來實現該方法。

## 實現電腦的移動

在 `getComputerMove()` 方法中，我們將隨機生成一個從 1 到 9 的數字給電腦使用。

我們會借助 Java 中的 `Random` 類，它通常用來生成隨機數。

要使用這個類及其方法，我們需要在檔案頂部加入以下引入代碼：

```java
import java.util.Random;
```

通過呼叫構造方法 `Random()` 建立一個 `Random` 物件。

```java
Random rand = new Random();
```

## 生成隨機數字

呼叫建立的 `Random` 物件上的方法 `int nextInt(int num)`，隨機生成一個介於 1 到 9 的數字。

`int nextInt(int num)` 方法的呼叫會返回一個從 0 到 `num-1` 的隨機數。

```java
int position = rand.nextInt(9);
```

## 檢查有效移動

在生成 1 到 9 的隨機數後，我們需要檢查該位置是否有效。

使用 `while` 循環生成電腦的有效移動，如果之前隨機生成的數字不是一個有效的位置。

找到有效的位置後返回該數字。

```java
while (!curBoard[position].equals(" ")){
   position = rand.nextInt(9);
}
return position;
```

## 更新棋盤陣列

和第一步一樣，在方法呼叫 `printBoard(board)` 之前，我們應該更新棋盤陣列的電腦移動。

隨機生成移動時呼叫 `getComputerMove()`！

請注意，在遊戲棋盤上，電腦以 `"O"` 表示。

```java
board[getComputerMove(board)] = "O"; //getComputerMove 返回 0-8 的整數，即陣列中的正確位置
printBoard(board);
```

## 執行程式

現在執行 `Run` 程式！棋盤應該在每次輸入時正確地更新玩家和電腦的移動，如下所示：

```
<<<~  Tic  Tac  Toe  ~>>>
* 選擇數字 1 - 9 以放置你的移動
* 玩家: 'X' 電腦: 'O'

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
Invalid Position; re-enter your move (1-9): 2
 X | X |   
---+---+---
   |   | O 
---+---+---
   | O |   
Enter your move (1-9): 
```

看起來一切都正常運作！我們只需要確定如何判定比賽的勝負，將在下一個練習中實現！
```