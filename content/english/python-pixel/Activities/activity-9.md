---
title: "Activity 9: Rotate your image"
date: 2020-09-08T00:00:00Z
prereq: "Python Basics, Python Pixels: Colors and Pixels, Python Image manipulation: Open an image"
difficulty: "Intermediate"
weight: 9
draft: false
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/m0d9NT0MEPE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this section, we will start to learn how to rotate your image using pixels.

### Example - Rotate your image 180 degree clock-wise

Let us rotate our cat 180 degrees clock-wise.
<img src="../../media/cat.png" width=50%>

```python
# We need to import PIL package to allow manipulation with pixels.
from PIL import Image

# Open the cat image
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Set up a new image with the half width and height
newimg = Image.new('RGB',(width,height) )

# Set the pixel for the new image
for i in range(width): # For every column
    for j in range(height): # For every row
        # Focus on how we get our heightNew.
        heightNew = height - 1 - j
        
        # Focus on how we get our widthNew.
        widthNew = width - 1 - i

        color = img.getpixel((widthNew, heightNew)) # Get the color from original image
        newimg.putpixel((i,j),color) # Put the color into new image

newimg.save("Mycat.png")
```

Wow! This is our new cat after rotating.
<img src="../../media/catrot.png" width=50%>

{{% notice note %}}

Pay attention to how we get our heightNew and widthNew. Think about those variables carefully and try to visualize them.

For example, try to apply them on the following 4x4 letter group:

<img src="../../media/table.png" width=15%>

Then rotate it 180 degree clockwise and compare it with the previous output. Are they the same?
{{% /notice %}}


### Challenge - Rotate your cat 90 degrees counter-clock-wise

It's now your turn to rotate your cat 90 degrees counter-clockwise! 

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Python-Pixel-Activity9?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
