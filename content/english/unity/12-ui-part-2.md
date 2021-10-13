---
title: "12. Making the UI: Part 2"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 13
---

## End Screen

Next, we want to make an end screen that will be displayed once Nuvi defeats all the aliens. Most of this process will be very similar to how you made the Menu Screen!

Under "Canvas", create "UI" → "Image" like you did for the starting Menu, and this time rename it to "EndScreen". Resize to the same size as Menu.

Create "UI" → "Text" under EndScreen, rename it "EndMessage", and type in whatever you like — this message is going to be displayed when Nuvi defeats all the aliens and the game ends! In our example, we said: "You defeated all the Aliens and helped Nuvi save the Universe!"

Now we want our player to be able to replay the game once they finish. Create "UI" → "Button" under EndScreen. Like you did for the StartButton, expand Button to find the Text object, and rename it to "ReplayButton". Edit the text so it shows "Replay".

But like the Start button, clicking on this Replay button doesn't do anything yet. Make another script in your Scripts folder and name this "RestartScene".

This time, instead of just making the EndScreen disappear, we want to reload everything: the starting Menu, Nuvi, and the aliens that Nuvi defeated. Copy and paste the below code into your script:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class RestartScene : MonoBehaviour
{
   public void restart()
   {
       Scene scene = SceneManager.GetActiveScene();
       SceneManager.LoadScene(scene.name);
   }
}
```

{{< notice tip >}}
To reload everything, we use Scenes; but to do so, you need to have `using UnityEngine.SceneManagement;` declared under the usual 3 lines.
{{< /notice >}}

Drag and drop this script from the Scripts folder into the ReplayButton inspector. In the OnClick() box, click on the "+" and like you did for the StartButton, drag the ReplayButton object into the box saying "None (Object)". Then, find and select the restart() function from the RestartScene script.
