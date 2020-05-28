---
title: "Open an image"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 19
--- 

To change an image, we must open an image. We can use the <b>Pillow Image</b> module we just imported in the setup.
Let’s first find some images to open. Find an image of your choice and download it. Once you have downloaded it, navigate back to your repl.it window and upload your image by clicking on the three dots and selecting ‘upload file’.

For example, to upload the cat.jpg file:

![alt text](../media/upload_file.png "image showing how to upload a file")

You should see the JPG file on the left side once you’ve uploaded it. Note, your image may have a different extension. 

Next step is to open that image within code. There are functions within the <b>Pillow Image</b> module we imported that allow us to do this.

To open and show the image you downloaded, do the following:

<pre>
    image = Image.<font color="blue">open</font>("cat.jpg")
    image.save("myCat.jpg")
</pre>

If you are using a different image, then make sure you put the name of the file within the quotes. The code above opens the JPG image and stores that image in the variable image. To check that the image variable has the image, we can then save it as a new image. This way the image will show in the window.

Hit run and see your image appear! My image looks like this:

![alt text](../media/cat.png "cat")
