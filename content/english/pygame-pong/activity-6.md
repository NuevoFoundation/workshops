---
title: "Activity 6 - Fix the 'if' condition to track correct score."
date: 2019-07-29T13:24:17-07:00
weight: 8
draft: false
---

# Activity 6

You have come a long way - we hope that you are enjoying this workshop!2

In this activity, you need to apply your knowledge of 'if' control structures you learned in the Python basics workshop. 

Find `# TODO (ACTIVITY 6)` in the code. We have created an `'if'` block with a wrong condition for tracking the score when the right paddle misses the ball on purpose. This not only causes the wrong score to be displayed on screen - it also causes the ball to move in an erratic manner. Can you figure out what condition the `'if'` block should check for when the right paddle misses the ball? Ask the person next to you or the workshop staff if you need help.

{{% notice tip %}}

You may need to check the boundary value for the horizontal position (represented by the x-axis) of the ball when the right paddle misses it. Can you guess what value it should be? Press **Run** to check your guess.

{{% /notice %}}

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/PongLessonStudent?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Takeaway

You have just fixed a condition for checking boundary values when the ball moves horizontally out of the game boundary.
