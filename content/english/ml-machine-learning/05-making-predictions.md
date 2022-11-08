---
title: "Making Predictions"
prereq: "Python"
icon: ""
draft: false
weight: 5
---

# Training the Model

For our model to be able to predict the correct values we need to train it. But, how do we do that, well we have been doing it 😉!

To train a model is to verify that there is a good relation between the data and that our model fits the data.

We have done this by ensuring R<sup>2</sup> is close to 1. What we need to do now is use the dataset of 10,000+ to create a training and testing dataset. The training dataset will be a random sample instead of the initial 30 we had. According to the University of Texas el Paso, taking a sample of 30% is the ideal way to create an accurate model. ([Why 70/30 or 80/20 Relation Between Training and Testing Sets](https://scholarworks.utep.edu/cs_techrep/1209/))

As the number of employees increases so will the dataset and the value of will R<sup>2</sup> change. We need to do this every time the dataset of 10,000+ employees increases to ensure that our model stays up to date with the current number of employees.

> ⚠️ When training a model we need to split the data to have a training dataset. This is done to avoid overfitting.

# Excersice 1: Making Predictions

In the Replit below, you can see how the code creates a "training dataset" and a "testing dataset" by splitting the data from the 10,000+ record file and running predictions for both data sets.

<iframe height="500px" width="100%" src="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e1.py" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

As you can see, the prediction line generated in both graphs is very similar for both the training and test datasets. You can also see that the R<sup>2</sup> for both sets is almost identical or sometimes identical.