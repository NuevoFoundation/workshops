```markdown
---
title: "控制结构"
description: "介绍 C# 中的 if-else、for 和 while 循环。"
date: 2024-09-16T00:00:00Z
weight: 6
---

## 做出决定：If 语句

Patrick 🐥 是一只非常礼貌的鸭子，根据当前时间喜欢用“早上好”、“下午好”或“晚安”来问候他遇到的每一个人。

![阳光迅速升起在山上](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(图片来自国家地理: giphy.com/natgeochannel)</p>

正如我们之前所学，我们可以按照以下方式打印这些语句：

```C#
Console.WriteLine("Good Morning");   // 在 0:00 - 11:59 间说
Console.WriteLine("Good Afternoon"); // 在 12:00 - 19:59 间说
Console.WriteLine("Good Night");     // 在 20:00 - 23:59 间说
```

然而，我们也知道 Patrick 🐥 应该根据当前时间决定说哪一句话。

换句话说，我们需要编写代码根据情况（根据条件）做出打印的决定。

在 C# 中，我们通过使用 **if 语句** 或 **if...else 语句** 来做出决定。阅读以下笔记：

{{% notice note %}}
### If 语句

```
if(boolean expression){
    要执行的动作
}
```

**if 语句**遵循上面展示的结构。只有当布尔表达式为 `true` 时，块中的动作（语句）才会被执行。否则，如果布尔表达式为 `false`，程序将跳过块后面的语句。

### If-Else 语句

```
if(boolean expression){
    要执行的动作 A
}else{
    要执行的动作 B
}
```

**if-else 语句**遵循上面展示的结构。如果布尔表达式为 `true`，程序将在 `if` 块内执行 `要执行的动作 A`。否则，程序仅在 `else` 块内执行 `要执行的动作 B`。

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

上面的代码将打印 `I like Music`，因为布尔表达式 `likeMusic == true` 为真。
{{% /notice %}}

让我们重温上述问候示例，为 Patrick 决定是否说“早上好”、“下午好”、“晚安”。

Patrick 应该在 0:00 - 11:59 之间说“早上好”，在 12:00 - 19:59 之间说“下午好”，在 20:00 - 23:59 之间说“晚安”。

1. 我们有一个变量 `currentHour` 用于存储当前小时。
2. 填写正确的 `boolean expression A` 和 `boolean expression B` 来完成程序。
3. 通过将变量 `currentHour` 分配为 0 到 23 的数字来测试你的结果：

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" frameborder="0"></iframe>

## 再次重复：For 循环，While 循环

在数学课上，Patrick 🐥 的老师让班级解决一个数学挑战，他可能需要一些帮助。

老师让他们找到 **1, 2, 3, ..., 100 的和**。也就是 **1 + 2 + 3 + 4 ... + 99 + 100** 是多少？

虽然我们可以将其输入计算器，但这会花费一些时间。值得庆幸的是，在 C# 中，借助于 **for 循环** 或 **while 循环**，您可以在 3 行内轻松计算这一点。

{{% notice note %}}
**For 循环** 和 **While 循环** 是 C# 中的控制结构，允许您多次执行代码块。

### While 循环

```
while(boolean expression){
    要执行的动作
}
```

只要 `boolean expression` 为 `true`，while 块中的 `要执行的动作` 就会被执行。

以下是一个打印 1 到