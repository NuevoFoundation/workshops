---
title: "Rotate the image"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 20
prereq: "Python Basics: Repl.it, Writing to Console (Print), Comments, Data Types - Strings, Numbers, Booleans, Variables, Reading from Console, Functions"
difficulty: Intermediate
--- 

Now that we have the image in our code, let’s turn it in different directions. To do that, let’s look at the <b>Pillow Image</b> function <b>rotate()</b>.

The rotate image works using angles. For example, <b>rotate(45)</b> will tilt your picture sideways by 45 degrees. Using <b>rotate(90)</b> will turn your picture sideways.

Let’s give that a try! Let’s rotate the image before we save it:

```python
image = Image.open("cat.jpg")
image.rotate(90)
image.save("myCat.jpg")
```

Hmm, the picture didn’t seem to rotate. Why? Well, the image we opened is saved in the image variable. When we rotate the picture, we don’t save the rotated picture in any variable, so our code doesn’t save the rotated image.

Let’s do this instead:

```python
image = Image.open("cat.jpg")
image = image.rotate(90)
image.save("myCat.jpg")
```

#### Challenge

Can you turn this image all the way around? Can you turn the image 3/4ths of the
way around without using an angle > 180? (Hint: try using negative angle numbers!)

Rotated all the way around, my image looks like this:

<!-- ![alt text](../media/upside_down.jpg "cat upside down") -->
<img src="../media/upside_down.jpg" alt="cat upside down" style="width:50%"/>

