---
title: "While Loops"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 3
---

`while` 循环就是在条件是真时执行一系列操作的代码段。我们从 `while` 这个词开始，后跟在括号 `()` 中为真的条件，然后将要执行的操作放在大括号 `{}` 中。设置如下：

```javascript
// While 循环设置
while (条件是真) {
  // 要执行的操作
}
```

现在让我们看看一些例子！

## 示例

假设我们想创建一个运行8次的循环。

```javascript
// 8次循环示例
let i = 0; // 设置一个计数器变量
while (i < 8) {
  i++; // 进入循环的下一个迭代（让循环再次运行这个部分）
}
```

条件也可以是一个语句，比如一个布尔值（真/假）。例如，假设我们想要阅读视频上的不同评论，直到我们读完所有评论。要在 `while` 循环中实现这一点，我们需要几个不同的变量（可以忽略高深的节点词汇）。

```javascript
const commentIterator = video.createNodeIterator(video, NodeFilter.SHOW_COMMENT) // 这是在视频上从一个评论移动到下一个评论的方法
let currentComment; // 这是当前评论的占位符

// 当存在 "nextNode" 时，这个 while 循环会继续循环，也就是说在这个之后有另一个评论
while (currentComment = commentIterator.nextNode()) {
  console.log(currentComment.textContent.trim()); // 这会打印出当前评论以便我们阅读！
}
```