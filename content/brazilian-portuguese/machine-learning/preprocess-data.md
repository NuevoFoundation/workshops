---
title: "Etapa 4: Pré-processar dados"
description: "Fundamentos de Aprendizado de máquina"
prereq: "Nenhum"
difficulty: "Intermediário"
draft: false
weight: 4
---

Até agora, importamos nosso conjunto de dados. Na vida real, cada jogador de futebol ocupa uma posição específica. Diferentes posições exigem força em diferentes atributos. Então, vamos restringir o escopo ao atacante.

Primeiro, vamos listar todas as posições.
Esta afirmação parece um pouco mais longa, mas funciona. O `fifa_data['position']` seleciona a coluna de posição do `fifa_data`, o `dropna()` elimina as células que estão em branco e o `unique()` remove todos os itens duplicados para nós.


```python
# para descobrir quantas posições existem
print(fifa_data['Position'].dropna().unique())
```

    ['RF' 'ST' 'LW' 'GK' 'RCM' 'LF' 'RS' 'RCB' 'LCM' 'CB' 'LDM' 'CAM' 'CDM'
     'LS' 'LCB' 'RM' 'LAM' 'LM' 'LB' 'RDM' 'RW' 'CM' 'RB' 'RAM' 'CF' 'RWB'
     'LWB']

Agora podemos filtrar os dados pela posição “ST”. Incentivamos você selecionar outras posições para ver qual é a diferença.


```python
# obter jogadores por posição
fifa_data_by_pos = fifa_data[fifa_data['Position']=='ST']
```

Vamos traçar um histograma para as avaliações gerais de todos os atacantes.

```python
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
```

    (array([ 40., 186., 363., 463., 601., 341., 113.,  34.,   9.,   2.]),
     array([47. , 51.7, 56.4, 61.1, 65.8, 70.5, 75.2, 79.9, 84.6, 89.3, 94. ]),
     <a list of 10 Patch objects>)

![Imagem de saída](../images/output_11_1.png)


A seguir, queremos dividir os dados em dois conjuntos, um é usado para treinar o modelo e outro é usado para verificar se o modelo treinado está bom.

Você pode pensar que deveríamos deixar o máximo possível de dados para treinamento porque isso torna o modelo melhor. O modelo se ajusta melhor, mas apenas para conjuntos de dados de treinamento. Quando você aplica o modelo aos dados de teste, a precisão da previsão pode diminuir. Isso é chamado de "sobreajuste".

Agora deixamos 25% dos dados para teste.


```python
# dividir dados em train_data e test_data aleatoriamente
# você pode alterar a proporção de test_size para ver o que acontecerá
train_data, test_data = train_test_split(fifa_data_by_pos,test_size=0.25)

# imprima o número de jogadores em train_data e test_data
# len() fornece o número de jogadores em formato numérico
# str() converte valor numérico em string
print("O # de dados de treinamento é " + str(len(train_data)))
print("O # de dados de teste é " + str(len(test_data)))
```

    O # de dados de treinamento é 1614
    O # de dados de teste é 538