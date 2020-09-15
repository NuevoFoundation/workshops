---
title: "Activity 7 - Plotting an Image's predicted Category"
date: 2020-09-09T16:19:17-07:00
weight: 12
draft: false
---

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/pwZDPj4yIsM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```python
# Grab an image from the test dataset. This shows the resolution of the image. 

#NOTE: This index will be changed and its corresponding plot would be displayed in the next few steps
img = test_images[0]

print(img.shape)
```
```python
# Add the image to a batch where it's the only member.
img = (np.expand_dims(img,0))

print(img.shape)
```

```python
predictions_single = probability_model.predict(img)

print(predictions_single)
```
```python
plot_value_array(0, predictions_single[0], test_labels)  #plot the graph containing all the class names
_ = plt.xticks(range(10), class_names, rotation=45)
```

{{% notice note %}}
To verify the index value with the highest probability, we use
```python
np.argmax(predictions_single[0]) #Verifying the index value with highest probability
```

{{% /notice %}}


{{% notice tip %}}
### Question 1

In the first code segment of this activity, change the index value for the `test_images` array to any number of your choice.

{{% /notice %}}


{{% notice tip %}}

### Question 2
In the `plot_value_array`, change the first parameter to the same index number used previously. What class name has the highest probability?

{{% /notice %}}


{{% notice tip %}}

### Question 3
Verify your answer by running the code below to display the specified image and the plot of the category that the model predicted. 
Is this consistent with the answer from your previous question?
```python
i = your_desired_value   #We can see that this image detects the right class name for the image
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```

{{% /notice %}}
