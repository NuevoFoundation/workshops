---
title: "Bono 2: ¿Verdad o Desinformación?"
draft: false
weight: 22
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/bGFhF22Lr9I" title="Bonus 2: Truth or Misinformation? - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Análisis del Blog Cibernético

Para este escenario, queremos que revises la publicación del blog a continuación y veas si puedes encontrar evidencia en **SecurityLogs2** que respalde o refute la información publicada.

------------------------------------------------------
*[Inicio de la Publicación del Blog]*

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/blog1.png?raw=true" alt= “Blog1” width="value" height="value">


**¿Qué es UnhelpfulDesk?** 
 
Los implantes de malware UnhelpfulDesk son entregados por archivos con nombres que se asemejan a funciones legítimas de TI, como actualizaciones de software o restablecimientos de contraseñas, o temas de investigación médica, como la investigación de vacunas. Estos archivos se entregan a las víctimas a través de correos electrónicos maliciosos que contienen enlaces para descargar los archivos.
 
 
 
**Droppers de UnhelpfulDesk** 
 
| Nombre del archivo 	| Sha256     |
| --------------- | ------------------------------------------------------- |
|Thesis_on_vaccine.exe 	| 232568cb9c5d1b3698334c504b173e637826d 79074fb8fa23a54981578eb7dc9   |
|ResearchBibliographyGenerator.pptx 	| 6e4a6278077f310e69017dba9a173d9d27 eddec9236231e1717a475c26242ae6    |
|Software_Update.rar |	2f2e5f20a726e9710b9c5c7c681e66240f854acd 48107e5cd193d6133297b72f    |
|IT_PASSWORD_RESET_TOOL.rar |	fe04d68b163bbf432196c0d7bb184176a42606 30374c93c916cc6b52fc9855f7 |
 
**Implantes Dropped** 
 
|Nombre del archivo 	| Sha256 |
| --- | --- | 
|updater.dll |	3666cb55d0c4974bfee855ba43d596fc6d10 baff5eb45ac8b6432a7d604cb8e9 | 
|updater.dll |	42a337bcec26df0130a11baf9e6017999385 1b88f1cabec52973f88774e903fb | 
|updater.dll |	ea05ff75fef906a60545129a7c5bea2956bf de63b8e714eb42db3ae50b99dec3 | 
|updater.dll |  370ce39ba328329ff16b5ede1079f6402e68 abceb34e65cb31883a3b3730b530 | 
|updater.dll |	e3970346ff7fcc3665f027d7f221968087f3 c42705f5799fbc1d2811ab1ca4ea | 
 
 
 
Nota: *Muestras de los archivos de implantes UnhelpfulDesk detectados por los investigadores de VulnerableArray están disponibles en VirusTotal.*
 
Una vez desplegado con éxito, el implante UnhelpfulDesk ejecuta reconocimiento mediante los siguientes comandos: 
 ```
  ping 8.8.8.8    
  whoami    
  net user Administratr 
 ```
Posteriormente, el malware cifrará los archivos en la máquina y exigirá un rescate para descifrarlos. La nota de rescate se obtiene de Pastebin como se muestra a continuación: 
```
curl https://pastebin[.]com/HOW%20TO%20RECOVER%20YOUR%20FILES.txt 
```

**Otros Indicadores de Compromiso (IOCs)**
 
214.217.73[.]146     
65.69.253[.]41     
199.57.49[.]250     
install-notice[.]com      
remarkablevirus[.]tech        
noreply_info[@]hotmail.com      
vaccinejournal[@]yahoo.com 

*[Fin de la Publicación del Blog]*

-----------------------------------------------------

## Ahora te toca a ti… 
 
Nuestro Director de Seguridad de la Información (CISO) te ha pedido que evalúes este informe de VulnerableArray y determines si es preciso utilizando los registros de la base de datos **SecurityLogs2**.     

🤔  Al realizar tu evaluación, considera las siguientes preguntas: 

{{< alert theme="success" >}} 
*Pregunta 1. ¿Todos los indicadores reportados pertenecen al mismo grupo de actividad? ¿Cómo lo sabes?*
 {{< notice note >}}
  **Pista:** Usa el modelo Diamond (Adversario, Víctima, Infraestructura, Capacidades) para ayudarte a pensar en la agrupación de actividades distintas. Busca similitudes y diferencias en cada uno de los cuatro vértices del modelo Diamond. {{< /notice >}}
 
*Pregunta 2. El informe afirma que el malware UnhelpfulDesk sirve para desplegar ransomware y cifrar archivos en un sistema infectado. ¿Estás de acuerdo con esta evaluación? ¿O ves evidencia de acciones alternativas según sus objetivos?*
 {{< notice note >}}
  **Pista:** Trata de buscar actividad relacionada con los indicadores basados en el malware compartidos en el blog, luego identifica algunos sistemas comprometidos. ¿Ves actividad post-compromiso en alguno de estos sistemas que sea diferente al ransomware descrito en el blog? {{< /notice >}}
 
*Pregunta 3. ¿Qué errores analíticos, si existen, cometieron los autores del blog?* 
 {{< notice note >}}
  **Pista:** Algunos procesos son ejecutados automáticamente por el malware al ejecutarse. Otros procesos son ejecutados manualmente (con intervención humana) por el operador después de que se establece el canal de comando y control. {{< /notice >}}
 
 
*Pregunta 4. ¿Es el malware UnhelpfulDesk exclusivo del actor ITINIUM? ¿Cómo lo sabes?* 
 {{< notice note >}}
  **Pista:** Los implantes updater.dll parecen ser descargados de archivos con dos temas separados (TI e investigación). Piensa por qué podría ser el caso.  {{< /notice >}}
 
*Pregunta 5. ¿Hay múltiples actores apuntando a Envolve Labs? Si es así, ¿puedes describir las Tácticas, Técnicas y Procedimientos (TTPs) de cada uno de ellos? ¿Cómo son similares? ¿Cómo son diferentes?* 
{{<