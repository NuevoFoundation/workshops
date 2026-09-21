---
title: "Javascript: JSappy Bird"
description: "學習變數、函數和條件語句，同時製作一個 Flappy Bird 複製遊戲。"
date: 2019-07-23T10:42:43-07:00
difficulties: ["beginner", "intermediate"]
draft: true
hidden: true
---

![alt text](resources/_gen/images/flappy.png "JSappyBird")

1. **下載所需文件。** <link_here>

模板包含以下文件：

- phaser.min.js，Phaser 框架 v2.4.3。
- index.html，用於顯示遊戲的頁面。
- main.js，存放所有程式碼的文件。
- assets/，包含 2 張圖片的目錄。
- Activity 1.js
- Activity 2.js
- Activity 3.js

`index.html` 文件是我們 Flappy Bird 遊戲的主頁面，並使用了兩個 Javascript (`.js`) 文件。**phaser.min.js** 文件是我們用來製作瀏覽器遊戲的框架。另一個文件是 **main.js**，這裡將存放所有的 Javascript 邏輯。三個 Activity 文件將幫助你完成遊戲的功能，需補充的部分會以 🐤🐤🐤 標記。

玩得開心！

### 變數

變數是用來命名存儲例如字符串、數字和布林值的名稱。我們用變數來存儲資訊，使計算機可以追蹤這些資訊。使用 `var` 關鍵字和變數名稱來建立變數，然後使用 `=` 後加上你要存儲的值來賦值這個變數。

例如：

```js
var world = "Hello World";
var x = 88;
var happy = true;
```

你也可以更改變數所參考的值，如下所示：

```js
var x = 4;
x = 10;
```

在這個例子中，變數 `x` 最初被分配為 4，然後重新賦值為 10。

以下程式碼建立了一個新的 Phaser 遊戲對象，並將其存儲到一個變數中，以使用於我們的遊戲。

```js
var game = new Phaser.Game(800, 600);
```

## 活動 1：讓我們利用布林值和布林表達式

### 條件語句

我們可以使用 if 語句，使某些條件滿足時才執行程式碼語句。

例如：

```js
if (isRainingOutside == true) {
  takeUmbrella = true;
}
```

在 `if` 的 `()` 中，你應該指定一個**布林表達式**。布林值是 `true` 或 `false` 的陳述。我們可以在 if 語句中利用這一點。如果表達式為 `true`，`{ }` 中的程式碼將被執行。

我們還可以使用布林表達式來檢查一個數字是否處於特定範圍內：

![Comparison Operators](https://imgur.com/F9gGHiI.png)

還可以使用 `&&`（與）和 `||`（或）運算符將**布林表達式**連接在一起。

![alt text](resources/_gen/images/statements.png "statements")

`&&` 需要兩個布林表達式都為 `true`，而 `||` 只需要其中一個為 `true`。

例如：

```js
// 產生 true，因為 5 小於 8 且 9 不等於 10。
(1 < 100 &&
  (5 != 10)(
    // 產生 true，因為至少有一個表達式結果為 true。
    5 == 5
  )) ||
  10 > 20;
```

#### 開啟 `Activity 1.js`，你需要添加一個條件語句來檢查鳥是否在屏幕的頂部（y = 0）和屏幕底部（y = 490）之間！

## 活動 2：讓我們現在添加一個函數來使鳥跳躍

### 函數

**函數可以被看作一個任務。**一些任務可能很簡短，比如加 `1 + 1` 或顯示 `“Hello World!”`。函數可以讓我們多次執行相同的任務。在這種情況下，我們將編寫一個函數來使鳥跳躍！

“跳躍”在這個遊戲中只是改變鳥的 _y 位置_。

#### 開啟 `Activity 2.js`，我們將在其中添加一個名為 `jump` 的函數。

我們可以在 `jump` 函數中使用以下語句來做到這一點：

```js
bird.body.velocity.y = -300;
```

可以根據你希望鳥跳得多高來調整這個數字！試著修改這個數字，看看按下空格鍵時鳥跳得有多高。

現在你的鳥可以在空中飛翔了！

## 活動 3：讓我們添加障礙物

目前，你的鳥在屏幕上沒有什麼需要躲避的東西，似乎太容易了！我們可以用程式碼增加遊戲的難度，添加需要躲避的物體！為了做到這一點，你需要使用條件語句和 for 循環。條件語句我們已經覆蓋了，現在讓我們來了解循環。

### 循環

循環用於多次運行某段程式碼。有很多種循環，但對於本項目，你將使用的是 for 循環。

for 循環的格式如下：

```js
for (statement 1; statement 2; statement 3) {
  // 需要執行的程式碼塊
}
```

- 語句 1 在運行 `{ }` 中的程式碼之前運行一次。
- 語句 2 定義了循環將停止運行的條件。
- 語句 3 在每次循環執行結束時運行一次。

例如

```js
var sum = 0;
for (var i = 0; i < 7; i += 1) {
  sum = sum + 1;
}
```

當此程式碼運行後，`sum` 將為 6。這是因為該循環將 1 添加到變數 6 次