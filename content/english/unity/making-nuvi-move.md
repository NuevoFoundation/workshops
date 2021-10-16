---
title: "Making Nuvi Move"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 5
---

Now that we know what a Script looks like, let's actually make one.

First, we want to create a new folder called "Scripts" in Assets under the Project window, similar to the Drawings folder. We will do this because it is better practice to have all the scripts in an easy to access place. Double click the Scripts folder and create a script by right clicking and selecting "C# Script." You can also go under the "Assets" tab and choose "Create -> C# Script" as shown below.

![Creating a C# Script](../img/4_CreateScript.png)

Name this script "PlayerMovement" and drag and drop this script into the Nuvi Inspector window. We can also search for the script name in the Nuvi Inspector like we did for the Rigidbody2D component.

Open the script and copy and paste the code below:
```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
   public float speed;


   private Vector3 movement;     //(x,y,0) vector
   private float move_x;               //x coordinate of player
   private float move_y;               //y coordinate of player

   void Start()
   {
       speed = 7f;
       movement = new Vector3(0.0f, 0.0f, 0.0f);
   }

   void Update()
   {
       move_x = Input.GetAxisRaw("Horizontal"); //returns a -1/0/1
       move_y = Input.GetAxisRaw("Vertical");

       movement = new Vector3(move_x, move_y, 0.0f);

   }

   void FixedUpdate()
   {
       if(movement != Vector3.zero) //if no input, then don't move
       {
           rb.MovePosition(transform.position + speed * movement * Time.deltaTime); //physically moves Nuvi in the direction
           transform.rotation = Quaternion.LookRotation(transform.forward, -movement); //for facing the direction its moving
           //-movement bc otherwise it will face the opposite direction since transform is facing downwards
       }
   }
}
```

If we were to try to run the script now, it would not work because of compiler errors. To fix this, we need to add `public Rigidbody2D rb;` under `public float speed;`. Then save in order to update the script into Unity.

As we can save in the PlayerMovement section in the Nuvi Inspector, the rb variable is empty. We need to drag and drop Nuvi's rigidbody2D from their inspector into the rb variable. Now, try running the game!

Looking all good! ...Or is it?

Take a moment to observe how Nuvi moves horizontally/vertically compared to diagonally. Nuvi actually moves a little bit faster diagonally. We should fix this — it's a small detail, but an important one. To understand why, we need to bring in some math.

{{<notice info>}}

Recall Pythagorean's Theorem, a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>. When Nuvi moves diagonally, the horizontal and vertical movements are being merged together. This happens in `movement = new Vector3(move_x, move_y, 0.0f)`.

<img src="../img/4_pythagorean_theorem.png" alt="Player movement using Pythagorean Theorem" width="600"/>

Our game receives "1" as horizontal input when horizontal keys are pressed, and "1" as vertical input when vertical keys are pressed. But when they're pressed at the same time, our game uses the Pythagorean Theorem to figure out Nuvi's diagonal movement, c.

If we set a=1 and b=1, then our equation looks like:

a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>

12 + 12 = c<sup>2</sup>

2 = c<sup>2</sup>

√2 = c

1.414... = c

So, Nuvi is actually moving 1.414 times faster than they do horizontally or vertically.

To fix this, add `movement = movement.normalized;` under `movement = new Vector3(move_x, move_y, 0.0f)`. This line will turn that 1.414 into a 1. Now run the game to see that Nuvi moves at the same speed diagonally

{{</notice>}}

There's also an important thing that's missing in our game. Do you notice how Nuvi can run off the screen? Now that is a big problem — we don't want Nuvi running off into space, do we? In the next lesson we will thoroughly fix this.
