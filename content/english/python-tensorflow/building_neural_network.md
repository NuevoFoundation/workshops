---
title: "Building the Neural Network"
date: 2020-09-09T16:19:17-07:00
weight: 6
draft: false
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/ttOhB-w8dt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


This is the first step in building a neural network, which is actually a tool to allow us to do "machine learning". With this tool, we are training a model/computer to analyze various training images/data, likely labeled in advance, and perform and execute a specific task as a result. In our scenario, we are using pre-labeled images of clothing to train our model to correctly predict the type of clothing for any clothing sample we input.

Look at this following website by MIT News for more information: <a href="https://news.mit.edu/2017/explained-neural-networks-deep-learning-0414" target="_blank">news.mit.edu/2017/explained-neural-networks-deep-learning-0414</a>


```python
model = keras.Sequential([ 
    keras.layers.Flatten(input_shape=(28, 28)), 
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10)
])
```

```python
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])
```

