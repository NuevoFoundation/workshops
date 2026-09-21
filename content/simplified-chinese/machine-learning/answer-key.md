---
title: "机器学习 (FIFA) - 答案揭秘"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
本答案揭秘提供了用于 FIFA 球员评分预测工作坊的完整 Python 代码。学生将使用来自 Kaggle 的 FIFA 2019 数据集和 Jupyter notebook。由于训练/测试数据集的随机划分，结果可能略有不同。
{{% /notice %}}

## 第 2 步: 环境设置及导入库

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```

## 第 3 步: 载入数据集

```python
mypath = "C:/fifa_dataset/"  # 修改为实际路径
fifa_data = pd.read_csv(mypath + "data.csv")
fifa_data.describe()
```

## 第 4 步: 数据预处理

### 查看所有位置

```python
print(fifa_data['Position'].dropna().unique())
```

### 按位置筛选（前锋）

```python
fifa_data_by_pos = fifa_data[fifa_data['Position'] == 'ST']
```

### 绘制总体评分直方图

```python
target = "Overall"
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
plt.xlabel("总体评分")
plt.ylabel("球员人数")
plt.title("前锋总体评分分布")
plt.show()
```

### 划分训练集和测试集

```python
train_data, test_data = train_test_split(fifa_data_by_pos, test_size=0.25)
print("训练数据数量: " + str(len(train_data)))
print("测试数据数量: " + str(len(test_data)))
```

## 第 5 步: 特征选择

### 找到相关性最高的特征

```python
target = "Overall"
feature_corr = train_data.corr(method='pearson')[target]
feature_corr = feature_corr.sort_values(ascending=False)
print(feature_corr[1:21])
```

### 将特征名提取为列表

```python
features = feature_corr[1:21].index.tolist()
print(features)
```

**通常的高相关性特征**（顺序可能因随机分割而有所不同）:
```python
features = ["Positioning", "Finishing", "Special", "BallControl", 
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

## 第 6 步: 训练模型

```python
x_train = train_data[features]
y_train = train_data[target]

model = LinearRegression().fit(x_train, y_train)
print("分数: " + str(model.score(x_train, y_train)))
```

**预计输出:** 大约 `0.9875` 的分数（训练数据准确率约 98.75%）。

## 第 7 步: 测试模型

```python
test_data = test_data.sort_values([target], ascending=False)
x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)

test_data['Predicted Overall'] = y_pred.copy()
difference = (y_pred - y_test) / y_test * 100
test_data['Difference (%)'] = difference

test_data[["Name", "Nationality", "Club", "Overall",
           "Predicted Overall", "Difference (%)"]]
```

**预计结果:** 预测结果通常在 1-3% 的误差范围内。示例：

| 球员 | 实际评分 | 预测评分 | 误差 |
|------|----------|----------|------|
| Cristiano Ronaldo | 94 | ~92.0 | ~-2.2% |
| R. Lewandowski | 90 | ~88.1 | ~-2.1% |
| L. Suarez | 91 | ~90.5 | ~-0.5% |

{{% notice tip %}}
**给老师的建议:** 由于 `train_test_split` 会随机划分数据，每次运行结果可能不同。关键的学习点是，不论具体划分如何，模型通常能达到较高的准确率（R² > 0.95）。可以鼓励学生多次运行并进行比较。

**工作坊延伸建议:**
- 尝试不同的位置（如 GK、CB、CM），而不是 ST
- 尝试不同的目标变量（例如 Value、Wage，而不是 Overall）
- 修改训练/测试分割比例（如尝试 0.1 或 0.5，而不是 0.25）
- 使用更多或更少的特征，并比较分数
{{% /notice %}}