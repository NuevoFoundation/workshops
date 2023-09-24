---
title: "Activity 4 - Training the Model"
date: 2020-09-09T16:19:17-07:00
prereq: "Python Basics: Functions- Built in Functions, Functions from libraries; Data Types- Strings, Numbers, Reading from Console; Data Structures- Lists, Tuples, Sets"
difficulty: Intermediate
weight: 7
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/o0o9JTm2xIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

### Parameters for Training
The following code determines how many times model is trained. It is normal for this segment of code to take longer than usual to run.

```python
model.fit(train_images, train_labels, epochs=10) 
```

{{% notice note %}}
**Epochs** represent the number of times the model processes all the training data. 
{{% /notice %}}

The following code prints out the overall test accuracy.

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```

### Question 1
Set the value of epochs equal to 2. What is the accuracy of the last epoch? What is the test accuracy when the trained model is compared to the test dataset?

### Question 2
Set the value of epochs equal to 10. Repeat Question 1.

### Question 3
Set the value of epochs equal to 20. Repeat Question 1.

### Question 4
What correlation do you see when you increase the number of epochs? Does the accuracy increase or decrease?