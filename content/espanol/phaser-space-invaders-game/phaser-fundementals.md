---
title: "Fundamentos de Phaser"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 3
---

## Parte 1: La Variable de Configuración

Vamos a repasar algunos de los fundamentos de Phaser, un marco para desarrollo de videojuegos que utiliza HTML y JavaScript para crear juegos para la web. ¡Esto es lo que aprenderás a usar en este taller!

Ve a `game.js`. Cada juego de Phaser comienza con una variable que almacena las configuraciones para el juego (a menudo llamada *config*, como en este caso).

```javascript
var config = {
  type: Phaser.AUTO,
  width: 512,
  height: 544,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],

	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
};
```

En esta variable, notarás que hemos definido una variedad de características de nuestro juego, como el ancho, el alto y el color de fondo. También hemos definido las escenas que utilizaremos (más información sobre escenas un poco más adelante). También puedes crear un juego sin escenas y simplemente colocar todo el código en el archivo `game.js`.

También notarás que definimos las físicas del juego en la configuración (*Config*). En el diseño de juegos, las físicas son uno de los aspectos más esenciales que definen el "sentir" de un juego. Por ejemplo, las físicas elásticas de Mario hacen que "se sienta como Mario". Para nuestro juego, verás que usamos físicas "arcade", un tipo de físicas en Phaser que es muy fácil de usar. Además, observa que en nuestra configuración de físicas, definimos la gravedad como 0, porque nuestro juego es un **Space Shooter** y no necesitamos gravedad que haga que los personajes caigan.

Al final de `game.js`, puedes ver que pasamos la variable de configuración a una variable de juego, algo que también es casi siempre necesario en un juego hecho con Phaser.

## Parte 2: Escenas

Hablemos un poco sobre las escenas. Una escena es esencialmente un estado del juego en el que el usuario está operando. Se entiende mejor con un ejemplo:

Tomemos como ejemplo la famosa franquicia de juegos, Pokémon. Cuando juegas, a menudo estás explorando el mundo. Cuando encuentras a un entrenador o un Pokémon salvaje en la hierba alta, entras a una escena diferente para que puedas pelear. Después de que terminas la pelea, puedes abrir el mapa para ver a dónde necesitas ir; esto también es abrir una escena diferente. Estas tres escenas funcionan de manera completamente diferente y tienen su propia mecánica adjunta. Cuando sales del mapa, el juego cambia a la escena del mundo donde exploras como jugador. Y cuando entras en una batalla, cambias a la escena de batalla. Puedes ver cómo crear estos tres estados de juego sería completamente diferente: la batalla requiere un menú, el mundo requiere un espacio en 2D y un jugador, y el mapa es esencialmente un gráfico interactivo. Separamos esto en escenas porque todas deben crearse de manera completamente diferente.

Puedes pensar que el usuario se mueve entre escenas mientras juega el juego. Solo usa una escena a la vez, y cada una es casi como su propio mini-juego (aunque generalmente habrá una principal que no será tan "mini").

{{% notice info %}}

Técnicamente, podríamos usar una única escena para los tres estados del juego si quisiéramos (cómo dividir un juego en escenas depende del diseñador del juego). Es físicamente posible hacerlo. Sin embargo, crear escenas separadas facilitará significativamente la codificación (en este caso, ni siquiera me puedo imaginar cómo podrías meter todo en una sola sin simplemente superponer las visuales unas sobre otras).
{{% /notice %}}

Aquí hay otro ejemplo de una forma muy común de usar escenas: una pantalla de título.

![Pantalla de título del juego Outliers](../media/title-game.png)

La primera escena muestra simplemente una pantalla de título que a menudo contiene cosas como configuraciones, cargar un archivo guardado y más. Una vez que el jugador hace clic en jugar, se cambia a una escena diferente, donde jugará dentro del juego.

Esto es exactamente lo que haremos. La Escena 1 contendrá una pantalla de título, y la Escena 2 contendrá nuestra jugabilidad real. Por lo tanto, la Escena 2 tendrá la mayor parte del código y será donde harás la mayor parte de tu trabajo.

# Parte 3: Lienzo Infinito

Cuando inicias el juego en Replit, puedes ver un lienzo en blanco en tu pantalla donde eventualmente colocarás cosas. Sin embargo, solo estás viendo una parte del lienzo total: en realidad, el lienzo es infinito en todas las direcciones. El lienzo se comporta de la misma manera en todas sus secciones, lo que significa que los objetos pueden moverse y colocarse en partes del lienzo que el usuario no puede ver. Esto se volverá importante porque, en nuestro juego, no queremos que las cosas realmente salgan mucho de la pantalla, por lo que necesitamos limitar nuestros objetos dentro de la pantalla o eliminarlos si se salen.