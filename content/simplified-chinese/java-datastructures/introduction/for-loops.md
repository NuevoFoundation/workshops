```markdown
---
title: "For Loops"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/QHM7dmhFP64" title="For Loops - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

当您清楚地知道需要循环执行代码块的次数时，请使用 `for` 循环，而不是 `while` 循环：

```java
for (initialization; condition; iteration) {
  // code block to be executed
}
```

- `initialization` 在代码块执行前被执行一次。
- `condition`（顾名思义）定义了执行代码块的条件。
- `iteration` 在代码块每次执行完后都会被执行。

以下示例将打印数字 `0` 到 `4`：

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

- `initialization` 在循环开始之前设置变量 (`int i = 0`)。
- `condition` 定义循环执行的条件 (`i` 必须小于 `5`)。如果条件为 `true`，循环将重新开始；如果条件为 `false`，循环将结束。
- `iteration` 每次循环后增加数值 (`i++`)。

此示例将仅打印 `0` 到 `10` 之间的偶数：

```java
for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}
```
```