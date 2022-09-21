---
title: "Reading from the Console"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 6
prereq: "Python Basics: Variables"
difficulty: Intermediate
--- 

Now that we know the basics about variables, we can ask for input from the user. Use the following line to tell our program to wait until the user types something into the console. Then, the computer takes whatever is typed into the console, and stores it into the variable called **value**.

```python
value = input()
```

Here's and examples of how to use `input()` to accept user input:

```python
print("What's your name?")
value = input()
print("Hello " + value + "!")
```

Give this a try! When you hit run, you'll notice that the below image doesn't appear on the console yet.

![Screenshot of the console end symbol](../../img/end_symbol.png "image of the console end symbol")

![Screen shot of the console waiting for user input](../../img/console_read_waiting.png "image of how the console looks waiting for user input")

This is because the program is waiting for you to type something! Enter your name or 'Nuvi' into the console on the right, press Enter, and check that it prints out correctly. 

![Screen shot of the console after the user has given input and the program completed](../../img/console_read_input.png "image of how the console looks after it has read user input")

{{% notice note %}}

Even if we type in a number, such as `8`, the variable value will contain the string `"8"`. Be careful when attempting to do math on input variables!

{{% /notice %}}


### Challenge

Let’s see if we can write a program that first prints the following two lines to console:

    Welcome!
    How can I help you today?

Afterwards, the console waits for user input. After the user types something in the console and presses _Enter_, the computer prints out:

    You asked: [input]?
    I don’t know the answer to [input]. Goodbye!

`[input]` should be replaced with whatever the user had typed into the console. For example, if you wanted to ask "How old am I?", the computer will print out that it doesn’t know the answer to that.

{{% notice tip %}}

This is very similar to the example that we went through together above. Try making some small changes from what we have already given you.

{{% /notice %}}

<iframe height="600px" width="100%" 
 src="https://repl.it/@nuevofoundation/python-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
