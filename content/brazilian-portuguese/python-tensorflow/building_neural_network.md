---
title: "Construindo a Rede Neural"
date: 2020-09-09T16:19:17-07:00
prereq: "Python: Fundamentos - Funções: Funções Integradas, Funções de Bibliotecas; Tipos de Dados – Strings, Números, Leitura do Console; Estruturas de Dados - Listas, Tuplas, Conjuntos"
difficulty: Intermediário
weight: 6
draft: false
---

Este é o primeiro passo na construção de uma **rede neural**, que na verdade é uma ferramenta que nos permite fazer **"machine learning"** (aprendizado de máquina). Com esta ferramenta, estamos treinando um programa para analisar imagens ou dados, também conhecidos como **dados de treinamento**.
Depois do treinamento, podemos pedir ao programa para realizar e executar uma tarefa específica usando o que aprendeu. Por exemplo, digamos que treinamos um programa com fotos de cães e gatos e fornecemos ao programa a identificação correta das imagens. Uma vez treinados, podemos pedir ao computador para identificar se a foto do meu animal de estimação Bigodes é de um gato ou cachorro.

Em nosso cenário, estamos usando imagens de roupas pré-etiquetadas para treinar nosso modelo. Então, queremos que o programa preveja corretamente o tipo de roupa que uma entrada pode ser.

## Reconhecendo padrões e agrupando itens

Dê uma olhada nessas duas imagens.

![Tênis preto e branco com sola branca](../media/NN_sneaker_ex1.png)
![Tênis preto](../media/NN_sneaker_ex2.png)

Como podemos ver nestas imagens, temos dois tênis. Ambas são imagens diferentes e seus valores de pixel variam significativamente, mas ainda podemos categorizá-las como tênis. Como vamos fazer isso? Nosso cérebro interpreta essas imagens observando padrões que observamos anteriormente e estabelece: "Isso é um tênis!"

E por que isso é chamado de tênis? Em algum momento, todos concordaram coletivamente que isso é diferente de outros tipos de calçados porque os tênis têm cadarços, bicos longos, solas grossas de borracha e cobrem os pés até os tornozelos. Isto é o que provavelmente nos disseram quando crianças – para identificar esses tipos de calçados como tênis.

Como isso é relevante para o que faremos a seguir? Precisaremos informar ao computador que esses tipos de imagens são tênis. Não podemos simplesmente marcar essas duas imagens como tênis porque isso seria ineficaz na previsão de entradas futuras usando este modelo.

Além disso, não precisamos nos limitar apenas aos tênis para categorizar as imagens - podemos usar diversas categorias para classificar as imagens (lembre-se de criar a lista de diferentes categorias de roupas na Atividade 1). No final das contas, essas são as categorias que usamos para classificar todas as roupas.

## O que é uma rede neural?

O conceito de **rede neural** originou-se da ideia de replicar o cérebro humano, mais especificamente de sua capacidade de reconhecer padrões. Na verdade, a palavra “neural” é uma derivação da palavra “neurônio”, receptores no cérebro que disparam quando, por exemplo, vê uma imagem ou um objeto que reconhece.

Neste caso, estamos treinando o computador para reconhecer o que é cada imagem (seja um sapato, uma camisa, uma bolsa, etc.), então nosso principal objetivo ao utilizar a rede neural neste workshop é dar ao computador a capacidade para classificar imagens do conjunto de dados em diferentes categorias.

A imagem abaixo mostra uma implementação simples de uma rede neural.

- A camada de entrada é responsável por alimentar o sistema com dados, apontando para diferentes neurônios para treinar o modelo.
- A camada oculta consiste em vários neurônios, responsáveis ​​por reconhecer os diferentes padrões dos dados de entrada. Esses nós apontam então para a camada de saída.
- A camada de saída consiste em um único nó ou vários nós que retornam um valor de saída que o modelo prevê.

![Diagrama de rede neural](../media/neural_network.png)

Simplificando, uma rede neural é um sistema, ou algoritmo, que treina o computador para reconhecer diferentes tipos de padrões.

## Como está relacionado ao que estamos fazendo?

{{% notice note %}}
Recomendamos observar o primeiro bloco de código abaixo e o diagrama da rede neural para entender melhor a relação entre eles e os pontos a seguir.
{{% /notice %}}

- A camada de entrada pega os diferentes tipos de imagens do conjunto de dados e os alimenta nos neurônios (a camada oculta).
- Os neurônios (128 deles) reconhecem então diferentes padrões nas imagens, observando diferentes características e as relações entre eles e as categorias pré-determinadas. Essa camada dá ao computador a capacidade de categorizar imagens por conta própria.
- A camada de saída consiste em 10 nós diferentes, representando as 10 categorias diferentes pelas quais classificaríamos as imagens. Dependendo da imagem específica e da forma como o computador foi treinado pelos neurônios, a saída será a categoria prevista mais alta para aquela imagem específica.

{{% notice note %}}

Se estiver interessado em ler mais sobre redes neurais, você pode conferir <a href="https://news.mit.edu/2017/explained-neural-networks-deep-learning-0414" target="_blank"> este site</a> do MIT News.
 
<a href="https://en.wikipedia.org/wiki/Neural_network#/media/File:Neural_network_example.svg" target="_blank">Fonte da imagem</a>

{{% /notice %}}

Copie o seguinte código em seu Notebook do Google Colab:

```python
model = keras.Sequential([ 
    # A primeira camada (camada de entrada) transforma cada imagem (resolução é 28 x 28 pixels)
    # em um array unidimensional cujos índices correspondem a todos os pixels da imagem.
    keras.layers.Flatten(input_shape=(28, 28)), 
    keras.layers.Dense(128, activation='relu'), #camada oculta
    keras.layers.Dense(10) #camada de saída
])
```

```python
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])
```

{{% notice note %}}
Não se preocupe se não vir nenhuma saída após executar este código. Isto é esperado.
{{% /notice %}}