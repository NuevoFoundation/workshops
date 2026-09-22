---
title: "模型拟合"
prereq: "Python"
icon: ""
draft: false
weight: 4
---

# 我们的模型拟合得好吗？

记住，我们建立的线性方程具有一个随机错误值（**ε**）。

<h3>
\[
    SALARY = 9449.96(XP) + 25792.20 + ε
\]
</h3>

由于 **ε** 是我们无法确定的一个错误值，我们需要问自己：

1. 我们的模型在多大程度上代表了现实，或者说我们的模型在多大程度上能“拟合”现有的数据？
2. 我们如何知道 **工作经验（Years of Experience）** 确实对 **薪资（Salary）** 有影响？

有很多方法可以解决这个问题，但在机器学习和统计学领域，我们可以使用一个值。这一值被称为 **R-Squared** 或 **R<sup>2</sup>**。

[R-Squared](https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/statistics/regression-and-correlation/coefficient-of-determination-r-squared.html#:~:text=6%20See%20Also-,Definition,line%20approximates%20the%20actual%20data.) - 是一个提供有关模型拟合度信息的度量。在回归分析的背景下，它是一个统计度量，用于衡量回归线与实际数据的拟合程度。经验规则是，如果 **R<sup>2</sup>** 的值接近 1，那么说明我们选定的数学模型与数据的实际值非常吻合或具有良好的拟合。

## 练习 1：计算 R-Squared

`Experience_vs_Salary-More_Data` 文件中包含 10,000+ 条记录，数据展示了你所在公司中员工的薪资与工作经验的关系。以下 Replit 代码将取出 30 名员工的初始样本，并计算标准误差和 R<sup>2</sup>。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/04-e1.py" target="_blank">启动 Replit</a>

正如你所看到的，R<sup>2</sup> 的值是 0.973。现在，如果有人问我们数据之间是否有关系，我们可以说，“我们有 97.3% 的信心认为员工的工作经验与其薪资相关”。

我鼓励你更改 'sample_size' 变量为更大的或更小的数字，以观察 R<sup>2</sup> 的值如何受到影响。

现在，让我们开始进行一些预测吧！