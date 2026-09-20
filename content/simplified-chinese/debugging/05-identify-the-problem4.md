---
title: "步骤 1 - 找到问题（第 4 部分）"
difficulties: ["中级"]
weight: 6
draft: false
---

## 另一种类型的错误：内存错误

C/C++ 的噩梦，内存错误是最令人沮丧的一类错误之一。如果不修复它们，可能会导致未定义行为（不可复制的错误！）以及内存泄漏。因此，修复它们是重中之重。

{{% notice note %}}

内存泄漏发生在您的程序使用 malloc 或 calloc（或其他内存分配调用）分配内存后，未将其释放的情况下。此时，内存就“丢失”了——在程序终止之前，没有简单的方法可以取回它。

{{% /notice %}}

幸运的是，人们也开发了一些程序帮助查找内存错误，而其中之一就是 `valgrind`。Valgrind 是一个不仅可以定位内存错误，还可以准确显示代码中错误发生位置的工具。让我们使用 valgrind 来查找内存错误发生的位置。以下是一个 C 中向量的简单实现示例，它相当于 C++ 标准库中可以动态调整大小的数组。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">启动 Replit</a>

首先，通过以下命令编译程序：

```bash 
make Vector
``` 

然后运行：

```bash
examples/Vector
```

注意到出现了一个称为“双重释放”的错误！这是一种内存错误，由对同一个指针调用两次 `free` 函数引起。

现在，使用 valgrind 而不是 gdb 来检查内存的分配和使用情况。运行以下指令：

```bash
valgrind --tool=memcheck --leak-check=full examples/Vector
```

可以看到，valgrind 检测到了一些错误，也许与“双重释放”相关（注意底部的 `ERROR SUMMARY` 显示了一些已检测到的错误！）。

让我们来看一下部分错误。

![Valgrind 错误 1](../resources/w4-02.png "控制台错误截图，显示文字 'Invalid read of size 8 at 0x484522D...'")

如上图所示的错误被称为无效读取（invalid read），通常是因为您在另一个代码块中尝试读取已被释放的内存。Valgrind 让您了解这段内存被释放和分配的位置：

![Valgrind 错误 2](../resources/w4-03.png "控制台错误截图，显示文字 'Address 0x4b74040 is 0 bytes inside a block of size 16 free'd...'")

这段内存块是由 `createVectorInt` 中的 `malloc` 函数分配的，这是在 `main` 函数中调用的。随后，这段内存在 `pushBack` 函数中通过 `free` 被释放。

最后，在堆内存摘要中，您可以看到有 96 字节的内存被“丢失”了——换句话说，这是一次内存泄漏。这是由于我们忘记在主函数的末尾调用 `deleteVectorInt` 来释放向量所导致的。

![Valgrind 错误 3](../resources/w4-04.png "控制台错误截图，显示文字 'HEAP SUMMARY: in use at exit: 96 bytes in 2 blocks... 96 bytes in 2 blocks are definitely lost in loss record...'")

Valgrind 提供了丰富的信息，帮助您寻找 C 和 C++ 程序中的内存错误。它不仅告知您错误发生的位置，还会指明内存块的分配以及后续释放的相关信息（对于内存泄漏，指出的是未释放的内存块）。您能找到向量示例中导致无效读取的错误吗？

{{% expand "**点击查看答案**"%}}
请注意，当我们重新分配数组时，我们忘记更新 `list->__arr`！这意味着我们正在对已被释放的指针进行写操作，这就解释了我们在 Valgrind 上看到的无效读写操作，以及双重释放错误（因为我们对已释放的指针再次调用了 free）和内存泄漏（因为我们从未再次引用新分配的数组）的问题！要修复错误，只需将指针设置为更新后的新数组，这样就可以解决问题了。
{{% /expand %}}
<br/>

在练习中，您需要修复出现的任何内存错误。