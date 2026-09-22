---
title: "7-кадам: Тест жүргүзүү маалыматтары боюнча моделиңизди текшерүү"
description: "Машина үйрөнүүнүн негиздери"
prereq: "жок"
difficulties: ["орточо"]
draft: false
weight: 7
---

Эми жаттыгуудан өткөн моделиңизди `test_data` ичиндеги оюнчуларды баалоо үчүн колдонобуз. `train_data` менен кылган сыяктуу эле, биз дагы `x_test` жана `y_test` түзөбүз.

`model.predict()` божомолдонгон натыйжалардын тизмесин чыгарат:

```python
# тесттик маалыматтарды максаттуу мааниге ("Overall") жараша иргеп алабыз
test_data = test_data.sort_values([target], ascending=False)

x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)
```

Келгиле, чыныгы жалпы рейтингдерге салыштырып көрөлү.

```python
# тест маалыматтарына болжолдонгон жалпы рейтингдин жаңы тилкесин кошобуз
test_data['Predicted Overall'] = y_pred.copy()

# болжолдоо айырмачылыктарын пайыздык көрсөткүч менен кошобуз
difference = (y_pred - y_test) / y_test * 100
test_data['Difference (%)'] = difference

# натыйжаларды басып чыгуу
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
      <th>Аты</th>
      <th>Улуту</th>
      <th>Клубу</th>
      <th>Жалпы</th>
      <th>Болжолдонгон Жалпы</th>
      <th>Айырма (%)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Криштиану Роналду</td>
      <td>Португалия</td>
      <td>Ювентус</td>
      <td>94</td>
      <td>91.973701</td>
      <td>-2.155638</td>
    </tr>
    <tr>
      <th>10</th>
      <td>Р. Левандовски</td>
      <td>Польша</td>
      <td>ФК Бавария Мюнхен</td>
      <td>90</td>
      <td>88.135513</td>
      <td>-2.071652</td>
    </tr>
    <tr>
      <th>23</th>
      <td>С. Агуэро</td>
      <td>Аргентина</td>
      <td>Манчестер Сити</td>
      <td>89</td>
      <td>87.807637</td>
      <td>-1.339733</td>
    </tr>
    <tr>
      <th>48</th>
      <td>Ч. Иммобиле</td>
      <td>Италия</td>
      <td>Лацио</td>
      <td>87</td>
      <td>85.933234</td>
      <td>-1.226168</td>
    </tr>
    <tr>
      <th>159</th>
      <td>Лоури Беретта</td>
      <td>Бразилия</td>
      <td>Атлетико Минейро</td>
      <td>83</td>
      <td>81.583941</td>
      <td>-1.706096</td>
    </tr>
    <tr>
      <th>193</th>
      <td>Родриго</td>
      <td>Испания</td>
      <td>Валенсия КФ</td>
      <td>83</td>
      <td>81.784946</td>
      <td>-1.463921</td>
    </tr>
    <tr>
      <th>179</th>
      <td>С. Гнабри</td>
      <td>Германия</td>
      <td>ФК Бавария Мюнхен</td>
      <td>83</td>
      <td>79.978980</td>
      <td>-3.639783</td>
    </tr>
    <tr>
      <th>315</th>
      <td>Давид Вилла</td>
      <td>Испания</td>
      <td>Нью-Йорк Сити ФК</td>
      <td>82</td>
      <td>81.259066</td>
      <td>-0.903578</td>
    </tr>
    <tr>
      <th>362</th>
      <td>Пако Алькасер</td>
      <td>Испания</td>
      <td>Боруссия Дортмунд</td>
      <td>81</td>
      <td>81.836532</td>
      <td>1.032756</td>
    </tr>
    <tr>
      <th>518</th>
      <td>Александре Пато</td>
      <td>Бразилия</td>
      <td>Тяньцзинь Цуаньцзянь ФК</td>
      <td>80</td>
      <td>78.322831</td>
      <td>-2.096461</td>
    </tr>
    <tr>
      <th>499</th>
      <td>Л. Де Йонг</td>
      <td>Нидерланды</td>
      <td>ПСВ</td>
      <td>80</td>
      <td>79.993062</td>
      <td>-0.008672</td>
    </tr>
    <tr>
      <th>523</th>
      <td>К. Гамейро</td>
      <td>Франция</td>
      <td>Валенсия КФ</td>
      <td>80</td>
      <td>79.130702</td>
      <td>-1.086622</td>
   