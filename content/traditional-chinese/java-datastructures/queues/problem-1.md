---
title: "問題 1：佇列基礎"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 
<!--<link rel="stylesheet" href="../../style.css">-->

## 任務 1：清空佇列以接收新訂單

Nuevo Eats 新增了一家新的餐廳！新訂單如潮水般湧入，佇列已滿載訂單！不同種類的塔可迅速走紅，導致這家餐廳應接不暇。尋找一種方法來清空所有佇列中的元素，幫助餐廳渡過難關！

{{% notice tip %}}
1. 如何遍歷佇列？
2. 嘗試在遍歷的同時清空佇列！
3. 參考範例菜單！
{{% /notice%}}

```js javascript
// 使用一個列表作為佇列的組織工具。
Queue<String> orders = new PriorityQueue<>();

orders.add("Fish Taco");
orders.add("Beef Taco");
orders.add("Chicken Taco");
orders.add("Fish Taco");
orders.add("Beef Taco");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Clear" target="_blank">啟動 Replit</a>

## 任務 2：使用優先佇列找到最低價格

一家餐廳使用優先佇列來管理訂單。該餐廳希望能夠根據價格查看訂單，以便更好地準備需要製作的餐點。具體來說，他們希望能夠找到當前列表中第 n 個最低價格。撰寫一個函數，用以查找其佇列中的訂單並返回第 n 個最低價格。

{{% notice tip %}}
1. 你會如何確保列表是有序的？
2. 怎麼做才能最簡單地找到最低價格？
3. 如果他們希望尋找第 5 個最低的價格怎麼辦？
{{% /notice%}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Min" target="_blank">啟動 Replit</a>