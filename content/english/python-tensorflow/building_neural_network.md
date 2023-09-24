---
title: "Building the Neural Network"
date: 2020-09-09T16:19:17-07:00
prereq: "Python Basics: Functions- Built in Functions, Functions from libraries; Data Types- Strings, Numbers, Reading from Console; Data Structures- Lists, Tuples, Sets"
difficulty: Intermediate
weight: 6
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ttOhB-w8dt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This is the first step in building a **neural network**, which is actually a tool that allows us to do **"machine learning"**. With this tool, we are training a program to analyze images or data, otherwise known as **training data**. 
Then after training, we can ask the program to perform and execute a specific task using what it learned. For example, let's say we train a program with dog and cat pictures, and we provide the program with the correct identification of the images. Once trained, we can ask the computer to identify if a picture of my pet Whiskers is of a cat or dog. 

In our scenario, we are using pre-labeled images of clothing to train our model. Then, we want the program to correctly predict the type of clothing an input may be.

## Recognizing Patterns and Grouping Items

Take a look at these two images.

![Black and white sneaker with white sole](../media/NN_sneaker_ex1.png)
![Black sneaker](../media/NN_sneaker_ex2.png)

As we can see from these images, we have two sneakers. They are both different images and their pixel values vary significantly, but we can still categorize them as sneakers. How do we do this? Our brain interprets these images by looking at patterns that we observed previously and establishes, "That is a sneaker!"

And why is this called a sneaker? Everyone at some point has collectively agreed that this is different from other types of shoes because sneakers have laces, long snouts, thick rubber soles, and cover your feet up to your ankles. This is what we were probably told as kids - to identify these types of shoes as sneakers.

How is this relevant to what we are doing next? We will need to tell the computer that these types of images are sneakers. We cannot just mark these two images as sneakers because this would be ineffective when predicting future inputs using this model. 

Moreover, we don't have to stop with only sneakers to categorize images - we can use multiple categories to classify images (Recall creating the list of different clothing categories in Activity 1). In the end, these are the categories we are using to sort all the clothing apparel.

## What is a neural network?

The concept of a **neural network** originated from the idea of replicating the human brain, more specifically its ability to recognize patterns. In fact, the word 'neural' is a derivation of the word 'neuron', receptors in the brain that fire off when, for example, it sees an image or an object it recognizes.

In this case, we are training the computer to recognize what each image is (whether it's a shoe, a shirt, a bag, etc.), so our main goal of utilizing the neural network in this workshop is to give the computer the ability to classify images from the dataset into different categories.

The image below shows a simple implementation of a neural network.

- The input layer is reponsible for feeding data into the system, pointing to different neurons to train the model.
- The hidden layer consists of many neurons, which are responsible for recognizing the different patterns from the input data. These nodes then point to the output layer.
- The output layer consists of a single node or multiple nodes that return an output value which the model predicts.

![Neural Network Diagram](../media/neural_network.png)

Simply put, a neural network is a system, or an algorithm, that trains the computer to recognize different types of patterns. 

## How is related to what we are doing?

{{% notice note %}}
We would recommend looking at the first code block below and the neural network diagram to better understand the relationship between them and the following points.
{{% /notice %}}

- The input layer takes the different types of images from the dataset and feeds it into the neurons (the hidden layer).
- The neurons (128 of them) then recognize different patterns in the images by observing different features and the relationships between them and the predetermined categories. This layer gives the computer the ability to categorize images on its own.
- The output layer consists of 10 different nodes, representing the 10 different categories we would sort the images by. Depending on the specific image and the way the computer was trained by the neurons, the output will be the highest predicted category for that particular image.

{{% notice note %}}

If you are interested in reading more about neural networks, you can check out <a href="https://news.mit.edu/2017/explained-neural-networks-deep-learning-0414" target="_blank">this website</a> by MIT News.
 
<a href="https://en.wikipedia.org/wiki/Neural_network#/media/File:Neural_network_example.svg" target="_blank">Image Source</a>

{{% /notice %}}

Copy the following code into your Google Colab Notebook:

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

{{% notice note %}}
Don't worry if you don't see any output after running this code. This is expected.
{{% /notice %}}