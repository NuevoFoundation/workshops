```markdown
---
title: "Actividad 6 - Reiniciando el Jugador Después de Ser Destruido"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 13
---

Hemos creado enemigos bastante sólidos, pero ahora hay algo mal: ¡en realidad no te hacen nada! Específicamente, no pueden herirte de ninguna manera. Vamos a cambiar eso. En el juego final, habrá dos formas en que puedes recibir daño: siendo disparado por un láser enemigo o tocando directamente al enemigo. Comencemos con lo segundo, ya que es un poco más fácil.

La colisión es relativamente sencilla en Phaser.

Primero comenzaremos importando una hoja de sprites de explosión e implementando su animación en la Escena 1:

<!--- ![load_sprite](../media/7/load_sprite.png)--->
<img src="../media/7/load_sprite.png" alt="cargar_sprite" style="width:950px;"/>

<!--- ![create_sprite](../media/7/create_sprite.png)--->
<img src="../media/7/create_sprite.png" alt="crear_sprite" style="width:950px;"/>

¡Esto será una explosión que se reproducirá cuando el jugador sea destruido!

Phaser tiene formas muy convenientes de manejar colisiones entre objetos. Podemos simplemente añadir la siguiente línea al método create() en la Escena 2:

```javascript
this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
```

<!--- ![overlap with player](../media/7/overlap_hurtPlayer.png)--->
<img src="../media/7/overlap_hurtPlayer.png" alt="superposición con jugador" style="width:950px;"/>

Lo que hace esta línea es llamar al método hurtPlayer() cuando `this.player` y un miembro del grupo `this.enemies` se superponen. Llamará a hurtPlayer con `this.player` y `this.enemies` como argumentos.

Esta línea hará que el método hurtPlayer() se ejecute cuando el jugador y un objeto del grupo enemigo se toquen, pasando las variables jugador y enemigo como argumentos al método. Ahora vamos a crear el método hurtPlayer():

<!--- ![hurtPlayer](../media/7/function.png)--->
<img src="../media/7/function.png" alt="hurtPlayer" style="width:950px;"/>

Primero destruiremos al enemigo e inhabilitaremos el jugador para los `pasos 4 y 5` con estas líneas:

```javascript
enemy.destroy();
player.disableBody(true, true);
```

Esto hace que tanto el enemigo como el jugador desaparezcan (el enemigo ha sido eliminado, pero el jugador está simplemente invisible y no interactivo). Ahora hagamos que el jugador reviva después de una breve pausa (la pausa permite que el jugador tenga algo de tiempo para reaccionar al daño). Para esta pausa, usaremos otro temporizador (como hicimos al cambiar la dirección del enemigo) para el `paso 7`. La sintaxis será la misma, pero llamaremos a la función resetPlayer(), tendremos un retraso más corto y también no haremos que el temporizador sea cíclico.

Una vez que tengas el temporizador creado, trabajemos en el método `resetPlayer()`:

<!--- ![reset_player](../media/7/resetPlayer.png)--->
<img src="../media/7/resetPlayer.png" alt="reset_player" style="width:950px;"/>

Primero, elige una coordenada de reaparición y cambia el valor (X, Y) del jugador a esta ubicación (todavía podemos cambiar la ubicación de la nave de esta manera porque todavía existe, solo está deshabilitada). Luego, habilita al jugador con esta línea:

```javascript
this.player.enableBody(true, x, y, true, true);
```

Una vez que hayas implementado esto, la colisión debería verse así:
![collision](../media/7/respawn-first.gif)

A continuación, creemos un nuevo objeto de explosión editando `explosion.js`:

<!--- ![explosion](../media/7/explosion.png)--->
<img src="../media/7/explosion.png" alt="explosión" style="width:950px;"/>

Observa que se extiende desde Phaser.GameObjects.Sprite. Esto nos permitirá usar el constructor de esta Clase a través de la herencia. Los parámetros de nuestro objeto Projectile son simplemente la escena y dos números (x e y); más adelante verás que pasaremos la propia Escena 2. Podemos usar esta escena para acceder a todo dentro de ella. Todo lo que hará este archivo será crear un objeto que reproducirá la animación de explosión en la ubicación especificada. Todo el código que necesita esta clase está contenido en el constructor, y solo hay 2 líneas de código que necesitas completar.

Ahora, ve al método `hurtPlayer()` en `scene2.js`：

<!--- ![create_explosion](../media/7/create_explosion.png)--->
<img src="../media/7/create_explosion.png" alt="crear_explosión" style="width:950px;"/>

{{% notice hint %}}
Crearás dos objetos de explosión:

* Uno con la escena y las coordenadas del jugador como parámetros,
* Otro con la escena y las coordenadas del enemigo como parámetros.
{{% /notice %}}

A continuación, observa cómo la reaparición del jugador es un poco repentina. Haremos que esta transición sea más fluida con un tween después de reaparecer el jugador:

<!--- ![reset_tween](../media/7/reset_tween.png)--->
<img src="../media/7/reset_tween.png" alt="reset_tween" style="width:950px;"/>

Un tween es esencialmente una herramienta que te permite animar una característica o propiedad de un objeto. Por ejemplo, en este caso, estamos animando la alfa (también conocida como visibilidad) del jugador. Comenzaremos estableciendo la alfa del jugador en 0.5 y luego usaremos el tween para animarlo hasta llegar a la visibilidad total y normal.

```javascript
var tween = this.tweens.add({
    targets: this.player,
    y: config.height - 64,
    ease: 'Power1',
    duration: 1500,
    repeat: 0,
    onComplete: function(){
        this.player.alpha = 1;
    },
    callbackScope: this
});
```

¡Ahora finalmente hemos terminado! ¡Ahora la animación de reaparición del jugador se ve mucho más limpia!

![collision](../media/respawn-second.gif)
```