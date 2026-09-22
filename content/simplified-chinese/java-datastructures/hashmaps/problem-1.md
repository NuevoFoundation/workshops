---
title: "问题1：HashMap基础"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

## 任务1：使用HashMap组织数据

这是一个派对！一位顾客为超过20人举办了一个盛大的生日派对！每个人都有自己的点单。为了让庞大的订单更加有序，你决定创建一个`String`类型的HashMap。寿星的名字是Isabella，但她的名字在列表中丢失了。你能找出Isabella点了什么吗？

{{% notice tip %}}
1. 还记得HashMap的方法吗？
2. 看看下面的订单示例！
{{% /notice %}}

```js javascript
// 当前HashMap的示例
HashMap<String, String> order = new HashMap<String, String>();

//键, 值
order.put("Justin", "Sprite");
order.put("George", "Coke");
order.put("Sam", "Fanta");
order.put("Eva", "Coke");
order.put("Olivia", "Coke");
...
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/HashMapGet" target="_blank">启动Replit</a>