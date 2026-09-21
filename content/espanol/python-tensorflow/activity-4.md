---
title: "Actividad 4 - Entrenando el Modelo"
date: 2020-09-09T16:19:17-07:00
prereq: "Conceptos básicos de Python: Funciones- Funciones incorporadas, Funciones de bibliotecas; Tipos de datos- Cadenas, Números, Lectura desde la consola; Estructuras de datos- Listas, Tuplas, Conjuntos"
difficulties: ["intermedio"]
weight: 7
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/o0o9JTm2xIg" title="Activity 4 - Training the Model - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

### Parámetros para Entrenar
El siguiente código determina cuántas veces se entrena el modelo. Es normal que este segmento de código tarde más tiempo en ejecutarse.

```python
model.fit(train_images, train_labels, epochs=10) 
```

{{% notice note %}}
**Epochs** representan el número de veces que el modelo procesa todos los datos de entrenamiento. 
{{% /notice %}}

El siguiente código imprime la precisión general de la prueba.

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```

### Pregunta 1
Establece el valor de epochs igual a 2. ¿Cuál es la precisión de la última época? ¿Cuál es la precisión de prueba cuando se compara el modelo entrenado con el conjunto de datos de prueba?

### Pregunta 2
Establece el valor de epochs igual a 10. Repite la Pregunta 1.

### Pregunta 3
Establece el valor de epochs igual a 20. Repite la Pregunta 1.

### Pregunta 4
¿Qué correlación observas cuando aumentas el número de épocas? ¿Aumenta o disminuye la precisión?