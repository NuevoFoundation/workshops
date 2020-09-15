---
title: "Answer Key"
date: 2020-09-14T16:19:17-07:00
weight: 14
draft: false
---

{{% notice info %}}
If you would like to test all the code given in the answer key, visit <a href="https://colab.research.google.com/drive/1NtI1_iiNvq1J9rQsEaKEbiFsotkL_C0T?usp=sharing" target="_blank">this link</a> 

Keep in mind, you will only be able to run the code blocks one at a time, and would not be able to use the 'Run all' feature.

To prevent this and edit this code, click on the 'Copy to Drive' button to make a copy. Make sure you are logged in to your Google account.
![](https://i.imgur.com/jOCZnCu.png)


{{% /notice %}}

{{% notice info %}}
## Activity 1
```python
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat','Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']  
```
{{% /notice %}}

{{% notice info %}}
## Activity 2
The max pixel value is 255 for any index used.
{{% /notice %}}

{{% notice info %}}
## Activity 3
To answer Q1 you would change your code to the following:
```python
plt.figure(figsize=(10,10)) #sets the image size to 10x10 pixels
for i in range(42): #displays first 42 images with their class name
    plt.subplot(6,7,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary) 
    plt.xlabel(class_names[train_labels[i]])
plt.show() #shows images with their labels 
```
{{% /notice %}}


{{% notice info %}}
## Activity 4
Answers may vary, sample answers provided below:

{{% notice tip %}}
## Question 1
![](https://i.imgur.com/FO10D17.png)
Accuracy of Epoch 2 is .8641 and the test accuracy when the trained model is compared to the test dataset is .8596.
{{% /notice %}}

{{% notice tip %}}
## Question 2
![](https://i.imgur.com/jWv0hRh.png)
Accuracy of Epoch 10 is .9103 and the test accuracy when the trained model is compared to the test dataset is .8818.
{{% /notice %}}

{{% notice tip %}}
## Question 3
![](https://i.imgur.com/IVG9JBQ.png)
Accuracy of the last epoch, Epoch 20, is .9322 and the test accuracy when the trained model is compared to the test dataset is .8852.
{{% /notice %}}

{{% notice tip %}}
## Question 4
We see a positive correlation. As we increase the number of epochs, there is more data to train the model with, so the accuracy increases.
{{% /notice %}}

{{% /notice %}}


{{% notice info %}}
## Activity 5
For this actvity, we will be using this image.
![](https://i.imgur.com/xpNX55h.png)

{{% notice tip %}}
## Question 1
![](https://i.imgur.com/td1b4Jk.png)

Index 9 has the highest confidence value, and index 1 has the lowest confidence value.
{{% /notice %}}

{{% notice tip %}}
## Question 2
![](https://i.imgur.com/XeZoptk.png)

This corresponds to the 'Ankle Boot' category.
{{% /notice %}}

{{% /notice %}}


{{% notice info %}}
## Activity 6
For this answer, we will be using this image. Feel free to use any picture you want from the dataset, but make sure you are consistent with the values.
![](https://i.imgur.com/h80xTzB.png)

{{% notice tip %}}
## Question 1
![](https://i.imgur.com/3qYHNy1.png)
Index 6 has the confidence value, and index 7 has the lowest confidence value.
{{% /notice %}}

{{% notice tip %}}
## Question 2
![](https://i.imgur.com/tUevgLO.png)

This corresponds to the 'Shirt' category.
{{% /notice %}}

{{% /notice %}}


{{% notice info %}}
## Activity 7

{{% notice tip %}}
## Question 1
![](https://i.imgur.com/wzEthN5.png)

{{% /notice %}}

{{% notice tip %}}
## Question 2
![](https://i.imgur.com/AiO5z0P.png)

{{% /notice %}}

{{% notice tip %}}
## Question 3
![](https://i.imgur.com/ZzQozz8.png)
Yes, this is consistent with the previous question.
{{% /notice %}}

{{% /notice %}}

{{% notice info %}}
#### Thank you for doing this workshop! We hope you enjoyed it and learned the basics of Machine Learning!
{{% /notice %}}
