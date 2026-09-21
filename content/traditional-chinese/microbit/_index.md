```yaml
---
title: "micro:bit: 使用迷你電腦進行編碼"
description: "利用 MicroBits 學習 JavaScript 和硬體"
date: 2019-07-23T14:54:53-07:00
download: "https://github.com/NuevoFoundation/workshops/tree/master/content/microbit"
draft: true
hidden: true
icon: "fas fa-microchip"
language: "blocks"
topics: ["hardware"]
prereq: "None"
difficulties: ["beginner", "intermediate"]
---
```

### 利用 [MicroBits](https://microbit.org/guide/) 開始學習 JavaScript 和硬體

![alt text width="5%"](https://media.giphy.com/media/1nOL7s74KmSk0zDlDD/giphy.gif "Logo de Nuevo - Nuvi")

## 基礎知識

## 什麼是 JavaScript？

JavaScript 是許多程式語言之一，通常被稱為網頁的程式語言。它專門用來控制網站的行為，例如按鈕點擊、彈出視窗、資料流動以及其他功能。

## 變數

變數是程式中的容器，可以儲存單一數字、文字或其他資訊。這些資訊可以在程式中其他地方被呼叫並進行改變。也就是說，您可以要求程式存取您之前儲存的資訊。

除了少數例外，變數名稱可以包含字母、數字、底線和美元符號。但無論如何，變數名稱不能有空格，且必須以字母開頭。

變數可以儲存不同類型的資料，讓我們來看看基本的幾種類型。

## 資料類型

### 整數

整數是不包含小數點的數字。例如，整數有 `3`、`100`、`6000`、`-3` 等等！

```javascript
// 這是一個註解，用來描述程式碼的功能
// 以下是幾個變數的範例

// 整數（不含小數點）的變數範例：

var a = 5;
var b = 10;
var c = 15;
```

### 浮點數 

浮點數是支持小數的數字，例如 `0.5`、`1.5` 等。

```javascript
// 浮點數（帶小數點）變數範例：

var x = 0.5;
var y = 1.5;
var z = 2.0;
```

### 字串

字串就是程式設計師用來稱呼「文字」的名字。如果這能幫助你記住，想像字串是一個由字元組成的「字元串」。字串可以是你的名字或是你最喜歡的寵物名稱。

字串用雙引號括起來。

```javascript
// 字串（一個或多個單字，也就是字元的"串"）變數範例：
// 字串變數值由雙引號括起來

var company = "My company";
var course = "Coding with Micro:Bits!";
var message = "Coding is so fun!";
```

### 字元

字元是單一字母。由單引號括起來。

```javascript
// 字元（單一文字）變數範例：
// 字元變數值由單引號括起來

var letter = 'A';
```

### 布林值

有時程式設計師需要檢查某些條件是否為真或假。這些資訊會被儲存在布林資料類型中。

如果你想知道為什麼這個叫做布林，是因為這個概念是由喬治·布爾（George Boole）提倡的。

```javascript
// 布林值（真或假）變數範例

var canPigsFly = false;
var codingIsCool = true;
```

## 數學運算

啊，我們最愛的部分，電腦本質上也是計算機，所以可以在其中進行數學運算。以下是一些可以在 JavaScript 程式中進行的數學運算範例。

### 加法

```javascript
var a = 13;
var b = 10;
var c = a + b;     // c = 25
c += a;            // c = 40
c++;               // c = 41
```

### 減法

```javascript
var a = 15;
var b = 10;
var c = a - b;     // c = 5
c -= a;            // c = -10
c--;               // c = -11
```

### 乘法

```javascript
var a = 2;
var b = 5;
var c = a * b;     // c = 10
c *= a;            // c = 20
```

### 除法

```javascript
var a = 20;
var b = 2;
var c = a / b;     // c = 10
c /= a;            // c = 5
```

### 餘數

啊，是的，聽起來很可怕但其實很簡單。餘數運算只是給出除法後的餘數。例如，`10 % 2 = 0`，因為當你把 10 除以 2 時，沒有剩下任何餘數。

```javascript
var d = 10 % 2;   // d = 0
var e = 5 % 2;    // e = 1
```

### 印出語句

有時你會希望電腦顯示一些文字或是你的變數中的資料。這時我們使用 `print` 語句。

```javascript
console.log("這將顯示在控制台上，但不在網頁中顯示");
alert("這將顯示為一個彈出視窗");

var userResponse = prompt("這將顯示為有輸入框的彈出視窗，供使用者輸入文字");
```

### 條件語句和邏輯運算

條件語句，最常見的是 `if` 語句，用於根據變數的值或其他條件選擇執行特定程式碼。

```javascript
// 條件語句
if (true) {
  // 這段程式碼將會執行
}
if (false) {
  // 這段程式碼不會執行
}

var age = 10;
if (age <