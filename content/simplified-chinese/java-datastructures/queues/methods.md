---
title: "方法"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---
## 优先队列

`PriorityQueue`（优先队列）被用来在需要根据优先级处理对象的场景中使用。在这种情况下，我们希望根据客户等待的时间来对队列进行排序。众所周知，队列遵循“先进先出”的算法，但有时需要根据优先级处理队列中的元素，这种情况下就需要用到 `PriorityQueue`。`PriorityQueue` 基于优先级堆。优先队列的元素可以按照自然排序顺序排列，也可以按照队列构造时提供的比较器（Comparator）排序，具体取决于所使用的构造函数。

在创建队列之前，我们需要 `import` （引入）`PriorityQueue` 类。为了简化操作，我们可以使用 `*` 来导入库中的所有类。代码看起来像这样：

```js javascript
// 导入 PriorityQueue 和其他类
import java.util.*;
```

优先队列中有许多可用的方法，如果感兴趣，你可以自己搜索这些方法。然而，我们只讨论最重要的方法：`add()`、`peek()` 和 `poll()`。

<hr>

## 创建优先队列

```js javascript
Queue<Integer> orders = new PriorityQueue<>();
```

有多种方法可以对优先队列进行排序，具体如何实现由你决定。

<hr>

## 添加元素

可以使用 `add()` 方法向队列中添加元素。`PriorityQueue` 会自动为你对元素进行排序。默认情况下，这种排序是基于对象的自然顺序的，但你可以根据需求对其进行更改。

```js javascript
add(1);
add(2);
add(3);

// 创建一个包含元素 [1, 2, 3] 的队列
```

<hr>

## 访问元素

`peek()` 方法会返回队列顶部的元素，但不会移除它。

```js javascript
queue.peek();

// 返回 1
// 队列包含 [1, 2, 3]
```

<hr>

## 移除元素

`poll()` 方法会返回队列顶部的元素并将其移除。

```js javascript
queue.poll();

// 返回 1
// 队列包含 [2, 3]
```

<hr>

理解了这三个方法后，我们来看一个示例。

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // 主方法
    public static void main(String args[]) {
        // 创建空优先队列
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>();
 
        // 使用 add() 方法向 pQueue 添加元素
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // 打印优先队列的顶部元素
        System.out.println(pQueue.peek());
 
        // 打印优先队列的顶部元素并从队列中移除
        System.out.println(pQueue.poll());
 
        // 再次打印优先队列的顶部元素
        System.out.println(pQueue.peek());
    }
}
```

假设我们有三个顾客，等待时间分别是 `10`、`30` 和 `60`。你认为编译器会输出什么？

让我们试着分析一下代码。第一行我们调用了 `pQueue.peek()`。`peek()` 做什么？它只是简单地返回顶部的元素。那么顶部的元素是什么呢？由于已经排序，它应当打印最小的元素，也就是 `10`。

那么 `pQueue.poll()` 呢？它应该与之前的 `peek` 方法一样返回顶部的元素，但这次它会将顶部的元素从队列中移除，也就是 `10` 被移除。

当我们再次调用 `peek()` 时会发生什么？由于 `10` 已经不存在，顶部元素现在变成了 `30`。

因此，最终输出可能如下：

```js javascript
10
10
30
```

等等？我们不是希望让等待时间最长的人排在队列的顶部吗？看起来队列默认是将最小的元素排在最前面，而我们实际上想要的是最大的元素。要实现这一目标，我们只需在实例化队列时稍作修改。`Collections.reverseOrder()` 会简单地将队列的顺序反转。像这样！

```js javascript
PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
```

这样我们的实现就没问题了。

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // 主方法
    public static void main(String args[]) {
        // 创建空优先队列
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
 
        // 使用 add() 方法向 pQueue 添加元素
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // 打印优先队列的顶部元素
        System.out.println(pQueue.peek());
 
        // 打印优先队列的顶部元素并从队列中移除
        System.out.println(pQueue.poll());
 
        // 再次打印优先队列的顶部元素
        System.out.println(pQueue.peek());
    }
}
```

检查问题：现在这个 `pQueue` 会输出什么？

答案：
```js javascript
60
60
30
```