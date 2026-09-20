---
title: "Intervalo de Confianza"
description: "Haz que las computadoras aprendan a predecir resultados."
prereq: "Python"
icon: ""
draft: false
weight: 3
---

En la última sección, pudimos encontrar el coeficiente y la intersección de nuestra ecuación lineal usando un conjunto de datos de muestra de 30 empleados seleccionados al azar.

<h3>
\[
    Intersección = 25792.20
\]
\[
    Coeficiente = 9449.96
\]
\[
    SALARIO = 9449.96(XP) + 25792.20 + ε
\]
</h3>

Pero esto planteó otra pregunta: ¿Está el **salario** REALMENTE relacionado con los **años de experiencia** de un empleado? ¿Es la relación entre las dos variables lo suficientemente fuerte como para afirmar que están relacionadas? ¿Son 30 empleados aleatorios suficientes para determinar esto? ¿Cómo podemos asegurarnos de que estos valores sean correctos?

Debes recordar que encontraste los valores trabajando con una pequeña muestra que se tomó de un número mucho mayor de empleados. Dado que solo tenemos una muestra para trabajar, los valores del **coeficiente** y la **pendiente** serán más inciertos. 

¿Qué podemos hacer para asegurarnos de que los valores sean válidos?

{{% expand "**Haga clic para mostrar la respuesta**" %}}

Necesitamos ejecutar el modelo lineal con más muestras aleatorias.

{{% /expand %}}

# Ejercicio 1: Revisando más muestras

Supón que lograste encontrar más de 10,000 registros para empleados dentro de tu empresa 😯. ¡Esto es increíble porque, en el mundo del aprendizaje automático, cuanto más datos tengas, mejores serán los resultados que obtendrás! Ahora tomemos 30 registros aleatorios de ese conjunto de datos de más de 10,000 y verifiquemos si los valores de la intersección y el coeficiente difieren de los de la muestra original que teníamos. En la ventana de Replit a continuación, ejecuta el código tantas veces como quieras, pero observa cómo los valores de la **intersección** y el **coeficiente** son algo similares a los que calculamos antes.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/03-e1.py" target="_blank">Abrir Replit</a>

¿Por qué sucede esto? ¿Por qué los valores de **intersección** y **coeficiente** son diferentes cada vez? ¿Por qué la línea de muestra original (es decir, la línea verde) está muy cerca de la línea azul (es decir, la nueva línea de muestra)?

{{% expand "**Haga clic para mostrar la respuesta**" %}} 
Esto se debe a que cada vez que ejecutas el programa, se selecciona una muestra aleatoria de 30 registros. En cualquier muestra aleatoria que ejecutes, ambos valores serán diferentes. Pero lo bueno es que todos estos valores se obtienen del mismo conjunto de datos.

{{% /expand %}}

Ahora pregúntate, ¿qué tan **seguro** estás de que los valores de la **intersección** y el **coeficiente** realmente representan los datos que tenemos?

# Intervalos de confianza

El ejemplo anterior nos enseña que, al trabajar con muestras aleatorias de un conjunto de datos más grande, los valores de la **intersección** y el **coeficiente** caen dentro de un rango. Sabemos que el valor real debe estar entre 2 valores, ¡pero no sabemos cuáles son! Esto se conoce como el [intervalo de confianza](https://www.geeksforgeeks.org/confidence-intervals-for-machine-learning/).

Cuando ejecutas el código del **Ejercicio 1** varias veces, puedes observar que el valor del **coeficiente** cambia cada vez, pero observa cómo rara vez cae por debajo de 9000 o supera los 10000. ¿Cuál es la diferencia entre todos los **coeficientes** posibles que podemos encontrar ejecutando el código varias veces? ¿Cuál es ese valor? Esto se conoce como el **error estándar**.

**[Error estándar](https://www.statology.org/standard-error-regression/)** - la distancia promedio con la que los valores se desvían de la línea de regresión.

# Ejemplo 2: Encontrando el error estándar

Podemos usar la biblioteca [StatsModels](https://www.statsmodels.org/stable/index.html) para obtener todo tipo de valores de nuestra regresión lineal. Ejecuta el Replit a continuación y deberías ver una salida como esta:

|![Resultado de Statmodels](../resources/finding_stderror.png)|
|:--:|
|Resumen del resultado de Statsmodel|

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/03-e2.py" target="_blank">Abrir Replit</a>

Dentro de la tabla, enfoquémonos en el error estándar, que es el valor etiquetado como **stderr**. En este caso, es **409.40**. Esto significa que, para cualquier conjunto de muestra aleatoria, el **coeficiente** o **pendiente** de nuestra línea variará en 409.40 o, en otras palabras:

"El salario de un empleado puede variar en $409.40."

# Ejemplo 3: La distribución normal

Hagamos un paso atrás y preguntemos, de los coeficientes o pendientes que podemos ver en el "Ejercicio 2", ¿qué tan probable es que se repitan al ejecutar el programa para otras muestras?

El aprendizaje automático utiliza muchas estadísticas para determinar los valores que hemos obtenido. En el mundo de las estadísticas, hay un gráfico que se utiliza para medir la `probabilidad` de que aparezca un valor en los datos. Esto se conoce como la `Distribución Normal` o `Curva de Campana` y se ve algo así:

|![Distribución Normal](../resources/normal_distribution.png)|
|:--:|
|Figura #: Distribución Normal o Curva de Campana|

Tomemos el siguiente ejemplo, ¿qué tan probable es ver a una persona muy baja? ¿Qué tan probable es ver a una persona muy alta?

Si hacemos esta relación con una curva de campana, obtendrás algo como esto:

|![Distribución Normal](../resources/normal_distribution_height.png)|
|:--:|
|Figura #: Distribución Normal o Curva de Campana con la altura de las personas.|

Como puedes ver, es muy poco probable ver a una persona muy baja o muy alta. Pero es bastante normal ver personas de altura promedio. Por supuesto, esto podría variar según el país, pero ya tienes la idea.

Si ejecutas el Replit a continuación, verás cómo el histograma generado se asemeja a la curva de campana. El programa crea un [histograma](https://corporatefinanceinstitute.com/resources/excel/histogram/) que muestra la cantidad de veces que un valor aparece en