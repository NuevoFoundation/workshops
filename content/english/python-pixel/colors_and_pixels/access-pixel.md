---
title: "Access pixels on image"
draft: false
weight: 3
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/ydP3GVHLGR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## More about pixels

We have already learned how to make a pure color image using pixels and change a pixel on the image. Now, we will learn how to identify pixels in existing images.

* For information about how to use lists and tuples in Python see more on these pages: 
<a href="../../../python-basics/data-structures/" target="blank">Data Structure</a>

## Get image data 

```python
# Remember to import Image
from PIL import Image
Image.size
Image.size[0]
Image.size[1]
```
`Image.size` gives a `(width, height)` value of an image. `Image.size[0]` gives the width of the image and `Image.size[1]` gives the height of the image.

## Let's see an example

```python
# Remember to import Image
from PIL import Image
img=Image.new('RGB', (200,100),(100,100,100))
# Let's print out the image details:
print(img.size) 
print(img.size[0])
print(img.size[1])
```

The above code will print out:  
```  
(200, 100)  
200  
100  
```
Here the image size is 200 by 100.  The width is 200, the height is 100.

## Get pixel information

`img.getpixel(x,y)` will get a Color value at a certain position. Position is a `(width, height)` value of that pixel. Color is the RGB Color of that pixel.

## Let's see an example

```python
# Remember to import Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
color=img.getpixel((100,50))
# Let's print out the pixel color
print(color)
```

The above code will print out:   
```
(255, 255, 0)
```

## Get RGB value of a pixel 

Each RGB color gives a tuple value `(red, green, blue)` of a pixel. `Color[0]` gives the red value of the pixel, `Color[1]` gives the green value of the pixel, and `Color[2]` gives the blue value of the pixel.

#### Let's see an example

```python
# Remember to import Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
color=img.getpixel((100,50))
# Let's pring out the RGB value of a pixel
print(color[0])
print(color[1])
print(color[2])
```

The above code will print out:   
```
255
255
0
```
Here the RGB value breaks down so that red has a value of 255, green has a value of 255, and blue has a value of 0.  