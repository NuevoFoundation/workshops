---
title: "Graficando el Modelo y sus Predicciones"
date: 2020-09-09T16:19:17-07:00
prereq: "Conceptos básicos de Python: Funciones - Funciones integradas, Funciones de bibliotecas; Tipos de datos - Cadenas de texto, Números, Lectura desde la consola; Estructuras de datos - Listas, Tuplas, Conjuntos; Bucles - Bucles 'for'."
difficulties: ["intermedio"]
weight: 11
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/FrO66fkSU7M" title="Graficando el Modelo y sus Predicciones - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</br>
</br>

Ahora que somos capaces de clasificar la categoría de una prenda individual utilizando nuestro modelo, visualizaremos estas predicciones creando un gráfico de barras para una imagen específica.

## Clasificación Predicha

La función `plot_image` muestra una imagen junto con su clasificación predicha, el nivel de confianza del modelo para esa categoría y la clasificación real (que es para referencia).

{{% notice tip %}}
Un **nivel de confianza** se utiliza para transmitir qué tan seguros o ciertos estamos de que nuestra respuesta sea correcta. Si tienes que predecir si lloverá mañana, tus posibles respuestas son sí o no. ¿Qué pasa si no estás totalmente seguro de tu respuesta? Por ejemplo, si el meteorólogo predice lluvia para mañana, podrías decir que tienes un 90% de confianza. Esto significa que estás bastante seguro de que lloverá mañana, pero también nos dice que piensas que hay un 10% de probabilidad de que estés equivocado. 

Un nivel de confianza menor indica que estás menos seguro de que tu respuesta sea correcta, y es más probable que te equivoques o seas incorrecto en alguna medida. Mientras más cercano al 100 sea el nivel de confianza, más seguros estamos de nuestra predicción.

{{% /notice %}}

Copia la función `plot_image` en tu Notebook de Google Colab: 
</br>

```python
def plot_image(i, predictions_array, true_label, img):
  true_label, img = true_label[i], img[i]
  plt.grid(False)
  plt.xticks([])
  plt.yticks([])

  plt.imshow(img, cmap=plt.cm.binary)

  predicted_label = np.argmax(predictions_array)
  if predicted_label == true_label:
    color = 'blue'
  else:
    color = 'red'

  plt.xlabel("{} {:2.0f}% ({})".format(class_names[predicted_label],
                                100*np.max(predictions_array),
                                class_names[true_label]),
                                color=color)
```

## Visualizando los Valores de Confianza

La función `plot_value_array` grafica los valores de confianza generados por el modelo como un gráfico de barras.

El eje y del gráfico mostrará el nivel de confianza, mientras que el eje x representará la categorización de los elementos (camiseta/top, pantalón, jersey, vestido, abrigo, sandalia, camisa, zapatilla deportiva, bolso, o botín).

Copia la función `plot_value_array` en tu Notebook de Google Colab: 

```python 
def plot_value_array(i, predictions_array, true_label):
  true_label = true_label[i]
  plt.grid(False)
  plt.xticks(range(10))
  plt.yticks([])
  thisplot = plt.bar(range(10), predictions_array, color="#777777")
  plt.ylim([0, 1])
  predicted_label = np.argmax(predictions_array)

  thisplot[predicted_label].set_color('red')
  thisplot[true_label].set_color('blue')
```

## Usando las Funciones

Usaremos el siguiente código para llamar a las funciones que escribimos previamente. Copia el fragmento en tu Notebook de Google Colab. 

```python
i = 0   
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```

![Figura de Graficado del Modelo: Botín](../media/Plotting_fig1.png "Figura de Graficado del Modelo: Botín")

Podemos ver que nuestro modelo predice este artículo como un botín. ¿Qué tan seguro está el modelo en esta predicción? 99% seguro. La categoría en paréntesis es la categorización correcta del artículo. En este caso, el modelo detectó correctamente el artículo. 
</br>
</br>
Recuerda que no todos los modelos son perfectos. Los modelos pueden equivocarse en sus predicciones, como veremos en el siguiente ejemplo. 
</br>

Utilizaremos el mismo código que antes, pero probaremos la confianza con un artículo diferente. Establece `i` en un nuevo valor, como 12. 

```python
i = 12 
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```

![Figura de Graficado del Modelo: Zapatilla deportiva](../media/Plotting_fig2.png "Figura de Graficado del Modelo: Zapatilla deportiva")

En este ejemplo observamos que el modelo predijo que el artículo era una sandalia con un 96% de confianza. Sin embargo, vemos que la identificación correcta del artículo es una zapatilla deportiva. El gráfico muestra que el modelo también predijo este artículo como una zapatilla deportiva con aproximadamente un 3% de confianza, o un botín con aproximadamente un 1% de confianza. 

## Más Ejemplos

Para más ejemplos de las predicciones del modelo, grafiquemos las primeras 25 imágenes de prueba, sus etiquetas predichas y las etiquetas verdaderas. Como antes, las predicciones correctas se mostrarán en azul y las incorrectas en rojo.

Copia este código en tu Notebook de Google Colab: 

```python
num_rows = 5
num_cols = 5
num_images = num_rows*num_cols
plt.figure(figsize=(2*2*num_cols, 2*num_rows))
for i in range(num_images):
  plt.subplot(num_rows, 2*num_cols, 2*i+1)
  plot_image(i, predictions[i], test_labels, test_images)
  plt.subplot(num_rows, 2*num_cols, 2*i+2)
  plot_value_array(i, predictions[i], test_labels)
plt.tight_layout()
plt.show()
```

![Figura de Graficado del Modelo: 5x5 imágenes y sus predicciones](../media/Plotting_fig3.png "Figura de Graficado del Modelo: 5x5 imágenes y sus predicciones")

¿Qué opin