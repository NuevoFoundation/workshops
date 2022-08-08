---
title: "Activity 7 - Define the key combination to exit the game"
date: 2019-07-29T13:24:17-07:00
weight: 9
draft: false
---

# Activity 7

Time for the final activity in this workshop; yay! You have done an awesome job getting here. You should be proud of yourself!

In this activity, you need to change the way the game exits anytime a given key combination is pressed. 

Find `# TODO (ACTIVITY 7)` in the code. The Pygame library gives you a handy way to detect what keystrokes are being pressed while the program is running by using `event` . 
Currently the game exits when the `'BACKSPACE'` key is pressed or when the whole window is closed. Change it so that the game exits when the `'ESC'` key is pressed on the keyboard.

{{% notice tip %}}

If the value of the `'BACKSPACE'`' key in Pygame library is `K_BACKSPACE`, can you guess the value of the `'ESC'` key? Give it a few tries before you ask for help. You can do it!
Press **Run** to confirm the result.

{{% /notice %}}

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/PongLessonStudent?lite=true" scrolling="no" frameborder="no" alt="Pong Workshop Replit Code" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Takeaway

You have just changed the way game exits by watching for a specific key press.
