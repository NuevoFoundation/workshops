---
title: "Activity 3 - Displaying Clothing Samples"
date: 2020-09-09T16:19:17-07:00
prereq: "Python Basics: Functions- Built in Functions, Functions from libraries; Data Types- Strings, Numbers, Reading from Console; Data Structures- Lists; Loops- For Loops"
difficulty: Intermediate
weight: 5
draft: false
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/8dMNuQcmx5s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Now, you will be displaying all of your clothing samples by doing the following:

Copy the following code into your Colab notebook. This displays a collection of images along with their specific category. 

```python
plt.figure(figsize=(10,10)) #sets the image size to 10x10 inches
for i in range(25): #displays first 25 images with their class name
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary) 
    plt.xlabel(class_names[train_labels[i]])
plt.show() #shows images with their labels
```

### Question 1

Your supervisor hands you out around 15-20 more clothing samples, which you will have to include in your program.
Change the "for loop" so that there are 6 rows and 7 columns. How many images should you display?

Think about where you need to change the code to display this. The code currently displays 5 rows and 5 columns.
