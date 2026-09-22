```yaml
---
title: "JavaScript: 基础知识 - 答案"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
这是 JavaScript 基础知识工作坊的教师参考指南。它整合了所有代码示例及其预期的控制台输出，方便您在课堂上参考。学生将使用 [playcode.io](https://playcode.io) 作为他们的编码环境。
{{% /notice %}}

## 环境设置检查表

在开始之前，学生需要：
1. 打开 [playcode.io](https://playcode.io)
2. 关闭除 **script.js** 之外的所有文件
3. 删除 script.js 中的所有内容
4. 关闭 **live** 模式（单击一次 live 按钮）

## While 循环

### 基础计数器 (运行 8 次)

```javascript
let i = 0;
while (i < 8) {
  console.log(i);
  i++;
}
```

输出：
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
**学生常见问题：** "为什么打印的是 0-7 而不是 1-8？"

因为 `i` 从 0 开始，并且 `i++` 发生在 `console.log` 之后。如果您希望输出 1-8，请使用 `let i = 1` 并将条件改为 `i <= 8`。
{{% /notice %}}

### 关键概念：`i++`

`i++` 是 `i = i + 1` 的简写。它在每次循环时将计数器增加 1。如果没有它，循环将永远运行（无限循环）。

## 变量和数据类型

### 声明变量的三种方法

```javascript
var x = 5;    // 旧方法（函数作用域）
let y = 6;    // 新方法（块作用域，可更改）
const z = 11; // 常量（设置后不可更改）
```

输出（如果您记录它们的话）：
```javascript
console.log(x); // 5
console.log(y); // 6
console.log(z); // 11
```

### 字符串示例

```javascript
let animal = "Elephant";
let alphabet = "abc";
let name = "John";
console.log(animal);
console.log(typeof animal);
```

输出：
```
Elephant
string
```

### 数字示例

```javascript
let age = 16;
let weight = 7.5;
console.log(age);
console.log(weight);
console.log(typeof age);
```

输出：
```
16
7.5
number
```

### 布尔值示例

```javascript
let truth = true;
let lie = false;
console.log(truth);
console.log(lie);
console.log(typeof truth);
```

输出：
```
true
false
boolean
```

### 未定义示例

```javascript
let x = undefined;
console.log(x);
console.log(typeof x);
```

输出：
```
undefined
undefined
```

### 对象示例

```javascript
const person = {firstName: "John", lastName: "Doe"};
const cars = ["Saab", "Volvo", "BMW"];
const date = new Date("2022-03-25");

console.log(person);
console.log(cars);
console.log(typeof person);
```

输出：
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
**学生常见问题：** "为什么数组的 `typeof` 是 `object` 而不是 `array`？"

在 JavaScript 中，数组是对象的一种特殊类型。要检查某物是否为数组，请使用 `Array.isArray([1, 2])`，此方法将返回 `true`。
{{% /notice %}}

## 数组

### 创建数组

```javascript
// 三种方法都创建相同的数组：
let fruits1 = new Array("Apple", "Orange", "Mango");
let fruits2 = Array("Apple", "Orange", "Mango");
let fruits3 = ["Apple", "Orange", "Mango"];

console.log(fruits3);
console.log(fruits3.length);
```

输出：
```
["Apple", "Orange", "Mango"]
3
```

### 数组属性

#### 按索引访问

```javascript
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits[0]); // 第一个元素
console.log(fruits[1]); // 第二个元素
console.log(fruits[2]); // 第三个元素
```

输出：
```
Apple
Orange
Mango
```

{{% notice tip %}}
**学生常见问题：** "为什么第一个元素从 0 开始？"

在大多数编程语言中，数组索引从 0 开始。所以 `fruits[0]` 是第一个元素，`fruits[1]` 是第二个，以此类推。
{{% /notice %}}

#### 通过索引修改

```javascript
let fruits = ["Apple", "Orange", "Mango"];
fruits[1] = "Banana";
console.log(fruits);
```

输出：
```
["Apple", "Banana", "Mango"]
```

#### 长度属性

```javascript
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits.length);
```

输出：
```
3
```

#### 构造函数属性

```javascript
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits.constructor);
```

输出：
```
function Array() { [native code] }
```

### 数组迭代 (forEach)

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(item) {
  console.log(item);
});
```

输出：
```
1
2
3
4
5
```

### 数组方法

#### concat() - 合并数组

```javascript
let arr1 = ["A", "B"];
let arr2 = ["C", "D"];
let result = arr1.concat(arr2);
console.log(result);
```

输出：
```
["A", "B", "C", "D"]
