---
title: "Actividad 1 - Importando la biblioteca TensorFlow y conjuntos de datos"
date: 2020-09-09T16:19:17-07:00
prereq: "Conceptos básicos de Python: Funciones - Funciones incorporadas, Funciones de bibliotecas; Tipos de datos - Cadenas, Números, Lectura desde la consola; Estructuras de datos - Listas"
difficulties: ["intermedio"]
weight: 2
draft: false
---


<iframe width="560" height="315" src="https://www.youtube.com/embed/OxDn2xDXWi4" title="Actividad 1 - Importando la biblioteca TensorFlow y conjuntos de datos - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Importar Dependencias

#### Bibliotecas
Lo primero que debemos hacer es importar la biblioteca TensorFlow para utilizar las funciones que nos permitirán entrenar nuestro modelo.

También implementaremos gráficos para visualizar la predicción de nuestro modelo, para lo cual necesitamos importar las siguientes bibliotecas:

```python
# Importando bibliotecas TensorFlow y tf.keras

import tensorflow as tf
from tensorflow import keras 

# Bibliotecas auxiliares para estadísticas y gráficos

import numpy as np
import matplotlib.pyplot as plt 
```

Estas bibliotecas son esenciales, ya que son una colección de métodos y funciones precompilados, y al importarlas en nuestro programa podemos acceder a esos métodos sin necesidad de reescribir todas las bibliotecas. Por ejemplo, importamos los métodos y funciones de TensorFlow y NumPy para evitar tener que escribir la totalidad de estos programas dentro del nuestro.

#### Cargar Conjuntos de Datos
Ahora queremos cargar el conjunto de datos Fashion MNIST, que contiene la colección de todas las imágenes de ropa que necesitamos para nuestro modelo.

```python
# Esta variable se declara desde la biblioteca fashion_mist de la sección datasets

fashion_mnist = keras.datasets.fashion_mnist 
```

```python
# Esto carga cuatro variables del conjunto de datos. 
# Las train_images y train_labels son datos que el modelo utiliza para aprender
# Las test_images y test_labels son utilizadas por el modelo para compararlas.

(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data() 
```

{{% notice note %}}
Podrás notar que estamos dividiendo los datos en conjuntos de entrenamiento y prueba con sus respectivas etiquetas. Un **conjunto de datos de entrenamiento** es para que nuestro modelo aprenda los parámetros óptimos para lograr nuestras tareas, mientras que el **conjunto de datos de prueba** sirve para validar qué tan bien ha aprendido nuestro modelo. Esto es como cuando aprendemos cosas: continuamente recibimos entrenamiento y pruebas para mejorar.
{{% /notice %}}

<br>

### Preparar Nuestros Datos

El siguiente paso es crear una lista de categorías bajo la variable `class_names`. 

Tu supervisor te da las categorías de prendas que el almacén procesa. Esto se creará bajo la variable `class_names`. 

{{% notice tip %}}

<a href="https://workshops.nuevofoundation.org/python-basics/data-structures/lists/" target="_blank">¿No estás seguro de cómo crear una lista en Python?</a>

### Tarea 1

Escribe los siguientes nombres de clases en la lista `class_names`:

- Camiseta/top
- Pantalón
- Jersey
- Vestido
- Abrigo
- Sandalia
- Camisa
- Zapatilla
- Bolso
- Botín

{{% /notice %}}

{{% notice info %}}
### Lectura Opcional

Si estás interesado en aprender más sobre estas bibliotecas en detalle, no dudes en visitar los siguientes sitios web. 

<a href="https://www.tensorflow.org/overview" target="_blank">Aprende sobre TensorFlow</a>

<a href="https://www.w3schools.com/python/numpy_intro.asp" target="_blank">Aprende sobre NumPy</a>

<a href="https://matplotlib.org/" target="_blank">Aprende sobre Matplotlib</a>

{{% /notice %}}