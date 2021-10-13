---
title: "Piecing it All Together"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 14
---

Now that we have all the UI set, we want the game to function as we intend it to. Right now when we simulate the playable game, we can move Nuvi, but the end screen is already showing.
To fix this, we will have a script that will dictate how the game should go. Under the Scripts folder in the Projects window, create a new script called "Outline". Drag this script into the "Main Camera" inspector which we can locate under the hierarchy.

Before we add anything into the "Outline" script, let's first set a few things up. If we were to run the game now, we can still move Nuvi and shoot the pink enemies despite the UI popping up. Let's fix that by setting up spawn points.
"Create Empty" in the hierarchy window and rename it to "SpawnPoints". Then, Create four more Transforms under "SpawnPoints" and rename them "EnemyLoc1", "EnemyLoc2", "EnemyLoc3", and "PlayerLoc". Reposition them using the Move tool so that they are right on the enemies and players like so:

<img src="../img/13_enemyspawn.png" alt="drawing" width="400"/>
<img src="../img/13_playerspawn.png" alt="drawing" width="400"/>

{{< notice tip >}}
Make sure that the Transforms are on the same Z axis as Nuvi. Otherwise, they might not appear!
{{< /notice >}}

Now that we have everything all set up, let's open up the outline script and copy and paste this code:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class Outline : MonoBehaviour
{

   public Slider num_of_enemies;


   private Transform location;

   public GameObject opening_screen;
   public GameObject winner_screen;
   public GameObject enemy1;
   public GameObject player1;

   private bool is_generated;


   // Start is called before the first frame update
   void Start()
   {

       is_generated = false;

   }

   // Update is called once per frame
   void Update()
   {
       if(is_generated == false)
       {
           if (opening_screen.activeSelf == false)
           {
               generate();
               is_generated = true;
               enemies_left = (int) num_of_enemies.value;
           }
       }

       if(enemies_left == 0)
       {
           showEndScreen();
       }
   }

   private void generate()
   {
       for(int x = 1; x < ; x++) //for each number of enemies wanted from the slider
       {
           location = positions[x];    //since it's an array, take transform from index x
           GameObject enemy = Instantiate(enemy1, location);   //instantiate enemy at chosen location
       }
       location = positions[0];
       GameObject player = Instantiate(player1, location);
   }

   private void showEndScreen()
   {
       winner_screen.SetActive(true);
   }
}
```

This code is missing a few lines in order for it to run correctly. Let's fill them in shall we?

If we were to try running the game now, it won't let us. One reason is that we use a UI object in the script. In order to access it, we need to import the UI namespace. To do this, add `using UnityEngine.UI;` at the top of the script under `using UnityEngine;`.

Next, we want to store the spawn positions we made. What do you think is the best data structure to store these spawn points? If you thought arrays, you are correct! Add the line `public Transform[] positions;` right above `private Transform location;`. This will allow us to store all the spawn points without having to create four individual variables.

One problem we ran into was the end screen appearing despite it being the start of the game. If you took notice of the past two scripts for the Menu and End screen, you may have an idea on how to fix this. Similar to how we set the Menu screen to false, we need to set the End screen to false. To do this, add `winner_screen.SetActive(false);` inside the Start() method.

The final addition we need to make in order for the script to work is in the `generate()` function. Inside the for loop, we need to find a way to grab the number that the player chose from the slider within the Menu screen. Since we will be referring to the slider as num_of_enemies, we simply need to add `num_of_enemies.value` right after the `<` and before the `;` in the for loop.

Now, head to the Main Camera inspector and locate the Outline script. Notice that there are a lot of empty variables that we need to fill in. First, drag the num_enemies slider from the hierarchy into the "Num_of_enemies" variable. For "Positions", choose "4". Drag the spawn locations in this order starting from Element 0: PlayerLoc → EnemyLoc2 → EnemyLoc1 → EnemyLoc3. Then, drag the Menu GameObject from the hierarchy into the "Opening_screen" variable and the EndScreen GameObject into the "Winner_screen" variable. Next, from the Prefabs folder in the Project window, drag the "enemy1" prefab into the "Enemy 1" variable and the "Nuvi" prefab into the "Player 1" variable.

Next, we need a way to know when the enemies are killed, so that we can have the End screen pop up when there are no enemies left. To do this, we keep a count of how many enemies there are, and this count should go down when an enemy is killed. In the "Outline" script add `public int enemies_left;`. For now add `enemies_left = -1;` in the `Start()` method. Now, let's think of when the enemy gets killed. In what script did we destroy the enemy? If you thought of the "Enemy Behavior" script, then you're right! Open up the "Enemy Behavior" script and add this code above the "OnCollisionEnter2D()" method:

```csharp
  GameObject cam;
  private Outline outline;

  void Start()
  {
      cam = GameObject.Find("Main Camera");
      outline = cam.GetComponent<Outline>();
  }
```

The first line in the Start() method sets the variable "cam" as the "Main Camera" GameObject. The second line grabs the Outline script from "cam" and sets that to the variable "outline". Next, add `outline.enemies_left--;` under `Destroy(gameObject);`. This will subtract 1 from the "enemies_left" variable in the "Outline" script.

Finally, all we need to do is remove all the enemies and Nuvi from the Scene window. This is because we want them to spawn only when we press the start button. Right click on them in the hierarchy and select delete.

Phew... that was a lot, wasn't it? Now try running your game! If all's good, then Congratulations! You made your first ever game! But you're not done yet. Let's try exporting your game so that you can share your game with others!
