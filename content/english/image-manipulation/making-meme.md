---
title: "Making a meme!"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 22
prereq: "Python Basics: Replit, Writing to Console (Print), Comments, Data Types - Strings, Numbers, Booleans, Variables, Reading from Console, Functions"
difficulty: Intermediate
--- 

So now that my image looks how I want it to look, I want to add some text. We can do that by utilizing the `Pillow ImageDraw` module. Let’s import that at the top of our file along with our other import statements.

```python
from PIL import Image
from PIL import ImageFilter
from PIL import ImageDraw
```

To allow us to add text, we must redraw the same image we used earlier for image manipulation. Let’s do that using the `draw()` function, which takes in an image object. Once the image is drawn, we can then add text to it by using the `text()` method to set the text of the image. The text is drawn based on coordinates provided. The function takes in two mandatory parameters: the xy coordinates and the text needed.

For example:

```python
drawnImage = ImageDraw.Draw(greyscaleImage)
drawImage.text((400,1200), "Whatchu doing? Coding?")
greyscaleImage.save("myCatWithText.jpg")
```


My image now looks like this:
<img src="../media/meme.jpg" alt="blurred black and white cat upside down with text that says `whatchu doing? coding?`" style="width:50%"/>

### Hmm, the text seems really small!

You can see that the text in the image created above is in a small, default font.  There are other parameters within the `text()` method you can use. Specifically, we can set the font! To do so, we need to use something called **TTF file**, which defines a font for us.

To start, you can use the font we use in this workshop: <a href="../media/Roboto-Bold.ttf" download>Click to download.</a>

To use this font, you can do the following:
1. Upload the TTF file to Replit in the same place as your code. 
2. In your `main.py` file, we need to add a few more things to use the font within our meme.  First, at the top of the file, add another `import` line to use the `ImageFont` library.    
```python
from PIL import Image
from PIL import ImageFilter
from PIL import ImageDraw
from PIL import ImageFont
```
1. Further down in the code, where you are adding the text to the image, you want to add another line in between to set the font, then pass that font into the `text()`  function.

For example:

```python
drawnImage = ImageDraw.Draw(greyscaleImage)
font = ImageFont.truetype(font = 'Roboto-Bold.ttf', size=75)
drawImage.text((400,1200), "Whatchu doing? Coding?", font=font)
greyscaleImage.save("myCatWithText.jpg")
```

Once I rerun my code, my image now looks like this:
<img src="../media/meme_font.jpg" alt="blurred black and white cat upside down with text saying `whatchu doing? coding?` with bigger font" style="width:50%"/>

{{% notice tip %}}

### Want to pick your own font? 

Take a look at the <a href="https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#PIL.ImageDraw.PIL.ImageDraw.ImageDraw.text" target="_blank">documentation</a> and see if you can change the font and the font size, as well as the color of the text! 

Changing the font requires downloading a .ttf (aka a font file) from online. A good place to find fonts is <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>. What you need to do is:

1. Find a font you like (i.e., Roboto). Click the font, and then click "Download Family" at the top right. 
   <img src="../media/googlefont_download.png" alt="google font family download" style="width:80%"/>
2. A ZIP file will be downloaded locally.  Open or extract the folder, find a font you want to use (i.e., Roboto Bold) and upload that file (TTF) to replit.  
   <img src="../media/googlefont_upload.png" alt="google font family upload" style="width:50%"/>

{{% /notice %}} 


<!-- ### Challenge 
You can see that the text in the image created above is in a small, default font. There are other parameters within the <b>text()</b> method you can use. Take a look at the [documentation](https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#PIL.ImageDraw.PIL.ImageDraw.ImageDraw.text) and see if you can change the font and the font size, as well as the color of the text! 

{{% notice note %}}

This will require downloading a .ttf (aka a font file) from online! Ask for help if you have any questions.

{{% /notice %}} -->
