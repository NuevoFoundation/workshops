---
title: "Actividad 11 - Almacenar y proteger archivos"
description: "Usa comandos de Linux para comprimir y archivar archivos."
date: 2022-09-23
prereq: "Ninguno."
difficulties: ["intermedio"]
weight: 14
---

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        ¡Muchas gracias por ayudarnos a arreglar mi máquina! Ahora hagamos un paquete ordenado con todo.
    </div>
</div>

### Asegura tus archivos para que no vuelvan a ser manipulados

`tar` es un comando que crea y extrae archivos archivados.

{{% notice info %}}
Un archivo archivado es una colección de archivos juntos. Un archivo archivado contiene los datos comprimidos de uno o más archivos.

`zip` es un comando que comprime un conjunto de archivos. El formato es: `zip [nombre del archivo zip] [nombres de los archivos a comprimir]`

{{% /notice %}}

El formato es: `tar [nombres de los archivos]`.

| flags | Usos                                 |
| :---- | :----------------------------------- |
| -c    | crea un archivo archivado            |
| -x    | extrae un archivo archivado          |
| -f    | crea un archivo con el nombre dado   |

¡Usa `tar` para asegurar tu directorio de `files`! Vas a querer crear un archivo archivado con el nombre `files.tar.gz`.

![comando tar](../images/Act11.png?classes=border,shadow)