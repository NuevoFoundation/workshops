---
title: "The Basics - Drawing a colored line"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/uSQGtnlot2s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Before Alex can learn how to create a beehive, he must first learn how to draw a colored line. We will add code to the below Trinket window, and we will do this in two parts.

<iframe src="https://trinket.io/embed/python/1363ac22be" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

First, we need tell the turtle what color we want the line to be. To do this, let's type in:

``` python
turtle.color("orange")
```

Let's try to understand this line of code in more detail.

{{% notice tip %}}

## Strings

Anything you see in **quotation marks** is called a **string**. A string is just a sequence of characters (whether they are letters, numbers, or symbols).

In the code above, `"orange"` is a string. Other examples of strings include `"123"`, `"abc!"` and `"green"`. Be careful, `123`, `abc!` and `green` are not strings because there are missing quotation marks!

## Methods

`turtle.color()` is a **method.**  We use methods to get the turtle to perform certain actions. In this case, `turtle.color()` is changing the color of the lines it draws to what color we tell it to. We told it to change the color to orange by sending it the **string** `"orange"` as an **argument**. 

## Arguments

Arguments are inputs that you pass in to **methods** to use. In our example, `turtle.color()` needs a **string** argument representing the name of the color to set the turtle, so we passed in `"orange"` as an **argument** to the method. We could also have told it to change the color to something else, but it has to have been a color that `turtle.color()` understands. The colors that it recognizes are: `"red"`, `"orange"`, `"yellow"`, `"green"`, `"blue"`, `"purple"`, `"black"`, `"pink"`, and `"gray"`. If we send in anything else besides one of these color strings, we get the default color, which is black.

{{% /notice %}}

Now that we have picked the color that we want, we can now draw a line! To draw a line there are two **methods** that we can use:

``` python
turtle.forward(50)
turtle.backward(50)
```

`turtle.forward(50)` will make the turtle go forward 50 pixels and draw a line in the direction it's facing, while `turtle.backward(50)` will do the same, but in the opposite direction.

{{% notice tip %}}

## Pixels

An image is composed of thousands, if not, millions of pixels. A pixel is a unit of measurement for digital images, similar to how we measure weight in pounds, or long distances in miles.

## Integers

An integer is just any whole number, whether positive or negative. In this example, both `turtle.forward()` and `turtle.backward()` expect an **integer** as an argument instead of a string. This is because the argument represents the number of pixels you want the turtle to move when drawing. A string would clearly not work for these methods!

{{% /notice %}}

Let's make the turtle go forward, so type in `turtle.forward(50)`. Now your code should look something like this:

``` python
import turtle

turtle.color("orange")
turtle.forward(50)
```

Now that we have completed our code, press **run**. You should see the following in the result screen:

![alt text height="600px" width="70%"](../media/basics-trinket.png "Trinket window")

If so, great! If not, please ask for help.

As an exercise, try understanding what the following line of code does, and try adding this to your code. What does it do?

``` python
turtle.shape("turtle")
```

{{% notice warning %}}

## HELP! Nothing shows up on the screen!

If, after pressing **run**, you don't see anything on the screen, check to see if there is a **red x** beside the **console** tab (the **console** tab is right beside the **result** tab in the middle of the screen). If you do, you have encountered some errors! Please click the **console** tab and ask for help. Beware of the following when coding in python:

1.	Do not use any capital letters.
2.	Make sure that that none of the lines you have written so far start with any spaces.
3.	Ensure that the name of the color that you have chosen is surrounded in quotation marks, and that the color is between the parentheses in `turtle.color()`.

{{% /notice %}}
