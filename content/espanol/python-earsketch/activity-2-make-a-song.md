---
title: "Actividad 2 – Haz tu propia canción!"
description: "Actividad 2 – Haz tu propia canción"
prereq: "Python Basico: Imprimir, Comentarios, Funciones"
difficulty: "Intermedio"
weight: 6
draft: false
---

Ahora que has aprendido a añadir sonidos a Earsketch, vamos a tratar de hacer una canción. Ya debería tener un clip de audio en Earsketch, pero las canciones se componen de varios instrumentos, por lo que necesitamos añadir más clips de audio.

1. Añade otra llamada a `fitMedia()`.
2. Busca un clip de audio que quieras añadir a tu canción actual e insértalo bajo el parámetro de `fileName`.
3. El parámetro `trackNumber` debe ser un número único. Esto nos permitirá colocar nuestros sonidos en diferentes pistas/canciones. Tener diferentes sonidos en diferentes pistas/canciones nos permite mantener la organización de nuestros sonidos y reproducir diferentes sonidos al mismo tiempo. Ejemplo: Si la primera llamada `fitMedia()` está en la pista 1, la segunda llamada `fitMedia()` debe estar en la pista 2.
4. Completa el resto de los parámetros.
5. Repite estos pasos hasta que tenga cuatro sonidos de audio diferentes en su canción

Tu código debe parecerse a este::
    {{% notice info %}}

    from earsketch import *\
    init()
    setTempo(120)\
    fitMedia(RD_TRAP_BELLLEAD_1, 1, 5, 9)
    fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17) 
    fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17) 
    fitMedia(YG_TRAP_BASS_9, 4, 1, 9)\
    finish()
    {{% /notice %}}

![Robot tocando musica](https://media.giphy.com/media/9RJRzvIuKGrL3tAchc/giphy.gif)