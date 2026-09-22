```markdown
---
title: "Машина үйрөнүү (FIFA) - Жооп Ключу"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Бул жооп ключу FIFA оюнчунун рейтингин божомолдоо боюнча семинарга толук Python кодун камсыздайт. Студенттер Kaggle'ден алынган FIFA 2019 dataset'i менен Jupyter блокнотун колдонушат. Жыйынтыктар окуу/текшерүү бөлүшүү процесси рандомдуу болгондуктан бир аз өзгөрүшү мүмкүн.
{{% /notice %}}

## 2-Кадам: Орнотуу жана Импорттоо

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```

## 3-Кадам: Datasetти Жүктөө

```python
mypath = "C:/fifa_dataset/"  # чыныгы жолду киргизиңиз
fifa_data = pd.read_csv(mypath + "data.csv")
fifa_data.describe()
```

## 4-Кадам: Маалыматтарды Алдын-Ала Иштетүү

### Бардык позицияларды көрүү

```python
print(fifa_data['Position'].dropna().unique())
```

### Позиция боюнча фильтрлөө (чабуулчулар)

```python
fifa_data_by_pos = fifa_data[fifa_data['Position'] == 'ST']
```

### Жалпы рейтингдердин гистограммасын чагылдыруу

```python
target = "Overall"
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
plt.xlabel("Жалпы Рейтинг")
plt.ylabel("Оюнчулардын саны")
plt.title("Чабуулчулардын Жалпы Рейтингинин Таралышы")
plt.show()
```

### Тренинг жана тестирлөө топторуна бөлүү

```python
train_data, test_data = train_test_split(fifa_data_by_pos, test_size=0.25)
print("Тренинг маалыматтарынын саны: " + str(len(train_data)))
print("Тестирлөө маалыматтарынын саны: " + str(len(test_data)))
```

## 5-Кадам: Функцияларды Тандоо

### Эң жогорку корреляциялык функцияларды табуу

```python
target = "Overall"
feature_corr = train_data.corr(method='pearson')[target]
feature_corr = feature_corr.sort_values(ascending=False)
print(feature_corr[1:21])
```

### Функциялардын атын лист катары алуу

```python
features = feature_corr[1:21].index.tolist()
print(features)
```

**Мисал: эң жогорку функциялар** (рандомдуу бөлүштүрүүгө жараша өзгөрүшү мүмкүн):
```python
features = ["Positioning", "Finishing", "Special", "BallControl",
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

## 6-Кадам: Моделди Үйрөтүү

```python
x_train = train_data[features]
y_train = train_data[target]

model = LinearRegression().fit(x_train, y_train)
print("Баалоо: " + str(model.score(x_train, y_train)))
```

**Күткөн жыйынтык:** Тренинг маалыматтары үчүн тактык болжол менен `0.9875` (98.75%).

## 7-Кадам: Моделди Тестирлөө

```python
test_data = test_data.sort_values([target], ascending=False)
x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)

test_data['Болжолдуу Жалпы'] = y_pred.copy()
difference = (y_pred - y_test) / y_test * 100
test_data['Айырма (%)'] = difference

test_data[["Name", "Nationality", "Club", "Overall",
           "Болжолдуу Жалпы", "Айырма (%)"]]
```

**Күткөн жыйынтык:** Болжолдоо адатта 1-3% ката маржасында болот. Мисал:

| Оюнчу | Чыныгы | Болжолдуу | Ката |
|-------|--------|-----------|------|
| Криштиану Роналду | 94 | ~92.0 | ~-2.2% |
| Р. Левандовски | 90 | ~88.1 | ~-2.1% |
| Л. Суарес | 91 | ~90.5 | ~-0.5% |

{{% notice tip %}}
**Мугалимдер үчүн:** Жыйынтыктар ар бир аткарууда өзгөрүшү мүмкүн, анткени `train_test_split` маалыматтарды рандомдуу бөлөт. Негизги максат — моделдин жогорку тактыкка (R² > 0.95) жетишкенин түшүнүү. Студенттерди кодуңузду бир нече жолу иштетүүгө жана салыштырууга үндөңүз.

**Семинардагы кеңейтүү идеялары:**
- Чабуулчулардан башка позицияларды да (GK, CB, CM) колдонуп көрүңүз
- Башка максаттуу өзгөрмөлөрдү байкап көрүңүз (Мисалы: Value, Wage ордуна Overall)
- Тренинг/тестирлөө катышын өзгөртүңүз (мисалы: 0.1 же 0.5 колдонуп көрүңүз, 0.25 ордуна)
- Аз же көп функцияларды колдонуңуз жана натыйжаларды салыштырыңыз
{{% /notice %}}
```