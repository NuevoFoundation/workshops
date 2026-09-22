```markdown
---
title: "物件與類別"
description: "介紹 Java 中的物件與類別。"
date: 2021-10-13T00:00:00Z
weight: 7
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ejXgw0qchDg" title="Java objects and classes video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 什麼是物件與類別？

物件是一個具有特定特徵並可以執行某些任務的事物（名詞）。類別是這個物件的藍圖或定義。

例如，我們可以看一個人作為類別。一個人有某些特徵，可以區分他和其他人。例如，眼睛是藍色的，年齡是 30 歲等等。此外，一個人還可以執行某些任務，例如行走或者說話等等。

Java 中的物件是 Java 類別的一個實例。在這個實例中，“Bea”是一個“人”。“Bea”有棕色眼睛，這是“Bea”的屬性（或者數據欄位）。同樣，“Bea”可以說英語，也可以說西班牙語，這些是“Bea”可以執行的方法。

## 如何建立一個類別？

Java 是一種<b>面向物件</b>的程式語言，這意味著 Java 中的所有事物都與一個<b>物件</b>和一個<b>類別</b>有關（類別即物件的藍圖）。

首先，我們在活動 1 中用來打印陳述的那行程式碼其實是一個從預定義類別 `System` 中調用的方法。

```java
System.out.println("Hello World");
```

1. `System` 是一個處理使用者輸入和輸出的類別。
2. `out` 是類別 `System` 中的變數，屬於類別/類型 `PrintStream`。
3. `println()` 是在類別 `PrintStream` 中定義的方法。

<br />

另一個我們在之前的活動中接觸過的類別是 `String`。`String` 類別定義了一套規則，說明字符串（字符列表）應如何運作。

以下的程式碼行中，我們使用 `String` 類別定義的規則，創建了一個名為 `name` 的 `String` 物件：

```java
String name = "Patrick";
```

<br />

`System`、`PrintStream` 和 `String` 是 Java 中的預定義類別。然而，我們不限於使用這些預定義類別，我們實際上可以自己撰寫類別來創建自定義數據類型！這對程式設計人員來說非常有用，可以創造具有特定屬性和行為的物件。擁有這些自定義類型使我們能夠建立獨特的程式。

接下來我們將學習類別中的不同部分：

{{% notice note %}}
### 類別
類別是一種新型物件的藍圖或原型。一般而言，類別包含三個重要部分：(1)數據欄位/實例變數 (2)構造函數 (3)方法。

<img src="../images/class.png" height="400" alt="物件的類別藍圖包含實例變數/數據欄位（即物件的屬性）、構造函數（用於創建類別物件的方法）以及方法（物件的行為）。"/> 

**元素** | **描述** | **範例**
---|---|---
**數據欄位/實例變數** | 描述這個類別的物件可訪問的變數 | Person 類別的實例包含欄位 eyeColor, age, height。
**構造函數** | 創建此類別物件時被調用的方法 | 每個類別可以有多個構造函數
**方法** | 此類別的物件可以調用的方法，用於執行特定任務 | Person 類別的方法包含 talk 和 walk。

例如：

```java
public class SampleClass{
    // (1) 數據欄位/實例變數
    private String name; // 範例

    // (2) 構造函數
    public SampleClass(){
        name = "example";
    }
    // (3) 方法
    public sampleMethod(){}
}
```

{{% /notice %}}

## 試試看 🐥！

讓我們創建一個 `Bird` 類別來代表 Patrick 🐥 和他的所有鳥類朋友！按照以下步驟完成此操作。
**注意：** 在這次練習中，你將在 Bird.java 而不是 Main.java 中工作。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsBird" target="_blank">啟動 Replit</a>

### 首先，我們以 `public` `class` `name` 格式定義類別名稱。

```java
public class Bird{}
```

<br />

### 其次，讓我們宣告 Bird 類別中的所有欄位：species, name, hobby, age, loveMusic。

每個欄位以以下格式宣告：`private` `數據類型` `名稱` `;`。

1. 我們在類別 `Bird` 中將這五個欄位都宣告為 `private`，這對像保證這些數據只能在此類別內部訪問。

2. 我們確定每個欄位的適當類型：

- `species` 應該是 `String`，例如："duck"，"swan"，"owl"。
- `name` 應該是 `String`，例如："Patrick"。
- `hobby` 應該是 `String`，例如："play basketball"。
- `age` 應該是 `int`，例如：25。
- `loveMusic` 應該是 `boolean`，儲存 true 或 false。

例如，要在 Bird 類別中宣告 `species` 作為一個 private 欄位，你可以寫 `private String species;` 。

3. 完成創建 Bird 類別中的其他 4 個欄位