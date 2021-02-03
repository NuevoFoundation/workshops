---
title: "Activity 5: More advanced filters"
date: 2020-09-08T00:00:00Z
prereq: "Python Basics, Python Pixels: Colors and Pixels, Python Image manipulation: Open an image"
difficulty: "Intermediate"
weight: 5
draft: false
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/deYXkPt58co" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
  
In the last section, we saw an example of creating a blue filter and thought about how to create the grey filter. Now, let us create our grey filter together.

### Example - Create a grey filter

Let us change the original cat image below with our grey filter together! 

<img src="../../media/cat.png" width=50%>

```python
# We need to import PIL package to allow manipulation with pixels.
from PIL import Image

# Open the cat image
img = Image.open("cat.png")

# Grey filters
for i in range(img.size[0]): # For every col:
    for j in range(img.size[1]): # For every row
        color = img.getpixel( (i,j)) # Get color 
        GREY = (color[0] + color[1] + color[2]) // 3 # Average the pixel values
        img.putpixel((i,j),(GREY, GREY, GREY)) # Set the color accordingly

# Save the cat after filtering
img.save("Mycat.png")
```

{{% notice tip %}}
Remember, to set a grey pixel all three values of RGB have to be the same.  However, setting each pixel to the same random value (ex. 200) will make the whole image grey, rather than just adding a filter on top of the existing cat image.  

How can we best figure out how to set a pixel to be the 'greyed' version of it? We can take an average of each value of the RGB colors. You can use // to do an integer division, which guarantees that the result of the average operation is a whole number. 

{{% /notice %}}

Wow! This is our cat after the grey filter.
  
<img src="../../media/greyfiltercat.png" width=50%>

### Example - Partial filter

Now, let us think about how to add filter on only part of our lovely cat.

```python
# We need to import PIL package to allow manipulation with pixels.
from PIL import Image

# Open the cat image
img = Image.open("cat.png")

# Grey filters
for i in range((img.size[0] // 2)): # For first-half columns
    for j in range((img.size[1] // 2)): # For first-half rows
        color = img.getpixel((i,j)) # Get color
        GREY = (color[0] + color[1] + color[2]) // 3 # Average the pixel values
        img.putpixel((i,j),(GREY, GREY, GREY)) # Set the colour accordingly

#Save the cat after filtering
img.save("Mycat.png")
```

Wow! This is our cat after the filter. We only filtered one-forth of the cat on the upper left corner！

<img src="../../media/partialfilter.png" width=50%>

### Challenge - Create your own partial filter

It's now your turn to filter whichever part you want with different kinds of filters on the cute cat! Exciting！

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Python-Pixel-Activity5?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
