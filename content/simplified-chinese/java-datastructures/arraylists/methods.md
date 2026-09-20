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
        // 这会将第一个元素（Chicken Nugget）替换为 Coke
    }
}
```
通过使用 `set()`，你可以将指定索引位置的元素设置为新的元素。

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
        // 从 ArrayList 中移除 Fries
    }
}
```
与 `set()` 类似，`remove()` 方法用于移除特定索引位置的元素。

<hr>

## 获取 ArrayList 的大小

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.size());
        // 输出 ArrayList 的大小，在本例中为：3
    }
}
```
`size()` 返回 `ArrayList` 的大小。

<hr>

## 遍历元素

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
        // 输出：
        // Whopper
        // Chicken Nugget
        // Fries
    }
}
```

通过结合使用 `for` 循环和 `get` 方法，可以遍历 `ArrayList` 并打印每个索引位置的元素。