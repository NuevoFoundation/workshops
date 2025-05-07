---
title: "Atividade 1 - Importar a biblioteca e os conjuntos de dados do TensorFlow"
date: 2020-09-09T16:19:17-07:00
prereq: "Python: Fundamentos - Funções: Funções Integradas, Funções de Bibliotecas; Tipos de Dados – Strings, Números, Leitura do Console; Estruturas de Dados - Listas"
difficulty: Intermediário
weight: 2
draft: false
---

### Importar Dependências

#### Pacotes
A primeira coisa que precisamos fazer é importar a biblioteca TensorFlow para utilizar funções que nos permitirão treinar seu modelo.

Também estaremos implementando gráficos para visualizar a previsão do nosso modelo, portanto para isso precisamos importar as seguintes bibliotecas:

```python
# Importando bibliotecas TensorFlow e tf.keras

import tensorflow as tf
from tensorflow import keras 

# Bibliotecas auxiliares para estatísticas e plotagem

import numpy as np
import matplotlib.pyplot as plt 
```

Essas bibliotecas são essenciais porque são uma coleção de métodos e funções pré-compilados e importá-los para o nosso programa nos permitem acessar esses métodos sem ter que reescrever essas bibliotecas inteiras. Por exemplo, importamos os métodos e funções para TensorFlow e NumPy para evitar ter que escrever todos esses programas em nosso próprio programa.

#### Carregar conjuntos de dados
Agora queremos carregar o conjunto de dados Fashion MNIST, que contém o acervo de todas as imagens de roupas que precisamos para o seu modelo.

```python
#Esta variável é declarada na biblioteca fashion_mist da seção de conjuntos de dados

fashion_mnist = keras.datasets.fashion_mnist 
```

```python
#Isso carrega quatro variáveis ​​do conjunto de dados.
#Os train_images e train_labels são dados que o modelo usa para aprender
#Os test_images e test_labels são usados ​​pelo modelo para comparação.

(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data() 
```

{{% notice note %}}
Você pode notar que estamos dividindo os dados em conjuntos de dados de treinamento e teste com seus rótulos correspondentes. Um **conjunto de dados de treinamento** serve para nosso modelo aprender sobre os parâmetros ideais para realizar nossas tarefas, enquanto o **conjunto de dados de teste** serve para validar o quão bem nosso modelo aprendeu. É assim como aprendemos coisas: estamos sendo continuamente treinados e testados para melhorar!
{{% /notice %}}

<br>

### Prepare nossos dados

O próximo passo é criar uma lista de categorias sob a variável `class_names`.

Seu supervisor fornece as categorias de vestuário que o depósito processa. Isso será criado na variável `class_names`.

{{% notice tip %}}

<a href="https://workshops.nuevofoundation.org/python-basics/data-structures/lists/" target="_blank">Não sabe como criar uma lista em Python?</a>

### Tarefa 1

Escreva os seguintes nomes de classes na lista `class_names`: 

- Camiseta
- Calça
- Pulôver
- Vestido
- Casaco
- Sandália
- Camisa
- Tênis
- Bolsa
- Bota

{{% /notice %}}

{{% notice info %}}
### Leitura Opcional

Se você estiver interessado em aprender mais sobre essas bibliotecas, fique à vontade para visitar os seguintes sites.

<a href="https://www.tensorflow.org/overview" target="_blank">Aprenda sobre TensorFlow</a>

<a href="https://www.w3schools.com/python/numpy_intro.asp" target="_blank">Aprenda sobre NumPy</a>

<a href="https://matplotlib.org/" target="_blank">Aprenda sobre Matplotlib</a>

{{% /notice %}}
