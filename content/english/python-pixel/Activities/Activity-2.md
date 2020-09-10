---
title: "Modify your color broad"
date: 2020-07-11T00:00:00Z
weight: 2
draft: false
---

```python
#This is the example for nested while loop.
#This creates the original picture.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
#This uses nested while loop to change the picture.
x = 0
y = 0
while x < 10:
 while y < 20:
   img.putpixel( (x,y), (0, 0, 0,0))
   x += 1
   y += 1
img.save('pil_red.png')
```
This is the picture before changing.
![alt text](../../../media/whileloopbefore.png "image showing while loop first example")
This is the picture after changing.
![alt text](../../../media/whileloopafter.png "image showing while loop first example")
<br/><br/>
```python
#This is the example for nested for loop
#This creates the original picture.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
#This uses nested for loop to change the picture.
for x in range(10, 30):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0,0))
img.save('pil_redmodified.png')
```
This is the picture before changing.
![alt text](../../../media/whileloopbefore.png "image showing for loop first example")
This is the picture after changing.
![alt text](../../../media/forloopafter.png "image showing for loop first example")
