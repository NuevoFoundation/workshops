```markdown
---
title: "变量和数据类型"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

在 JavaScript 中创建变量有三种方式。

1. 使用 `var`（变量的简写），例如：

```javascript
var x = 5;
var y = 6;
var z = x + y;
```

2. 使用 `let`，例如：

```javascript
let x = 5;
let y = 6;
let z = x + y;
```

3. 使用 `const`（常量的简写），例如：

```javascript
const x = 5;
const y = 6;
```

需要注意的是，常量不能改变。这意味着这些值在开始时是什么就固定是什么。

你可以使用 `var`、`let` 和 `const` 来保存 JavaScript 中的任何数据类型。这被称为具有 _动态类型_。

JavaScript 有 8 种不同的数据类型：
- 字符串
- 数字
- 布尔值
- 未定义
- 空值
- 符号
- 对象
- 大整数

我们将介绍最重要的几种：字符串、数字、布尔值、未定义和对象！

## 字符串
字符串可以由单词或一组字母组成。

```javascript
// 字符串例子
let animal = "Elephant";
let alphabet = "abc";
let name = "John";
```

## 数字
数字可以用于所有不同类型的数字（大和小）。除非你需要非常大的数字，否则需要一个特殊变量称为 bigint（但这是另一个专题）。

```javascript
// 数字例子
let age = 16;
let weight = 7.5;
```

## 布尔值
布尔值表示真和假，就像说真话和说谎话。

```javascript
// 布尔值例子
let truth = true;
let lie = false;
let x = true;
let y = false;
```

## 未定义
未定义意味着变量没有值（因为 0 技术上是一个值）！

```javascript
// 未定义例子
let x = undefined;
```

## 对象
JavaScript 中的对象有点复杂。它可以是内置对象，例如数组、日期、映射、集合等，或者它可以是用户定义的数组，这意味着它可以是任意一组数据。

```javascript
const person = {firstName:"John", lastName:"Doe"};

// 数组对象：
const cars = ["Saab", "Volvo", "BMW"];

// 日期对象：
const date = new Date("2022-03-25");

// 用户定义的对象（在此例中为名字和姓氏）
const person = {firstName:"John", lastName:"Doe"};
```

## 当你不确定变量的类型时...
使用 `typeof` 运算符！如果你用一个变量运行 `typeof` 运算符，它会告诉你它是什么：

```javascript
typeof "Amy" // 返回 "string"
typeof 0 // 返回 "number"
typeof (3) // 返回 "number" （括号不影响结果）
typeof (3 + 4) // 返回 "number"
```
```