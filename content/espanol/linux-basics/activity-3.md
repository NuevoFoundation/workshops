---
title: "Actividad 3 - Explorar el Directorio Actual"
description: "Usa comandos de Linux para ver el contenido del directorio actual"
date: 2022-09-23
difficulties: ["intermedio"]
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/dSsed9cR9QI" title="Actividad 3 - Explorar el Directorio Actual - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## ¿Cómo explorar el directorio?

Para ver los archivos en el directorio actual, usamos el comando `ls`. Significa "Listar".

Pruébalo:

```
ls
```

![comando ls](../images/03_ls-command.png?classes=border,shadow)

### ¿Cómo obtener más información sobre los archivos en este directorio?

Pruébalo:

```
ls -l
```
<img src="../images/../images/03_ls-l.png" height="500" alt="comando ls -l"/>

La opción `-l` en el comando anterior le indica a `ls` que liste los archivos en formato extendido.

## ¿Qué información se está mostrando?

Veamos la primera línea del ejemplo anterior de izquierda a derecha, correspondiente al directorio `Videos`:

![comando ls -l explicado](../images/03_ls-l-numbers.png?classes=border,shadow)

1. <span style="color:green">verde</span>: los permisos del archivo. El primer carácter `d` indica que **Videos** es un directorio. Si fuera un `-` significaría que **Videos** es un archivo.
2. <span style="color:red">rojo</span>: el número de **enlaces** para este archivo. El directorio **Videos** tiene 2 _enlaces_.
3. <span style="color:purple">morado</span>: el usuario que posee este archivo. El usuario `nuvi` es el propietario del directorio **Videos**.
4. <span style="color:white;background-color:#232b36">blanco</span>: el grupo al que pertenece este archivo. Aquí, el directorio **Videos** pertenece al grupo `nuvi`.
5. <span style="color:#ffc000">amarillo</span>: el tamaño del archivo en **bytes**. El tamaño del directorio **Videos** es de 4096 bytes.
6. <span style="color:#ed7d31">naranja</span>: la fecha y hora en que se creó el archivo.
7. <span style="color:#2e75b6">azul</span>: el nombre del directorio.