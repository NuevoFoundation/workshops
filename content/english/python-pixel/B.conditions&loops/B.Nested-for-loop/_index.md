---
title: "Nested loops"
draft: false
weight: 3
---

### Nested loops
To learn *nested loops*, you need to know simple for-loops and while loops. If you have already learnt them, you can skip to the next part. Otherwise, jump to a specific Python section to learn more about these topics:

- <a href="../../../python-basics/loops" target="blank">For-loop and While-loop</a>
<br/><br/>
In this section, we will use one loop inside another, which is called *nested loop*.
#### Nested while loop
```python
#This is the format for nested while loop
while expressionA:
    while expressionB:
        statement(B)
    statement(A)
```
In the while loop above, when expressionA is false, we will skip the whole block. When expressionB is true, we will check expressionB. If expressionB is true, statement(B) will be execute. If expressionB is false, we will skip and execute statement(A). As a conclusion, if expressionA is false, none of the statement will be execute; statement(A) and statement(B) will both be executed if and only if both expressionA and expressionB are true.

Let us take a look at one example for nested while loop.
 ```python
 #This is the example for nested while loop.
 #This creates the original picture.
 from PIL import Image
 img = Image.new('RGB', (60, 30), 'red')
 img.save('pil_red.png')
 #This uses nested while loop to change the picture.
 x = 0
 y = 0
 while x < 10:
  while y < 20:
    img.putpixel( (x,y), (0, 0, 0,0))
    x += 1
    y += 1
img.save('pil_red.png')
 ```
 This is the picture before changing.
 ![alt text](../../media/whileloopbefore.png "image showing while loop first example")
 This is the picture after changing.
 ![alt text](../../media/whileloopafter.png "image showing while loop first example")
<br/><br/>
#### Nested for loop
```python
#This is the format for nested for loop
for variableA in rangeA:
   for variableB in rangeB:
      statements(B)
   statements(A)
```
```python
#This is the example for nested for loop
#This creates the original picture.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
#This uses nested for loop to change the picture.
for x in range(10, 30):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0,0))
img.save('pil_red.png')
```
This is the picture before changing.
![alt text](../../media/whileloopbefore.png "image showing for loop first example")
This is the picture after changing.
![alt text](../../media/forloopafter.png "image showing for loop first example")
