---
title: "Image Filters"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 21
prereq: "Python Basics: Repl.it, Writing to Console (Print), Comments, Data Types - Strings, Numbers, Booleans, Variables, Reading from Console, Functions"
difficulty: Intermediate
--- 

I want to turn my cat black and white! Let's do this by using the `Pillow ImageFilter` function `filter()` & `convert()`.

To use the `filter()` function, you can specify the ImageFilter type within the parentheses. For example, `image.filter(ImageFilter.BLUR) ` will make the image blurry. Or, if you use `ImageFilter.CONTOUR` instead, it will add a ‘sketch’ type effect to your image.

Add something like this below your previously added code

```python
blurredImage = image.filter(ImageFilter.BLUR) 
blurredImage.save("myCatBlurred.jpg")
```

You should see the saved cat image is blurred. Try this with a few other image filters until you find one you like!

I want to make my image a little extra blurry, so I'm going to use `ImageFilter.BoxBlur(15)` as my filter instead of `ImageFilter.BLUR`. My blurred and rotated image now looks like this:
<img src="../media/blurred_upside_down.jpg" alt="cat blurred upside down" style="width:50%"/>

Next, I want to make my image black and white. To do this, we can use the `convert()` function. To use this function, you can specify the mode you want to convert your image to. The most common ones are `"L"`, which converts an image to greyscale, and `“RGB”` which converts an image to its true color.

Let’s try it out like this:

```python
greyscaleImage = image.convert("L")
greyscaleImage.save("bwBlurredCat.jpg")
```

My cat now looks something like this – **purrfect!**
<img src="../media/bw_upside_down.jpg" alt="blurred black and white cat upside down" style="width:50%"/>