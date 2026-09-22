---
title: "Regresión Lineal Simple"
description: "Haz que las computadoras aprendan a predecir resultados."
prereq: "Python"
icon: ""
draft: false
weight: 2
---

# ¿Qué es la regresión lineal simple?

La regresión lineal simple tiene como objetivo encontrar una correlación entre dos variables y derivar ecuaciones matemáticas que expliquen las relaciones entre una variable dependiente y una variable independiente. En general, con la regresión lineal simple, queremos llegar a las siguientes conclusiones:

1. ¿Hay una **relación** entre las variables que tenemos?

    Puedes determinar la relación entre ingresos y gastos, experiencia y salario, o humedad y temperatura. Pero, como ejemplo, NO hay relación entre la altura de un estudiante y sus calificaciones en los exámenes.

2. ¿Podemos **prever/predicir** valores con esto?

    Con la regresión, podemos entrenar el modelo y averiguar si podemos predecir valores con certeza. ¿Podemos usar lo que sabemos sobre la relación para predecir nuevos valores?
    
    Ejemplo: ¿Cuál será la temperatura de mañana? ¿Cuánto venderá mi panadería este año en comparación con el anterior? ¿Cuánto será mi sueldo si tengo 5 años de experiencia?

# Roles de las variables

En la regresión lineal simple, las variables pueden tomar uno de los siguientes roles.

1. **Variable Dependiente**

    La variable cuyo valor queremos predecir o prever. La llamamos **dependiente** porque su valor depende de otra cosa. Llamaremos a esta variable **y**.

2. **Variables Independientes**

    Esta es la variable que podemos controlar o cambiar para afectar a la variable dependiente. Llamaremos a esta variable **x**.

    Ejemplo: Si una manzana cuesta $1.00 y compras 10, el costo total será de $10.00. La variable dependiente aquí es el `costo total`, mientras que la variable independiente es el número de manzanas que deseas comprar.

# El modelo matemático de la ecuación lineal simple

Cuando utilizamos la regresión lineal simple la llamamos **lineal** porque, bueno... el modelo matemático representa una línea recta en un plano 2D. Piénsalo por un momento.

¿Cuál es la ecuación matemática de una línea recta?

{{% expand "**Haz clic para mostrar la respuesta**" %}}

Esta ecuación puede parecerte muy familiar. Si lo es, es la ecuación general para una línea recta.

<h1>
\[
    y = ax + b
\]
</h1>

- **x** es la variable independiente.
- **y** es el valor dependiente.
- **a** es la pendiente de la línea.
- **b** es la intersección o el valor de **y** cuando **x = 0**.

Siguiendo esta ecuación, elaboraremos cómo los modelos matemáticos de la regresión lineal simple calculan y predicen nuevos valores.

{{% /expand %}}

# Ejemplos reales

En el mundo real, los datos a veces no son lineales y se comportan de manera diferente a lo que pensamos. A primera vista, puede parecer que los datos no tienen ninguna relación. En el caso de la regresión lineal simple, lo que necesitas buscar son datos que de alguna manera sigan un patrón lineal.

Supongamos que trabajas como `Analista de Datos` en el departamento de recursos humanos de una empresa con más de 10,000 empleados. Tu jefe quiere saber si los años de experiencia de un empleado tienen algo que ver con la cantidad de dinero que gana. Por supuesto, siendo un `Analista de Datos` puedes consultar la base de datos de empleados y verificar rápidamente lo siguiente:

1. ¿Cuál es su salario actual? 
2. ¿Cuántos años de experiencia tiene la persona?

Supongamos que logras obtener datos de 30 empleados al azar que se ven más o menos así:

|ID del Empleado|Años de Experiencia|Salario|
|:--:|:--:|:--:|
|1|1.1|39343|
|2|1.3|46205|
|3|1.5|37731|
|4|2.0|43525|
|5|2.2|39891|
|6|2.9|56642|
|7|3.0|60150|
|8|3.2|54445|
|...|...|...|
|26|9.0|105582|
|27|9.5|116969|
|28|9.6|112635|
|29|10.3|122391|
|30|10.5|121872|

Después de revisar la tabla, graficas todos estos valores en un diagrama de dispersión 2D y obtienes una imagen como esta.

|![Años de Experiencia vs Salario](../resources/Years_vs_Salary.png)|
|:--:|
|Diagrama de Dispersión: Años de Experiencia vs Salario.|

Como puedes ver, los puntos _de alguna manera_ se asemejan a una línea. Vamos a dibujar una línea imaginaria y ver si podemos pasar a través de todos los puntos.

|![Años de Experiencia vs Salario con Línea de Tendencia](../resources/Years_vs_Salary_with_trendline.png)|
|:--:|
|Diagrama de Dispersión: Años de Experiencia vs Salario con línea.|

Como puedes ver, la línea no pasa por **TODOS** los puntos, pero está relativamente cerca. ¿Qué significa esto? ¿Por qué en algunos casos los puntos están cerca o lejos de nuestra línea imaginaria?

Hasta ahora sabemos que:

1. Los datos siguen de alguna manera un enfoque **lineal**.
2. Los datos tienen 2 variables importantes: **SALARIO** y **AÑOS DE EXPERIENCIA**. Esto significa que podemos comenzar a **modelarlas** como una ecuación lineal.

**Pregunta:** Sabemos que **SALARIO** y **AÑOS DE EXPERIENCIA** son nuestras variables, pero ¿cuál es la dependiente y cuál es la independiente?
{{% expand "**Haz clic para mostrar la respuesta**" %}}

- **AÑOS DE EXPERIENCIA (XP)** es nuestra variable independiente.
- **SALARIO** es nuestra variable dependiente.

Si las insertamos en nuestra ecuación lineal, obtendremos algo como esto.

<h1>
\[
    SALARIO = a(XP) + b
\]
</h1>

Con una ecuación como esta estamos diciendo: "Los años de experiencia tienen un efecto directo en el salario de un empleado".

{{% /expand %}}

# La posibilidad de errores

Como mencionamos antes, los datos pueden o no ser siempre consistentes y pueden comportarse de diferentes maneras. Lo que esto significa es que nuestra ecuación lineal necesita considerar un posible error. Pero, ¿cómo representamos ese error en la ecuación? ¿Cómo se puede visualizar ese error en el diagrama de dispersión?

Sup