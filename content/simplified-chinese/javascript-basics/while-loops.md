```markdown
---
title: "While Loops"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 3
---

`while` 循环是一种代码结构，它会在某个条件为真时持续执行一些操作。我们以关键字 `while` 开始，而它后面是用括号 `()` 包裹的条件表达式，当条件为真时执行动作，再将需要执行的动作放到大括号 `{}` 内。以下是基本设置：

```javascript
// While 循环设置
while (条件为真) {
  // 需要执行的动作
}
```

现在让我们看一些例子！

## 示例
假设我们想要创建一个循环运行8次。
  
```javascript
// 运行8次的示例
let i = 0; // 设置一个计数器变量
while (i < 8) {
  i++; // 进入下一次循环（使循环再次执行此部分）
}
```

条件也可以是一个表达式，例如布尔值（true/false）。例如，假设我们想要查看视频中的不同评论，直到查看完所有评论。为此，我们在 `while` 循环中需要使用多个变量（可以忽略那些复杂的节点词汇）。

```javascript
const commentIterator = video.createNodeIterator(video, NodeFilter.SHOW_COMMENT) // 这是一种从一个评论移动到下一个评论的方式
let currentComment; // 这是占位符，用来存储当前评论


// 这个 while 循环将在有 "nextNode"（意即还有下一个评论）时继续循环
while (currentComment = commentIterator.nextNode()) {
  console.log(currentComment.textContent.trim()); // 这会打印当前评论的内容让我们可以阅读！
}
```
```