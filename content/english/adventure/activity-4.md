---
title: "Reading from the Console"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 4
---

Now that we know the basics about variables, we can ask for input from the user. Use the following line to tell our program to wait until the user types something into the console. Then, the computer takes whatever is typed into the console, and stores it into the variable called **value**.
value = input()

Here’s an example of how to use `input()` to accept user input:

```python
print("What's your name?")
value = input()
print("Hello " + value + "!")
```

Give this a try! When you hit **run**, you’ll notice that the ![#Can't find image](../img/redArrow.png) doesn’t appear on the console yet. See below.

![#Can't find image](../img/name.png)

This is because the program is waiting for you to type something in. Enter your name or 'Nuvi' into the console on the right, press _Enter_, and check that it prints out correctly.

![#Can't find image](../img/helloNuvi.png)

Note: Even if we type in a number, such as `8`, the variable value will contain the string `"8"`. Be careful when attempting to do math on input variables!

# Activity 4

Let’s see if we can write a program that first prints the following two lines to console:

    Welcome!
    How can I help you today?

Afterwards, the console waits for user input. After the user types something in the console and presses _Enter_, the computer prints out:

    You asked: [input]?
    I don’t know the answer to [input]. Goodbye!

`[input]` should be replaced with whatever the user had typed into the console. For example, if you wanted to ask "How old am I?", the computer will print out that it doesn’t know the answer to that.

<iframe height="600px" width="100%" 
 src="https://repl.it/@nuevofoundation/python-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Hint: This is very similar to the example that we went through together above. Try making some small changes from what we have already given you.