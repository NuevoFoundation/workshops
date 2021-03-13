---
title: "Activity 5 - Declare and use a variable for font"
date: 2019-07-29T13:24:17-07:00
weight: 7
draft: false

---

# Activity 5
Great progress so far! Now let's make use of a variable to change the font of the text in the game.

In this activity, you need to apply the knowledge about variables you learned in Python basics. 

Find `// TODO (ACTIVITY 5)` in the code. Declare the variable `font_label`, assign it the value `'arial'`. Now take a look at this statement in the code `font_name = pygame.font.match_font('arial')`. Can you figure out the place in this statement where you should use this new variable to control the font displayed on screen? 

{{% notice tip %}}

You can get different fonts supported in your system by running `pygame.font.get_fonts()`. Try using a different font than `'arial'`. Which font do you like best? Press **run** to view the result.

{{% /notice %}}

## Takeaway 
You have just modified the font parameter by using a variable. If you happen to use the same font at multiple places in your program, you can just modify the variable in one place, and it will take effect everywhere you used the variable!
