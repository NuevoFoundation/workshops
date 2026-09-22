---
title: "Haciendo que Nuvi se Mueva"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 5
---

Ahora que sabemos cómo se ve un Script, hagamos uno.

Primero, queremos crear una nueva carpeta llamada "Scripts" en Assets bajo la ventana del Proyecto, similar a la carpeta Drawings. Haremos esto porque es mejor práctica tener todos los scripts en un lugar de fácil acceso. Haz doble clic en la carpeta Scripts y crea un script haciendo clic derecho y seleccionando "C# Script". También puedes ir a la pestaña "Assets" y elegir "Create -> C# Script" como se muestra a continuación.

![Creando un C# Script](../img/4_CreateScript.png)

Nombra este script "PlayerMovement" y arrastra y suelta este script en la ventana del Inspector de Nuvi. También podemos buscar el nombre del script en el Inspector de Nuvi como lo hicimos con el componente Rigidbody2D.

Abre el script y copia y pega el código a continuación: 
```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
   public float speed;


   private Vector3 movement;     //(x,y,0) vector
   private float move_x;               //coordenada x del jugador
   private float move_y;               //coordenada y del jugador

   void Start()
   {
       speed = 7f;
       movement = new Vector3(0.0f, 0.0f, 0.0f);
   }

   void Update()
   {
       move_x = Input.GetAxisRaw("Horizontal"); //devuelve un -1/0/1
       move_y = Input.GetAxisRaw("Vertical");

       movement = new Vector3(move_x, move_y, 0.0f);

   }

   void FixedUpdate()
   {
       if(movement != Vector3.zero) //si no hay input, entonces no moverse
       {
           rb.MovePosition(transform.position + speed * movement * Time.deltaTime); //mueve físicamente a Nuvi en la dirección
           transform.rotation = Quaternion.LookRotation(transform.forward, -movement); //hace que mire hacia la dirección en la que se está moviendo
           //-movement porque de lo contrario mirará hacia la dirección opuesta, ya que transform está orientado hacia abajo
       }
   }
}
```

Si intentáramos ejecutar el script ahora, no funcionaría debido a errores de compilación. Para solucionar esto, necesitamos agregar `public Rigidbody2D rb;` debajo de `public float speed;`. Luego guarda para actualizar el script en Unity.

Como podemos ver en la sección de PlayerMovement en el Inspector de Nuvi, la variable rb está vacía. Necesitamos arrastrar y soltar el Rigidbody2D de Nuvi desde su inspector a la variable rb. ¡Ahora, intenta ejecutar el juego!

¡Todo se ve genial! ...¿O no?

Tómate un momento para observar cómo se mueve Nuvi horizontal/verticalmente en comparación con diagonalmente. De hecho, Nuvi se mueve un poco más rápido en diagonal. Deberíamos arreglar esto — es un detalle pequeño pero importante. Para entender por qué, necesitamos traer algo de matemáticas.

{{<notice info>}}

Recuerda el Teorema de Pitágoras, a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>. Cuando Nuvi se mueve en diagonal, los movimientos horizontal y vertical se combinan. Esto sucede en `movement = new Vector3(move_x, move_y, 0.0f)`.

<img src="../img/4_pythagorean_theorem.png" alt="Movimiento del jugador usando el Teorema de Pitágoras" width="600"/>

Nuestro juego recibe "1" como entrada horizontal cuando se presionan las teclas horizontales, y "1" como entrada vertical cuando se presionan las teclas verticales. Pero cuando se presionan al mismo tiempo, nuestro juego usa el Teorema de Pitágoras para calcular el movimiento diagonal de Nuvi, c.

Si establecemos a=1 y b=1, entonces nuestra ecuación se ve como:

a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>

1<sup>2</sup> + 1<sup>2</sup> = c<sup>2</sup>

2 = c<sup>2</sup>

√2 = c

1.414... = c

Así que, de hecho, Nuvi está moviéndose 1.414 veces más rápido de lo que lo hace horizontal o verticalmente.

Para arreglar esto, agrega `movement = movement.normalized;` debajo de `movement = new Vector3(move_x, move_y, 0.0f)`. Esta línea convertirá ese 1.414 en un 1. Ahora ejecuta el juego para ver que Nuvi se mueve a la misma velocidad en diagonal.

{{</notice>}}

También hay algo importante que falta en nuestro juego. ¿Notas cómo Nuvi puede salirse de la pantalla? Eso es un gran problema — no queremos que Nuvi se pierda en el espacio, ¿verdad? En la próxima lección corregiremos esto a fondo.