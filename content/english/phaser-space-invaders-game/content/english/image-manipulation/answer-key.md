---
title: "Answer Key - Python Image Manipulation"
date: 2020-04-25T10:24:17-07:00
draft: false
hidden: true
weight: 18
---

## Python Basic Answers:
### Activity 1:
```Python
# The sentences can be anything! Encourage having fun with it.
print("My name is Nuvi!")
print("I love making memes.") 
```

### Activity 2:
```Python
# There can be a variety of answers, here are a few: 
print("Nuevo" + " " + "Foundation")
print("Nu" + "evo" + " Found" + "ation")
print("N" + "uevo F" + "oundation")
```

### Activity 3:
```Python
print(2-19) # -17
print((3 + 5) * 6) # 48
print((13 + 5 * 8) / (6 - (3 + 7)))  # -13.25
```
Challenge:
```Python
print("527 times 199 is: " + str(527*199)) # Answer: 104873
```

### Activity 4
```Python
print(54 < (10 + 32)) # False
print((37 / 5) != 7) # True
print("Hello" + "World" == "Hello World") # False
print(False == False) # True
```

### Activity 5
```python
comp = "Computer"
five = 5

print(comp)
print(five)
print(comp + comp)
print(five + five)
print(comp + comp + comp)
print(five + five + five)

# If advanced student, try with multiplication. Ex:
print(five * 5) # 25
print(comp * 5) # ComputerComputerComputerComputerComputer
```

### Activity 6
```Python
print("Welcome!")
print("How can I help you today?")
value = input() # ex. "How old am I?"
print("You asked: " + value + "?")
print("I don't know the answer to " + value + ". Goodbye!")
```

### Activity 7
```Python
def add(number1, number2):
  return number1 + number2

value2 = add(2, 3)
print("This should print 5: " + str(value2))
```
#### Challenge:
```Python
def subtraction(number1, number2):
  return number1 - number2

def multiply(number1, number2):
  return number1 * number2

def divide(number1, number2):
  return number1 / number2

value3 = subtraction(8,5) 
print("This should print 3: " + str(value3))

value4 = multiply(3,5) 
print("This should print 15: " + str(value4))

value5 = divide(12,3)
print("This should print 4: " + str(value5))
```

## Image Manipulation
### Debugging
If using Python3, you may need to manually install the image package.  To do this, go on the left side of repl.it, find the cube ('packages') and search for Pillow 7.1.2 and click the + icon.  This should automatically kick off installation.  When done, try running the import statements below.

The activities below are already described in the curriculum with the example answers.  Repeated here for ease of access.

### Activity 1: Open an Image
The student can pick any image they want as long as it is appropriate.  

1. Find a picture student likes. 
2. Download it
3. Save as JPG/PNG with easy name
4. Upload this as another file in the repl.it window

```Python
from PIL import Image
from PIL import ImageFilter

image = Image.open("cat.png")
image.save("myCat.png")
```

The image.save() function allows the student to see the image that they uploaded.  They will see a new file on the left pop up with the image (ie. in this example, 'myCat.png').  

### Activity 2: Rotate the Image
Rotate the image upside down example:

```Python
from PIL import Image
from PIL import ImageFilter

image = Image.open("cat.jpg")
image = image.rotate(180)
image.save("myCat.jpg")
```

### Activity 3: Image Filters
Add to existing code. 

```Python
from PIL import Image
from PIL import ImageFilter

# Activity 2
image = Image.open("cat.jpg")
image = image.rotate(180)
image.save("myCat.jpg")

# Activity 3
blurredImage = image.filter(ImageFilter.BLUR) 
blurredImage.save("myCatBlurred.jpg")

greyscaleImage = blurredImage.convert("L")
greyscaleImage.save("myCatBW.jpg")
```

### Activity 4: 

```Python
from PIL import Image
from PIL import ImageFilter
from PIL import ImageDraw # add this line

# Activity 2
image = Image.open("cat.jpg")
image = image.rotate(180)
image.save("myCat.jpg")

# Activity 3
blurredImage = image.filter(ImageFilter.BLUR) 
blurredImage.save("myCatBlurred.jpg")

greyscaleImage = blurredImage.convert("L")
greyscaleImage.save("myCatBW.jpg")

# Activity 4
drawnImage = ImageDraw.Draw(greyscaleImage)
drawnImage.text((200,20), "When you realize you learned python in an hour.")
greyscaleImage.save("myCatWithText.jpg")
```