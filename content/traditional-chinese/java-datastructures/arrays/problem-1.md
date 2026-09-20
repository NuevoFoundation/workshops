---
title: "問題 1: 陣列基礎"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---
<!--<link rel="stylesheet" href="../../style.css">-->

## 任務 1: 列印

我們已經在系統中創建了一個現有餐廳的陣列！我們需要你的幫助，將所有內容列印出來，以確保沒有重複的餐廳。

{{% notice tip %}}
1. 使用 `for` 迴圈列印陣列的內容。
2. 使用 `length()` 方法來找出陣列的大小。
3. 參考下面的範例。
{{% /notice%}}

如果我們給出以下的陣列：

```js javascript
String[] restaurants = { "Burger King", "Chipotle", "Panda Express", "McDonalds" };
```

答案應列印出：

```js javascript
String answer = "Burger King,Chipotle,Panda Express,McDonalds";
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-1-getRestaurant" target="_blank">啟動 Replit</a>

## 任務 2: 更改元素

糟糕！麥當勞賣完所有食物了！在大家開始點餐但發現沒有食物之前，請更改餐廳清單。幸好「必勝客」願意幫忙！將清單中的麥當勞替換為必勝客。

{{% notice tip %}}
1. 启动 
2. 首先找出麥當勞的索引
3. 記得在 `"Pizza Hut"` 兩側加上引號
4. 參考下面範例！
{{% /notice%}}

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "McDonalds"};
//將 "McDonalds" 替換為 "Pizza Hut"

```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-2-insertRestaurant" target="_blank">啟動 Replit</a>