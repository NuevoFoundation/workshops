---
title: "Step 4: Pre-process data"
description: "Basics of Machine Learning"
prereq: "none"
difficulties: ["intermediate"]
draft: false
weight: 4
---

目前，我們已經導入了數據集。在現實生活中，每位足球球員有其特定的位置。不同的位置要求球員在不同的屬性上有更強的表現。因此，讓我們將範圍縮小到前鋒。

首先，列出所有的位置。這段程式碼稍微長一些，但它能完成任務。`fifa_data['position']` 用來選擇 `fifa_data` 中的位置列，`dropna()` 剔除了空白的單元格，而 `unique()` 則幫助我們刪除所有重複的項目。

```python
# 確認有多少不同的位置
print(fifa_data['Position'].dropna().unique())
```

    ['RF' 'ST' 'LW' 'GK' 'RCM' 'LF' 'RS' 'RCB' 'LCM' 'CB' 'LDM' 'CAM' 'CDM'
     'LS' 'LCB' 'RM' 'LAM' 'LM' 'LB' 'RDM' 'RW' 'CM' 'RB' 'RAM' 'CF' 'RWB'
     'LWB']

現在我們可以根據位置 "ST" 來篩選數據。你也可以嘗試選擇其他位置，來看看有什麼不同。

```python
# 根據位置篩選球員
fifa_data_by_pos = fifa_data[fifa_data['Position']=='ST']
```

接下來，我們為所有前鋒的綜合評分畫直方圖。

```python
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
```

    (array([ 40., 186., 363., 463., 601., 341., 113.,  34.,   9.,   2.]),
     array([47. , 51.7, 56.4, 61.1, 65.8, 70.5, 75.2, 79.9, 84.6, 89.3, 94. ]),
     <a list of 10 Patch objects>)

![輸出圖像](../images/output_11_1.png)

接下來，我們需要將數據分成兩個集合，一個用來訓練模型，另一個用來測試模型是否良好。

你可能認為，我們應該保留更多數據供模型訓練，因為這樣會讓模型更精確。但模型可能只適合於訓練集的數據，當你將模型應用於測試集時，預測的準確度可能會下降。這就是所謂的「過度擬合」。

現在，我們保留 25% 的數據用於測試。

```python
# 隨機將數據分為 train_data 和 test_data
# 你可以更改 test_size 的比例來觀察結果
train_data, test_data = train_test_split(fifa_data_by_pos,test_size=0.25)

# 輸出 train_data 和 test_data 中球員的數量
# len() 返回數值格式的球員數量
# str() 將數值轉換為字符串格式
print("訓練數據中的球員數量是 " + str(len(train_data)))
print("測試數據中的球員數量是 " + str(len(test_data)))
```

    訓練數據中的球員數量是 1614
    測試數據中的球員數量是 538