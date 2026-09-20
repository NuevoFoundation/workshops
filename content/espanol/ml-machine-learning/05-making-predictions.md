---
title: "Haciendo Predicciones"
prereq: "Python"
icon: ""
draft: false
weight: 5
---

# Entrenando el Modelo

Para que nuestro modelo pueda predecir valores, necesitamos entrenarlo. Pero, ¿cómo hacemos eso? ¡Pues ya hemos estado haciéndolo 😉!

Entrenar un modelo significa verificar que haya una buena relación entre los datos y que nuestro modelo se ajuste a ellos.

Hemos logrado esto asegurándonos de que R<sup>2</sup> esté cerca de 1. Lo que necesitamos hacer ahora es usar el conjunto de datos de más de 10,000 registros para crear un conjunto de datos de entrenamiento y otro de prueba. El conjunto de datos de entrenamiento será una muestra aleatoria en lugar de los 30 iniciales que teníamos. Según la Universidad de Texas en El Paso, tomar una muestra del 30% es la forma ideal de crear un modelo preciso. Si deseas saber más, visita aquí: ([¿Por qué la relación 70/30 o 80/20 entre los conjuntos de entrenamiento y prueba?](https://scholarworks.utep.edu/cs_techrep/1209/))

A medida que aumenta el número de empleados, también lo hará el conjunto de datos y el valor de R<sup>2</sup> cambiará. Necesitaremos realizar este proceso cada vez que el conjunto de datos de más de 10,000 empleados aumente, para garantizar que nuestro modelo se mantenga actualizado con el número actual de empleados.

# Haciendo Predicciones

En el Replit a continuación, puedes ver cómo el código crea un "conjunto de datos de entrenamiento" y un "conjunto de datos de prueba" dividiendo los datos del archivo de más de 10,000 registros y ejecutando predicciones para ambos conjuntos de datos.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e1.py" target="_blank">Lanzar Replit</a>

Como puedes observar, la línea de predicción generada en ambos gráficos es muy similar para los conjuntos de datos de entrenamiento y prueba. También puedes ver que el R<sup>2</sup> para ambos conjuntos es casi idéntico o a veces idéntico.

Ahora puedes utilizar el código a continuación y cambiar la variable `experience` a lo que desees; el gráfico mostrará el salario predicho basado en la experiencia que ingreses.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e2.py" target="_blank">Lanzar Replit</a>