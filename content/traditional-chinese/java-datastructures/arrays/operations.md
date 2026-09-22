---
title: "Operations"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/NQXV586afr8" title="Operations - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 建立陣列

陣列用於在單一變數中儲存多個值，替代為每個值宣告獨立的變數。要宣告一個陣列，使用方括號定義變數類型。

```js javascript
String[] restaurants;
```

我們現在已經宣告了一個包含字串陣列的變數。若要插入值，可以使用陣列常值——將值放在逗號分隔的清單中，並置於大括號內：

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
```

若要建立一個整數陣列，可以這樣撰寫：

```js javascript
int[] myNum = {10, 20, 30, 40};
```
<hr>

## 存取陣列的元素

透過索引號碼可以存取陣列元素。以下語句存取了 `restaurants` 中第一個元素的值：

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);

// 系統會輸出 "Burger King"
```

<hr>

## 更改陣列的元素

若要更改特定元素的值，請參考索引號碼：

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);
// 系統會輸出 "Burger King"

restaurants[0] = "McDonalds";
System.out.println(restaurants[0]);
// 系統現在會輸出 "McDonalds"
```

<hr>

## 找出陣列的長度

若想知道陣列中有多少個元素，可以使用 `length` 屬性：

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants.length);
// 系統會輸出 4
```
<hr>

## 遍歷陣列

可以使用 `for` 迴圈來遍歷陣列元素，並使用 `length` 屬性指定迴圈執行的次數。以下範例將輸出 `restaurants` 陣列中的所有元素：

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
for (int i = 0; i < restaurants.length; i++) {
    System.out.println(restaurants[i]);
}

// 輸出：
// Burger King
// Chipotle
// Panda Express
// Subway
```