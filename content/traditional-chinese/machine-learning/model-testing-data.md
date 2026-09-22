```markdown
---
title: "步驟 7：使用測試資料嘗試模型"
description: "機器學習基礎"
prereq: "無"
difficulties: ["中級"]
draft: false
weight: 7
---

現在我們將使用已訓練好的模型來估算測試資料中的球員。與處理訓練資料的方式類似，我們需要生成 `x_test` 和 `y_test`。

使用 `model.predict()` 可以生成一個預測結果的清單。

```python
# 我們希望依照目標欄位 ("Overall") 對測試資料進行排序
test_data = test_data.sort_values([target], ascending=False)

x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)
```

接下來，我們將預測結果與實際的 "Overall" 評分進行比較。

```python
# 增加一個包含預測 "Overall" 評分的新欄位
test_data['Predicted Overall'] = y_pred.copy()

# 增加一個包含預測差異百分比的新欄位
difference = (y_pred - y_test) / y_test * 100
test_data['Difference (%)'] = difference

# 打印結果
test_data[["Name", "Nationality", "Club", "Overall", "Predicted Overall", "Difference (%)"]]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Name</th>
      <th>Nationality</th>
      <th>Club</th>
      <th>Overall</th>
      <th>Predicted Overall</th>
      <th>Difference (%)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Cristiano Ronaldo</td>
      <td>Portugal</td>
      <td>Juventus</td>
      <td>94</td>
      <td>91.973701</td>
      <td>-2.155638</td>
    </tr>
    <tr>
      <th>10</th>
      <td>R. Lewandowski</td>
      <td>Poland</td>
      <td>FC Bayern München</td>
      <td>90</td>
      <td>88.135513</td>
      <td>-2.071652</td>
    </tr>
    <tr>
      <th>23</th>
      <td>S. Agüero</td>
      <td>Argentina</td>
      <td>Manchester City</td>
      <td>89</td>
      <td>87.807637</td>
      <td>-1.339733</td>
    </tr>
    <tr>
      <th>48</th>
      <td>C. Immobile</td>
      <td>Italy</td>
      <td>Lazio</td>
      <td>87</td>
      <td>85.933234</td>
      <td>-1.226168</td>
    </tr>
    <tr>
      <th>159</th>
      <td>Louri Beretta</td>
      <td>Brazil</td>
      <td>Atlético Mineiro</td>
      <td>83</td>
      <td>81.583941</td>
      <td>-1.706096</td>
    </tr>
    <tr>
      <th>193</th>
      <td>Rodrigo</td>
      <td>Spain</td>
      <td>Valencia CF</td>
      <td>83</td>
      <td>81.784946</td>
      <td>-1.463921</td>
    </tr>
    <tr>
      <th>179</th>
      <td>S. Gnabry</td>
      <td>Germany</td>
      <td>FC Bayern München</td>
      <td>83</td>
      <td>79.978980</td>
      <td>-3.639783</td>
    </tr>
    <tr>
      <th>315</th>
      <td>David Villa</td>
      <td>Spain</td>
      <td>New York City FC</td>
      <td>82</td>
      <td>81.259066</td>
      <td>-0.903578</td>
    </tr>
    <tr>
      <th>362</th>
      <td>Paco Alcácer</td>
      <td>Spain</td>
      <td>Borussia Dortmund</td>
      <td>81</td>
      <td>81.836532</td>
      <td>1.032756</td>
    </tr>
    <tr>
      <th>518</th>
      <td>Alexandre Pato</td>
      <td>Brazil</td>
      <td>Tianjin Quanjian FC</td>
      <td>80</td>
      <td>78.322831</td>
      <td>-2.096461</td>
    </tr>
    <tr>
      <th>499</th>
      <td>L. de Jong</td>
      <td>Netherlands</td>
      <td>PSV</td>
      <td>80</td>
      <td>79.993062</td>
      <td>-0.008672</td>
    </tr>
    <tr>
      <th>523</th>
      <td>K. Gameiro</td>
      <td>France</td>
      <td>Valencia CF</td>
      <td>80</td>
      <td>79.130702</td>
      <td>-1.086622</td>
    </tr>
    <tr>
      <th>721</th>
      <td>B. Yılmaz</td>
      <td>Turkey</td>
      <td>Trabzonspor</td>
      <td>79</td>
      <td>78.092396</td>
      <td>-1.148866</td>
    </tr>
    <tr>
      <th>693</th>
      <td>S. Jovetić</td>
      <td>Montenegro</td>
      <td>AS Monaco</td>
      <td>79</td>
      <td>79.353044</td>
      <