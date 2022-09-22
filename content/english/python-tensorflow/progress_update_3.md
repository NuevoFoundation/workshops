---
title: "Progress Update 3"
date: 2020-09-09T16:19:17-07:00
prereq: "Python Basics: Functions- Built in Functions, Functions from libraries; Data Types- Strings, Numbers, Reading from Console; Data Structures- Lists, Tuples, Sets; Loops- For Loops"
difficulty: Intermediate
weight: 13
draft: false
---
Great job! You've nearly reached the end!

To verify that your code is correct up to this checkpoint, please compare your code against the example code provided below.

{{% notice warning %}}
The outputs of the code may vary. You only need to copy the code blocks, and __not__ the output blocks, as they will be generated automatically in your notebook.
{{% /notice %}}

## Compare Your Code

Before moving on, please check your Google Colab notebook against the code below:

```python
def plot_image(i, predictions_array, true_label, img):
  true_label, img = true_label[i], img[i]
  plt.grid(False)
  plt.xticks([])
  plt.yticks([])

  plt.imshow(img, cmap=plt.cm.binary)

  predicted_label = np.argmax(predictions_array)
  if predicted_label == true_label:
    color = 'blue'
  else:
    color = 'red'

  plt.xlabel("{} {:2.0f}% ({})".format(class_names[predicted_label],
                                100*np.max(predictions_array),
                                class_names[true_label]),
                                color=color)

def plot_value_array(i, predictions_array, true_label):
  true_label = true_label[i]
  plt.grid(False)
  plt.xticks(range(10))
  plt.yticks([])
  thisplot = plt.bar(range(10), predictions_array, color="#777777")
  plt.ylim([0, 1])
  predicted_label = np.argmax(predictions_array)

  thisplot[predicted_label].set_color('red')
  thisplot[true_label].set_color('blue')
```
```python
i = 0   
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```
![Plotting Figure 1](../media/Plotting_fig1.png)

```python
i = 12 
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```
![Plotting Figure 2](../media/Plotting_fig2.png)

```python
#Plotting 6 images
num_rows = 3
num_cols = 2
num_images = num_rows*num_cols
plt.figure(figsize=(2*2*num_cols, 2*num_rows))
for i in range(num_images):
  plt.subplot(num_rows, 2*num_cols, 2*i+1)
  plot_image(i, predictions[i], test_labels, test_images)
  plt.subplot(num_rows, 2*num_cols, 2*i+2)
  plot_value_array(i, predictions[i], test_labels)
plt.tight_layout()
plt.show()
```
![Plotting 6 images](../media/PU3_6images.png)

```python
#Plotting 25 images
num_rows = 5
num_cols = 5
num_images = num_rows*num_cols
plt.figure(figsize=(2*2*num_cols, 2*num_rows))
for i in range(num_images):
  plt.subplot(num_rows, 2*num_cols, 2*i+1)
  plot_image(i, predictions[i], test_labels, test_images)
  plt.subplot(num_rows, 2*num_cols, 2*i+2)
  plot_value_array(i, predictions[i], test_labels)
plt.tight_layout()
plt.show()
```

![Plotting 25 images](../media/Plotting_fig3.png)

```python
# Grab an image from the test dataset. This shows the resolution of the image. 

#NOTE: This index will be changed and its corresponding plot would be displayed in the next few steps
img = test_images[7]

print(img.shape)
```

```
(28, 28)
```

```python
# Add the image to a batch where it's the only member.
img = (np.expand_dims(img,0))

print(img.shape)
```

```
(1, 28, 28)
```

```python
predictions_single = probability_model.predict(img)

print(predictions_single)
```

```
[[3.5166083e-06 5.8611553e-12 7.3947426e-04 3.9665074e-06 2.8206140e-03
  9.7541879e-08 9.9643230e-01 8.2940162e-11 1.2411914e-07 2.7266043e-09]]
```

```python
plot_value_array(7, predictions_single[0], test_labels)  #plot the graph containing all the class names
_ = plt.xticks(range(10), class_names, rotation=45)
```

![Classification Plot](../media/PU3_graph.png)

```python
np.argmax(predictions_single[0]) #Verifying the index value with highest probability
```
```
6
```

```python
i = 7   #We can see that this image detects the right class name for the image
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```
![Image and Graph](../media/PU3_shirtandgraph.png)

{{% notice info %}}

If you would like to test the code above, visit <a href="https://colab.research.google.com/drive/1yrUcfMw8H9XbfJ8USITjErpRpBQrl_Sf?usp=sharing" target="_blank">this link</a> 

To edit this code, click on the 'Copy to Drive' button to make a personal copy of this notebook. Make sure you are logged in to your Google account.

{{% notice warning %}}
### If you are using a Nuevo Google account temporarily
Once you make a copy, please make sure to replace the "Copy of" with your name, along with the file name. This will be on the top left corner of your notebook.
{{% /notice%}}


{{% /notice %}}


{{% notice tip %}}
#### Congratulations! You and your colleagues are now able to sort 4 times as many returned clothes! 
#### Your supervisor is impressed by this and chose you as the Employee of the Month!

{{% /notice %}}

{{% notice info %}}
#### Thank you for doing this workshop! We hope you enjoyed it and learned the basics of Machine Learning!
{{% /notice %}}

{{% notice warning %}}
#### Are you stuck anywhere in this workshop or want to check your work? 
Feel free to refer to this <a href="#" target="_blank">Answer Key</a>

{{% /notice %}}

{{% notice info %}}
If you would like to test the finished code, visit <a href="https://colab.research.google.com/drive/1NtI1_iiNvq1J9rQsEaKEbiFsotkL_C0T?usp=sharing" target="_blank">this link</a> 

To edit this code, click on the 'Copy to Drive' button to make a personal copy of this notebook. Make sure you are logged in to your Google account.
![](../media/colab_copy.png)

{{% /notice %}}
