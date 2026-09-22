```yaml
---
title: "步骤 5：特征选择"
description: "机器学习基础"
prereq: "无"
difficulties: ["中级"]
draft: false
weight: 5
---

我们的下一步是选择合适的特征。特征选择是机器学习中的一个术语，用来描述为模型挑选相关特征的方法和过程。一个特征是公式中的一个 \(x\)。在我们的例子中，它是一个足球运动员的属性。

由于我们使用的是线性回归模型，属性与目标（“总评”）的相关性成为选择正确特征的标准。

我们使用内置函数 `corr` 来计算列之间的相关性。我们可以选择以下三种方法：
- `pearson`：标准相关系数
- `kendall`：肯德尔 Tau相关系数
- `spearman`：斯皮尔曼等级相关系数

在本教程中，我们使用 `pearson` 方法。

```python
# 选择目标
target = "Overall"

# 使用 pearson 方法查找列之间的相关性
feature_corr = train_data.corr(method ='pearson') [target]

# 排序特征
feature_corr = feature_corr.sort_values(ascending = False)

# 展示前20个特征
# 注意，我们从1开始而不是0，因为 Overall 总是在列表顶部
print(feature_corr[1:21]) 
```

    Positioning        0.904367
    Special            0.903856
    Finishing          0.899783
    BallControl        0.896988
    ShotPower          0.877842
    Reactions          0.861441
    Volleys            0.834433
    Composure          0.827529
    ShortPassing       0.813074
    Dribbling          0.802565
    LongShots          0.794059
    HeadingAccuracy    0.711129
    Vision             0.671054
    Skill Moves        0.649300
    Curve              0.641426
    Crossing           0.603249
    Potential          0.593139
    Penalties          0.583906
    LongPassing        0.575092
    FKAccuracy         0.569704
    Name: Overall, dtype: float64
    

现在，我们可以复制并粘贴排名前10或前12的特征。（注意：请不要复制空格）

```python
# 选择一些特征
features = ["Positioning", "Finishing", "Special", "BallControl", 
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

另外，我们也可以直接从索引中提取特征名称。注意，我们从1开始，因为我们不想包含总评 (`Overall`)，它总是排在列表的顶部。

```python
# 从序列中提取特征名称
features = feature_corr[1:21].index.tolist()

# 展示特征
print(features)
```

    ['Positioning', 'Special', 'Finishing', 'BallControl', 'ShotPower', 'Reactions', 'Volleys', 'Composure', 'ShortPassing', 'Dribbling', 'LongShots', 'HeadingAccuracy', 'Vision', 'Skill Moves', 'Curve', 'Crossing', 'Potential', 'Penalties', 'LongPassing', 'FKAccuracy']
```