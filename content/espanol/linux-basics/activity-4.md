---
title: "Actividad 4 - Práctica de Tomar Notas"
description: "Usa comandos de Linux para crear un nuevo directorio"
date: 2022-09-23
difficulties: ["intermedio"]
weight: 7
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/h9qokQeLREI" title="Actividad 4 - Práctica de Tomar Notas - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Como ingeniero de ciberseguridad, es importante tomar muchas notas. Estas son útiles para referencia futura y entender cómo ocurrió el ataque. ¡Vamos a mejorar nuestro espacio de trabajo!
    </div>
</div>

### ¿Qué pasa si quiero crear un nuevo directorio?

Para practicar la creación de un nuevo directorio, utiliza el comando `mkdir` (que significa "Make Directory" en inglés) en el siguiente formato: `mkdir nombre_del_nuevo_directorio`.

Vamos a crear un directorio llamado `files` escribiendo el siguiente comando:

```
mkdir files
```

<img src="../images/04_mkdir.PNG" alt="comando mkdir" style="width:600px;"/>

Como puedes ver, ahora cuando se ejecuta `ls -l`, aparece un directorio adicional llamado `files`.

### ¿Qué puedes hacer con estos archivos?

Un ejemplo de cómo puedes manipular un archivo o directorio es moviéndolo a otro lugar. Esto se logra con el comando de mover, `mv`. Practiquemos moviendo el directorio `Music` dentro del directorio `Documents`.

Escribe el siguiente comando:

```
mv Music/ Documents/
```

Ahora escribe `ls -l` una vez más y mira el resultado.

![ls-l command](../images/04_mv_music_dir.png?classes=border,shadow)

Deberías ver que el directorio `Music` ya no aparece, porque fue movido dentro del directorio `Documents`.

{{% notice tip %}}
Podemos verificar que se movió a `Documents` utilizando el comando `ls` con la ruta del directorio agregado.

```
ls -l Documents/
```

{{% /notice %}}

Practiquemos `mv` una vez más moviéndolo de regreso.

Intenta esto:

```
mv Documents/Music/ .
```

Esto mueve el directorio `Music` del directorio `Documents` de regreso a nuestro directorio actual, indicado por `.`. El punto se usa en los comandos para denotar el directorio actual. Escribir `ls -l` una vez más muestra que `Music` ha regresado a este directorio.

<img src="../images/../images/03_ls-l.png" height="500" alt="comando ls -l"/>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Buen trabajo, ahora sabes cómo mover archivos. Pronto usaremos este conocimiento para recuperarnos del ataque.
    </div>
</div>

### ¿Qué pasa si quiero crear un nuevo archivo?

Para crear un archivo podemos usar el comando `touch`. El comando touch crea un archivo vacío sin datos.

Prueba el siguiente comando para crear un archivo llamado `file1`:

```
touch file1
```

<img src="../images/04_touch.PNG" alt="comando touch" style="width:600px;"/>

Ahora, al escribir `ls -l`, podemos ver que el archivo ha sido creado.

### ¿Qué pasa si quiero agregar datos al archivo?

Un archivo vacío no tiene mucho uso, así que vamos a agregarle algo de información, como nuestro nombre.  
Para abrir el archivo y editarlo, utilizaremos el comando `vim`. Vim es un editor que nos permite agregar, eliminar y cambiar los datos en un archivo.

Escribe el siguiente comando para editar file1:

```
vim file1
```

<img src="../images/../images/04_vim.PNG" height="500" alt="comando vim"/>

Ahora estamos en el editor Vim. Presiona `i` para entrar en el modo insertar. Escribe `nuvi` y presiona `esc` para salir del modo insertar. Finalmente, escribe `:wq` y presiona enter. Los dos puntos indican que estás ingresando un comando. Las letras w y q indican a Vim que quieres escribir los cambios realizados y salir.

{{% notice warning %}}
Para salir de `vim`, presiona `esc` y luego escribe `:wq`. ¡Necesitarás esto cada vez que abras `vim`!
{{% /notice %}}

![ls-l command](../images/04_vim_after.PNG?classes=border,shadow)

<img src="../images/04_vim_after.PNG" alt="vim después" style="width:600px;"/>

Una vez más escribe `ls -l` y puedes ver que file1 ahora tiene 5 bytes de contenido, en lugar de 0 cuando estaba vacío.

{{% notice note %}}

Definición: Un <b>byte</b> es una unidad de medida para datos. En el nivel más básico, las computadoras utilizan lo que se conoce como un "bit", que es una sola unidad de datos cuyo valor puede ser "0" o "1", para representar información. Un byte es una colección de 8 bits.

{{% /notice %}}

Última cosa. Vamos a mover nuestro nuevo archivo a nuestro nuevo directorio.

Escribe el siguiente comando:

```
mv file1 files
```

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align