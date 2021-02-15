---
title: "Receiving a Message"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

Now that we're sending messages and listening for them, we need to use that information to find out how close together or far apart our micro:bits are. To do that, we need to know how strong the signal we're receiving is. Go back into the Radio section and this time drag the "on radio received (receivedNumber)" block and drag it to an empty spot on your workspace. It should not be inside of any other block.

This block tells our micro:bit to do something whenever it gets a number sent to it from another micro:bit.

!["On radio received" block added to the workspace](../img/onRadioReceived.png)

Next, click on the red Variables section then click on "Make a Variable...". In the text box, type in "strength" as the name for your new variable, then click "Ok ✔".

![MakeCode menu showing the Variables section selected](../img/makeVariable.png)
![The variable name pop-up window](../img/variableModal.png)

Now, go back to the Variables menu and drag "set strength to 0" inside of the pink "on radio received (receivedNumber)" block. Then go back to the Radio menu and drag "received packet (signal strength)" on top of the `0️` in "set strength to 0️". When you're done, your workspace should look something like this:

![Workspace with on start, forever, and received packet blocks filled in](../img/savedRSSI.png)

Variables are simply places we can store information with a friendly name to make it clear what's stored inside. So, by creating a variable called `strength`, what we're doing is setting aside some space to store a value, in this case the measured signal strength from the message we received. We can then simply use the name `strength` anywhere we want to check the current value inside or compare it against something else. If we get a new message later with a stronger or weaker signal, the value of `strength` gets updated to that new value automatically. Hence the "on radio received" block: every time we get a new message, the value of `strength` is updated to the latest signal strength without you having to do anything manually.
