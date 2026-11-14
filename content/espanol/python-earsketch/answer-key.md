---
title: "Python: EarSketch - Clave de respuestas"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Estas son soluciones de ejemplo para el taller de EarSketch. Como EarSketch es un taller de música creativa, hay muchas respuestas válidas. Los clips de sonido, los tempos y los números de pista que elijas dependen de ti. ¡Tu código es correcto si se ejecuta sin errores y produce música! Los ejemplos a continuación coinciden con el código de ejemplo que se muestra en cada actividad.
{{% /notice %}}

## Actividad 1: Establece el tempo y añade sonidos

Establece un tempo y añade un sonido usando `fitMedia()`:

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

**Qué significa cada parámetro:**

| Parámetro | Valor | Significado |
|-----------|-------|---------|
| Clip de sonido | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | El clip de audio que se reproducirá (explora el panel **Sounds** para encontrar clips) |
| Pista | `3` | En qué pista se coloca el sonido (cualquier número entero positivo) |
| Inicio | `1` | Medida en la que empieza el sonido |
| Fin | `17` | Medida en la que termina el sonido |

{{% notice tip %}}
**Pregunta frecuente:** «¿Qué tempo debo usar?»

Cualquier número entre 45 y 220 funciona. Aquí tienes algunas pautas:
- **80-90**: Hip-hop, Trap
- **100-130**: Pop, House
- **140-180**: Drum & Bass, Dubstep
{{% /notice %}}

## Actividad 2: Crea una canción (varios sonidos)

Añade cuatro clips de audio diferentes en pistas diferentes:

```python
from earsketch import *

setTempo(120)
fitMedia(RD_TRAP_BELLLEAD_1, 1, 5, 9)
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
fitMedia(YG_TRAP_BASS_9, 4, 1, 9)
```

{{% notice tip %}}
**Concepto clave:** Cada llamada a `fitMedia()` debe usar un número de pista diferente. Esto mantiene los sonidos organizados y permite que varios sonidos se reproduzcan al mismo tiempo. La pista 1 reproduce un sonido, la pista 2 reproduce otro, y así sucesivamente.
{{% /notice %}}

## Actividad 3: Organiza usando funciones

Usa funciones para crear secciones de una canción con un patrón A-B-A:

```python
from earsketch import *

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
```

**Cómo funciona la estructura A-B-A:**

| Medidas | Sección | Función llamada |
|----------|---------|----------------|
| 1-9 | A | `sectionA(1, 9)` |
| 9-17 | B | `sectionB(9, 17)` |
| 17-25 | A (repetición) | `sectionA(17, 25)` |

{{% notice tip %}}
**Pregunta frecuente:** «¿Por qué usar funciones en lugar de simplemente más llamadas a fitMedia?»

Las funciones te permiten reutilizar un grupo de sonidos sin copiar todas las llamadas a `fitMedia`. Para reproducir la sección A dos veces, solo tienes que llamar a `sectionA()` dos veces con diferentes medidas de inicio y fin, en lugar de escribir 6 llamadas a `fitMedia`.
{{% /notice %}}

## Actividad 4: Añade efectos

Usa `setEffect()` para añadir un efecto de retardo (`DELAY`):

```python
from earsketch import *

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
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
setEffect(2, DELAY, DELAY_TIME, 1200.0)
```

**Parámetros de setEffect (versión de 4 parámetros):**

| Parámetro | Valor | Significado |
|-----------|-------|---------|
| Pista | `2` | A qué pista se le aplica el efecto (usa `0` para la pista maestra, es decir, todas las pistas) |
| Tipo | `DELAY` | El tipo de efecto |
| Parámetro | `DELAY_FEEDBACK` | Qué ajuste se modifica |
| Valor | `-6.0` | El valor de ese ajuste (rango: de -120.0 a -1.0 para `DELAY_FEEDBACK`) |

## Actividad 5: Aparición gradual del sonido con efectos

Usa la versión de 7 parámetros de `setEffect()` para crear una aparición gradual del volumen:

```python
from earsketch import *

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
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
setEffect(2, DELAY, DELAY_TIME, 1200.0)
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3)
```

**Parámetros de setEffect (versión de 7 parámetros para automatización):**

| Parámetro | Valor | Significado |
|-----------|-------|---------|
| Pista | `0` | Pista maestra (se aplica a todos los sonidos) |
| Tipo | `VOLUME` | Efecto de volumen |
| Parámetro | `GAIN` | Controla la intensidad del sonido |
| Valor inicial | `-60` | Volumen inicial en decibelios (muy bajo) |
| Medida inicial | `1` | Cuándo empieza la transición |
| Valor final | `0` | Volumen final en decibelios (volumen normal) |
| Medida final | `3` | Cuándo termina la transición |

{{% notice tip %}}
**Cómo funciona la aparición gradual:** El volumen empieza en -60 dB (casi en silencio) en la medida 1 y aumenta poco a poco hasta 0 dB (volumen normal) en la medida 3. Esto crea un efecto de aparición suave durante las 2 primeras medidas de la canción.

**El volumen en decibelios:**
- `0 dB` = volumen normal (no lo superes)
- `-60 dB` = casi en silencio
- Cuanto más negativo sea el número, más bajo será el sonido
{{% /notice %}}

## Referencia rápida de EarSketch

| Función | Propósito | Ejemplo |
|----------|---------|---------|
| `setTempo(bpm)` | Establece la velocidad de la canción | `setTempo(120)` |
| `fitMedia(clip, track, start, end)` | Añade un clip de sonido | `fitMedia(YG_TRAP_BASS_9, 1, 1, 9)` |
| `setEffect(track, type, param, value)` | Añade un efecto | `setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)` |
| `setEffect(track, type, param, startVal, startMeasure, endVal, endMeasure)` | Automatiza un efecto a lo largo del tiempo | `setEffect(0, VOLUME, GAIN, -60, 1, 0, 3)` |

**Prefijos comunes de los clips de sonido de EarSketch:**
- `YG_` = colección de Young Guru
- `RD_` = colección de Richard Devine
- `HOUSE_` = colección de música House
- Explora todos los clips en el panel **Sounds** de EarSketch
