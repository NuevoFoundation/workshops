---
title: "Progress Update"
date: 2020-09-09T16:19:17-07:00
weight: 4
draft: false
---

In order to maintain consistency between the training and testing set data, we will divide these values by 255.
```python
#the train_images and test_images range between values from 0 to 255. 
#To maintain consistency between the training and testing set, we will divide train_images and test_images by 255

train_images = train_images / 255.0 

test_images = test_images / 255.0
```


{{% notice tip %}}
Before moving on, please check your Google Colab notebook against the picture below:

![](https://i.imgur.com/1Zb7lMs.png)

{{% /notice %}}
