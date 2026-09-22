---
title: "Configurando a Nuvi"
date: 2021-10-06T11:45:38-07:00
draft: true
weight: 3
---

Para comenzar a configurar nuestro jugador principal, Nuvi, primero necesitamos importar los recursos del juego que queremos usar. Puedes importar tus propios recursos o [descargar los recursos proporcionados](../files/Unity_game_images.zip). Para importar estos a Unity, debemos ir a la ventana del Proyecto y, en la carpeta Assets, crear una nueva carpeta y nombrarla "Drawings".

![Creando una nueva carpeta](../img/2_1.png)

Arrastra todo lo que importaste a la carpeta Drawings.

A continuación, queremos arrastrar y soltar el dibujo de Nuvi en la jerarquía. Nuvi ahora debería aparecer en la ventana de escena y juego. Como podemos ver en la ventana del Juego, Nuvi es demasiado grande. Para cambiar el tamaño de Nuvi, debemos usar la herramienta Rect en la esquina superior izquierda de Unity.

![Herramienta Rect](../img/2_Unity_tools.png)

Luego haz clic y arrastra uno de los círculos azules que aparecen en las esquinas de Nuvi para redimensionarlo. Si ejecutamos el programa ahora, Nuvi no hace nada: simplemente se queda ahí. Para que Nuvi pueda moverse, necesitamos agregar un componente "Rigidbody2D".

{{< notice info >}}
El componente Rigidbody2D permite que un GameObject sea manipulado bajo el motor de física de Unity.
{{< /notice >}}

Para añadir cualquier componente a un GameObject, necesitas hacer clic en Nuvi, como lo hiciste al cambiar el tamaño. Debería aparecer una ventana del inspector a la derecha. Luego, haz clic en el botón "Add Component" y selecciona "RigidBody2D" después de buscarlo escribiéndolo.

<img src="../img/2_AddComponent.png" alt="Antes de añadir un componente" width="400"/>
<img src="../img/2_Rigidbody2D.png" alt="Después de añadir un componente" width="400"/>

Ahora, si ejecutas el programa, verás que Nuvi se mueve lentamente hacia adelante. En realidad, Nuvi está cayendo hacia abajo. Esto se debe a que, en el componente Rigidbody2D, la "Gravity Scale" de Nuvi está configurada en 1, y la gravedad actúa sobre Nuvi para tirarlo hacia abajo. Como no queremos que Nuvi caiga en nuestro juego, tenemos que cambiar la gravedad a 0 en el Inspector.

Antes de continuar, deberíamos guardar con frecuencia para no perder el progreso. Para hacerlo, podemos mantener presionado Control + S (Command + S si estás usando una Mac) o ir a la esquina superior izquierda de la pantalla y hacer clic en "Save" dentro de "File". Asegúrate de hacer esto con frecuencia mientras sigues este taller.