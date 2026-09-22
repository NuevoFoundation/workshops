---
title: "步驟 6：訓練模型"
description: "機器學習基礎"
prereq: "無"
difficulties: ["中級"]
draft: false
weight: 6
---

現在我們準備好訓練模型了。我們使用 'LinearRegression().fit()' 來訓練模型。此模型物件具有一個 `score()` 函數，用於返回模型的評分，這是預測的決定係數 R^2。目前你只需要知道分數越高越好。

```python
# 準備訓練資料
x_train = train_data[features]
y_train = train_data[target]

# 使用線性回歸
# fit() 是用於訓練模型的方法
model = LinearRegression().fit(x_train,y_train)

# 模型的評分
print("分數: " + str(model.score(x_train,y_train)))
```

    分數: 0.9875123836174596