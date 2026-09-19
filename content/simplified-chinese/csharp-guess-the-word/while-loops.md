---
title: "While 循环"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 16
---

## While 循环

`while` 循环是一种简单的方式，可以重复执行多行代码，而不需要多次重复代码。例如，要连续打印五次 `Hello World`，你可以这样写：

```csharp
var counter = 1;
while (counter <= 5)
{
    Console.WriteLine("Hello World");
    counter = counter + 1;
}
```

与 `if` 语句类似，在 `while` 的 `()` 中，需要指定一个布尔表达式。如果该表达式为 `true`，大括号 `{ }` 中的代码将被执行。然而，在大括号中的所有内容执行完毕后，我们会返回到 `while` 循环的顶部，再次检查布尔表达式。如果布尔表达式继续为 `true`，循环将被重复执行。

![alt text height="600px" width="70%"](../media/while-1.png "While 1")

你也可以在 `while` 循环中放置 `if` 语句以实现一些有趣的行为：

```csharp
var counter = 1;
while (counter <= 10)
{
    if (counter < 5)
    {
        Console.WriteLine("小于 5!");
    }
    else
    {
        Console.WriteLine("大于或等于 5!");
    }
    counter = counter + 1;
}
```

![alt text height="600px" width="70%"](../media/while-2.png "While 2")

以下是一个死循环的例子——你能看出问题出在哪里吗？你该如何修改它，使得以下代码只打印 `Spam!` 100 次呢？

```csharp
var counter = 100;
while (counter > 0)
{
    Console.WriteLine("Spam!");
}
```

{{% notice tip %}}

## 一起动手

使用你在之前活动中编写的代码。让我们扩展代码，使得程序在用户输入一次后不会立即结束，而是允许用户回答 10 次问题后再退出。注意避免死循环！

{{% /notice %}}