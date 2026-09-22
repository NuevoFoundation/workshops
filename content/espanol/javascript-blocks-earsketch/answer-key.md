---
title: "Bloques: EarSketch - Clave de Respuestas"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Esta es una referencia para maestros del taller de EarSketch con bloques de JavaScript. El taller utiliza bloques de arrastrar y soltar, pero cada bloque genera código JavaScript subyacente. Esta clave de respuestas muestra el código JavaScript equivalente para cada actividad, para que los maestros puedan verificar el trabajo de los estudiantes. Dado que este es un taller creativo de música, hay muchas respuestas válidas. ¡Tu código es correcto si se ejecuta sin errores y produce música!
{{% /notice %}}

## Actividad 1: Establecer el Tempo y Agregar Sonidos

Arrastra un bloque `fitMedia()` debajo del bloque `setTempo` y completa los parámetros:

**JavaScript equivalente:**
```javascript
setTempo(120);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 1, 1, 9);
```

**Parámetros del bloque:**

| Parámetro | Valor | Cómo configurarlo |
|-----------|-------|-------------------|
| Sonido | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | Haz clic en "sound" en el bloque, luego cópialo desde el panel de sonidos |
| Pista | `1` | Usa el menú desplegable |
| Inicio | `1` | Compás de inicio |
| Fin | `9` | Compás de fin |

## Actividad 2: Crear una Canción (Múltiples Sonidos)

Agrega cuatro bloques `fitMedia()`, cada uno en una pista diferente:

**JavaScript equivalente:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
```

{{% notice tip %}}
**Concepto clave para los estudiantes:** Cada bloque `fitMedia()` debe usar un número de pista diferente. Esto organiza los sonidos y permite que múltiples sonidos se reproduzcan al mismo tiempo.
{{% /notice %}}

## Actividad 3: Agregar Efectos

Arrastra un bloque `setEffect()` (la versión de 4 parámetros) debajo de los bloques `fitMedia()`:

**JavaScript equivalente:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
```

**Parámetros de `setEffect` (versión de 4 parámetros):**

| Parámetro | Valor | Significado |
|-----------|-------|------------|
| Pista | `2` | Qué pista (usa `0` para maestro/todas las pistas) |
| Tipo de efecto | `DELAY` | Selecciónalo desde el menú desplegable |
| Parámetro | `DELAY_FEEDBACK` | Selecciónalo desde el menú desplegable |
| Valor | `-6.0` | Rango: -120.0 a -1.0 |

## Actividad 4: Aumentar Volumen con Efectos

Arrastra el bloque `setEffect()` de 7 parámetros para crear un aumento gradual de volumen:

**JavaScript equivalente:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3);
```

**Parámetros de `setEffect` (versión de 7 parámetros):**

| Parámetro | Valor | Significado |
|-----------|-------|------------|
| Pista | `0` | Pista maestra (todas las pistas) |
| Tipo de efecto | `VOLUME` | Control del volumen |
| Parámetro | `GAIN` | Configuración de volumen |
| Valor inicial | `-60` | Casi silencioso (en decibelios) |
| Compás inicial | `1` | Cuando comienza el aumento gradual |
| Valor final | `0` | Volumen normal |
| Compás final | `3` | Cuando termina el aumento gradual |

{{% notice tip %}}
**Cómo funciona el aumento gradual:** El volumen empieza en -60 dB (casi silencioso) en el compás 1 y aumenta hasta 0 dB (volumen normal) en el compás 3. Cuanto más negativo es el número en decibelios, más bajo es el sonido. No excedas 0 dB.
{{% /notice %}}

## Referencia Rápida de EarSketch

| Bloque | Propósito | Parámetros Clave |
|--------|-----------|------------------|
| `setTempo(bpm)` | Establecer velocidad de la canción | 45-220 BPM |
| `fitMedia(clip, track, start, end)` | Agregar un sonido | Escoge el clip del panel de sonidos |
| `setEffect(track, type, param, value)` | Agregar un efecto | Elige tipo/parámetro del menú desplegable |
| `setEffect(track, type, param, startVal, start, endVal, end)` | Automatizar un efecto | Para aumento/disminución gradual |