---
title: "问题 1: 队列基础"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---
<!--<link rel="stylesheet" href="../../style.css">-->

## 任务 1: 清空队列以接收新订单

一家新餐厅已加入 Nuevo Eats！新订单蜂拥而至，队列已被订单占满！各种不同的塔可迅速走红，这家餐厅因此不堪重负。寻找一种方法清除所有元素，帮助餐厅减轻压力！

{{% notice tip %}}
1. 你如何遍历队列？
2. 尝试在遍历过程中清空队列！
3. 看看示例菜单！
{{% /notice%}}

```js javascript
// 此处使用列表作为队列的组织形式。
Queue<String> orders = new PriorityQueue<>();

orders.add("Fish Taco");
orders.add("Beef Taco");
orders.add("Chicken Taco");
orders.add("Fish Taco");
orders.add("Beef Taco");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Clear" target="_blank">启动 Replit</a>

## 任务 2: 使用优先队列找到最低价格

一家餐厅正在使用优先队列来管理订单。餐厅希望能够根据订单的价格查看数据，从而更好地准备即将制作的餐点。具体来说，他们想要查找当前列表中第 n 个最低价格的订单。编写一个函数，查看他们的订单队列并返回第 n 个最低价格。

{{% notice tip %}}
1. 你如何确保列表是有序的？
2. 什么方式最容易找到最低价格？
3. 如果他们想查找第 5 个最低价格呢？
{{% /notice%}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Min" target="_blank">启动 Replit</a>