---
title: "Actividad 3: Introducción al Lenguaje de Consultas Kusto (KQL)"
draft: false
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/lAeRxuUN1IM" title="Actividad 3: Introducción al Lenguaje de Consultas Kusto (KQL) - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice tip >}} Aquí es donde te sugerimos abrir el panel de control de puntuación y el visor de ADX que usaste anteriormente en ventanas separadas, para completar los ejercicios restantes. Si no puedes o no deseas usar el panel de control de puntuación, todas las preguntas para esta sección están listadas a continuación.  

*Recuerda que cualquier página con un video duplica la lección tanto en formato de video como escrito. Puedes seguir uno u otro dependiendo del tipo de aprendiz que seas.* {{< /notice >}}

## Introducción al KQL (Kusto Query Language)

**[Asegúrate de usar la base de datos SecurityLogs para este ejercicio.]**

Escribe la siguiente consulta en el espacio de trabajo para ver las primeras filas de la tabla **Employees**. Presiona “run” o “shift + enter” para ejecutar la consulta. Todos los bloques de código KQL para este taller estarán delineados en gris, como el que aparece a continuación.

```KQL
Employees
|   take 10
```

Esta consulta tiene varias partes. Tomemos un momento para desglosarlas:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL1.png?raw=true" alt= “KQL1” width="50%" height="value">

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL2.png?raw=true" alt= “KQL2” width="80%" height="value">

El operador <span style="color:red">**take**</span> es una herramienta poderosa que puedes usar para explorar filas en una tabla, y así comprender mejor qué tipo de datos están almacenados allí.

{{< notice note >}} 🎯**Punto clave – Qué hacer cuando no sabes qué hacer**: Cada vez que te enfrentes a una tabla de base de datos desconocida, lo primero que debes hacer es muestrear sus filas utilizando el operador <span style="color:red">**take**</span>. Así, podrás saber qué campos están disponibles para consultarlos y deducir qué tipo de información podrías extraer de la fuente de datos. {{< /notice >}}

La tabla Employees contiene información acerca de todos los empleados en nuestra organización. En este caso, podemos ver que la organización se llama “Envolve Labs” y el dominio es “envolvelabs.com”.

{{< alert theme="success" >}}
*Pregunta 1.	🤔 ¡Pruébalo tú mismo! Haz un <span style="color:red">**take**</span> 10 en todas las demás tablas para ver qué tipo de datos contienen.*{{< /alert >}}

Puedes escribir fácilmente múltiples consultas en la misma pestaña del espacio de trabajo. Para hacerlo, asegúrate de separar cada consulta con una línea en blanco. Observa abajo cómo hemos separado las consultas para las tablas Employees, Email y OutboundBrowsing con líneas en blanco en las líneas 3 y 6.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL3.png?raw=true" alt= “KQL3” width="value" height="value">

Cuando tienes múltiples consultas, es importante decirle a ADX qué consulta deseas ejecutar. Para elegir una consulta, simplemente haz clic en cualquier línea que sea parte de esa consulta. Una vez que hayas seleccionado una consulta, se resaltará en azul, como se ve en las líneas 4 y 5 anteriores.

#### **Descubriendo “cuántos”: Operador 'count'**

Podemos usar el operador <span style="color:red">**count**</span> para ver cuántas filas hay en una tabla. Esto nos dice cuánta información está almacenada allí.

```KQL
Employees
|   count
```
{{< alert theme="success" >}}
*Pregunta 2.	🤔¿Cuántos empleados hay en la empresa?*{{< /alert >}}

#### **Filtrado de datos con el operador 'where'**

Hasta ahora hemos ejecutado consultas que observan el contenido completo de la tabla. A menudo, en el análisis de ciberseguridad, solo queremos observar datos que cumplan con un conjunto de condiciones o criterios. Para lograrlo, aplicamos filtros a columnas específicas.

Podemos usar el operador <span style="color:red">**where**</span> en KQL para aplicar filtros a un campo en particular. Por ejemplo, podemos encontrar a todos los empleados con el nombre “Linda” filtrando la columna de nombre en la tabla **Employees**.

Las declaraciones <span style="color:red">**where**</span> se escriben utilizando una estructura particular. Usa esta tabla para comprender cómo estructurar una declaración <span style="color:red">**where**</span>.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL4.png?raw=true" alt= “KQL4” width="50%" height="value">

```KQL
Employees
|   where name has "Linda"
```
El operador <span style="color:blue">**has**</span> es útil aquí porque estamos buscando solo una coincidencia parcial. Si quisiéramos buscar un empleado con un nombre y apellido específicos (una coincidencia exacta), usaríamos el operador ==:

```KQL
Employees
|   where name == "Linda Holbert"
```
{{< alert theme="success" >}}
*Pregunta 3.	🤔 Cada empleado de Envolve Labs tiene asignada una dirección IP. ¿Qué empleado tiene la dirección IP: “192.168.0.191”?*{{< /alert >}}

Mientras realizan sus tareas diarias, los empleados de Envolve Labs envían y reciben correos electrónicos. Un registro de cada uno de estos correos electrónicos se almacena en la tabla **Email**. 

{{< notice note >}} 🎯**Punto clave – Privacidad del usuario y metadatos**: Como puedes imaginar, algunos correos electrónicos son altamente sensibles. En lugar de almacenar el contenido completo de cada correo electrónico enviado y recibido en la empresa en una base de datos a la que puedan acceder fácilmente los analistas de seguridad, solo capturamos los metadatos de los correos electrónicos.

Los metadatos de los correos incluyen información como: la hora en que se envió el correo, el remitente, el destinatario, la línea de asunto y cualquier enlace que contenga el correo electrónico. Almac