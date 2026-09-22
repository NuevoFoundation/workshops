---
title: "Haz que el pájaro salte y añade gravedad"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

### ¿Qué deberíamos hacer con el pájaro?

Hagámoslo saltar:

Añade el siguiente comando en el archivo [Archivo: create-game.js]  
     spaceKey.onDown.add(jump, this);

### Trabajando juntos

En la ventana de Replit a continuación, hemos iniciado el código con la línea `spaceKey.onDown.add(jump, this);`.

![texto alternativo](../img/jump.png "imagen para añadir el salto")

En tu consola deberías ver un pájaro Jsappy saltando después de presionar **run**:

![texto alternativo](../img/jump_output.png "Imagen del pájaro saltando")

## Agregar gravedad
### Trabajando juntos

En la ventana de Replit a continuación, hemos iniciado el código con la línea `bird.body.gravity.y = 900;`.

![texto alternativo](../img/gravity.png "imagen para añadir gravedad al pájaro")

En tu consola deberías ver un pájaro JSappy saltando con gravedad después de presionar **run**:

![texto alternativo](../img/jump_output.png "pájaro saltando con gravedad")