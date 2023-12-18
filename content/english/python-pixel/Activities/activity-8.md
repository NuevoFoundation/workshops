---
title: "Activity 8: Flip your image"
date: 2020-09-08T00:00:00Z
prereq: "Python Basics, Python Pixels: Colors and Pixels, Python Image manipulation: Open an image"
difficulty: "Intermediate"
weight: 8
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jx_b8111WW0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this section, we will start to learn how to flip your image using pixels.

### Example - Flip your image upside down

Let us flip the cat upside down.
<img src="../../media/cat.png" width=50%>

{{% notice note %}}

Flipping the image upside down is the same as creating a symmetrical image with respect to the `horizontal central line`, which is the black line in the following image.

{{% /notice %}}

<img src="../../media/cathori.png" width=50%>

```python
# We need to import PIL package to manipulation with pixels.
from PIL import Image

# Open the cat image
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Set up a new image with the same width and height
newimg = Image.new('RGB', (width,height))

# Set the pixel for the new image
for i in range(width): # For every column
    for j in range(height): # For every row
        heightNew = height - 1 - j # Get the new height location of the pixel.
        color = img.getpixel( (i, heightNew) ) # Get the color from original image
        newimg.putpixel((i,j),color) # Put the color into new image

newimg.save("Mycat.png")
```

Wow! This is our new cat after flipping.

<img src="../../media/flipcat.png" width=50%>

How did we figure out how to set `heightNew`? In the above code we have:

`heightNew = height - 1 - j`

This is the key point for flipping the cat upside down. This takes the height of the image and subtracts 1 as well as the current pixel height location (j).  We subtract 1 for indexing; remember that computers start counting at '0' instead of '1'.  We subtract the current pixel height location to get location of where the new pixel should be.

You can draw some simple pictures by hand to visualize this.

Remember our original code mainly is:

```python
width = img.size[0]
height = img.size[1]

# Set up a new image with the same width and height
newimg = Image.new('RGB', (width,height))

# Set the pixel for the new image
for i in range(width): # For every column
    for j in range(height): # For every row
        heightNew = height - 1 - j # Get the new height location of the pixel.
        color = img.getpixel( (i, heightNew) ) # Get the color from original image
        newimg.putpixel((i,j),color) # Put the color into new image
```

For example, try to apply this code on the following 4x4 letter group:

<img src="../../media/table.png" width=15%>

Then create the symmetrical output with respect to horizontal central line and compare it with the previous output. Are they the same?

### Challenge - Flip your cat from left to right

It's now your turn to flip your cat from left to right! 
  
{{% notice note %}}

Flip the image from left to right is same as creating a symmetrical image with respect to the `vertical central line`.

Pay attention to the variable `widthNew` and think carefully about how to set it.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity8" target="_blank">Launch Replit</a>

