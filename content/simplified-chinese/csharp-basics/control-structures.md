```markdown
---
title: "控制结构"
description: "介绍 C# 中的 if-else、for 和 while 循环。"
date: 2024-09-16T00:00:00Z
weight: 6
---

## 做出决定：If 语句

Patrick 🐥 是一只非常有礼貌的鸭子，他喜欢根据当前时间对他遇见的每一个人说“早上好”、“下午好”或“晚上好”。

![太阳快速升起穿过山峰](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(图片来源于 National Geographic: giphy.com/natgeochannel)</p>

正如我们之前所学的，我们可以如下打印这些语句：

```C#
Console.WriteLine("早上好");   // 在 0:00 - 11:59 之间说
Console.WriteLine("下午好");   // 在 12:00 - 19:59 之间说
Console.WriteLine("晚上好");   // 在 20:00 - 23:59 之间说
```

然而，我们也知道 Patrick 🐥 应该根据当前的时间条件，只选择说一句合适的问候。

换句话说，我们需要编写代码，根据情境条件（有条件地）决定打印什么。

在 C# 中，我们通过使用 **if 语句** 或 **if...else 语句**来做出决定。请阅读以下说明：

{{% notice note %}}
### If 语句

```
if(布尔表达式){
    执行动作
}
```

一个 **if 语句** 遵循上述结构。仅当布尔表达式为 `true` 时，代码块中的动作（语句）才会被执行。否则，如果布尔表达式为 `false`，程序会跳过代码块并执行代码块之后的语句。

### If-Else 语句

```
if(布尔表达式){
    执行动作 A
}else{
    执行动作 B
}
```

一个 **if-else 语句** 遵循上述结构。如果布尔表达式为 `true`，程序将执行 `if` 块内的动作 A；否则，程序只执行 `else` 块内的动作 B。

### 示例

```C#
bool likeMusic = true;
if(likeMusic == true) 
{
    Console.WriteLine("我喜欢音乐");
} 
else 
{
    Console.WriteLine("我不喜欢音乐");
}   
```

以上代码将打印语句 `我喜欢音乐`，因为布尔表达式 `likeMusic == true` 为真。
{{% /notice %}}

让我们重新审视上面的问候示例，为 Patrick 决定是否说“早上好”、“下午好”或“晚上好”。

Patrick 应该在 0:00 - 11:59 之间说“早上好”，在 12:00 - 19:59 之间说“下午好”，在 20:00 - 23:59 之间说“晚上好”。

1. 我们有一个变量 `currentHour`，它存储当前小时。
2. 填写正确的布尔表达式 A 和布尔表达式 B 以完成程序。
3. 将变量 `currentHour` 赋值为 0 到 23 之间的数字来测试你的结果：

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" title="互动 C# 条件语句练习" frameborder="0"></iframe>

## 再次重复：For 循环，While 循环

在数学课上，Patrick 🐥 的老师给班级出了一道数学挑战题，他可能需要一些帮助。

老师要求他们计算 **1, 2, 3, ...., 100 的总和**。即 **1 + 2 + 3 + 4 ... + 99 + 100** 是多少？

虽然我们可以用计算器来算，但这需要一些时间。幸运的是，在 C# 中，你可以用 **for 循环** 或 **while 循环**轻松地在 3 行内计算出结果。

{{% notice note %}}
**For 循环** 和 **While 循环** 是 C# 中的控制结构，允许你多次执行代码块。

### While 循环

```
while(布尔表达式){
    执行动作
}
```

`while` 块中的动作将会在布尔表达式为 `true` 时被执行。

下面是一个打印 1 到 10 的示例：

```C#
int number = 1;
while(number <= 10){
    Console.WriteLine(number);
    number = number + 1;        // number 每次加 1
}
```

在上述 while 循环中，只要 `number <= 10`，程序就会打印 `number` 的值并将其加 1。但当 `number` 增加到 11 时，循环会终止。

**注意：** 对于 `while` 循环，你必须记住给条件变量递增，否则你将在程序中引入一个无限循环。

### For 循环

```
for(初始化; 终止条件; 更新语句){
    执行动作
}
```

在 `for` 循环中，条件块包含三个部分：`初始化`、`终止条件` 和 `更新语句`。

1. 执行 for 循环时，程序会首先执行 `初始化` 部分。例如，`int number = 1`。
2. 接着，程序会检查 `终止条件`，例如 `number <= 10`。
3. 如果终止条件为 `true`：
    1. 执行动作。
    2. 执行 `更新语句`（例如 `number = number + 1`）。
4. 重复第 2 和第 3 步。
5. 如果终止条件为 `false`，退出循环。

下面是一个打印 1 到 10 的示例：

```C#
for(int number = 1; number <= 10; number = number + 1){
    Console.WriteLine(number);
}
```

{{% /notice %}}

在学习了 `for` 循环和 `while` 循环之后，我们来看看如何帮助 Patrick 🐥 简单地计算 **1 + 2 + 3 + 4 ... + 99 + 100**。

让我们尝试用 `while` 循环来解决：

1. 我们有一个变量 `total`，它跟踪我们目前得到的总和。
2. 我们有一个变量 `num`，它跟踪即将被加到 `total` 上的下一个数字。
3. 写出合适的布尔表达式