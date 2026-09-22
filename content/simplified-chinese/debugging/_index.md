---
title: "C: 调试过程"
description: "程序调试入门"
date: 2026-04-25T00:00:00-07:00
prereq: "C"
icon: ""
draft: false
alwaysopen: false
language: "c"
topics: ["编程基础"]
difficulties: ["中级"]
---

## 介绍

那么，你已经学会了一门编程语言的基础知识。你可能已经掌握了打印`“Hello World”`的艺术，并且要么开始了一个个人项目，要么通过了足够多的教程，可以将一个想法转化为代码。

但是，当你的代码无法编译时会发生什么呢？编程的初学者通常会在网上搜索，看看是否其他人遇到了类似的问题。这会有点繁琐，因为每次你遇到一个错误时都需要求助于互联网。

当你的程序能够成功编译但运行结果却不是你所期望的时会发生什么呢？（也就是说，你发现了一个**bug 🪲**）

回过头来修复你的代码可能比写代码本身更具挑战性。学习如何解决这些bug和错误需要技巧、耐心和经验。在这次工作坊中，我们将揭示调试代码的基本过程。请记住，调试是所有编程语言的一部分。

{{% panel theme="info" header="为什么叫它bug？"%}}
最早记录的编程"bug"可以追溯到1947年，当时一只飞蛾（moth）意外地跑到了不该去的地方。请查看<a href="https://education.nationalgeographic.org/resource/worlds-first-computer-bug" target="_blank">《世界上第一个计算机bug》</a>。

{{% /panel %}}

## 关于此次工作坊

本次工作坊假设你已经理解并能够用**C**编程语言编写代码。本次工作坊中使用的数据结构和算法实例通常是在计算机科学入门课程中教授的主题。我们将对其进行简要解释，但这仅仅是作为复习，以便你对示例代码的运行有基本的了解。本次工作坊还假设你已经拥有一个 [Replit](https://replit.com) 账户并熟悉Replit。

## Replit 和命令行

让我们试着用Replit运行一些代码，并熟悉命令行操作。点击下面的“启动Replit”按钮，并复制程序。当Replit程序打开时，打开 **Shell** 标签。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">启动Replit</a>

首先，让我们编译代码。在Shell标签中，输入以下指令并点击**回车键**：

```bash
make HelloWorld
```

在编译代码后，我们需要使用不同的命令来运行它。输入以下指令并点击**回车键**：

```bash
./examples/HelloWorld
```

你应该会在Shell中看到一段`Hello, World!`的文本输出！

{{% panel theme="info" header="为什么要使用命令行？"%}}

对于初学者来说，命令行可能看起来不直观且不够友好。然而，了解如何使用它对你的编程生涯来说是非常重要的。在后续的工作坊中，我们会使用`gdb`和`valgrind`来调试，因此拥有越多的命令行经验对你来说会越有帮助！

所有示例代码都写在一个Replit中。我们会提供所有需要了解的命令来编译和运行它们，因此即使你之前没有使用过命令行，也不必担心。

{{% /panel %}}

## 工作坊内容

{{% children /%}}