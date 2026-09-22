---
title: "方法"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

## 修改元素

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.set(1, "Coke");
        // 這將第一個元素（雞塊）改成可樂
    }
}
```
使用 `set()` 方法，可以將指定索引位置的元素替換為新元素。

<hr>

## 移除元素

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.remove(2);
        // 從 ArrayList 中移除薯條
    }
}
```
與 `set()` 類似，`remove()` 方法可以移除指定索引位置的元素。

<hr>

## 獲取 ArrayList 的大小

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.size());
        // 輸出 ArrayList 的大小，在這種情況下為: 3
    }
}
```
`size()` 方法返回 `ArrayList` 的大小。

<hr>

## 遍歷元素

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        for (int i = 0; i < order.size(); i++) {
            System.out.println(order.get(i));
        }
        // 輸出:
        // Whopper
        // Chicken Nugget
        // Fries
    }
}
```

通過結合 `for` 迴圈與 `get` 方法，我們可以遍歷 `ArrayList` 並印出每個索引位置的元素。