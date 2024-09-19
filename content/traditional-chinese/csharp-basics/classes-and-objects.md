```markdown
---
title: "Classes and Objects"
description: "Introduce classes and objects in C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## 什麼是物件及類別？

物件是一種具有特定特徵並能執行某些任務的東西（名詞）。類別則是在創建物件時的藍圖或定義。

例如，一個人就是一種類別。人擁有某些特徵，可以與另一個人區別開來。例如，它可能有藍色的眼睛，可能是15歲等。人也可以執行某些任務，例如行走和交談。

C# 中的物件是 C# 類別的一個實例。在這個例子中，“Bea” 是一個“人”。“Bea” 有褐色的眼睛，這是一個屬性（或資料欄位）。“Bea” 可以說英語，也會西班牙語，這些是“Bea” 可以執行的方法。

## 創建類別！

C# 是一種**面向物件**的程式語言，這意味著 C# 中的所有東西都與**物件**和**類別**（物件的藍圖）相關。

首先，我們從活動1中用來打印語句的代碼行實際上是一個從名為 `System` 的預定義類別調用的方法！

```csharp
Console.WriteLine("Hello World");
```

1. `Console` 是處理用戶輸入和輸出的類別。
3. `WriteLine()` 是在 `Console` 類別中定義的方法。

在前面的練習中，我們互動過的另一個內建類別是 `string`。`string` 類別定義了字元列表應如何運行的一組規則。

使用以下代碼行，我們創建了一個名為 `name` 的 `string` 物件，使用 `string` 類別中定義的規則：

```csharp
string name = "Patrick";
```

`Console` 和 `string` 是 C# 中的預定義類別。不過，我們不限於這些預定義類別，我們實際上可以通過編寫類別來創建自己的資料類型！這對於開發人員創建具有特定屬性和行為的物件非常有用。訪問這些用戶定義的類型可以讓我們構建獨特的程式。

讓我們學習下一個類別中的不同部分：

{{% notice note %}}
### 類別
類別是新型物件的藍圖或原型。一般來說，類別包含三個重要部分：

<img src="../images/class.png" height="400" alt="類別藍圖包含實例變數/資料欄位、構造函數和方法。"/>

**元素** | **描述** | **示例**
---|---|---
**資料欄位/實例變數** | 描述該物件的變數 | 例如，一個人類別可以有眼睛顏色、年齡、身高等欄位。
**構造函數** | 該類別中創建物件時自動調用的方法，構造函數與類別同名 | 每個類別可以有多個構造函數
**方法** | 該類別中物件可以執行的任務 | 人類別可以有談話和行走的方法。

例如：

```csharp
public class Person{
    // (1) 資料欄位/實例變數
    private String name; // 範例
    private int age;
    private int height;

    // (2) 構造函數 - 構造函數與類別同名
    public Person()
    {
        name = "Bea";
        age = 29;
        height = 167;
    }

    // (2) 構造函數 - 可以有多個構造函數
    public Person( String nameInput, int ageInput, int heightInput)
    {
        name = nameInput;
        age = ageInput;
        height = heightInput;
    }

    // (3) 方法
    public void talk()
    {
        Console.WriteLine($"Hello from {name}");
    }
}
```
{{% /