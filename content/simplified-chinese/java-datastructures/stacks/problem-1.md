```markdown
---
title: "问题 1: 栈的基础知识"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

## 任务 1: 使用栈进行反转

哦，不！一个新来的实习生把餐厅的列表弄乱了！餐厅的输入顺序是**反转**的！幸运的是，栈是解决这个问题的完美数据结构。你能创建一个新的栈，使它呈现正确的顺序吗？

{{% notice tip %}}
1. 记住栈是后进先出 (LIFO；就像一叠盘子)。
2. 原始的栈是什么样子？
{{% /notice%}}

```js javascript
// 当前栈示例
Stack<String> restaurants = new Stack<>();

restaurants.push("McDonalds");
restaurants.push("Carls Jr.");
restaurants.push("Burger King");
restaurants.push("Chipotle");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackReverse" target="_blank">启动 Replit</a>

## 任务 2: 保持历史记录

栈的另一个实际用途是“撤销”功能。如今许多程序都包含一个撤销按钮，用于记录最近的更改。栈是实现此功能的完美数据结构！你能为“撤销最近的更改”创建一个函数吗？例如：

```js javascript
// 当前栈示例
Stack<String> myOrder = new Stack<>();

restaurants.push("Drink");
restaurants.push("Fries");
restaurants.push("Pizza");
restaurants.push("Pizza");

// 用户多点了一份 Pizza！如何撤销最近的更改？

Stack.undo() // 删除最近一次的 push
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackUndo" target="_blank">启动 Replit</a>
```