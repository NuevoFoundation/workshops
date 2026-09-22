---
title: "Armando Todo Junto"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 14
---

Ahora que tenemos todo el interfaz de usuario configurado, queremos que el juego funcione como lo pretendemos. En este momento, cuando simulamos el juego jugable, podemos mover a Nuvi, pero la pantalla final ya se está mostrando.  
Para solucionar esto, tendremos un script que dictará cómo debe desarrollarse el juego. Bajo la carpeta Scripts en la ventana del proyecto, crea un nuevo script llamado "Outline". Arrastra este script al inspector de la "Main Camera", que podemos ubicar bajo la jerarquía.

Antes de agregar algo en el script "Outline", primero configuremos algunas cosas. Si ejecutamos el juego ahora, aún podemos mover a Nuvi y disparar a los enemigos rosas, aunque la interfaz de usuario aparezca. Arreglemos eso configurando puntos de aparición.  
Haz clic en "Create Empty" en la ventana de jerarquía y renómbralo a "SpawnPoints". Luego, crea cuatro Transform adicionales bajo "SpawnPoints" y cámbiales el nombre a "EnemyLoc1", "EnemyLoc2", "EnemyLoc3" y "PlayerLoc". Reposiciónalos usando la herramienta de movimiento para que estén justo sobre los enemigos y jugadores como se muestra:

<img src="../img/13_enemyspawn.png" alt="Reposicionar punto de aparición para enemigo" width="400"/>  
<img src="../img/13_playerspawn.png" alt="Reposicionar punto de aparición para Nuvi" width="400"/>

{{< notice tip >}}
Asegúrate de que los Transform estén en el mismo eje Z que Nuvi. De lo contrario, ¡puede que no aparezcan!
{{< /notice >}}

Ahora que tenemos todo configurado, abre el script outline y copia y pega este código:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Outline : MonoBehaviour
{

   public Slider num_of_enemies;

   private Transform location;

   public GameObject opening_screen;
   public GameObject winner_screen;
   public GameObject enemy1;
   public GameObject player1;

   private bool is_generated;

   // Start is called before the first frame update
   void Start()
   {
       is_generated = false;
   }

   // Update is called once per frame
   void Update()
   {
       if(is_generated == false)
       {
           if (opening_screen.activeSelf == false)
           {
               generate();
               is_generated = true;
               enemies_left = (int) num_of_enemies.value;
           }
       }

       if(enemies_left == 0)
       {
           showEndScreen();
       }
   }

   private void generate()
   {
       for(int x = 1; x <= ; x++) //para cada número de enemigos deseado desde el deslizador
       {
           location = positions[x];    //ya que es un array, toma transform desde el índice x
           GameObject enemy = Instantiate(enemy1, location);   //instancia al enemigo en la ubicación elegida
       }
       location = positions[0];
       GameObject player = Instantiate(player1, location);
   }

   private void showEndScreen()
   {
       winner_screen.SetActive(true);
   }
}
```

A este código le faltan algunas líneas para que funcione correctamente. ¿Las completamos?

Si tratamos de ejecutar el juego ahora, no nos lo permitirá. Una razón es que usamos un objeto de interfaz de usuario en el script. Para acceder a él, necesitamos importar el espacio de nombres UI. Para hacerlo, agrega `using UnityEngine.UI;` al principio del script, bajo `using UnityEngine;`.

A continuación, queremos almacenar las posiciones de aparición que creamos. ¿Qué estructura de datos piensas que es mejor para almacenar estos puntos de aparición? Si pensaste en arrays, ¡estás en lo correcto! Agrega la línea `public Transform[] positions;` justo encima de `private Transform location;`. Esto nos permitirá almacenar todos los puntos de aparición sin tener que crear cuatro variables individuales.

Un problema al que nos enfrentamos fue que la pantalla final aparecía aunque fuera el inicio del juego. Si prestaste atención a los dos scripts anteriores para la pantalla de Menú y la pantalla de Fin, tal vez tengas una idea de cómo solucionar esto. Similar a cómo configuramos la pantalla de Menú en false, necesitamos establecer la pantalla de Fin en false. Para hacerlo, agrega `winner_screen.SetActive(false);` dentro del método `Start()`.

La última adición que necesitamos hacer para que el script funcione está en la función `generate()`. Dentro del bucle for, necesitamos encontrar una manera de capturar el número que el jugador eligió desde el deslizador dentro de la pantalla de Menú. Ya que nos referiremos al deslizador como num_of_enemies, simplemente necesitamos agregar `num_of_enemies.value` justo después del `<` y antes del `;` en el bucle for.

Ahora, dirígete al inspector de la Main Camera y localiza el script Outline. Nota que hay muchas variables vacías que necesitamos llenar. Primero, arrastra el deslizador num_enemies desde la jerarquía hacia la variable "Num_of_enemies". Para "Positions", elige "4". Arrastra las ubicaciones de aparición en este orden comenzando desde Elemento 0: PlayerLoc → EnemyLoc2 → EnemyLoc1 → EnemyLoc3. Luego, arrastra el GameObject del Menú desde la jerarquía hacia la variable "Opening_screen" y el GameObject de EndScreen hacia la variable "Winner_screen". A continuación, desde la carpeta Prefabs en la ventana del Proyecto, arrastra el prefab "enemy1" hacia la variable "Enemy 1" y el prefab "Nuvi" hacia la variable "Player 1".

A continuación, necesitamos una manera de saber cuándo los enemigos son derrotados, para que podamos hacer que la pantalla de Fin aparezca cuando no queden enemigos. Para hacerlo, mantenemos un conteo de cuántos enemigos hay, y este conteo debería disminuir cuando un enemigo sea derrotado. En el script "Outline" agrega `public int enemies_left;`. Por ahora agrega `enemies_left = -1;` en el método `Start()`. Ahora, pensemos en cuándo el enemigo es derrotado. ¿En qué script destruimos al enemigo? Si pensaste en el script "EnemyBehavior", ¡entonces estás en lo correcto! Abre el script "EnemyBehavior" y agrega este código arriba del método `OnCollisionEnter2D()`:

```csharp
  GameObject cam;
  private Outline outline;

  void Start()
  {
      cam = GameObject.Find("Main Camera");
      outline = cam.GetComponent<Outline>();
  }
```

La primera línea en el método `Start()` establece la variable "cam" como el "Main Camera" GameObject. La segunda línea toma el script Outline de "cam" y lo establece en la variable "outline". Luego, agrega `outline.enemies_left--;` bajo `Destroy(gameObject);`. Esto restará 1 de la variable "enemies_left" en