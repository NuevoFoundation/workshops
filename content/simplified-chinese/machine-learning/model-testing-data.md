```yaml
---
title: "第七步：在测试数据上试用模型"
description: "机器学习基础"
prereq: "无"
difficulties: ["中级"]
draft: false
weight: 7
---

现在我们使用训练好的模型来预测 `test_data` 中的球员。类似于对 `train_data` 的操作，我们需要创建 `x_test` 和 `y_test`。

`model.predict()` 将会生成预测结果的列表。

```python
# 我们想按照目标值 ("Overall") 对测试数据进行排序
test_data = test_data.sort_values([target], ascending=False)

x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)
```

让我们与实际的综合评分进行比较。

```python
# 在 test_data 中添加预测的综合评分的列
test_data['Predicted Overall'] = y_pred.copy()

# 在 test_data 中添加预测差异百分比的列
difference = (y_pred - y_test) / y_test * 100
test_data['Difference (%)'] = difference

# 打印结果
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
    ...
  </tbody>
</table>
<p>538 行 × 6 列</p>
</div>

是不是很棒？通过这个结果，你可以自信地使用这个模型预测世界上任何足球球员的综合评分！

现在让我们做一些绘图来可视化结果。

```python
# 绘制输出
plt.scatter(range(0, y_test.shape[0]), y_test, color='blue', label="Actual")
plt.plot(range(0, y_test.shape[0]), y_pred, color='red', label="Predicted")

# 添加刻度、标签、图例
plt.xticks(())
plt.xlabel("球员（按实际综合评分排序）")
plt.ylabel("综合评分")
plt.legend(loc='upper right')
plt.show()
```

![最终图表](../images/output_27_0.png)
```