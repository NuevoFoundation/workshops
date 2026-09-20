```markdown
---
title: "問題 1：範例菜單"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 4
---

## 任務 1：列印 2D 陣列

在下面的二維陣列中，我們有一份不同食物的菜單。每一列代表同一種類。例如，第一列是一組主菜，第二列是一組飲料，第三列是一組甜點。

```js javascript
String[][] menu = {    
                    { "Hamburger", "Pasta", "Steak", "Tacos" },
                    { "Cola", "Sprite", "Pepsi", "Fanta" },
                    { "Pudding", "Ice Cream", "Mochi", "Cake" }
                  };
```
使用您學到的知識來列印出這個陣列！

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/2DPrint" target="_blank">啟動 Replit</a>

## 任務 2：搜索某一項目

經理希望知道菜單中是否有某一特定項目。請建立一個搜索方法，該方法會返回 `true` 或 `false`，以判斷菜單中是否存在該項目。

{{% notice tip %}}
1. 記得檢查每一列和每一行的元素！
2. 這個方法會返回什麼類型的值呢？
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/2DFind" target="_blank">啟動 Replit</a>
```