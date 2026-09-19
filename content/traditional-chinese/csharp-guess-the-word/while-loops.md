---
title: "While loops"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 16
---

## While loops

`while` 迴圈是一種簡單的方法，可以重複執行程式碼而不需要多次重複相同的程式碼。例如，要連續列印 `Hello World` 五次，您可以這樣做：

```csharp
var counter = 1;
while (counter <= 5)
{
    Console.WriteLine("Hello World");
    counter = counter + 1;
}
```

與 `if` 條件語句類似，在 `while` 的括號 `()` 中，您應該指定一個布林表達式。如果表達式結果為 `true`，那麼大括號 `{ }` 中的程式碼將會被執行。執行完大括號中的所有程式碼後，流程會回到 `while` 迴圈的頂部，再次檢查布林表達式。如果布林表達式仍然為 `true`，該迴圈將繼續被重複執行。

![alt text height="600px" width="70%"](../media/while-1.png "While 1")

您也可以在 `while` 迴圈中放置 `if` 條件語句以實現一些有趣的操作：

```csharp
var counter = 1;
while (counter <= 10)
{
    if (counter < 5)
    {
        Console.WriteLine("Smaller than 5!");
    }
    else
    {
        Console.WriteLine("Greater than or equal to 5!");
    }
    counter = counter + 1;
}
```

![alt text height="600px" width="70%"](../media/while-2.png "While 2")

以下是一個無限迴圈的範例——您能看出問題所在嗎？要使下面的程式碼僅列印 `Spam!` 100 次，您可以做些什麼？

```csharp
var counter = 100;
while (counter > 0)
{
    Console.WriteLine("Spam!");
}
```

{{% notice tip %}}

## 一起合作

取出您在前一個活動中編寫的程式碼。讓我們擴展這段程式碼，使程式不僅在使用者輸入一次後結束，而是允許使用者回答問題達到 10 次後再退出。請注意避免無限迴圈發生！

{{% /notice %}}