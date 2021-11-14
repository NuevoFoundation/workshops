---
title: "Activity 1 - Importing the TensorFlow library and datasets"
date: 2020-09-09T16:19:17-07:00
prereq: "Python Basics: Functions- Built in Functions, Functions from libraries; Data Types- Strings, Numbers, Reading from Console; Data Structures- Lists"
difficulty: Intermediate
weight: 2
draft: false
---


<iframe width="100%" height="600px" src="https://www.youtube.com/embed/OxDn2xDXWi4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The first thing we have to do is to import the TensorFlow library in order to use functions that will allow us to train your model.

We will also be implementing plots to visualize the prediction of our model, so for that we need to import the following libraries:

```python
# Importing TensorFlow and tf.keras libraries

import tensorflow as tf
from tensorflow import keras 

# Helper libraries for statistics and plotting

import numpy as np
import matplotlib.pyplot as plt 
```

These libraries are essential as they are a collection of precompiled methods and functions that and importing them into our program allows us to access these methods without having to rewrite these entire libraries. For example, we import the methods and functions to TensorFlow and NumPy to avoid having to write the entirety of these program within our own program.

 Now, we want to load the Fashion MNIST dataset, which has the collection of all the images of clothing we need for your model. 

```python
#This variable is declared from the fashion_mist library of the datasets section

fashion_mnist = keras.datasets.fashion_mnist 
```

```python
#This loads four variables from the dataset. 
#The train_images and train_labels are data that the model uses to learn
#The test_images and test_labels are used by the model to compare against.

(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data() 
```
<br>

The next step is to create a list of categories under the variable `class_names`. 

Your supervisor gives you the categories of apparel that the warehouse processes. This will be created under the variable `class_names`. 

{{% notice tip %}}

<a href="https://workshops.nuevofoundation.org/python-basics/data-structures/lists/" target="_blank">Not sure how to create a list in Python?</a>

### Question 1

Write the following class names in the list `class_names`:

- T-shirt/top
- Trouser
- Pullover
- Dress
- Coat
- Sandal
- Shirt
- Sneaker
- Bag
- Ankle boot

{{% /notice %}}

{{% notice info %}}
### Optional Reading

If you are interested in learning about these libraries in more detail, feel free to visit the following websites. 

<a href="https://www.tensorflow.org/overview" target="_blank">Learn about TensorFlow</a>

<a href="https://www.w3schools.com/python/numpy_intro.asp" target="_blank">Learn about NumPy</a>

<a href="https://matplotlib.org/" target="_blank">Learn about Matplotlib</a>

{{% /notice %}}
