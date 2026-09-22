```markdown
---
title: "变量和数据类型"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

在 JavaScript 中，创建变量有三种选择：

1. 使用 `var`（变量的缩写），如下所示：
```javascript
var x = 5;
var y = 6;
var z = x + y;
```

2. 使用 `let`，如下所示：
```javascript
let x = 5;
let y = 6;
let z = x + y;
```

3. 使用 `const`（常量的缩写），如下所示：
```javascript
const x = 5;
const y = 6;
```
需要注意的是，常量是固定值，不能改变。也就是说，这些值会保持在它们最初设置的状态。

你可以用 `var`、`let` 和 `const` 来存储任何 JavaScript 中的不同数据类型。这种功能被称为动态类型。

JavaScript 有 8 种不同的数据类型：
- 字符串 (String)
- 数字 (Number)
- 布尔值 (Boolean)
- 未定义 (Undefined)
- 空值 (Null)
- 符号 (Symbol)
- 对象 (Object)
- 大整数 (BigInt)

我们将重点介绍最重要的几种：字符串、数字、布尔值、未定义 和 对象！

## 字符串 (String)
字符串可以由单词或一组字母组成。

```javascript
// 字符串示例
let animal = "大象";
let alphabet = "abc";
let name = "约翰";
```

## 数字 (Number)
数字可以表示所有不同类型的数字（无论大小）。不过，如果需要非常非常大的数字，就需要一种特殊变量叫做 bigint（这个我们以后再讨论）。

```javascript
// 数字示例
let age = 16;
let weight = 7.5;
```

## 布尔值 (Boolean)
布尔值表示真和假，比如说真话和撒谎。

```javascript
// 布尔值示例
let truth = true;
let lie = false;
let x = true;
let y = false;
```

## 未定义 (Undefined)
未定义表示变量没有值（因为 0 是一种值）。

```javascript
// 未定义示例
let x = undefined;
```

## 对象 (Object)
JavaScript 中的对象比较复杂。它可以是一个内置对象，比如数组、日期、地图、集合等，也可以是用户定义的数组，这意味着它可以是任何一组数据。

```javascript
const person = {firstName:"约翰", lastName:"多"};

// 数组对象：
const cars = ["萨博", "沃尔沃", "宝马"];

// 日期对象：
const date = new Date("2022-03-25");

// 用户定义的对象（在此例中为姓和名）
const person = {firstName:"约翰", lastName:"多"};
```

## 如果不确定变量是哪种类型...
使用 `typeof` 运算符！如果运行 `typeof` 运算符加一个变量，它会告诉你变量的类型：

```javascript
typeof "艾米" // 返回 "string"
typeof 0 // 返回 "number"
typeof (3) // 返回 "number" （括号不会产生影响）
typeof (3 + 4) // 返回 "number"
```
```