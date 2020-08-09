---
title: "Activity 5 - Declare and use a variable for font"
date: 2019-07-29T13:24:17-07:00
weight: 7
draft: false

---

# Activity 5
Great progress so far! Now lets make use of a variable to control font value. 

In this activity you need to apply the knowledge about variables you learnt in Python basics. 

Find `// TODO (ACTIVITY 5)` in the code. Declare a variable `font_label`, assign it the value `'arial'`. Now take a look at statement in code `font_name = pygame.font.match_font('arial')`. Can you figure out the place in this statement where you should use this new variable to control the font displayed on screen ? 

{{% notice tip %}}

You can get different fonts supported in your system by running `pygame.font.get_fonts()`. Try using a different font than `'arial'`.
Confirm the result after pressing **run**.

{{% /notice %}}


## Takeaway 
You have just modified font parameter by using a variable. If you happen to use same font at multiple places in your program, then you can just modify variable at one place and it will take effect at all places where you have used that variable.