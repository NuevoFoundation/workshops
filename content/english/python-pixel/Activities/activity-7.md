---
title: "Activity 7: Change the background of image"
prereq: "Python Basics, Python Image Manipulation: Open an Image, Python Pixel: Colors and Pixels"
difficulty: "Intermediate"
date: 2020-09-08T00:00:00Z
weight: 7
draft: false
---


In this section, we will start to learn how to change the simple background of your image using pixels.

### Example - Change background color
<hr/>

Let us change the background color of Nuvi into pink
<img src="../../media/nuevo.png" width=25%>

```python
from PIL import Image
#Open the cat image
img = Image.open("nuevo.png")
width=img.size[0]
height=img.size[1]
#Set up a new image with width and height
newimg=Image.new('RGB',(width,height) )
#Set the pixel for the new image
colorpink=(244,114,208)
coloryellow=img.getpixel( (0,0) )
for i in range(width):    
    for j in range(height):    
            color = img.getpixel( (i,j) ) #get the color from original image
            if color == coloryellow: #if it is yellow
                newimg.putpixel((i,j),colorpink)# change the color to pink
            else:
                newimg.putpixel((i,j),color)# else stays the same
newimg.save("nuevopink.png")
```
Wow! This is our new Nuvi after changing the background.
<img src="../../media/nuevopink.png" width=25%>
<hr/>

### Challenge - Change background based on your choice
<hr/>

It's now your turn to change whichever color you want on Nuvi! Exciting！
{{% notice warning %}}
**Be careful:** In order to see your image, please click on top left corner (which says 'Files'), and then click on the image file to see the result.
{{% /notice %}}
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Python-Pixel-Activity7?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
<br/><br/>
