---
title: "Disparadores y Etiquetas"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 10
---

## Disparadores

Ahora, paremos a pensar cómo queremos que funcione nuestro proyectil. Un proyectil va a ser disparado y, luego, cuando golpee a un enemigo, desaparecerá. ...Eso realmente no es física, ¿verdad? La física no puede hacer que un objeto desaparezca en el aire, así que esta desaparición tendrá que ser un comportamiento personalizado que agregaremos al proyectil usando un script. El comportamiento de desaparición ocurrirá cuando el proyectil toque a un enemigo.

Hacemos eso convirtiendo este proyectil en un disparador. Ve al componente BoxCollider2D dentro del inspector del proyectil que añadiste y marca la casilla "IsTrigger". Un disparador te avisará que ha tocado algo, por lo que en tu script puedes verificar si esa interacción ocurrió y luego hacer que ese comportamiento personalizado de desaparición ocurra.

<img src="../img/9_isTrigger.png" alt="Marcar la casilla IsTrigger" width="400"/>

Ten en cuenta que, debido a que este proyectil es un disparador, ya no va a funcionar con físicas. A menos que añadas un script para hacerlo desaparecer, pasará a través de los objetos, incluyendo las paredes invisibles que añadiste anteriormente.

{{< notice info >}}
Convertir un Collider en un Disparador desactiva las reacciones físicas, pero ese objeto aún puede avisarte cuando ocurre una colisión.
{{< /notice >}}

## Etiquetas

Antes de pasar a crear el próximo script, debemos hablar de una cosa más: las etiquetas. Las etiquetas se utilizan para identificar fácilmente GameObjects dentro de Unity. Las utilizaremos al crear los próximos dos scripts. Primero, debemos configurar las etiquetas dentro de nuestro juego.

En la parte superior de la ventana del inspector de Nuvi, localiza el menú desplegable "Tag". En este momento, debería decir "Untagged". Despliega el menú y selecciona "Player". Ahora, Nuvi tiene una etiqueta "Player" que podemos localizar fácilmente. Repitamos esto para el proyectil y el enemigo. Si deseas crear una nueva etiqueta, selecciona "Add Tag…" en el menú desplegable y selecciona el signo "+". Luego nómbralas como "Projectile" y "Enemy" y guarda.