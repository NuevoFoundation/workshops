---
title: "Reading from the Console"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 14
--- 

Now that we know the basics about variables, we can ask for input from the user. Use the following line to tell our program to wait until the user types something into the console. Then, the computer takes whatever is typed into the console, and stores it into the variable called <b>value</b>.

<pre> value = <font color="blue">input</font>()</pre>

Here's and examples of how to use <font color="blue">input</font>() to accept user input:

<pre><font color="blue">print</font>(`"What's your name?"`)

value = <font color="blue">input</font>()

<font color="blue">print</font>(`"Hello"` + value + `"!"`)</pre>


Give this a try! When you hit run, you'll notice that the below image doesn't appear on the console yet.

![alt text](../media/end_symbol.png "image of the console end symbol")

![alt text](../media/console_read_waiting.png "image of how the console looks waiting for user input")

This is because the program is waiting for you to type something! Enter your name or 'Nuvi' into the console on the right, press Enter, and check that it prints out correctly. 

![alt text](../media/console_read_input.png "image of how the console looks after it has read user input")

{{% notice note %}}

Even if we type in a number, such as 8, the variable value will contain the string `"8"`. Be careful when attempting to do math on input variables!

{{% /notice %}}
