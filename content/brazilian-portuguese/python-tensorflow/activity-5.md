---
title: "Atividade 5 - Testando o Modelo"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funções - Funções integradas, Funções de bibliotecas; Tipos de Dados - Strings, Números, Leitura do console; Estruturas de Dados - Listas"
difficulty: Intermediário
weight: 8
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/3FELV6BYtIo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Testando Nosso Modelo

Agora que construímos e treinamos nosso modelo, queremos testá-lo com itens de roupas devolvidos. 
Vamos começar com o primeiro item de amostra, que era o sapato:

```python
# Inicia um objeto de modelo com camada softmax
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```

{{% notice note %}}
Uma **camada softmax** é um tipo de camada de rede neural que transforma os dados de entrada em uma **distribuição de probabilidade** entre 0 e 1.
{{% /notice %}}

```python
predictions = probability_model.predict(test_images)
```

O código abaixo retorna uma lista de probabilidades de que uma imagem pertence a uma categoria específica. O índice corresponde à imagem sendo classificada.

```python
predictions[0]  # Retorna o vetor de probabilidades para a primeira imagem de teste
```

### Pergunta 1
O array retornado representa o **nível de confiança** de que a imagem pertence a cada categoria. 

- Qual índice possui o valor de maior confiança?
- E qual o menor valor de confiança?

### Pergunta 2
Verifique sua resposta com o seguinte código:

```python
np.argmax(predictions[0])
```

```python
test_labels[0]
```

Na lista `class_names`, a que categoria esse índice corresponde? 
(Dica: dado o índice do maior valor de probabilidade, qual índice você deve consultar?)

Verifique a que categoria a imagem pertence com o código:

```python
class_names[9]
```

Está correto?
