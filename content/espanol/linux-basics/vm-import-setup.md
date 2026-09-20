---
title: "Uso de Máquinas Virtuales Parte 2"
description: "Continuación de la guía introductoria para usar máquinas virtuales"
date: 2022-09-23
difficulties: ["intermedio"]
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ffcyyJXEhwY" title="Uso de Máquinas Virtuales Parte 2 - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        ¡Excelente trabajo preparando el entorno del host! Ahora carguemos la imagen de la computadora comprometida como una máquina virtual.
    </div>
</div>

## ¿Qué es una imagen?

Las `imágenes` vienen en una variedad de tipos. Tenemos fotografías, que también son imágenes. Las imágenes de computadora son muy similares. Ambas son copias de cosas capturadas en un único punto en el tiempo. Vamos a trabajar con una copia de una computadora que ha estado actuando de manera extraña. ¡Pero no te preocupes, esto no dañará tu computadora! Recuerda que el sistema operativo estará en un `sandbox`, lo que significa que no podrá afectar tu computadora.

## Configurando Kali Linux

### Descargando la imagen

Las `imágenes de sistemas operativos` facilitan el envío de copias exactas de computadores.  
VirtualBox usa la extensión `.ova` para las imágenes de sus máquinas. Esto es similar a cómo guardas documentos como archivos `.docx` y fotografías como `.png`.

¡Vamos a descargar nuestra copia de la computadora! Haz clic en el enlace de abajo para descargar.  
La mayoría de las imágenes de sistemas operativos son grandes (~8GB), pero la nuestra es solo ~3GB. La descarga aún puede tardar unos minutos.

<a class="my-2 mx-4 btn btn-info" href="https://nuevofoundation-my.sharepoint.com/:f:/g/personal/beatris_mendezgandica_nuevofoundation_org/EqwR5wQyp9xEpYoP524regQB6rnwgyJBMULhuGIzyMj_4w?e=yg6rFv" target="_blank">
Enlace de descarga
</a>

### Importando la máquina virtual

¡Ahora que has descargado la imagen de la máquina, es hora de configurarla!

#### Paso 1

En la aplicación VirtualBox, podemos _importar_ nuestras imágenes. Haz clic en el botón "Importar" para comenzar.

![botón de importar en VirtualBox](../images/import-01.PNG?classes=border,shadow)

#### Paso 2

El dispositivo que queremos importar será el archivo `.ova` que descargaste anteriormente. Haz clic en la pequeña carpeta con el símbolo de caret verde. Esto abrirá una ventana para que puedas buscar y seleccionar el archivo `.ova`.

![pantalla de importación en VirtualBox](../images/import-02.PNG?classes=border,shadow)

#### Paso 3

Ahora que seleccionaste el archivo de imagen .ova, haz clic en "Abrir". Luego haz clic en "Siguiente" en la pantalla "Dispositivo para Importar".

![pantalla de importación en VirtualBox](../images/import-03.PNG?classes=border,shadow)

#### Paso 4

¡El último paso! En el campo "Nombre", si lo prefieres, puedes darle un nuevo nombre. ¡Es tu propia máquina virtual! Asegúrate de que la opción "Controlador USB" **no** esté seleccionada. Desmárcala. Luego, para la política de dirección MAC, es una buena idea asegurarte de que diga "Generar nuevas direcciones MAC para todos los adaptadores de red". Finalmente, haz clic en "Importar".

![pantalla de importación en VirtualBox](../images/import-05.PNG?classes=border,shadow)

**Nota:** aparecerá una ventana emergente indicando el tiempo necesario para completar la importación.  
Normalmente esto toma alrededor de 5 minutos, pero puede tardar un poco más dependiendo de tu computadora.

![pantalla de importación en VirtualBox](../images/import-06.JPG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        ¡Ahora podemos arrancar la máquina infectada y empezar con nuestras investigaciones!
    </div>
</div>