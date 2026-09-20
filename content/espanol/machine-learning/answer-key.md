---
title: "Machine Learning (FIFA) - Respuestas"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Esta clave de respuestas proporciona el código completo en Python para el taller de Predicción de Calificación de Jugadores de FIFA. Los estudiantes utilizan un notebook de Jupyter con el conjunto de datos FIFA 2019 de Kaggle. Los resultados pueden variar ligeramente debido a la división aleatoria entre entrenamiento y prueba.
{{% /notice %}}

## Paso 2: Configuración e Importaciones

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```

## Paso 3: Cargar el conjunto de datos

```python
mypath = "C:/fifa_dataset/"  # cambiar a tu ruta real
fifa_data = pd.read_csv(mypath + "data.csv")
fifa_data.describe()
```

## Paso 4: Preprocesar el conjunto de datos

### Ver todas las posiciones

```python
print(fifa_data['Position'].dropna().unique())
```

### Filtrar por posición (delanteros)

```python
fifa_data_by_pos = fifa_data[fifa_data['Position'] == 'ST']
```

### Graficar histograma de calificaciones generales

```python
target = "Overall"
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
plt.xlabel("Calificación General")
plt.ylabel("Número de Jugadores")
plt.title("Distribución de Calificaciones Generales de Delanteros")
plt.show()
```

### Dividir en conjuntos de entrenamiento y prueba

```python
train_data, test_data = train_test_split(fifa_data_by_pos, test_size=0.25)
print("El número de datos de entrenamiento es " + str(len(train_data)))
print("El número de datos de prueba es " + str(len(test_data)))
```

## Paso 5: Selección de Características

### Encontrar las características más correlacionadas

```python
target = "Overall"
feature_corr = train_data.corr(method='pearson')[target]
feature_corr = feature_corr.sort_values(ascending=False)
print(feature_corr[1:21])
```

### Extraer nombres de características como una lista

```python
features = feature_corr[1:21].index.tolist()
print(features)
```

**Características principales típicas** (el orden puede variar con la división aleatoria):
```python
features = ["Positioning", "Finishing", "Special", "BallControl",
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

## Paso 6: Entrenar el Modelo

```python
x_train = train_data[features]
y_train = train_data[target]

model = LinearRegression().fit(x_train, y_train)
print("Puntaje: " + str(model.score(x_train, y_train)))
```

**Resultado esperado:** Puntaje de aproximadamente `0.9875` (98.75% de precisión en datos de entrenamiento).

## Paso 7: Probar el Modelo

```python
test_data = test_data.sort_values([target], ascending=False)
x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)

test_data['Predicted Overall'] = y_pred.copy()
difference = (y_pred - y_test) / y_test * 100
test_data['Difference (%)'] = difference

test_data[["Name", "Nationality", "Club", "Overall",
           "Predicted Overall", "Difference (%)"]]
```

**Resultados esperados:** Predicciones típicamente dentro de un margen de error del 1-3%. Ejemplo:

| Jugador | Actual | Predicho | Error |
|---------|--------|----------|-------|
| Cristiano Ronaldo | 94 | ~92.0 | ~-2.2% |
| R. Lewandowski | 90 | ~88.1 | ~-2.1% |
| L. Suarez | 91 | ~90.5 | ~-0.5% |

{{% notice tip %}}
**Para profesores:** Los resultados varían con cada ejecución porque `train_test_split` divide los datos aleatoriamente. El aprendizaje clave es que el modelo logra alta precisión (R² > 0.95) independientemente de la división específica. Animen a los estudiantes a ejecutar el código varias veces y comparar.

**Ideas de extensión del taller:**
- Intentar con diferentes posiciones (GK, CB, CM) en lugar de ST.
- Intentar con diferentes variables objetivo (Value, Wage en lugar de Overall).
- Cambiar la proporción de entrenamiento/prueba (por ejemplo, probar con 0.1 o 0.5 en lugar de 0.25).
- Usar menos o más características y comparar el puntaje.
{{% /notice %}}