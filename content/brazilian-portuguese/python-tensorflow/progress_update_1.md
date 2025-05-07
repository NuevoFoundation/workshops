---
title: "Atualização de progresso 1"
date: 2020-09-09T16:19:17-07:00
prereq: "Python: Fundamentos - Funções: Funções Integradas, Funções de Bibliotecas; Tipos de Dados – Strings, Números, Leitura do Console; Estruturas de Dados - Listas"
difficulty: Intermediário
weight: 4
draft: false
---

## Compare seu código

Antes de prosseguir, verifique seu Notebook do Google Colab com o código abaixo:

```python
# Importando bibliotecas TensorFlow e tf.keras
import tensorflow as tf
from tensorflow import keras 


# Bibliotecas auxiliares para estatísticas e plotagem
import numpy as np
import matplotlib.pyplot as plt 
```

```python
#Esta variável é declarada a partir da biblioteca fashion_mist da seção de conjuntos de dados
fashion_mnist = keras.datasets.fashion_mnist 
```

```python
#Isso carrega quatro variáveis ​​do conjunto de dados.
#Os train_images e train_labels são dados que o modelo usa para aprender
#Os test_images e test_labels são usados ​​pelo modelo para comparação.
(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()
```

```python
class_names = ['Camiseta', 'Calças', 'Pulôver', 'Vestido', 'Casaco', 'Sandália', 'Camisa', 'Tênis', 'Bolsa', 'Bota'  ]
```

```python
plt.figure()
plt.imshow(train_images[0]) #Mostra a primeira imagem no conjunto de dados como um gráfico ou pixels de cores diferentes
plt.colorbar() #exibe a barra de cores à direita
plt.grid(False)
plt.show() #exibe todo o gráfico
```

![Bota](../media/a2q1.png)

```python
plt.figure()
plt.imshow(train_images[7]) #Mostra a primeira imagem no conjunto de dados como um gráfico ou pixels de cores diferentes
plt.colorbar() #exibe a barra de cores à direita
plt.grid(False)
plt.show() #exibe todo o gráfico
```

![Camiseta](../media/a2progress2.png)

```python
#the train_images e test_images variam entre valores de 0 a 255.
#Para manter a consistência entre o conjunto de treinamento e teste, dividiremos train_images e test_images por 255
train_images = train_images / 255.0 
test_images = test_images / 255.0
```

{{% notice info %}}

Se você quiser testar o código acima, visite <a href="https://colab.research.google.com/drive/1ndj0W1P_3uAG-L2a6LwxdJPSHbSK5WE6?usp=sharing" target="_blank">este link</a>

Para editar este código, clique no botão ‘Copy to Drive’ para fazer uma cópia pessoal deste caderno. Certifique-se de estar conectado à sua conta do Google.
![Captura de tela do Google Colab Notebook com "Seleção do botão Copiar para o Drive destacada"](../media/colab_copy.png)

{{% notice warning %}}
### Se você estiver usando uma conta Nuevo Google temporariamente
Depois de fazer uma cópia, certifique-se de substituir "Cópia de" pelo seu nome, junto com o nome do arquivo. Ele estará no canto superior esquerdo do seu notebook.
{{% /notice%}}

{{% /notice %}}