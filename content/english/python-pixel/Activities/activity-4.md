---
title: "Activity 4: Create Basic Filter"
date: 2020-09-08T00:00:00Z
prereq: "Python Basics, Python Pixels: Colors and Pixels, Python Image manipulation: Open an image"
difficulty: "Intermediate"
weight: 4
draft: false
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/jA6xNqAhb1o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Now that we understand more about pixels and images, we can start to learn how to design your own filter on the image. Let us see some examples on how to design a basic filter on your image.

### Example for blue filter

<img src="../../media/cat.png" width=50%>
We want to add a blue filter on the cute cat above. Let's see how to achieve that.

```python
# We need to import PIL package to allow manipulation with pixels.
from PIL import Image

# Open the cat image
img = Image.open("cat.png")

# Let's add the blue filter
for i in range(img.size[0]): # For every column
    for j in range(img.size[1]): W# For every row
        color = img.getpixel( (i,j) )
        img.putpixel((i,j),(0, 0, color[2])) # Set the color accordingly

#Save the cat after filtering
img.save("Mycat.png")
```

Wow! This is our cat after the blue filter.
<img src="../../media/bluefiltercat.png" width=50%>

{{% notice tip %}}
How did this work? Let's look at the loop: 

```python
for i in range(img.size[0]): # For every column
    for j in range(img.size[1]): # For every row
        color = img.getpixel( (i,j) ) # Get the current pixel
        img.putpixel((i,j),(0, 0, color[2])) # Set the color accordingly
```

We start by going through the image, by each column and each row, to get each pixel.  It then gets the current color value of the pixel.  To set a blue filter to that pixel, all we're doing is setting the 'Red' and 'Green' RGB values to 0.  Therefore, only the 'Blue' values remain! 

{{% /notice %}}


### Challenge - Create your own filter

Following the example above, try to create your own filters with different colors.
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Python-Pixel-Activity4?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Finally, please think about and try to create a grey filter. We will talk about how to create a grey filter in the next section.
