---
title: "While Loops"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 3
---

`while` 迴圈正如其名，是一段程式碼，當條件為真時，會持續執行一些動作。 我們從關鍵字 `while` 開始，後面接著一對括號 `()`，裡面放置條件，然後將要執行的動作寫在大括號 `{}` 內。以下是基本的設定：

```javascript
// While 迴圈的基本設定
while (條件為真) {
  // 執行的動作
}
```

現在讓我們來看看一些範例！

## 範例
假設我們要建立一個迴圈，執行 8 次。

```javascript
// 8次的範例
let i = 0; // 設定計數器變數
while (i < 8) {
  i++; //移動至下一次迴圈（讓迴圈再次執行這部分的程式碼）
}
```

條件也可以是一個表達式，例如布林值（true/false）。例如，假設我們要逐一閱讀影片中的評論，直到讀取完所有評論。要在 `while` 迴圈中完成這項操作，我們需要幾個不同的變數（可以無視那些較複雜的節點程式碼）。

```javascript
const commentIterator = video.createNodeIterator(video, NodeFilter.SHOW_COMMENT) // 這是一種移動到影片下一個評論的方法
let currentComment; // 這是一個用來儲存目前評論的占位符變數

// 這個 while 迴圈將在存在 "nextNode" 時持續運行，"nextNode" 是表示還有下一條評論的一種方式
while (currentComment = commentIterator.nextNode()) {
  console.log(currentComment.textContent.trim()); //這會列印出當前的評論內容，讓我們可以閱讀！
}
```