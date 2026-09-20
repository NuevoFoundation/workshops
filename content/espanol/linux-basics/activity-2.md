---
title: "Actividad 2 - Determinar la ubicación del usuario"
description: "Utiliza un comando de Linux para determinar en qué directorio te encuentras actualmente"
date: 2022-09-23
difficulties: ["intermedio"]
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/v1XLyLuQQyA" title="Actividad 2 - Determinar la ubicación del usuario - video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Antes de poder detener a los hackers, necesitamos aprender a navegar por el sistema de archivos de Linux.
    </div>
</div>

## ¿Qué es un sistema de archivos?

Un sistema de archivos es una colección estructurada de archivos y datos en un disco o unidad de computadora. El nivel más alto de un sistema de archivos se conoce como "root" o raíz. Puedes pensar en ello como el inicio del sistema de archivos.

{{% notice tip %}}
Dato curioso: los sistemas de archivos suelen describirse como un "árbol". Esto se debe a que se asemejan a un árbol al revés, en el que cada carpeta es una rama o una hoja. Por ejemplo, tu sistema de archivos puede tener el aspecto siguiente:

<img src="../images/filesystem-tree.png" height="500" alt="Imagen de un árbol del sistema de archivos"/>

{{% /notice %}}

En una computadora con Windows, puedes explorar el sistema de archivos del disco "C:\" usando "File Explorer" como se muestra a continuación:

![Imagen del explorador de archivos de Windows](../images/filesystem-windows.png?classes=border,shadow)

En una Mac, puedes explorar el sistema de archivos de inicio usando "Finder" como se muestra a continuación:

![Imagen del buscador de archivos de Mac](../images/home-folder-mac.jpg?classes=border,shadow)

## ¿Dónde estás en el sistema de archivos?

Queremos descubrir cuál es nuestro "directorio de trabajo actual". Este es el lugar en el sistema de archivos donde estás posicionado en este momento.

El comando de Linux `pwd` mostrará tu ubicación actual. Esto significa "Print Working Directory" (Imprimir Directorio de Trabajo). ¡Pruébalo!

```
pwd
```

<!---!![pwd command](../images/02_pwd.png?classes=border,shadow) --->
<img src="../images/02_pwd.png" alt="Comando pwd" style="width:700px;"/>

La salida anterior es `/home/nuvi` y su significado se explica a continuación:

- `/`: Este es el símbolo para el directorio raíz de este sistema de archivos.
- `/home`: Este es el camino del directorio de inicio, que se encuentra dentro del directorio raíz.
- `/home/nuvi`: Este es el camino para el directorio "nuvi", que se encuentra dentro del directorio de inicio. La salida se detiene aquí, lo que significa que `/home/nuvi` es el directorio de trabajo actual en el que nos encontramos.
- Este proceso de entrar en el sistema de archivos a través de cada carpeta puede continuar durante más pasos en algunos casos.
- El camino mostrado y descrito arriba se denomina <b>camino absoluto</b>, porque es el camino que se muestra desde el directorio actual hasta el directorio raíz.

## ¿Cómo me muevo por el sistema de archivos?

Para desplazarte a un directorio diferente, utiliza el comando `cd`. Esto significa "Change Directory" (Cambiar Directorio). El formato de este comando es `cd [nombre del directorio]`.

<!---![cd command](../images/02_cd.PNG?classes=border,shadow) --->
<img src="../images/02_cd.PNG" alt="Comando cd" style="width:700px;"/>

En la salida de arriba, puedes ver que cuando escribimos nuevamente `pwd`, el directorio de trabajo en el que estamos ahora es `Desktop`. Prueba el comando `cd ..`.

Prueba otro ejemplo del comando `cd` a continuación:

```
cd ..
```

<!-- ![cd command](../images/02_cdDotDot.PNG?classes=border,shadow) -->
<img src="../images/02_cdDotDot.PNG" alt="Comando cd" style="width:700px;"/>

El `..` después del comando `cd` te lleva un nivel arriba en el árbol del sistema de archivos. La salida de `pwd` muestra ahora que hemos regresado al lugar donde comenzamos. Empezamos en el directorio "nuvi", descendimos en el árbol al directorio `Desktop` con el comando `cd Desktop`, y luego ascendimos en el árbol con el comando `cd ..`.

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        ¡Buen trabajo! A continuación, veremos cómo explorar los directorios en sí.
    </div>
</div>