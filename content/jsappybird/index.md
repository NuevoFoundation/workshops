---
title: "JSappy Bird"
description: "Learn about variables, functions, and conditionals all while building a flappy bird clone."
date: 2019-07-23T10:42:43-07:00
difficulty: "Beginner/Intermediate"
draft: true
---

![alt text](resources/_gen/images/flappy.png "JSappyBird")

1. **Download the required files.** <link_here>

The template contains the following files:  

- phaser.min.js, the Phaser framework v2.4.3.
- index.html, where the game will be displayed.
- main.js, a file where we will write all our code.
- assets/, a directory with 2 images.
- Activity 1.js
- Activity 2.js
- Activity 3.js

The index.html file is the main page for our flappy bird game which also uses our two Javascript (`.js`) files. The **phaser.min.js** file is our game framework we will use for making browser games. The other file is **main.js** which will hold all our Javascript logic. The three activity files will help you get your game into working condition. The parts that you'll need to add are marked with a 🐤🐤🐤.

Have fun!

### Variables

Variables are simply names that we can give to values such as strings, numbers and Booleans. We use variables to store information so the computer can keep track of it. Variables are created by using the `var` keyword and the name of the variable. Then you can assign that variable to the information that you want to store by using a `=` followed by the information.

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

## Activity 1: Let's utilize both Booleans and Boolean expressions

### Conditionals

We can use if statements to run a code statement only if certain conditions are met.

For example:

```js
if (isRainingOutside == true) {
    takeUmbrella = true;
}
```

Inside the `()` beside `if`, you should specify a *Boolean expression*. **Booleans** are `true` or `false` statements. We can utilize this in our if statement. If the expression is `true`, the code inside `{ }` is executed.

We can also use Boolean expressions to check if a number is in a specific range:

![Comparison Operators](https://imgur.com/F9gGHiI.png)

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

#### Open `Activity 1.js` where you'll be adding a conditional that checks that the bird in between the top of the screen (y = 0) and the bottom of the screen (y = 490)!

## Activity 2: Lets now add a function to that causes the bird to jump

### Functions

**A function can be thought of as a task.** Some tasks are short and simple like adding `1 + 1` or saying `‘Hello World!’`. Functions can be used to run the same tasks multiple times. In this case, we’ll be writing a function to make the bird jump!  

“Jumping” in this game is just changing the bird’s *y position*.

#### Open `Activity 2.js` where we'll be adding a function called `jump`.**

We can do that with this statement inside the `jump` function:  

```js
bird.body.velocity.y = -300
```

The number can be adjusted depending on how high you want the bird to jump! Try changing the number to see differences to how high the bird jumps when you press the spacebar down.

Now your bird can fly through the air!

## Activity 3: Let's add obstacles

Currently, your bird doesn't really have anything to dodge on the screen, which seems a little too easy! We can use code to increase the difficulty of the game by adding objects to dodge! In order to do this, you’ll need to use conditionals and for loops. We already covered conditionals, so now let’s go over loops.

### Loops

Loops are used to run a block of code multiple times. There are many types of loops, but the one that you'll use for this project is a for loop.

For loops are formatted as such:

```js
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```

- Statement 1 is ran once before running the code inside of the `{ }`.
- Statement 2 is used to define the condition in which the loop will stop running.
- Statement 3 is ran on each iteration of the loop.

For example

```js
var sum = 0;
for (var i = 0; i < 7; i += 1) {
    sum = sum + 1;
}
```

After this code runs, `sum` will be 6. This is because the loop added 1 to that variable 6 times.
You'll notice that we created a variable called `i` in the first statement in the for loop. This variable is then used to track
how long the loop should run. On each run through the loop, we check if `i` is still less than 7 and if it is, we run the code in
the brackets and then add 1 to `i`.

This process repeats until `i < 7` is false.

We can also use `i` in the code within the brackets:

```js
var sum = 0;
for (var i = 0; i < 7; i += 1) {
    sum = i + 1;
}
```

This code performs the same operation, but uses `i` in the brackets.

You can see a for loop in action here: <https://codepen.io/nayomitchell/pen/JgNoQe>! Try changing the numbers in the different statements.
Can you figure out how to get the loop to **count down**?

___

Now back to our game. The screen can fit 8 blocks on it, so we need a for loop that runs 8 times. In `Activity 3.js`, you'll need to add a for loop around the code that adds one obstacle on the screen.

We have another problem now! The game is too hard since there's no way for your bird to get through!
Let's add a gap in the wall of obstacles for your bird to fly through!

___

Above the code you just edited, there's a variable called `hole`. This variable is a number between 1 and 6, which represent where the gap should be in the wall.
What we want to do is skip creating the obstacle **`if`** the `i` in the loop is **the same** as `hole`. We can use a conditional to skip creating a block in the wall -- leaving an area to fly through!

Currently, the wall is made by adding a pipe to the screen each time the loop runs. Try a conditional around `addOnePipe` in the loop that'll cause `addOnePipe` to only run when `i` is not the same number as hole.

Now that you've done these activities, you should have a working game! See how high of a score you can get!
