---
title: "micro:bit: 使用迷你计算机进行编程"
description: "使用MicroBits学习JavaScript和硬件"
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

### 使用 [MicroBits](https://microbit.org/guide/) 介绍JavaScript和硬件

![alt text width="5%"](https://media.giphy.com/media/1nOL7s74KmSk0zDlDD/giphy.gif "Logo de Nuevo - Nuvi")

## 基础知识

## 什么是JavaScript？

JavaScript是众多编程语言中的一种，它被称为网络编程语言。它用于控制网站的行为，例如按钮点击、弹窗、数据流以及许多其他功能。

## 变量

变量是代码中的容器，可以存储单个数字、单词或其他信息。这些信息可以被调用并在程序中使用和修改。也就是说，你可以命令程序访问你存储的信息。

在极少数情况下，变量可以用字母、数字、下划线和美元符号命名。但无论如何，它们不能包含空格，并且应该始终以字母开头。

变量可以存储不同类型的数据，以下是基本数据类型的介绍。

## 数据类型

### 整数

整数是任何不包含小数的数字。例如，整数是像`3`、`100`、`6000`、`-3`这样的整数！

```javascript
// 这是一个注释，这些注释用于描述你的代码的作用
// 以下是变量的不同示例

// 整数（非小数数字）变量示例：

var a = 5;
var b = 10;
var c = 15;
```

### 浮点数

浮点数是支持小数的数字。示例包括像`0.5`、`1.5`这样的数字。

```javascript
// 浮点数（小数数字）变量示例：

var x = 0.5;
var y = 1.5;
var z = 2.0;
```

### 字符串

字符串是程序员用来表示单词的术语。如果这能帮助你记住，字符串就是字符的“串”。字符串可以是你的名字或你最喜欢的宠物的名字。

字符串用 "双引号" 包裹。

```javascript
// 字符串（一个或多个单词，即“字符的串”）变量示例：
// 字符串变量的值用 "双引号" 包裹

var company = "My company";
var course = "Coding with Micro:Bits!";
var message = "Coding is so fun!";
```

### 字符

字符是单个字母。它们用 '单引号' 包裹。

```javascript
// 字符（单个字母）变量示例：
// 字符变量的值用 '单引号' 包裹

var letter = 'A';
```

### 布尔类型

有时程序员想要检查某些条件是 `true` 还是 `false`。这种信息存储在布尔数据类型中。

如果你对为什么称为布尔类型感兴趣，那么这是由一位叫做乔治·布尔（George Boole）的人发明的。

```javascript
// 布尔（true 或 false）变量示例

var canPigsFly = false;
var codingIsCool = true;
```

## 数学运算

啊，是的，我们的最爱，计算机本质上是计算器，因此理应能够在其中进行数学计算。以下是可以在JavaScript程序中使用的数学示例：

### 加法

```javascript
var a = 13;
var b = 10;
var c = a + b;     // c = 25
c += a;            // c = 40
c++;               // c = 41
```

### 减法

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

### 模数运算

啊，是的，这听起来很复杂，但实际上并不难。模数运算只是求出除法后的余数。例如，`10 % 2 = 0`，因为当你用2整除10时，余数为0。

```javascript
var d = 10 % 2;   // d = 0
var e = 5 % 2;    // e = 1
```

### 打印语句

有时候你希望你的计算机显示一些文本或变量中的数据。为此我们使用 `print` 语句。

```javascript
console.log("This will show up in the console, but not the webpage");
alert("This will display as a pop up window");

var userResponse = prompt("This will display as a pop up window, with an input box for the user to type in");
```

### 条件语句和逻辑运算符

条件语句，通常称为 `if` 语句，用于根据变量的值或其他条件选择执行哪些代码。

```javascript
// 条件语句
if (true) {
  // 这一段代码将会执行
}
if (false) {
  // 这一段代码将不会执行
}

var age = 10;
if (age < 18) {
  // 如果年龄小于18
  print("You're not an adult yet! :( ");
}
```

### 循环

最后但同样重要的是，我们有循环。这些允许你重复执行代码，直到满足某个条件。

下面代码中的 `alert()`函数会显示一个弹出窗口，显示传递给它的参数，这里是更新后的计数值。

```javascript
// while 循环 - 从10开始倒数
var count = 10;

while (count > 0) {
  alert(count);
  count--;
}

// for 循环 - 从10开始倒数
for (var i = 10; i > 0; i--) {
  alert(i);
}

// 无限 while 循环
while