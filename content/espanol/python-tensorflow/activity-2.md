---
title: "Actividad 2 - Mostrar Valores de Color RGB para Imágenes"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funciones - Funciones incorporadas, Funciones de bibliotecas; Tipos de datos - Cadenas, Números, Lectura desde Consola; Estructuras de Datos - Listas"
difficulties: ["intermedio"]
weight: 3
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/bMr1c4a7dXQ" title="Activity 2 - Displaying RGB Color Values for Images - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Ver Imágenes de las Muestras  

Ahora veremos la imagen de un zapato de nuestra colección de muestras de ropa utilizando el siguiente fragmento de código.

Adelante, copia el siguiente código en tu cuaderno de Google Colab:

```python
plt.figure()
plt.imshow(train_images[0]) #Muestra la primera imagen en el conjunto de datos como un gráfico o píxeles de diferentes colores
plt.colorbar() #muestra la barra de color a la derecha
plt.grid(False)
plt.show() #muestra todo el gráfico
```

{{% notice tip %}}

Nota que la imagen generada tiene una barra de color a la izquierda. Esta métrica muestra que el zapato utiliza valores de píxel entre 0 y 255. ¿Qué son los valores de píxel? 

**Píxeles** son la unidad más pequeña de un gráfico (imagen o pantalla) que una pantalla puede representar. ¡Piensa en la pantalla de tu computadora! Hay millones de pequeños puntos de colores que, combinados, pueden crear una imagen de un barco o el texto mostrado en tu pantalla.  

La barra de color muestra el rango de intensidad de color que un píxel puede mostrar.  
![Imagen de bota con rango de pixelación entre 0 y 255](../media/a2q1.png "Bota pixelada con barra de color")  
{{% /notice %}}

#### Pregunta 1:
Después de analizar el zapato, queremos ver otro artículo de la muestra de ropa. ¿Puedes descubrir cómo hacerlo usando el bloque de código anterior?  

{{% notice hint %}}
Usa el código del bloque anterior. Luego cambia el valor del índice en `train_images[x]` para obtener una nueva imagen de un artículo.   

Por ejemplo, si ingresas el valor de índice como 7, obtendrás el siguiente artículo:  
![Imagen de camisa](../media/a2progress2.png "Camisa pixelada con barra de color")  

{{% /notice %}}

### Normalizar Valores de Píxel:

El programa que vamos a escribir toma valores de entrada entre 0 y 1. Sin embargo, ¡nuestros valores de píxel son mayoritariamente superiores a 1! De hecho, el rango de valores es de 0 a 255. ¿Cómo podemos cambiar el rango de números para que se puedan introducir en nuestro programa?  

Usaremos un proceso llamado **"normalización"**, donde transformamos estos valores para ajustarlos al rango de 0 a 1. Más específicamente, tomaremos todos nuestros datos y los dividiremos por un valor único para que el rango de valores ahora pueda ajustarse dentro de 0 y 1.  

#### Pregunta 2:
¿Puedes adivinar por qué número dividiremos nuestros valores para normalizar el rango?

{{% notice tip %}}
Si esto es confuso, piensa en porcentajes. Si tienes una prueba que se califica sobre un total de 255 puntos y obtienes 240 puntos correctos en la prueba, dividirás 240 por 255 para obtener el porcentaje que acertaste. Estamos haciendo un proceso similar aquí.

{{% /notice %}}

Copia y pega el siguiente bloque de código en tu cuaderno de Google Colab:

```python
# los train_images y test_images tienen un rango de valores entre 0 y 255. 
# Para mantener la consistencia entre el conjunto de entrenamiento y prueba, dividiremos train_images y test_images por 255.

train_images = train_images / 255.0 

test_images = test_images / 255.0
```