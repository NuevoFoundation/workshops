---
title: "Challenge: Design new elements"
date: 2020-09-08T00:00:00Z
weight: 3
draft: false
---

<hr/>
Reviewing details in how to use loops, you can actually design your own elements on the colorboard. You can design your own logo or anything you want on this color board. Here is an example we provided for you. 

#### Example 1
make a <b>N</b> on your color board.
```python
#This creates the original colorboard.
from PIL import Image
img = Image.new('RGB', (60, 30), 'white')
#This uses nested while loop to change the colorboard.
for x in range(10, 15):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))
for x in range(30, 35):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))
for y in range(5, 25):
  for x in range(10+(y-5), 15+(y-5)):
    img.putpixel( (x,y), (255, 211, 0))
img.save('pixel-activity2.png')
```
This is the result of the code
![alt text](../../media/Activity3_ex.png "image showing activity3 example")
<br/><br/>

<hr/>

### Design your own element!

<hr/>

{{% notice warning %}}
**Be careful:** In order to see your image, please click on top left cornor (which says 'Files'), and then click on the image file to see the result.
{{% /notice %}}

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Python-Pixel-Activity3?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>