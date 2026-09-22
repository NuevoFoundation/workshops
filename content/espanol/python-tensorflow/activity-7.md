```markdown
---
title: "Actividad 7 - Graficando la Categoría Predicha de una Imagen"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funciones - Funciones incorporadas, Funciones de librerías; Tipos de Datos - Cadenas, Números, Lectura desde Consola; Estructuras de Datos - Listas"
difficulties: ["intermedio"]
weight: 12
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/pwZDPj4yIsM" title="Actividad 7 - Graficando la Categoría Predicha de una Imagen - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Graficando la Categoría de una Imagen 
</br>
Es posible que recuerdes que, al graficar los modelos, el eje x de los gráficos estaba etiquetado con los números del 1 al 9. Estos corresponden a las categorías de artículos que definimos anteriormente en el taller, es decir, camiseta/top, pantalón, suéter, vestido, abrigo, sandalia, camisa, zapatilla, bolso y botín. 
</br>

![Figura de Graficación de un modelo 2 de una zapatilla](../media/Plotting_fig2.png "Zapatilla pixelada con barra de colores")

</br>
Vamos a ajustar el etiquetado del eje x para que los datos sean más fáciles de entender. 
</br>
</br>
Copia y pega el siguiente código en tu cuaderno de Google Colab:

```python
img = test_images[0] # Obtén una imagen del conjunto de datos de prueba.
# NOTA: Este índice será modificado y su gráfico correspondiente será mostrado en los siguientes pasos.

print(img.shape) # Esto muestra la resolución de la imagen.
```


```python
img = (np.expand_dims(img,0)) # Esto expande el array de la imagen.

print(img.shape)
```

```python
# Esto muestra el nivel de confianza de que la imagen corresponde con cada categoría.
# Por ejemplo, la probabilidad de que la imagen sea una camiseta es 5.2198538e-07.
predictions_single = probability_model.predict(img)

print(predictions_single)
```

```python
plot_value_array(0, predictions_single[0], test_labels)  

# Grafica el gráfico y etiqueta el eje x con los class_names
# que definimos como las categorías en la Actividad 1
_ = plt.xticks(range(10), class_names, rotation=45)
```

Para verificar el valor del índice con la probabilidad más alta, utilizamos el siguiente código. 

```python
# La salida de este código nos dice qué categoría de ropa tiene la 
# probabilidad más alta de pertenecer
np.argmax(predictions_single[0]) 
```

## Experimentando con Gráficos

En el primer segmento de código de esta actividad, cambia el valor del índice para el array `test_images` a cualquier número de tu elección.

### Pregunta 1
En `plot_value_array`, cambia el primer parámetro al mismo número de índice utilizado anteriormente. ¿Qué nombre de clase tiene la mayor probabilidad?

Verifica tu respuesta ejecutando el código a continuación para mostrar la imagen especificada y el gráfico de la categoría que el modelo predijo.

¿Es coherente con la respuesta de tu pregunta anterior?

```python
i = your_desired_value   # Podemos ver que esta imagen detecta el nombre de clase correcto para la imagen
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```
```