---
title: "問題 1：Stack 基礎"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 

## 任務 1：利用 Stack 進行反轉

糟糕！新聘的實習生弄亂了餐廳列表的順序！餐廳的輸入順序被弄成了**倒序**！幸運的是，stack 是解決這個問題的完美數據結構。你能創建一個新的 stack 並讓它的順序正確嗎？

{{% notice tip %}}
1. 記住，stack 是後進先出（LIFO；就像盤子疊在一起）。
2. 原始的 stack 是什麼樣子的呢？
{{% /notice%}}

```js javascript
// 當前 stack 的範例
Stack<String> restaurants = new Stack<>();

restaurants.push("McDonalds");
restaurants.push("Carls Jr.");
restaurants.push("Burger King");
restaurants.push("Chipotle");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackReverse" target="_blank">啟動 Replit</a>

## 任務 2：保持歷史記錄

stack 的另一個實用功能是 "撤銷 (undo)" 功能。現在的許多程式都包含撤銷按鈕以記錄最近的更改。stack 是實現此功能的完美數據結構！你能創建一個函數來撤銷最近的更改嗎？例如：

```js javascript
// 當前 stack 的範例
Stack<String> myOrder = new Stack<>();

restaurants.push("Drink");
restaurants.push("Fries");
restaurants.push("Pizza");
restaurants.push("Pizza");

// 使用者多點了一個 Pizza！你能如何撤銷最近的更改？

Stack.undo() // 移除最近添加的項目
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackUndo" target="_blank">啟動 Replit</a>