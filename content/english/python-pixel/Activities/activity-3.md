---
title: "Activity 3: Challenge: Design new elements"
prereq: "Python Basics, Python Image Manipulation: Open an Image, Python Pixels: Colors and Pixels"
difficulty: "Intermediate"
date: 2020-09-08T00:00:00Z
weight: 3
draft: false
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/YkxNH1TWjR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Using loops, you can actually design your own elements on the colorboard. You can design your own logo or anything you want on this color board. Here is an example we provided for you.


### Example: make an N.

```python
#This creates the original colorboard.
from PIL import Image
img = Image.new('RGB', (60, 30), 'white')

#This uses nested while loop to change the colorboard.
#Left vertical line
for x in range(10, 15):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

#Right vertical line
for x in range(30, 35):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

#Central diagonal line
for y in range(5, 25):
  for x in range(10+(y-5), 15+(y-5)):
    img.putpixel( (x,y), (255, 211, 0)) 
img.save('pixel-activity3.png')
```
output:
![alt text](../../media/Activity3_ex.png "image showing activity3 example")


### Design your own element!

{{% notice tip %}}
You can actually design some easy letters, such as H, K, T and etc. You can change the color of a certain part of those letters in order to make it prettier.
{{% /notice %}}

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/Python-Pixel-Activity3?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
