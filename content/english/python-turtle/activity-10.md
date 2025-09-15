---
title: "Activity 10 - Randomizing the color of your mandala flower petals"
date: 2019-07-25T13:24:17-07:00
weight: 13
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/u7PMmNbOyXg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

![alt text width="70%"](../media/mandala-color.png "mandala flower with random color pedals")

We’ve successfully set the color of the mandala flower to an RGB value. Now, let's explore changing the color of the individual mandala flower petals? 

We will make use of python’s `random` library. The `random.randint()` method allows us to choose a random value for each of the red, green, or blue value. To choose a value that is between 0 inclusive and 256 exclusive (in other words, between 0 and 255 inclusive), we need to use `random.randint(0, 256)`.

Use `random.randint(0, 256)` three times to produce three random values, and plug them into the `turtle.color()` method. You should now be able to see a multi-colored mandala flower! This is definitely a flower from which Alex would be interested in collecting nectar!

<iframe src="https://trinket.io/embed/python/64ab3455ae" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
<br>
<br>

Congratulations! You helped Alex make a honeycomb and a flower! He can now happily live in his beehive, and make lots of honey! Your final image should look something like this:

![alt text width="70%"](../media/turtle-honeycomb-flower.png "final product")
