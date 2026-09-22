---
title: "Micro:Bit - Respuestas clave"
date: 2026-04-28T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Esta es una guía de referencia para profesores del taller de Micro:Bit. El taller es principalmente un tutorial guiado con ejemplos de código en línea, en lugar de ejercicios de completar espacios en blanco. Esta clave de respuestas consolida todos los conceptos clave, muestras de código, resultados del tutorial y proyectos de muestra para la sección abierta "Tu Turno".
{{% /notice %}}

## Referencia básica de JavaScript

### Variables y tipos de datos

El taller introduce cinco tipos de datos. Aquí hay un resumen con ejemplos:

| Tipo de Datos | Descripción | Ejemplo |
|---------------|-------------|---------|
| Entero | Números enteros (sin decimales) | `var a = 5;` |
| Doble | Números con decimales | `var x = 0.5;` |
| Cadena (String) | Texto (entre comillas dobles) | `var company = "My company";` |
| Carácter | Una sola letra (entre comillas simples) | `var letter = 'A';` |
| Booleano | Valores de verdadero o falso | `var codingIsCool = true;` |

**Reglas clave para nombres de variables:**
- Pueden contener letras, números, guiones bajos y signos de dólar.
- No pueden tener espacios.
- Deben comenzar con una letra.

### Operaciones matemáticas

| Operación | Operador | Ejemplo | Resultado |
|-----------|----------|---------|----------|
| Suma | `+` | `var c = 13 + 10;` | `c = 23` |
| Resta | `-` | `var c = 15 - 10;` | `c = 5` |
| Multiplicación | `*` | `var c = 2 * 5;` | `c = 10` |
| División | `/` | `var c = 20 / 2;` | `c = 10` |
| Módulo | `%` | `var d = 10 % 2;` | `d = 0` |

**Nota:** La fuente del taller muestra `c = a + b; // c = 25` pero 13 + 10 = 23. Este es un error tipográfico en el taller original.

**Operadores abreviados:**
- `c += a;` suma `a` a `c`
- `c -= a;` resta `a` de `c`
- `c *= a;` multiplica `c` por `a`
- `c /= a;` divide `c` por `a`
- `c++` aumenta en 1, `c--` disminuye en 1

**Nota:** Los comentarios del ejemplo de división del taller muestran `c /= a; // c = 5`, pero el resultado real es `0.5` (10 dividido entre 20). Los profesores deben estar al tanto de esta discrepancia.

### Sentencias de impresión

```javascript
// Mostrar en la consola del navegador (no visible en una página web)
console.log("Hello!");

// Mostrar como ventana emergente
alert("Hello!");

// Ventana emergente con cuadro de entrada - almacena la respuesta del usuario
var userResponse = prompt("What is your name?");
```

### Condicionales

```javascript
var age = 10;
if (age < 18) {
  print("You're not an adult yet! :( ");
}
```

**Nota:** El taller usa `print()` en este ejemplo, lo cual no es estándar en JavaScript para navegadores. En MakeCode, el equivalente sería `basic.showString()`. En un navegador, usa `console.log()` o `alert()`. Además, la fuente del taller tiene un error tipográfico en los comentarios: dice "Si la edad es menos de 10" pero la condición verifica `age < 18`.

### Bucles

```javascript
// Bucle while - cuenta regresivamente desde 10
var count = 10;
while (count > 0) {
  alert(count);
  count--;
}

// Bucle for - cuenta regresivamente desde 10
for (var i = 10; i > 0; i--) {
  alert(i);
}
```

**Importante:** Un bucle infinito `while (true)` congelará el navegador. En el micro:bit, `basic.forever()` es el equivalente seguro para la ejecución continua.

**Adicional:** La sentencia `break;` puede detener un bucle inmediatamente y mover la ejecución a la línea siguiente.

## Configuración del Micro:bit

### Descripción del hardware

El micro:bit tiene:
- 25 LEDs programables individualmente (matriz de 5×5).
- 2 botones programables (A y B).
- Pines de conexión física.
- Sensores de movimiento (acelerómetro y brújula).
- Comunicación inalámbrica (Bluetooth y radio).
- Interfaz USB.

### Conexión al computador

1. Conecta el micro:bit mediante un cable USB.
2. Aparece como una unidad llamada `MICROBIT` en el Explorador de Archivos.
3. Para cargar programas: copia los archivos `.hex` a la unidad MICROBIT (o haz clic derecho → Enviar a → MICROBIT).
4. El LED amarillo en la parte trasera parpadea mientras descarga el código.

### Editor MakeCode

El entorno de programación está en [makecode.microbit.org](https://makecode.microbit.org/). Los estudiantes pueden alternar entre las vistas de Bloques y JavaScript.

## Resultados del tutorial

### Tutorial de Corazón Intermitente

Los estudiantes siguen el tutorial integrado de MakeCode. El resultado esperado:

```javascript
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
```

**Qué hace:** Alterna entre un ícono de corazón grande y uno pequeño en la pantalla LED, creando una animación que parece un corazón latiendo.

### Tutorial de Micro Chat

Los estudiantes siguen el tutorial integrado de MakeCode. El resultado esperado:

```javascript
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello")
    basic.showString("Hello")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Goodbye")
    basic.showString("Goodbye")
})
radio.setGroup(1)
```

**Qué hace:** Envía y recibe mensajes de texto entre dos micro:bits utilizando comunicación por radio. El botón A envía "Hello" y el botón B envía "Goodbye". Ambos micro:bits deben estar configurados en el mismo grupo de radio.

**Nota:** Este tutorial requiere dos micro:bits para probar la comunicación por radio