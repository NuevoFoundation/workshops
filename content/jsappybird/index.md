---
title: "JSappyBird"
description: "Learn about variables, functions, and conditionals all while building a flappy bird clone."
date: 2019-07-23T10:42:43-07:00
prereq: "Navigate to project the CodePen environment"
difficulty: "Beginner/Intermediate"
draft: true
---

![alt text](resources/_gen/images/flappy.png "JSappyBird")

1. **Navigate to the CodePen environment** <link_here>

The template contains the following files:  

- phaser.min.js, the Phaser framework v2.4.3. 
- index.html, where the game will be displayed. 
- main.js, a file where we will write all our code. 
- assets/, a directory with 2 images and one sound effect. 

The index.html file is the main page for our flappy bird game which also loads our two Javascript files. The **phaser.min.js** file is our game framework we will use for making browser games. The other file is **main.js** which will hold all our Javascript logic.  

## Variables
Variables are simply names that we can give to values such as strings, numbers and Booleans. We use variables to store information that the computer can keep track of. 

For example:  

```
var world = "Hello World";  
var x = 88;             
var happy = true;  
```

The code below creates a new Phaser Game object and stores it in a variable to use for our game.  

```
var game = new Phaser.Game(800, 600)
```

## Conditionals 

{{% notice note %}}
Activity 1: Lets utilize both Booleans and Boolean expressions to accomplish our update function.  
{{% /notice %}}


We can use if statements to run a code statement only if certain conditions are met.  

For example: 

```
if (isRainingOutside == true) { 
    takeUmbrella = true;  
} else {  
    takeUmbrella = false;  
} 
```

For our game we should add an **if statement** to make sure our bird is not out of the screen. Inside the **()** beside **if**, you should specify a *Boolean expression*. **Booleans** are *true* or *false* statements. We can utilize this in our if statement. If the expression is *true*, the code inside *{ }* is executed.  

You can also connect **Boolean expressions** together using the **&&** (AND) and the **||** (OR) operator. 

## Functions  

{{% notice note %}}
Activity 2: Lets now add a function to provide the functionality for the bird to jump. 
{{% /notice %}}

**A function can be thought of as a task.** Some tasks are short and simple like adding 1+1 or saying ‘Hello World!’. Functions can be used to run the same tasks multiple times. In this case, we’ll be writing a function to make the bird jump!  

“Jumping” in this game is just changing the bird’s y position. We can do that with this statement: 

```
this.bird.velocity.y = -300
```

The number can be adjusted depending on how high you want the bird to jump! Try changing the number to see differences to how high the bird jumps when you press the spacebar down. 

## Arrays

{{% notice note %}}
Activity 3: Lets add the logic to now allow our bird to be able to go through objects.
{{% /notice %}}

Currently, your bird flies through the obstacles in the game, which seems a little too easy. We can use code to increase the difficulty of the game by adding logic that makes the obstacles solid. In order to do this, you’ll need to know about conditionals and arrays. We already covered conditionals, so now let’s go over arrays. 

**Arrays** are a group of objects. They can represent a list of numbers, names, or even the objects in our game! In JavaScript, arrays are represented by **[ ]** In order to make the obstacles solid, we’ll need to make a list of those game objects. Try adding this into  
