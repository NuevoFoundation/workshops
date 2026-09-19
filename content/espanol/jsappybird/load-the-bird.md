```markdown
---
title: "Cargar la imagen del pájaro y cambiar el texto de pantalla"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

Primero, carguemos a Flappy y coloquémoslo en la pantalla.

Agrega el siguiente comando al archivo [Archivo: load-sprites.js]
      ```
      game.load.image('bird','assets/bird.png');
       ```
       
### Trabajando juntos

En la ventana de Replit a continuación, comenzamos el código con la línea `game.load.image('bird', 'assets/bird.png');`.

![alt text](../img/loadbird.png "imagen para agregar el pájaro en el archivo")

En tu consola deberías ver un Jsappy bird después de presionar **run** y luego la barra espaciadora:

![alt text](../img/loadbird_output.png "imagen del pájaro en la salida")

## Cambiar el texto de la pantalla

Cambiemos el texto de la pantalla de inicio:

Agrega el siguiente comando al archivo [Archivo: start-screen.js]
     var text = game.add.text(0, 0, "Press Space to Start", textOptions);
     
### Trabajando juntos

En la ventana de Replit a continuación, comenzamos el código con la línea `var text = game.add.text(0, 0, "Press Space to Start", textOptions);`.

![alt text](../img/startscreen.png "imagen para agregar el pájaro en el archivo")

En tu consola deberías ver `Presiona Espacio para Comenzar` después de presionar **run**:

![alt text](../img/startscreen_output.png "imagen del pájaro en la salida")
```