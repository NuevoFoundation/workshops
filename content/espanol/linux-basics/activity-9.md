---
title: "Actividad 9 - Eliminar el Archivo Malo"
description: "Usa comandos de Linux para eliminar el archivo y directorio malo"
date: 2022-09-23
difficulties: ["intermedio"]
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/mLsJXEIsadE" title="Actividad 9 - Eliminar el Archivo Malo - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Así que malware.sh es definitivamente un archivo malo dejado por los hackers. ¡Necesitamos eliminarlo y el directorio que lo contiene!
    </div>
</div>

## ¡Elimina el archivo malo!

`rm` es un comando que elimina archivos.  
El formato es: `rm [nombre_del_archivo]`.

{{% notice warning %}}
`rm` elimina permanentemente el archivo.
{{% /notice %}}

Elimina el archivo que hemos decidido que está causando nuestros problemas. ¿Cómo podemos verificar que el archivo fue eliminado por completo?

![comando rm](../images/Act9.1.png?classes=border,shadow)

----

## ¿Qué pasa si necesitamos eliminar un directorio?

`rmdir` es un comando que puede eliminar un directorio vacío.  
El formato es: `rmdir [nombreDelDirectorio]`.

{{% notice warning %}}
`rmdir` elimina permanentemente el directorio.
{{% /notice %}}

¿Cómo puedes eliminar el directorio en el que estaba el archivo malo?

![comando rmdir](../images/Act9.2.png?classes=border,shadow)

{{% notice warning %}}
Eliminar archivos puede ser una operación peligrosa, especialmente en Linux. Asegúrate de estar 100% seguro de que el archivo que deseas borrar es seguro de eliminar. Al eliminar el archivo incorrecto, puedes arruinar accidentalmente tu computadora.
{{% /notice %}}

¿Recuerdas el comando para volver a crear el directorio que eliminamos?

![comando mkdir](../images/Act9.3.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Ahora vamos a comprobar si conocemos un comando para restaurar el archivo secret-message.txt...
    </div>
</div>