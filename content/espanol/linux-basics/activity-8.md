---
title: "Actividad 8 - ¿Qué es diferente?"
description: "Usa comandos de Linux para comparar archivos"
date: 2022-09-23
difficulties: ["intermedio"]
weight: 11
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/fAI1kyAoVTA" title="Actividad 8 - ¿Qué es diferente? - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        ¡Vamos a observar el mensaje secreto para asegurarnos de que este extraño archivo `malware.sh` no le haya hecho nada!
    </div>
</div>

## Diferencias

¿Conocemos un comando que pueda ayudarnos a ubicar el archivo `secret-message.txt`?

![comando find](../images/Act8.1.png?classes=border,shadow)

Desplacémonos al directorio y revisemos la cita "Hazlo. O no lo hagas. No hay intento." que vimos anteriormente. ¿Recuerdas qué comando puede ayudarnos a buscarlo?

![comando grep](../images/Act8.2.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Este archivo usualmente tiene citas divertidas y positivas, pero parece haber muchos cambios. ¿Deberíamos compararlo con una versión conocida que esté en buen estado?
    </div>
</div>

Veamos si podría haber algún respaldo del mensaje secreto dentro de su directorio. Ve al directorio Documentos y prueba:

```
ls -la
```

{{% notice tip %}}
La bandera `-a` muestra todas las entradas, incluyendo los archivos ocultos.
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        ¿Encontraste algún archivo nuevo? ¡Toma notas de los cambios!
    </div>
</div>

## Compara el archivo secret-message.txt con el archivo de respaldo

`diff` es un comando usado para comparar dos archivos y obtener lo que se ha agregado, cambiado y eliminado en el archivo.  
El formato es: `diff [nombre del archivo] [nombre del archivo de comparación]`

{{% notice info %}}
Dato Curioso: Ejecutar `diff --help` mostrará información sobre cómo usar la herramienta `diff`, incluyendo qué opciones se pueden usar con la herramienta.
{{% /notice %}}

Revisa las diferencias entre los dos archivos. ¿Cuántas diferencias encontraste? ¡Pon la información en el archivo que creaste!

{{% notice tip %}}

### Una mejor manera de ver las diferencias

`vimdiff` es un comando que abre una ventana con los archivos en pestañas separadas, resaltando las diferencias.

Prueba `vimdiff` para visualizar mejor las diferencias entre los archivos.
{{% /notice %}}