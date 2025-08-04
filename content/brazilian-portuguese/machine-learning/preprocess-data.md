---
title: "Etapa 4: Pré-processar os dados"
description: "Conceitos básicos de Machine Learning"
prereq: "nenhum"
difficulty: "Intermediário"
draft: false
weight: 4
---

Agora que já importamos nosso conjunto de dados, vamos lembrar que, na vida real, cada jogador de futebol tem uma posição específica. E diferentes posições precisam de habilidades diferentes. Então vamos focar apenas nos atacantes (strikers).

Primeiro, vamos listar todas as posições.
Este comando é um pouco mais longo, mas ele faz o trabalho. O `fifa_data['position']` seleciona a coluna de posição do `fifa_data`, o `dropna()` elimina os espaços em branco e o `unique()` remove itens duplicados.

```python
# descobrir quantas posições existem
print(fifa_data['Position'].dropna().unique())
```

    ['RF' 'ST' 'LW' 'GK' 'RCM' 'LF' 'RS' 'RCB' 'LCM' 'CB' 'LDM' 'CAM' 'CDM'
     'LS' 'LCB' 'RM' 'LAM' 'LM' 'LB' 'RDM' 'RW' 'CM' 'RB' 'RAM' 'CF' 'RWB'
     'LWB']

Agora podemos filtrar os dados para pegar apenas quem joga na posição "ST". Você pode tentar outras posições depois, pra ver a diferença.

```python
# selecionar jogadores por posição
fifa_data_by_pos = fifa_data[fifa_data['Position']=='ST']
```

Vamos desenhar um gráfico para mostrar a distribuição das notas gerais (overall) dos atacantes.

```python
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
```

    (array([ 40., 186., 363., 463., 601., 341., 113.,  34.,   9.,   2.]),
     array([47. , 51.7, 56.4, 61.1, 65.8, 70.5, 75.2, 79.9, 84.6, 89.3, 94. ]),
     <a list of 10 Patch objects>)

![Imagem do gráfico](../images/output_11_1.png)

Agora, vamos dividir os dados em dois conjuntos: um para treinar o modelo e outro para testar se o modelo ficou bom.

Você pode pensar: "Ah, vou usar quase tudo pra treinar!" — mas cuidado! Isso pode fazer o modelo ficar bom só no treino e ruim nos testes. Isso se chama "overfitting" (ajuste exagerado).

Vamos deixar 25% dos dados para testar.

```python
# dividir os dados aleatoriamente em treino e teste
# você pode mudar o test_size pra ver o que acontece
train_data, test_data = train_test_split(fifa_data_by_pos, test_size=0.25)

# mostrar quantos jogadores tem em cada conjunto
# len() conta quantos tem
# str() transforma o número em texto pra mostrar direitinho
print("Quantidade de dados de treino: " + str(len(train_data)))
print("Quantidade de dados de teste: " + str(len(test_data)))
```

    Quantidade de dados de treino: 1614
    Quantidade de dados de teste: 538
