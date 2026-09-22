```markdown
---
title: "Actividad 7 - Permitiendo que el Jugador Dispare"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 14
---

Ahora queremos agregar una de las partes más importantes del juego: ¡disparar a los enemigos! Aunque podemos derrotar a los enemigos chocándolos, esto no será una buena idea una vez que agreguemos vidas más adelante. Crearemos un efecto de disparo creando un objeto para el rayo utilizando un archivo JavaScript separado (como hicimos con la explosión).

Comenzaremos con algunos conceptos básicos: cargaremos una hoja de sprites y animación en Escena 1 para los rayos del jugador:

<!--- ![scene1_preload](../media/8/scene1_preload.png)--->
<img src="../media/8/scene1_preload.png" alt="scene1_preload" style="width:950px;"/>

La ubicación de la hoja de sprites es `assets/beam.png` y el ancho y alto del marco es 32:

<!--- ![scene1_create](../media/8/scene1_create.png)--->
<img src="../media/8/scene1_create.png" alt="scene1_create" style="width:950px;"/>

Ahora, en la Escena 2, haremos algo similar a lo que hicimos con los enemigos y crearemos un grupo para los rayos para que podamos manipularlos fácilmente. Crea un grupo y ponle el nombre "projectiles":

<!--- ![projectiles](../media/8/projectiles_step1.png)--->
<img src="../media/8/projectiles_step1.png" alt="projectiles" style="width:950px;"/>

Ahora ve a `playerBeam.js`：

<!--- ![constructor_xy](../media/8/constructor_xy.png)--->
<img src="../media/8/constructor_xy.png" alt="constructor_xy" style="width:950px;"/>

Nota que, al igual que `Explosion.js`, extiende Phaser.GameObjects.Sprite y utiliza la palabra clave `super()` en su constructor. Completa el código en el constructor. Esto requerirá que reproduzcas la animación del rayo, habilites el cuerpo y configures la velocidad en el eje y del rayo al valor que desees para que viaje.

Ahora que tenemos lo básico del rayo listo, vamos a permitir que el jugador lo dispare al presionar la barra espaciadora. De manera similar a como creamos una variable para procesar las teclas de movimiento del jugador, crearemos otra variable para procesar cuando se presione la barra espaciadora:

<!--- ![control_space](../media/8/control_space.png)--->
<img src="../media/8/control_space.png" alt="control_space" style="width:950px;"/>

Ahora crearemos un método llamado playerShoot():

<!--- ![player_shoot](../media/8/player_shoot.png)--->
<img src="../media/8/player_shoot.png" alt="player_shoot" style="width:950px;"/>

y lo llamaremos dentro del método update(), como hicimos con movePlayer():

<!--- ![update_player_shoot](../media/8/update_player_shoot.png)--->
<img src="../media/8/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

El método playerShoot verificará si la barra espaciadora ha sido presionada y disparará un rayo si es así. "Disparar un rayo", en este caso, significa crear un objeto playerBeam y añadirlo al grupo de proyectiles si el jugador está activo (aún vivo).

¡Pruébalo ahora! Sin embargo, aquí hay dos problemas importantes: el rayo no daña al enemigo y el rayo sigue moviéndose para siempre debido al lienzo infinito de Phaser.
![blast](../media/8/blast-first.gif)

Corrijamos primero ese segundo problema. Aunque este problema no afecta directamente la jugabilidad, podría ser un problema porque si el rayo sigue existiendo fuera de pantalla, significa que la computadora tiene que gastar tiempo cuidándolo. Si hay demasiados rayos para que la computadora maneje, ¡podría causar lentitud! Lo que haremos es utilizar una función update en playerBeam.js que destruirá el rayo si sale de la pantalla.

Sin embargo, la única forma de hacer que estas funciones de actualización funcionen es llamarlas dentro de la función update en nuestra Escena 2, de esta forma:

```javascript
for(var i = 0; i < this.projectiles.getChildren().length; i++) {
    var beam = this.projectiles.getChildren()[i];
    beam.update();
}
```

Puedes implementarlo en esta ubicación:

<!--- ![update_projectiles](../media/8/update_projectiles.png)--->
<img src="../media/8/update_projectiles.png" alt="update_projectiles" style="width:950px;"/>

Ahora, para probar esto, simplemente podemos cambiar el valor de altura en el que el rayo se autodestruirá por uno que esté dentro de la pantalla:

<!--- ![player_bullet_update](../media/8/player_bullet_update.png)--->
<img src="../media/8/player_bullet_update.png" alt="player_bullet_update" style="width:950px;"/>

El código está funcionando correctamente si el rayo desaparece en la altura específica. Después de confirmar que el código funciona, simplemente podemos cambiar este valor por uno que esté fuera de la pantalla.

![blast](../media/8/blast-disappear.gif)

Puedes ver en este gif que el rayo desaparece una vez que alcanza una altura especificada (usamos 50). Nuevamente, después de confirmar que funciona, simplemente podemos cambiar el número 50 por uno que esté un poco fuera de la pantalla (como 10) y sabemos que el código probablemente siga funcionando igual.

Ahora, ¡hagamos que el enemigo sea destruido si es alcanzado por un rayo! En realidad, podemos hacerlo con una detección de superposición similar a la que usamos para verificar si el jugador está tocando al enemigo:

<!--- ![overlap](../media/8/projectiles_step2.png)--->
<img src="../media/8/projectiles_step2.png" alt="overlap projectiles" style="width:950px;"/>

Crea una línea de código que utilice la misma sintaxis que usamos para detectar si el jugador y el enemigo han colisionado, pero esta vez verifica si el enemigo y el rayo han colisionado.

Sin embargo, no podemos usar el método hurtPlayer() porque el jugador no está siendo herido y no queremos que el jugador reaparezca cuando el enemigo sea alcanzado. Crearemos una nueva función llamada `hitEnemy()`:

<!--- ![hit_enemy](../media/8/hit_enemy.png)--->
<img src="../media/8/hit_enemy.png" alt="hit_enemy" style="width:950px;"/>

Agrega código a la función `hitEnemy()`