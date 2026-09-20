```yaml
---
title: "遍历数组"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 6
---
```

遍历数组中的值并以某种方式处理它们是一个常见的操作。让我们讨论一些实现这一目标的最简单方法：

## Array.forEach()
`forEach()` 方法会为数组中的每个元素调用一个函数（回调函数，在本例中为名为 printBr 的函数）。

传递给 `forEach` 的函数会对数组中的每一项执行一次操作，数组项作为参数传递给该函数。未赋值的元素不会在 `forEach` 循环中被遍历。

**语法：**
```javascript
arrayName.forEach(functionName);
```

<b>示例：</b>
![#Can't find image](../../img/foreach.png)