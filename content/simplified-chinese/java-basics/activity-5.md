```yaml
---
title: "方法"
description: "介绍 Java 中的方法。"
date: 2021-10-13T00:00:00Z
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/mO6S9Yq_K4I" title="Java 方法视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 什么是方法？

到目前为止，我们已经学习了如何在变量中存储数据、打印数据和句子，以及用 if 语句、for 循环和 while 循环做出决定。

在上一个练习中，我们知道以下代码块可以计算从 1 到 100 的总和：

```java
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
System.out.println("Sum: " + total);
```

但如果我们想计算从 1 到 77 的总和怎么办？我们如何在不重复写这整段代码的情况下实现呢？

我们希望能够在代码中创建一个✨ 魔法盒 ✨，它可以无论用哪个两个数字都帮我们完成计算！  
<img src="../images/method.png" height="250" alt="数字 1 和数字 2 指向一个圆圈，圆圈上写着魔法盒，箭头从圆圈中指向数字 1 到数字 2 的总和"/>  

在 Java 中，**方法** 就像是那个执行特定任务的魔法盒，通过运行一个可以使用用户输入的代码块来完成特定功能。

方法包含两个部分：方法头和方法体：

{{% notice note %}}
### 方法头

要定义一个方法，我们需要先编写其<b>方法头</b>。一个方法头有四个主要部分：

**部分名称** | **描述** | **示例或可能的选项**
----|----|----
**访问修饰符** | 提供该方法的访问级别 | `public` 告诉计算机任何人都可以使用此方法。`private` 告诉计算机此方法只能在类内部调用。（我们将在下一页学习有关类的内容！）`protected` 告诉计算机该方法可以由同一个类的对象调用。
**返回类型** | 方法返回给调用函数的数据类型 | 如果方法没有返回值，则使用 `void`。
**方法名称** | 用于调用该方法的名称 | 用户根据方法的功能定义名称
**参数列表** | 使用该方法时必须提供的输入列表 | 格式为 (`类型` `输入名称`, `类型` `输入名称`, ...)。

```
// 示例
public void sing (String songName)
   1.    2.   3.        4.
```
**注意：** 参数的变量名称不必与传入方法的数据的变量名称匹配。

<br />

### 方法体

接下来，我们把与方法相关联的代码放在 **方法体** 中，该部分位于方法头后的 `{` 和 `}` 中。

要返回某些数据，我们使用关键字 `return`，后面跟着要返回的变量名或值。

**注意：** 一旦使用了 `return`，方法中的其余代码将不再执行。

以下是一个定义方法计算从 `numA` 到 `numB` 的总和的示例：

```java
/* 方法名称: sumNum
 * 输入/参数: 两个类型为 int 的数字
 * 功能: 返回从 numA 到 numB 的总和
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // 我们用变量名 numA 访问第一个输入
    while(num <= numB){  // 我们用变量名 numB 访问第二个输入
        total = total + num;
        num = num + 1;
    }
    return total; // 返回语句
}
```

<br />

### 方法调用

最后，为了在代码中执行一个方法，我们需要进行<b>方法调用</b>。我们写下方法的名称并提供适当的输入。
例如：

```java
sumNum(1, 3); // 调用 sumNum() 方法的一行代码，该方法返回值为 6
```

知道 `sumNum(1, 3)` 返回从 1 到 3 的和，类型为 `int`，我们可以通过以下方式存储该值：

```java
int sum1to3 = sumNum(1, 3); 
```
{{% /notice %}}

## 计算金字塔！🔺

<img src="../images/pyramid.png" height="250" alt="由彩色珠子层组成的金字塔。底层是黄色，接下来是蓝色、棕色、白色、粉色、浅蓝色、橙色、珊瑚色、绿色，最后是红色" /> 
<p style="text-align: center;">（图片来源：aliexpress.com/item/32306945847.html）</p>

上图是一个由数字平方组成的金字塔，其中每一层是当前层数字的平方。

也就是说，最顶层有 `1 * 1` 个珠子，第 2 层有 `2 * 2` 个珠子。

<br />
让我们编写一个方法，接受总层数作为输入，并输出金字塔中珠子的总数！

当你完成挑战时，你将看到以下消息：

```
Congratulations! Challenge Solved!
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsPyramid" target="_blank">启动 Replit</a>
```