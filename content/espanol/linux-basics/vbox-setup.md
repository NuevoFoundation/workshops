---
title: "Usando Máquinas Virtuales Parte 1"
description: "Una guía introductoria para usar máquinas virtuales"
date: 2022-09-23
difficulties: ["intermedio"]
weight: 1
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/zoutwedSLKI" title="Using Virtual Machines Part 1 - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Te estamos proporcionando una copia del ordenador hackeado como una máquina virtual para que puedas ayudarnos.
    </div>
</div>

{{% notice info %}}

### ¿Qué es una máquina virtual?

Una **máquina virtual** (comúnmente llamada VM) es un archivo de computadora (denominado `imagen`) que se comporta como una computadora real.  
En otras palabras, es un ordenador dentro de otro ordenador. Se ejecuta en una ventana, como cualquier otro programa.  
Esto te ofrece la misma experiencia en una VM que en una computadora normal.

La VM está `aislada` del resto del sistema, lo que significa que el software dentro de una VM no puede afectar el ordenador en sí.  
Esto produce un entorno ideal para probar otros sistemas operativos, acceder a datos infectados por virus y crear nuevo software o aplicaciones.
{{% /notice %}}

## ¿Qué es VirtualBox?

VirtualBox es un software de virtualización, también llamado `hipervisor`. Permite que tu ordenador sea el anfitrión de máquinas virtuales.

## Descargar VirtualBox

Puedes descargar VirtualBox usando este enlace:

<a class="my-2 mx-4 btn btn-info" target="_blank" href="https://www.virtualbox.org/wiki/Downloads">
Enlace de descarga
</a>

Si estás utilizando Windows: Selecciona "Windows hosts"  
Si estás utilizando macOS: Selecciona "OS X hosts"  
Si estás utilizando algo más, recomendamos usar Windows o macOS para este taller. Cualquier otro sistema está fuera del alcance de este taller.

![página de descarga de VirtualBox](../images/vbox-dlpage-update.PNG?classes=border,shadow)

A continuación, ejecuta el instalador que acabas de descargar.

¡Las opciones predeterminadas serán suficientes para hoy! Sigue haciendo clic en "Next" en el instalador.

Ten en cuenta que hay algunas opciones de selección en la tercera página.  
![opciones de instalación de VirtualBox](../images/vbox-install-03.PNG?classes=border,shadow)

Si ves esta advertencia, no te preocupes, ya que esto es esperado.  
![advertencia de red de VirtualBox](../images/vbox-install-04.PNG?classes=border,shadow)

Una vez que llegues a esta página, haz clic en "Install" para terminar la configuración.  
![instalación de VirtualBox](../images/vbox-install-05.PNG?classes=border,shadow)

Finalmente, selecciona la casilla para iniciar VirtualBox después de que termine la instalación.  
![lanzar VirtualBox después de instalar](../images/vbox-install-06.PNG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        ¡Sí! Terminamos la instalación de VirtualBox. Ahora estamos listos para comenzar a usarlo.
    </div>
</div>