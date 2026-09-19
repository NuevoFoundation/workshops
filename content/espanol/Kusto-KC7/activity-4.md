---
title: "Actividad 4: Atrapa al Hacker"
draft: false
weight: 16
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/HjKkQVH5-rQ" title="Actividad 4: Atrapa al Hacker - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}}Esta es una sección mucho más breve; solo vamos a explicar el escenario y dejarte tiempo libre para investigar. Puedes tomarte el tiempo que desees en esta parte, pero en las sesiones en vivo generalmente les damos a los participantes entre 30-40 minutos antes de continuar.

- **Asegúrate de usar la base de datos SecurityLogs**
- **Presenta tus respuestas al desafío "Presentando a los Hackers" en el Scoreboard**

#### **¡Buena suerte en la investigación!**{{< /notice >}}

### Presentando a los Hackers

Ahora que has completado tu primer entrenamiento inicial, ¡estás listo para trabajar en tu primer caso dentro del SOC!

Un investigador de seguridad tuiteó que el dominio *“immune[.]tech”* estaba siendo utilizado por hackers. Aparentemente, los hackers están enviando correos electrónicos fraudulentos de phishing con credenciales (inicios de sesión, contraseñas, etc.) desde dentro de este dominio.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF1.png?raw=true" alt= “CTF1” width="value" height="value">

{{< alert theme="warning" >}}
⚠️ ¡NOTA! Es un protocolo de seguridad común usar el formato immune[.]tech o domain[.]com al mencionar enlaces potencialmente maliciosos en línea. Agregar estos corchetes alrededor del punto impide la creación de un enlace clicable. Al buscar en los registros, asegúrate de eliminar los corchetes del nombre del dominio. {{< /alert >}}

Según la investigación OSINT que tus compañeros realizaron, este dominio podría estar involucrado como parte de una campaña de phishing con las siguientes etapas:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF2.png?raw=true" alt= “CTF2” width="value" height="value">

{{< notice note >}}🎯**Punto Clave – Inteligencia de Fuentes Abiertas (OSINT)**: Los investigadores y analistas de seguridad suelen utilizar datos gratuitos y disponibles públicamente, ¡como Twitter! Nos referimos a estos datos públicos como OSINT, y puede ser una excelente manera de obtener pistas investigativas. Como con todas las fuentes de datos públicas en internet, debes respaldar cualquier información obtenida de OSINT con un análisis riguroso, en lugar de confiar ciegamente en la fuente.{{< /notice >}}
{{< alert theme="success" >}}
🤔 **Considera las siguientes preguntas relacionadas con esta pista para ayudarte a pensar a través de la investigación. Algunas pistas están incluidas en las siguientes preguntas:** 

{{%showanswer "Pregunta 1"%}}
*¿Qué usuarios de nuestra organización recibieron correos electrónicos que contenían el dominio immune.tech?*

🤫 **Pista**: Prueba el siguiente comando e inserta el nombre del dominio en cuestión.
```
Email
| where link contains '[insert domain name]'
``` 
{{%/showanswer%}}

{{%showanswer "Pregunta 2"%}}	
*¿Bloqueamos alguno de los correos electrónicos que contenían ese dominio? ¿Quién recibió efectivamente uno de esos correos electrónicos?*     

🤫 **Pista**: El campo “accepted” en la tabla Email te indica si el correo electrónico fue bloqueado o no. Los correos bloqueados mostrarán el valor false. {{%/showanswer%}}

{{%showanswer "Pregunta 3"%}}	
*¿Qué otros dominios compartieron las mismas IPs que immune.tech? ¿Puedes encontrar la lista completa de dominios asociados con este actor basado en los datos de PassiveDns?* 

🤫 **Pista**: Puedes usar el operador in para verificar múltiples valores en un campo. Ejemplo: where field in (“x”, “y”, “z”). {{%/showanswer%}}

{{%showanswer "Pregunta 4"%}}
*¿Qué direcciones de correo electrónico utilizaron los hackers para enviar estos dominios?* 

🤫 **Pista**: Observa quién figura en la columna "sender" de los correos electrónicos que ya sabes que contienen asuntos y enlaces sospechosos. {{%/showanswer%}}

{{%showanswer "Pregunta 5"%}}
*¿Los usuarios hicieron clic en alguno de los enlaces en los correos electrónicos de phishing?* 

🤫 **Pista**: Revisa los registros de archivos, eventos de procesos y/o el historial de navegación de los dispositivos y cuentas asociadas con los usuarios que sabes que recibieron el correo malicioso para ver si hay evidencia de actividad extraña que indique que hicieron clic en el enlace. {{%/showanswer%}}

{{%showanswer "Pregunta 6"%}}
*¿Algún usuario tuvo sus credenciales robadas? ¿Cómo lo sabes?* 

🤫 **Pista**: Para que sus credenciales sean robadas, un usuario necesitaría visitar el sitio de recolección de credenciales y posteriormente ingresar su nombre de usuario y contraseña. Luego, el actor podría intentar acceder a la cuenta del usuario utilizando las credenciales robadas. Puedes encontrar detalles sobre la actividad de inicio de sesión en la tabla **AuthenticationEvents**. {{%/showanswer%}}

{{%showanswer "Pregunta 7"%}}
*¿Algún usuario tuvo contenidos extraídos (robados) de su buzón de correo? ¿Cómo lo sabes? ¿Qué riesgo representa para la empresa el contenido que fue robado?* {{%/showanswer%}}
{{< /alert >}}