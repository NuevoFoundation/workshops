---
title: "Interpreting Signal Strength"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

Now that our micro:bit knows how strong the signal it got is, we need to use that to figure out how close we are. Click on the Logic section and grab the "if true then / else" block. Drag that inside the radio received block, just under where we set the strength variable. Go back into the Logic section and drag the 0 = 0 comparison on top of the true on the "if true then" line. You code should now look like this:

![Workspace with if/then/else statement added to event block](../img/addedLogic.png)

Next, we'll tell our micro:bit computer how to tell whether we're 6 feet (2 meters) apart. Open the variables menu and select the bubble that just says "strength" and drag that on top of the first zero in our if block so it says `if strength = 0 then`. Now, click on the equal (=) sign to make a list of different symbols appear. Choose the greater than (>) symbol. Lastly, click on the last zero in our if statement and replace it with `-67`. Your pink "on radio received" block should now look like this:

![Workspace with if/then/else statement added to event block](../img/completedCondition.png)

You might be wondering: "Why -67? That seems like a random number." -67 dBm (that's decibel-milliwatts) just happens to be the power level we already measured ahead of time when two micro:bits are 6 feet apart. Different Bluetooth radios, like the one in your phone, might have a different strength at the same distance. The closer your signal is to 0, the stronger it is and the closer you are to the other radio. A signal strength farther from 0 is weaker, meaning you're probably also farther from the radio.

That means if the signal we get is stronger than -67 dBm (`strength > -67`), our micro:bit radios are less than 6 feet away from each other. But if the signal is weaker than that, our radios must be more than 6 feet apart.
