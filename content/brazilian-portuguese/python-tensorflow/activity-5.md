---
title: "Atividade 5 – Testando o Modelo"
date: 2020-09-09T16:19:17-07:00
prereq: "Python: Fundamentos - Funções: Funções Integradas, Funções de Bibliotecas; Tipos de Dados – Strings, Números, Leitura do Console; Estruturas de Dados - Listas"
difficulty: Intermediário
weight: 8
draft: false
---

<br>

### Testando nosso modelo

Agora que construímos e treinamos nosso modelo, queremos ir em frente e testá-lo em relação a itens de vestuário retornados.
Vamos começar com nosso primeiro item de amostra, que foi o sapato.
```python
# Iniciar um objeto modelo com uma camada softmax
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```

{{% notice note %}}
Uma **camada softmax** é um tipo de camada de rede neural em um modelo de aprendizado de máquina. A camada softmax transforma nossas entradas, que teoricamente poderiam vir de uma gama variada de estruturas de dados, em uma distribuição de probabilidade entre 0 e 1.
{{% /notice %}}

```python
predictions = probability_model.predict(test_images)
```

O código a seguir fornece uma lista de probabilidades de uma imagem se enquadrar em uma categoria específica. O valor do índice corresponde a qual imagem seria classificada.
```python
predictions[0] #Retorna o índice com maior probabilidade, depende do valor do índice.
```

### Questão 1
A matriz de valores representa o nível de confiança de que uma imagem pertence a uma categoria específica. Qual índice tem o maior valor de confiança e qual tem o menor valor de confiança?

### Questão 2
Verifique sua resposta para o valor de probabilidade mais alto executando o código abaixo:

```python
np.argmax(predictions[0])
```

```python
test_labels[0]
```

No array (vetor) `class_names`, a qual categoria esse índice corresponde? (Dica: dado o índice do valor máximo de probabilidade, qual índice você deve procurar?)

Verifique em qual categoria esta imagem se enquadra usando este código. Está correto?

```python
class_names[9]
```