```markdown
---
title: "Actualización de Progreso 2"
date: 2020-03-27T20:24:33-07:00
prereq: "Conceptos básicos de Python: Funciones- Funciones integradas, funciones de bibliotecas; Tipos de datos- Cadenas, Números, Lectura desde la consola; Estructuras de datos- Listas, Tuplas, Conjuntos; Bucles- Bucles For"
difficulties: ["intermedio"]
weight: 10
draft: false
---

¡Buen trabajo! Ahora eres capaz de identificar exitosamente a qué categoría pertenece probablemente una imagen.

Para verificar que tu código es correcto hasta este punto de control, compara tu código con el ejemplo de código proporcionado a continuación.

{{% notice warning %}}
Los resultados del código pueden variar. Solo necesitas copiar los bloques de código, y __no__ los bloques de salida, ya que se generarán automáticamente en tu cuaderno.
{{% /notice %}}

## Compara tu Código

Antes de continuar, verifica tu cuaderno de Google Colab con el código a continuación:



```python
plt.figure(figsize=(10,10)) #establece el tamaño de la imagen en 10x10 píxeles
for i in range(25): #muestra las primeras 25 imágenes con su nombre de clase
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary) 
    plt.xlabel(class_names[train_labels[i]])
plt.show() #muestra las imágenes con sus etiquetas

```
![imágenes de muestra de ropa, 5x5](../media/PU2_25images.png "Imágenes de muestra de ropa")

```python
#Construyendo la Red Neuronal
model = keras.Sequential([ 
    keras.layers.Flatten(input_shape=(28, 28)), 
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10)
])
```

```python
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

```

```python
model.fit(train_images, train_labels, epochs=10) 
```

```
Epoch 1/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.4990 - accuracy: 0.8247
Epoch 2/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3754 - accuracy: 0.8658
Epoch 3/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3374 - accuracy: 0.8771
Epoch 4/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3110 - accuracy: 0.8859
Epoch 5/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2935 - accuracy: 0.8903
Epoch 6/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2823 - accuracy: 0.8942
Epoch 7/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2682 - accuracy: 0.9002
Epoch 8/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2575 - accuracy: 0.9041
Epoch 9/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2479 - accuracy: 0.9074
Epoch 10/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2417 - accuracy: 0.9088
<tensorflow.python.keras.callbacks.History at 0x7f2b4a7cb7b8>
```

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nPrecisión en el conjunto de prueba:', test_acc)
```

```
313/313 - 0s - loss: 0.3358 - accuracy: 0.8825

Precisión en el conjunto de prueba: 0.8824999928474426
```

```python
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```

```python
predictions = probability_model.predict(test_images)
```

```python
predictions[7] #Devuelve el índice con la mayor probabilidad, depende del valor del índice.
```

```
array([3.5166186e-06, 5.8611111e-12, 7.3947496e-04, 3.9665038e-06,
       2.8206115e-03, 9.7542063e-08, 9.9643230e-01, 8.2940481e-11,
       1.2411938e-07, 2.7266096e-09], dtype=float32)
```

```python
np.argmax(predictions[7]) # Esto devuelve el valor del índice con la mayor predicción
```

```
6
```

```python
test_labels[7]  # Este es el valor del índice devuelto por el conjunto de prueba
                # (Contra el cual estamos comparando)
```

```
6
```

```python
class_names[6] # Este es el nombre de categoría de la imagen que tiene la mayor probabilidad
```

```
'Camisa'
```

<br />
<br />

Ahora que podemos clasificar la categoría de una prenda individual usando tu modelo, ahora visualizaremos estas predicciones creando un gráfico de barras para una imagen especificada.

<br />
<br />

{{% notice info %}}

Si deseas probar el código anterior, visita <a href="https://colab.research.google.com/drive/1knoCeFRtcUbp1HyKKEQgYw9tgZsUeDk0?usp=sharing" target="_blank">este enlace</a> 

Para editar este código, haz clic en el botón 'Copy to Drive' para realizar una copia personal de este cuaderno. Asegúrate de estar registrado en tu cuenta de Google.

{{% notice warning %}}
### Si estás utilizando una cuenta temporal de Google Nuevo
Una vez que hagas una copia, asegúrate de reemplazar "Copy of" por tu nombre, junto con el nombre del archivo. Esto estará en la esquina superior izquierda de tu cuaderno.
{{% /notice %}}

{{% /