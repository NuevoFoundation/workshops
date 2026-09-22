```yaml
---
title: "Кадам 5: Өзгөчөлүктү тандап алуу"
description: "Машина үйрөнүүнүн негиздери"
prereq: "жок"
difficulties: ["орточо"]
draft: false
weight: 5
---

Биздин кийинки кадамыбыз – туура өзгөчөлүктөрдү тандоо. Машина үйрөнүүдө "Өзгөчөлүктү тандоо" деген термин модель үчүн тиешелүү өзгөчөлүктөрдү тандоо ыкмасын жана процессин сүрөттөйт. Өзгөчөлүк – бул формуладагы \(x\). Биздин окуя боюнча, ал футбол оюнчусунун атрибуту.

Биз сызыктуу регрессия моделин колдонгондуктан, атрибуттун максат ("Overall") менен байланышы туура өзгөчөлүктөрдү тандоонун критерийи болуп калат.

Биз мамилелерди эсептөө үчүн орнотулган "correlation" (`corr`) функциясын колдонобуз. Сай келештикти эсептөөнүн үч ыкмасы бар:
- pearson: стандарттык корреляция коэффициенти
- kendall: Кендалл Тау корреляция коэффициенти
- spearman: Спирман ранк корреляциясы

Бул сабакта биз pearson методун колдонобуз.


```python
# максатты тандоо
target = "Overall"

# pearson ыкмасы менен мамилелерди эсептөө
feature_corr = train_data.corr(method ='pearson') [target]

# өзгөчөлүктөрдү катарга келтирүү
feature_corr = feature_corr.sort_values(ascending = False)

# алдыңкы 20 өзгөчөлүктөрдү көрсөтүү
# "Overall" дайыма тизменин башында болгондуктан 1ден баштайбыз
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
    

Эми, биз алдыңкы 10 же алдыңкы 12 өзгөчөлүктөрдү көчүрүп, жайгаштырсак болот. (Эскертүү: Суроо боштукту көчүрбөңүз)


```python
# айрым өзгөчөлүктөрдү тандоо
features = ["Positioning", "Finishing", "Special", "BallControl", 
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

Ошондой эле, өзгөчөлүк аттарын индексинен алса болот. Эскертүү: Биз 1ден баштайбыз, анткени биз дайыма тизменин башында турган `overall`'ды кошкубуз келбейт.


```python
# Indexтен өзгөчөлүк аттарын алуу 
features = feature_corr[1:21].index.tolist()

# өзгөчөлүктөрдү көрсөтүү
print(features)
```

    ['Positioning', 'Special', 'Finishing', 'BallControl', 'ShotPower', 'Reactions', 'Volleys', 'Composure', 'ShortPassing', 'Dribbling', 'LongShots', 'HeadingAccuracy', 'Vision', 'Skill Moves', 'Curve', 'Crossing', 'Potential', 'Penalties', 'LongPassing', 'FKAccuracy']
```