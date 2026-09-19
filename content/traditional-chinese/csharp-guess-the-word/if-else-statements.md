---
title: "If-else statements"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 14
---

## If-else statements

您可以使用 `if` 語句來 **執行** 程式碼語句，但僅當某些條件被滿足時。這是個範例：

```csharp
var myNum = (93 + 41) / 12;
if (myNum == 11)
{
    Console.WriteLine("它們相等！");
}
```

在緊靠 `if` 的 `()` 中，您需要指定一個布林表達式。如果表達式為 `true`，則會執行 `{ }` 內部的程式碼。在此例中，由於 `myNum` 等於 `11`，因此會列印出 `它們相等！`。

![alt text height="600px" width="70%"](../media/if-true.png "If-else 條件為 true 的情形")

如果條件為 `false`，什麼都不會發生！例如，由於 `10` 並不大於 `11`，所以 `Print me!` 不會顯示在主控台上。

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("Print me!");
}
```

![alt text height="600px" width="70%"](../media/if-false.png "If-else 條件為 false 的情形")

使用 `else` 來告訴電腦在條件為 false 時應執行什麼。在這個範例中，主控台會列印出 `現在換我被列印出來了！`。

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("Print me!");
}
else
{
    Console.WriteLine("現在換我被列印出來了！");
}
```

![alt text height="600px" width="70%"](../media/if-else.png "If-else")

您可以使用 `else if` 將多個條件鏈接在一起。注意，在使用 `else if` 時，只有第一個符合的條件會被執行。例如，在下面的程式碼片段中，會列印出 `語句 1`。即使 `sad == 4` 是 `true`，也會跳過該檢查，因此不會列印出 `語句 2`。

```csharp
var sad = 4;
if (sad < 9)
{
    Console.WriteLine("語句 1");
}
else if (sad == 4)
{
    Console.WriteLine("語句 2");
}
else
{
    Console.WriteLine("語句 3");
}
```

![alt text height="600px" width="70%"](../media/if-three.png "If-else 三個條件的情形")

您也可以將 `if` 語句放入其他 `if` 語句中，產生一些有趣的行為：

```csharp
var num1 = 10;
var num2 = 20;
if (num1 < num2)
{
    if (num2 < 30)
    {
        Console.WriteLine("你好！");
    }
    else
    {
        Console.WriteLine("Hola！");
    }
}
```

![alt text height="600px" width="70%"](../media/if-nested.png "If-else 巢狀結構")

{{% notice tip %}}

## 一起動手

我們來寫一個程式，首先在主控台中列印以下內容：

```
寫程式好玩嗎？
```

隨後，主控台會等待使用者的輸入。

- 如果使用者輸入 yes，電腦會列印出 `是的，很高興你喜歡！`。
- 如果使用者輸入 no，電腦會列印出 `噢，不，太可惜了！`。
- 否則，電腦會列印出：`我聽不懂你說的！再見！`。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="If-else statements - .NET Fiddle editor" frameborder="0"></iframe>

{{% /notice %}}

{{% notice info %}}

## 趣聞：Switch 語句

使用許多的 `if` 和 `else` 語句可能變得很冗長和令人困惑。如果您想要將單個變數與多個值進行比較，您可以改用 `switch` 語句。例如，可以使用以下程式碼片段完成 **一起動手** 活動：

```csharp
    var input = Console.ReadLine();
    switch (input)
    {
        case "yes":
            Console.WriteLine("是的，很高興你喜歡！");
            break;
        case "no":
            Console.WriteLine("噢，不，太可惜了！");
            break;
        default:
            Console.WriteLine("我聽不懂你說的！再見！");
            break;
    }
```

每個情況（case）都代表變數 `input` 可能取得的一個值。請確保使用 `break` 語句來通知電腦該情況相關的所有動作已完成。

{{% /notice %}}