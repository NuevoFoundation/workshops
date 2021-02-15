---
title: "Activity 10: Making a meme!"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 10
prereq: "Python Basics, Python Pixels: Colors and Pixels, Python Image manipulation: Open an image"
difficulty: "Intermediate"
--- 

One other thing we can do to enhance our image is to add text. We can do that by utilizing the <b>Pillow ImageDraw</b> module. Let’s import that at the top of our file along with our other import statements.

<pre>
    <font color="blue">from</font> PIL <font color="blue">import</font> Image
    <font color="blue">from</font> PIL <font color="blue">import</font> ImageFilter
    <font color="blue">from</font> PIL <font color="blue">import</font> ImageDraw
</pre>

To allow us to add text, we must redraw the same image we used earlier. Let’s do that using the <b>draw()</b> function, which takes in an image object. Once the image is drawn, we can then add text to it by using the <b>text()</b> method to set the text of the image. The text is drawn based on coordinates provided. The function takes in two mandatory parameters: the xy coordinates and the text needed.

For example:

<pre>
    drawnImage = ImageDraw.Draw(img)
    drawnImage.text((200,20), "When you realize you learned python in an hour.")
    drawnImage.save("myCatWithText.jpg")
</pre>


My image now looks like this:
<img src="../../media/meme.png" alt="blurred black and white cat upside down with text that says `when you realize you learned python in an hour.`" width=50%>

### Challenge - Change the font
You can see that the text in the image created above is in a small, default font. There are other parameters within the <b>text()</b> method you can use. Take a look at the [documentation](https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#PIL.ImageDraw.PIL.ImageDraw.ImageDraw.text) and see if you can change the font and the font size, as well as the color of the text! 

{{% notice note %}}

This will require downloading a .ttf (aka a font file) from online! Ask for help if you have any questions.

{{% /notice %}}
