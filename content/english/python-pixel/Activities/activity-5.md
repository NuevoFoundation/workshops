---
title: "Activity 5: More advanced filters"
date: 2020-09-08T00:00:00Z
weight: 5
draft: false
---

<hr/>
In the last section, we saw an example on creating a blue filter and thought about how to create the grey filter. Now, let us create our grey filter together.
Before starting this section, it is recommended that you review the following sections:
<br/>
- <a href="../../colors_and_pixels/basic-of-colors" target="blank">Basic of colors</a>
<br/>
- <a href="../../colors_and_pixels/pixel-on-image" target="blank">Pixel on image</a>
<br/>
- <a href="../../activities/activity-4" target="blank">Filters</a>
<br/><br/>
<hr/>

#### Example One - Create a grey filter
Let us change the origin cat below with our grey filter together!!!
<img src="../../media/cat.png" width=50%>
(<b>Hint:</b> We changed the 10th code and achieved the grey filter.)

```python
#We need to import PIL package to manipulation with pixels.
from PIL import Image
#Open the cat image
img = Image.open("cat.png")
#Grey filters
for i in range(img.size[0]):    # for every col:
    for j in range(img.size[1]):    # For every row
            color = img.getpixel( (i,j) )
            #Hightlight: Get color: GREY
            GREY = (color[0] + color[1] + color[2]) // 3
            img.putpixel((i,j),(GREY, GREY, GREY))# set the colour accordingly
#Save the cat after filtering
img.save("Mycat.png")
```
Wow! This is our cat after the grey filter.
<img src="../../media/greyfiltercat.png" width=50%>
<hr/>

#### Example - Partial filter
Now, let us think about how to add filter on only part of our lovely cat.
{{% notice warning %}}
**Be careful:** In order to see your image, please click on top left corner (which says 'Files'), and then click on the image file to see the result.
{{% /notice %}}

```python
#We need to import PIL package to manipulation with pixels.
from PIL import Image
#Open the cat image
img = Image.open("cat.png")
#Grey filters
for i in range((img.size[0] // 2)):    # for first-half cols:
    for j in range((img.size[1] // 2)):    # For first-half rows
            color = img.getpixel( (i,j) )
            #Hightlight: Get color: GREY
            GREY = (color[0] + color[1] + color[2]) // 3
            img.putpixel((i,j),(GREY, GREY, GREY))# set the colour accordingly
#Save the cat after filtering
img.save("Mycat.png")
```
Wow! This is our cat after the filter. We only filtered one-forth of the cat on the upper left corner！
<img src="../../media/partialfilter.png" width=50%>
<hr/>

#### Challenge - Create your own partial filter
It's now your turn to filter whichever part you want with different kinds of filters on the cute cat! Exciting！
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Python-Pixel-Activity5-2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
<br/><br/>
