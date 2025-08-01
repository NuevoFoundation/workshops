---
title: "Atualização de Progresso 1"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funções - Funções integradas, Funções de bibliotecas; Tipos de Dados - Strings, Números, Leitura do console; Estruturas de Dados - Listas"
difficulty: Intermediário
weight: 4
draft: false
---

## Compare seu Código

Antes de continuar, confira seu notebook do Google Colab com o código abaixo:

```python
# Importando bibliotecas TensorFlow e tf.keras
import tensorflow as tf
from tensorflow import keras 

# Bibliotecas auxiliares para estatísticas e gráficos
import numpy as np
import matplotlib.pyplot as plt 
```

```python
# Esta variável é carregada da biblioteca fashion_mnist da seção de datasets
fashion_mnist = keras.datasets.fashion_mnist 
```

```python
# Carrega quatro variáveis do dataset.
# train_images e train_labels são os dados usados para treinar o modelo
# test_images e test_labels são usados para testar a precisão do modelo
(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()
```

```python
class_names = ['Camiseta/Top', 'Calça', 'Suéter', 'Vestido', 'Casaco', 'Sandália', 'Camisa', 'Tênis', 'Bolsa', 'Bota']
```

```python
plt.figure()
plt.imshow(train_images[0])
plt.colorbar()
plt.grid(False)
plt.show()
```

![Bota](../media/a2q1.png "Bota pixelada com barra de cores")

```python
plt.figure()
plt.imshow(train_images[7])
plt.colorbar()
plt.grid(False)
plt.show()
```

![Camisa](../media/a2progress2.png "Camisa pixelada com barra de cores")

```python
# train_images e test_images têm valores entre 0 e 255.
# Para manter consistência, dividimos ambos por 255 para normalizar
train_images = train_images / 255.0 
test_images = test_images / 255.0
```

{{% notice info %}}

Se quiser testar o código acima, visite <a href="https://colab.research.google.com/drive/1ndj0W1P_3uAG-L2a6LwxdJPSHbSK5WE6?usp=sharing" target="_blank">este link</a>.

Para editar o código, clique no botão 'Copy to Drive' para criar uma cópia pessoal do notebook. Certifique-se de estar logado em sua conta Google.
![Captura de tela do Google Colab com botão "Copy to Drive"](../media/colab_copy.png "Botão Copy to Drive destacado")

{{% notice warning %}}
### Se você estiver usando uma conta Google temporária (Nuevo)
Após fazer a cópia, renomeie o notebook substituindo "Copy of" pelo seu nome, no canto superior esquerdo do notebook.
{{% /notice%}}

{{% /notice %}}
