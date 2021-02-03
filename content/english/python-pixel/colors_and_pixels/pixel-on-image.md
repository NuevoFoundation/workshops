---
title: "Pixels on an Image"
draft: false
weight: 2
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/WvDHBwyM6_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pixels 

Pixels are a small area of color on a display screen. Images are formed by pixels on the screen. We can manipulate pixels by changing the **RGB Value**, which are essentially changing the value of red, green and blue color on each pixels. When we see the an image on the screen, it is made of huge numbers of tiny pixel. Each tiny pixels has its only unique position and color it displays.

<div style="width:80%;padding-left:20%;">
    <table>
        <td>
            <img src="../../media/nuvi.png" width=100%>
        </td>
        <td>
            <img src="../../media/pixel-nuvi.png" width=100%>
        </td>
    </table>
</div>


For information about how to open and save images in Python, see more on these pages: 

<a href="../../../image-manipulation/project-overview/" target="blank">Import PIL</a><br/>
<a href="../../../image-manipulation/open-image/" target="blank">Open an Image</a>


## Making images using pixels

```python
# Remember to import Image
from PIL import Image

Image.new(mode, size)
Image.new(mode, size, color)
```

`Image.new()` creates a new image with the given mode and size (and optionally, the color).  Here, we can use `RGB` as mode. Size is a `(width, height)` value of an image. Color is the RGB Color of the pixels. We can also use color names rather than RGB values. If you do not initialize color value, the image is filled with black.

## Let's see some examples

```python
# Remember to import Image
from PIL import Image
img = Image.new('RGB', (200,100),(100,100,100))
img.save('pil_grey.png')
```
The variable `img` stores the PNG image that looks like this: 

![alt text](../../media/grey.png "Image showing pixels first example")

```python
# Remember to import Image
from PIL import Image
img=Image.new('RGB', (200,100),"black")
img.save('pil_black.png')
```
Here, specifying `black` as the RGB color creates and stores the PNG image that looks like this:

![alt text](../../media/black.png "Image showing pixels second example")

## Changing a pixel in an image 

What if we want to put another pixel in an image? 

The function `img.putpixel( (x,y), (r, g, b))` puts a new pixel on the image with the given position and color. Position is a `(width, height)` value of that pixel's location on the image. Color is the RGB Color of that pixel.

## Let's see an example

```python
# Remember to import Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
img.putpixel( (100,50), (0, 0, 0))
img.save('pil_black-dot.png')
```

After creating a 200x100 yellow image, the `putpixel` function puts a tiny small dot in the middle of this yellow block.  This is one small pixel - in fact, it's so small you may have to expand the image to actually see it!

![alt text](../../media/black-dot.png "image showing pixels third example")

