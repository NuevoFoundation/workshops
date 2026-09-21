---
title: "Actividad 3 - Mostrar Muestras de Ropa"
date: 2020-09-09T16:19:17-07:00
prereq: "Conceptos básicos de Python: Funciones - Funciones incorporadas, Funciones de bibliotecas; Tipos de datos - Cadenas de texto, Números, Lectura desde la consola; Estructuras de datos - Listas; Bucles - Bucles For"
difficulties: ["intermedio"]
weight: 5
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/8dMNuQcmx5s" title="Actividad 3 - Mostrar Muestras de Ropa - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

### Mostrar muestras
Ahora, mostrarás todas tus muestras de ropa haciendo lo siguiente:

Copia el siguiente código en tu notebook de Colab. Esto muestra una colección de imágenes junto con su categoría específica.

```python
plt.figure(figsize=(10,10)) # establece el tamaño de la imagen en 10x10 pulgadas
for i in range(25): # muestra las primeras 25 imágenes con su nombre de clase
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary) 
    plt.xlabel(class_names[train_labels[i]])
plt.show() # muestra imágenes con sus etiquetas
```

### Pregunta 1

Tu supervisor te entrega alrededor de 15-20 muestras de ropa adicionales, que deberás incluir en tu programa.  
Cambia el "bucle for" para que haya 6 filas y 7 columnas. ¿Cuántas imágenes deberías mostrar?

Piensa en dónde necesitas cambiar el código para mostrar esto. Actualmente, el código muestra 5 filas y 5 columnas.