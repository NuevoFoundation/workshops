---
title: "Access pixels on image "
draft: false
weight: 3
---

<hr/>

We have already learned how to make an pure color image using pixels and change a pixel on the image. Then, we will learn how to make additions based on the existing images. 

* For information about how to use lists and tuples in Python. See more on these pages: <br/>
<a href="../../../python-basics/data-structures/" target="blank">Data Structure</a><br/>

<br/><br/>


#### <b> Get image data </b>
<hr/>

```python
# Remember to import Image
from PIL import Image
Image.size
Image.size[0]
Image.size[1]
```
`Image.size` gives a `(width, height)` value of image. `Image.size[0]`gives the width of the image, and `Image.size[1]`gives the height of the image.
<br/><br/>

#### Let's see some examples

```python
# Remember to import Image
from PIL import Image
img=Image.new('RGB', (200,100),(100,100,100))
print(img.size)
print(img.size[0])
print(img.size[1])
```
output:<br/>
(200, 100)<br/>
200<br/>
100<br/>
<br/><br/>
<br/><br/>

#### <b> Get pixel on image </b>
<hr/>

`img.getpixel(x,y)` get a Color value at a certain position. Position is a `(width, height)` value of that pixel. Color is the RGB Color of that pixel. 
<br/><br/>

#### Let's see an example

```python
# Remember to import Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
color=img.getpixel((100,50))
print(color)
```
output:<br/>
(255, 255, 0)<br/>

<br/><br/>
<br/><br/>

#### <b> Get RGB value on a pixel </b>
<hr/>

Each RGB color gives a tuple value `(red, green, blue)` of pixel. `Color[0]`gives the red value of the pixel, `Color[1]`gives the green value of the pixel, and `Color[2]`gives the blue value of the pixel.
<br/><br/>


#### Let's see an example

```python
# Remember to import Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
color=img.getpixel((100,50))
print(color[0])
print(color[1])
print(color[2])
```
output:<br/>
255<br/>
255<br/>
0<br/>
