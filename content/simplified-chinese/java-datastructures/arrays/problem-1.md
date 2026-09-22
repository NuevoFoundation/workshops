---
title: "问题 1: 数组基础"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---
<!--<link rel="stylesheet" href="../../style.css">-->

## 任务 1: 打印

我们已经创建了一个包含系统内现有餐馆的数组！我们需要您的帮助来打印出全部内容，以确保不包含重复的餐馆。

{{% notice tip %}}
1. 使用 `for` 循环来打印数组的内容。
2. 使用 `length()` 方法来找出数组的大小。
3. 请查看下面的示例。
{{% /notice%}}

如果我们给出以下数组：

```js javascript
String[] restaurants = { "Burger King", "Chipotle", "Panda Express", "McDonalds" };
```

输出结果应为：

```js javascript
String answer = "Burger King,Chipotle,Panda Express,McDonalds";
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-1-getRestaurant" target="_blank">启动 Replit</a>

## 任务 2: 修改元素

哦不！麦当劳的食物卖光了！在人们开始向麦当劳下订单而失望地发现没有食物之前，更改餐馆列表。幸运的是，“必胜客”愿意提供帮助！将麦当劳替换为必胜客。

{{% notice tip %}}
1. 启动 
2. 首先找到麦当劳的索引
3. 注意 `"Pizza Hut"` 周围的引号
4. 请查看下面的示例！
{{% /notice%}}

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "McDonalds"};
//将 "McDonalds" 替换为 "Pizza Hut"

```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-2-insertRestaurant" target="_blank">启动 Replit</a>