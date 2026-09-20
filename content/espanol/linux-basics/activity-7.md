---
title: "Actividad 7 - ¿Qué está mal con el archivo?"
description: "Usa comandos de Linux para leer el archivo sin abrirlo"
date: 2022-09-23
difficulties: ["intermedio"]
weight: 10
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/tgciAD4hbyU" title="Actividad 7 - ¿Qué está mal con el archivo? - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        ¡El malware puede ser peligroso! ¡No lo abras de inmediato! En su lugar, usaremos la línea de comandos para echarle un vistazo.
    </div>
</div>

{{% notice warning %}}
Para archivos sobre los que no estamos seguros, necesitamos echarles un vistazo para no abrir un virus por accidente.
{{% /notice %}}

### ¿Cómo podemos mirar las primeras líneas del archivo?

A veces, solo necesitas mirar el inicio de un archivo. El comando `head` muestra las primeras líneas de un archivo.  
El formato es: `head [filename]`

{{% notice tip %}}
Si añades el indicador -n puedes especificar cuántas líneas deseas mirar.  
El formato es: `head -n [# de líneas] [filename]`
{{% /notice %}}

¡Intenta mirar las primeras 5 líneas de `malware.sh`!

![Comando head](../images/Act7.1.png?classes=border,shadow)

### ¿Cómo podemos mirar las últimas líneas del archivo?

A veces, solo necesitas mirar el final de un archivo. El comando `tail` muestra las últimas líneas de un archivo.  
El formato es: `tail [filename]`

{{% notice tip %}}
Si añades el indicador -n puedes especificar cuántas líneas deseas mirar.  
El formato es: `tail -n [# de líneas] [filename]`
{{% /notice %}}

¡Intenta mirar las últimas 5 líneas de `malware.sh`!

![Comando tail](../images/Act7.2.png?classes=border,shadow)

### ¿Cómo podemos mirar el archivo completo?

A veces, al mirar las primeras y últimas líneas del archivo, nos damos cuenta de que necesitamos ver el archivo completo para entender qué está haciendo y qué deberíamos hacer al respecto.  
¡Veamos todo el contenido de `malware.sh`!

`cat` muestra el contenido de un archivo.  
El formato es: `cat [filename]`

{{% notice tip %}}
`less` y `more` son comandos similares a `cat`.

#### El comando more

`more` es un comando diseñado para archivos grandes. Muestra tantas líneas como sea posible y luego presionas enter para ver la siguiente sección del archivo hasta llegar al final.  
El formato es: `more [filename]`

![Comando more](../images/Act7.3.png?classes=border,shadow)

#### El comando less

`less` es un comando útil para moverse hacia adelante y hacia atrás por las secciones de un archivo. Funciona de manera similar a `more`, pero utilizas las teclas de flecha hacia arriba y abajo para moverte por las secciones del archivo. Para salir presiona 'q'.  
El formato es: `less [filename]`

![Comando less](../images/Act7.4.png?classes=border,shadow)
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        ¿Qué crees que hace malware.sh? ¡Agrégalo a tu reporte!
    </div>
</div>