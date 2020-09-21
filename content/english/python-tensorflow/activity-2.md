---
title: "Activity 2 - Displaying RGB Color values for images"
date: 2020-09-09T16:19:17-07:00
weight: 3
draft: false
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/bMr1c4a7dXQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


You now take a picture of your shoe from your samples.

Go ahead and copy and paste the following code into your Google Colab notebook:

```python
plt.figure()
plt.imshow(train_images[0]) #Shows the first image in the data set as a plot or different colored pixels
plt.colorbar() #displays the color bar on the right
plt.grid(False)
plt.show() #displays the entire plot
```

{{% notice tip %}}
### Question 1

Change the index of the “train_images[x]” and look at the color bar on the right, what is the max pixel value?
![A2 Q1](../media/a2q1.png)
{{% /notice %}}

{{% notice tip %}}
### Question 2

After analyzing the shoe, you now take another clothing item from your sample and do the same thing. Change the index value to whatever you like so you have a different item. 
Save this value for later as you will use this in Activity 6. 

For example, if you input the index value as 7, you get the following item:
![Shirt](../media/a2progress2.png)

{{% /notice %}}

## Copy the following code onto Google Colab:
In order to maintain consistency between the training and testing set data, we will divide these values by 255.
```python
#the train_images and test_images range between values from 0 to 255. 
#To maintain consistency between the training and testing set, we will divide train_images and test_images by 255

train_images = train_images / 255.0 

test_images = test_images / 255.0
```




