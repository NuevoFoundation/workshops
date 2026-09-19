---
title: "JSappyBird - Clave de Respuestas"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Esta clave de respuestas cubre todo el código que los estudiantes deben agregar para construir el juego Flappy Bird. Cada paso añade una línea específica de JavaScript a un archivo específico en el proyecto de Replit. El taller es guiado (los estudiantes reciben instrucciones sobre lo que deben escribir), pero esto consolida todo en una referencia para los profesores.
{{% /notice %}}

## Adiciones de Código Paso a Paso

### 1. Cargar la imagen del pájaro

**Archivo:** `load-sprites.js`

```javascript
game.load.image('bird', 'assets/bird.png');
```

### 2. Cambiar el texto de la pantalla de inicio

**Archivo:** `start-screen.js`

```javascript
var text = game.add.text(0, 0, "Presiona Espacio para Comenzar", textOptions);
```

### 3. Hacer que el pájaro salte al presionar la barra espaciadora

**Archivo:** `create-game.js`

```javascript
spaceKey.onDown.add(jump, this);
```

### 4. Añadir gravedad

**Archivo:** `create-game.js`

```javascript
bird.body.gravity.y = 900;
```

### 5. Añadir fuerza de salto (velocidad)

**Archivo:** `create-game.js`

```javascript
bird.body.velocity.y = -350;
```

{{% notice tip %}}
**Pregunta común de los estudiantes:** "¿Cómo hago que el pájaro salte más alto o más bajo?"

Cambia el número en `bird.body.velocity.y`. Más negativo = salto más alto. Prueba `-200` para un pequeño salto o `-500` para un gran salto.
{{% /notice %}}

### 6. Añadir rotación del pájaro al caer

**Archivo:** `update-game.js`

```javascript
if (bird.angle < 50) {
    bird.angle += 1;
}
```

### 7. Añadir sonido de salto

**Archivo:** `create-game.js`

```javascript
jumpSound.play();
```

## Respuestas de Actividades Extra

### Hacer que el pájaro salte hacia adelante

**Archivo:** `create-game.js`

```javascript
bird.body.velocity.x = 100;
```

### Preguntas de exploración adicionales

| Pregunta | ¿Qué sucede? |
|----------|--------------|
| ¿Hacer la gravedad más fuerte? | `bird.body.gravity.y = 1500;` — el pájaro cae más rápido, más difícil de jugar |
| ¿Hacer la gravedad negativa? | `bird.body.gravity.y = -900;` — el pájaro flota hacia arriba en lugar de caer |
| ¿Hacer que el pájaro gire más rápido? | Cambia `bird.angle += 1` a `bird.angle += 5` |
| ¿Eliminar el `if` alrededor de la rotación? | El pájaro gira continuamente más allá de los 50 grados |

## Código de Actividad (Versión Avanzada)

El taller también incluye tres actividades de programación que enseñan variables, condicionales, funciones y bucles:

### Actividad 1: Mantener al pájaro en la pantalla (condicional)

```javascript
if (bird.y > 0 && bird.y < 490) {
    // el pájaro está en la pantalla - permitir movimiento
}
```

### Actividad 2: Función de salto

```javascript
function jump() {
    bird.body.velocity.y = -300;
}
```

### Actividad 3: Añadir obstáculos con un hueco

```javascript
var hole = Math.floor(Math.random() * 6) + 1;

for (var i = 0; i < 8; i++) {
    if (i != hole) {
        addOnePipe(i);
    }
}
```

**Cómo funciona:** El bucle `for` crea 8 obstáculos de tubería. La variable `hole` selecciona una posición aleatoria (1-6) para omitir, creando un hueco a través del cual el pájaro puede volar.

## Resumen de la Lógica Completa del Juego

| Característica | Código | Archivo |
|----------------|--------|---------|
| Cargar sprite del pájaro | `game.load.image('bird', 'assets/bird.png')` | load-sprites.js |
| Pantalla de inicio | `game.add.text(0, 0, "Presiona Espacio para Comenzar", textOptions)` | start-screen.js |
| Salto con barra espaciadora | `spaceKey.onDown.add(jump, this)` | create-game.js |
| Gravedad | `bird.body.gravity.y = 900` | create-game.js |
| Velocidad de salto | `bird.body.velocity.y = -350` | create-game.js |
| Rotación al caer | `if (bird.angle < 50) { bird.angle += 1; }` | update-game.js |
| Sonido de salto | `jumpSound.play()` | create-game.js |