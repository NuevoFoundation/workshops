---
title: "變數與類型"
description: "介紹 Java 中的類型與變數。"
date: 2021-10-13T00:00:00Z
weight: 3
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/KE0fNb-hTKE" title="Java variables and types video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 變數：命名它！

在上一個練習中，我們學會使用 `System.out.print()` 列印不同的語句。

雖然列印出一個數字或句子很棒，但我們還沒有給它們賦予任何含義。

在 Java 中，我們引入了 **變數** 的概念來存儲數據。變數就像是一個能以名字儲存一個數據的箱子。

例如，可以有一個叫做 `myName` 的變數儲存 `"Patrick"`，另一個叫做 `loveMusic` 的變數儲存 `true`，還有一個叫做 `age` 的變數儲存 `3`。就像下面這張圖片：

<img src="../images/variable.png" height="200" alt="三個箱子。第一個箱子外面有白色字樣 myName，內部有白色字樣 'Patrick'。第二個箱子外面有白色字樣 loveMusic，內部有白色字樣 true。第三個箱子外面有白色字樣 age，內部有白色字樣 3."/>

## 類型的世界！

那麼如何在 Java 中創建這些箱子或變數來儲存數據呢？

在學習如何創建變數之前，我們需要先學習 Java 中的 **類型** 概念。類型描述了箱子中存儲的是什麼內容。如果你有一個整數型的箱子，它只會裝整數，而不是句子或符號。每個變數都有自己的類型，限制它只能存儲特定種類的數據。

例如，叫做 `age` 的變數儲存數字 `3` 應該包含整數，而不是句子或符號。

在 Java 中，如果一個變數要儲存整數類型的數字，它的類型是 `int`。我們使用以下程式碼聲明一個名為 `age` 的 `int` 型變數並賦值為 `3`：

```java
int age = 3;
```

一般來說，聲明變數的格式為：[數據類型] [變數名稱] = [數據];
{{% notice note %}}
以下是 Java 中重要的內建數據類型：

**類型** | **描述** | **範例**
--------|-----------|----------
`int` | 整數 | `20`, `30`, `35`
`char` | 字符，例如符號或單個字母 | `'A'`,`'b'`, `'('`, `']'`
`String` | 字符序列 | `"Hello"`, `"Bonjour"`, `"Hola"`
`boolean` | 值為 `true` 或 `false` | `true`, `false`
double | 小數數字 | `2.0`, `3.14`, `9.33`

{{% /notice %}}

讓我們重溫之前提到的三個變數並識別它們的數據類型。

<img src="../images/dataType.png" height="200" alt="三個箱子。第一個箱子外面有白色字樣 myName，內部有白色字樣 'Patrick'。紅色箭頭指向文字類型 String。第二個箱子外面有白色字樣 loveMusic，內部有白色字樣 true。紅色箭頭指向文字類型 boolean。第三個箱子外面有白色字樣 age，內部有白色字樣 3。紅色箭頭指向文字類型 int"/> 

以下是用 Java 語言聲明這些變數的方法：

```java
String name = "Patrick";
int age = 10;
boolean loveMusic = true;
```

## 類型的世界 -- 幫助 Patrick！

Patrick 🐥 不是數據類型的大師！他常常在聲明變數時弄混了類型。讓我們來幫助他修正錯誤：

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsDataType" target="_blank">啟動 Replit</a>

{{% notice tip %}}
藉由將數據存入變數，您可以在稍後使用該數據，或通過重新賦值來改變它，但必須是相同類型的值。例如：

```java
int age = 10;
System.out.println(age); // 列印出 10
age = 11; // 為變數 age 賦值 11
System.out.println(age); // 列印出 11
```

{{% /notice %}}

## 類型的世界 -- 追蹤數字！

現在看看下面的程式碼。您認為輸出結果是什麼？請自己追蹤每個變數的值，然後在下方測試！

```java
double x = 2.3;
double y = 10.0;
int z = 4;

x = y;
y = x;
z = 0;
z = z;
System.out.println("x: " + x + " y: " + y + " z: " + z );
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsVariable" target="_blank">啟動 Replit</a>

{{% notice tip %}}
#### 示例解析
第 1-3 行：我們聲明了變數並分別為 `x` (2.3)、`y` (10.0) 以及 `z` (4) 賦初值。  
第 4 行：我們將 `x` 的值設為 `y` 的值 (10.0)。  
第 5 行：我們將 `y` 的值設為 `x` 的值，此時 `x` 剛剛被設為 10.0，因此 `y` 的值也為 (10.0)。  
第 6 行：我們將 `z` 的值設為 0。  
第 7 行：我們將 `z` 設為 `z`