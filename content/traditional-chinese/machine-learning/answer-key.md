```markdown
---
title: "機器學習 (FIFA) - 解答"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
此解答提供了 FIFA 球員評分預測工作坊的完整 Python 程式碼。學生需使用 Jupyter notebook 與 Kaggle 上的 FIFA 2019 資料集。由於隨機的訓練/測試分割，結果可能略有不同。
{{% /notice %}}

## 步驟 2：環境設置與匯入

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```

## 步驟 3：載入資料集

```python
mypath = "C:/fifa_dataset/"  # 替換為實際路徑
fifa_data = pd.read_csv(mypath + "data.csv")
fifa_data.describe()
```

## 步驟 4：資料預處理

### 查看所有位置

```python
print(fifa_data['Position'].dropna().unique())
```

### 根據位置過濾 (前鋒)

```python
fifa_data_by_pos = fifa_data[fifa_data['Position'] == 'ST']
```

### 繪製總評分的直方圖

```python
target = "Overall"
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
plt.xlabel("總評分")
plt.ylabel("球員人數")
plt.title("前鋒總評分分佈圖")
plt.show()
```

### 分割成訓練集與測試集

```python
train_data, test_data = train_test_split(fifa_data_by_pos, test_size=0.25)
print("訓練集數量為 " + str(len(train_data)))
print("測試集數量為 " + str(len(test_data)))
```

## 步驟 5：選擇特徵

### 找出相關性最高的特徵

```python
target = "Overall"
feature_corr = train_data.corr(method='pearson')[target]
feature_corr = feature_corr.sort_values(ascending=False)
print(feature_corr[1:21])
```

### 將特徵名稱提取為列表

```python
features = feature_corr[1:21].index.tolist()
print(features)
```

**典型的高相關特徵**（隨機分割情況下順序可能有所不同）：
```python
features = ["Positioning", "Finishing", "Special", "BallControl",
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

## 步驟 6：訓練模型

```python
x_train = train_data[features]
y_train = train_data[target]

model = LinearRegression().fit(x_train, y_train)
print("得分: " + str(model.score(x_train, y_train)))
```

**預期輸出：** 大約 `0.9875`（訓練數據的準確率約為 98.75%）。

## 步驟 7：測試模型

```python
test_data = test_data.sort_values([target], ascending=False)
x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)

test_data['預測總評分'] = y_pred.copy()
difference = (y_pred - y_test) / y_test * 100
test_data['差異 (%)'] = difference

test_data[["Name", "Nationality", "Club", "Overall",
           "預測總評分", "差異 (%)"]]
```

**預期結果：** 預測值通常在 1-3% 的誤差範圍內。例如：

| 球員             | 實際評分 | 預測評分 | 誤差  |
|------------------|----------|----------|-------|
| Cristiano Ronaldo | 94       | ~92.0    | ~-2.2% |
| R. Lewandowski   | 90       | ~88.1    | ~-2.1% |
| L. Suarez        | 91       | ~90.5    | ~-0.5% |

{{% notice tip %}}
**給教師的提示：** 每次執行因為 `train_test_split` 隨機分割資料因此結果可能不同。學習的關鍵是模型即使在不同分割下，仍能達到高準確率（R² > 0.95）。鼓勵學生多次執行並比較結果。

**工作坊延伸想法：**
- 嘗試不同位置的球員 (如 GK, CB, CM) 代替 ST
- 嘗試不同目標變數 (如 Value, Wage 代替 Overall)
- 改變訓練/測試比例 (試試 0.1 或 0.5 取代 0.25)
- 使用更少或更多的特徵並比較結果
{{% /notice %}}
```