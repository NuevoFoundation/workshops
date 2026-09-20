---
title: "Precargar, Crear y Actualizar"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 4
---

## Los métodos Precargar, Crear y Actualizar

Ahora echemos un vistazo a nuestras escenas, que eventualmente contendrán el código para nuestro juego. Si examinas, verás que cada escena tiene un constructor (porque es una clase) y también tres métodos principales: `preload()`, `create()`, `update()`. Además, hay varias funciones auxiliares en la Escena 2, pero hablaremos de los tres métodos mencionados anteriormente porque son fundamentales para entender Phaser.

Con la forma en que hemos configurado las escenas, preload() y create() están en la Escena 1, y create() y update() están en la Escena 2. Estas tres funciones son las herramientas principales que cualquier juego que use Phaser empleará.

## Preload()

Comencemos describiendo preload() - esta función esencialmente carga cosas en nuestro juego. Esto puede incluir imágenes, variables y prácticamente cualquier otra cosa que desees definir para que tu juego utilice. Las cosas cargadas en el juego con preload() NO se usan ni se colocan en ninguna parte del juego hasta que las utilices más adelante. Puedes pensar en este método como un espacio de almacenamiento que se llena una vez antes de que el juego comience. La mayoría de las cosas deben colocarse en preload() antes de ser usadas en cualquier parte del juego.

## Create()

A continuación está create(). Esta función también es relativamente sencilla: se ejecuta una vez al principio del juego y permite al usuario colocar las cosas que han precargado con preload() y crear objetos dentro del juego, como animaciones, detectores de colisiones, texto, grupos y mucho más.

## Update()

Finalmente, el último método es update(). Mientras que preload() y create() se ejecutan solo una vez al inicio del juego, update() se ejecuta de manera constante.

{{% notice info %}}
Mientras juegas, es probable que hayas encontrado el término "FPS". Esto se refiere a los "fotogramas por segundo" del juego, o con qué frecuencia se actualiza un nuevo fotograma en la pantalla. Un fotograma es, esencialmente, una única llamada al método update(). Phaser normalmente funciona a 60 FPS, lo que significa que el método update() se llama 60 veces en un solo segundo.
{{% /notice %}}

El método update() se utiliza de diversas formas. Una de ellas es para el movimiento: si asignamos a un objeto moverse un poco en update(), entonces, cuando juguemos, parecerá que el objeto se mueve suavemente porque update() se llama con tanta frecuencia que no podemos ver los intervalos entre cada movimiento. También podemos usar update() para verificar constantemente si se ha realizado una entrada. Por ejemplo, si queremos que el jugador pueda disparar al presionar la barra espaciadora, podemos usar una sentencia if que verifique la barra espaciadora en la función update(), de modo que el juego esté constantemente pendiente de esta acción.