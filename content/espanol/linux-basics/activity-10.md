---
title: "Actividad 10 - Movamos y reemplacemos"
description: "Usa comandos de Linux para mover y copiar archivos"
date: 2022-09-23
difficulties: ["intermedio"]
weight: 13
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/LPcQW4oGK6g" title="Actividad 10 - Movamos y reemplacemos - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Genial, ahora que el archivo malicioso de los hackers no nos causará más dolores de cabeza, vamos a restaurar el archivo anterior para que todo funcione sin problemas otra vez.
    </div>
</div>

### Cómo arreglar el mensaje secreto

El comando `mv` también puede usarse para reemplazar el archivo de destino con el archivo fuente.  
El formato es: `mv [nombre del archivo fuente] [nombre del destino]`.

Reemplaza el mensaje secreto dañado con la copia de seguridad que encontramos anteriormente.  
Vamos a mover el archivo al nuevo directorio que creamos.

![Comando mv](../images/Act10.1.png?classes=border,shadow)

---

### Haz una copia de seguridad de tus archivos

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Esa copia de seguridad que teníamos antes fue útil para arreglar el archivo manipulado. Vamos a hacer una copia de seguridad de los archivos en nuestro directorio.
    </div>
</div>

`cp` es un comando que copia un archivo de una ubicación a otra.  
El formato es: `cp [nombre del archivo fuente] [nombre del archivo de destino]`.

Haz una copia del archivo que creaste y del `secret-message.txt`.

![Comando cp](../images/Act10.2.png?classes=border,shadow)