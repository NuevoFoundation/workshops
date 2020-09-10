---
title: "Basics of colors"
draft: false
weight: 1
---

## Basics of Colors
While going through all kinds of pictures online, have you ever questioned how do those pictures get their colors? Actually, computers have *RGB* *mode* to represent colors.
<br/><br/>
### RGB format
In python, we follow a specific format while defining colors:
(R, G, B), where "R", "G", and "B" are all integers. "R" represents some amount of red, "G" represents some amount of green, and "B" represents some amount of blue. (Think of the abbreviations for red, blue and green. The color represents by (R, G, B) is what we get from "the mix of" different amount of red, green and blue.
#### Notes:
1. Let us ask ourselves what do we mean by "the mix of color"? Here we are using different amount of red, green and blue light to get a new color of light. Just like we use different amount of pigments while painting. But remember, we are mixing lights but not pigments, and red, green and blue are three primary color in light. (Red, yellow and blue are three primary color of pigments.)
<br/><br/>
This picture represents very approximately how colors mix up:
![alt text iframe height="600px" width="40%"](../../media/colors.svg.png "color representation")
2. Just as we should not use too much pigments, there is also limitation for represent colors. The maximum integer we can use to represent each amount of color is 255 and the minimum integer we can use to represent each amount of color is 0. This is defined in RGB mode.
3. In all the following materials, "color" mean "the color of the light".
#### Q&A
1. Which color does (100, 100, 100) represent?
Gray. 100 / 255 % = 39.2%. You will get gray by adding up 39.2% of red, 39.2% of blue, and 39.2% of green.
![alt text height="600px" width="40%"](../../media/grey.png "gray")
2. Which color does (255, 255, 255) represent?
White. 255 represents that you are using 100% of each color, which is saturate. (When all colors are saturate, you will get white)
![alt text height="600px" width="40%"](../../media/white.png "white")
3. Which color does (0, 0, 0) represent?
Black. All colors are of 0%. (There is no color here. The whole world is so dark. It is black!)
![alt text height="600px" width="40%"](../../media/black.png "black")
<br/><br/>
*Note: Don't panic if you feel confused here, we will prove these questions in python codes later in the workshop.*
<br/><br/>
<br/><br/>
### Built-in colors
In Python, most commonly used colors are prepared for you. When you need to refer to a color, just do:
```python
color = 'color name'
```
For example:
Red:
```python
color = 'red'
#The following code are used to show you the color you get.
#You can skip them for now and we will explain them in the next page!
img = Image.new('RGB', (60, 30), color)
img.save('red.png')
img.show('red.png')
```
The following is your output:
![alt text](../../media/whileloopbefore.png "red")
Amazing! You get red!
