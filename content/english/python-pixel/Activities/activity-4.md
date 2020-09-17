---
title: "Activity 4: Create Basic Filter"
date: 2020-09-08T00:00:00Z
weight: 4
draft: false
---

<hr/>
We have already talked about that the image on the screen is made of pixels. Now we can start to learn how to design your own filter on the image. Here are some examples of how to design a basic filter on your image.
To prepare for the coming section, it is recommended that you review how to open and save an image.
<br/><br/>
You can jump to a specific section to review them:
<br/>
- <a href="../../../image-manipulation/open-image" target="blank">Open image</a>
<br/>
- <a href="../../../python-basics/data-structures" target="blank">List, sets, and tuples</a>
<br/>
- <a href="../../colors_and_pixels/pixel-on-image" target="blank">Pixel on image</a>
<br/>
- <a href="../../colors_and_pixels/basic-of-colors" target="blank">Basic of colors</a>
<br/>
<hr/>

#### Example
<img src="../../media/cat.png" width=50%>
We want to add a blue filter on the cute cat above. Let's observe how to achieve that.

```python
#We need to import PIL package to manipulation with pixels.
from PIL import Image
#Open the cat image
img = Image.open("cat.png")
#Blue filters
for i in range(img.size[0]):    # for every col:
    for j in range(img.size[1]):    # For every row
            color = img.getpixel( (i,j) )
            img.putpixel((i,j),(0, 0, color[2])) # set the colour accordingly
#Save the cat after filtering
img.save("Mycat.png")
```
Wow! This is our cat after the blue filter.
<img src="../../media/bluefiltercat.png" width=50%>
<br/><br/>

#### Challenge
Following the example above, try to create your own filters with different colors.
{{% notice warning %}}
**Be careful:** In order to see your image, please click on top left cornor (which says 'Files'), and then click on the image file to see the result.
{{% /notice %}}
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Python-Pixel-Activity4?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
Finally, please think about and try to create a grey filter. We will talk about how to create a grey filter in the next section.
