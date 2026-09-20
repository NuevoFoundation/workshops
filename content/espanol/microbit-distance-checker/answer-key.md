---
title: "micro:bit comprobador de distancia - Clave de respuestas"
date: 2024-07-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este es un documento de referencia para profesores del taller de Distanciamiento Social Inalámbrico con micro:bit. El taller guía a los estudiantes paso a paso para construir un proyecto completo usando bloques de MakeCode. Esta clave de respuestas proporciona el código final completo (en descripción de Bloques y JavaScript), explica los conceptos clave e incluye orientación para la resolución de problemas.
{{% /notice %}}

## Solución completa

### Código final (equivalente en JavaScript)

Este es el programa completo que los estudiantes desarrollan a lo largo de todas las actividades del taller:

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (strength > -67) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let strength = 0
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
```

### Código final (descripción de Bloques)

Para los profesores que prefieren seguir la representación en bloques:

| Ubicación del bloque | Bloque | Configuración |
|-----------------------|--------|---------------|
| **al iniciar** | `radio set group` | Grupo: `1` |
| **por siempre** | `radio send number` | Número: `0` |
| **al recibir un número por radio (receivedNumber)** | `establecer fuerza en` | `potencia de la señal recibida del paquete` |
| (dentro del bloque recibido) | `si fuerza > -67 entonces` | Mostrar icono: cara triste |
| (caso contrario) | `sino` | Mostrar icono: cara feliz |

**Qué hace:** Cada micro:bit emite de manera continua una señal de radio. Cuando recibe una señal de otro micro:bit, verifica la intensidad de la señal. Si la señal es más fuerte que -67 dBm (es decir, los micro:bits están a menos de 6 pies / 2 metros), muestra una cara triste. Si la señal es más débil (es decir, están a una distancia segura), muestra una cara feliz.

## Desglose paso a paso

### Paso 1: ¿Qué es un micro:bit? (página 1)

Esta es una página introductoria. No se escribe código. Puntos clave:

- Características del micro:bit: 25 LED, 2 botones, pines IO, brújula, acelerómetro, Bluetooth.
- Los estudiantes desempacan su hardware: micro:bit, 2 baterías, cable USB, portapilas.
- **Simulador:** Los estudiantes sin hardware pueden usar el simulador de MakeCode con dos micro:bits virtuales uno al lado del otro. La antena de radio (onda cuadrada amarilla) se puede hacer clic y arrastrar para simular cambios en la intensidad de la señal.
- Umbral de intensidad de señal para el simulador: `fuerza > -67` activa la cara triste.

### Paso 2: Transmitiendo una señal (página 2)

**Código añadido en este paso:**

```javascript
// al iniciar
radio.setGroup(1)

// por siempre
basic.forever(function () {
    radio.sendNumber(0)
})
```

**Conceptos clave:**
- `radio set group 1` va en el bloque "al iniciar" para que se ejecute una vez cuando el micro:bit se enciende.
- Todos los micro:bits deben usar el mismo número de grupo para comunicarse.
- `radio send number 0` va en el bloque "por siempre" para emitir continuamente.
- El número enviado (0) no es relevante para este proyecto; solo nos importa la intensidad de la señal.

### Paso 3: Recibiendo un mensaje (página 3)

**Código añadido en este paso:**

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let strength = 0
```

**Conceptos clave:**
- El bloque `al recibir un número por radio` se activa cada vez que el micro:bit recibe un número de otro micro:bit.
- Se crea una **variable** llamada `fuerza` para almacenar la intensidad de la señal recibida.
- `potencia de la señal recibida del paquete` proporciona el valor RSSI (Indicador de Intensidad de Señal Recibida).
- Las variables son contenedores nombrados que almacenan información y pueden ser utilizadas y actualizadas posteriormente.

### Paso 4: Interpretando la intensidad de la señal (página 4)

**Código añadido en este paso:**

```javascript
if (strength > -67) {
    // demasiado cerca - menos de 6 pies de distancia
} else {
    // distancia segura - más de 6 pies de distancia
}
```

**Conceptos clave:**
- -67 dBm es la intensidad de señal premedida a 6 pies (2 metros) para el Bluetooth del micro:bit.
- Intensidad de señal más cercana a 0 = señal más fuerte = distancia más cercana.
- Intensidad de señal más lejana de 0 (más negativa) = señal más débil = mayor distancia.
- `fuerza > -67` significa que los dispositivos están **más cerca** de 6 pies (señal más fuerte que el umbral).

**Pregunta común de los estudiantes:** "¿Por qué -67?" Porque -67 dBm fue medido como el nivel de potencia cuando dos micro:bits están separados a 6 pies de distancia. Los radios Bluetooth distintos pueden tener valores diferentes a la misma distancia.

### Paso 5: Iluminándolo (página 5)

**Código añadido en este paso:**

```javascript
if (strength > -67) {
    basic.showIcon(IconNames.Sad)    // demasiado cerca
} else {
    basic.showIcon(IconNames.Happy)  // distancia segura
}
```

**Conceptos clave:**
- Cara triste = demasiado cerca (menos de 6 pies).
- Cara feliz = distancia segura (6 pies o más).
- Los iconos se encuentran en la sección Básica de MakeCode.

Para una referencia visual del código final en bloques, consulta la imagen al final de la página [Ilumínalo](../light-it-up).

### Paso 6: Descargando el código (página 6)

No se escribe código nuevo. Esta página cubre:

1. **Emparejamiento:** Conecta con USB, haz clic en `...` junto a Descargar, selecciona "Emparejar dispositivo", haz clic en "BBC micro:bit CMSIS-DAP" y luego Conectar.
2. **Descarga:** Haz clic en `...` de nuevo, selecciona "Descargar en micro:bit",