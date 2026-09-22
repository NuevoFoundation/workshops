---
title: "¿Qué es la regresión?"
description: "Haz que las computadoras aprendan a predecir resultados."
prereq: "Python"
icon: ""
draft: false
weight: 1
---

# ¿Qué es la regresión?
La regresión es una técnica para modelar la relación entre una característica (variables independientes) y una predicción (variables dependientes). Nos ayuda a entender cómo cambia el valor de una variable dependiente en función del valor de la variable independiente. ¡Cuando se aplica correctamente, nos permite predecir valores! 😯

<!-- TODO: Agregar un diagrama para reemplazar la imagen a continuación. -->
|![Regresión](../resources/regression.png)|
|:--:|
|Regresión|

La regresión es una técnica poderosa que nos permite encontrar una línea o una curva que se ajuste a los datos que tenemos. Al hacer regresión, podemos crear o reutilizar `modelos matemáticos` que muestran cómo están relacionadas las variables dependientes e independientes. Los [modelos matemáticos](https://www.youtube.com/watch?v=xHtsuOB-TPw) son útiles porque nos ayudan a entender un sistema y a hacer predicciones basadas en las variables del sistema. A veces, el modelo matemático que elegimos puede no coincidir bien con los datos, por lo que debemos buscar un mejor modelo que pueda capturar los patrones que observamos.

## Ejemplo 1: ¿Cómo sabemos si va a llover?
Cada vez que usas tu teléfono, ves un noticiero o simplemente preguntas en internet: "¿Cuál es la probabilidad de lluvia hoy?", los meteorólogos utilizan modelos matemáticos para predecir si existe la posibilidad de lluvia. Te podrías preguntar, ¿qué `variables` se toman en cuenta al ejecutar esos modelos matemáticos? ¿Es suficiente con el olor a lluvia?

{{% expand "**¿Qué variables deberías considerar para saber si va a llover?**"%}}

- Temperatura &rarr; ¿Hace calor, hace frío o está en un punto intermedio?
- Altitud &rarr; Dependiendo de qué tan alto estés en relación al suelo, los lugares pueden volverse más fríos o cálidos.
- Ubicación &rarr; Dónde te encuentras importa. (ejemplo: Bosque, Playa, Cordillera, Desierto, etc.)
- Humedad &rarr; ¿Sientes que el aire está pesado? ¿Hay suficiente agua en el aire para que llueva?
- Época del Año &rarr; ¿En qué mes estamos? ¿En qué estación nos encontramos actualmente?
- ¡Y muchas más!

Hay muchas más variables que considerar cada vez que pensamos que puede haber una probabilidad de lluvia. Al final del día, la "**probabilidad de lluvia**" es la variable dependiente mientras que las otras propiedades mencionadas anteriormente son las variables independientes. La probabilidad de lluvia depende de los valores de las otras variables mencionadas.
{{% /expand %}}

### Ejercicio 1
Supongamos que alguien quiere saber el tipo de figura que tiene basándose en el área de la figura.

1. ¿Es eso siquiera posible? ¿Puede alguien saber qué figura tiene basándose en el área?
{{% expand "**Haz clic para mostrar la respuesta**" %}}  
***No***, como puedes imaginar rápidamente, no hay relación entre el **área** y el tipo de figura que pueda tener.

Por ejemplo, un cuadrado con un lado de longitud 3 tiene un área de 9.

<h3>
\[
    3 \cdot 3 = 9
\]
</h3>

Pero también un triángulo con una base de 6 y altura de 3 tiene el mismo área.
<h3>
\[
    (6 \cdot 3)/2 = 9
\]
</h3>

{{% /expand %}}
<br>

2. Si el área no es una buena variable o propiedad para entender el tipo de figura que podemos tener, necesitamos proponer qué relación podemos usar para saber cuál es el tipo de figura.
{{% expand "**Haz clic para mostrar la respuesta**" %}}  

***¡El número de **lados** que tiene! A medida que aumenta el número de lados, puedes saber el tipo de figura.***

Si te fijaste en nuestra tabla, hemos construido una relación lineal que se puede representar como X=Y. 

X &rarr; **el número de lados**  
Y &rarr; **el tipo de figura**

¡Eso es! ¡Has creado tu primer modelo de aprendizaje automático!
{{% /expand %}}
<br>

Un modelo, en el caso de nuestro ejemplo anterior, es solo una función que se construye para establecer una relación entre nuestra variable dependiente y las variables independientes. Por ejemplo, funciones como líneas (y = ax + b), parábolas (y = a(x -h)^2), curvas cúbicas (y=ax^3+bx^2+cx+d), y muchas más, pueden usarse como modelos.

### ¿Cómo garantizar que tu modelo se ajuste a los datos?

Cuando realizamos análisis utilizando un modelo de aprendizaje automático que ya existe, debemos asegurarnos de seleccionar el modelo apropiado que represente nuestros datos. En la imagen a continuación puedes ver que los puntos de datos representan una parábola. Es muy probable que el modelo que necesitemos usar sea un modelo parabólico, algo como esto...

<h2>
\[
    y = a(x -h)^2
\]
</h2>

Cuando usas un modelo parabólico, necesitas saber dónde caerán los vértices de la parábola para predecir dónde estará un nuevo punto. Podrías ejecutar un modelo sin establecer vértices y terminar como en la imagen de "Subajuste", o configurar demasiados vértices y terminar como en la imagen de "Sobreajuste". Queremos que el modelo sea lo suficientemente ajustado para que "se adapte" a los datos y se puedan representar nuevos puntos de datos utilizando el modelo.
 
<!-- TODO: Agregar un diagrama para reemplazar la imagen a continuación. -->
|![Ejemplo de ajuste de datos](../resources/fitting-data-example.png)|
|:--:|
|Imagen 1: Subajuste y Sobreajuste|

Siempre debes asegurarte de que el modelo que elijas para representar tus datos se ajuste a lo que estás trabajando. De lo contrario, podrías tener uno de dos problemas:

- **Subajuste**
    
    Esto ocurre cuando no puedes encontrar una relación en los datos que tienes. Esto suele suceder cuando no hay suficientes datos para usar.

- **Sobreajuste**
    
    Esto ocurre cuando intentas acomodar todos los valores posibles en tus datos, incluso aquellos que no representan nada. Al hacer esto, podrías estar eligiendo valores que son **valores atípicos** y no representan la realidad de las cosas. Por ejemplo, tener una figura que tenga 1 o 2 líneas no tiene sentido.