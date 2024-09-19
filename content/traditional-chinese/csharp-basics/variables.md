---
title: "Variables and Data Types"
description: "Introduce types and variables in C#."
date: 2024-09-16T00:00:00Z
weight: 4
---

## 變數：命名它！

在第一個練習中，我們學習了使用 `Console.WriteLine()` 和 `Console.Write()` 打印不同的語句。

雖然直接打印數字或句子很棒，但我們還沒有賦予它們具體意義。如果想再次使用這些句子或數字，我們必須重新輸入一遍。

在 C# 中，我們引入了 **變數** 的概念作為數據存儲。一個變數存儲一段有名稱的數據。

例如，可以有一個名為 `myName` 的變數，它被賦值為 `"Ann"`。另一個變數可能被稱為 `age`，它被賦值為數字 `12`。

## 什麼是類型！

那麼我們如何在 C# 中創建這些變數來存儲數據呢？

在學習如何創建變數之前，我們需要了解 C# 中的 **數據類型** 概念，或簡稱 **類型**。類型描述了正在存儲的內容。如果你有一個數字變數，它只能包含數字，不能是句子或符號。每個變數都有自己的類型，控制它可以保存的數據種類。

例如，我們可以有一個名為 `age` 的變數，它存儲數字 `12`。如果你試圖將詞 `"twelve"` 存儲在 `age` 中，它會產生錯誤，因為它只認識數字。

在 C# 中，要讓變數存儲整數，使用 `int` 類型。我們用這行代碼聲明一個名為 `age` 的 `int` 變數，並賦值為 `12`：

```
int age = 12;
```
一般來說，我們以以下格式聲明變數：`[數據類型] [變數名稱] = [數據];`
{{% notice note %}}
以下是 C# 中內建的重要數據類型：

**類型** | **描述** | **例子**
--------|-----------|----------
`int` | 整數 | `20`, `30`, `35`
`char` | 字符，如符號或單個字母 | `'A'`,`'b'`, `'('`, `']'`
`string` | `char` 序列 | `"Hello"`, `"Bonjour"`, `"Hola"`
`bool` | 布林值，值為 `true` 或 `false` | `true`, `false`
`double` | 小數 | `2.0`, `3.14`, `9.33`

{{% /notice %}}

使用我們之前的例子，要在 C# 中聲明這些變數，我們輸入以下代碼：

```C#
string name = "Ann";
int age = 12;
boolean loveMusic = true;
```

最後一個變數很有趣。它只能有 `true` 或 `false` 的值。我們會在本課程更高級的部分看到這很有幫助。

## 玩轉變數

讓我們看看可以怎樣玩轉變數。

在下面的 .NET Fiddle 框中，分叉 Fiddle 並嘗試輸入以下行然後 **運行**：

```C#
int age = 10;
Console.WriteLine(age); // 印出 10
age = 12; // 將數據 12 賦給變數 age
Console.WriteLine(age); // 印出 12
```
我們可以給變數賦值，引用它，然後改變值。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" frameborder="0"></iframe>

## 什麼是類型 —— 幫助派翠克！

派翠克 🐥 並不擅長數據類型！他在聲明變數時經常搞混。我們來幫他在下面的 .NET Fiddle 中修正他的錯誤。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" frameborder="0"></iframe>