---
title: "Activity 6: Crop Image"
prereq: "Python Basics, Python Image Manipulation: Open an Image, Python Pixel: Colors and Pixels"
difficulty: "Intermediate"
date: 2020-09-08T00:00:00Z
weight: 6
draft: false
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/X2AoHSdQOLo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this section, we will start to learn how to crop your image.

### Example - Crop cat into half

Now, let us crop out the right half of the cat image
  
<img src="../../media/cat.png" width=50%>

```python
# We need to import PIL package to allow manipulation with pixels.
from PIL import Image

# Open the cat image
img = Image.open("cat.png")
width = img.size[0] 
height = img.size[1] 

# Set up a new image with the half width and height
newimg = Image.new('RGB', (width // 2, height))

# Set the pixels for the new image
for i in range(width // 2):    
    for j in range(height): # For every row
        color = img.getpixel((i,j)) # Get the color from original image
        newimg.putpixel((i,j),color) # Put the color into new image

newimg.save("Mycat.png")
```

Wow! This is our cat after the cropping. We cropped right half of the image!

<img src="../../media/halfcat.png" width=25%>

### Example - Crop out the central piece

Let us crop the cat image to have only the center part!

<img src="../../media/cat.png" width=50%>

```python
# We need to import PIL package to allow manipulation with pixels.
from PIL import Image

# Open the cat image
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Set up a new image with the half width and half height
newimg = Image.new('RGB', (width // 2, height // 2))

# Set the pixel for the new image
for i in range(width // 4, (width // 4) * 3): # Let's get the first 1/4th width of the image to last 1/4th width of the image    
    for j in range(height // 4, (height // 4) * 3): # For every row
        color = img.getpixel((i,j)) # Get the color from original image
        newimg.putpixel((i - width // 4, j - height // 4), color) # Put the color into new image

newimg.save("Mycat.png")
```

Wow! This is our cat after cropping.
<img src="../../media/cropcat.png" width=25%>

### Challenge - Crop image based on your own choice

It's now your turn to crop whichever part you want on the cute cat! Exciting！
<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/Python-Pixel-Activity6?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
