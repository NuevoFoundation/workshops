---
title: "Actividad 3: Kusto Query Language 101"
draft: false
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/lAeRxuUN1IM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice tip >}} Aquí es donde queremos que muestre el Marcador y el visor ADX de antes, en ventanas separadas para completar los ejercicios restantes. Si no puede o no quiere utilizar el marcador, todas las preguntas de esta sección se enumeran a continuación. 

*Recuerde que cualquier página con un vídeo duplica la lección tanto en vídeo como en forma escrita. Puedes seguir una u otra dependiendo del tipo de estudiante que seas* {{< /notice >}}

## KQL 101  

**Asegúrese de utilizar la base de datos SecurityLogs para este ejercicio.**

Escriba la siguiente consulta en el área de trabajo para ver las primeras filas de la tabla **Empleados**. Presione «run» o «shift + enter» para ejecutar la consulta. Todos los bloques de código KQL para este taller aparecerán en gris como el que se muestra a continuación.

```KQL
Empleados
|   take 10
```

Esta consulta tiene varias partes. Dediquemos un momento a desglosar cada una de ellas:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL1.png?raw=true" alt= “KQL1” width="50%" height="value">

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL2.png?raw=true" alt= “KQL2” width="80%" height="value">

El <span style="color:red">**take**</span> operador es una potente herramienta que permite explorar las filas de una tabla y, por tanto, comprender mejor qué tipo de datos se almacenan en ella.

{{< notice note >}} 🎯**Punto clave - Qué hacer cuando no sabes qué hacer**: Siempre que te enfrentes a una tabla de base de datos desconocida, lo primero que debes hacer es muestrear sus filas utilizando la función <span style="color:red">**take**</span> operador. De este modo, sabrá qué campos están disponibles para su consulta y podrá adivinar qué tipo de información podría extraer de la fuente de datos. {{< /notice >}}

La tabla Empleados contiene información sobre todos los empleados de nuestra organización. En este caso, podemos ver que la organización se llama «Envolve Labs» y el dominio es“envolvelabs.com”.

{{< alert theme="success" >}}
*Pregunta 1.	🤔 Pruébelo usted mismo Haz una <span style=«color:red»>**take**</span> 10 en todas las demás tablas para ver qué tipo de datos contienen.*{{< /alert >}}

Puede escribir fácilmente varias consultas en la misma pestaña del espacio de trabajo. Para ello, asegúrese de separar cada consulta con una línea vacía. Observe a continuación cómo hemos separado las consultas para las tablas Empleados, Email y OutboundBrowsing mediante líneas vacías en las líneas 3 y 6.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL3.png?raw=true" alt= “KQL3” width="value" height="value">

Cuando tiene varias consultas, es importante indicar a ADX qué consulta desea ejecutar. Para elegir una consulta, simplemente haga clic en cualquier línea que forme parte de esa consulta. Una vez que haya seleccionado una consulta, se resaltará en azul, como se ve en las líneas 4 y 5 anteriores.

#### **Averiguar «Cuántos»: El operador «count »**

Nosotros podemos usar <span style="color:red">**count**</span> para ver cuántas filas hay en una tabla. Esto nos indica cuántos datos hay almacenados en ella.

```KQL
Empleados
|   count
```
{{< alert theme="success" >}}
*Pregunta 2.	🤔¿Cuántos empleados tiene la empresa?*{{< /alert >}}

#### **Filtrado de datos con el operador «where »**

Hasta ahora, hemos ejecutado consultas que examinan todo el contenido de la tabla. A menudo, en los análisis de ciberseguridad, sólo queremos ver los datos que cumplen una serie de condiciones o criterios. Para ello, aplicamos filtros a columnas específicas.

Nosotros podemos usar <span style="color:red">**where**</span> el operador en KQL para aplicar filtros a un campo concreto. Por ejemplo, podemos encontrar todos los empleados con el nombre «Linda» filtrando sobre la columna nombre de la tabla **Empleados**.

<span style="color:red">**where**</span> se redactan siguiendo una estructura determinada. Utilice este útil cuadro para saber cómo estructurar una declaración. <span style="color:red"> **where** </span>

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL4.png?raw=true" alt= “KQL4” width="50%" height="value">

```KQL
Empleados
|   where name has "Linda"?
```
El operador <span style="color:blue">**has**</span> es útil en este caso porque sólo buscamos una coincidencia parcial. Si quisiéramos buscar un empleado con un nombre y un apellido concretos (una coincidencia exacta), utilizaríamos el operador ==: 

```KQL
Empleados
|   where name == "Linda Holbert"
```
{{< alert theme="success" >}}
*Pregunta 3.	🤔A cada empleado de Envolve Labs se le asigna una dirección IP. ¿Qué empleado tiene la dirección IP «192.168.0.191»?* {{< /alert >}}

Mientras realizan sus tareas diarias, los empleados de Envolve Labs envían y reciben correos electrónicos. Un registro de cada uno de estos correos electrónicos se almacena en la tabla **Email**. 

{{< notice note >}}🎯**Punto clave - Privacidad del usuario y metadatos**: Como puedes imaginar, algunos correos electrónicos son altamente sensibles. En lugar de almacenar todo el contenido de cada correo electrónico enviado y recibido en la empresa en una base de datos a la que puedan acceder fácilmente los analistas de seguridad, solo capturamos los metadatos del correo electrónico. 

Los metadatos del correo electrónico incluyen información como: la hora a la que se envió el correo electrónico, el remitente, el destinatario, el asunto y cualquier enlace que pueda contener el correo electrónico. Almacenar sólo los metadatos del correo electrónico, en lugar de todo su contenido, ayuda a proteger la privacidad de nuestros empleados, al tiempo que garantiza que nuestros analistas de seguridad puedan mantenernos a salvo. A veces, incluso los metadatos pueden revelar información sensible, por lo que es importante que no hables de los datos de registro con otros empleados ajenos al SOC.{{< /notice >}}

Podemos encontrar información sobre los correos electrónicos enviados o recibidos por un usuario buscando su dirección de correo electrónico en los campos remitente y destinatario de la tabla **Email**. Por ejemplo, podemos utilizar la siguiente consulta para ver todos los correos electrónicos enviados por «Michael Montello»:

```KQL
Email
|   where sender == "michael_montello@envolvelabs.com"
```
{{< alert theme="success" >}}
*Pregunta 4.	🤔¿Cuántos correos electrónicos recibió Betty Parrish?*{{< /alert >}}

#### **Fácil como 1, 2, 3... Consultas compuestas y el operador distinct**

Podemos utilizar el operador distinct para encontrar valores únicos en una columna determinada. Podemos utilizar la siguiente consulta para determinar cuántos de los usuarios de la organización enviaron correos electrónicos.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL5.png?raw=true" alt= “KQL5” width="50%" height="value">

Es la primera vez que utilizamos una consulta multilínea con varios operadores, así que vamos a desglosarla:


En **línea 2**, tomamos la tabla Email y filtramos los datos hacia abajo para encontrar sólo aquellas filas con «envolvelabs» en la columna remitente.

En la **línea 3**, añadimos otro carácter de tubería ( | ) y utilizamos el operador distinct para encontrar todos los remitentes únicos. Aquí, no estamos encontrando los remitentes únicos para todos los remitentes de correo electrónico, sino sólo los remitentes únicos que quedan después de aplicar el filtro buscando filas con «envolvelabs» en la columna remitente.

Por último, en la **línea 4**, añadimos otro carácter de tubería ( | ) y, a continuación, utilizamos el operador count para contar los resultados de las líneas 1-3 de la consulta.

{{< alert theme="success" >}}
*Pregunta 5.	🤔¿Cuántos usuarios recibieron correos electrónicos con el término «vaccine» en el asunto?{{< /alert >}}

#### **Rastreo de un clic: Datos de navegación saliente**

Cuando los empleados de Envolve Labs navegan a un sitio web desde dentro de la red corporativa, esa actividad de navegación se registra. Esto se almacena en la tabla **OutboundBrowsing**, que contiene registros de los sitios web navegados por cada usuario de la empresa. Cada vez que alguien visita un sitio web, se almacena un registro del mismo en la tabla. Sin embargo, el nombre del usuario no se almacena en la tabla, sólo se registra su dirección IP. Existe una relación 1:1 entre los usuarios y sus direcciones IP asignadas, por lo que podemos consultar la tabla **Empleados** para averiguar quién ha navegado por un determinado sitio web.  

Si queremos averiguar qué sitios web visitó Annie Jackson, podemos encontrar su dirección IP en la tabla **Empleados**.

```KQL
Empleados
|   where name == "Annie Jackson"
```
La consulta anterior nos dice que su dirección IP es «192.168.3.168». Podemos tomar su dirección IP y buscar en la tabla **OutboundBrowsing** para determinar qué sitios web visitó. 

```KQL
OutboundBrowsing
| where src_ip == "192.168.3.168"
```

{{< alert theme="success" >}}
*Pregunta 6.	🤔¿Cuántos sitios web visitó «Keith Mitchell»?*{{< /alert >}}

#### **¿Qué hay en un nombre? Todo sobre los datos DNS pasivos**

Aunque los nombres de dominio como «google.com» son fáciles de recordar para los humanos, los ordenadores no saben cómo manejarlos. Por eso los convierten en direcciones IP legibles por la máquina. Al igual que la dirección de tu casa indica a tus amigos cómo encontrar tu casa o apartamento, una dirección IP indica a tu ordenador dónde encontrar una página o servicio alojado en Internet.


{{< notice note >}} 🎯**Punto clave - Practicar una buena OPSEC**: Si queremos averiguar a qué dirección IP resuelve un determinado dominio, podríamos simplemente navegar hasta él. Pero, si el dominio es malicioso, podría descargar archivos maliciosos en su sistema de análisis corporativo o avisar a los atacantes de que conoce su infraestructura. Como analistas de ciberseguridad, debemos seguir procedimientos y salvaguardas que protejan nuestra capacidad para rastrear amenazas. Estas prácticas suelen denominarse seguridad operativa u OPSEC. {{< /notice >}}

Para eliminar la necesidad de resolver activamente (es decir, navegar directamente o interactuar con un dominio para encontrar su dirección IP relacionada) cada dominio que nos interesa, podemos confiar en los datos DNS pasivos. Los datos DNS pasivos nos permiten explorar de forma segura las relaciones entre dominios e IP, de modo que podemos responder a preguntas como:

- ¿A qué dirección IP resuelve este dominio?      
- ¿Qué dominios están alojados en esta dirección IP?      
- ¿A cuántas otras IP ha resuelto este dominio?     

Estas relaciones de dominio a IP se almacenan en nuestra tabla **PassiveDns**. 
{{< alert theme="success" >}}
*Pregunta 7.	🤔 ¿Cuántos dominios de los registros **PassiveDns** contienen la palabra «vaccine»? (pista: utilice el operador <span style="color:blue">**contains**</span> en vez de <span style="color:blue">**has**</span>. Si te quedas atascado, haz un <span style="color:red">**take**</span> 10 en la tabla para ver los campos disponibles.)*.

*Pregunta 8.	🤔 ¿A qué IP se resolvía el dominio «biotechenvolv.science»?{{< /alert >}}

🤯**Declaraciones de permiso: te hacemos la vida un poco más fácil:**

A veces necesitamos utilizar la salida de una consulta como entrada para una segunda consulta.  La primera forma de hacerlo es introducir manualmente los resultados en la siguiente consulta.

- Por ejemplo, ¿qué pasa si queremos ver toda la actividad de navegación web de los empleados llamados «Linda»?     
- En primer lugar, tendría que ir a la tabla **Empleados** y encontrar las direcciones IP utilizadas por estos empleados.     

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL6.png?raw=true" alt= “KQL6” width="80%" height="value">

Entonces, podría copiar y pegar manualmente estas IPs en una consulta contra la tabla **OutboundBrowsing**. Observe que podemos utilizar el operador in para elegir todas las filas que tengan un valor que coincida con cualquier valor de una lista de posibles valores. En otras palabras, el operador == (comparación) busca una coincidencia exacta, mientras que el operador in busca cualquier valor de la lista.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL7.png?raw=true" alt= “KQL7” width="90%" height="value">

Aunque ésta es una forma válida de obtener la información que necesita, puede que no sea tan elegante (u oportuna) si tuviera 100 o incluso 1000 empleados llamados «Linda».

Podemos conseguirlo de una forma más elegante utilizando una sentencia [let statement].(https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/letstatement), que nos permite asignar un nombre a una expresión o a una función. Podemos utilizar un <span style=«color:blue»>**let**</span> para guardar y dar un nombre a los resultados de la primera consulta, de forma que los valores puedan reutilizarse más adelante. Esto significa que no tenemos que escribir manualmente o copiar y pegar los resultados repetidamente.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL8.png?raw=true" alt= “KQL8” width="value" height="value">

A la izquierda del <span style="color:blue">**let**</span> es el nombre de la variable (“linda_ips” en este caso). El nombre de la variable puede ser el que queramos, pero es útil que sea algo significativo que nos ayude a recordar qué valores está almacenando. 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL9.png?raw=true" alt= “KQL9” width="value" height="value">

En la parte derecha del <span style="color:blue">**let**</span> en la expresión que está almacenando. En este caso, utilizamos el método <span style="color:red">**distinct**</span> para seleccionar valores de una sola columna - por lo que se almacenan en una matriz - o lista de valores. 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL10.png?raw=true" alt= “KQL10” width="value" height="value">

 La declaración <span style="color:blue">**let**</span> termina con un punto y coma.
Después de almacenar el valor de una consulta en una variable mediante la función <span style="color:blue">**let**</span> podemos hacer referencia a ella tantas veces como queramos en el resto de la consulta. La consulta almacenada no muestra ninguna salida. Recuerda, sin embargo, que tu consulta KQL debe tener una sentencia tabular - lo que significa que debes tener otra consulta siguiendo a tu sentencia <span style="color:blue">**let**</span>. 
{{< alert theme="success" >}}
*Pregunta 9.	🤔 ¿Cuántas URL únicas fueron navegadas por empleados llamados «Karen»?{{< /alert >}}


{{< notice note >}}🎯**Punto clave - Pivotar**: Parte de ser un gran ciberanalista es aprender a utilizar múltiples fuentes de datos para contar una historia más completa de lo que ha hecho un atacante. A esto lo llamamos «pivotar». Pivotamos tomando un dato conocido de un conjunto de datos y buscándolo en un conjunto de datos diferente para aprender algo que no sabíamos. Esto lo has practicado aquí cuando empezamos en un conjunto de datos - la tabla Empleados - y usamos el conocimiento de allí para encontrar datos relacionados en otra fuente - **OutboundBrowsing**. {{< /notice >}}


