---
title: "步骤 6：训练模型"
description: "机器学习基础"
prereq: "无"
difficulties: ["中级"]
draft: false
weight: 6
---

现在我们已经准备好训练模型了。我们使用 'LinearRegression().fit()' 来训练模型。这个模型对象有一个 `score()` 函数，用于返回模型的评分，也就是预测的决定系数 R^2。目前你只需要知道评分越高越好。

```python
# 准备训练数据
x_train = train_data[features]
y_train = train_data[target]

# 应用线性回归
# fit() 是训练模型的方法
model = LinearRegression().fit(x_train,y_train)

# 模型的评分
print("评分: " + str(model.score(x_train,y_train)))
```

    评分: 0.9875123836174596