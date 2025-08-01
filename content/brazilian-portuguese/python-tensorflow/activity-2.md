---
title: "Atividade 1 - Importando a biblioteca TensorFlow e os conjuntos de dados"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funções - Funções integradas, Funções de bibliotecas; Tipos de Dados - Strings, Números, Leitura do console; Estruturas de Dados - Listas"
difficulty: Intermediário
weight: 2
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/OxDn2xDXWi4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Importar Dependências

#### Pacotes
A primeira coisa que precisamos fazer é importar a biblioteca **TensorFlow** para que possamos utilizar funções que nos permitirão treinar o modelo.

Também utilizaremos gráficos para visualizar as previsões do nosso modelo. Para isso, precisamos importar as seguintes bibliotecas:

```python
# Importando as bibliotecas TensorFlow e tf.keras
import tensorflow as tf
from tensorflow import keras 

# Bibliotecas auxiliares para estatísticas e visualização de dados
import numpy as np
import matplotlib.pyplot as plt 
```

Essas bibliotecas são essenciais pois fornecem uma coleção de métodos e funções já prontos. Importá-las para nosso programa permite usá-las sem reescrever tudo do zero. Por exemplo, com TensorFlow e NumPy, podemos trabalhar com redes neurais e arrays de forma prática.

---

### Carregar Conjuntos de Dados

Agora vamos carregar o dataset **Fashion MNIST**, que contém imagens de roupas usadas para treinar nosso modelo.

```python
# Carregando o dataset Fashion MNIST da biblioteca keras.datasets
fashion_mnist = keras.datasets.fashion_mnist 
```

```python
# Carregando os dados em quatro variáveis:
# train_images e train_labels serão usados para treinar o modelo
# test_images e test_labels serão usados para testar a performance do modelo
(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data() 
```

{{% notice note %}}
Você deve ter notado que dividimos os dados em dois conjuntos: **treinamento** e **teste**.  
O conjunto de **treinamento** serve para o modelo "aprender" os melhores parâmetros.  
O conjunto de **teste** é usado para validar o quão bem o modelo aprendeu.  
É como estudar para uma prova — você treina com exercícios e depois testa seus conhecimentos!
{{% /notice %}}

---

### Preparar os Dados

O próximo passo é criar uma lista com os nomes das categorias de roupas, usando a variável `class_names`.

O seu gerente forneceu a lista de categorias de roupas processadas no armazém. Vamos armazenar isso em uma **lista chamada `class_names`**.

{{% notice tip %}}

<a href="https://workshops.nuevofoundation.org/python-basics/data-structures/lists/" target="_blank">Não lembra como criar uma lista em Python?</a>

### Tarefa 1

Escreva os seguintes nomes das classes na lista `class_names`:

- T-shirt/top
- Trouser
- Pullover
- Dress
- Coat
- Sandal
- Shirt
- Sneaker
- Bag
- Ankle boot

{{% /notice %}}

---

{{% notice info %}}
### Leitura Opcional

Se você quiser aprender mais sobre essas bibliotecas, confira os links abaixo:

- [Conheça o TensorFlow](https://www.tensorflow.org/overview)
- [Introdução ao NumPy (W3Schools)](https://www.w3schools.com/python/numpy_intro.asp)
- [Documentação do Matplotlib](https://matplotlib.org/)
{{% /notice %}}

---

title: "Atividade 2 - Exibindo Valores de Cor RGB para Imagens"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funções - Funções integradas, Funções de bibliotecas; Tipos de Dados - Strings, Números, Leitura do console; Estruturas de Dados - Listas"
difficulty: Intermediário
weight: 3
draft: false

<iframe width="560" height="315" src="https://www.youtube.com/embed/bMr1c4a7dXQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Visualizar Imagens das Amostras

Vamos agora visualizar a imagem de um sapato da nossa coleção de amostras de roupas usando o código abaixo.

Copie e cole o seguinte código no seu notebook do Google Colab:

```python
plt.figure()
plt.imshow(train_images[0]) # Exibe a primeira imagem como um gráfico de pixels coloridos
plt.colorbar() # Mostra a barra de cores à direita
plt.grid(False)
plt.show() # Exibe o gráfico completo
```

{{% notice tip %}}
Perceba que a imagem gerada possui uma barra de cores à direita. Esse recurso indica que o sapato utiliza valores de pixel de 0 a 255. Mas o que são valores de pixel?

**Pixels** são a menor unidade gráfica (de imagem ou tela) que um display pode representar. Pense na tela do seu computador! Existem milhões de pequenos pontos coloridos que, combinados, formam uma imagem ou texto.

A barra de cores mostra o intervalo de intensidade que um pixel pode apresentar.
![Imagem de bota com faixa de pixel de 0 a 255](../media/a2q1.png "Bota pixelada com barra de cores")
{{% /notice %}}

#### Pergunta 1:
Depois de analisar o sapato, queremos visualizar outro item da coleção. Você consegue descobrir como fazer isso com base no código anterior?

{{% notice hint %}}
Use o código do bloco anterior e altere o valor do índice em `train_images[x]` para ver uma nova imagem.

Por exemplo, ao usar o índice 7, obtemos o seguinte item:
![Imagem de camisa](../media/a2progress2.png "Camisa pixelada com barra de cores")
{{% /notice %}}

---

### Normalizar os Valores dos Pixels

O programa que escreveremos exige valores entre 0 e 1. Porém, os nossos pixels vão de 0 a 255. Como podemos ajustar essa faixa de números para que caibam entre 0 e 1?

Usaremos um processo chamado **"normalização"**, que transforma os valores dividindo todos eles por um único valor — nesse caso, 255 — para encaixar o intervalo entre 0 e 1.

#### Pergunta 2:
Você consegue adivinhar por qual número devemos dividir os valores para normalizá-los?

{{% notice tip %}}
Se isso estiver confuso, pense em porcentagens. Se sua prova vale 255 pontos e você acerta 240, divide-se 240 por 255 para obter a porcentagem. Estamos fazendo algo parecido aqui.
{{% /notice %}}

Copie e cole o código abaixo no seu notebook:

```python
# Os valores de train_images e test_images vão de 0 a 255.
# Para normalizar, dividimos todos por 255 para que fiquem entre 0 e 1.
train_images = train_images / 255.0 
test_images = test_images / 255.0
```
