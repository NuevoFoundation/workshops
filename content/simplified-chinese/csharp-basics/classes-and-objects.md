```markdown
---
title: "Classes and Objects"
description: "Introduce classes and objects in C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## 什么是对象和类？

对象是具有某些特征并能执行某些任务的事物（名词）。类是在创建对象时的蓝图或定义。

例如“人”。“人”是一种类。人可以有某些特征使其与他人区别开来。比如可以有蓝色的眼睛，可以是 15 岁，等等。一个人还可以执行某些任务，比如可以走路，可以说话，等等。

C#中的对象是C#类的实例。比如“Bea”是一个“人”。“Bea”有棕色眼睛。这是“Bea”的一个属性（或数据字段）。“Bea”可以用英语交流。“Bea”可以用西班牙语交流。这些是“Bea”可以执行的方法。

## 创建一个类！

C# 是一种面向对象的编程语言，这意味着 C# 中的所有内容都与对象和类（对象的蓝图）相关。

首先，我们在活动1中用来打印语句的代码行实际上是从一个预定义类`System`中调用的方法！

```csharp
Console.WriteLine("Hello World");
```

1. `Console`是一个处理用户输入输出的类。
3. `WriteLine()`是类`Console`中定义的方法。

我们在之前的练习中也与`string`类交互过。`string`类定义了一组字符列表的行为规则。

通过以下代码，我们使用`string`类中定义的规则创建了一个`string`对象`name`：

```csharp
string name = "Patrick";
```

`Console`和`string`是C#中的预定义类。然而，我们不局限于这些预定义类，我们实际上可以通过编写一个类来创建我们自己的数据类型！这对于编程人员而言非常有用，可以创建具有特定属性和行为的对象。使用这些用户自定义类型可以构建不同的程序。

让我们了解关于类的不同部分：

{{% notice note %}}
### 类
类是新对象类型的蓝图或原型。一般来说，一个类包含三个重要部分：

<img src="../images/class.png" height="400" alt="一个类对象的蓝图包含实例变量/数据字段即对象的数据/属性，构造方法即创建类对象的方法，以及对象可能的行为方法。" /> 

**元素** | **描述** | **例子**
---|---|---
**数据字段/实例变量** | 描述对象的可访问变量 | 例如，一个Person类可以有eyeColor, age, height等字段。
**构造方法** | 从该类创建对象时自动调用的方法，构造方法与类同名 | 每个类可以有多个构造方法
**方法** | 对象执行某些任务的方法 | Person类可以有talk和walk方法。  

例如：

```csharp
public class Person{
    // (1) 数据字段/实例变量
    private String name; // 示例
    private int age;
    private int height;

    // (2) 构造方法 - 构造方法与类同名
    public Person()
    {
        name = "Bea";
        age = 29;
        height = 167;
    }

    // (2) 构造方法 - 可以有多个
    public Person( String nameInput, int ageInput, int heightInput)
    {
        name = nameInput;
        age = ageInput;
        height = heightInput;
    }

    // (3) 方法
    public void talk()
    {
        Console.WriteLine($"Hello from {name}");
    }
}
```

{{% /notice %}}

## 试试看 🐥！

让我们通过以下步骤制作一个`Bird`类来表示Patrick 🐥及其所有鸟类朋友！

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/OH5XQO" frameborder="0"></iframe>

### 首先，我们以`public` `class` `name`的格式定义类名。

```csharp
public class Bird{}
```

<br />

### 第二，让我们声明鸟类的所有字段：species, name, hobby, age, loveMusic。

每个字段的声明格式为：`访问修饰符` `数据类型` `名称` `;`。

1. 我们在类`Bird`中将所有5个字段声明为`private`。这确保这些字段只能