---
title: "Colliders"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 6
---

La razón por la que Nuvi se escapa es porque no hay colisionadores que lo detengan.

{{< notice info >}}
Los colisionadores permiten que dos objetos se toquen entre sí.
{{< /notice >}}

Así que, usemos colisionadores para agregar paredes invisibles alrededor de nuestra arena. Ve a la ventana de Jerarquía y haz clic derecho, luego selecciona "Crear vacío". Nombra este objeto vacío como "Paredes".

Luego, haz clic derecho en el objeto "Paredes" que acabas de crear, y esta vez elige "Objeto 3D -> Cubo". Redimensiona el cubo en una forma rectangular para que cubra un lado de la pantalla como en el ejemplo a continuación:

![Una pared invisible](../img/5_1stWall.png)

Después, elimina el componente BoxCollider que el cubo tiene por defecto, y agrega un componente BoxCollider2D.

Haz lo mismo para crear 3 paredes invisibles más que rodeen a Nuvi, como:

![Cuatro paredes invisibles rodeando la arena](../img/5_all_walls.png)

Ahora ejecuta el juego y observa qué sucede. ...Oh no, Nuvi aún se escapa. Eso se debe a que Nuvi no tiene un colisionador. Para que dos objetos colisionen, ¡ambos deben tener un colisionador!

Entonces, vamos a agregar un componente BoxCollider2D a Nuvi. En ese componente, haz clic en "Editar colisionador" y deberías ver un cuadro verde que rodea a Nuvi. Ajusta el tamaño de este cuadro para que se ajuste perfectamente alrededor de Nuvi.  
Ejecuta el juego y observa que Nuvi ya no se escapa... pero ahora Nuvi comienza a girar cuando choca con una esquina de la arena. Para evitar esto, ve al componente Rigidbody2D de Nuvi, expande "Restricciones" y marca "Congelar rotación".

Para agregar un fondo y hacer que Nuvi funcione en el espacio exterior, arrastra el archivo png "background" desde la carpeta Drawings como hiciste con la imagen de Nuvi, y luego suéltalo en la Escena. Redimensiona la imagen de fondo; mirar la ventana del Juego te ayudará a hacerlo.

{{< notice tip >}}
Si Nuvi se oculta detrás de la imagen de fondo, ve al componente Sprite Renderer de Nuvi, expande "Configuración adicional" y cambia el "Order in Layer" de Nuvi a 1 (o cualquier número mayor que 0).
{{< /notice >}}

Finalmente, ejecuta el juego nuevamente y asegúrate de que todo se vea bien. Si es así, ¡felicitaciones! Hemos logrado que Nuvi se mueva por el espacio exterior correctamente.

![Nuvi en la imagen de fondo](../img/5_done.png) 