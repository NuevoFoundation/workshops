```markdown
---
title: "Classes and Objects"
description: "Introduce classes and objects in C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## 什么是对象和类？

对象是具有某些特征并能执行某些任务的事物（名词）。类是创建对象的蓝图或定义。

例如，人是一个类。人可以有某些特性，使其与另一个人区别开来。可以有蓝眼睛，可以是15岁等。人也可以执行某些任务。可以走路，可以说话等。

C# 对象是 C# 类的实例。在这个实例中，“Bea”是一个“Person”。“Bea”有棕色的眼睛。这是“Bea”的一个属性（或数据字段）。“Bea”可以用英语说话。“Bea”可以用西班牙语说话。这些是“Bea”可以执行的方法。

## 创建一个类！

C# 是一种**面向对象**的编程语言，这意味着 C# 中的所有内容都与一个**对象**和一个**类**（对象的蓝图）相关联。

首先，我们在活动1中用来打印语句的代码实际上是来自一个名为`System`的预定义类的方法调用！

```csharp
Console.WriteLine("Hello World");
```

1. `Console`是一个处理用户输入和输出的类。
3. `WriteLine()`是`Console`类中定义的方法。

我们在之前的练习中接触过的另一个内置类是`string`。`string`类定义了一组关于字符列表应该如何表现的规则。

通过以下代码行，我们使用`string`类中定义的规则创建了一个名为`name`的`string`对象：

```csharp
string name = "Patrick";
```

`Console`和`string`是C#中的预定义类。然而，我们不仅限于这些预定义类，我们实际上可以通过编写类来创建我们自己的数据类型！这对于程序员来说是有用的，可以创建具有特定属性和行为的对象。使用这些用户定义的类型可以帮助我们构建不同的程序。

让我们了解类中的不同部分：

{{% notice note %}}
### 类
类是新类型对象的蓝图或原型。通常，类包含三个重要部分：

<img src="../images/class.png" height="400" alt="A Class blueprint for an object contains instance varialbes/data fields which are data/attributes in the object, constructor which are methods that creates the obejct of the class, and methods, which are behaviors possible for the object."/> 

**元素** | **描述** | **示例**
---|---|---
**数据字段/实例变量** | 描述对象的变量，类的对象可以访问 | 例如，一个Person类可以有字段eyeColor, age, height。
**构造函数** | 从该类创建对象时自动调用的方法，构造函数与类同名 | 每个类可以有多个构造函数
**方法** | 类的对象为了执行某些任务的方法 | Person类可以有方法talk和walk。

例如：

```csharp
public class Person{
    // (1) 数据字段/实例变量
    private String name; // example
    private int age;
    private int height;

    // (2) 构造函数 - 构造函数与类同名
    public Person()
    {
        name = "Bea";
        age = 29;
        height = 167;
    }

    // (2) 构造函数 - 您可以拥有不止一个
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

## 尝试一下 🐥！

通过按照以下步骤，我们来创建一个`Bird`类来代表Patrick 🐥和他的所有鸟类朋友！

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/OH5XQO" frameborder="0"></iframe>

### 首先，我们以格式 `public` `class` `name` 定义类名。

```csharp
public class Bird{}
```

<br />

### 其次，让我们声明鸟类的所有字段：species, name, hobby, age, loveMusic。

每个字段的声明格式为：`访问修饰符` `