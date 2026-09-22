---
title: "Disparar"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 9
---

Ahora que el proyectil está listo, hagamos que Nuvi dispare esos proyectiles. Crea un script llamado "FiringBehavior", luego copia y pega este código:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FiringBehavior : MonoBehaviour
{

   public Transform spawn_coor;        //donde el proyectil aparecerá
   public float projectile_speed;          //qué tan rápido irá el proyectil

   public GameObject projectile_object;    //sprite del proyectil rojo

   // Start se ejecuta al inicio de la primera frame
   void Start()
   {
       projectile_speed = 15f;
   }      

   // Update se ejecuta una vez por frame
   void Update()
   {
       if(Input.GetButtonDown("Jump")) //la barra espaciadora generará el proyectil
       {

           Rigidbody2D rb = projectile.GetComponent<Rigidbody2D>();
           rb.AddForce(spawn_coor.up * projectile_speed, ForceMode2D.Impulse); //hace que el proyectil se mueva
       }
   }
}
```

En este momento, este script no funciona; necesitamos indicarle al juego qué generar al presionar la barra espaciadora. Para hacerlo, añade `GameObject projectile = Instantiate(projectile_object, spawn_coor.position, spawn_coor.rotation);` encima de `Rigidbody2D rb = projectile.GetComponent<Rigidbody2D>();`. El método Instantiate indica qué crear, dónde crearlo y en qué dirección debe estar orientado.

Arrastra y suelta este script en el inspector de Nuvi. Si ejecutas el script ahora, notarás que no ha cambiado nada. Esto se debe a que hay variables públicas que no se han asignado todavía.  
Dirígete al inspector de Nuvi y desplázate hacia abajo hasta el script Behavior. Nota que spawn_coor y projectile_object están vacíos. Para spawn_coor, arrastra y suelta el GameObject vacío que creaste en la última lección y que representa dónde aparecen los proyectiles. Para projectile_object, arrastra y suelta el prefab del proyectil que también hiciste en la última lección.

Además, ahora que Nuvi tiene todo lo que necesita para defenderse, ¡hagamos que Nuvi también sea un prefab!

Ejecuta el juego y observa lo que ves. Logramos que Nuvi dispare proyectiles, pero ¡estos proyectiles no pueden hacer nada! En las próximas lecciones, aprenderás cómo hacer que interactúen con otros objetos.