---
title: "If-else 语句"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 14
---

## If-else 语句

你可以使用 `if` 语句仅在满足特定条件时运行代码语句。以下是一个例子：

```csharp
var myNum = (93 + 41) / 12;
if (myNum == 11)
{
    Console.WriteLine("它们相等！");
}
```

在 `if` 后的 `()` 中，你需要指定一个布尔表达式。如果该表达式为 `true`，则执行 `{ }` 中的代码。在这个例子中，由于 `myNum` 等于 `11`，因此会打印 `它们相等！`。

![alt text height="600px" width="70%"](../media/if-true.png "If-else true case")

如果条件为 `false`，则什么都不会发生！例如，由于 `10` 不大于 `11`，`Print me!` 不会显示在控制台上。

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("打印我！");
}
```

![alt text height="600px" width="70%"](../media/if-false.png "If-else false case")

使用 `else` 可以告诉计算机当条件为 false 时该做什么。在这个例子中，控制台会打印 `现在我被打印了！`。

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("打印我！");
}
else
{
    Console.WriteLine("现在我被打印了！");
}
```

![alt text height="600px" width="70%"](../media/if-else.png "If-else")

你可以使用 `else if` 将多个条件连接在一起。请注意，当使用 `else if` 时，只有第一个满足条件的分支会被执行。例如，在以下代码中，将会打印 `语句 1`。即使 `sad == 4` 条件也为 `true`，但我们会跳过检查 `sad == 4` 的部分，而不会打印 `语句 2`。

```csharp
var sad = 4;
if (sad < 9)
{
    Console.WriteLine("语句 1");
}
else if (sad == 4)
{
    Console.WriteLine("语句 2");
}
else
{
    Console.WriteLine("语句 3");
}
```

![alt text height="600px" width="70%"](../media/if-three.png "If-else three statements")

你还可以在一个 `if` 语句中嵌套另一个 `if` 语句，以实现一些有趣的行为：

```csharp
var num1 = 10;
var num2 = 20;
if (num1 < num2)
{
    if (num2 < 30)
    {
        Console.WriteLine("你好！");
    }
    else
    {
        Console.WriteLine("Hola!");
    }
}
```

![alt text height="600px" width="70%"](../media/if-nested.png "If-else nested")

{{% notice tip %}}

## 一起练习

让我们写一个程序，首先向控制台打印以下内容：

```
编程有趣吗？
```

随后，控制台等待用户输入。

- 如果用户输入 `yes`，计算机会打印 `是的，很高兴你喜欢！`。
- 如果用户输入 `no`，计算机会打印 `哦，不，那真糟糕！`。
- 否则，计算机会打印：`我听不懂你说的！再见！`。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="If-else statements - .NET Fiddle editor" frameborder="0"></iframe>

{{% /notice %}}

{{% notice info %}}

## 趣闻：Switch 语句

使用多个 `if` 和 `else` 语句可能会显得很长且难以阅读。如果只想比较一个变量的多个值，可以使用 `switch` 语句。比如，上面的 **一起练习** 活动可以用以下代码实现：

```csharp
    var input = Console.ReadLine();
    switch (input)
    {
        case "yes":
            Console.WriteLine("是的，很高兴你喜欢！");
            break;
        case "no":
            Console.WriteLine("哦，不，那真糟糕！");
            break;
        default:
            Console.WriteLine("我听不懂你说的！再见！");
            break;
    }
```

每个 case 表示变量 input 可能的一个值。确保使用 `break` 语句告诉计算机当前 case 的操作已经完成。

{{% /notice %}}