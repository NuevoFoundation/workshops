---
title: "Activity 2: Modify your color board"
date: 2020-07-11T00:00:00Z
weight: 2
draft: false
---

<hr/>

### Examples for modifying colorboard
<hr/>

#### Example 1
make a <b>diagonal</b> on your color board.
```python
#This creates the original colorboard.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
#This uses nested while loop to change the picture.
x = 0
y = 0
while x < 10:
 while y < 20:
   img.putpixel( (x,y), (0, 0, 0))
   x += 1
   y += 1
img.save('pil_red.png')
```
This is the picture before changing.
![alt text](../../media/whileloopbefore.png "image showing while loop first example")
This is the picture after changing.
![alt text](../../media/whileloopafter.png "image showing while loop first example")
<br/><br/>
<hr/>

#### Example 2
make a <b>rectangle</b> on your color board.

```python
#This creates the original colorboard.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
#This uses nested for loop to change the picture.
for x in range(10, 30):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))
img.save('pil_redmodified.png')
```
This is the picture before changing.
![alt text](../../media/whileloopbefore.png "image showing for loop first example")
This is the picture after changing.
![alt text](../../media/forloopafter.png "image showing for loop first example")

<br/><br/>

<hr/>

### Modifying your own colorboard!

<hr/>

{{% notice warning %}}
**Be careful:** In order to see your image, please click on top left cornor (which says 'Files'), and then click on the image file to see the result.
{{% /notice %}}

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Python-Pixel-Activity2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
