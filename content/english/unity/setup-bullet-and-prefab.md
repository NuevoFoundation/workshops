---
title: "Setting up the Bullet and Making it a Prefab"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 8
---

Oh no! The pink alien is attacking now! It's mad because Nuvi ran over it. Let's set Nuvi up with a self-defense mechanism.

After selecting Nuvi in the hierarchy, right click and select "Create Empty", which creates an empty GameObject with only a Transform component.

{{< notice tip >}}
To be able to see where our empty object is, make sure we are on the Move tool! You should see two intersecting arrows — where they intersect is where our empty GameObject is located.
{{< /notice >}}

This Transform component will represent where the bullet is going to spawn from. Using the Move tool, let's align the Transform so that it is in front of Nuvi's protruding belly. Rotate the Transform using the Rotate tool to create an image similar to the one below:

<img src="../img/7_bulletSpawn.png" alt="Reposition and rotate bullet spawn Transform so it is in front of Nuvi" width="400"/>

Now, in the Assets folder within the Project window, locate the "bullet.png" from the Drawings folder. Drag and drop the bullet into the hierarchy. Resize the bullet so it is smaller than Nuvi. Make sure to add a BoxCollider2D and a RigidBody2D with the gravity scale set to 0.

{{< notice tip >}}
If the bullet image doesn't show, try going into the Sprite Renderer component and increase the "Order in Layer", like you did for Nuvi when we added the background.
{{< /notice >}}

## Prefabs

Since we will be shooting multiple bullets, it would be easier to make the bullets a prefab. A prefab is a pre-made version of an object that you can make a bunch of copies of by just dragging it into the scene. If you make any changes to the prefab, that change will affect all copies of that prefab. You don't have to go into each copy and manually change everything.

First, let's create a "Prefabs" folder under Assets in the Project Window. Then, to make the bullet a prefab, simply drag the bullet from the hierarchy into the Prefabs folder.

{{< notice note >}}
Note that the text, "bullet", and the empty cube next to it turned blue in the hierarchy.
{{< /notice >}}

Now that the bullet is saved for future reuse, we can delete the bullet from the hierarchy. To do this, simply right-click on the bullet and choose "Delete".
