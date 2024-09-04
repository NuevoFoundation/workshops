---
title: "Actividad 1: Inicio de sesión y configuración del Ciberentorno"
draft: false
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kMIKZhS5E4k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Primeros pasos

Muy bien, Ciberdefensores. Lo primero que tienen que hacer es configurar el entorno en el que van a cazar a los hackers. Para ello, deben abrir los enlaces que aparecen a continuación y seguir las instrucciones para configurar 'Azure Data Explorer' (ADX) e iniciar sesión en  el marcador.


<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Resources.png?raw=true" alt= “Resources” width="60%" height="value">

### Configurando Azure Data Explorer (ADX)

ADX es la principal herramienta utilizada por algunos ciberdefensores para la exploración y el análisis de datos. Lo bueno de ADX es que la utilizan ciberanalistas de muchas de las organizaciones más pequeñas y más grandes del mundo. 

Inicie sesión y comience a utilizar ADX:

1. Ingrese a la página [Azure Data Explorer](https://dataexplorer.azure.com/) e inicia sesión con tu cuenta Microsoft.
    - Si aún no tienes una cuenta Microsoft, créate una ahora (Son gratuitas)
2.	Haga clic en la pestaña 'Consulta' en la parte izquierda de la pantalla.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX1.png?raw=true" alt= “ADX1” width="20%">

Los datos en ADX están organizados en una estructura jerárquica que consiste en **Clusters, Bases de datos y Tablas**. Todos los registros de seguridad de los laboratorios se almacenan en un único cluster. Necesitará añadir este cluster a su interfaz ADX para poder empezar a mirar los datos de registro.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX2.png?raw=true" alt= “ADX2” width="40%" height="value">

3.	Añada un nuevo cluster utilizando el URI de cluster proporcionado por su instructor
    -  Haga clic en 'Añadir Cluster'
    -  Introduzca la conexión URI: mstictraining.eastus

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX3.png?raw=true" alt= “ADX3” width="40%" height="value">

4.	Seleccione su base de datos    
    - Expanda la flecha desplegable junto a su cluster. Debería ver una base de datos, llamada **SecurityLogs** dentro de ella.     
    - Despliegue la flecha situada junto a la base de datos **SecurityLogs**.
    - Haga clic en la base de datos **SecurityLogs**. Una vez hecho esto, debería ver la base de datos resaltada, lo que significa que ha seleccionado la base de datos y está listo para consultar las tablas que contiene.      

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX4_updated.png?raw=true" alt= “ADX4_updated” width="30%" height="value">

El gran espacio en blanco a la derecha de tu lista de clusters es el espacio de trabajo de consultas. Ahí es donde utilizarás el código KQL para escribir lo que llamamos consultas, que se utilizan para interactuar con nuestros datos de registro. 

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX5.png?raw=true" alt= “ADX5” width="60%" height="value">

### Configuración del marcador

1.  Después de entrar en el [sitio web del marcador](https://aka.ms/kc7scoreboard), cree una cuenta de usuario. Asegúrate de utilizar un nombre de usuario y una contraseña que puedas recordar, ya que te pedirá inmediatamente que inicies sesión.
2.  Haz clic en el botón verde **"Unirse a una nueva partida »**.
3.  Una vez adentro, introduce la contraseña de la sesión: **GAMEON**

Deberías ver el marcador ahora, cuando vayas a la pestaña de retos, deberías ver una lista como en la imagen de abajo. Necesitaremos esto más adelante en el entrenamiento así que siéntete libre de minimizar el marcador, pero mantenlo listo para usar.
<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Scoreboard.png?raw=true" alt= “ADX3” width="value" height="value">

{{< alert theme="info" >}} Listo. Ahora que ya lo tienes todo listo, es hora de ponerte manos a la obra con los datos. {{< /alert >}}

[def]: Images/ADX1.png