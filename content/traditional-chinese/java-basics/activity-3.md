```markdown
---
title: "運算子"
description: "介紹運算子，並在 Java 中對變數進行運算。"
date: 2021-10-13T00:00:00Z
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/wP8-F1nBPcg" title="Java operators video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 數學運算：算術運算子

在上一個練習中，我們學習了變數以及如何將值分配給特定類型的變數，例如：

```java
int age = 3;  // 宣告型別為 int 的變數 age，並賦值為 3
age = 4;      // 將變數 age 的值設置為 4
```

觀察上面的程式碼，它基本上是為變數 `age` 的值加 1。

在 Java 中，我們可以使用 **算術運算子** 直接對變數執行數學運算：`+`、`-`、`*`、`/`、`%`。例如，我們可以使用加法運算子 `+` 為 `age` 增加 1：

```java
int age = 3;  // 宣告型別為 int 的變數 age，並賦值為 3
age = age + 1;// 對 age 加 1
```

{{% notice note %}}
以下是 Java 中的算術運算子：

**運算子** | **描述** | **範例**
------|------|--------
`+` | 加法 | `1 + 1 = 2`
`-` | 減法 | `2 - 1 = 1`
`*` | 乘法 | `3 * 3 = 9`
`/` | 除法 | `9 / 3 = 3`
`%` | 取模數/餘數 | `10 % 4 = 2`

**注意**：如果除法的兩個操作數都是整數，結果也將是整數。例如，`10 / 4` 的結果是 2，而不是 2.5，因為會丟棄餘數。如果其中一個操作數是 double，則結果將是 double。

**注意**：模數運算是取得除法運算的餘數。
{{% /notice %}}

{{% notice tip %}}
加法運算子 (`+`) 在字串上被用作連接運算子。例如：

`String name = "Patric" + "k";` 等同於 `String name = "Patrick";`
{{% /notice %}}

### 操作指引
1. 使用下面的程式練習使用算術運算子。更改數字以查看答案。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOperatorsPractice" target="_blank">啟動 Replit</a>

## 比較運算：關係運算子

接下來，我們來學習如何使用 **關係運算子** 進行數字比較。

就像數學中一樣，我們可以使用 `>`、`<`、`>=`、`<=` 來比較數字。例如：`(3 > 2)` 是 `true`，即布林值。

{{% notice note %}}
以下是 Java 中的關係運算子：

**運算子** | **描述** | **範例**
------| ------| ------
`==` | 等於 | `(3 == 3)` 是 `true`
`!=` | 不等於 | `(3 != 3)` 是 `false`
`>` | 大於 | `(3 > 2)` 是 `true`
`<` | 小於 | `(3 < 2)` 是 `false`
`>=` | 大於或等於 | `(3 >= 2)` 是 `true`
`<=` | 小於或等於 | `(2 <= 2)` 是 `true`

注意：`==` 和 `!=` 只能用於相同類型的資料。例如：
```java
int x=3; 
double y=3.0; 
x==y; // 這將產生錯誤，因為 x 和 y 的類型不同。
```

{{% /notice %}}

{{% notice tip %}}
使用單個等於號 `=` 是為變數賦值。使用雙等號 `==` 是對兩個元素的值進行比較。

```java
age = 3;  // 將 age 的值設為 3
age == 3; // 檢查 age 的值是否為 3
```
{{% /notice %}}

### 比較練習

1. 使用下面的程式練習使用比較運算子。更改數字以查看答案。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsComparisonPractice" target="_blank">啟動 Replit</a>

## 考試成績統計！

Patrick 🐥 和他的 4 位同學剛完成班上的音樂考試。他們的考試成績如下：Patrick (88)、Tom (89)、Mary (95)、Chris (84)、Jen (92)。

我們希望生成整個班級的成績統計報告。

該報告會列出每位學生的成績、班級的平均分，並指出班級平均分是否超過 60、70、80、90（結果為 `true` 或 `false`），如下所示：

```
---------------------------
     音樂成績報告         
---------------------------

學生成績：          
- Patrick: ...
- Tom: ...
...

班級平均分數: ...
- 平均分超過 60: ...
- 平均分超過 70: ...
- 平均分超過 80: ...
- 平均分超過 90: ...
```

讓我們運用運算子來完成這個報告吧 🎵！

{{% notice note %}}

### 操作指引：

1. 在第 12 行開始的程式碼中，識別所有的變數並用正確的資料類型和值進行宣告。請注意，共有 10 個變數，且已經為你提供了 `average` 的聲明。

   提示：例如，變數 `patrickGrade` 應在第 13 行宣告並賦值：`int patrickGrade = 88;`。

2