---
title: "Pixels on Image"
draft: false
weight: 2
---

### Pixels
<hr/>

**Pixels** is a small area of color on a display screen. Images are formed by pixels on the screen. We can manipulating pixels by changing the **RGB Value**, which are essentially changing the value of red, green and blue color on each pixels. When we see the an image on the screen, it is just made of numbers of tiny pixels. Each tiny pixels has its only unique position and color it displays.

<img src="../../media/pixel-mario.png" width=50%>
For information about how to open and save images in Python. <br/>
See more on these pages: <br/>
<a href="../../../image-manipulation/project-overview/" target="blank">Import PIL</a><br/>
<a href="../../../image-manipulation/open-image/" target="blank">Open an Image</a>
<br/><br/>
<br/><br/>



#### <b> Making image using pixels </b>
<hr/>

```python
# Remember to import Image
from PIL import Image
Image.new(mode, size)
Image.new(mode, size, color)
```
`Image.new()` creates a new image with the given mode and size. Here, we only use `RGB` as mode. Size is a `(width, height)` value of image. Color is the RGB Color of that pixels. We can also use color names. If you do not initialize color value, the image is filled with black.
<br/><br/>

#### Let's see some examples

```python
# Remember to import Image
from PIL import Image
img=Image.new('RGB', (200,100),(100,100,100))
img.save('pil_grey.png')
```
output:
![alt text](../../media/grey.png "image showing pixels first example")
```python
# Remember to import Image
from PIL import Image
img=Image.new('RGB', (200,100),"black")
img.save('pil_black.png')
```
output:
![alt text](../../media/black.png "image showing pixels second example")

<br/><br/>
<br/><br/>

#### <b> Changing a pixel in image </b>
<hr/>

`img.putpixel( (x,y), (r, g, b))` put a new pixel with the given position and color. Position is a `(width, height)` value of that pixel. Color is the RGB Color of that pixels. 
<br/><br/>

#### Let's see an example

```python
# Remember to import Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
img.putpixel( (100,50), (0, 0, 0))
img.save('pil_black-dot.png')
```
output:
![alt text](../../media/black-dot.png "image showing pixels third example")
You can see a tiny small dot in the middle of this yellow block, this is one small pixel.


