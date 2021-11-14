---
title: "Progress Update 1"
date: 2020-09-09T16:19:17-07:00
prereq: "Python Basics: Functions- Built in Functions, Functions from libraries; Data Types- Strings, Numbers, Reading from Console; Data Structures- Lists"
difficulty: Intermediate
weight: 4
draft: false
---


{{% notice info %}}

If you would like to test the following code, visit <a href="https://colab.research.google.com/drive/1ndj0W1P_3uAG-L2a6LwxdJPSHbSK5WE6?usp=sharing" target="_blank">this link</a>

To edit this code, click on the 'Copy to Drive' button to make a personal copy of this notebook. Make sure you are logged in to your Google account.
![](../media/colab_copy.png)

{{% notice warning %}}
### If you are using a Nuevo Google account temporarily
Once you make a copy, please make sure to replace the "Copy of" with your name, along with the file name. This will be on the top left corner of your notebook.
{{% /notice%}}

{{% /notice %}}

{{% notice tip %}}
Before moving on, please check your Google Colab notebook against the code below:

```python
# Importing TensorFlow and tf.keras libraries
import tensorflow as tf
from tensorflow import keras 


# Helper libraries for statistics and plotting
import numpy as np
import matplotlib.pyplot as plt 
```

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

```python
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat', 'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot'  ]
```

```python
plt.figure()
plt.imshow(train_images[0]) #Shows the first image in the data set as a plot or different colored pixels
plt.colorbar() #displays the color bar on the right
plt.grid(False)
plt.show() #displays the entire plot
```

![Ankle Boot](../media/a2q1.png)

```python
plt.figure()
plt.imshow(train_images[7]) #Shows the first image in the data set as a plot or different colored pixels
plt.colorbar() #displays the color bar on the right
plt.grid(False)
plt.show() #displays the entire plot
```

![Shirt](../media/a2progress2.png)

```python
#the train_images and test_images range between values from 0 to 255. 
#To maintain consistency between the training and testing set, we will divide train_images and test_images by 255
train_images = train_images / 255.0 
test_images = test_images / 255.0
```

{{% /notice %}}
