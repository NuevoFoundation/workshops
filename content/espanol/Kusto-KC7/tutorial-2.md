---
title: "Tutorial 2: Orientación para Nuevos Empleados"
draft: false
weight: 10
---
{{%showanswer "AVISO LEGAL: Todos los dominios, datos y nombres utilizados en este documento, sitio web o cualquier otro material son ficticios ... (cont.)"%}}
*AVISO LEGAL: Todos los dominios, datos y nombres utilizados en este documento, sitio web o cualquier otro material son ficticios y han sido creados únicamente con propósitos ilustrativos y educativos. No representan a individuos, empresas u organizaciones reales.*

*Este documento, sitio web o cualquier otro material, incluidos entre otros textos, imágenes, gráficos, logotipos y software, se proporciona "tal cual" sin garantía de ningún tipo, ya sea expresa o implícita, incluidas, entre otras, las garantías implícitas de comerciabilidad e idoneidad para un propósito particular.*

*En ningún caso los creadores o propietarios de este documento, sitio web o cualquier otro material serán responsables de ningún daño, incluidos, entre otros, daños directos, indirectos, especiales, incidentales o consecuentes, que surjan del uso o la imposibilidad de usar este documento, sitio web u otros materiales, incluso si se les ha advertido de la posibilidad de tales daños.*

*Los creadores o propietarios de este documento, sitio web o cualquier otro material se reservan el derecho de realizar cambios en el contenido en cualquier momento y sin previo aviso.*

*Al acceder o utilizar este documento, sitio web u otros materiales, usted acepta estar sujeto a los términos y condiciones establecidos en este aviso legal. Si no está de acuerdo con estos términos y condiciones, no debería acceder ni utilizar este documento, sitio web u otros materiales.*
{{%/showanswer%}}

## Introducción: Bienvenido a EnvolveLabs

¡Bienvenido a EnvolveLabs Corporation! 🥳 Hoy es tu primer día como Analista Junior del Centro de Operaciones de Seguridad (SOC) en nuestra empresa. Tu principal responsabilidad laboral es defender a EnvolveLabs y a sus empleados de actores cibernéticos malintencionados. 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/EnvolveLabLogo.png?raw=true" alt= “” width="50%" height="value">

EnvolveLabs es una startup de tecnología médica con sede en los Estados Unidos, fundada en 2012. Nuestra misión es desarrollar un nuevo tipo de tecnología de vacuna flexible que cubra muchas cepas virales diferentes y ofrezca inmunidad duradera. Esto eliminaría la necesidad de recibir refuerzos a intervalos regulares y haría las vacunas más accesibles. Nuestra investigación inicial ha demostrado que esta tecnología es altamente efectiva; planeamos comenzar la producción en el primer trimestre de 2024. 

EnvolveLabs tiene una serie de socios clave que contribuyen al éxito de nuestro negocio. Por tanto, esperamos que nuestros empleados tengan comunicación regular con estos socios clave:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve1.png?raw=true" alt= “” width="60%" height="value">

Hasta ahora, nos hemos enfocado plenamente en la investigación médica y en alcanzar nuestras metas de producción. Pero a medida que nuestro trabajo se vuelve más importante y exitoso, hemos comprendido la necesidad de invertir más en esfuerzos de ciberseguridad. ¡Por eso te hemos contratado! 

Como todas las buenas empresas, EnvolveLabs recopila datos de registro sobre la actividad que sus empleados realizan en la red corporativa. Estos registros de auditoría de seguridad se almacenan en Azure Data Explorer (ADX), un servicio de almacenamiento de datos en Azure (la nube de Microsoft). Utilizarás el Lenguaje de Consultas Kusto (KQL) para analizar varios tipos de registros de seguridad. Mediante el análisis de estos registros, puedes ayudarnos a determinar si estamos siendo objetivos de actores malintencionados. 
 - Aquí puedes encontrar la documentación completa sobre las consultas KQL para ADX:    
 https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/tutorial?pivots=azuredataexplorer


### Base de Datos de EnvolveLabs

La base de datos EnvolveLabs_Analysis contiene ocho tablas. Las tablas contienen muchas filas de datos similares. Para registros de seguridad, una sola fila generalmente representa una sola acción realizada por un empleado o un dispositivo en la red en un momento particular.

Actualmente tenemos ocho tipos de datos de registro. Como observarás en ADX, cada tipo de registro corresponde a una tabla existente en la base de datos EnvolveLabs_Analysis:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve3.png?raw=true" alt= “” width="70%" height="value">



{{< notice note >}}
🎯**Punto Clave – Datos "Más Allá del Horizonte" (OTH):** Una de las tablas mencionadas anteriormente no es como las demás – **PassiveDns**. En lugar de ser un registro de seguridad interno, **PassiveDns** es una fuente de datos que hemos adquirido de un proveedor externo. No toda la actividad cibercriminal ocurre dentro de nuestra red corporativa, por lo que a veces dependemos de datos de otras fuentes para completar nuestras investigaciones. {{< /notice >}}

Pronto aprenderás más sobre cómo usar cada uno de estos conjuntos de datos. Primero, ejecutemos algunas consultas para que puedas practicar el uso de KQL y ADX.