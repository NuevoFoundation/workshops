---
title: "操作"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

二維陣列的運作方式與一般陣列非常類似，我們在一般陣列上使用的許多概念或方法，同樣適用於多維陣列。以下是初始化二維陣列並訪問元素的一個簡單回顧範例：

```js javascript
public static void main(String[] args) { 
    int[][] arr = new int[10][20]; 
    arr[0][0] = 1; 
    System.out.println(arr[0][0]); 
} 
    // 輸出 1
```

唯一可能一開始會顯得複雜的部分是如何遍歷二維陣列，但這其實也很簡單。我們不再使用單一的 `for` 循環，而是使用兩個 `for` 循環。以下提供一個簡單的範例來說明原理：

```js javascript
public static void main(String[] args) { 
    int[][] arr = new int[10][20]; 
    int num = 0;

    // 遍歷由多個陣列組成的二維陣列
    for (int i = 0; i < arr.length; i++) {

        // 遍歷二維陣列中的個別陣列
        for (int j = 0; j < arr[i].length; j++) {

            // 訪問個別值
            arr[i][j] = num;
            num++;
        }
    }
} 
```

如你所見，這裡建立了一個空的陣列 `arr`，其中包含了 `10` 個陣列，而每個陣列分別具有 `20` 個元素。為了遍歷所有的陣列，我們使用標準的 `for` 循環，就像處理一般的一維陣列一樣。然而，主要的差別在於我們現在需要額外加入一個內部的 `for` 循環，用以遍歷第 `i` 個陣列。在這個範例中，我們簡單地將 `arr[i][j]` 設為 `num`，然後執行 `num++`。