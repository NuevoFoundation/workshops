---
title: "Setting up the Projectile and Making it a Prefab"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 8
---

Oh no! The pink alien is attacking now! It's mad because Nuvi ran over it. Let's set Nuvi up with a self-defense mechanism.

After selecting Nuvi in the hierarchy, right click and select "Create Empty", which creates an empty GameObject with only a Transform component.

{{< notice tip >}}
To be able to see where our empty object is, make sure we are on the Move tool! You should see two intersecting arrows — where they intersect is where our empty GameObject is located.
{{< /notice >}}

This Transform component will represent where the projectile is going to spawn from. Using the Move tool, let's align the Transform so that it is in front of Nuvi's protruding belly. Rotate the Transform using the Rotate tool to create an image similar to the one below:

<img src="../img/7_projectileSpawn.png" alt="Reposition and rotate projectile spawn Transform so it is in front of Nuvi" width="400"/>

Now, in the Assets folder within the Project window, locate the "projectile" png from the Drawings folder. Drag and drop the projectile into the hierarchy. Resize the projectile so it is smaller than Nuvi. Make sure to add a BoxCollider2D and a RigidBody2D with the gravity scale set to 0.

{{< notice tip >}}
If the projectile image doesn't show, try going into the Sprite Renderer component and increase the "Order in Layer", like you did for Nuvi when we added the background.
{{< /notice >}}

## Prefabs

Since we will be firing multiple projectiles, it would be easier to make the projectiles a prefab. A prefab is a pre-made version of an object that you can make a bunch of copies of by just dragging it into the scene. If you make any changes to the prefab, that change will affect all copies of that prefab. You don't have to go into each copy and manually change everything.

First, let's create a "Prefabs" folder under Assets in the Project Window. Then, to make the projectile a prefab, simply drag the projectile from the hierarchy into the Prefabs folder.

{{< notice note >}}
Note that the text, "projectile", and the empty cube next to it turned blue in the hierarchy.
{{< /notice >}}

Now that the projectile is saved for future reuse, we can delete the projectile from the hierarchy. To do this, simply right-click on the projectile and choose "Delete".
