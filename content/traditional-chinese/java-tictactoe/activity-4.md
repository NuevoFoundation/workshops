```---
title: "4. 檢查勝者"
description: "撰寫方法以檢查勝者並輸入棋盤"
date: 2021-10-14T00:00:00Z
prereq: "設定棋盤！讀取並處理輸入、更新遊戲棋盤"
difficulties: ["中級"]
weight: 5
---

## 顯示勝者

撰寫一個名為 `getWinner(String[] curBoard)` 的方法，透過目前遊戲棋盤的陣列輸入，返回勝者的 `String`。

- 如果玩家獲勝，返回 `"恭喜！\n你贏得了遊戲 :)"`。
- 如果電腦獲勝，返回 `"遊戲結束！\n你輸了遊戲 :("`。
- 如果平局，返回 `"平局！再試一次"`。
- 如果尚未有勝者，返回 `""`。

有多種方法可以撰寫此方法。

首先在下面的 Replit 試試看；它會告訴你你的方法是否寫得正確！
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaTicTacToegetWinner" target="_blank">啟動 Replit</a>

{{% notice note %}}
#### 用於撰寫 `getWinner()` 方法的想法/提示

- 將由水平、垂直或對角線排列的3個位置的 `Strings` 串接起來。
- 使用 `equals()` 檢查每個串接的字符串是否為 `"XXX"` 或 `"OOO"` 以判定勝者。（你甚至可以創建另一個方法來檢查輸入的 `String` 是否為 `"XXX"` 或 `"OOO"`）
- 如果陣列中的所有位置都已填滿（可以使用 `for loop`），且沒有勝者，則遊戲以平局結束。
{{% /notice %}}

## 呼叫勝者方法

在 `main()` 中，於執行玩家放置棋子 `"X"` 的程式碼行後，呼叫方法 `getWinner()`。

檢查遊戲是否應繼續（當尚未有勝者或平局）。

如果有勝者或平局，打印最終棋盤及遊戲結果！此外，加入程式碼行 `break;`，提示程式退出 `while` 迴圈！

## 重複上一步

在 `main()` 中，於執行電腦放置棋子 `"O"` 的程式碼行後，重複上述步驟（檢查勝者並根據需求打印結果）。

## 關閉 Scanner 物件

在 `while` 迴圈外，加入程式碼行 `sc.close()` 以關閉 `Scanner` 物件，避免繼續讀取新的輸入。

如果退出 `while` 迴圈後不再接收新的輸入，關閉 `Scanner` 物件是一個好的做法！

## 全部完成 :)!

現在你應該有一個運作良好的井字棋遊戲了！為完成這次工作坊而感到驕傲吧！做得好 👍！

##### 總括來說，你的程式碼結構應該像這樣：
<img src="../images/code.png" height="500" alt="井字棋：你的 Java 專案。 void main(String args[]) 包含讀取玩家輸入、處理輸入、提示遊戲回合或打印遊戲勝者的程式碼。 void printBoard(String[] curBoard) 是打印棋盤的方法。 int getComputerMove(String[] curBoard) 隨機返回電腦的可行移動位置。 String getWinner(String[] curBoard) 返回遊戲勝者、平局或''（若遊戲應繼續）。"/>
```