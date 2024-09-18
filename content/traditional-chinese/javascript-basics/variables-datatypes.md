---
title: "變數與數據類型"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

在 JavaScript 中創造一個變數，有三種選擇。

1. 使用 `var`（變數的簡寫）如下：
```javascript
var x = 5;
var y = 6;
var z = x + y;
```

2. 使用 `let` 如下：
```javascript
let x = 5;
let y = 6;
let z = x + y;
```

3. 使用 `const`（常數的簡寫）如下：
```javascript
const x = 5;
const y = 6;
```
這裡需要注意的是，常數是不可改變的。這意味著這些值在設置後就固定了。

你可以用 `var`、`let` 和 `const` 來保存 JavaScript 中的任何不同數據類型。這稱為具有_動態類型_。

JavaScript 有8種不同的數據類型：
- 字串
- 數字
- 布林值
- 未定義
- 空
- 符號
- 物件
- BigInt

我們將介紹其中最重要的：字串、數字、布林值、未定義和物件！

## 字串
字串可以由單詞或一組字母組成。

```javascript
// 字串範例
let animal = "Elephant";
let alphabet = "abc";
let name = "John";
```

## 數字
數字可以用於所有不同類型的數字（小數和大數字）。也就是說，直到你需要非常大的數字，然後你就需要一個特殊的變數叫做 bigint（但這是另一個話題）。

```javascript
// 數字範例
let age = 16;
let weight = 7.5;
```

## 布林值
布林值代表真和假，就像說真話和說謊。

```javascript
// 布林值範例
let truth = true;
let lie = false;
let x = true;
let y = false;
```

## 未定義
未定義意味著變數沒有值（因為0技術上是一個值）！

```javascript
// 未定義範例
let x = undefined;
```

## 物件
JavaScript 中的物件比較複雜。它可以是內建物件，比如陣列、日期、地圖、集合等，也可以是使用者定義的陣列，這意味著它可以是任何一組數據。

```javascript
const person = {firstName:"John", lastName:"Doe"};

// 陣列物件：
const cars = ["Saab", "Volvo", "BMW"];

// 日期物件：
const date = new Date("2022-03-25");

// 使用者定義的物件（在這個例子中是名字和姓氏）
const person = {firstName:"John", lastName:"Doe"};
```

## 當你不確定變數的類型時...
使用 `typeof` 運算符！如果你對一個變數運行 `typeof` 運算符，它將告訴你它是什麼：

```javascript
typeof "Amy" // 回傳 "string"
typeof 0 // 回傳 "number"
typeof (3) // 回傳 "number"（括號不起作用）
typeof (3 + 4) // 回傳 "number"
```