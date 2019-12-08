---
title: "Activity 10 - Random colors"
date: 2019-07-25T13:24:17-07:00
weight: 13
draft: false
---

# Activity 10 - Randomizing the color of your mandala flower petals

![mandala flower with random color petals](https://paper-attachments.dropbox.com/s_F078714AB8FA59FD292476DB5E3304D54CD817148B6A8087A90D63D6C59A7C0D_1563989900782_mandala+colors.PNG)

We’ve successfully set the color of the mandala flower to an RGB value. Now, let's explore changing the color of the individual mandala flower petals? 

We will make use of python’s `random` library. The `random.randint()` method allows us to choose a random value for each of the red, green, or blue value. To choose a value that is between 0 inclusive and 256 exclusive (in other words, between 0 and 255 inclusive), we need to use `random.randint(0, 256)`.

Use `random.randint(0, 256)` three times to produce three random values, and plug them into the `turtle.color()` method. You should now be able to see a multi-colored mandala flower! This is definitely a flower from which Alex would be interesting in collecting nectar!

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity10?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Congratulations! You helped Alex make a honeycomb and a flower! He can now happily live in his beehive, and make lots of honey! Your final image should look something like this:

![final product](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563991731125_final_image.png)
