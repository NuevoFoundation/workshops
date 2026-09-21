---
title: "Actualización de Progreso 1"
date: 2020-09-09T16:19:17-07:00
prereq: "Conceptos básicos de Python: Funciones - Funciones integradas, Funciones de bibliotecas; Tipos de datos - Cadenas de texto, Números, Lectura desde la consola; Estructuras de datos - Listas"
difficulties: ["intermedio"]
weight: 4
draft: false
---

## Compara tu Código

Antes de continuar, verifica tu notebook de Google Colab con el código a continuación:

```python
# Importando las bibliotecas TensorFlow y tf.keras
import tensorflow as tf
from tensorflow import keras 


# Bibliotecas auxiliares para estadísticas y gráficos
import numpy as np
import matplotlib.pyplot as plt 
```

```python
#Esta variable se declara desde la biblioteca fashion_mnist de la sección de datasets
fashion_mnist = keras.datasets.fashion_mnist 
```

```python
#Esto carga cuatro variables del conjunto de datos. 
#Las train_images y train_labels son datos que el modelo utiliza para aprender
#Las test_images y test_labels son utilizadas por el modelo para comparar.
(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()
```

```python
class_names = ['Camiseta/top', 'Pantalón', 'Jersey', 'Vestido', 'Abrigo', 'Sandalia', 'Camisa', 'Zapatilla', 'Bolsa', 'Bota de tobillo']
```

```python
plt.figure()
plt.imshow(train_images[0]) #Muestra la primera imagen del conjunto de datos como un gráfico o píxeles de diferentes colores
plt.colorbar() #muestra la barra de colores a la derecha
plt.grid(False)
plt.show() #muestra todo el gráfico
```

![Bota de tobillo](../media/a2q1.png "Bota pixelada con barra de colores")

```python
plt.figure()
plt.imshow(train_images[7]) #Muestra la primera imagen del conjunto de datos como un gráfico o píxeles de diferentes colores
plt.colorbar() #muestra la barra de colores a la derecha
plt.grid(False)
plt.show() #muestra todo el gráfico
```

![Camisa](../media/a2progress2.png "Camisa pixelada con barra de colores")

```python
#las train_images y test_images tienen valores que oscilan entre 0 y 255. 
#Para mantener la consistencia entre el conjunto de entrenamiento y prueba, dividiremos train_images y test_images por 255
train_images = train_images / 255.0 
test_images = test_images / 255.0
```

{{% notice info %}}

Si deseas probar el código anterior, visita <a href="https://colab.research.google.com/drive/1ndj0W1P_3uAG-L2a6LwxdJPSHbSK5WE6?usp=sharing" target="_blank">este enlace</a>

Para editar este código, haz clic en el botón 'Copiar a Drive' para hacer una copia personal de este notebook. Asegúrate de haber iniciado sesión en tu cuenta de Google.
![Captura de pantalla del Notebook de Google Colab con selección del botón "Copiar a Drive" resaltada](../media/colab_copy.png "Captura de pantalla del Notebook de Google Colab")

{{% notice warning %}}
### Si estás usando una cuenta de Google Nuevo temporalmente
Una vez que hagas la copia, asegúrate de reemplazar "Copy of" con tu nombre, junto con el nombre del archivo. Esto estará en la esquina superior izquierda de tu notebook.
{{% /notice%}}

{{% /notice %}}