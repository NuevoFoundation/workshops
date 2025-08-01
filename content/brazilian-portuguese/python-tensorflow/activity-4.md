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
import tensorflow as tf
from tensorflow import keras 
import numpy as np
import matplotlib.pyplot as plt 
```

Essas bibliotecas são essenciais pois fornecem uma coleção de métodos e funções já prontos. Importá-las para nosso programa permite usá-las sem reescrever tudo do zero.

---

### Carregar Conjuntos de Dados

```python
fashion_mnist = keras.datasets.fashion_mnist 
(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data() 
```

{{% notice note %}}
Dividimos os dados em dois conjuntos: **treinamento** e **teste**. O primeiro serve para o modelo aprender, e o segundo para validar o aprendizado.
{{% /notice %}}

---

### Preparar os Dados

```python
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat', 'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']
```

---

{{% notice info %}}
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

```python
plt.figure()
plt.imshow(train_images[0])
plt.colorbar()
plt.grid(False)
plt.show()
```

{{% notice tip %}}
Pixels vão de 0 a 255 e formam imagens ao se combinarem.
![Imagem de bota com faixa de pixel de 0 a 255](../media/a2q1.png)
{{% /notice %}}

#### Pergunta 1:
Use outro índice em `train_images[x]` para ver outra imagem.

{{% notice hint %}}
Exemplo com índice 7:
![Imagem de camisa](../media/a2progress2.png)
{{% /notice %}}

---

### Normalizar os Valores dos Pixels

```python
train_images = train_images / 255.0 
test_images = test_images / 255.0
```

{{% notice tip %}}
Dividir por 255 normaliza os valores para o intervalo 0 a 1, como em porcentagens.
{{% /notice %}}

---

title: "Atividade 3 - Exibindo Amostras de Roupas"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funções - Funções integradas, Funções de bibliotecas; Tipos de Dados - Strings, Números, Leitura do console; Estruturas de Dados - Listas; Laços - For"
difficulty: Intermediário
weight: 5
draft: false

<iframe width="560" height="315" src="https://www.youtube.com/embed/8dMNuQcmx5s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Exibir Amostras

Copie o código abaixo para seu notebook. Ele mostra uma coleção de imagens com seus respectivos rótulos:

```python
plt.figure(figsize=(10,10))
for i in range(25):
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary)
    plt.xlabel(class_names[train_labels[i]])
plt.show()
```

### Pergunta 1

Seu supervisor entregou entre 15 e 20 novas amostras de roupas, que você deverá incluir no programa.

Altere o `for` para que sejam exibidas **6 linhas e 7 colunas** de imagens.

**Quantas imagens no total isso representará?**

Reflita sobre quais partes do código precisam ser modificadas, como o `range()` e os parâmetros do `subplot()`.

---

title: "Atividade 4 - Treinando o Modelo"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funções - Funções integradas, Funções de bibliotecas; Tipos de Dados - Strings, Números, Leitura do console; Estruturas de Dados - Listas, Tuplas, Conjuntos"
difficulty: Intermediário
weight: 7
draft: false

<iframe width="560" height="315" src="https://www.youtube.com/embed/o0o9JTm2xIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Parâmetros de Treinamento

O código abaixo define quantas vezes o modelo será treinado. É normal que essa etapa demore um pouco mais para ser executada:

```python
model.fit(train_images, train_labels, epochs=10)
```

{{% notice note %}}
**Épocas (epochs)** representam quantas vezes o modelo processa todos os dados de treinamento.
{{% /notice %}}

O código a seguir imprime a acurácia do modelo com o conjunto de teste:

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```

### Pergunta 1
Defina `epochs=2`. Qual é a acurácia da última época? E qual a acurácia de teste ao comparar com o conjunto de teste?

### Pergunta 2
Defina `epochs=10`. Repita a Pergunta 1.

### Pergunta 3
Defina `epochs=20`. Repita a Pergunta 1.

### Pergunta 4
Qual correlação você percebe ao aumentar o número de épocas? A acurácia aumenta ou diminui?
