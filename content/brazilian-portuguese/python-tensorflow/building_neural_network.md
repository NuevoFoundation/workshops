---
title: "Construindo a Rede Neural"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funções - Funções integradas, Funções de bibliotecas; Tipos de Dados - Strings, Números, Leitura do console; Estruturas de Dados - Listas, Tuplas, Conjuntos"
difficulty: Intermediário
weight: 6
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ttOhB-w8dt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Este é o primeiro passo na construção de uma **rede neural**, que é uma ferramenta que permite realizar **aprendizado de máquina**. Com essa ferramenta, treinamos um programa para analisar imagens ou dados — também chamados de **dados de treinamento**.

Depois do treinamento, podemos pedir para o programa executar uma tarefa específica com base no que ele aprendeu. Por exemplo: se treinarmos o programa com fotos de cães e gatos rotuladas corretamente, podemos pedir ao computador para identificar se a imagem do meu pet Whiskers é de um gato ou um cachorro.

No nosso caso, usaremos imagens pré-rotuladas de roupas para treinar o modelo. Depois, queremos que o programa consiga prever corretamente o tipo de roupa com base em uma imagem de entrada.

## Reconhecendo Padrões e Agrupando Itens

Veja estas duas imagens:

![Tênis preto e branco com sola branca](../media/NN_sneaker_ex1.png "Tênis preto e branco com sola branca")
![Tênis preto](../media/NN_sneaker_ex2.png "Tênis preto")

Ambas mostram tênis. As imagens são diferentes e os valores de pixel também variam, mas ainda assim conseguimos categorizá-las como tênis. Como conseguimos isso?

Nosso cérebro reconhece padrões com base em experiências anteriores e estabelece: “Isso é um tênis!”

E por que chamamos isso de tênis? Porque todos, em algum momento, concordaram que esse tipo de calçado com cadarços, bico longo, solado grosso de borracha e que cobre o tornozelo é um “tênis”. Foi isso que aprendemos.

Por que isso é relevante? Porque também precisamos ensinar o computador a identificar esse tipo de imagem como tênis. Mas não basta marcar apenas essas duas imagens como exemplo. Precisamos treinar o modelo com vários exemplos para garantir que ele possa prever corretamente futuras entradas.

E mais: não precisamos parar nos tênis — podemos usar múltiplas categorias para classificar as imagens (como vimos na Atividade 1). No fim, essas são as categorias usadas para organizar todas as peças de roupa.

## O que é uma Rede Neural?

O conceito de **rede neural** vem da tentativa de replicar o funcionamento do cérebro humano, especialmente a capacidade de reconhecer padrões. A palavra “neural” vem de “neurônio”, que são os receptores do cérebro que disparam quando vemos algo reconhecível.

Neste caso, estamos ensinando o computador a reconhecer o que é cada imagem (sapato, camisa, bolsa etc). Nosso objetivo é permitir que a rede neural classifique as imagens em diferentes categorias.

A imagem abaixo mostra uma implementação simples de rede neural:

- A **camada de entrada** fornece os dados para o sistema e os envia aos neurônios para treinar o modelo.
- A **camada oculta** contém vários neurônios, responsáveis por reconhecer padrões. Esses neurônios se conectam à camada de saída.
- A **camada de saída** tem um ou mais nós que retornam a previsão do modelo.

![Diagrama de Rede Neural](../media/neural_network.png "Diagrama de Rede Neural")

Resumindo: uma rede neural é um sistema (ou algoritmo) que treina o computador para reconhecer diferentes tipos de padrões.

## Como isso se relaciona com nosso projeto?

{{% notice note %}}
Recomendamos observar o primeiro bloco de código abaixo junto com o diagrama para entender melhor os pontos a seguir.
{{% /notice %}}

- A camada de entrada recebe as imagens e as repassa aos neurônios (camada oculta).
- Os neurônios (128 no total) aprendem padrões ao observar diferentes características nas imagens e relacioná-las às categorias.
- A camada de saída possui 10 nós, cada um representando uma das 10 categorias. O modelo retorna a categoria com maior probabilidade.

{{% notice note %}}
Se quiser aprender mais sobre redes neurais, confira este artigo do MIT: 
<a href="https://news.mit.edu/2017/explained-neural-networks-deep-learning-0414" target="_blank">Entendendo redes neurais e deep learning</a>

<a href="https://en.wikipedia.org/wiki/Neural_network#/media/File:Neural_network_example.svg" target="_blank">Fonte da imagem</a>
{{% /notice %}}

Copie o seguinte código no seu Google Colab Notebook:

```python
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),  # camada de entrada
    keras.layers.Dense(128, activation='relu'),  # camada oculta
    keras.layers.Dense(10)  # camada de saída
])
```

```python
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])
```

{{% notice note %}}
Não se preocupe se nada for exibido após rodar esse código — isso é esperado!
{{% /notice %}}
