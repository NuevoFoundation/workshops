```markdown
---
title: "步骤 1 - 找到问题（第 2 部分）"
difficulties: ["中级"]
weight: 4
draft: false
---

## 运行时错误

编译错误是一回事，但**运行时错误和漏洞**是另一回事。虽然编译器可以轻松告诉你在哪儿查找问题，运行时漏洞则来源于程序的执行方式。我们需要了解在出现漏洞时，程序在做什么：
- 使用了哪些变量？
- 被调用的是哪条指令？
- 是否缺失了我们需要的某些语句？

在小型应用程序中，我们可以使用代码中的**打印语句**快速了解程序的运行状态。打印语句是一种快速而简单的方法，用于在程序运行时查看其状态，并且通过运气，你可以轻松发现是什么导致了漏洞。

## 二分搜索

你将学习或已经学习到的较简单的算法之一是**二分搜索**，它可以让你在排序列表中以对数时间查找某个项目。思路是检查排序列表的中间元素，看看它是否与我们想要的元素匹配；如果找到目标元素，算法就完成了。如果目标元素更大，我们搜索列表的上半部分；否则，我们搜索下半部分。这个过程重复进行，直到我们找到要查找的元素。

|![在一个有序的 10 个数字的列表中使用二分搜索寻找数字 7](../resources/binary_search.svg "一个树状图展示了使用二分搜索在有序的 1 到 10 数字列表中寻找数字 7 的过程")|
|:--:|
|在一个有序的 **10** 个数字的列表中使用二分搜索寻找数字 **7**|

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">启动 Replit</a>

我们的程序会要求你根据位置查找一个名字。

在 Replit 程序中打开 **Shell** 并编译程序：
``` bash
make BinarySearch
```

像这样运行程序：
``` bash
./examples/BinarySearch
```

你应该会看到一个名字列表及其对应的编号。在提示符中输入 `6` 并按回车以搜索 Emily。

|![搜索 Amy](../resources/debugging_process_searching_for_amy.svg "一个控制台截图，显示了一个名字列表及其对应的编号。其中 '编号：5, 姓名：Amy' 被高亮显示。")|
|:--:|
|正在搜索 Amy。|

现在再次运行程序并搜索 `Ramona` 的编号。程序崩溃，并出现 `Segmentation fault (core dumped)` 的消息！😮

面对这样的情况时，你应该问自己，这个漏洞的行为是怎样的？
分段错误通常是以下问题之一导致的：
- 访问数组越界。
- 解引用一个 NULL 指针。
- 内存/栈溢出。

更多信息参考 [C 语言中分段错误的常见原因列表](https://www.tutorialspoint.com/List-of-Common-Reasons-for-Segmentation-Faults-in-C-Cplusplus#:~:text=List%20of%20Common%20Reasons%20for%20Segmentation%20Faults%20in,7%20Stack%20overflow%208%20Writing%20to%20read-only%20memory)。

让我们看看实现二分搜索的代码：

1. `binary_search()` 函数接受三个参数：元素数组、数组长度和我们要查找的数字。然后它调用递归函数 `rbin_search()`。

2. `rbin_search()` 使用递归方式执行二分搜索，返回找到的元素索引。如果未找到，则返回 `-1`。

一个**递归函数**通过调用自身将一个问题分解为多个小问题，从而使问题更易于通过一组**基准情况**来处理。如果递归函数无法终止，通常是由于以下问题之一：

1. 基准情况不完整。
2. 递归调用的设置方式有误。

让我们开始调试吧！

## 使用打印语句

在代码中放置 `print` 语句是一种脏招，但有时却很有效，用于了解代码是否按预期工作。通过在 `rbin_search()` 中放置打印语句，检查它是否正常工作，看一看值的变化。

{{% expand "***提示 1：是什么使我们要解决的问题变得更小？***" %}} 
- 尝试在 `rbinary_search` 函数的 `middle` 变量之后放置打印语句，观察 `lo`、`hi` 和 `middle` 值的变化。尝试进行一次搜索。
|![在代码中放置打印语句以检测值 "lo"、"hi" 和 "middle"。](../resources/debugging_process_print_statement.svg "代码截图，展示在第 17 行添加了打印语句。该打印语句输出了 'lo'、'hi' 和 'middle' 的值。")|
|:--:|
|在代码中放置打印语句以检测值 `lo`、`hi` 和 `middle`。|

- 注意打印出的这些值。
{{% /expand %}}

{{% expand "**点击查看答案**" %}} 
搜索数组下半部分的递归调用却在搜索数组的上半部分。

为了解决这个问题，将 `rbin_search()` 的 `lo` 和 `hi` 参数更改为 `lo` 和 `middle-1`。

|![修复下半部分的递归调用。](../resources/debugging_process_fixing_lowerhalf_search.svg "代码截图，突出显示第 24 行，显示内容为 'return rbin_search(arr, lo, middle-1, element);'")|
|:--:|
|修复下半部分的递归调用。|

|![查看搜索 Becky 时 “lo”、“hi” 和 “middle” 变量的变化。](../resources/debugging_process_searching_for_becky.svg "控制台截图，显示有一个人名列表和调试用的打印语句，展示 'lo'、'hi' 和 'middle' 的值如何变化。")|
|:--:|
|查看搜索 Becky 时 “lo”、“hi” 和 “middle” 变量的变化。|

再运行你的程序，并搜索 5 以下的数字，查看 `lo`、`hi` 和 `index` 的变化。
{{% /expand %}}
<br/>

打印语句并不是程序复杂度增加时的最佳工具。它们非常低效，如果程序员忘记移除它们，其他人（例如运行程序的用户）可能会看到这些打印语句。只在代码的某些独立部分使用打印语句，并且**一定**记得移除它们 🙂。
