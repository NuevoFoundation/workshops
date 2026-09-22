---
title: "Paso 5: Selección de características"
description: "Fundamentos del Aprendizaje Automático"
prereq: "ninguno"
difficulties: ["intermedio"]
draft: false
weight: 5
---

Nuestro siguiente paso es seleccionar las características adecuadas. La selección de características es un término en aprendizaje automático que describe el método y proceso de elegir características relevantes para el modelo. Una característica es una \(x\) en la fórmula. En nuestra historia, es un atributo de un jugador de fútbol.

Dado que estamos utilizando el modelo de regresión lineal, cómo el atributo está correlacionado con el objetivo ("Overall") se convierte en el criterio para elegir las características correctas.

Usamos una función incorporada, la correlación `corr`, para calcular la correlación por pares de columnas. Hay tres métodos entre los que podemos elegir:
- pearson : coeficiente de correlación estándar
- kendall : coeficiente de correlación Kendall Tau
- spearman : coeficiente de correlación de rango de Spearman

En este tutorial usamos el método pearson.


```python
# seleccionar objetivo
target = "Overall"

# Para encontrar la correlación entre las columnas usando el método pearson
feature_corr = train_data.corr(method ='pearson') [target]

# ordenar las características
feature_corr = feature_corr.sort_values(ascending = False)

# mostrar las 20 características principales
# nota que comenzamos desde 1 y no desde cero, porque Overall siempre está en la parte superior de la lista
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
    

Ahora, podemos copiar y pegar las 10 o 12 características principales. (Nota: Por favor no copies los espacios)


```python
# seleccionar algunas características
features = ["Positioning", "Finishing", "Special", "BallControl", 
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

También podemos extraer los nombres de las características desde el índice. Nota que comenzamos desde 1 porque no queremos incluir `Overall`, que siempre está en la parte superior de la lista.


```python
# extraer nombres de las características desde la serie
features = feature_corr[1:21].index.tolist()

# mostrar las características
print(features)
```

    ['Positioning', 'Special', 'Finishing', 'BallControl', 'ShotPower', 'Reactions', 'Volleys', 'Composure', 'ShortPassing', 'Dribbling', 'LongShots', 'HeadingAccuracy', 'Vision', 'Skill Moves', 'Curve', 'Crossing', 'Potential', 'Penalties', 'LongPassing', 'FKAccuracy']