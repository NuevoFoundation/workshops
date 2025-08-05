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

# Bibliotecas auxiliares para estatísticas e visualização
de dados
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
