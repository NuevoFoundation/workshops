---
title: "Making a meme!"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 22
prereq: "Python Basics: Repl.it, Writing to Console (Print), Comments, Data Types - Strings, Numbers, Booleans, Variables, Reading from Console, Functions"
difficulty: Intermediate
--- 

So now that my image looks how I want it to look, I want to add some text. We can do that by utilizing the <b>Pillow ImageDraw</b> module. Let’s import that at the top of our file along with our other import statements.

<pre>
    <font color="blue">from</font> PIL <font color="blue">import</font> Image
    <font color="blue">from</font> PIL <font color="blue">import</font> ImageFilter
    <font color="blue">from</font> PIL <font color="blue">import</font> ImageDraw
</pre>

To allow us to add text, we must redraw the same image we used earlier for image manipulation. Let’s do that using the <b>draw()</b> function, which takes in an image object. Once the image is drawn, we can then add text to it by using the <b>text()</b> method to set the text of the image. The text is drawn based on coordinates provided. The function takes in two mandatory parameters: the xy coordinates and the text needed.

For example:

<pre>
    drawnImage = ImageDraw.Draw(greyscaleImage)
    drawnImage.text((200,20), "When you realize you learned python in an hour.")
    greyscaleImage.save("myCatWithText.jpg")
</pre>


My image now looks like this:
![alt text](../media/meme.png "blurred black and white cat upside down with text that says `when you realize you learned python in an hour.`")

### Challenge 
You can see that the text in the image created above is in a small, default font. There are other parameters within the <b>text()</b> method you can use. Take a look at the [documentation](https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#PIL.ImageDraw.PIL.ImageDraw.ImageDraw.text) and see if you can change the font and the font size, as well as the color of the text! 

{{% notice note %}}

This will require downloading a .ttf (aka a font file) from online! Ask for help if you have any questions.

{{% /notice %}}
