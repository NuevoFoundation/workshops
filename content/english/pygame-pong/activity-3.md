---
title: "Activity 3 - Change the key assignment to move left paddle"
date: 2019-07-29T13:24:17-07:00
weight: 5
draft: false
---

# Activity 3
Kudos! You not only fixed the game boundary, you are able to give color to objects too. Now let's see if you can change the keys for paddle movement. 

To do this, we need to modify one of the parameters we pass to create the left paddle object. Remember, from basics section how you defined the `Paddle` class with UP and DOWN key assignments as its attributes. 

Find `// TODO (ACTIVITY 3)` in the code. Modify the appropriate attribute value for the left paddle so that pressing the 's' key moves the left paddle down. Notice that currently the downward movement of the left paddle is controlled by the 't' key. 

{{% notice tip %}}

<h5>Feel free to experiment with the UP key to accept a different key. Confirm the result after pressing <b>run</b>.</h5>

{{% /notice %}}

## Takeaway 
You have just modified `down_key` attribute in `Paddle` class to influence how the left paddle object should move in screen. 