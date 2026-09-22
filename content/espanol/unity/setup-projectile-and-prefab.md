---
title: "Configurando el Proyectil y Creando un Prefab"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 8
---

¡Oh no! ¡El alienígena rosa está atacando ahora! Está enfadado porque Nuvi lo atropelló. Configuremos un mecanismo de autodefensa para Nuvi.

Después de seleccionar a Nuvi en la jerarquía, haz clic derecho y selecciona "Create Empty", lo que crea un objeto vacío (GameObject) que solo tiene un componente Transform.

{{< notice tip >}}
¡Para poder ver dónde está nuestro objeto vacío, asegúrate de que estamos en la herramienta de Movimiento! Deberías ver dos flechas que se intersectan — donde se cruzan es donde está ubicado nuestro GameObject vacío.
{{< /notice >}}

Este componente Transform representará el lugar desde donde se generará el proyectil. Usando la herramienta de Movimiento, alineemos el Transform para que esté frente al abdomen saliente de Nuvi. Rota el Transform usando la herramienta de Rotación para crear una imagen similar a la siguiente:

<img src="../img/7_projectileSpawn.png" alt="Reposiciona y rota el Transform del punto de generación del proyectil para que esté frente a Nuvi" width="400"/>

Ahora, en la carpeta de Assets dentro de la ventana de Proyecto, localiza el archivo "projectile" .png dentro de la carpeta Drawings. Arrastra y suelta el proyectil en la jerarquía. Redimensiona el proyectil para que sea más pequeño que Nuvi. Asegúrate de añadir un BoxCollider2D y un RigidBody2D con la escala de gravedad configurada en 0.

{{< notice tip >}}
Si la imagen del proyectil no aparece, intenta ir al componente Sprite Renderer y aumentar la "Order in Layer", como hiciste con Nuvi cuando añadimos el fondo.
{{< /notice >}}

## Prefabs

Dado que vamos a disparar múltiples proyectiles, sería más fácil convertir los proyectiles en un prefab. Un prefab es una versión predefinida de un objeto con la que puedes crear múltiples copias arrastrándolo al escenario. Si realizas algún cambio en el prefab, ese cambio afectará a todas las copias de dicho prefab. No necesitas ir a cada copia y cambiar todo manualmente.

Primero, creemos una carpeta llamada "Prefabs" dentro de Assets en la ventana de Proyecto. Luego, para convertir el proyectil en un prefab, simplemente arrastra el proyectil desde la jerarquía a la carpeta Prefabs.

{{< notice note >}}
Ten en cuenta que el texto "projectile" y el cubo vacío junto a él se han vuelto azules en la jerarquía.
{{< /notice >}}

Ahora que el proyectil está guardado para un uso futuro, podemos eliminarlo de la jerarquía. Para hacerlo, simplemente haz clic derecho sobre el proyectil y selecciona "Delete".