---
title: "Basics of colors"
draft: false
weight: 3
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/-ior2GcSYa4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Basics of Colors
While going through all kinds of pictures online, have you ever questioned how those pictures got their colors? Actually, computers have *RGB* *mode* to represent colors.

## RGB format
In Python, we follow a specific format when defining colors:
(R, G, B), where "R", "G", and "B" are all integers. "R" represents some amount of <span style="color:red; font-weight:bold"> red</span>, "G" represents some amount of <span style="color:green; font-weight:bold"> green</span>, and "B" represents some amount of <span style="color:blue; font-weight:bold"> blue</span>. 

 The color represented by (R, G, B) is what we get from "the mix of" different amounts of red, green and blue.

<!-- For accessibility, use this label HTML -->
<label for="colorpicker">You can click the line below and choose the colors you want on the color board to observe their RGB values:</label>
<input type="color" id="colorpicker">

{{% notice tip %}}
*What do we mean by the "mix of colors"?*

Here we are using different amounts of red, green and blue light to get a new color of light. Just like we use different amounts of pigments while painting, we are mixing different amounts of lights to create different colors of light.  Pigments use the primary colors of red, yellow and blue, whereas computers use primary colors of red, green and blue light. 

This picture represents very approximately how colors mix up:
<img src="../../media/colors.svg.png" alt="Color representation showing how red, green, and blue light mix together" width="50%">

Just as we should not use too much pigment, there is also limitation for representing colors. The maximum integer we can use to represent each amount of color is 255 and the minimum integer we can use to represent each amount of color is 0. This is defined in RGB mode.

In all the following materials, "color" means "the color of the light".
{{% /notice %}}


## Q&A
1. Which color does (0, 0, 0) represent?

<center>
<label for="colorpickerQ1">Try it out:</label> </br>
<input type="color" id="colorpickerQ1"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Show Answer" %}}
Black. All colors are of 0%. (There is no color here. The whole world is so dark. It is black!)
<img src="../../media/black.png" alt="Black color sample" width="40%">
</br>
{{% /showanswer %}}

2. Which color does (255, 255, 255) represent?

<center>
<label for="colorpickerQ2">Try it out:</label> </br>
<input type="color" id="colorpickerQ2"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Show Answer" %}}
White. 255 represents that you are using 100% of each color, which is saturate. (When all colors are saturate, you will get white)
<img src="../../media/white.png" alt="White color sample" width="40%">
</br>
{{% /showanswer %}}

3. Which color does (100, 100, 100) represent?

<center>
<label for="colorpickerQ3">Try it out:</label> </br>
<input type="color" id="colorpickerQ3"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Show Answer" %}}
Gray. 100 / 255 % = 39.2%. You will get gray by adding up 39.2% of red, 39.2% of blue, and 39.2% of green.
<img src="../../media/grey.png" alt="Gray color sample" width="40%">
</br>
{{% /showanswer %}}

*Note: Don't panic if you feel confused here, we will explain more about these ideas in python code activities later in the workshop.*
<br/><br/>

## Built-in colors

In Python, most commonly used colors are prepared for you. When you need to refer to a color, just do:
```python
color = 'color name'
```
For example:
Red:
```python
color = 'red'
# The following code is used to show you the color you get.
# You can skip these lines for now and we will explain them in the next page!
img = Image.new('RGB', (60, 30), color)
img.save('red.png')
img.show('red.png')
```
The following is your output:
<img src="../../media/whileloopbefore.png" alt="Red color output example" width="60%">
Amazing! You get red!
