---
title: "变量"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 10
---

## 变量

变量是我们可以赋予字符串、数字和布尔值等值的名称。我们使用变量来存储计算机可以跟踪的信息。

以下是声明一个名为 `str` 的变量的方法。我们说 `str` 的值是 `"Hello World"`。你能描述下面的其他变量的含义吗？

```csharp
var str = "Hello World";
var x = 88;
var happy = true;
```

按下 **运行**。注意，变量不会直接输出到控制台。相反，变量只是将字符串、数字或布尔值存储到计算机的内存中。

![alt text height="600px" width="70%"](../media/variables-intro.png "变量介绍")

我们可以在其他语句中使用这些变量。例如，下面的代码会在控制台打印出 `Hello Nuevo Foundation`：

```csharp
var str1 = "Hello";
var str2 = "Nuevo Foundation";
Console.WriteLine(str1 + " " + str2);
```

![alt text height="600px" width="70%"](../media/variables-strings.png "使用字符串的变量")

你可以随时使用 `=` 运算符更改变量的值。如果要更改变量的值，不需要再次使用 `var`。在下面的例子中，`Hola` 会被打印出来，而不是 `Hello`。

```csharp
var str = "Hello";
str = "Hola";
Console.WriteLine(str);
```

![alt text height="600px" width="70%"](../media/variables-replace.png "变量值替换")

下面是另一个例子：将打印出 `10` 而不是 `9`。

```csharp
var num = 9;
num = num + 1;
Console.WriteLine(num);
```

![alt text height="600px" width="70%"](../media/variables-numbers.png "使用数字的变量")

请注意，你不能用数字或布尔值替换字符串变量，也不能用其他组合进行替换。以下示例代码无法正常工作：

```csharp
var happy = "Hello";
happy = 9;
```

![alt text height="600px" width="70%"](../media/variables-invalid.png "无效变量")

声明变量的另一种方法是用变量的类型（`string`、`int`、`bool`）替换 `var`。显式地声明变量类型，可以避免我们上面看到的问题。例如：

```csharp
string str = "Hello World";
int x = 88;
bool happy = true;
```

请注意，`var`、`string`、`int` 和 `bool` 是 C# 中的特殊关键字，所以你不能使用这些名称来创建变量。

{{% notice tip %}}

## 一起练习

让我们创建两个新的变量：

- 一个名为 `comp` 的变量，存储字符串 `"Computer"`。
- 一个名为 `five` 的变量，存储数字 `5`。

接下来，让我们使用这些变量在控制台中打印以下内容。尝试使用这些变量来完成打印！

**提示：** 我们将使用 `+` 运算符将字符串合并在一起，以及进行数字相加。

```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="变量 - .NET Fiddle 编辑器" frameborder="0"></iframe>

{{% /notice %}}