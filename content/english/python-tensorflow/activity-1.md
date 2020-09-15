---
title: "Activity 1 - Importing the Tensorflow library and datasets"
date: 2020-09-09T16:19:17-07:00
weight: 2
draft: false
---


<iframe width="100%" height="600px" src="https://www.youtube.com/embed/OxDn2xDXWi4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


The first thing we have to do is to import the tensorflow library in order to use functions that will allow us to train your model.

We will also be implementing plots to visualize the prediction of our model, so for that we need to import the following libraries:

 
```python
# Importing TensorFlow and tf.keras libraries

import tensorflow as tf
from tensorflow import keras 

# Helper libraries for statistics and plotting

import numpy as np
import matplotlib.pyplot as plt 
```

 Now, we want to load the Fashion NMIST dataset, which has the collection of all the images of clothing we need for your model. 

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

The next step is to create a list of categories under the variable class_names. 

{{% notice note %}}
Feel free to use any variable you like, but keep in mind that we will be using this name for future activities.
{{% /notice  %}}


Your supervisor gives you the categories of apparel that the warehourse processes. This will be created under the variable `class_names`. 
Feel free to use any variable you like, but keep in mind that we will be using this name for future activities.

{{% notice tip %}}
### Question 1
Write the following class names in an array class_names:

T-shirt/top

Trouser

Pullover

Dress

Coat

Sandal

Shirt

Sneaker 

Bag

Ankle boot

{{% /notice %}}


<a href="https://workshops.nuevofoundation.org/python-basics/data-structures/lists/" target="_blank">Not sure how to create a list in python?</a>
