---
title: "对象和类"
description: "介绍 Java 中的对象和类。"
date: 2021-10-13T00:00:00Z
weight: 7
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ejXgw0qchDg" title="Java objects and classes video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 什么是对象和类？

对象是指具有某些特性并能执行某些任务的事物（名词）。类是该对象的蓝图或定义。

一个例子是人。人是一个类。人可以有某些特征使其与其他人区分开来。比如它可以有蓝色的眼睛，可以是30岁等等。一个人也可以执行某些任务，比如可以行走、可以说话等等。

Java 对象是 Java 类的一个实例。在此实例中，“Bea” 是一个“人”。“Bea” 有棕色的眼睛，这是“Bea”的一个属性（或数据字段）。“Bea” 会说英语、会说西班牙语。这些是“Bea”能执行的方法。

## 创建一个类！

Java 是一种<b>面向对象</b>的编程语言，这意味着 Java 中的所有内容都与<b>对象</b>和<b>类</b>（对象的蓝图）有关。

首先，我们在活动 1 中使用的打印语句的代码实际上是从一个预定义类 `System` 中调用的方法！

```java
System.out.println("Hello World");
```

1. `System` 是一个处理用户输入和输出的类。
2. `out` 是类 `System` 中的一个变量，它的类型是 `PrintStream`。
3. `println()` 是在 `PrintStream` 类中定义的方法。

<br />

我们在前面的练习中接触到的另一个类是 `String`。`String` 类定义了一组关于字符列表行为规则的集合。

使用以下代码行，我们通过 `String` 类定义的规则创建了一个名为 `name` 的 `String` 对象：

```java
String name = "Patrick";
```

<br />

`System`、`PrintStream` 和 `String` 是 Java 中的预定义类。然而，我们并不局限于这些预定义类，我们实际上可以通过编写一个类来创建自己的数据类型！这对于程序员来说非常有用，可以创建具有特定属性和行为的对象。拥有这些用户定义的类型，使我们能够构建出独特的程序。

让我们了解类的不同部分如下：

{{% notice note %}}
### 类
类是新类型对象的蓝图或原型。通常，一个类包含三个重要部分：(1) 数据字段/实例变量 (2) 构造器 (3) 方法。

<img src="../images/class.png" height="400" alt="一个类对象的蓝图包含实例变量/数据字段（这是对象中的数据/属性）、构造器（用来创建类对象的方法），以及方法（对象可执行的行为）。"/> 

**元素** | **描述** | **示例**
---|---|---
**数据字段/实例变量** | 对象可以访问的描述性变量 | Person 类有字段 eyeColor、age、height。
**构造器** | 用于从该类创建对象的方法 | 每个类可以有多个构造器
**方法** | 对象可以调用以执行某些任务的方法 | Person 类有方法 talk 和 walk。

例如：

```java
public class SampleClass{
    // (1) 数据字段/实例变量
    private String name; // 示例

    // (2) 构造器
    public SampleClass(){
        name = "example";
    }
    // (3) 方法
    public sampleMethod(){}
}
```

{{% /notice %}}

## 动手尝试 🐥！

通过完成以下步骤，让我们创建一个 `Bird` 类来表示 Patrick 🐥 以及他的所有鸟类朋友！
**注意：** 在此练习中，你将操作 `Bird.java` 而不是 `Main.java`。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsBird" target="_blank">启动 Replit</a>

### 首先，我们以格式 `public` `class` `name` 定义类名。

```java
public class Bird{}
```

<br />

### 第二，声明 Bird 类的所有字段：species、name、hobby、age、loveMusic。

每个字段的声明格式为：`private` `数据类型` `名字` `;`。

1. 我们在类 `Bird` 中将所有5个字段声明为 `private`。这可确保这些数据只能在此类中访问。

2. 让我们确定每个字段的适当类型：

- `species` 应为 `String`，例如："duck"，"swan"，"owl"。
- `name` 应为 `String`，例如："Patrick"。
- `hobby` 应为 `String`，例如："play basketball"。
- `age` 应为 `int`，例如：25。
- `loveMusic` 应为 `boolean`，值为 true 或 false。

例如，要将 `species` 声明为类 `Bird` 的私有字段，你需要写：`private String species;` 。

3. 完成创建 Bird 类的其他 4 个字段！

<br/>

### 第三，为类 `Bird` 创建构造器。

通常，构造器是一种为类中所有字段初始化赋值的方法。其格式为 `public` `类名` `(参数)`。由于此类有 5 个字段，构造器将接收 5 个参数/输入。

```java
public Bird(String speciesInput, String nameInput, String hobbyInput, int ageInput, boolean loveMusicInput){
    // 构造器主体
}
```

在构造器主体中，我们需要通过将每个变量赋值其初始值来初始化所有实例变量：

```java
species = speciesInput;
name = nameInput;
hobby = hobbyInput;
age = ageInput;
loveMusic = loveMusicinput;
```

<br />

### 最后，为类 `Bird` 创建一些方法。

我们将为此类创建 6 个方法！
- getSpecies();   // 返回鸟的种类
- getName();      // 返回鸟的名字
- getHobby();     // 返回鸟的爱好
- getAge();       // 返回鸟的年龄
- getLoveMusic(); // 返回这只鸟是否喜欢音乐
- toString();     // 返回对象的信息字符串

尝试自己写出前5个方法，使用前一节中关于编写方法的知识！

<br />
之后，我们一