---
title: "Activity 1: Create a color board"
prereq: "Python Basics, Python Image Manipulation: Open an Image, Python Pixels: Colors and Pixels"
difficulty: "Intermediate"
date: 2020-07-11T00:00:00Z
weight: 1
draft: false
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/Nz3Uz4kBoUU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Example for basic colorboard
<hr/>

Here is an example of how to make a color board with color red, width of 60, length of 30.

```python
#This is the example for creating a colorboard.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
```
![alt text](../../media/whileloopbefore.png "image showing activity one first example")

<br/><br/>

<hr/>

### Create your own colorboard!

<hr/>

Choose your favorite and make a color board to play with! Here are some example colors you can choose from, you can also find your own color.

<img src="../../media/Color-chart.png" width=30%>

Also you can use color picker to choose a color.
<input type="color">

{{% notice warning %}}
**Be careful:** In order to see your image, please click on top left corner (which says 'Files'), and then click on the image file to see the result.
<div style="width:100%">
    <table>
        <td>
            <img src="../../media/open-file1.png" width=100%>
        </td>
        <td>
            <img src="../../media/open-file2.png" width=100%>
        </td>
    </table>
</div>
{{% /notice %}}

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Python-Pixel-Activity1?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
