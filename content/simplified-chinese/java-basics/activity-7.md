---
title: "数据结构（数组 & ArrayList）"
description: "介绍 Java 中的基本数据结构。"
date: 2021-10-13T00:00:00Z
weight: 8
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/x2hcvJjiH_g" title="Java arrays and ArrayLists video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

在之前的练习中，我们学习到变量可以用来访问和存储一项数据。但如果我们想要存储大量相似的数据呢？有没有什么好方法可以组织它们，而不需要声明多个变量？

在编程中，**数据结构**是允许程序员存储多项相同类型数据的元素。使用数据结构可以高效地存储和访问大量数据。在本练习中，我们将学习 Java 中的两种常用数据结构：**数组（array）** 和 **ArrayList**。

数组是固定长度的数据结构，而 ArrayList 是可变长度的数据结构，您可以随时更改其大小。让我们先从数组开始学习！

## 数组

假设我们想要存储 Patrick 🐥 最喜欢的 5 部电影。与其创建 5 个变量，我们可以将这 5 个数据存储在第一个数据结构——数组中！

要在数组中存储数据，我们需要执行以下步骤：

1. 首先通过指定数据类型和大小（即能存储的数据个数）来声明一个数组。

```java
String topMovies[] = new String[5]; // 创建一个大小为 5 的字符串数组
```

2. 遍历数组（通过所有数据的位置）并将数据分配到数组中的位置。

注意，我们通过数组的名称和索引来访问数组中的元素（使用 `0` 来访问第 1 个元素，使用 `1` 来访问第 2 个元素……）。

```java
topMovies[0] = "Birds Of Prey";
topMovies[1] = "The Birds";
topMovies[2] = "Angry Birds";
topMovies[3] = "Bird Box";
topMovies[4] = "The Secret Life of Pets";
// 数组 topMovies 现在按照顺序存储了 "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"
```
{{% notice info %}}
### 为什么 Java 中数组索引从 0 开始？

从直觉上来看，要访问数组的第一个元素，我们可能会认为应该从索引 1 开始。

然而，当计算机读取代码 `arr[1]` 时，它实际上并不是从 `arr` 中获取第一个元素。

实际上，它会把 `arr[1]` 理解为从数组开头位置起「1 个距离」的元素。

换句话说，索引实际上是一个**内存偏移量**。要访问第 1 个元素，我们应该获取数组开头偏移量为 0 的元素（即 `arr[0]`）。
{{% /notice %}}

{{% notice tip %}}
### 创建数组的另一种方法：
如果我们事先知道数组中的所有数据，可以通过 `{` 和 `}` 中列出所有数据来用一行代码创建数组。

例如：

```java
String topMovies[] = {"Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"};
```

和通过索引初始化数据一样，我们也可以通过索引访问/修改每个数据。

例如：

```java
String movie1 = topMovies[0]; // movie1 的值为 "Birds Of Prey"
```

{{% /notice %}}

创建数组后，了解数组中有多少元素通常很有用（例如，要访问数组中的最后一个元素）。我们可以通过数组的 `length` 属性获取数组的元素数量，写法为 `array_name.length`。

例如：

```java
int numOfMovie = topMovies.length; // numOfMovie 的值是 5
```

<br/>

### 练习：编写一个方法 `printArr()`，它接收一个数组作为输入并按顺序打印数组中的所有元素
（提示：利用 for 循环和 `.length`）。

点击 `Run` 后，程序应该输出如下内容：

```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsArray" target="_blank">启动 Replit</a>

## ArrayList

ArrayList 是 Java 中另一种流行的数据结构。`ArrayList` 是一个基于数组实现的类。它与数组类似，用户可以通过索引访问、存储和修改数据。

通过指定名称和类型（使用 `<` 和 `>`）可以创建一个 ArrayList。例如：

```java
ArrayList<String> topMoviesList = new ArrayList<String>();
```

要添加元素，可以调用 ArrayList 的 `add()` 方法。例如：

```java
topMoviesList.add("Birds Of Prey");
topMoviesList.add("The Birds");
topMoviesList.add("Angry Birds");
topMoviesList.add("Bird Box");
topMoviesList.add("The Secret Life of Pets");
// ArrayList 现在按顺序存储了 "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"
```

要访问特定索引处的元素，可以调用 `get()` 方法。注意，Java 使用从 0 开始的索引，因此要获取 ArrayList 的第一个元素，可以调用 `get(0)` 方法。例如：

```java
String movie1 = topMoviesList.get(0); // movie1 的值为 "Birds Of Prey"
```

要获取 ArrayList 中的元素数量，可以调用 `size()` 方法。例如：

```java
int numOfMovie2 = topMoviesList.size(); // numOfMovie2 的值是 5
```

<br/>

如前所述，数组和 ArrayList 的关键区别在于数组需要提前知道存储的元素个数，而 ArrayList 则不需要。

- 在代码行 `String topMovies[] = new String[5]` 中，数组 `topMovies` 的长度将永远是 5。这意味着在创建之后，您无法在 `topMovies` 中存储超过 5 个字符串。

- 然而，在代码行 `ArrayList<String> topMoviesList = new ArrayList<String>()` 中，ArrayList 开始时没有元素，且可以无限添加或移除元素。

要从 ArrayList 中移除一个元素，可以调用 `remove()` 方法。例如：

```java
System.out.print(topMoviesList.size()); // 输出 5
topMoviesList