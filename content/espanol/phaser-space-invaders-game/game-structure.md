---
title: "La Estructura de Archivos del Juego"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 2
---

Como puedes ver, ya hemos creado muchos archivos para ti. La estructura del juego ya está trazada, y tú te encargarás de llenar cada archivo con contenido. Entonces, para comenzar, primero debemos tener al menos un entendimiento básico de lo que hace cada archivo y cómo se relacionan entre sí.

Primero, `phaser.min.js` es simplemente un archivo JavaScript que contiene el código que permite al juego ejecutar Phaser, el marco que estamos utilizando para crear el juego. No tienes que preocuparte mucho por este archivo, y no lo editarás.

A continuación, mira `index.html`. Este es un archivo HTML que constituye la columna vertebral de todo nuestro proyecto al importar todos los archivos JavaScript que se utilizan.

Después está `Game.js`. Este es el archivo que esencialmente representa nuestro juego. Dentro de él, el código del juego se ramifica a través de `Scene1.js` y `Scene2.js`. Estos archivos de escenas son donde escribirás la mayor parte de tu código, y entraremos en más detalles sobre las escenas de Phaser un poco más adelante.

`PlayerBullet.js`, `EnemyBullet.js` y `Explosion.js` son archivos que crean objetos específicos para nuestro juego.

Finalmente, la carpeta `assets` contiene todas las imágenes que nuestro juego utiliza.