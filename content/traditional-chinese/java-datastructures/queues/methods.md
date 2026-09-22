---
title: "Methods"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 
## 優先佇列

`PriorityQueue`（優先佇列）是用於當物件需要根據優先級進行處理時的情況。在本例中，我們希望根據客戶等待的時間順序來排序佇列。眾所周知，佇列遵循先入先出的（First-In-First-Out）演算法，但有時佇列中的元素需要根據優先級進行處理，而這正是 `PriorityQueue` 派上用場的時候。`PriorityQueue` 是基於優先堆實現的。優先佇列中的元素是根據其自然順序排序的，或者是在構造佇列時提供的比較器（Comparator）排序，這取決於所使用的構造函數。

在創建佇列之前，我們需要 `import`（導入）`PriorityQueue` 類。為了方便起見，我們可以使用 `*` 來導入庫中的所有類。它看起來像這樣：

```js javascript
// 將導入 PriorityQueue 和其他類
import java.util.*; 
```
使用優先佇列有多種方法，如果你有興趣，可以自行查詢更多的方法。不過，我們現在只介紹三個最重要的方法：`add()`、`peek()` 和 `poll()`。

<hr>

## 創建優先佇列

```js javascript
Queue<Integer> orders = new PriorityQueue<>();
```

有多種方式來給優先佇列排序，這取決於你想如何實現。

<hr>

## 添加元素

可以使用 `add()` 方法向佇列添加元素。`PriorityQueue` 將自動為你排序。默認情況下，它是根據對象的自然順序排序，但你可以根據自己的需求進行更改。

```js javascript
add(1);
add(2);
add(3);

// 創建一個包含元素 [1, 2, 3] 的佇列
```

<hr>

## 訪問元素

`peek()` 方法會返回佇列頂部的元素，但不會移除它。

```js javascript
queue.peek();

// 返回 1
// 佇列內容為 [1, 2, 3]
```

<hr>

## 移除元素

`poll()` 方法會返回佇列頂部的元素，並且將其從佇列中移除。

```js javascript
queue.poll();

// 返回 1
// 佇列內容為 [2, 3]
```

<hr>

了解這三個方法後，讓我們來看一個範例。

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // 主方法
    public static void main(String args[]) {
        // 創建空的優先佇列
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>();
 
        // 使用 add() 方法向 pQueue 添加元素
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // 打印 PriorityQueue 的頂部元素
        System.out.println(pQueue.peek());
 
        // 打印頂部元素並將其從 PriorityQueue 中移除
        System.out.println(pQueue.poll());
 
        // 再次打印頂部元素
        System.out.println(pQueue.peek());
    }
}
```

我們有三位客戶，他們的等待時間分別為 `10`、`30` 和 `60`。你認為編譯器會輸出什麼呢？

讓我們稍微分析一下這段程式碼。第一行我們調用 `pQueue.peek()`。`peek()` 會做什麼呢？`peek()` 僅返回佇列頂部的元素。頂部是什麼？由於它已經排序，因此應該返回最小的元素，也就是 `10`。

那麼 `pQueue.poll()` 呢？它執行的操作和剛才的 `peek()` 一樣，但是它會移除佇列頂部的元素，也就是 `10`。

如果我們再次調用 `peek()` 會怎樣？由於 `10` 已經不存在了，它將返回 `30`。

所以最終的輸出應該是這樣的：

```js javascript
10
10
30
```

等等？我們希望等待時間最長的人首先出現在佇列頂部？看起來佇列是先輸出了最小的元素，但我們實際需要的是最大的元素。為了實現這點，我們只需要稍微改變一下佇列的實例化方式。`Collections.reverseOrder()` 方法會將佇列的順序反轉。像這樣！

```js javascript
PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
```

現在我們的實現應該正確了。

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // 主方法
    public static void main(String args[]) {
        // 創建空的優先佇列
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
 
        // 使用 add() 方法向 pQueue 添加元素
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // 打印 PriorityQueue 的頂部元素
        System.out.println(pQueue.peek());
 
        // 打印頂部元素並將其從 PriorityQueue 中移除
        System.out.println(pQueue.poll());
 
        // 再次打印頂部元素
        System.out.println(pQueue.peek());
    }
}
```

檢查問題：現在這個 `pQueue` 的輸出會是什麼？

答案：
```js javascript
60
60
30
```