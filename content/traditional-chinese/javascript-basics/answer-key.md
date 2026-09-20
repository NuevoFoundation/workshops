---
title: "JavaScript: Basics - Answer Key"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
這是 JavaScript 基礎工作坊的教師參考指南。它匯總了所有代碼示例及其預期的控制台輸出，讓您在授課期間能夠集中參考在單一頁面。學生使用 [playcode.io](https://playcode.io) 作為他們的編碼環境。
{{% /notice %}}

## 環境設置清單

在開始之前，學生應該：
1. 打開 [playcode.io](https://playcode.io)
2. 關閉所有文件，僅保留 **script.js**
3. 刪除 script.js 中的所有內容
4. 關閉 **live** 模式（點擊一次 live 按鈕）

## While 迴圈

### 基本計數器（執行 8 次）

```javascript
let i = 0;
while (i < 8) {
  console.log(i);
  i++;
}
```

輸出：
```
0
1
2
3
4
5
6
7
```

{{% notice tip %}}
**學生常見問題：**「為什麼打印的是 0-7 而不是 1-8？」

因為 `i` 從 0 開始，而 `i++` 在 `console.log` 之後執行。如果希望打印 1-8，請使用 `let i = 1` 並改為 `i <= 8`。
{{% /notice %}}

### 關鍵概念：`i++`

`i++` 是 `i = i + 1` 的簡寫。它使計數器在每次迴圈中增加 1。如果沒有它，迴圈將永遠執行（無限迴圈）。

## 變量與數據類型

### 三種宣告變量的方法

```javascript
var x = 5;    // 舊方式（函數作用域）
let y = 6;    // 現代方式（塊作用域，可更改）
const z = 11; // 常數（設置後不可更改）
```

輸出（如果打印它們）：
```javascript
console.log(x); // 5
console.log(y); // 6
console.log(z); // 11
```

### 字串範例

```javascript
let animal = "Elephant";
let alphabet = "abc";
let name = "John";
console.log(animal);
console.log(typeof animal);
```

輸出：
```
Elephant
string
```

### 數字範例

```javascript
let age = 16;
let weight = 7.5;
console.log(age);
console.log(weight);
console.log(typeof age);
```

輸出：
```
16
7.5
number
```

### 布林範例

```javascript
let truth = true;
let lie = false;
console.log(truth);
console.log(lie);
console.log(typeof truth);
```

輸出：
```
true
false
boolean
```

### 未定義範例

```javascript
let x = undefined;
console.log(x);
console.log(typeof x);
```

輸出：
```
undefined
undefined
```

### 物件範例

```javascript
const person = {firstName: "John", lastName: "Doe"};
const cars = ["Saab", "Volvo", "BMW"];
const date = new Date("2022-03-25");

console.log(person);
console.log(cars);
console.log(typeof person);
```

輸出：
```
{firstName: "John", lastName: "Doe"}
["Saab", "Volvo", "BMW"]
object
```

### `typeof` 操作符

```javascript
console.log(typeof "Amy");    // "string"
console.log(typeof 0);        // "number"
console.log(typeof (3));      // "number"
console.log(typeof (3 + 4));  // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof [1, 2]);   // "object"
```

{{% notice tip %}}
**學生常見問題：**「為什麼陣列的 type 是 `object` 而不是 `array`？」

在 JavaScript 中，陣列是一種特殊的物件。要檢查某物是否是陣列，可使用 `Array.isArray([1, 2])`，它會返回 `true`。
{{% /notice %}}

## 陣列

### 建立陣列

```javascript
// 以下三種方式都能創建相同的陣列：
let fruits1 = new Array("Apple", "Orange", "Mango");
let fruits2 = Array("Apple", "Orange", "Mango");
let fruits3 = ["Apple", "Orange", "Mango"];

console.log(fruits3);
console.log(fruits3.length);
```

輸出：
```
["Apple", "Orange", "Mango"]
3
```

### 陣列屬性

#### 通過索引訪問

```javascript
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits[0]); // 第一個元素
console.log(fruits[1]); // 第二個元素
console.log(fruits[2]); // 第三個元素
```

輸出：
```
Apple
Orange
Mango
```

{{% notice tip %}}
**學生常見問題：**「為什麼第一個項目是 0 開始的？」

在大多數編程語言中，陣列索引從 0 開始。因此 `fruits[0]` 是第一項，`fruits[1]` 是第二項，以此類推。
{{% /notice %}}

#### 通過索引修改

```javascript
let fruits = ["Apple", "Orange", "Mango"];
fruits[1] = "Banana";
console.log(fruits);
```

輸出：
```
["Apple", "Banana", "Mango"]
```

#### 長度屬性

```javascript
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits.length);
```

輸出：
```
3
```

#### 构造函数属性

```javascript
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits.constructor);
```

輸出：
```
function Array() { [native code] }
```

### 陣列反覆執行 (forEach)

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(item) {
