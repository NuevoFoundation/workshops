```yaml
---
title: "類別與物件"
description: "介紹 C# 中的類別與物件。"
date: 2024-09-16T00:00:00Z
weight: 8
---

## 什麼是物件？什麼是類別？

物件是一個具有某些特徵並能執行特定任務的事物（名詞）。類別則是定義物件的藍圖或範本。

舉例來說，人（Person）是一種類別。人可以具有某些特徵來區分彼此，例如藍眼睛，15歲等等。人也可以執行某些任務，例如走路、說話等等。

C# 的物件是 C# 類別的實例。舉例來說，「Bea」是一個「人」。Bea 有棕色的眼睛，這是一個屬性（或數據字段）。Bea 可以用英語說話，她也可以用西班牙語說話，這些都是 Bea 能執行的方法。

## 創建一個類別！

C# 是一種**面向物件**的程式語言，這意味著 C# 中的一切都與**物件**和**類別**（即物件的藍圖）有關。

對於初學者來說，我們在活動 1 中使用的用於列印語句的程式碼行，其實是從一個預定義類別 `System` 進行的方法呼叫！

```csharp
Console.WriteLine("Hello World");
```

1. `Console` 是一個處理用戶輸入和輸出的類別。
2. `WriteLine()` 是在類別 `Console` 中定義的方法。

在前面的練習中，我們還接觸過另一個內建類別：`string`。`string` 類別定義了一組關於如何操作字符列表的規範。

在下面的程式碼中，我們使用了 `string` 類別定義的規則來創建一個名為 `name` 的 `string` 物件：

```csharp
string name = "Patrick";
```

`Console` 和 `string` 是 C# 中的預定義類別。然而，我們不受限於這些預定義的類別，實際上我們可以通過撰寫自己的類別創建自定義的數據型別！這對於程式設計員來說非常有用，可以用來建立特定屬性和行為的物件類型。有了這些自定義型別的訪問權限，我們可以構建獨特的程式。

讓我們來學習類別的不同部分吧！

{{% notice note %}}
### 類別
類別是一種新型物件的藍圖或範本。一般來說，類別包含三個重要的部分：

<img src="../images/class.png" height="400" alt="一個類別的藍圖包含物件的實例變數/數據字段（描述物件的數據/屬性）、構造函數（創建該類別物件的方法）、以及物件的行為方法。" />

**元素** | **描述** | **範例**
---|---|---
**數據字段/實例變數** | 該類別的物件可以訪問的，描述該物件的變數 | 例如，一個人（Person）類別可以有屬性：眼睛顏色（eyeColor）、年齡（age）、身高（height）。
**構造函數** | 當該類別的物件被創建時自動呼叫的方法，構造函數與類別名稱相同 | 每個類別可以有多個構造函數
**方法** | 該類別物件用於執行某些任務的方法 | 人（Person）類別可以有說話（talk）和走路（walk）的方法。

範例：

```csharp
public class Person{
    // (1) 數據字段/實例變數
    private String name; // 範例
    private int age;
    private int height;

    // (2) 構造函數 - 構造函數名稱與類別相同
    public Person()
    {
        name = "Bea";
        age = 29;
        height = 167;
    }

    // (2) 構造函數 - 一個類別可以有多個構造函數
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

{{% /notice %}}

## 試一試 🐥！

讓我們通過以下步驟創建一個代表 Patrick 🐥 和他的鳥類朋友的 `Bird` 類別！

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/OH5XQO" title="互動式 C# 鳥類類別練習" frameborder="0"></iframe>

### 首先，我們用以下格式定義類別名稱：`public` `class` `名稱`。

```csharp
public class Bird{}
```

<br />

### 第二，我們來聲明 Bird 類別的所有字段：species、name、hobby、age、loveMusic。

每個字段按照以下格式聲明：`訪問修飾符` `數據型別` `名稱` `;`。

1. 我們將這 5 個字段都聲明為類別 `Bird` 中的 `private`。這確保這些字段只能在這個類別內部訪問。

2. 讓我們來確定每個字段的適當型別：

- `species` 應為 `String`，例如「duck（鴨）」、「swan（天鵝）」、「owl（貓頭鷹）」。
- `name` 應為 `String`，例如「Patrick」。
- `hobby` 應為 `String`，例如「play basketball（打籃球）」。
- `age` 應為 `int`，例如 25。
- `loveMusic` 應為 `bool`，儲存 true 或 false。

例如，要將 `species` 聲明為類別 `Bird` 的私有字段，可以寫 `private String species;`。

3. 完成建立