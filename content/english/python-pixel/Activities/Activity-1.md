---
title: "Activity 1: Create a color board"
prereq: "Python Basics, Python Image Manipulation: Open an Image, Python Pixels: Colors and Pixels"
difficulty: "Intermediate"
date: 2026-04-25T00:00:00-07:00
weight: 1
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nz3Uz4kBoUU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Example for basic colorboard

Here is an example of how to make a color board with the color red, a width of 60, and a length of 30.

```python
#This is the example for creating a colorboard.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
```
<img src="../../media/whileloopbefore.png" alt="Image showing activity one first example" width="60%">

## Create your own colorboard!

Choose your favorite color and make a color board to play with! Here are some example colors you can choose from, but you can also pick your own color.

<img src="../../media/Color-chart.png" alt="Color chart showing example RGB colors" width="30%">

<!-- For accessibility, use this label HTML -->
<label for="colorpicker">You can use color picker to choose a color:</label>
<input type="color" id="colorpicker">

{{% notice warning %}}
 In order to see your image, please click on top left corner (which says 'Files'), and then click on the image file to see the result.
<div style="width:70%">
    <table>
        <td>
            <img src="../../media/open-file1.png" alt="Click Files in the left panel" width="100%">
        </td>
        <td>
            <img src="../../media/open-file2.png" alt="Click the image file to see results" width="100%">
        </td>
    </table>
</div>
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity1" target="_blank">Launch Replit</a>
