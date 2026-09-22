```markdown
---
title: "进行预测"
prereq: "Python"
icon: ""
draft: false
weight: 5
---

# 训练模型

为了让我们的模型能够进行预测，我们需要对其进行训练。那么我们该怎么做呢？其实我们已经在做了 😉！

训练模型就是验证数据之间是否存在良好的关系，并确保我们的模型能够很好地拟合数据。

我们通过确保 R<sup>2</sup> 接近于 1 来完成这一点。现在我们需要使用包含 10,000+ 条记录的数据集来创建训练集和测试集。训练集将是一个随机样本，而不是我们之前使用的初始 30 条记录。根据德克萨斯大学埃尔帕索分校的研究，选择 30% 的样本是一种理想的方式来创建一个准确的模型。如果想了解更多，可以访问此链接：[为什么训练集和测试集比例为 70/30 或 80/20](https://scholarworks.utep.edu/cs_techrep/1209/)

随着员工数量的增加，数据集也会增加，R<sup>2</sup> 的值也会发生变化。每次员工数量增加时，我们都需要这样做，以确保我们的模型能够保持与当前员工数量一致的数据。

# 进行预测

在下面的 Replit 中，您可以看到代码如何通过划分包含 10,000+ 条记录的文件，生成“训练数据集”和“测试数据集”，并对两个数据集运行预测。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e1.py" target="_blank">启动 Replit</a>

正如您所看到的，通过训练和测试数据集生成的预测线非常相似。此外，您还可以看到两个数据集的 R<sup>2</sup> 值几乎相同，有时甚至完全一致。

现在，您可以使用下面的代码并更改 `experience` 变量为您想要的值，图表会显示基于您输入的经验值预测的薪资。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e2.py" target="_blank">启动 Replit</a>
```