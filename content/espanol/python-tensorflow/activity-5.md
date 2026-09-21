---
title: "Actividad 5 - Probando el Modelo"
date: 2020-09-09T16:19:17-07:00
prereq: "Conceptos básicos de Python: Funciones- Funciones integradas, Funciones de bibliotecas; Tipos de datos- Cadenas, Números, Lectura desde la consola; Estructuras de datos- Listas"
difficulties: ["intermedio"]
weight: 8
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/3FELV6BYtIo" title="Actividad 5 - Probando el Modelo - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

### Probando Nuestro Modelo

Ahora que hemos construido y entrenado nuestro modelo, queremos proceder a probarlo con los artículos de ropa retornados. 
Comencemos con nuestro primer artículo de muestra, que era el zapato.
```python
# Iniciar un objeto de modelo con una capa softmax
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```

{{% notice note %}}
Una **capa softmax** es un tipo de capa de red neuronal en un modelo de aprendizaje automático. La capa softmax transforma nuestras entradas, que teóricamente podrían provenir de una variedad de estructuras de datos, en una distribución de probabilidades entre 0 y 1.
{{% /notice %}}

```python
predictions = probability_model.predict(test_images)
```

El siguiente código proporciona una lista de probabilidades de que una imagen pertenezca a una categoría específica. El valor del índice corresponde a cómo se clasificaría la imagen.
```python
predictions[0] # Devuelve el índice con la mayor probabilidad, depende del valor del índice.
```

### Pregunta 1
El arreglo de valores representa el nivel de confianza de que una imagen pertenece a una categoría específica. ¿Qué índice tiene el valor de mayor confianza y cuál tiene el de menor confianza?

### Pregunta 2
Verifica tu respuesta para el valor de mayor probabilidad ejecutando el siguiente código:

```python
np.argmax(predictions[0])
```

```python
test_labels[0]
```

En el arreglo `class_names`, ¿a qué categoría corresponde este índice? (Pista: Dado el índice del valor de máxima probabilidad, ¿qué índice deberías buscar?)

Verifica a qué categoría pertenece esta imagen utilizando este código. ¿Es correcta?

```python
class_names[9]
```