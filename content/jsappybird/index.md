---
title: "JSappy Bird"
description: "Learn about variables, functions, and conditionals all while building a flappy bird clone."
date: 2019-07-23T10:42:43-07:00
prereq: "Navigate to the CodePen project"
difficulty: "Beginner/Intermediate"
draft: true
---

![alt text](resources/_gen/images/flappy.png "JSappyBird")

1. **Download the required files.** <link_here>

The template contains the following files:  

- phaser.min.js, the Phaser framework v2.4.3. 
- index.html, where the game will be displayed. 
- main.js, a file where we will write all our code. 
- assets/, a directory with 2 images and one sound effect. 

The index.html file is the main page for our flappy bird game which also loads our two Javascript files. The **phaser.min.js** file is our game framework we will use for making browser games. The other file is **main.js** which will hold all our Javascript logic.  

## Variables

Variables are simply names that we can give to values such as *strings*, *numbers*, and *booleans*.

![alt text](resources/_gen/images/variables.png "variables")

Anything that is surrounded in quotation marks is called a *string*. This is how a computer represents words or sentences. For example, `"a"`, `"2"`, `"banana!"`, and `"Hello World"` are strings, but `Hello World` and `2` are not *strings*, because the quotation marks are missing.

We use variables to store information so the computer can keep track of it. Variables are created by using the `var` keyword and the name of the variable. Then you can assign that variable to the information that you want to store by using a `=` and the content.

For example:

```js
var world = "Hello World";  
var x = 88;
var happy = true;  
```

You can also change the value that a name references like this:

```js
var x = 4;
x = 10;
```

In this example, the variable `x` is first assigned to 4, then it's reassigned to 10.

The code below creates a new Phaser Game object and stores it in a variable to use for our game.  

```js
var game = new Phaser.Game(800, 600);
```

## Conditionals

**Activity 1: Let's utilize both Booleans and Boolean expressions to make sure our bird stays in the screen.**

We can use if statements to run a code statement only if certain conditions are met.

For example:

```js
if (isRainingOutside == true) {
    takeUmbrella = true;  
} else {  
    takeUmbrella = false;  
}
```

For our game we should add an **`if` statement** to make sure our bird is still on the screen. In the original game, you can't touch the ground or the top of the screen or the game ends.

Inside the `()` beside `if`, you should specify a *Boolean expression*. **Booleans** are `true` or `false` statements. We can utilize this in our if statement. If the expression is `true`, the code inside `{ }` is executed.

You can also connect **Boolean expressions** together using the `&&` (AND) and the `||` (OR) operator.

![alt text](resources/_gen/images/statements.png "statements")

`&&` requires both *Boolean expressions* to be `true`, while `||` only requires one of the two *Boolean expressions* to be `true`.  

For example:

```js
// produces true since both 5 is less than 8 and 9 is not equal to 10.
(1 < 100) && (5 != 10) 

// produces true since at least one of the expressions results in true
(5 == 5) || (10 > 20)
```

```text
//TODO: Add link for adding conditional to keep bird from falling off of the screen.
```

## Functions  

**Activity 2: Lets now add a function to provide the functionality for the bird to jump.**

**A function can be thought of as a task.** Some tasks are short and simple like adding `1 + 1` or saying `‘Hello World!’`. Functions can be used to run the same tasks multiple times. In this case, we’ll be writing a function to make the bird jump!  

“Jumping” in this game is just changing the bird’s *y position*.  

We can do that with this statement inside the jump function:  

```js
this.bird.velocity.y = -300
```

The number can be adjusted depending on how high you want the bird to jump! Try changing the number to see differences to how high the bird jumps when you press the spacebar down. 

## Arrays

**Activity 3: Lets add the logic to now allow our bird to be able to go through objects.**

Currently, your bird flies through the obstacles in the game, which seems a little too easy. We can use code to increase the difficulty of the game by adding logic that makes the obstacles solid. In order to do this, you’ll need to know about conditionals and arrays. We already covered conditionals, so now let’s go over arrays.
Arrays are a group of objects. They can represent a list of numbers, names, or even the objects in our game! In JavaScript, arrays are represented by [] (this would represent an empty array).

You separate the objects in the array with commas. A sample array with numbers would be represented as
[1, 2, 3, 4, 5]
Arrays can also be used as values, so just like in the examples from the Variables section, you can assign a name to a group of objects like this:

```js
var numbers = [1, 2, 3, 4, 5];
```

In order to make the obstacles solid, we’ll need to make a list of those game objects. Try creating a 

