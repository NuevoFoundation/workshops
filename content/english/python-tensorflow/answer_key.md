---
title: "Answer Key"
date: 2020-09-14T16:19:17-07:00
weight: 15
draft: false
#hidden: true
---

## Activity 1
#### Task 1:

```python
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat','Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']  
```

## Activity 2
#### Question 1:
```python
plt.figure()
plt.imshow(train_images[7]) #Shows the first image in the data set as a plot or different colored pixels
plt.colorbar() #displays the color bar on the right
plt.grid(False)
plt.show() #displays the entire plot
```
#### Question 2: 
255!
The max pixel value is 255 for any index used.

## Activity 3
#### Question 1:
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
![images 6x7](../media/PU2_42images.png)


## Activity 4
Answers may vary, sample answers provided below:
### Question 1

```python
model.fit(train_images, train_labels, epochs=2) #epochs determine how many times a model is trained
```
```
Epoch 1/2
1875/1875 [==============================] - 4s 2ms/step - loss: 0.5024 - accuracy: 0.8231
Epoch 2/2
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3761 - accuracy: 0.8647
<tensorflow.python.keras.callbacks.History at 0x7f909cbb2208>
```

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```
```
313/313 - 0s - loss: 0.3899 - accuracy: 0.8604

Test accuracy: 0.8604000210762024
```

Accuracy of Epoch 2 is .8647 and the test accuracy when the trained model is compared to the test dataset is .8604.

#### Question 2
```python
model.fit(train_images, train_labels, epochs=10) #epochs determine how many times a model is trained
```
```
Epoch 1/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.4990 - accuracy: 0.8247
Epoch 2/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3754 - accuracy: 0.8658
Epoch 3/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3374 - accuracy: 0.8771
Epoch 4/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3110 - accuracy: 0.8859
Epoch 5/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2935 - accuracy: 0.8903
Epoch 6/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2823 - accuracy: 0.8942
Epoch 7/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2682 - accuracy: 0.9002
Epoch 8/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2575 - accuracy: 0.9041
Epoch 9/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2479 - accuracy: 0.9074
Epoch 10/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2417 - accuracy: 0.9088
<tensorflow.python.keras.callbacks.History at 0x7f2b4a7cb7b8>
```
```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```
```
313/313 - 0s - loss: 0.3461 - accuracy: 0.8812

Test accuracy: 0.8812000155448914
```

Accuracy of Epoch 10 is .9088 and the test accuracy when the trained model is compared to the test dataset is .8812.


#### Question 3

```python
model.fit(train_images, train_labels, epochs=20) #epochs determine how many times a model is trained
```
```
Epoch 1/20
1875/1875 [==============================] - 5s 3ms/step - loss: 0.4935 - accuracy: 0.8268
Epoch 2/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3769 - accuracy: 0.8639
Epoch 3/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3387 - accuracy: 0.8776
Epoch 4/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3113 - accuracy: 0.8858
Epoch 5/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2966 - accuracy: 0.8903
Epoch 6/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2803 - accuracy: 0.8957
Epoch 7/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2679 - accuracy: 0.9008
Epoch 8/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2565 - accuracy: 0.9049
Epoch 9/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2475 - accuracy: 0.9083
Epoch 10/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2399 - accuracy: 0.9103
Epoch 11/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2298 - accuracy: 0.9141
Epoch 12/20
1875/1875 [==============================] - 3s 2ms/step - loss: 0.2235 - accuracy: 0.9163
Epoch 13/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2165 - accuracy: 0.9190
Epoch 14/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2105 - accuracy: 0.9206
Epoch 15/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2035 - accuracy: 0.9240
Epoch 16/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.1978 - accuracy: 0.9253
Epoch 17/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.1918 - accuracy: 0.9285
Epoch 18/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.1877 - accuracy: 0.9286
Epoch 19/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.1820 - accuracy: 0.9313
Epoch 20/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.1762 - accuracy: 0.9335
<tensorflow.python.keras.callbacks.History at 0x7f90ac950550>
```

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```
```
313/313 - 0s - loss: 0.3648 - accuracy: 0.8892

Test accuracy: 0.88919997215271
```

Accuracy of the last epoch, Epoch 20, is .9335 and the test accuracy when the trained model is compared to the test dataset is .8892.

#### Question 4
We see a positive correlation. As we increase the number of epochs, there is more data to train the model with, so the accuracy increases.

## Activity 5
For this actvity, we will be using this image.
```python
plt.figure()
plt.imshow(train_images[0]) #Shows the first image in the data set as a plot or different colored pixels
plt.colorbar() #displays the color bar on the right
plt.grid(False)
plt.show() #displays the entire plot
```
![Ankle Boot](../media/a2q1.png)

#### Question 1
```python
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```
```python
predictions = probability_model.predict(test_images)
```
```python
predictions[0] #Returns the index with highest probability, depends on the index value.
```
```
array([1.1623413e-08, 2.3745208e-08, 3.5589391e-08, 1.2773025e-09,
       5.3400743e-08, 2.0998505e-04, 7.4230536e-07, 6.9385571e-03,
       2.8271037e-07, 9.9285042e-01], dtype=float32)
```

![](https://i.imgur.com/td1b4Jk.png)

Index 9 has the highest confidence value, and index 1 has the lowest confidence value.

#### Question 2
```python
np.argmax(predictions[0]) # This returns the index value with the highest predictions
```
```
9
```

```python
test_labels[0]  # This is the index value returned by the test dataset
                # (That we are comparing against)
```
```
9
```

```python
class_names[9] # This is the category name of the image that has the highest probability
```
```
'Ankle boot'
```


![](https://i.imgur.com/XeZoptk.png)

This corresponds to the 'Ankle Boot' category.

## Activity 6
For this answer, we will be using this image. Feel free to use any picture you want from the dataset, but make sure you are consistent with the values.
```python
plt.figure()
plt.imshow(train_images[7]) #Shows the first image in the data set as a plot or different colored pixels
plt.colorbar() #displays the color bar on the right
plt.grid(False)
plt.show() #displays the entire plot
```
![Shirt](../media/a2progress2.png)

```python
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```
```python
predictions = probability_model.predict(test_images)
```
```python
predictions[7] #Returns the index with highest probability, depends on the index value.
```
```
array([3.5166186e-06, 5.8611111e-12, 7.3947496e-04, 3.9665038e-06,
       2.8206115e-03, 9.7542063e-08, 9.9643230e-01, 8.2940481e-11,
       1.2411938e-07, 2.7266096e-09], dtype=float32)
```
Index 6 has the confidence value, and index 7 has the lowest confidence value.

```python
np.argmax(predictions[7]) # This returns the index value with the highest predictions
```
```
6
```

```python
test_labels[7]  # This is the index value returned by the test dataset
                # (That we are comparing against)
```
```
6
```

```python
class_names[6] # This is the category name of the image that has the highest probability
```
```
'Shirt'
```

This corresponds to the 'Shirt' category.

## Activity 7

#### Question 1
```python
# Grab an image from the test dataset. This shows the resolution of the image. 

#NOTE: This index will be changed and its corresponding plot would be displayed in the next few steps
img = test_images[7]

print(img.shape)
```

```python
plot_value_array(7, predictions_single[0], test_labels)  #plot the graph containing all the class names
_ = plt.xticks(range(10), class_names, rotation=45)
```
![Classification Plot](../media/PU3_graph.png)



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


Yes, this is consistent with the previous question.

