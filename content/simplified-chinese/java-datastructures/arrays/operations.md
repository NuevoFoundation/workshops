```yaml
---
title: "操作"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/NQXV586afr8" title="操作 - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 创建数组

数组用于在单个变量中存储多个值，而不是为每个值声明单独的变量。要声明数组，请使用方括号定义变量类型。

```js javascript
String[] restaurants;
```
现在我们已经声明了一个字符串数组变量。要向其中插入值，可以使用数组常量——将值以逗号分隔的列表形式放在大括号内：

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
```

要创建一个整数数组，可以这样写：

```js javascript
int[] myNum = {10, 20, 30, 40};
```
<hr>

## 访问数组的元素

通过引用索引号可以访问数组的元素。下面的语句访问了 `restaurants` 数组中第一个元素的值：

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);

// 系统将输出 "Burger King"
```

<hr>

## 更改数组元素

要更改特定元素的值，可以引用索引号：

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);
// 系统将输出 "Burger King"

restaurants[0] = "McDonalds";
System.out.println(restaurants[0]);
// 系统现在输出 "McDonalds"
```

<hr>

## 查找数组的长度

要找出数组有多少个元素，可以使用 `length` 属性：

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants.length);
// 系统将输出 4
```
<hr>

## 遍历数组

可以使用 `for` 循环遍历数组元素，并使用 `length` 属性来指定循环应该运行的次数。以下示例输出 `restaurants` 数组中的所有元素：

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
for (int i = 0; i < restaurants.length; i++) {
    System.out.println(restaurants[i]);
}

// 输出：
// Burger King
// Chipotle
// Panda Express
// Subway
```
```