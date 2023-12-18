---
title: "Actividad 3 - Organiza tus canciones usando funciones"
description: "Actividad 3 - Organiza tus canciones usando funciones"
prereq: "Python Basico: Funciones"
difficulty: "Intermedio"
weight: 7
draft: false
---

En Earsketch, las funciones se utilizan principalmente para organizar diferentes secciones de una canción. La forma musical más común es A-B-A donde cada sección tiene cuatro medidas de longitud, y las secciones A suenan diferentes de la sección B. 

Ahora que aprendimos a usar funciones, vamos a tratar de usarlas para organizar mejor nuestras canciones.

1. Defina la función con un parámetro `startMeasure` y un parámetro `endMeasure`.
2. Coloque los sonidos que desea que la función represente debajo de la definición de la función.
3. Trate de hacer varias secciones de una canción (verso, coro, introducción, etc.) y definirlos con sus funciones. Si no lo hace, y solo utiliza varias llamadas `fitMedia`, notará que su programa será largo y difícil de entender. Para ayudar a evitar tener un archivo de proyecto grande, ¡utilice funciones!

Tu código debería parecerse a este:

```python
    from earsketch import *

    init()
    setTempo(120)

    fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
    fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

    # Section A
    def sectionA(startMeasure, endMeasure):
        fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
        fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
        fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)  

    # Section B
    def sectionB(startMeasure, endMeasure):
        fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
        fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
        fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

    sectionA(1, 9)
    sectionB(9, 17)
    sectionA(17, 25)

    finish()
```