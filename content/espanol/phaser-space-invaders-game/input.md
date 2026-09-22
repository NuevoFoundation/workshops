---
title: "Habilitando Entradas de Usuario"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 9
---

## Entradas de Usuario

Las entradas son esenciales porque, sin que el usuario interactúe con controles, nuestro juego realmente no sería un juego. Aunque Phaser admite una variedad de opciones de entrada diferentes, vamos a revisar tres que utilizarás en el juego Space Invaders.

## Teclas de Flecha

Comencemos con uno de los controles más importantes: las teclas de flecha. Primero, crearemos una variable que pueda detectar cuando el jugador presiona una tecla de flecha.

```javascript
this.cursors = this.input.keyboard.createCursorKeys();
```

Para usar esta variable, debes elegir entre 4 declaraciones booleanas.

```javascript
this.cursors.up.isDown
this.cursors.down.isDown
this.cursors.left.isDown
this.cursors.right.isDown
```

Cada una de estas declaraciones booleanas será igual a `true` si la tecla asociada está presionada y `false` si no lo está.

## Barra Espaciadora

Para agregar el uso de la barra espaciadora como entrada, el proceso será muy similar al de las teclas de flecha. Primero crearemos una variable que detecta cuando se presiona la barra espaciadora.

```javascript
this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
```

Luego, podemos usar una declaración booleana para verificar si la entrada ha sido presionada.

```javascript
Phaser.Input.Keyboard.JustDown(this.spacebar)
```

## Clic Único

También puedes usar el mismo proceso que usamos para agregar entradas de teclas de flecha y barra espaciadora para clics, pero aquí revisaremos un método ligeramente diferente porque es algo que probablemente usarás en el juego Space Invaders.

```javascript
this.input.once("pointerdown", this.restart, this);
```

Esta línea llama al método `this.restart` cuando el jugador hace clic. Sin embargo, esta es una entrada de un solo uso, lo que significa que después de que el jugador haga clic una vez, no se podrá usar nuevamente sin volver a llamarla. Normalmente, utilizarás esto en algún lugar dentro de update() o en las funciones auxiliares en lugar de en create().