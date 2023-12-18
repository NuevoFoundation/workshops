---
title: "Firing"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 9
---

Now that the projectile is all set up, let's get Nuvi firing those projectiles. Make a script called "FiringBehavior", then copy and paste this code:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FiringBehavior : MonoBehaviour
{

   public Transform spawn_coor;        //where the projectile will spawn
   public float projectile_speed;          //how fast projectile will go

   public GameObject projectile_object;    //red projectile sprite

   // Start is called before the first frame update
   void Start()
   {
       projectile_speed = 15f;
   }      

   // Update is called once per frame
   void Update()
   {
       if(Input.GetButtonDown("Jump")) //space bar will spawn projectile
       {

           Rigidbody2D rb = projectile.GetComponent<Rigidbody2D>();
           rb.AddForce(spawn_coor.up * projectile_speed, ForceMode2D.Impulse); //makes projectile move
       }
   }
}
```

Right now this script doesn't work; we need to tell the game what to spawn when the spacebar is pressed. To do so, add `GameObject projectile = Instantiate(projectile_object, spawn_coor.position, spawn_coor.rotation);` above `Rigidbody2D rb = projectile.GetComponent<Rigidbody2D>();`. The Instantiate method indicates what to create, where to create it, and in what direction it should be facing.

Drag and drop this script into Nuvi's inspector. If you were to run the script now, you will notice that nothing changed. This is because there are public variables that have not been assigned yet.
Head to Nuvi's inspector and scroll down to the Behavior script. Notice that spawn_coor and projectile_object are empty. For spawn_coor, drag and drop the empty GameObject you made in the last lesson that represents where projectiles spawn. For projectile_object, drag and drop the projectile prefab that you also made in the last lesson.

Also, now that Nuvi has everything they need to defend, let's also make Nuvi into a prefab!

Run the game and notice what you see. We got Nuvi to fire projectiles, but these projectiles can't do anything! In the next few lessons, you'll learn how to get them to interact with other objects.
