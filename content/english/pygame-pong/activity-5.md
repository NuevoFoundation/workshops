---
title: "Activity 5 - Declare and use a variable for font"
date: 2019-07-29T13:24:17-07:00
weight: 7
draft: false
---

# Activity 5

Great progress so far! Now let's make use of a variable to change the font of the text in the game.

In this activity, you need to apply your knowledge about variables that you learned in the Python Basics workshop. 

Find `# TODO (ACTIVITY 5)` in the code. Declare the variable `font_label` and assign it the value `'arial'`. Now take a look at this statement in the code `font_name = pygame.font.match_font('arial')`. Can you figure out where in this statement this new variable should be used to control the font displayed on screen?

{{% notice tip %}}

You can get a list of fonts that your computer supports by running `pygame.font.get_fonts()`. Try using a font other than `'arial'`. Which font do you like the most? Press **Run** to view the result.

{{% /notice %}}

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/PongLessonStudent?lite=true" scrolling="no" frameborder="no" alt="Pong Workshop Replit Code" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Takeaway

You have just modified the font parameter by using a variable. If you happen to use the same font at multiple places in your program, you can just modify the variable in one place, and it will take effect everywhere you used the variable!
