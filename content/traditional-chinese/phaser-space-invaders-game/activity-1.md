---
title: "活動 1 - 放置背景與玩家船艦"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 6
---

這個活動會有兩個部分：載入遊戲的背景，以及載入玩家最終將控制的船艦（目前它只是一個不會移動的圖片）。這兩個活動的操作方式非常類似：首先，我們會在場景 1 上傳圖片到遊戲中，然後在場景 2 中讓它顯示出來。你可以將場景 1 想像成將圖片上傳到遊戲，而場景 2 則用來創建我們已上傳的內容。

## 第 1 部分：背景

讓我們從背景開始。同樣地，要將圖片添加到遊戲中，首先我們需要在場景 1 中預載入它，然後在場景 2 中將其放入遊戲。首先，前往 `Scene1.js` 中 `preload()` 函數的步驟 1：

<!---![background part 1](../media/3/step1.png) --->
<img src="../media/3/step1.png" alt="background part 1" style="width:950px;"/>

現在，將背景圖片載入 `preload()` 中。

複習一下，
* 完成這行程式碼後，什麼都不會發生，因為你只是將圖片載入以備未來使用，並未將它放置在任何地方。

* `imageID` 是你賦予圖片的名稱。

* `imagePosition` 是圖片的位置。
（假設圖片名稱為 `example.png` 且位於 `assets` 資料夾中，`imagePosition` 將是 `assets/example.png`）

接下來，前往 `Scene2.js` 中 `create()` 函數的步驟 1 和步驟 2。每個步驟需要一行程式碼，總共兩行：

<!---![background_section](../media/3/background_section.png) --->
<img src="../media/3/background_section.png" alt="background_section" style="width:950px;"/>

嘗試載入頁面並檢查背景是否正常運作！你的右側控制台應該看起來像這樣：

<!---![after_add_image](../media/3/after_add_image.png) --->
<img src="../media/3/after_add_image.png" alt="background_after_add_image" style="width:950px;"/>

## 第 2 部分：玩家船艦

我們將對玩家船艦執行幾乎相同的操作，但語法會有所不同，因為玩家的船艦是一個精靈表（spritesheet），而非普通圖片（你會在下一個活動中了解原因）。

在這部分，你需要完成 `Scene1.js` 中 `preload()` 函數的步驟 2：

<!---![background player ship step2](../media/3/step2.png) --->
<img src="../media/3/step2.png" alt="background player ship step2" style="width:950px;"/>

* `SpriteID` 和 `SpritePosition` 與 `imageID` 和 `imagePosition` 的作用相同。

* `FrameWidth` 將是 32，`FrameHeight` 將是 48。

接著，在 `Scene2.js` 中完成 `player section`：

<!--- ![player_section](../media/3/player_section.png) --->
<img src="../media/3/player_section.png" alt="background player_section" style="width:950px;"/>

{{% notice hint %}}

如果已正確填寫玩家部分，但玩家仍未出現在螢幕上，嘗試更改 x 和 y 的值，玩家可能位於螢幕範圍之外！

{{% /notice %}}

在添加玩家船艦後，你的控制台應該看起來像這樣：

<!--- ![after_add_player](../media/3/after_add_player.png) --->
<img src="../media/3/after_add_player.png" alt="background after_add_player" style="width:950px;"/>