---
title: "Activity 8: Flip your image"
date: 2020-09-08T00:00:00Z
weight: 8
draft: false
---

<hr/>
In this section, we will start to learn how to flip your image using pixels.
Before starting this section, it is recommended that you review the following sections:
<br/>
- <a href="../../colors_and_pixels/pixel-on-image" target="blank">Pixel on image</a>
<br/>
- <a href="../../../python-basics/conditional-statements-loops" target="blank">Conditions and Loops</a>
<br/>
<hr/>

#### Example - Flip your image up-side-down
Let us flip the cute cat up side down.
<img src="../../media/cat.png" width=50%>
{{% notice note %}}

Flip the image up-side-down is same as creating a symmetrical image with respect to the `horizontal central line`, which is the black line in the following image.

{{% /notice %}}

<img src="../../media/cathori.png" width=50%>

```python
#We need to import PIL package to manipulation with pixels.
from PIL import Image
#Open the cat image
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Set up a new image with the half width and height
newimg=Image.new('RGB',(width,height) )
#Set the pixel for the new image
for i in range(width):         # For every col
    for j in range(height):    # For every row
            # Focus on how we get our heighNew.
            heightNew = height - 1 - j
            color = img.getpixel( (i, heightNew) ) #get the color from original image
            newimg.putpixel((i,j),color) # put the color into new image
newimg.save("Mycat.png")

```
Wow! This is our new cat after flipping.
<img src="../../media/flipcat.png" width=50%>
<hr/>
{{% notice note %}}

Pay attention to the how we get `heightNew`:
<br/>
`heightNew = height - 1 - j`
<br/>
This is the key point for flipping the cat up-side-down. You can draw some simple pictures by hand to visualize the code we used above.
<br/>
Remember our original code mainly is:
```python
width=img.size[0]
height=img.size[1]
for i in range(width):         # For every col
    for j in range(height):    # For every row
            # Focus on how we get our heighNew.
            heightNew = height - 1 - j
            color = img.getpixel( (i, heightNew) ) #get the color from original image
            newimg.putpixel((i,j),color)) # put the color into new image
```
<br/>
<br/>
For example, try to apply these pieces of code on the following 4x4 letter group:

<img src="../../media/table.png" width=15%>

Then create the symmetrical output with respect to horizontal central line and compare it with the previous output. Are they the same?
{{% /notice %}}

#### Challenge - Flip your cat from left to right
It's now your turn to flip your cat from left to right! Exciting！
{{% notice note %}}

Flip the image from left to right is same as creating a symmetrical image with respect to the `vertical central line`.
<br/>
Pay attention to variable wdithNew and think carefully about how to get it.

{{% /notice %}}

{{% notice warning %}}
**Be careful:** In order to see your image, please click on top left corner (which says 'Files'), and then click on the image file to see the result.
{{% /notice %}}
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Python-Pixel-Activity8?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
<br/><br/>
