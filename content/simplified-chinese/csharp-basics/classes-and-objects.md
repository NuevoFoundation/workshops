```md
---
title: "类与对象"
description: "介绍 C# 中的类与对象。"
date: 2024-09-16T00:00:00Z
weight: 8
---

## 什么是对象和类？

对象是具有某些特性并能够执行某些任务的事物（名词）。类是创建对象时的蓝图或定义。

例如，"Person"（人）是一个类。人可以拥有特定的属性，这些属性使其与其他人区分开，比如眼睛是蓝色的，年龄是15岁等。人也可以执行某些任务，比如行走、说话等。

C# 中的对象是 C# 类的实例。在这里，"Bea" 是一个 "Person"（人）对象。"Bea" 有棕色的眼睛，这是 "Bea" 的属性（或数据字段）。"Bea" 可以用英语或西班牙语说话，这些是 "Bea" 能执行的方法。

## 创建一个类！

C# 是一种**面向对象**的编程语言，这意味着 C# 中的所有内容都与**对象**和**类**（对象的蓝图）相关联。

例如，我们在活动1中用于打印语句的代码行实际上是一个从预定义类 `System` 调用的方法！

```csharp
Console.WriteLine("Hello World");
```

1. `Console` 是一个处理用户输入和输出的类。
2. `WriteLine()` 是类 `Console` 中定义的方法。

在之前的练习中，我们还接触了另一个内置类 `string`。`string` 类定义了一组规则，规范了字符列表的行为。

通过以下代码，我们根据 `string` 类定义的规则创建了一个名为 `name` 的 `string` 对象：

```csharp
string name = "Patrick";
```

`Console` 和 `string` 是 C# 中的预定义类。然而，我们并不仅限于使用这些预定义的类，还可以通过编写类来创建我们自己的数据类型！这对于开发者来说非常有用，因为可以根据需求创建具有特定属性和行为的对象。使用用户定义类型可以构建出独特的程序。

接下来，我们将学习一个类的不同组成部分：

{{% notice note %}}
### 类
类是新对象类型的蓝图或原型。一般来说，一个类包含三个重要部分：

<img src="../images/class.png" height="400" alt="类是对象的蓝图，包含实例变量/数据字段（对象中的数据或属性）、构造函数（创建类对象的方法），以及方法（对象可能具有的行为）。" /> 

**元素** | **描述** | **示例**
---|---|---
**数据字段/实例变量** | 对象可以访问的变量，用于描述对象 | 例如，Person 类可以包含字段 eyeColor（眼睛颜色）、age（年龄）、height（身高）。
**构造函数** | 当从某个类创建对象时自动调用的方法，构造函数的名称与类名相同 | 每个类可以有多个构造函数。
**方法** | 对象执行特定任务的方法 | Person 类可以包含方法 talk（说话） 和 walk（行走）。

例如：

```csharp
public class Person{
    // (1) 数据字段/实例变量
    private String name; // 示例
    private int age;
    private int height;

    // (2) 构造函数 - 构造函数名称与类名相同
    public Person()
    {
        name = "Bea";
        age = 29;
        height = 167;
    }

    // (2) 构造函数 - 类可以有多个构造函数
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

让我们创建一个代表 Patrick 🐥 和他所有鸟类朋友的 `Bird` 类，按照以下步骤完成！ 

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/OH5XQO" title="交互式 C# Bird 类练习" frameborder="0"></iframe>

### 首先，我们按照格式 `public` `class` `类名` 定义类名称。

```csharp
public class Bird{}
```

<br />

### 第二步，声明 Bird 类的所有字段：species、name、hobby、age、loveMusic。

每个字段的声明格式为：`访问修饰符` `数据类型` `名称` `;`。

1. 我们将 Bird 类中的 5 个字段都声明为 `private`。这样可以确保这些字段只能在该类中访问。

2. 确定每个字段的合适类型：

- `species` 应为一个 `String`，存储例如："duck"（鸭子）、"swan"（天鹅）、"owl"（猫头鹰）。
- `name` 应为一个 `String`，存储例如："Patrick"。
- `hobby` 应为一个 `String`，存储例如："play basketball"（玩篮球）。
- `age` 应为一个 `int`，存储例如：25。
- `loveMusic` 应为一个 `bool`，存储 true 或 false。

例如，要将 `species` 声明为类 Bird 的一个私有字段，可以这样编写：`private String species;`。

3. 完成 Bird 类其余 4 个字段的创建！

### 第三步，创建类 `Bird` 的构造函数。

通常，构造函数是一个方法，用于初始化类中的所有字段。其格式为 `public` `类名` `(参数)`。由于该类有 5 个字段，构造函数需要接收 5 个参数/输入。

```csharp
public Bird(string speciesInput, string nameInput, string hobbyInput, int ageInput, bool loveMusicInput){
    // 构造函数体
}
```

在构造函数体中，我们需要初始化所有实例变量，通过将每个变量赋予初始值来完成：

```csharp
species = speciesInput;
name = nameInput;
hobby = hobbyInput;
age = ageInput;
loveMusic = loveMusicinput;
```

<br />

### 最后，我们为类 `Bird` 创建一些方法。

我们将为该类创建 6 个方法！
- `getSpecies();`   // 返回鸟的种类
- `getName();`      // 返回鸟的名字
- `getHobby();`     // 返回鸟的爱好
- `getAge();`       // 返回鸟的年龄
- `getLoveMusic