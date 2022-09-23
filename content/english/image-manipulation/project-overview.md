---
title: "Project Overview"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 18
prereq: "Python Basics: Replit, Writing to Console (Print), Comments, Data Types - Strings, Numbers, Booleans, Variables, Reading from Console, Functions"
difficulty: Intermediate
--- 

Applications like Instagram and Snapchat allow its users to modify their images. For example, you can rotate your image and make it black and white. Ever wondered how these apps do it? The answer is using code!

Today, we’re going to learn how to do some image manipulations using Python!

### Setting up the project

To get started let’s start with importing a module. What does that mean? To do fun stuff with images, we need to unlock some functions to use. To get these functions we need to import a module. In this case if we import the module `Pillow`, we can use some functions that will help us modify images.

Firstly, let’s delete everything in the `main.py` file. Then, add the following statements:

```python
from PIL import Image
from PIL import ImageFilter
```

Once you hit run, you should see the module being installed in the console:

![alt text](../media/installed_module.png "image of what you should see when you successfully install the module")

If you see the above, it means you have successfully imported a module! If you’re hitting issues, please ask for help before moving on.

{{% notice note %}}

If you’re curious to see what functions there are in the Pillow Image module, you find information about it here: https://pillow.readthedocs.io/en/latest/handbook/index.html.

{{% /notice %}}
