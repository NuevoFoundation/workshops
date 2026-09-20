```markdown
---
title: "變數與資料型態"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

在 JavaScript 中建立變數有三種選擇。

1. 使用 `var`（即 variable 的縮寫）：
```javascript
var x = 5;
var y = 6;
var z = x + y;
```

2. 使用 `let`：
```javascript
let x = 5;
let y = 6;
let z = x + y;
```

3. 使用 `const`（即 constant 的縮寫）：
```javascript
const x = 5;
const y = 6;
```
需要注意的是，常數的值是不可修改的。這代表這些值在被設定後就固定不變。

你可以使用 `var`、`let` 和 `const` 來保存任何 JavaScript 的不同資料型態，這被稱作動態型態（dynamic types）。

JavaScript 有 8 種不同的資料型態：
- 字串 (String)
- 數字 (Number)
- 布林值 (Boolean)
- 未定義 (Undefined)
- 空值 (Null)
- 符號 (Symbol)
- 物件 (Object)
- 大數 (BigInt)

我們將介紹最重要的幾種型態：字串 (String)、數字 (Number)、布林值 (Boolean)、未定義 (Undefined) 和物件 (Object)。

## 字串 (String)
字串可以由單字或一組字母組成。

```javascript
// 字串範例
let animal = "Elephant";
let alphabet = "abc";
let name = "John";
```

## 數字 (Number)
數字型態可用於任何大小的數字。但如果需要非常大的數字，例如超過 JavaScript 的數字範圍，則需要用特殊型態 bigint（這是其他內容，我們稍後會探討）。
  
```javascript
// 數字範例
let age = 16;
let weight = 7.5;
```

## 布林值 (Boolean)
布林值表示真或假的值，比如表達真實或虛假的陳述。
  
```javascript
// 布林值範例
let truth = true;
let lie = false;
let x = true;
let y = false;
```

## 未定義 (Undefined)
未定義表示變數尚未被賦值（因為 0 是一個有效的值）。

```javascript
// 未定義範例
let x = undefined;
```

## 物件 (Object)
JavaScript 中的物件稍微複雜一點。它可以是內建的物件，例如陣列、日期、映射、集合等；也可以是用戶自定義的物件，意味著可以是任何形式的資料集合。

```javascript
const person = {firstName:"John", lastName:"Doe"};

// 陣列物件：
const cars = ["Saab", "Volvo", "BMW"];

// 日期物件:
const date = new Date("2022-03-25");

// 用戶自定義物件（在此範例中是名字和姓氏）
const person = {firstName:"John", lastName:"Doe"};
```

## 當你不確定變數的型態時……
使用 `typeof` 運算符！如果你用 `typeof` 運算符檢查一個變數，它會告訴你該變數的型態：

```javascript
typeof "Amy" // 回傳 "string"
typeof 0 // 回傳 "number"
typeof (3) // 回傳 "number"（括號不影響結果）
typeof (3 + 4) // 回傳 "number"
```
```