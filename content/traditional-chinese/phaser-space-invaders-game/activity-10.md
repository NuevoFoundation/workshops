---
title: "Activity 10 - Adding a Title Screen"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 17
---

現在，我們將利用場景 1 和場景 2 的分離，新增一個標題畫面來完成我們的遊戲！

這非常簡單！我們先將 `Scene 1` 的 `create()` 底部的 `startGame()` 行註解掉。我們將使用 `startGame()` 函數來啟動遊戲，而不是像以前那樣自動開始：

<!--- ![startGame()](../media/11/comment_out.png)--->
<img src="../media/11/comment_out.png" alt="startGame comment out" style="width:950px;"/>

此時，畫面會回到一個黑色的畫布。要製作標題畫面，我們需要從場景 1 的 `start page` 區段中導入背景畫面和一些文字：

<!--- ![start_page](../media/11/start_page.png)--->
<img src="../media/11/start_page.png" alt="start_page" style="width:950px;"/>

背景只能在 `create()` 中作為圖片創建，因為圖片只能在 `update()` 函數中移動！

對於文字，我們建議為標題文字和開始按鈕文字使用不同的 `字體` 和 `填充樣式`。

現在，我們將僅在玩家點擊來啟動遊戲時調用 `startGame()` 方法：

<!--- ![on_click](../media/11/on_click.png)--->
<img src="../media/11/on_click.png" alt="on_click" style="width:950px;"/>

你的畫面應該看起來類似如下：
![title_screen](../media/11/title_screen.gif)

## 恭喜！

你現在已經完成了所有的課程，並創建了你自己的太空入侵者遊戲！玩得開心吧！👏🏽👏🏽👏🏽