---
title: "Paso 6: Entrenar el modelo"
description: "Fundamentos del Aprendizaje Automático"
prereq: "ninguno"
difficulties: ["intermedio"]
draft: false
weight: 6
---

Ahora estamos listos para entrenar el modelo. Usamos 'LinearRegression().fit()' para entrenarlo. Este objeto modelo tiene una función `score()` que devuelve la puntuación del modelo, la cual es el coeficiente de determinación R^2 de la predicción. Por ahora, solo necesitas saber que cuanto mayor sea, mejor.

```python
# preparar los datos de entrenamiento
x_train = train_data[features]
y_train = train_data[target]

# Aplicar regresión lineal
# fit() es el método para entrenar el modelo
model = LinearRegression().fit(x_train,y_train)

# Puntuación del modelo
print("Puntuación: " + str(model.score(x_train,y_train)))
```

    Puntuación: 0.9875123836174596