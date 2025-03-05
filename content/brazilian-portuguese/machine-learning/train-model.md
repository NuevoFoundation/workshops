---
title: "Etapa 6: treinar o modelo"
description: "Fundamentos de Aprendizado de máquina"
prereq: "Nenhum"
difficulty: "Intermediário"
draft: false
weight: 6
---

Agora estamos prontos para treinar o modelo. usamos 'LinearRegression().fit()' para treiná-lo. e este objeto de modelo possui uma função `score()` para retornar a pontuação do modelo, que é o coeficiente de determinação R ^ 2 da previsão. Por enquanto você só precisa saber que quanto maior, melhor.

```python
#preparar dados de treinamento
x_train = train_data[features]
y_train = train_data[target]

# Aplicando regressão linear
# fit() é o método para treinar o modelo
model = LinearRegression().fit(x_train,y_train)

# Pontuação do modelo
print("Score: " + str(model.score(x_train,y_train)))
```

    Score: 0.9875123836174596