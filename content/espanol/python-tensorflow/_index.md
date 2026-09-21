---
title: "TensorFlow: Fundamentos de Aprendizaje Automático"
description: "Aprende la clasificación básica de imágenes y entrena modelos de aprendizaje automático con TensorFlow"
date: 2020-09-09T16:19:17-07:00
prereq: "Conceptos básicos de Python"
image: ""
draft: false
icon: "fab fa-python"
language: "python"
topics: ["ai"]
difficulties: ["intermediate"]
---


## ¡Bienvenidos a TensorFlow!

En este taller utilizaremos la biblioteca de Python TensorFlow para entrenar un modelo de red neuronal que reconozca y clasifique diferentes tipos de ropa. Revisaremos los pasos necesarios para que el modelo haga una predicción sobre la categoría más adecuada para una imagen específica.

También puedes usar [este video](https://www.youtube.com/watch?v=FiNglI1wRNk) para seguir el taller y comprender mejor los temas que se cubren.

Los siguientes videos repasarán todo el código y las actividades, por lo que recomendamos realizar las actividades primero antes de mirar las soluciones guiadas.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6FfxBNRn0Ww" title="Python: Fundamentos de Aprendizaje Automático usando TensorFlow - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Introducción a Google Colab
Visita [Google Colab](https://colab.research.google.com/), un entorno de programación en línea similar a Google Docs pero diseñado para ejecutar código. Después de iniciar sesión en tu cuenta de Google, haz clic en la opción para crear un "Nuevo cuaderno". Para ejecutar el código que completes durante este taller, haz clic en el botón de "play" a la izquierda. 

Te recomendamos organizar tu código creando un nuevo bloque para cada segmento de código que se use en las actividades durante el taller. Además, asegúrate de leer los comentarios en los bloques de código para comprender mejor lo que realiza cada segmento.

{{% notice warning %}}
## Se requiere cuenta de Google

Para utilizar Google Colab y editar y ejecutar código, necesitas iniciar sesión en tu cuenta de Google (o en una cuenta escolar con acceso a los servicios de Google/Google Drive). 

## ¿No tienes una cuenta de Google?
Si no tienes una cuenta de Google y no puedes crear una, por favor contacta a cualquiera de los administradores de Nuevo Foundation para obtener acceso temporal a una cuenta de Nuevo únicamente durante este taller. Ten en cuenta que Google Colab es necesario para este taller, ya que te permitirá ejecutar todo el código.

{{% /notice %}}

{{% notice note %}}
Cuando ejecutes tu código por primera vez, asegúrate de correr tu código seleccionando _Ejecutar -> Ejecutar todo_ en la barra de menú para ejecutar todos tus fragmentos de código de forma secuencial. Esto es para asegurarte de no intentar ejecutar funciones sin haber importado antes las bibliotecas necesarias.
![Introducción a Colab](media/colab_intro.png "Introducción a Colab")

{{% /notice %}}

## Tabla de Contenidos
<details>
<summary>Secciones</summary>
{{% children /%}}
</details>

<br>

<a href="https://www.tensorflow.org/tutorials/keras/classification" target="_blank">Obras citadas</a>