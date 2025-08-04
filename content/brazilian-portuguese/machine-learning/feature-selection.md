---
title: "Etapa 5: Seleção de atributos (features)"
description: "Conceitos básicos de Machine Learning"
prereq: "nenhum"
difficulty: "Intermediário"
draft: false
weight: 5
---

Nossa próxima etapa é **selecionar os atributos certos**.  
No aprendizado de máquina, **seleção de atributos (feature selection)** é o nome dado ao processo de escolher quais colunas (ou variáveis) do nosso conjunto de dados devem ser usadas no modelo.  
Um **atributo** é o que chamamos de \(x\) na fórmula matemática — no nosso caso, é uma característica de um jogador de futebol.

Como estamos usando o modelo de **regressão linear**, a correlação de cada atributo com o alvo (`Overall`) será o critério usado para selecionar as melhores variáveis.

Usamos a função incorporada `corr` para calcular a correlação entre as colunas. Podemos escolher três métodos:

- `pearson` : coeficiente de correlação padrão (usado neste tutorial)  
- `kendall` : coeficiente de Kendall Tau  
- `spearman` : coeficiente de Spearman

Neste tutorial, usamos o método **pearson**:

```python
# selecionar o alvo
target = "Overall"

# Encontrar a correlação entre as colunas usando o método de Pearson
feature_corr = train_data.corr(method='pearson')[target]

# Ordenar os atributos por ordem decrescente de correlação
feature_corr = feature_corr.sort_values(ascending=False)

# Mostrar os 20 atributos com maior correlação
# Note que começamos do índice 1, e não do 0, porque 'Overall' estará sempre no topo
print(feature_corr[1:21])
```

Saída esperada:

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
```

Agora, podemos copiar e colar os **10 ou 12 melhores atributos** para usar em nosso modelo. (Observação: Não copie os espaços em branco.)

```python
# Selecionar alguns atributos manualmente
features = ["Positioning", "Finishing", "Special", "BallControl", 
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

Também podemos simplesmente extrair os nomes dos atributos diretamente da lista de correlação ordenada.  
Começamos do índice 1 para **não incluir `Overall`**, que sempre aparece no topo da lista.

```python
# Extrair os nomes dos atributos automaticamente
features = feature_corr[1:21].index.tolist()

# Mostrar os atributos selecionados
print(features)
```

Saída esperada:

```
['Positioning', 'Special', 'Finishing', 'BallControl', 'ShotPower', 'Reactions', 'Volleys', 'Composure', 'ShortPassing', 'Dribbling', 'LongShots', 'HeadingAccuracy', 'Vision', 'Skill Moves', 'Curve', 'Crossing', 'Potential', 'Penalties', 'LongPassing', 'FKAccuracy']
```
