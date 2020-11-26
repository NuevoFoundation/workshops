---
title: "Actividad 1 - Establecer tempo y añadir sonidos"
description: "Actividad 1 - Establecer tempo y añadir sonidos"
prereq: "Python Basico: Imprimir, Comentarios, Funciones"
difficulty: "Intermedio"
weight: 5
draft: false
---

Echemos un vistazo más de cerca al código preexistente y entendamos lo que significa 
![annotated screenshot cannot be displayed](../img/annotated-screenshot-overview.png) 

Colocaremos nuestro nuevo código entre las funciones `setTempo()` y `finish()`. La función `setTempo()` le permite establecer el tempo general del proyecto.

{{% notice info %}}

**Dato rápido**: Tempo es la velocidad a la que se reproduce una pieza de música. Cambiar el tempo de un proyecto permite crear diferentes estilos de música. ¡Trata de cambiar el tempo de su función `setTempo` y ver lo que sucede! Por favor, asegúrese de que es un número entre 45-220. 
![](../img/img-tempo1.png)
{{% /notice %}}

## Actividad 1

1. Ahora que nuestro tempo está ajustado, es hora de añadir sonidos. Para ello, debemos utilizar la función `fitMedia()`.
2. Asegúrese de que el cursor del programa está entre las funciones `setTempo()` y `finish()`.
    ![](../img/annotated-screenshot-cursor.png)
3. Navegue hasta el icono en el menú del lado izquierdo donde dice **Api Browser**. Desplácese por la lista hasta la función `fitMedia()`.
4. Haga clic en pegar (copy/paste) en el icono de la esquina derecha de `fitMedia()` para insertar la función entre las funciones `setTempo` y `finish`.
5. Usted puede notar que cuando pega la función, Earsketch produce algunos textos de marcador de posición que necesitaremos reemplazar más adelante. Estos textos de marcador de posición también se conocen como `parámetros` (o `parameters`).

    ![](../img/annotated-screenshot-fitmedia.png)

Puede especificar sus propios valores para lo siguiente: 

- `fileName` - navegue hasta el panel \'Sounds\' (o sonidos) y encuentre un sonido que le guste.
- `trackNumber` - seleccione cualquier número entero positivo como el número de pista.
- `startLocation/endLocation` - estos parámetros se cuantifican en medidas. Una medida es un segmento de tiempo que se correlaciona con un número específico de latidos.

Sino estas seguro que valores colocar, intenta estos:

- `fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)`

Tu código ahora debe parecerse a esto:
    {{% notice %}}
    from earsketch import *
        init()
        setTempo(120)
        fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
        finish()
    {{% /notice %}}

{{% notice warning %}} Tenga cuidado: asegúrese de que la mayúscula de la llamada al método es correcta. La mayoría de los lenguajes de programación, incluidos Python, distinguen entre mayúsculas y minúsculas. Esto significa que agregar letras mayúsculas puede llamar a una función diferente de la esperada. Por ejemplo: `fitMedia()` no es lo mismo que `FitMedia()`.
{{% /notice %}}

6. Una vez que haya introducido sus propios parámetros, pulse ejecutar. Luego haga clic en la reproducción para escuchar su clip de audio. 

    - Si ve algún texto rojo, ¡haz encontrado algunos errores! Pide ayuda o intenta reconocer que puede estar faltando en tu código puede ser un espacio o una palabra mal escrita. La función `fitMedia()` es la columna vertebral para hacer música en Earsketch. Vamos a utilizar esta función mucho, así que, si tienes alguna pregunta con respecto a su uso, pregunta.

{{% notice info %}}

Digital Audio Workstation (DAW) o estacion digital de audio es el area donde el sonido aparece. Esta en el centro en la parde de arriba de EarSketch. El siguiente ejemplo te muestra las diferentes secciones que una cancion puede tener en el DAW.
![](../img/screenshot-daw.png)
{{% /notice %}}

