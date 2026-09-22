---
title: "Construyendo la Red Neuronal"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funciones - Funciones integradas, Funciones de bibliotecas; Tipos de datos - Cadenas, Números, Lectura desde consola; Estructuras de datos - Listas, Tuplas, Conjuntos"
difficulties: ["intermedio"]
weight: 6
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ttOhB-w8dt0" title="Building the Neural Network - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Este es el primer paso para construir una **red neuronal**, que en realidad es una herramienta que nos permite hacer **"aprendizaje automático"**. Con esta herramienta, estamos entrenando un programa para analizar imágenes o datos, también conocidos como **datos de entrenamiento**.  
Luego, después del entrenamiento, podemos pedirle al programa que realice y ejecute una tarea específica utilizando lo que aprendió. Por ejemplo, digamos que entrenamos un programa con imágenes de perros y gatos, y proporcionamos al programa la identificación correcta de las imágenes. Una vez entrenado, podemos pedirle a la computadora que identifique si una imagen de mi mascota Whiskers es un gato o un perro.

En nuestro escenario, estamos utilizando imágenes de ropa pre-etiquetadas para entrenar nuestro modelo. Luego, queremos que el programa prediga correctamente el tipo de prenda que puede ser una entrada.

## Reconociendo patrones y agrupando elementos

Observa estas dos imágenes:

![Zapatilla blanca y negra con suela blanca](../media/NN_sneaker_ex1.png "Zapatilla blanca y negra con suela blanca")  
![Zapatilla negra](../media/NN_sneaker_ex2.png "Zapatilla negra")

Como se puede ver en estas imágenes, tenemos dos zapatillas. Ambas son imágenes diferentes y sus valores de píxeles varían significativamente, pero aún podemos categorizarlas como zapatillas. ¿Cómo hacemos esto? Nuestro cerebro interpreta estas imágenes observando patrones que hemos visto previamente y establece: "¡Eso es una zapatilla!"

¿Y por qué se llama zapatilla? En algún momento, se llegó colectivamente a un acuerdo de que esto es diferente de otros tipos de calzado porque las zapatillas tienen cordones, puntas largas, suelas gruesas de goma y cubren hasta los tobillos. Esto es posiblemente lo que nos dijeron cuando éramos niños: identificar este tipo de calzado como zapatillas.

¿Cómo es esto relevante para lo que estamos haciendo a continuación? Tenemos que decirle a la computadora que este tipo de imágenes son zapatillas. No podemos simplemente marcar estas dos imágenes como zapatillas porque esto sería ineficaz cuando se predigan futuras entradas utilizando este modelo.

Además, no tenemos que detenernos solo con las zapatillas para categorizar imágenes; podemos usar múltiples categorías para clasificar imágenes (recuerda haber creado la lista de diferentes categorías de ropa en la Actividad 1). Al final, estas son las categorías que estamos usando para clasificar todas las prendas de vestir.

## ¿Qué es una red neuronal?

El concepto de una **red neuronal** se originó de la idea de replicar el cerebro humano, más específicamente su capacidad para reconocer patrones. De hecho, la palabra 'neuronal' es una derivación de la palabra 'neurona', receptores en el cerebro que se activan, por ejemplo, cuando ve una imagen u objeto que reconoce.

En este caso, estamos entrenando a la computadora para reconocer qué es cada imagen (si es un zapato, una camisa, un bolso, etc.), por lo que nuestro objetivo principal al utilizar la red neuronal en este taller es darle a la computadora la capacidad de clasificar imágenes del conjunto de datos en diferentes categorías.

La imagen a continuación muestra una implementación simple de una red neuronal.

- La capa de entrada es responsable de introducir los datos en el sistema, apuntando a diferentes neuronas para entrenar el modelo.
- La capa oculta consiste en muchas neuronas, que son responsables de reconocer los diferentes patrones de los datos de entrada. Estos nodos luego apuntan a la capa de salida.
- La capa de salida consiste en uno o varios nodos que devuelven un valor de salida que el modelo predice.

![Diagrama de Red Neuronal](../media/neural_network.png "Diagrama de Red Neuronal")

En pocas palabras, una red neuronal es un sistema, o un algoritmo, que entrena a la computadora para reconocer diferentes tipos de patrones.

## ¿Cómo se relaciona con lo que estamos haciendo?

{{% notice note %}}
Recomendamos observar el primer bloque de código a continuación y el diagrama de la red neuronal para comprender mejor la relación entre ellos y los siguientes puntos.
{{% /notice %}}

- La capa de entrada toma los diferentes tipos de imágenes del conjunto de datos y los introduce en las neuronas (la capa oculta).
- Las neuronas (128 de ellas) luego reconocen diferentes patrones en las imágenes observando diferentes características y las relaciones entre ellas y las categorías predeterminadas. Esta capa le da a la computadora la capacidad de categorizar imágenes por sí misma.
- La capa de salida consiste en 10 nodos diferentes, representando las 10 categorías diferentes por las que clasificaríamos las imágenes. Dependiendo de la imagen específica y la forma en que la computadora fue entrenada por las neuronas, la salida será la categoría predicha más alta para esa imagen en particular.

{{% notice note %}}

Si estás interesado en leer más sobre redes neuronales, puedes visitar <a href="https://news.mit.edu/2017/explained-neural-networks-deep-learning-0414" target="_blank">este sitio web</a> de MIT News. 

<a href="https://en.wikipedia.org/wiki/Neural_network#/media/File:Neural_network_example.svg" target="_blank">Fuente de la Imagen</a>

{{% /notice %}}

Copia el siguiente código en tu Google Colab Notebook:

```python
model = keras.Sequential([ 
    # La primera capa (capa de entrada) transforma cada imagen (resolución de 28 x 28 píxeles) 
    # en un arreglo unidimensional cuyos índices corresponden a todos los píxeles de la imagen.
    keras.layers.Flatten(input_shape=(28, 28)), 
    keras.layers.Dense(128, activation='relu'), #capa oculta
    keras.layers.Dense(10) #capa de salida
])
```

```python
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])
```

{{% notice note %}}
No te preocupes si no ves ninguna salida al ejecutar este código. Esto es lo esperado.
{{% /notice %}}