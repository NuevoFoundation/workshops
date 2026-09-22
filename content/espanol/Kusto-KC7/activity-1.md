---
title: "Actividad 1: Iniciar sesión y configurar el entorno cibernético"
draft: false
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kMIKZhS5E4k" title="Activity 1: Login &amp; Setup of the Cyber Environment - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Introducción

¡Hola, Defensores Cibernéticos! Lo primero que deben hacer es configurar el entorno en el que estarán rastreando a los hackers. Para hacerlo, abran los enlaces a continuación y sigan las instrucciones para configurar primero Azure Data Explorer (ADX) y luego iniciar sesión en la sesión del Scoreboard.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Resources.png?raw=true" alt= “Recursos” width="60%" height="value">

### Configuración de Azure Data Explorer (ADX)

ADX es la herramienta principal utilizada por algunos defensores cibernéticos para la exploración y el análisis de datos. Lo mejor de ADX es que es utilizada por analistas cibernéticos en muchas de las organizaciones más pequeñas y grandes del mundo.

Vamos a iniciar sesión y comenzar con ADX:

1. Ve a [Azure Data Explorer](https://dataexplorer.azure.com/) e inicia sesión con tu cuenta de Microsoft
    - Si no tienes una cuenta de Microsoft, crea una ahora (son gratuitas).
2. Haz clic en la pestaña Query en el lado izquierdo de la pantalla.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX1.png?raw=true" alt= “ADX1” width="20%">

Los datos en ADX están organizados en una estructura jerárquica que consiste en **clusters, bases de datos y tablas**. Todos los registros de seguridad de Envolve Labs se almacenan en un único cluster. Necesitarás agregar este cluster a tu interfaz de ADX para comenzar a revisar los datos de registro.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX2.png?raw=true" alt= “ADX2” width="40%" height="value">

3. Agrega un nuevo cluster utilizando la URI del cluster proporcionada por tu instructor.
    - Haz clic en "add cluster"
    - Introduce Connection URI: mstictraining.eastus

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX3.png?raw=true" alt= “ADX3” width="40%" height="value">

4. Selecciona tu base de datos     
    - Expande la flecha desplegable junto a tu cluster. Después deberías ver una base de datos llamada **SecurityLogs** dentro de ella.     
    - Expande la flecha desplegable junto a la base de datos **SecurityLogs**.     
    - Haz clic en la base de datos **SecurityLogs**. Una vez hecho esto, deberías ver la base de datos resaltada; esto significa que la has seleccionado y estás listo para consultar las tablas dentro de ella.      

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX4_updated.png?raw=true" alt= “ADX4_updated” width="30%" height="value">

El gran espacio en blanco a la derecha de tu lista de clusters es el área de trabajo de consultas. Ahí utilizarás código KQL para escribir lo que llamamos consultas, las cuales se usan para interactuar con nuestros datos de registro.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX5.png?raw=true" alt= “ADX5” width="60%" height="value">

### Configuración del Scoreboard

1. Después de ir al [sitio web del Scoreboard](https://aka.ms/kc7scoreboard), crea una cuenta de usuario. Asegúrate de usar un nombre de usuario y una contraseña que puedas recordar, ya que te pedirá que inicies sesión de inmediato.
2. Haz clic en el botón verde **"Join a new game"**
3. Una vez dentro, introduce la contraseña de la sesión: **GAMEON**

Deberías ver el Scoreboard ahora. Cuando vayas a la pestaña de desafíos, deberías ver una lista como en la imagen a continuación. Necesitaremos esto más adelante en el entrenamiento, así que siéntete libre de minimizar el Scoreboard pero tenlo listo para usar.
<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Scoreboard.png?raw=true" alt= “ADX3” width="value" height="value">

{{< alert theme="info" >}} ¡Listo! Ahora que está todo configurado, es hora de poner tus manos en los datos. {{< /alert >}}

[def]: Images/ADX1.png