---
title: "變數"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 10
---

## 變數

變數是我們可以用來為字串、數值和布林值命名的名稱。我們使用變數來儲存電腦可以追蹤的資訊。

這是如何宣告一個名為 `str` 的變數。我們說 `str` 的值是 `"Hello World"`。你能描述下方其它變數的意思嗎？

```csharp
var str = "Hello World";
var x = 88;
var happy = true;
```

按下 **run**。注意，變數不會被直接輸出到控制台，而是單純將字串、數字或布林值存儲到電腦的記憶體中。

![alt text height="600px" width="70%"](../media/variables-intro.png "變數介紹")

我們可以在其他語句中使用這些變數。例如，以下程式碼會在控制台中列印 `Hello Nuevo Foundation`：

```csharp
var str1 = "Hello";
var str2 = "Nuevo Foundation";
Console.WriteLine(str1 + " " + str2);
```

![alt text height="600px" width="70%"](../media/variables-strings.png "使用字串的變數")

你可以隨時使用 `=` 運算子更改變數的值。如果你只是更改變數的值，不需要再次使用 `var`。在以下範例中，將會列印出 `Hola`，而不是 `Hello`。

```csharp
var str = "Hello";
str = "Hola";
Console.WriteLine(str);
```

![alt text height="600px" width="70%"](../media/variables-replace.png "更改變數值")

這裡是另一個範例：`10` 將被列印，而不是 `9`。

```csharp
var num = 9;
num = num + 1;
Console.WriteLine(num);
```

![alt text height="600px" width="70%"](../media/variables-numbers.png "使用數字的變數")

請注意，你**不能**將一個字串變數替換為一個數字或布林值，亦或是其他組合。以下範例程式碼將**無法運行**：

```csharp
var happy = "Hello";
happy = 9;
```

![alt text height="600px" width="70%"](../media/variables-invalid.png "無效的變數")

另一種宣告變數的方法是將 `var` 替換為你創建的變數類型 (`string`、`int`、`bool`)。通過顯式地宣告類型，你可以避免上面看到的問題。例如：

```csharp
string str = "Hello World";
int x = 88;
bool happy = true;
```

值得注意的是，`var`、`string`、`int` 或 `bool` 是 C# 中的特殊關鍵字，因此你不能使用這些名稱來創建變數。

{{% notice tip %}}

## 一起動手

讓我們創建兩個新變數：

- 一個名為 `comp` 的變數，儲存字串 `"Computer"`。
- 一個名為 `five` 的變數，儲存數字 `5`。

接下來，讓我們使用變數在控制台中列印出 (`Console.WriteLine`) 以下內容。嘗試使用變數來達成這個目標吧！

**_提示:_** 我們將使用 `+` 運算子來合併字串，或者執行數字相加。

```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="變數 - .NET Fiddle 編輯器" frameborder="0"></iframe>

{{% /notice %}}