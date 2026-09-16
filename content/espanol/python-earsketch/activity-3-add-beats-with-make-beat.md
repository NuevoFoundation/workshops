---
title: "Actividad 3 - Añade ritmos a tu canción con makeBeat"
description: "Actividad 3 - Añade ritmos a tu canción con makeBeat"
prereq: "Python Basico: Funciones"
difficulties: ["intermediate"]
weight: 7
draft: false
---

¡Vamos a añadir algunos ritmos interesantes a la canción! Para ello usaremos la función `makeBeat`.

Antes de usar la función `makeBeat`, vamos a entender cómo funcionan las cadenas de texto (`strings`).

## Cadenas de texto

Todo lo que veas entre **comillas** se llama **cadena de texto** (en inglés, `string`). Una cadena es simplemente una secuencia de caracteres (ya sean letras, números o símbolos). Por ejemplo, `"hola mundo"` es una cadena.

Para `makeBeat`, vamos a combinar los siguientes tres tipos de símbolos para crear un ritmo interesante para nuestra canción:

- `"0"` reproduce el sonido durante una nota.
- `"-"` hace una pausa (es decir, crea silencio) durante una nota.
- `"+"` alarga (es decir, mantiene) el sonido o el silencio durante una nota adicional.

La función `makeBeat` asume que queremos crear ritmos que cubran 16 notas por medida. Para facilitar las cosas, crearemos ritmos con cadenas que tengan exactamente 16 caracteres de longitud. Aunque también puedes usar cadenas de cualquier longitud, funcionarán mejor si su longitud es un múltiplo de 16 (es decir, 16, 32, 48, etc.).

Aquí tienes algunos ejemplos de ritmos válidos:

- `"0+------0+------"`: reproduce 2 sonidos por medida, y cada sonido dura 2 notas, seguidas de 6 notas de silencio.

<figure>
    <audio
        controls
        src="../audio/makebeat1.mp3">
            Audio de prueba para comprobar si tu navegador admite el elemento de audio. Si no puedes reproducir el audio, es probable que tu navegador no admita este
            elemento <code>audio</code>.
    </audio>
</figure>

- `"0-0-0-0-0-0-0-0-"`: reproduce 8 sonidos por medida, y cada sonido dura 1 nota.

<figure>
    <audio
        controls
        src="../audio/makebeat2.mp3">
            Audio de prueba para comprobar si tu navegador admite el elemento de audio. Si no puedes reproducir el audio, es probable que tu navegador no admita este
            elemento <code>audio</code>.
    </audio>
</figure>

- `"0++0++0++0++0-0-"`: reproduce 6 sonidos en un patrón sincopado.

<figure>
    <audio
        controls
        src="../audio/makebeat3.mp3">
            Audio de prueba para comprobar si tu navegador admite el elemento de audio. Si no puedes reproducir el audio, es probable que tu navegador no admita este
            elemento <code>audio</code>.
    </audio>
</figure>

¡Ahora es el momento de añadir ritmos a tu canción!

## Actividad 3

1. Asegúrate de que el cursor de tu programa esté debajo de las funciones `fitMedia()`.

2. Desplázate por la lista **API** en el lado izquierdo del editor de código y busca la primera función `makeBeat()`.

<img src="../img/screenshot-find-makebeat.png" height="400"/>

3. Haz clic en el icono **Pegar** en la esquina derecha de `makeBeat()` para insertar la función debajo de la función `fitMedia`.

<img src="../img/icon-paste.png"/>

4. Una vez más, cuando pegues la función, Earsketch generará algunos `parámetros` que tendremos que reemplazar más adelante.

<img src="../img/screenshot-makebeat.png" />

Puedes especificar tus propios valores para lo siguiente:

- `sound` - Ve al panel **Sounds**. Haz clic en **GENRES** y luego en el filtro **MAKEBEAT**. Busca en esta lista un sonido que te guste.

<img src="../img/screenshot-makebeat-sounds.png" height="400"/>

- `track` - Elige cualquier número entero positivo como número de pista. Asegúrate de que sea un número de pista que aún no hayas usado.
- `start` - Indica en qué medida debe comenzar el ritmo.
- `beat` - Indica el ritmo que deseas añadir como una cadena de texto (`string`), que idealmente debería tener 16 caracteres de longitud.

Si no estás seguro de qué valores elegir, prueba con esto:

- `makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")`

Después, añade algunas funciones `makeBeat` más a tu canción. Intenta añadir al menos dos funciones `makeBeat`.

Tu código debería parecerse a este:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)  

fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000")
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-")
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000")
```
