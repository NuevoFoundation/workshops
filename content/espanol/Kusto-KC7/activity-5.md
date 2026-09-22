---
title: "Bonus 1: Actividad Sospechosa"
draft: false
weight: 20
---


## Hackers Enviando Documentos Maliciosos

Tras investigar un poco sobre la actividad de phishing, te encuentras con otro tweet de un proveedor de inteligencia de amenazas, SolitaryStrike:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Bonus1.png?raw=true" alt= “Bonus1” width="value" height="value">


{{< notice note >}}
🤔 Usa el tweet para comenzar tu búsqueda. Deja que las preguntas te ayuden a pivotar entre los datos para descubrir qué está pasando.     
- Envía tus respuestas al desafío "Hackers Enviando Documentos Maliciosos" en el marcador de puntuación en https://kc7cyber.azurewebsites.net/ para obtener retroalimentación y ganar puntos. Las preguntas a continuación están reflejadas en el marcador de puntuación para esta sección. **No hay una clave de respuestas maestra para esta sección, aparte del marcador de puntuación.**
- **Asegúrate de usar la base de datos SecurityLogs para este ejercicio.**{{< /notice >}}
{{< alert theme="success" >}}
🤔 **Considera las siguientes preguntas relacionadas con esta pista para ayudarte a pensar durante la búsqueda. Algunas pistas están incluidas en las preguntas a continuación:**

{{%showanswer "Pregunta 1"%}}	
*¿Cuántos correos electrónicos contenían el dominio notice[.]io?* 

🤫**Pista:** ¿En qué tabla bajo la base de datos SecurityLogs podría una columna contener evidencia de este sitio web/dominio sospechoso? {{%/showanswer%}}

{{%showanswer "Pregunta 2"%}}	
*¿Qué dirección de correo electrónico envió el dominio notice[.]io?* {{%/showanswer%}}

{{%showanswer "Pregunta 3"%}}	
*¿Cuál fue la línea de asunto de los correos electrónicos que contenían el dominio notice[.]io?* {{%/showanswer%}}

{{%showanswer "Pregunta 4"%}}	
*¿Cuál es el nombre del usuario que hizo clic en el enlace notice[.]io?* {{%/showanswer%}}

{{%showanswer "Pregunta 5"%}}	
*¿En qué marca de tiempo el usuario mencionado arriba descargó el archivo: "Critical_Security_Path.docx"?*    

🤫**Pista:** Los archivos que se crean en los dispositivos de los empleados se capturan en el registro FileCreationEvents. Intenta buscar allí para ver qué empleados descargaron este archivo. {{%/showanswer%}}

{{%showanswer "Pregunta 6"%}}	
*¿Cuántos correos electrónicos fueron enviados a tu organización el 9 de enero por usuarios de wesellbeakers.com?* 

🤫**Pista:** Si no recuerdas el formato de fecha/hora para los registros de correos electrónicos, realiza otra consulta tipo 'take 10' y observa. Esto te ayudará a escribir tu consulta para esta pregunta. {{%/showanswer%}}

{{%showanswer "Pregunta 7"%}}	
*¿Qué otros dominios están alojados en las mismas IPs que notice[.]io?* {{%/showanswer%}}

{{%showanswer "Pregunta 8"%}}	
*Pregunta 8. ¿Qué dirección de correo electrónico se observa enviando correos con uno de los dominios identificados en la pregunta 7?* {{%/showanswer%}}

{{%showanswer "Pregunta 9"%}}	
*Pregunta 9. ¿Cuántos usuarios descargaron los archivos observados en los correos de la pregunta 8?* {{%/showanswer%}}

{{%showanswer "Pregunta 10"%}}	
*Pregunta 10. Uno de los archivos observados en la pregunta 9 - **IMPORTANT_INSTRUCTIONS.pptx** - fue visto en dos correos electrónicos separados. ¿Cuáles son las líneas de asunto de estos correos electrónicos?* {{%/showanswer%}}

{{%showanswer "Pregunta 11"%}}	
*Pregunta 11. ¿Qué dirección de correo electrónico comprometida de pharmasupplies.org se utilizó para enviar un enlace a scanverify.com?* {{%/showanswer%}}

{{%showanswer "Pregunta 12"%}}	
*Pregunta 12. ¿Cuántas IPs ha resuelto scanverify.com?* {{%/showanswer%}}

{{%showanswer "Pregunta 13"%}}	
*Pregunta 13. Considera la dirección de correo electrónico que encontraste en la pregunta 11. ¿Qué otro dominio envió esta dirección de correo electrónico?* {{%/showanswer%}}

{{%showanswer "Pregunta 14"%}}	
*Pregunta 14. ¿Cuál es el nombre del archivo alojado en scanverify.com?* {{%/showanswer%}}

{{%showanswer "Pregunta 15"%}}	
*Pregunta 15. ¿Qué archivo .pptx se utilizó para atacar a Gerald Kempinski y Kenny Salcido?* {{%/showanswer%}}

{{%showanswer "Pregunta 16"%}}	
*Pregunta 16. ¿Qué IP del atacante se utilizó para buscar en el sitio web de EnvolveLabs el término "helpdesk ticket system"?* {{%/showanswer%}}

{{%showanswer "Pregunta 17"%}}	
*Pregunta 17. ¿Cuántos correos electrónicos en total fueron enviados a tu organización por este atacante?* {{%/showanswer%}}

{{%showanswer "Pregunta 18"%}}	
*Pregunta 18. ¿Qué archivo .dll se depositó en una máquina víctima poco después de que el usuario descargara el zip malicioso: **EnvolveLabs_Research_Tool.7z*** 

🤫**Pista:** Los archivos que se crean en los dispositivos de los empleados se capturan en el registro FileCreationEvents. Intenta buscar allí para ver qué empleados descargaron este archivo. {{%/showanswer%}}

{{%showanswer "Pregunta 19"%}}	
*Pregunta 19. ¿Qué comando de reconocimiento de seis letras se ejecutó en la máquina del usuario que cargó el implante anteriormente?*

🤫**Pista:** Intenta reducir la búsqueda a un dispositivo en particular que descargó el archivo EnvolveLabs_Research_Tool.7z. Luego, busca en los registros FileCreationEvents y ProcessEvents para encontrar archivos y procesos creados en el momento en que se descargó el archivo. {{%/showanswer%}}

{{%showanswer "Pregunta 20"%}}	
*Pregunta 20. Un archivo malicioso "infector.exe" se observa realizando acciones sospechosas en múltiples dispositivos. ¿Qué process_commandline asociado con este archivo se está utilizando para la persistencia en los dispositivos?*

🤫**Pista:** Los atacantes establecen persistencia para regresar después y realizar tareas manuales (llamadas actividad manos en el teclado) dentro de la red de tu empresa. Trata de buscar sistemas que crean conexiones a dominios e IPs externos,