---
title: "Configurando a los Enemigos"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 7
---

¡Ahora que Nuvi está listo para moverse, hagamos que le dé la bienvenida a los alienígenas en el universo! Localiza el archivo png del alienígena llamado "alien_pink" en la carpeta Drawings. Luego, arrastra y suelta el archivo alien_pink en la jerarquía. Redimensiona al enemigo para que coincida con el tamaño de Nuvi, ya que es demasiado grande.

<img src="../img/6_nuvi_and_enemy.png" alt="El enemigo es redimensionado para igualar el tamaño de Nuvi" width="400"/>

Ahora, si ejecutamos el juego, Nuvi pasará por encima del alienígena rosa. Queremos que Nuvi colisione con él. Para hacer esto, añade un BoxCollider2D al alienígena como hicimos con Nuvi y ajusta su tamaño si es necesario. Ahora, si ejecutamos el juego de nuevo, ¡Nuvi chocará con el alienígena en lugar de pasar por encima!