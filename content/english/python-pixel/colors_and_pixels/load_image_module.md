---
title: "Import an image module"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
--- 

### Setting up the project

To do fun stuff with images, we need to unlock some useful functions. To get these functions, we need to import a module. In this case, if we import the module <b>Pillow</b>, we can use some functions that will help us modify images.

First, let’s delete everything in the main.py file. Then, add the following statements:

<pre>
    <font color="blue">from</font> PIL <font color="blue">import</font> Image
    <font color="blue">from</font> PIL <font color="blue">import</font> ImageFilter
</pre>


Once you hit run, you should see the module being installed in the console:

![alt text](../../media/installed_module.png "image of what you should see when you successfully install the module")

If you see the above, it means you have successfully imported a module! If you’re hitting issues, please ask for help before moving on.

{{% notice note %}}

If you’re curious to see what functions there are in the Pillow Image module, you find information about it here: https://pillow.readthedocs.io/en/latest/handbook/index.html

{{% /notice %}}
