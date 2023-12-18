---
title: "Setting Up Nuvi"
date: 2021-10-06T11:45:38-07:00
draft: true
weight: 3
---

To begin setting up our main player, Nuvi, we first need to import the game assets we want to use. You can import your own assets, or [download the provided assets](../files/Unity_game_images.zip). To do import these into Unity, we need to head to the Project window and in the Assets folder, create a new folder and name it "Drawings".

![Creating a new folder](../img/2_1.png)

Drag everything you imported into the Drawings folder.

Next, we want to drag and drop the Nuvi drawing into the hierarchy. Nuvi should now appear in the scene and game window. As we can see in the Game window, Nuvi is too big. To resize Nuvi, we want to use the Rect tool at the top left corner of Unity.

![Rect tool](../img/2_Unity_tools.png)

Then click and drag one of the blue circles that show at the corners of Nuvi to resize. If we run the program right now, Nuvi doesn't do anything — they just stand there. To let Nuvi move around, we need to add a "Rigidbody2D" component.

{{< notice info >}}
The Rigidbody2D component allows a GameObject to be manipulated under Unity's physics engine.
{{< /notice >}}

To add any component onto a GameObject, you want to click on Nuvi like you did for resizing. An inspector window should pop up to the right. Then you want to click on the "Add Component" button and select "RigidBody2D" after searching for it by typing it in.

<img src="../img/2_AddComponent.png" alt="Before adding a component" width="400"/>
<img src="../img/2_Rigidbody2D.png" alt="After adding a component" width="400"/>

Now, if you were to run the program, you would see Nuvi slowly moving forward. In actuality, Nuvi is falling down! This is because in the Rigidbody2D component, Nuvi's "Gravity Scale" is set to 1, and gravity works on Nuvi to pull them downwards. Since we don't want Nuvi falling down in our game, we have to change gravity to 0 in the Inspector.

Before we move on, we should save frequently in order to not lose progress. To do this, we can either hold Control + s (Command + s if you're using a Mac) or head to the top left corner of the screen and click on "Save" under "File." Make sure to do this frequently as you follow along this workshop.
