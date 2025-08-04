---
title: "Etapa 6: Treinar o modelo"
description: "Conceitos básicos de Machine Learning"
prereq: "nenhum"
difficulty: "Intermediário"
draft: false
weight: 6
---

Agora estamos prontos para treinar o modelo. Usamos `LinearRegression().fit()` para treiná-lo. E este objeto modelo tem uma função `score()` que retorna a pontuação do modelo, que é o coeficiente de determinação R² da previsão. Por enquanto, tudo o que você precisa saber é: quanto maior, melhor!

```python
# preparar dados de treino
x_train = train_data[features]
y_train = train_data[target]

# Aplicando Regressão Linear
# fit() é o método que treina o modelo
model = LinearRegression().fit(x_train,y_train)

# Pontuação do modelo
print("Pontuação: " + str(model.score(x_train,y_train)))
```

    Pontuação: 0.9875123836174596