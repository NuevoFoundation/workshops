---
title: "Activity 7 - Define the key combination to exit the game"
date: 2019-07-29T13:24:17-07:00
weight: 9
draft: false
---

# Activity 7
Time for the final activity in this workshop; yay! You have done an awesome job getting here. You should be proud of yourself!

In this activity, you need to change the way the game exits anytime a given key combination is pressed. 

Find `// TODO (ACTIVITY 7)` in the code. The Pygame library gives you a handy way by using `event` to detect what keystrokes are being pressed anytime during the life of program. 
Currently the game exits by pressing the `'BACKSPACE'` key. Change it so the game exits when the  `'ESC'` key is pressed on the keyboard.

{{% notice tip %}}

If the value of `'BACKSPACE`' key in Pygame library is `K_BACKSPACE`, then can you guess the value of the `'ESC` key? Give it few tries before you ask for help. 
Press **run** to confirm the result.

{{% /notice %}}

## Takeaway 
You have just changed the way game exits by listening for a specific key press.
