---
title: "Variables and Data Types"
description: "Introduce types and variables in C#."
date: 2024-09-16T00:00:00Z
weight: 4
---

## 變數：給它一個名字！

在第一個練習中，我們學習了用 `Console.WriteLine()` 和 `Console.Write()` 打印不同的語句。

雖然打印一個數字或句子很棒，但我們還沒有賦予它們意義，如果想再次使用這個句子或數字，我們必須重新輸入。

在 C# 中，我們引入了**變數**的概念來存儲數據。變數用一個名字來存儲一塊數據。

例如，可以有一個名為 `myName` 的變數，賦值為 `"Ann"`。另一個變數可能叫 `age`，它被賦值為數字 `12`。

## 型別是什麼！

那麼，我們如何在 C# 中創建這些變數來存儲數據呢？

在學習如何創建變數之前，我們需要了解 C# 中的**數據型別**的概念，簡稱為**型別**。C# 中的型別描述了正在存儲的內容。如果你有一個數字變數，它只能包含數字，而不是句子或符號。每個變數都有自己的型別，控制它可以容納什麼類型的數據。

例如，我們可以有一個名為 `age` 的變數來存儲數字 `12`。如果試圖在 `age` 中存儲單詞 `"twelve"`，會產生錯誤，因為它只知道數字。

在 C# 中，要存儲整數的變數，使用型別 `int`。我們用以下代碼聲明一個數據為 `3` 的 `int` 型變數 `age`：

```
int age = 12;
```

一般來說，要聲明一個變數，我們按照格式書寫： `[data type] [variable name] = [data];`。
{{% notice note %}}
以下是 C# 中內建的重要數據型別：

**型別** | **描述** | **示例**
--------|-----------|----------
`int` | 整數 | `20`, `30`, `35`
`char` | 字符，如符號或單個字母 | `'A'`,`'b'`, `'('`, `']'`
`string` | `char` 的序列 | `"Hello"`, `"Bonjour"`, `"Hola"`
`bool` | 布林值，值為 `true` 或 `false` | `true`, `false`
`double` | 小數 | `2.0`, `3.14`, `9.33`

{{% /notice %}}

使用我們之前的例子，要在 C# 中聲明這些變數，我們輸入以下代碼：

```C#
string name = "Ann";
int age = 12;
boolean loveMusic = true;
```

最後一個變數很有趣。它只能有 `true` 或 `false` 的值。我們將在本研討會的更高級別部分看到這點非常有用。

## 操作變數

讓我們看看可以對變數做什麼。

在下面的 .NET Fiddle 框中，fork 該 Fiddle 並嘗試輸入這些行並**運行**：

```C#
int age = 10;
Console.WriteLine(age); // 打印出 10
age = 12; // 將數據 12 賦給變數 age
Console.WriteLine(age); // 打印出 12
```

我們可以給變數賦值、引用它，然後改變其值。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" frameborder="0"></iframe>

## 型別是什麼 —— 幫助 Patrick！

Patrick 🐥 不是數據型別的大師！他在聲明變數時經常混淆。我們來幫他修正下面 .NET Fiddle 中的錯誤。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" frameborder="0"></iframe>
