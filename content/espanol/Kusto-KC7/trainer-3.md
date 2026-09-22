---
title: "T3: Programa del Evento y Logística"
draft: false
weight: 28
---
{{< alert theme="info" >}}
## Programa
{{< /alert >}}

*[REQUISITO PREVIO, 10 min] Accede al clúster y añádelo a ADX*

### Parte 1: Comprendiendo el Entorno [1.5 hrs]

[5 min] Introducción a la Inteligencia de Amenazas    
     - Mención breve de herramientas y técnicas de atribución     
     - Modelo Diamante     
     - Kill Chain     

[20 min] Introducción al Lenguaje de Consulta Kusto (KQL)     
     - Presentación de tablas, comandos y sintaxis para KQL en el navegador ADX     
      - where (has, contains, has_any, ==, etc…)     
      - count     
      - take     
      - let     

[10 min] Cómo Agrupar Actividades Observadas del Adversario 
 - ¿Cómo decides si la siguiente pieza está asociada con tu actor? 
 - Mapear el conocimiento del actor al modelo diamante 
 - ¿Cómo sabes cuándo has terminado? 
 - Errores comunes al agrupar (mala atribución)    

[45 min] Escenario 1: Introducción a la Investigación Cibernética
 - Investigación de actividad maliciosa (por ejemplo, amenaza en correo electrónico)
 - Usar Azure Data Explorer (ADX) para análisis de datos de registros de seguridad
 - Aplicar fundamentos de KQL para responder preguntas específicas utilizando datos
 - Cambiar entre múltiples conjuntos de datos

[10 min] Discusión 
 - Revisar rápidamente cómo encontrar las respuestas

### Receso [10 min]
 
### Parte 2: Atrapa al Hacker [1.5 hrs Incluyendo Una Actividad Extra]

[5 min] Introducción y Resumen General del Taller 
 - Herramientas y técnicas adicionales de caza de amenazas (TI) para compartir antes de continuar

[30 min] Escenario 2: Atrapa al Hacker
 - Presentar el marcador y el escenario
 - Facilitar tiempo libre para la caza de amenazas
 - Monitorear el chat

[10 min] Discusión
 - Seleccionar algunas preguntas y mostrar cómo resolverlas

*(Elige una actividad extra para finalizar la sesión si el tiempo lo permite)*    

{{%showanswer "Opción 1: Actividad Sospechosa"%}}	
**Opción 1**         
[5 min] Extra 1: Actividad Sospechosa

[30 min] Escenario 3: Hackers Enviando Documentos con Malware
 - Tiempo libre para investigar

[10 min] Discusión y Cierre de la Sesión {{%/showanswer%}}

{{%showanswer "Opción 2: Verdad o Desinformación"%}}	
**Opción 2**         
[5 min] Introducción al Análisis de Blogs *(para audiencias más avanzadas)*

[30 min] Escenario 3: Verdad o Desinformación
 - Tiempo libre para investigar y analizar el blog 

[10 min] Discusión y Cierre de la Sesión
{{%/showanswer%}}

{{%showanswer "Opción 3: Seguridad en Jeopardy"%}}	
**Opción 3**         
[5 min] Introducción a Seguridad en Jeopardy 
[30 min] Jugar
 - Depende del instructor el formato. Se podría hacer que los estudiantes jueguen en el marcador en sus computadoras y establecer un temporizador para ver quién acumula más puntos al final; sería un cuestionario de "internet abierto". O usar un generador de Jeopardy para incluir preguntas dirigidas a una audiencia con más conocimientos previos sobre términos de ciberseguridad, considerando que el resto del taller no enseña tales términos *(es mejor jugar con una audiencia que ya tenga conocimientos previos en una sesión en vivo)*.

[10 min] Discusión y Cierre de la Sesión
{{%/showanswer%}}



{{< alert theme="success" >}}
## Logística
{{< /alert >}}

### Lista de Verificación

**Aquí están todas las cosas que necesitarán los estudiantes:**   
* Una computadora portátil o de escritorio (no es necesario que sea especialmente potente)   
* Una conexión a internet decente   
* Una cuenta de Microsoft   
    * Una cuenta personal de hotmail o outlook    
    * Una cuenta proporcionada por la escuela, como Office365    
    * *Nota: Si la escuela o la organización no permite el acceso a Azure Data desde el tenant de la compañía, necesitarás un método alternativo, como proporcionar una cuenta específica para el evento que puedan usar*     

**Aquí están algunas cosas que también podrías necesitar:**   
* Versiones impresas en papel de la guía de entrenamiento (hemos descubierto que    
  los participantes tienden a trabajar mejor con una guía en papel)    
* Un proyector o pizarra interactiva para trabajar en grupo los problemas   
* Bocadillos o golosinas - ¡a todos nos encantan! :)    

### Configuración del Marcador

Para acceder al marcador de KC7, ve a este sitio web: https://kc7.azurewebsites.net.  
Deberás iniciar sesión con las credenciales enviadas por correo electrónico después de haber llenado el formulario para organizar una sesión. Si no estás organizando una sesión, puedes crear una cuenta para iniciar sesión.

Si estás gestionando una sesión, ya deberías estar añadido a la sesión de juego para tu grupo. Lo verás en tu panel al iniciar sesión. Para unirte a la sesión, simplemente haz clic en el botón "unirse a este juego".

También necesitarás añadir preguntas o desafíos para que los participantes del juego puedan responder y ganar puntos. Para hacerlo:

* Asegúrate de haber iniciado sesión como administrador de tu sesión
* Busca la lista de preguntas que corresponde a la guía de entrenamiento que estás usando
* Selecciona el conjunto de preguntas del menú desplegable

### Recursos Adicionales

Repositorio KC7 en Github: https://github.com/kkneomis/kc7       
Sitio web de KC7: https://kc7cyber.com/#demos      