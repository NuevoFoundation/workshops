---
title: "數據結構 (Array 與 ArrayList)"
description: "介紹 Java 中的基本數據結構。"
date: 2021-10-13T00:00:00Z
weight: 8
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/x2hcvJjiH_g" title="Java arrays and ArrayLists video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

在之前的練習中，我們學到了變數允許我們存取和存儲一個單一的數據。但，如果我們想要存儲一組類似的數據呢？是否有更好的方法可以組織這些數據，而不需要宣告多個變數？

在程式設計中，**數據結構**是讓程式設計師能夠存儲多個相同類型數據的工具。使用數據結構是一種高效的方式來存儲和存取大量數據。在這個練習中，我們將學習 Java 中的兩種數據結構：**Array** 和 **ArrayList**。

雖然 Array 是固定長度的數據結構，ArrayList 則是可變長度的，因此您可以改變數據結構的大小。我們先來看看 Array！

## Array

假設我們要存儲 Patrick 🐥 最喜歡的 5 部電影。與其創建 5 個變數，我們可以將這 5 個數據存儲在一個數組中，這就是我們的第一種數據結構！

要將數據存儲在數組中，我們需要執行以下步驟：

1. 首先，我們透過指定數據類型以及容量（數據的數量）來宣告一個數組。

```java
String topMovies[] = new String[5]; // 建立一個大小為 5 的字符串數組。
```

2. 我們遍歷（iterate）數組（遍歷數據的位置）並將數據分別放入數組中的位置。

注意，我們使用數組名稱加索引來訪問數據（`0` 表示第一個元素，`1` 表示第二個...）。
```java
topMovies[0] = "Birds Of Prey";
topMovies[1] = "The Birds";
topMovies[2] = "Angry Birds";
topMovies[3] = "Bird Box";
topMovies[4] = "The Secret Life of Pets";
// 數組 topMovies 現在依序存放了 "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"
```
{{% notice info %}}
### 為什麼 Java 中的數組索引為 0 開始？

當我們想要存取數組中的第一個元素時，非常容易且直觀地認為應該從索引 1 開始。

然而，當電腦讀到 `arr[1]` 時，其實不是取得 `arr` 的第 `1` 個元素。

它實際上是將 `arr[1]` 解析為從數組起始位置 `1` 距離的元素。

換句話說，索引實際上是一個記憶體的偏移量（memory offset）。要存取第一個元素，我們應該存取從起始位置偏移為 `0` 的元素（即 `arr[0]`）。
{{% /notice %}}

{{% notice tip %}}
### 創建數組的另一種方式：
如果我們事先就知道數組中的所有數據，則可以用一行代碼通過在 `{` 和 `}` 中列出所有數據來創建數組。

例如：

```java
String topMovies[] = {"Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"};
```

就像我們使用索引初始化數據一樣，我們也可以用索引存取或修改每一個數據。

例如：

```java
String movie1 = topMovies[0]; // movie1 的值是 "Birds Of Prey"
```

{{% /notice %}}

在創建數組之後，通常有必要知道數組中有多少個元素（例如要存取數組中的最後一個元素時）。我們可以透過數組的 `length` 屬性來獲取數組中的元素數量，方法是輸入 `array_name.length`。

例如：

```java
int numOfMovie = topMovies.length; // numOfMovie 的值為 5
```

<br/>

### 練習：撰寫一個方法 `printArr()`，接收一個數組作為輸入並依序打印該數組中的所有元素  
（提示：利用 for 迴圈和 `.length` 幫助實現）。

點擊 `Run` 後，程式應打印如下內容：

```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsArray" target="_blank">啟動 Replit</a>

## ArrayList

ArrayList 是 Java 中另一個流行的數據結構。`ArrayList` 是一個基於數組實現的類。它和數組類似，用戶可以通過索引來存取、存儲和修改數據。

您可以通過指定名稱以及使用 `<` 和 `>` 表明數據的類型來創建一個 ArrayList。
例如：

```java
ArrayList<String> topMoviesList = new ArrayList<String>();
```

要新增元素，我們可以在 ArrayList 上調用 `add()` 方法。
例如：

```java
topMoviesList.add("Birds Of Prey");
topMoviesList.add("The Birds");
topMoviesList.add("Angry Birds");
topMoviesList.add("Bird Box");
topMoviesList.add("The Secret Life of Pets");
// ArrayList 現在依序存放 "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"
```

要存取特定索引位置的元素，我們需要調用 `get()` 方法。注意，Java 使用從 0 開始的索引，因此，如果想要取得 ArrayList 中的第一個元素，我們需要執行 `get(0)` 方法。
例如：

```java
String movie1 = topMoviesList.get(0); // movie1