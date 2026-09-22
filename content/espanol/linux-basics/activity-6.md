---
title: "Actividad 6 - Un Archivo MALO"
description: "Usa comandos de Linux para buscar"
date: 2022-09-23
difficulties: ["intermedio"]
weight: 9
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/OaXi1GN_93U" title="Actividad 6 - Un Archivo MALO - video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Sé que tenía un archivo llamado secret-message.txt con una de mis citas favoritas. "Hazlo. O no lo hagas. No existe el intento." ¿Puedes ayudarme a encontrarlo?
    </div>
</div>

### ¿Buscando un patrón en un archivo?

`grep` (**g**lobal search for **r**egular **e**xpression and **p**rint the result) es un comando usado para buscar texto dentro de archivos. Hay diferentes indicadores u opciones que pueden cambiar cómo se usa.

El formato es: `grep [flag] “[pattern]” [filename]`.

| Indicadores | Usos                                                           |
| :---------- | :------------------------------------------------------------- |
| -c          | Para obtener el número de archivos con el patrón.              |
| -i          | Para hacer que la búsqueda no distinga entre mayúsculas y minúsculas. “uNiX” es lo mismo que “unix” |
| -n          | Para devolver las líneas coincidentes y sus números de línea.  |
| -R          | Buscar en todos los archivos del directorio actual.            |

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        ¡Practiquemos este comando para encontrar mi archivo secret-message.txt!
    </div>
</div>

Probemos el siguiente comando:

```
cd
grep -R "Hazlo. O no lo hagas. No existe el intento."
```

![comando grep](../images/Act6.1.png?classes=border,shadow)

---

### ¿Por qué el archivo secret-message tiene ese aspecto?

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        ¿Recuerdas ese archivo que vimos con el nombre extraño? Se llamaba malware.sh. Deberíamos buscarlo de nuevo y echarle un vistazo más de cerca. ¡Creo que los hackers dejaron esto!
    </div>
</div>

`find` es un comando utilizado para buscar un archivo con ciertos parámetros dentro de un directorio o región de archivos. Puede usarse de múltiples maneras, incluyendo:

- Buscar un archivo con un nombre de archivo específico  
  El formato es: `find [directory] -name [filename]`
- Buscar todos los archivos con una extensión de archivo específica (por ejemplo, archivos de texto que terminan en .txt)  
  El formato es: `find [directory] -name *.txt`

Usa el comando `find` para buscar el archivo dentro del directorio actual. ¿Hay algún comando que podamos usar para averiguar cuál es el directorio actual?

![comando find](../images/Act6.2.png?classes=border,shadow)