---
title: "Colliders"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 6
---

The reason Nuvi runs off is because there are no colliders.

{{< notice info >}}
Colliders allow two objects to touch each other.
{{< /notice >}}

So, let's use colliders to add invisible walls around our arena. Head over to the Hierarchy window and right-click, then choose "Create Empty". Name this empty object "Walls".

Then, right-click the "Walls" object you just made, and this time choose "3D Object -> Cube". Resize the cube into a rectangular shape so it covers a side of the screen like below:

![Cannot find image](../img/5_1stWall.png)

Then, remove the BoxCollider component that the cube has by default, and add a BoxCollider2D component.

Do the same to make 3 more invisible walls that surround Nuvi, like:

![Cannot find image](../img/5_all_walls.png)

Now run the game and see what happens. ...Uh-oh, Nuvi still runs off. That's because Nuvi doesn't have a Collider. For two objects to collide, both of those objects need to have a Collider!

So, let's go ahead and add a BoxCollider2D component to Nuvi. In that component, click on "Edit Collider", and you should see a green box surrounding Nuvi. Resize this box so it fits snugly around Nuvi.
Run the game and see that Nuvi won't run off anymore... but now Nuvi starts spinning when they hit a corner of the arena. To stop this, go into Nuvi's Rigidbody2D component, expand "Constraints", and check "Freeze Rotation".

To add a background and get Nuvi working in outer space, drag the "background" png file and drop it into the Drawings folder like you did for Nuvi's image. Then, drag and drop it into the Scene. Resize the background image; looking at the Game window will help you do so.

{{< notice tip >}}
If Nuvi hides behind the background image, go into Nuvi's Sprite Renderer component, expand "Additional Settings", and change Nuvi's "Order in Layer" to 1.
{{< /notice >}}

Finally, run the game again and make sure things are looking alright. If so, then congratulations! We have successfully helped Nuvi move around in outer space!

![Cannot find image](../img/5_done.png)
