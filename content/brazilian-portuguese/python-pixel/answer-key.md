---
title: "Answer key - Python-Pixel"
draft: false
hidden: true
---

## Activity1
This is the sample answer for creating a blue color board with width 100 and height 100.
```python
from PIL import Image
width=100
height=100
color='blue'
img = Image.new('RGB', (width, height), color)
img.save('pixel-activity1.png')
```

## Activity2
This is the sample answer to draw a line from the middle of the color board from Activity1 to its bottom right corner.
```python
#Create your color board
from PIL import Image

# setup image first
img = Image.new('RGB', (60, 30), 'red')

initial_position_x = 50
initial_position_y = 50
width = 100
height = 100
color = (0,0,0) #make change here
while initial_position_x < width:
    while initial_position_y < height:
        img.putpixel( (x,y), color)
        initial_position_x += 1
        initial_position_y += 1
img.save('pixel-activity2.png')
```

## Activity3
This is the sample answer to create a H which is colorful.
Refer image to this:
<img src="media/ac3sample.png">

```python
from PIL import Image
img = Image.new('RGB', (60, 30), 'pink')
#This uses nested while loop to change the colorboard.
for x in range(10, 15):
  for y in range(5, 25):
    img.putpixel( (x,y), (255, 255, 255))
for x in range(30, 35):
  for y in range(5, 25):
    img.putpixel( (x,y), (255, 255, 255))
for y in range(12,17 ):
  for x in range(15, 30):
    img.putpixel( (x,y), (255, 230, 20))
img.save('pixel-activity3.png')
```

## Activity4
This is the sample answer to create a green filter.
```python
from PIL import Image
#Open the cat image
img = Image.open("cat.png");
#Blue filters
for i in range(img.size[0]):    # for every col:
    for j in range(img.size[1]):    # For every row
            color = img.getpixel( (i,j) )
            img.putpixel((i,j),(0, color[1], 0))# set the colour accordingly
#Save the cat after filtering
img.save("Mycat.png")
```

## Activity5
This is the sample answer to create a grey filter for the left half of the cat.
```python
from PIL import Image
#Open the cat image
img = Image.open("cat.png")
#Grey filters
for i in range((img.size[0] // 2)):    #for first-half cols:
    for j in range((img.size[1]):    
            color = img.getpixel( (i,j) )
            #Highlight: Get color: GREY
            GREY = (color[0] + color[1] + color[2]) // 3
            img.putpixel((i,j),(GREY, GREY, GREY))# set the color accordingly
#Save the cat after filtering
img.save("Mycat.png")
```

## Activity6
This is the sample answer to crop the right half of the cat.
```python
from PIL import Image
#Open the cat image
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Set up a new image with the half width and height
newimg=Image.new('RGB',(width//2, height) )
#Set the pixel for the new image
for i in range(width//2, width):    
    for j in range(height):    # For every row
            color = img.getpixel( (i,j) ) #get the color from original image
            newimg.putpixel((i,j),color)# put the color into new image
newimg.save("Mycat.png")
```

## Activity7
This is the sample answer to change the background color from yellow to black.
```python
newcolor=(0,0,0)
coloryellow=img.getpixel( (0,0) )
for i in range(width):    
    for j in range(height):    
            color = img.getpixel( (i,j) ) #get the color from original image
            if color == coloryellow: #if it is yellow
                newimg.putpixel((i,j),newcolor)# change the color to black
            else:
                newimg.putpixel((i,j),color)# else stays the same
newimg.save("newnuevo.png")
```

## Activity8
This is the sample answer to flip your cat from left to right.
```python
from PIL import Image
#Open the cat image
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Set up a new image with the half width and height
newimg=Image.new('RGB',(width,height) )
#Set the pixel for the new image
for i in range(width):    
    for j in range(height):    # For every row
            widthNew = width - 1 - i#What should your widthNew be if we want to flip our image from left to right?
            color = img.getpixel( (widthNew, j) ) #get the color from original image
            newimg.putpixel((i,j),color)# put the color into new image
newimg.save("Mycat.png")
```

## Activity9
This is the sample answer to rotate your cat 90 degree counter-clock-wise!.
```python
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Set up a new image with the half width and height
newimg=Image.new('RGB',(height,width) )
#Set the pixel for the new image
for i in range(width):         # For every col
    for j in range(height):    # For every row
            color = img.getpixel( (i, j) ) #get the color from original image
            newimg.putpixel((j, i),color) # put the color into new image
newimg.save("Mycat.png")
```
