---
title: "The Basics - Class and Object"
date: 2019-07-29T13:24:17-07:00
weight: 2
draft: false

---
## Classes and objects
Before you start building a game, you should know how to draw different objects and modify them as per the way they need to look and move on computer screen. 

In order to build objects, you first decide how they should look, what role they should perform in your game, and how player can control their movement on screen. You do this by creating a class for each object you want on screen. 
Before objects are created in a program you must define their class. A class is what tells how an individual object will look and behave. It contains the attributes and methods that its object can use during the lifetime of a program (in this case it is Pong game). You only need to define a class once then you can use that class to create as many objects as you wish. 

You cannot use a class directly in a program; a class must have an object as its manifestation that is used in program. 
All aspects related to visuals and movement are called the `"attributes"` of the object that you see on computer screen. 
All aspects related to control of an object are called `"functions"` of the object. 


## First, define the class for paddle used in game. To do this, type in the following:

```python
class Paddle(pygame.Rect):
    def __init__(self, velocity, up_key, down_key, *args, **kwargs):
        self.velocity = velocity
        self.up_key = up_key
        self.down_key = down_key
        super().__init__(*args, **kwargs)

    def move_paddle(self, board_height):
        keys_pressed = pygame.key.get_pressed()

        if keys_pressed[self.up_key]:
            if self.y - self.velocity > 0:
                self.y -= self.velocity

        if keys_pressed[self.down_key]:
            if self.y + self.velocity < board_height - self.height:
                self.y += self.velocity
```

Let's try to understand the code in more detail.

{{% notice tip %}}

## Name the class
`class Paddle(pygame.Rect)`

This is how you name the class `"Paddle"`. Now, notice the `pygame.Rect` inside `()`. You might have already imagined that in order to draw the paddle on a computer screen you need to draw it like a rectangle, then define its dimensions and position on screen to make it look like a paddle. The `(pygame.Rect)` statement allows us to tell the Python compiler to draw this object like a rectangle and provide all rectangle's attributes to it like `WIDTH` and `HEIGHT`. This helps us make use of all attributes available to the `Rectangle` class in the Pygame library. 

## Add attributes
`def __init__(self, velocity, up_key, down_key, *args, **kwargs):`

Don't worry about `args` and `kwargs` for now and focus on core attributes of `Paddle` class. 

`__init__` function allows you to setup the class with attributes you need to see in objects. You can define additional attributes here on top of what you already get from `Rectangle` class. Let's add attributes like `velocity`, `up_key`, `down_key` to represent the speed at which paddle can move, and the keys needed for upward and downward movement of the paddle. 

```python
class Paddle(pygame.Rect):
    def __init__(self, velocity, up_key, down_key, *args, **kwargs):
        self.velocity = velocity
        self.up_key = up_key
        self.down_key = down_key
        super().__init__(*args, **kwargs)
```
## Add methods

`move_paddle()` is a **method.**  We use this method to get paddle to perform move actions. In this case, `move_paddle()` moves the paddle upward or downward depending on the key we pressed, and at a certain speed.

```python
def move_paddle(self, board_height):
        keys_pressed = pygame.key.get_pressed()
        if keys_pressed[self.up_key]:
            if self.y - self.velocity > 0:
                self.y -= self.velocity
        if keys_pressed[self.down_key]:
            if self.y + self.velocity < board_height - self.height:
                self.y += self.velocity
```

{{% /notice %}}

Now that you have defined how a paddle should look and how it should move, feel free to take a look at classes for `Ball` and `Pong`. In the next activities, you will modify certain aspects of these classes to make the Pong game work for you.
