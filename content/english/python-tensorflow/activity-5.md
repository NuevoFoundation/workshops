---
title: "Activity 5 - Testing the Model"
date: 2020-09-09T16:19:17-07:00
prereq: "Python Basics: Functions- Built in Functions, Functions from libraries; Data Types- Strings, Numbers, Reading from Console; Data Structures- Lists"
difficulty: Intermediate
weight: 8
draft: false
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/3FELV6BYtIo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

### Testing Our Model

Now that we have built and trained our model, we want to go ahead and test it against returned clothing items. 
Let's start off with our first sample item, which was the shoe.
```python
# Initiate a model object with a softmax layer
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```

{{% notice note %}}
A **softmax layer** is a type of neural network layer in a machine learning model. The softmax layer transforms our inputs, which theoretically could come from a varied range of data structures, into a probability distribution between 0 to 1.
{{%/notice%}}

```python
predictions = probability_model.predict(test_images)
```

The following code gives a list of probabilities that an image fits in a specific category. The index value corresponds to what image would be classified.
```python
predictions[0] #Returns the index with highest probability, depends on the index value.
```

### Question 1
The array of values represents the confidence level that an image belongs to a specific category. What index has the most confidence value, and what has the least confidence value?

### Question 2
Verify your answer to the highest probability value by running the code below:

```python
np.argmax(predictions[0])
```

```python
test_labels[0]
```

In the `class_names` array, what category does this index correspond to? (Hint: Given the index of the maximum probability value, what index should you look for?)

Verify what category this image falls under using this code. Is it correct?

```python
class_names[9]
```