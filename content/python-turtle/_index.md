---
title: "Python Turtle"
description: "Learning Python with Turtle"
date: 2019-07-25T13:24:17-07:00
prereq: ""
difficulty: "Beginner"
download: "URL to GitHub folder goes here"
image: ""
icon: "fab fa-python"
draft: false
---

# Python w/Turtle

# Introduction:

Welcome to the Nuevo Beehive! You are right on time to help our new baby bee Alex.

![](https://media1.giphy.com/media/ozjz5omKqJYex8CaDV/giphy.gif)

We have to teach Alex how to live in a beehive. Are you up for it? Alex lives in a country named Turtle Islands. Residents of turtle island speak a language called Python. We are going to use Python to teach Alex. Follow the next steps to understand how to use the Python language.

# Part 1 - Building a Honeycomb

To help Alex live in a beehive, he needs to learn how to make a honeycomb! To draw a honeycomb we will be using something called Turtle, which is a tool that we can use to draw pictures!

## Using Repl.it

Open your favorite internet browser (such as Edge, Firefox, Google Chrome, Internet Explorer) and go to https://repl.it/repls/ProductiveFilthyBetaversion[.](https://repl.it/languages/python_turtle) You should see the following screen:

![](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563991962528_repl.png)

Click the Fork button to create a copy of the code for yourself to work on.
Before we start, lets take a second to understand the starter code that we have provided for you. The first things to notice is the line that looks like this:

    import turtle

This statement allows us to use the turtle drawing tool by importing a module that contains all of the turtle’s code.

The next thing to notice are the gray lines that start with ‘#’. These are called **comments** and are ignored by the computer. They are just notes in the code that helps to explain what is happening in plain English. They are often used so that when other developers work on the same code, they will have an easier time reading and understanding what is going on.

## Draw a Colored Line:

Before Alex can learn how to create a beehive, he must first learn how to create a colored line. We will be doing this in our draw_line() **function** (more on functions later!). There are two parts to this. First we need tell the turtle what color we want the line to be. To do this you will type something like this:

    turtle.color("yellow")



    **Strings**:
    Anything you see in **quotation marks** is called a **string**. For example, “123” and “abc”, and “green” are strings;  but 123, abc and green are not because there are no quotation marks! A string is just a sequence of characters (letters, numbers, or symbols).


    **Methods:**
    turtle.color() is a **method.**  We use methods to get the turtle to perform certain actions. In this case, turtle.color() is changing the color of the lines it draws to what color we tell it to. We told it to change the color to yellow by sending it the **string** “yellow” as an **argument**.
        **Arguments:** Arguments are inputs that you pass in to **methods** to use. In our example, turtle.color() needs a color **string,** so we passed in “yellow” as an **argument** to the method. We could also have told it to change the color to something else, but it had to have been a color that turtle.color() recognizes. The colors that it recognizes are : "red", "orange", "yellow", "green", "blue", "purple", "black”, “pink”, and “gray”. If we sent in anything besides one of these color strings, we would get an error!

---

Now that we have picked the color that we want, we can now draw a line! To draw a line there are two **methods** that we can use:

    turtle.forward(50)
    turtle.backward(50)

(explain in diagram: Turtle.forward(50) will make the turtle go forward 50 pixels and draw a line in the direction its facing, and turtle.backward(50) will do the same but in the opposite direction. )

    **Integers:** An integer is just any whole number. In this example, turtle.forward() and turtle.backward() expect an **intege**r as an argument instead of a string. This is because the argument represents the number of pixels you want the turtle to move when drawing. A string would clearly not work for these methods!

Now your draw_line() function is done and should look something like this:

Now that we finished our function, we are going to want to run it. Before we can run it though, we have to first call it by typing out draw_line(). We already have this in the starter code for you, but it’s commented out! To uncomment it so that the computer doesn’t ignore it, remove the ‘#’ character. Now if you hit **run** then you should see a colored line, like this:

Before moving on to the next step, be sure to comment this line back out by adding a ‘#’ to the front so that it doesn’t mess with the next steps.

## Draw a Square:

Kudos! You helped Alex draw a line! Now let’s step it up and help Alex draw a square. To draw a square, we need to follow these steps:

1. Draw the 1st line for n steps
2. Turn left by 90 degrees
3. Draw the 2nd line for n steps
4. Turn left by 90 degrees
5. Draw the 3rd line for n steps
6. Turn left by 90 degrees
7. Draw the last line for n steps

For drawing the lines, go ahead and use the functions you previously used or drawing the line. To turn left, you need to use the _turtle.left()_ function. To turn 90 degrees left, you need to pass 90 as the argument to the _left_ function: _turtle.left(90)._ Write the code and run it. Be sure to remove the ‘#’ from the line that calls draw_square to uncomment it! Check if the turtle draws a square.

After making sure that the turtle draws a square, remember to comment the line back out again with a ‘#’.

## Draw a Square (Loops):

Great! You drew a square. But aren’t we writing the same lines again and again. Notice we have to draw a line and turn left 4 times. Wouldn’t it be great if we can give instructions once and tell the program to repeat it 4 times? Fear not! We can!
To do this, we need to use loops. Loops run a set of instructions multiple times. Taking the example of drawing the square, we can write a loop like this:

      def draw_square():
      for i in range(4):
        # You will write your instructions here to run them in a loop
        # 1. Write instruction for the forward motion.
        # 2. write instruction for turning left.

Let’s understand what this code does.
**for i in range(4):** This statement tells the program to run the instructions in a loop. range(4) will run the instructions 4 times. The variable **_i_** _keeps track of the_ count.

> Tip: All the statements following the “for” statement with a <tab> space in the beginning is considered a part of the loop.

## Draw a Hexagon:

Great job! You just drew your first shape in Python with turtle! Now let’s slightly change the code we already wrote to draw a square to instead draw a hexagon because Alex is a bee that needs to draw hexagons to build his first honeycomb. Notice that the code you wrote previously was part of a **function** called **draw_square()**.

    **Functions:**
    A function is a way to group together lines of code to do something. For instance, turtle.color(“green”) sets the turtle’s color to green and turtle.forward(100) moves the turtle back 100 steps, but what if we want to always do these two actions together? Well, we can put them in a function called **draw_line()** whenever this function is called, both of these actions take place.
    **Quick tip:** Always make sure the names of your functions are descriptive enough to explain what the code in the function does.
    def draw_line():
      turtle.color("red")
      turtle.forward(50)
    draw_line()
    Take a look at line 4, this is the **function call** for the **draw_line()** function that was defined in lines 1 - 3. A function call runs the code that’s defined in the function with the same name. So, let’s try that out by making our own **draw_hexagon()** function! Remember to include the function definition header, the number of sides a hexagon has, and the angle associated with a hexagon: 60 degrees.

## **Draw a H\*\***oneycomb\*\*

![](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563991066657_honey_comb.png)

Congrats! You drew a hexagon, but now we still have to draw a honeycomb which is just a bunch of hexagons. That means we can use the **draw_hexagon()** function you already wrote to make our honeycomb! To make our honeycomb, we will be drawing 6 hexagons, which means we need to use a loop yet again! This means we have to create a loop that repeats 6 times. Inside the loop we have to first draw a hexagon, and then move the turtle so it can draw the next hexagon. This means that after we draw each hexagon, we need to tell our turtle to go forward **50** **pixels** (or however many pixels you used to draw the line in draw_line()) and then turn right **60 degrees** (which is the degree for an angle in a hexagon). Inside the loop, write down the three lines that we need to tell the turtle to **draw a hexagon**, **move forward**, and then **move right**. We’ve already told the turtle to go forward before, but can you guess how we can tell the turtle to go right?

# **Part** **2** **- B\*\***uilding a Mandala\*\* **F\*\***lower\*\*

Great job! You finished building a honeycomb for Alex’s beehive, but wouldn’t it be nice to add a flower (This is where Alex gets his pollen!) to the picture as well? In part 2, we will be creating a mandala flower!

## Move the turtle

Our first step is to move the turtle to a new location to draw the flower (we don’t want to draw the flower on top of the beehive!). To do this, we first need to use the following methods:

    turtle.penup()
    turtle.goto(x,y)
    turtle.pendown()

First tell the turtle to pick up its pen so it doesn’t draw while it is moving. Then we are telling the turtle where to move with turtle.goto(x,y). After that we tell the turtle to put its pen back down so it can start drawing again.
Quick tip: The x, y in the turtle.goto() function are x and y coordinates, we want to change the x, y coordinates of the turtle from (0, 0) which is the default, to somewhere a little farther away so that the mandala flower doesn’t cover up part of the honeycomb.

## Figure 8

![](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563992981796_figure8.PNG)

Great! Now let’s make a figure 8 as the first step to making a mandala flower! A figure 8 is just two circles that are opposite to each other.
To do this we can make use of the turtle.circle(put a number here) method, which takes a number as the radius of the circle. Having the radius as an **argument** means we can decide how big or small the circle should be.
Quick tip: 2 \* radius is how wide the circle is.

    import turtle
    turtle.circle(10)

In the above example, the circle is 20 units wide and the circle is drawn in a counterclockwise direction.
But if the argument to turtle.circle() is negative, then the circle is drawn in a clockwise direction and it is opposite to the original version.
But we’re not done quite yet, we need an extra step to rotate the turtle by some number of degrees to prepare to draw the next figure 8 for our mandala flower!
And now, we’re done creating our first figure 8!

## Create a mandala flower

We can now use the figure 8 function to create a mandala flower! To do this we need to use a… you guessed it, a loop! In the loop we will call the figure 8 function we wrote earlier to create a figure 8 and then rotate the turtle either left or right a certain number of degrees. To make a mandala flower, it’s a good idea to create a loop that repeats at least 35 times.

## Color your mandala flower

![](https://paper-attachments.dropbox.com/s_F078714AB8FA59FD292476DB5E3304D54CD817148B6A8087A90D63D6C59A7C0D_1563989987816_mandala+one+color.PNG)

Now that we have the shape of a mandala flower, it’s time to color it! We’re still going to use the turtle.color() method, however this time we’re going to use an RBG value instead of a string color value.
But what is an RGB value and what does RGB stand for?
RGB stands for Red Green Blue and when we combine different amounts of these colors, we can create more varied colors, such as powder blue, golden yellow, and salmon pink.
Format of an RGB value: (Amount of Red, Amount of Green, Amount of Blue)
Each number signifying Red, Green, Blue values must be between 0 and 255, inclusive. A valid Python turtle color expression would be: turtle.color(30, 100, 238).

## Randomize the color of your mandala flower petals

![](https://paper-attachments.dropbox.com/s_F078714AB8FA59FD292476DB5E3304D54CD817148B6A8087A90D63D6C59A7C0D_1563989900782_mandala+colors.PNG)

We’ve successfully set the color of the mandala flower to an RGB value, now wouldn’t it be interesting if we could change the color of the individual mandala flower petals?
However, by using Python’s random library\*, this is actually possible! We can use the random.randint(lowest, highest+1) function to choose a random value for the Red, Green, or Blue categories. To choose a value that is between 0 and 255 inclusive, we need to do random.randint(0, 256) because this method needs the second number to be 1 greater than the greatest value allowed.
Note: A software library is a place where a lot of related methods are stored, like how all the methods to move the turtle are in the turtle library for the Python language.

Congratulations! You helped Alex make a honeycomb and a flower! He can now happily live in his beehive while making honey! Your final image should look something like this:

![](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563991731125_final_image.png)

    Stuck? Check the Answer key for the activity that you are stuck on!
    #Activity 1
    def draw_line():
      turtle.color("yellow")
      turtle.forward(50)
    #Activity 2
    def draw_square():
      turtle.color("red")
      turtle.forward(50)
      turtle.left(90)
      turtle.forward(50)
      turtle.left(90)
      turtle.forward(50)
      turtle.left(90)
      turtle.forward(50)
      turtle.left(90)

    def draw_square_using_for_loop():
      turtle.color("red")
      for i in range(4):
        turtle.forward(50)
        turtle.left(90)

    #Activity 3
    def draw_hexagon():
      for i in range(6):
        draw_line()
        turtle.left(60)

    #Activity 4
    def draw_honeycomb():
      for i in range(6):
        draw_hexagon()
        turtle.forward(50)
        turtle.right(60)

    #Activity 5
    turtle.penup()
    turtle.goto(300, 300)
    turtle.pendown()

    #Activity 6
    def figure_8():
      turtle.circle(50)
      turtle.circle(-50)
      turtle.left(10)

    #Activity 7
    def mandala_flower():
      for i in range(35):
        figure_8()

    #Activity 8
    def mandala_flower():
      turtle.color(30, 100, 160)
      for i in range(35):
        figure_8()

    #Activity 9
    def mandala_flower():
      for i in range(35):
        turtle.color(random.randint(0, 256),random.randint(0, 256), random.randint(0, 256))
        figure_8()
