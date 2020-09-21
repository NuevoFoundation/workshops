---
title: "Building the Neural Network"
date: 2020-09-09T16:19:17-07:00
prereq: "Python Basics: Functions- Built in Functions, Functions from libraries; Data Types- Strings, Numbers, Reading from Console; Data Structures- Lists, Tuples, Sets"
difficulty: Intermediate
weight: 6
draft: false
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/ttOhB-w8dt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


This is the first step in building a neural network, which is actually a tool to allow us to do "machine learning". With this tool, we are training a model/computer to analyze various training images/data, likely labeled in advance, and perform and execute a specific task as a result. In our scenario, we are using pre-labeled images of clothing to train our model to correctly predict the type of clothing for any clothing sample we input.

{{% notice info %}}
### Neural Network





<br>

Take a look at these two images.

![](../media/NN_sneaker_ex1.png)
![](../media/NN_sneaker_ex2.png)

As we can see from these images, we have two sneakers. How do we know this, even though the images themselves and their pixel values vary significantly? Our brain interprets these images by looking at patterns we observed before and says "That is a sneaker!"

And why is this called a sneaker? Everyone at some point has collectively agreed that this is different from other types of shoes because sneakers have laces, long snouts, thick rubber soles, and cover your feet upto your ankles. This is what we were probably told as kids- to identify these types of shoes as sneakers.

How is this relevant to what we are doing next? We will need to tell the computer that these types of images are sneakers. We cannot just hard code these two images as sneakers because this would be ineffective when predicting future inputs using this model. 

Moreover, we don't have to stop with only sneakers to categorize images- we can use multiple categories to classify images (Recall creating the list of different clothing categories in Activity 1). In the end, these are the categories we are using to sort all the clothing apparel.

<br>

#### What is a Neural Network?

The concept of the Neural Network originated from the idea of replicating the human brain, more specifically its ability to recognize patterns. In fact word 'neural' is a derivation of the word 'neuron', which are receptors in the brain that fire off, for example, when it sees an image or an object it recognizes.

In this case, we are training the computer to recognize what each image is (whether its a shoe, a shirt, a bag, etc.), so our main goal of utilizing the neural network in this workshop is to give the computer the ability to classify  images from the dataset into different categories.

<br>

The image below shows a simple implementation of a neural network.
- The input layer is reponsible to feed data into the system, pointing to different neurons to train the model.
- The hidden layer constitutions of many neurons, which are responsible for recognizing the different patterns from the input data. These nodes then point to the output layer.
- The output layer consists of a single node or multiple nodes that return an output value which the model predicts.








![Neural Network Diagram](../media/neural_network.png)

Simply put, a neural network is a system, or an algorithm, that trains the computer to recognize different types of patterns. 

<br>

#### How is related to what we are doing?

{{%notice note%}}
We would recommend looking at the first code block below and the Neural Network diagram to better understand the relationship between them and the following points.
{{%/notice%}}

- The input layer takes the different types of images from the dataset and feeds it into the neurons (the hidden layer).
- The neurons (128 of them) then recognize different patterns in the images by observing different features and the relationships between them and the predetermined categories. This layer gives the computer the ability to categorize images on its own.
- The output layer consists of 10 different nodes, representing the 10 different categories we would sort the images by. Depending on the specific image and the way the computer was trained by the neurons, The output will be the highest predicted category for that particular image.




<br>

Optional:

If you are interested in reading more about Neural Networks, you can check out <a href="https://news.mit.edu/2017/explained-neural-networks-deep-learning-0414" target="_blank">this website</a> by MIT News.
 
<br>
<a href="https://en.wikipedia.org/wiki/Neural_network#/media/File:Neural_network_example.svg" target="_blank">Image Source</a>

{{% /notice %}}


## Copy the following code onto Google Colab:
```python
model = keras.Sequential([ 
    # The first layer (input layer) transforms each image (resolution is 28 x 28 pixels) 
    # into a one dimensional array whose indices correspond to all the pixels in the image.
    keras.layers.Flatten(input_shape=(28, 28)), 
    keras.layers.Dense(128, activation='relu'), #hidden layer
    keras.layers.Dense(10) #output layer
])
```

```python
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])
```


