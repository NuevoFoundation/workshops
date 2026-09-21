```yaml
---
title: "步骤 4：预处理数据"
description: "机器学习基础"
prereq: "none"
difficulties: ["intermediate"]
draft: false
weight: 4
---

到目前为止，我们已经导入了数据集。在现实生活中，每个足球运动员都有一个特定的位置。不同的位置需要擅长不同的属性。因此，让我们将范围缩小到前锋位置。

首先，让我们列出所有的位置。
这段代码看起来有点长，但它可以完成任务。`fifa_data['position']` 选择 `fifa_data` 数据的职位列，`dropna()` 去掉空白单元格，`unique()` 为我们去掉所有重复的项目。

```python
# 查看一共有多少个位置
print(fifa_data['Position'].dropna().unique())
```

    ['RF' 'ST' 'LW' 'GK' 'RCM' 'LF' 'RS' 'RCB' 'LCM' 'CB' 'LDM' 'CAM' 'CDM'
     'LS' 'LCB' 'RM' 'LAM' 'LM' 'LB' 'RDM' 'RW' 'CM' 'RB' 'RAM' 'CF' 'RWB'
     'LWB']

现在我们可以按照位置 "ST" 过滤数据。建议你选择其他位置，看看有什么差别。

```python
# 按位置获取球员
fifa_data_by_pos = fifa_data[fifa_data['Position']=='ST']
```

让我们绘制一个所有前锋综合评分的直方图。

```python
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
```

    (array([ 40., 186., 363., 463., 601., 341., 113.,  34.,   9.,   2.]),
     array([47. , 51.7, 56.4, 61.1, 65.8, 70.5, 75.2, 79.9, 84.6, 89.3, 94. ]),
     <a list of 10 Patch objects>)

![输出图像](../images/output_11_1.png)

接下来，我们需要将数据分成两部分，一部分用于训练模型，另一部分用于验证模型是否有效。

你可能会想，我们应该将尽可能多的数据用于训练，因为这样可以让模型变得更好。确实，模型在训练数据集上的效果会更好，但在应用到测试数据时，预测准确率可能会下降。这被称为 "过拟合"。

现在，我们将 25% 的数据保留用于测试。

```python
# 随机将数据分为 train_data 和 test_data
# 你可以修改 test_size 的比例，看看会发生什么
train_data, test_data = train_test_split(fifa_data_by_pos,test_size=0.25)

# 打印 train_data 和 test_data 的玩家数量
# len() 以数值格式返回玩家数量
# str() 将数值转换为字符串
print("训练数据的数量是 " + str(len(train_data)))
print("测试数据的数量是 " + str(len(test_data)))
```

    训练数据的数量是 1614
    测试数据的数量是 538
```