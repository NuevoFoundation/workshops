---
title: "Introduction"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 1
--- 

樹是由兩個組成部分構成的：**邊（Edges）** 和 **節點（Nodes）**。讓我們更深入地看一下這兩個組成部分。

### 邊（Edges）

您可以將邊想像成連接兩個節點的線。邊總是僅連接兩個節點。邊可以包含一些資訊，但並非一定需要如此。

### 節點（Nodes）

節點是樹上的點，代表某些數據。一棵樹至少需要一個節點，每個節點可以有任意多的邊，只要它與其他不同的節點相連。

### 為什麼是樹？

樹是非常簡單的數據結構，可以儲存大量數據，同時仍然允許快速找到所需數據。許多依賴尋找最佳匹配的算法在搜索前會將數據組織成樹結構，以優化速度。在現實世界中使用樹結構的一些例子包括：  
* <a href="https://en.wikipedia.org/wiki/Spanning_Tree_Protocol" target="_blank">生成樹協議（Spanning Tree Protocol）</a> - 使用互聯網的基礎協議，  
* <a href="https://en.wikipedia.org/wiki/Binary_search_algorithm" target="_blank">二分搜尋（Binary Search）</a> - 高效從已排序集合中查找數據的算法之一，  
* <a href="https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html" target="_blank">TreeMaps</a> - Java 中使用樹來組織數據的 HashMap 數據結構的姊妹版

某些樹具有關於如何添加數據以及如何維護樹內數據的更具體的規則，這意味著幾乎總能找到適合任何場景的樹。

## 視覺化樹

樹結構有一個**根節點（root node）**，即所有其他節點直接或間接相連的節點。我們之所以稱之為樹結構，是因為節點會從根節點分支出來。當您看到樹的圖示時，通常會看到根節點在頂部，但並不一定總是如此！

![image](../img/tree.png)