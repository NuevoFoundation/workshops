---
title: "Ajuste del Modelo"
prereq: "Python"
icon: ""
draft: false
weight: 4
---

# ¿Se ajusta nuestro modelo?

Recuerda que la ecuación lineal que construimos tiene un valor de error aleatorio (**ε**).

<h3>
\[
    SALARIO = 9449.96(XP) + 25792.20 + ε
\]
</h3>

Dado que **ε** es un valor de error que no podemos determinar, necesitamos preguntarnos:

1. ¿Qué tan bien representa nuestro modelo la realidad o qué tan bien `se ajusta` el modelo a los datos que tenemos?  
2. ¿Cómo podemos saber si los **Años de Experiencia** realmente tienen un efecto en el **Salario**?

Existen muchas maneras de determinar esto, pero en el mundo del aprendizaje automático y la estadística, hay un valor que podemos usar. Este valor se llama **R-Cuadrado** o **R<sup>2</sup>**.

[R-Cuadrado](https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/statistics/regression-and-correlation/coefficient-of-determination-r-squared.html#:~:text=6%20See%20Also-,Definition,line%20approximates%20the%20actual%20data.) - es una medida que proporciona información sobre la calidad del ajuste de un modelo. En el contexto de la regresión, es una medida estadística de qué tan bien la línea de regresión aproxima los datos reales. Como regla general, si el valor de **R<sup>2</sup>** está cerca de 1, significa que el modelo matemático que hemos elegido tiene un buen ajuste o realmente aproxima los valores reales de nuestros datos.

## Ejercicio 1: Encontrando R-Cuadrado

El archivo `Experience_vs_Salary-More_Data` tiene más de 10,000 entradas que muestran el salario y los años de experiencia de los empleados de la empresa para la que trabajas. El siguiente código de Replit tomará una muestra inicial de 30 empleados y encontrará el error estándar y el valor de R<sup>2</sup>.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/04-e1.py" target="_blank">Abrir Replit</a>

Como puedes ver, el valor de R<sup>2</sup> es 0.973. Ahora, si alguien nos pregunta si existe alguna relación en nuestros datos, podemos decir que "estamos 97.3% seguros de que los años de experiencia de un empleado están relacionados con el salario que tiene".

Te animo a cambiar el valor de la variable 'sample_size' por un valor mayor o menor para observar cómo se ve afectado el valor de R<sup>2</sup>.

¡Ahora vamos a hacer algunas predicciones!