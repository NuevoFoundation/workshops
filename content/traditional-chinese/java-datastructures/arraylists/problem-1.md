---
title: "問題 1: ArrayList 基礎"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/unwrTbTILmA" title="Problem 1: ArrayList Basics - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

## 任務 1: 插入元素

街角現在開了一家塔克車！新員工正努力記錄不同的訂單。用 `ArrayList` 幫助他們組織所有的項目！

```js javascript
/*
Dan 正在從他最喜歡的塔克店點餐:
    - 2 份 "carne asada"
    - 4 份 "carnitas"
    - 1 份 "pollo"
    - 2 份 "birria"

    返回一個包含所有這些元素，且順序相同的 ArrayList。
*/
```

{{% notice tip %}}
1. 該如何將項目加入清單中？
2. Dan 的訂單內容是什麼？
{{% /notice %}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DInsert?lite=true" title="Problem 1: ArrayList Basics - Replit editor 1"></iframe>

## 任務 2: 獲取元素

一家賣中餐的餐廳剛剛在附近開業。一大波訂單湧入，經理對所有訂單感到難以跟蹤，所以他們將所有訂單存入了 `ArrayList` 中。完成這個程式以返回某個指定索引的字符串。

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Hotdog"); 

// 返回 "Pizza"，因為它是清單中的第 0 個項目
item = find(menu, 0);
```

{{% notice tip %}}
1. 如何遍歷清單？
2. 查看範例菜單吧！
{{% /notice%}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DFind?lite=true" title="Problem 1: ArrayList Basics - Replit editor 2"></iframe>

## 任務 3: 移除元素

同一家中餐廳的程式出現了一個錯誤！訂單被隨機重複，`ArrayList` 中充滿了重覆的訂單。寫一個程式幫助老闆移除清單中某特定訂單的前 `n` 次出現的項目。

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Pizza");
menu.add("Pizza");
menu.add("Hotdog"); 

// 移除前 2 次 "Pizza" 訂單
item = remove(menu,"Pizza", 2);

// 菜單將變為以下的陣列: {"Hotdog", "Hamburger", "Pizza", "Hotdog"}
```

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DRemove?lite=true" title="Problem 1: ArrayList Basics - Replit editor 3"></iframe>