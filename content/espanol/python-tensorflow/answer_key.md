```markdown
---
title: "Clave de Respuestas"
date: 2020-09-14T16:19:17-07:00
weight: 15
draft: false
hidden: true
---

## Actividad 1
#### Tarea 1:

```python
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat','Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']  
```

## Actividad 2
#### Pregunta 1:
```python
plt.figure()
plt.imshow(train_images[7]) #Muestra la primera imagen en el conjunto de datos como un gráfico o píxeles de diferentes colores
plt.colorbar() #muestra la barra de colores a la derecha
plt.grid(False)
plt.show() #muestra todo el gráfico
```
#### Pregunta 2:
¡255!  
El valor máximo del píxel es 255 para cualquier índice utilizado.  

## Actividad 3
#### Pregunta 1:
Para responder a la Pregunta 1, deberías cambiar tu código al siguiente:
```python
plt.figure(figsize=(10,10)) #establece el tamaño de la imagen en 10x10 píxeles
for i in range(42): #muestra las primeras 42 imágenes con su nombre de clase
    plt.subplot(6,7,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary) 
    plt.xlabel(class_names[train_labels[i]])
plt.show() #muestra imágenes con sus etiquetas 
```
![images 6x7](../media/PU2_42images.png "42 imágenes 6x7 con etiquetas")


## Actividad 4
Las respuestas pueden variar, se proporcionan respuestas de ejemplo a continuación:  
### Pregunta 1

```python
model.fit(train_images, train_labels, epochs=2) #epochs determina cuántas veces se entrena un modelo
```
```
Época 1/2
1875/1875 [==============================] - 4s 2ms/step - loss: 0.5024 - accuracy: 0.8231
Época 2/2
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3761 - accuracy: 0.8647
<tensorflow.python.keras.callbacks.History at 0x7f909cbb2208>
```

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nPrecisión en pruebas:', test_acc)
```
```
313/313 - 0s - loss: 0.3899 - accuracy: 0.8604

Precisión en pruebas: 0.8604000210762024
```

La precisión de la Época 2 es 0.8647 y la precisión en pruebas cuando se compara el modelo entrenado con el conjunto de pruebas es 0.8604.

#### Pregunta 2
```python
model.fit(train_images, train_labels, epochs=10) #epochs determina cuántas veces se entrena un modelo
```
```
Época 1/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.4990 - accuracy: 0.8247
Época 2/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3754 - accuracy: 0.8658
Época 3/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3374 - accuracy: 0.8771
...
```

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nPrecisión en pruebas:', test_acc)
```
```
313/313 - 0s - loss: 0.3461 - accuracy: 0.8812

Precisión en pruebas: 0.8812000155448914
```

La precisión de la Época 10 es 0.9088 y la precisión en pruebas cuando se compara el modelo entrenado con el conjunto de pruebas es 0.8812.

#### Pregunta 3

```python
model.fit(train_images, train_labels, epochs=20) #epochs determina cuántas veces se entrena un modelo
```
```
Época 1/20
1875/1875 [==============================] - 5s 3ms/step - loss: 0.4935 - accuracy: 0.8268
...
Época 20/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.1762 - accuracy: 0.9335
<tensorflow.python.keras.callbacks.History at 0x7f90ac950550>
```

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nPrecisión en pruebas:', test_acc)
```
```
313/313 - 0s - loss: 0.3648 - accuracy: 0.8892

Precisión en pruebas: 0.88919997215271
```

La precisión de la última época, Época 20, es 0.9335 y la precisión en pruebas cuando se compara el modelo entrenado con el conjunto de pruebas es 0.8892.

#### Pregunta 4
Vemos una correlación positiva. A medida que aumentamos el número de épocas, hay más datos para entrenar el modelo, por lo que la precisión aumenta.

## Actividad 5
Para esta actividad, usaremos esta imagen.
```python
plt.figure()
plt.imshow(train_images[0]) #Muestra la primera imagen en el conjunto de datos como un gráfico o píxeles de diferentes colores
plt.colorbar() #muestra la barra de colores a la derecha
plt.grid(False)
plt.show() #muestra todo el gráfico
```
![Bota hasta el tobillo](../media/a2q1.png "Bota hasta el tobillo")

#### Pregunta 1
```python
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```
```python
predictions = probability_model.predict(test_images)
```
```python
predictions[0] #Devuelve el índice con mayor probabilidad, depende del valor del índice.
```
```
array([1.1623413e-08, 2.3745208e-08, 3.5589391e-08, 1.2773025e-09,
       5.3400743e-08, 2.0998505e-04, 7.4230536e-07, 6.938