---
title: "Etapa 5: seleção de recursos"
description: "Fundamentos de Aprendizado de máquina"
prereq: "Nenhum"
difficulty: "Intermediário"
draft: false
weight: 5
---

Nossa próxima etapa é selecionar os recursos adequados. Seleção de recursos é um termo em aprendizado de máquina para descrever o método e o processo de escolha de recursos relevantes para o modelo. Um recurso é um \(x\) na fórmula. Na nossa história, é um atributo de um jogador de futebol.

Como estamos usando o modelo de regressão linear, a forma como o atributo correlacionado ao alvo ("Geral") torna-se o critério para escolher os recursos corretos.

Usamos uma correlação de função integrada `corr` para calcular a correlação de pares de colunas. Existem três métodos que podemos escolher,
- pearson: coeficiente de correlação padrão
- kendall: coeficiente de correlação Kendall Tau
- spearman: correlação de classificação do lanceiro

Neste tutorial usamos pearson.


```python
# selecione o alvo
target = "Geral"

# Para encontrar a correlação entre as colunas usando o método pearson
feature_corr = train_data.corr(method ='pearson') [target]

# classificar os recursos
feature_corr = feature_corr.sort_values(ascending = False)

# mostra os 20 principais recursos
# observe que começamos de 1 e não de zero, porque o geral está sempre no topo da lista
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
    

Agora podemos copiar e colar os 10 ou 12 principais recursos. (Nota: Por favor, não copie o espaço)


```python
# selecione alguns recursos
features = ["Posicionamento", "Finalização", "Especial", "ControleDeBola",
            "ForçaDeTiro", "Reações", "Voleios", "Compostura", "PasseCurto"]
```

Além disso, podemos apenas extrair os nomes dos recursos do índice. Observe que começamos em 1 porque não queremos incluir `geral` quem está sempre no topo da lista.


```python
# extrai nomes de recursos da série
features = feature_corr[1:21].index.tolist()

#mostra as funcionalidades
print(features)
```

    ['Posicionamento', 'Especial', 'Finalização', 'ControleDeBola', 'ForçaDeTiro', 'Reações', 'Voleios', 'Compostura', 'PasseCurto', 'Drible', 'TirosLongos', 'PrecisãoDeDireção', ' Visão', 'MovimentosDeHabilidade', 'Curva', 'Cruzamento', 'Potencial', 'Penalidades', 'PasseLongo', 'PrecisãoFK']