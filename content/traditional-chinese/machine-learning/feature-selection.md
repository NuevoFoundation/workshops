---
title: "步驟五：特徵選取"
description: "機器學習基礎"
prereq: "無"
difficulties: ["中級"]
draft: false
weight: 5
---

我們的下一步是選擇適當的特徵。特徵選取是機器學習中的一個術語，用來描述選擇模型相關特徵的方法和過程。一個特徵是公式中的一個 \(x\)。在這個例子中，它就是一名足球運動員的一個屬性。

由於我們正在使用線性回歸模型，因此屬性與目標值（"Overall"）的相關性成為我們選擇適合特徵的標準。

我們使用內建函式 `corr` 來計算列與列之間的相關性。有三種方法可以選擇：
- pearson：標準相關係數
- kendall：Kendall Tau 相關係數
- spearman：Spearman 排名相關係數

在本教學中，我們使用 pearson 方法。

```python
# 選擇目標
target = "Overall"

# 使用 pearson 方法找出列之間的相關性
feature_corr = train_data.corr(method ='pearson') [target]

# 將特徵排序
feature_corr = feature_corr.sort_values(ascending = False)

# 顯示排行前 20 的特徵
# 請注意，我們從 1 開始而非 0，因為 Overall 總是在列表的最上方
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
    

現在，我們可以直接複製粘貼前 10 或前 12 名的特徵。（注意：請不要複製空格）


```python
# 選擇一些特徵
features = ["Positioning", "Finishing", "Special", "BallControl", 
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

此外，我們也可以直接從索引中提取特徵名稱。請注意，我們從 1 開始，因為我們不希望包含總是位於列表頂部的 `overall`。

```python
# 從系列中提取特徵名稱
features = feature_corr[1:21].index.tolist()

# 顯示特徵
print(features)
```

    ['Positioning', 'Special', 'Finishing', 'BallControl', 'ShotPower', 'Reactions', 'Volleys', 'Composure', 'ShortPassing', 'Dribbling', 'LongShots', 'HeadingAccuracy', 'Vision', 'Skill Moves', 'Curve', 'Crossing', 'Potential', 'Penalties', 'LongPassing', 'FKAccuracy']