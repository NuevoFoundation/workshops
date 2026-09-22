```markdown
---
title: "控制结构"
description: "介绍 Java 中的 if-else、for 和 while 循环。"
date: 2021-10-13T00:00:00Z
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/X8HzOuCel9A" title="Java 控制结构视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 做出决策：If-语句

Patrick 🐥 是一只非常有礼貌的鸭子，他喜欢根据当前时间，对于他遇到的人打招呼：“早上好”，“下午好”或者“晚安”。

![太阳快速升起在山上](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(图片来自国家地理：giphy.com/natgeochannel)</p>

正如我们之前学习过的，我们可以像下面这样打印这些语句：

```java
System.out.println("早上好");   // 在 0:00 - 11:59 之间说
System.out.println("下午好"); // 在 12:00 - 19:59 之间说
System.out.println("晚安");     // 在 20:00 - 23:59 之间说
```

然而，我们也知道 Patrick 🐥 应该根据当前时间的条件，仅选择一个语句进行问候。

换句话说，我们需要编写代码，根据情况的条件（有条件地）做出决定打印什么内容。

在 Java 中，我们通过使用 **if 语句** 或 **if...else 语句** 来做出决定。请阅读以下说明：

{{% notice note %}}
### If 语句

```
if(布尔表达式){
    要执行的操作
}
```

**if 语句**遵循上述结构。只有在布尔表达式是 `true` 时，块中的操作（语句）才会被执行。否则，如果布尔表达式是 `false`，程序将跳到块之后的语句。
### If-Else 语句

```
if(布尔表达式){
    要执行的操作 A
}else{
    要执行的操作 B
}
```

**if-else 语句**遵循上述结构。如果布尔表达式为 `true`，程序将执行 `if` 块中的 `要执行的操作 A`。否则，程序将只执行 `else` 块中的 `要执行的操作 B`。

### 示例

```java
boolean likeMusic = true;
if(likeMusic == true) {
    System.out.println("我喜欢音乐");
} else {
    System.out.println("我不喜欢音乐");
}
```

以上代码将打印语句 `我喜欢音乐`，因为布尔表达式 `likeMusic == true` 是真。
{{% /notice %}}

让我们重新审视上述问候的示例，为 Patrick 做出决定，是否说“早上好”，“下午好”，“晚安”。

Patrick 应该在 0:00 - 11:59 之间说“早上好”，在 12:00 - 19:59 之间说“下午好”，在 20:00 - 23:59 之间说“晚安”。

1. 我们有一个变量 `currentHour`，存储当前的小时。
2. 填写正确的 `布尔表达式 A` 和 `布尔表达式 B`，以完成代码。
3. 通过将变量 `currentHour` 分配数字从 0 到 23 来测试你的结果：

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsIfStatement" target="_blank">启动 Replit</a>

## 重复：For 循环，While 循环

在数学课上，Patrick 的老师 🐥 给班级出了一道数学挑战，他可能需要一些帮助。

老师让他们计算 **1, 2, 3, ...., 100 的总和**。也就是 **1 + 2 + 3 + 4 ... + 99 + 100** 的结果？

虽然我们可以用计算器算出来，但这会很费时间。幸运的是，在 Java 中，你可以使用 **for 循环** 或 **while 循环** 在 3 行代码内轻松计算出来。

{{% notice note %}}
**For 循环**和**While 循环**是 Java 中的控制结构，它们允许你多次执行代码块。

### While 循环

```
while(布尔表达式){
    要执行的操作
}
```

`while` 块中的 `要执行的操作` 将会被执行，只要布尔表达式是 `true`。

以下是一个打印 1 到 10 的示例：

```java
int number = 1;
while(number <= 10){
    System.out.println(number);
    number = number + 1;        // 每次将 number 增加 1
}
```

在上述 `while` 循环中，程序会打印出 `number` 的值并递增 `number`。只要 `number <= 10`，此步骤将被执行；循环在 `number` 达到 11 时终止。

**注意：** 对于 `while` 循环，你必须记住递增条件变量，否则你的程序会出现无限循环。

### For 循环

```
for(初始化; 终止条件; 更新语句){
    要执行的操作
}
```

在 `for` 循环中，条件块中有三部分：`初始化`、`终止条件` 和 `更新语句`。

1. 执行 `for` 循环时，程序会执行 `初始化` 部分。例如：`int number = 1`。
2. 接下来，程序检查 `终止条件`，例如：`number <= 10`。
3. 如果条件为 `true`：
    1. 执行 `要执行的操作`
    2. 执行 `更新语句`（例如：`number = number + 1`）
4. 重复步骤 2 和 3。
5. 如果 `终止条件` 为 `false`，退出 `for` 循环。

以下是一个打印 1 到 10 的示例：

```java
for(int number = 1; number <= 10; number = number + 1){
    System.out.println(number);
}
```

{{% /notice %}}

在了解了 for 循环和 while 循环后，让我们来看看如何帮助 Patrick 🐥 并轻松计算 **1 + 2 + 3 + 4 ... + 99 + 100