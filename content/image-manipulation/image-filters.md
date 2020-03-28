---
title: "Image Filters"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 21
--- 

I want to turn my cat black and white! Let's do this by using the <b>Pillow ImageFilter</b> function <b>filter()</b> & <b>convert()</b>.

To use the <b>filter()</b> function, you can specify the ImageFilter type within the parentheses. For example, <b>image.filter(ImageFilter.BLUR) </b> will make the image blurry. Or, if you use <b>ImageFilter.CONTOUR</b> instead, it will add a ‘sketch’ type effect to your image.

Add something like this below your previously added code

<pre>
    blurredImage = image.filter(ImageFilter.BLUR) blurredImage.save("myCatBlurred.jpg")
</pre>

You should see the saved cat image is blurred. Try this with a few other image filters until you find one you like!

My blurred and rotated image now looks like this:
![alt text](../media/blurred_upside_down.png "blurred cat upside down")

Next, I want to make my image black and white. To do this, we can use the convert() function. To use this function, you can specify the mode you want to convert your image to. The most common ones are "L", which converts an image to greyscale, and “RGB” which converts an image to its true color.

Let’s try it out like this:

<pre>
    greyscaleImage = image.convert("L")
    greyscaleImage.save("myCatBW.jpg")
</pre>

My cat now looks something like this – purrfect!
![alt text](../media/bw_upside_down.png "blurred black and white cat upside down")