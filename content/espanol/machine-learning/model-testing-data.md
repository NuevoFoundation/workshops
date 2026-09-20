---
title: "Paso 7: Prueba el modelo con datos de prueba"
description: "Fundamentos de Machine Learning"
prereq: "ninguno"
difficulties: ["intermedio"]
draft: false
weight: 7
---

Ahora utilizaremos el modelo entrenado para estimar los jugadores en `test_data`. Similar a lo que hacemos con `train_data`, creamos `x_test` y `y_test`.

`model.predict()` generará una lista de resultados estimados.


```python
# Queremos ordenar los datos de prueba por el valor objetivo ("Overall")
test_data = test_data.sort_values([target], ascending=False)

x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)
```

Comparemos con las valoraciones totales reales.

```python
# Agregar una nueva columna con la valoración total predicha a test_data
test_data['Predicted Overall'] = y_pred.copy()

# Agregar una nueva columna con el porcentaje de diferencia de las predicciones a test_data
difference = (y_pred - y_test) / y_test * 100
test_data['Difference (%)'] = difference

# Imprimir los resultados
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
      <th>Nombre</th>
      <th>Nacionalidad</th>
      <th>Club</th>
      <th>Valoración Total</th>
      <th>Valoración Total Predicha</th>
      <th>Diferencia (%)</th>
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
      <td>Polonia</td>
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
      <td>Italia</td>
      <td>Lazio</td>
      <td>87</td>
      <td>85.933234</td>
      <td>-1.226168</td>
    </tr>
    <tr>
      <th>159</th>
      <td>Louri Beretta</td>
      <td>Brasil</td>
      <td>Atlético Mineiro</td>
      <td>83</td>
      <td>81.583941</td>
      <td>-1.706096</td>
    </tr>
    <tr>
      <th>193</th>
      <td>Rodrigo</td>
      <td>España</td>
      <td>Valencia CF</td>
      <td>83</td>
      <td>81.784946</td>
      <td>-1.463921</td>
    </tr>
    <tr>
      <th>179</th>
      <td>S. Gnabry</td>
      <td>Alemania</td>
      <td>FC Bayern München</td>
      <td>83</td>
      <td>79.978980</td>
      <td>-3.639783</td>
    </tr>
    <tr>
      <th>315</th>
      <td>David Villa</td>
      <td>España</td>
      <td>New York City FC</td>
      <td>82</td>
      <td>81.259066</td>
      <td>-0.903578</td>
    </tr>
    <tr>
      <th>362</th>
      <td>Paco Alcácer</td>
      <td>España</td>
      <td>Borussia Dortmund</td>
      <td>81</td>
      <td>81.836532</td>
      <td>1.032756</td>
    </tr>
    <tr>
      <th>518</th>
      <td>Alexandre Pato</td>
      <td>Brasil</td>
      <td>Tianjin Quanjian FC</td>
      <td>80</td>
      <td>78.322831</td>
      <td>-2.096461</td>
    </tr>
    <tr>
      <th>499</th>
      <td>L. de Jong</td>
      <td>Países Bajos</td>
      <td>PSV</td>
      <td>80</td>
      <td>79.993062</td>
      <td>-0.008672</td>
    </tr>
    <tr>
      <th>523</th>
      <td>K. Gameiro</td>
      <td>Francia</td>
      <td>Valencia CF</td>
      <td>80</td>
      <td>79.130702</td>
      <td>-1.086622</td>
    </tr>
    <tr>
      <th>721</th>
      <td>B. Yılmaz</td>
      <td>Turquía</td>
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
      <td>0.446891</td>
    </tr>
    <tr>
      <th>591</th>
