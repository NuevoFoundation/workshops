---
title: "Progress Update 2"
date: 2020-03-27T20:24:33-07:00
prereq: "Python Basics: Functions- Built in Functions, Functions from libraries; Data Types- Strings, Numbers, Reading from Console; Data Structures- Lists, Tuples, Sets; Loops- For Loops"
difficulty: Intermediate
weight: 10
draft: false
---

Great job! You are now able to successfully identify which category an image most likely falls under. 

To verify that your code is correct up to this checkpoint, please compare your code against the example code provided below.

{{% notice warning %}}
The outputs of the code may vary. You only need to copy the code blocks, and __not__ the output blocks, as they will be generated automatically in your notebook.
{{% /notice %}}

## Compare Your Code

Before moving on, please check your Google Colab notebook against the code below:



```python
plt.figure(figsize=(10,10)) #sets the image size to 10x10 pixels
for i in range(25): #displays first 25 images with their class name
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary) 
    plt.xlabel(class_names[train_labels[i]])
plt.show() #shows images with their labels

```
![images 5x5](../media/PU2_25images.png)

```python
#Building the Neural Network
model = keras.Sequential([ 
    keras.layers.Flatten(input_shape=(28, 28)), 
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10)
])
```

```python
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

```

```python
model.fit(train_images, train_labels, epochs=10) 
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
313/313 - 0s - loss: 0.3358 - accuracy: 0.8825

Test accuracy: 0.8824999928474426
```

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

<br />
<br />

Now that we are able to classify the category of an individual piece of clothing using your model, we will now visualize these predictions by creating a bar plot for a specified image.

<br />
<br />

{{% notice info %}}

If you would like to test the code above, visit <a href="https://colab.research.google.com/drive/1knoCeFRtcUbp1HyKKEQgYw9tgZsUeDk0?usp=sharing" target="_blank">this link</a> 

To edit this code, click on the 'Copy to Drive' button to make a personal copy of this notebook. Make sure you are logged in to your Google account.

{{% notice warning %}}
### If you are using a Nuevo Google account temporarily
Once you make a copy, please make sure to replace the "Copy of" with your name, along with the file name. This will be on the top left corner of your notebook.
{{% /notice %}}

{{% /notice %}}