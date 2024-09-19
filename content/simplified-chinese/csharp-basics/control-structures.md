```markdown
---
title: "控制结构"
description: "介绍 C# 中的 if-else, for 和 while 循环。"
date: 2024-09-16T00:00:00Z
weight: 6
---

## 做出决定: If-语句

Patrick 🐥 是一只很有礼貌的鸭子，他会根据当前时间说“早上好”、“下午好”或“晚上好”。

![太阳迅速升起在山上](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(图像来自 National Geographic: giphy.com/natgeochannel)</p>

正如我们之前学过的，我们可以如下打印这些语句：

```C#
Console.WriteLine("早上好");   // 在 0:00 - 11:59 之间说
Console.WriteLine("下午好"); // 在 12:00 - 19:59 之间说
Console.WriteLine("晚上好");     // 在 20:00 - 23:59 之间说
```

然而，我们也知道 Patrick 🐥 应该根据当前时间决定只说其中一句。

换句话说，我们需要编写代码来根据情况条件（有条件地）决定打印什么。

在 C# 中，我们通过使用 **if 语句** 或 **if...else 语句** 来做出决定。请阅读以下笔记：

{{% notice note %}}
### If 语句

```
if(boolean expression){
    要执行的动作
}
```

**if 语句**遵循上述结构。只有在布尔表达式为 `true` 时，块中的操作（语句）才会被执行。否则，如果布尔表达式为 `false`，程序将跳至块后的语句。
### If-Else 语句

```
if(boolean expression){
    执行动作 A
}else{
    执行动作 B
}
```

**if-else 语句**遵循上述结构。如果布尔表达式为 `true`，程序将执行 `if` 块内的 `执行动作 A`。否则，程序仅在 `else` 块内执行 `执行动作 B`。

### 示例

```C#
    bool likeMusic = true;
    if(likeMusic == true) 
    {
        Console.WriteLine("I like Music");
    } 
    else 
    {
        Console.WriteLine("I don't like Music");
    }   
```

上面的代码将打印语句 `I like Music`，因为布尔表达式 `likeMusic == true` 为真。
{{% /notice %}}

让我们重新审视上述问候示例，为 Patrick 决定是说“早上好”、“下午好”还是“晚上好”。

Patrick 应该在 0:00 - 11:59 之间说“早上好”，12:00 - 19:59 之间说“下午好”，晚上 20:00 - 23:59 之间说“晚上好”。

1. 我们有一个变量 `currentHour` 保存当前小时。
2. 填写正确的 `boolean expression A` 和 `boolean expression B` 来完成程序。
3. 通过将变量 `currentHour` 设置为 0 到 23 的数字来测试您的结果：

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" frameborder="0"></iframe>

## 再次重复：For 循环, While 循环

在数学课上，Patrick 🐥 的老师让班级解数学题目，他可能需要一些帮助。

老师让他们找到 **1, 2, 3, ...., 100 的总和**。这就是**1 + 2 + 3 + 4 ... + 99 + 100**是什么？

虽然我们可以将其输入计算器，但这会花费一些时间。幸运的是，在 C# 中，您可以在 3 行内轻松计算这结果，方法是使用 **for 循环**或 **while 循环**。

{{% notice note %}}
**For 循环** 和 **While 循环** 是 C# 中的控制结构，允许您多次执行代码块。

### While 循环

```
while(boolean expression){
    要执行的动作
}
```

`while` 块中的 `要执行的动作` 将在 `boolean expression` 为 `true` 时执行。

以下是打印 1 到 10 的示例：

```C#
int number = 1;
while(number <= 10){
   