---
title: "活動 3 - 修改左方球拍移動的按鍵分配"
date: 2019-07-29T13:24:17-07:00
weight: 5
draft: false
---

太棒了！你不僅修正了遊戲的邊界，還成功為物件添加了顏色。現在，讓我們看看你是否能更改球拍移動的按鍵設定。

要做到這一點，我們需要修改建立左方球拍物件時傳入的其中一個參數。回顧一下 "基礎 - 類別與物件" 部分，你定義了 `Paddle` 類別，並且以 UP 和 DOWN 的按鍵分配作為屬性。

在程式碼中找到 `# TODO (ACTIVITY 3)`。修改左方球拍的相關屬性值，讓按下 `'s'` 按鍵時，左方球拍向下移動。注意，目前左方球拍的向下移動是由 `'T'` 按鍵控制。

{{% notice tip %}}

嘗試把 UP 按鍵替換成一個不同的按鍵。按下 <b>Run</b> 來測試修改後的效果。

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">啟動 Replit</a>

## 重點

你剛剛修改了 `Paddle` 類別中的 `down_key` 屬性，從而改變了左方球拍在螢幕上的移動方式。