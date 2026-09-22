````
---
title: "Methods"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

## Stacks

堆疊與佇列類似。唯一的不同在於方法名稱以及我們取回項目的方式。

在建立堆疊之前，我們需要 `import` 堆疊類別。為了方便，我們可以使用 `*` 一次匯入函式庫中的所有類別。如下所示：

```js javascript
// 這將匯入堆疊以及其他類別
import java.util.*;
```
堆疊中有多種方法可以使用。如果你有興趣，可以在網路上搜尋更多關於這些方法的資訊。不過，目前我們只會解釋幾個最重要的方法：`push()`、`peek()` 和 `pop()`。

<hr>

## 建立堆疊
    
```js javascript
Stack driver = new Stack();
```

<hr>

## 新增元素

為了新增元素到堆疊，我們可以使用 `push()` 方法。此 `push()` 操作將元素放在堆疊的頂部。

```js javascript
push(1);
push(2);
push(3);

// 創建一個包含 [3, 2, 1] 元素的堆疊
```

<hr>

## 訪問元素

若要取回或讀取堆疊的第一個元素，或者是位於堆疊頂部的元素，我們可以使用 `peek()` 方法。被取回的元素不會從堆疊中刪除或移除。

```js javascript
stack.peek();

// 返回 3
// 堆疊包含 [3, 2, 1]
```

<hr>

## 移除元素 

若要從堆疊中移除一個元素，我們可以使用 `pop()` 方法。此操作會將頂部的元素彈出並從堆疊中移除。

```js javascript
stack.pop();

// 返回 3
// 堆疊包含 [2, 1]
```

<hr>

了解這三個方法後，我們可以看一個完整的範例。

```js javascript
import java.util.*;
public class Driver {
    public static void main(String []args) {
        // 預設初始化堆疊 
        Stack stack = new Stack(); 
  
        // 壓入元素 
        stack.push("Burger King"); 
        stack.push("Subway"); 
        stack.push("Jack in the Box"); 
  
        // 列印堆疊元素 
        System.out.println(stack); 
    }
}
```

輸出：

```js javascript
["Jack in the Box", "Subway", "Burger King"]
```
````