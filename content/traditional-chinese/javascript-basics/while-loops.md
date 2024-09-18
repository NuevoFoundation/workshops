---
title: "While Loops"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 3
---

`while` 迴圈就是如此，當條件為真時，它會執行一段程式碼中一些動作。我們從 `while` 這個詞開始，後面跟著條件在括號 `()` 中為真，然後將要執行的動作放在大括號 `{}` 裡。這是設置方式：

```javascript
// While loop setup
while (condition is true) {
  // action to perform
}
```

現在讓我們進入一些範例！

## 範例
假設我們想創建一個運行8次的迴圈。

```javascript
// 8x example
let i = 0; // 設置一個計數器變量
while (i < 8) {
  i++; //移動到迴圈的下一次迭代（使迴圈再次運行這部分）
}
```

條件也可以是一個語句，例如布林值（true/false）。例如，假設我們想閱讀影片上的不同評論，直到我們閱讀完所有評論。要在 while 迴圈中做到這一點，我們需要一些不同的變量（可以忽略複雜的節點詞彙）。

```javascript
const commentIterator = video.createNodeIterator(video, NodeFilter.SHOW_COMMENT) // 這是一種從一個評論移動到下一個評論的方法
let currentComment; // 這是當前評論的佔位符

// 這個 while 迴圈將在有 "nextNode" 時持續運行，這是說明在這之後還有另一個評論的另一種方式
while (currentComment = commentIterator.nextNode()) {
  console.log(currentComment.textContent.trim()); //這會印出當前評論，以便我們閱讀！
}
```