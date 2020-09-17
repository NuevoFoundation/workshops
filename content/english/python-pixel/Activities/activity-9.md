---
title: "Activity 9: Rotate your image"
date: 2020-09-08T00:00:00Z
weight: 9
draft: false
---

<hr/>
In this section, we will start to learn how to rotate your image using pixels.
Before starting this section, it is recommended that you review the following sections:
<br/>
- <a href="../../colors_and_pixels/pixel-on-image" target="blank">Pixel on image</a>
<br/>
- <a href="../../../python-basics/conditional-statements-loops" target="blank">Conditions and Loops</a>
<br/>
<hr/>

#### Example - Rotate your image 180 degree clock-wise
Let us rotate this cute cat 180 degree clock-wise.
<img src="../../media/cat.png" width=50%>

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
            # Focus on how we get our widthNew.
            widthNew = width - 1 - i
            color = img.getpixel( (widthNew, heightNew) ) #get the color from original image
            newimg.putpixel((i,j),color) # put the color into new image
newimg.save("Mycat.png")
```
Wow! This is our new cat after rotating.
<img src="../../media/catrot.png" width=50%>
<hr/>

{{% notice note %}}

Pay attention to how we get our heightNew and widthNew. Think about them carefully and try to visualize them.
<br/>
For example, try to apply them on the following 4x4 letter group:

<img src="../../media/table.png" width=15%>

Then rotate it 180 degree clock-wise and compare it with the previous output. Are they the same?
{{% /notice %}}

#### Challenge - Rotate your cat 90 degree counter-clock-wise
It's now your turn to rotate your cat 90 degree counter-clock-wise! Exciting！
{{% notice warning %}}
**Be careful:** In order to see your image, please click on top left corner (which says 'Files'), and then click on the image file to see the result.
{{% /notice %}}
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Python-Pixel-Activity9?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
<br/><br/>
