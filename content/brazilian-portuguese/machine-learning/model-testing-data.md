---
title: "Etapa 7: Testar o modelo com os dados de teste"
description: "Conceitos básicos de Machine Learning"
prereq: "nenhum"
difficulty: "Intermediário"
draft: false
weight: 7
---

Agora vamos usar o modelo treinado para estimar os jogadores no `test_data`.  
Assim como fizemos com o `train_data`, criamos `x_test` e `y_test`.

A função `model.predict()` vai gerar uma lista de resultados previstos.

```python
# queremos ordenar os dados de teste pelo valor alvo ("Overall")
test_data = test_data.sort_values([target], ascending=False)

x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)
```

Vamos comparar com as avaliações reais dos jogadores:

```python
# adiciona uma nova coluna com a pontuação prevista
test_data['Predicted Overall'] = y_pred.copy()

# adiciona a diferença percentual entre previsto e real
difference = (y_pred - y_test) / y_test * 100
test_data['Difference (%)'] = difference

# mostra o resultado
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
<!-- Tabela original omitida por brevidade -->
<p>Tabela de 538 linhas × 6 colunas</p>
</table>
</div>

Uau! Incrível, né? Com esse resultado, dá até pra usar esse modelo pra estimar a pontuação de qualquer jogador do mundo!

Agora vamos fazer um gráfico pra visualizar isso:

```python
# Mostrar gráfico
plt.scatter(range(0,y_test.shape[0]), y_test,  color='blue', label="Real")
plt.plot(range(0,y_test.shape[0]), y_pred, color='red', label="Previsto")

# adicionar marcações, rótulos e legenda
plt.xticks(())
plt.xlabel("Jogadores (ordenados pela pontuação real)")
plt.ylabel("Pontuação geral")
plt.legend(loc='upper right')
plt.show()
```

![Gráfico final](../images/output_27_0.png)
