---
title: "Machine Learning (FIFA) - Gabarito"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este gabarito fornece o código completo em Python para o workshop de Previsão de Classificação de Jogadores no FIFA. Os alunos utilizam um Jupyter Notebook com o conjunto de dados FIFA 2019 do Kaggle. Os resultados podem variar ligeiramente devido à divisão aleatória entre treino e teste.
{{% /notice %}}

## Passo 2: Configuração e Importações

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```

## Passo 3: Carregar o Conjunto de Dados

```python
mypath = "C:/fifa_dataset/"  # altere para o caminho real
fifa_data = pd.read_csv(mypath + "data.csv")
fifa_data.describe()
```

## Passo 4: Pré-processar os Dados

### Ver todas as posições

```python
print(fifa_data['Position'].dropna().unique())
```

### Filtrar por posição (atacantes)

```python
fifa_data_by_pos = fifa_data[fifa_data['Position'] == 'ST']
```

### Traçar histograma das classificações gerais

```python
target = "Overall"
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
plt.xlabel("Classificação Geral")
plt.ylabel("Número de Jogadores")
plt.title("Distribuição das Classificações Gerais dos Atacantes")
plt.show()
```

### Dividir em conjuntos de treino e teste

```python
train_data, test_data = train_test_split(fifa_data_by_pos, test_size=0.25)
print("O número de dados de treino é " + str(len(train_data)))
print("O número de dados de teste é " + str(len(test_data)))
```

## Passo 5: Seleção de Recursos

### Encontrar os principais recursos correlacionados

```python
target = "Overall"
feature_corr = train_data.corr(method='pearson')[target]
feature_corr = feature_corr.sort_values(ascending=False)
print(feature_corr[1:21])
```

### Extrair nomes de recursos como uma lista

```python
features = feature_corr[1:21].index.tolist()
print(features)
```

**Principais recursos típicos** (a ordem pode variar com a separação aleatória):
```python
features = ["Positioning", "Finishing", "Special", "BallControl",
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

## Passo 6: Treinar o Modelo

```python
x_train = train_data[features]
y_train = train_data[target]

model = LinearRegression().fit(x_train, y_train)
print("Score: " + str(model.score(x_train, y_train)))
```

**Saída esperada:** Pontuação de aproximadamente `0.9875` (98,75% de precisão nos dados de treino).

## Passo 7: Testar o Modelo

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

**Resultados esperados:** Previsões geralmente com margem de erro de 1-3%. Exemplo:

| Jogador             | Real   | Previsto   | Erro   |
|---------------------|--------|------------|--------|
| Cristiano Ronaldo   | 94     | ~92.0      | ~-2,2% |
| R. Lewandowski      | 90     | ~88.1      | ~-2,1% |
| L. Suarez           | 91     | ~90.5      | ~-0,5% |

{{% notice tip %}}
**Para professores:** Os resultados variam a cada execução porque o `train_test_split` divide os dados de forma aleatória. O ponto principal de aprendizado é que o modelo alcança alta precisão (R² > 0,95) independentemente da divisão específica. Incentive os alunos a executar o código várias vezes e a comparar os resultados.

**Ideias de extensão para o workshop:**
- Tente diferentes posições (GK, CB, CM) em vez de ST
- Experimente diferentes variáveis-alvo (Value, Wage em vez de Overall)
- Altere a proporção treino/teste (experimente 0.1 ou 0.5 em vez de 0.25)
- Use menos ou mais recursos e compare a pontuação
{{% /notice %}}