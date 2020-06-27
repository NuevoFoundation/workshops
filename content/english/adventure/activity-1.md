---
title: "Starting up"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 2
---

Open your favorite internet browser (such as Edge, Firefox, Google Chrome, Internet Explorer) and go to https://repl.it. Scroll to the bottom of the page, look for ‘languages’, search for Python and click it.

![#Can't find image](../img/replLang.png)

You should see something like the following screen:

![#Can't find image](../img/replSU.png)

We will ignore some of the details on this screen, but we will go over some of the basics that show up. The `main.py` file contains code, or instructions for the computer to run. Anything that results from running the code will be displayed on the right side. This window is called the console.

# Writing to Console (Printing)

Let’s start by doing a print statement. A print statement allows you to take control of the computer and make it print something out!

To start, copy and paste this text in your Repl.it window:

```python
print("Hello, World!")
```

Hit **run** and watch your console say ”Hello, World!” on the screen to the right! `print` tells the computer to print the sentence within the parentheses `()` into the console, or the screen on the right.
![#Can't find image](../img/helloWorld.png)

Note: The RUN button looks like this:
![#Can't find image](../img/run.png)

# Comments

If at any time during this activity, you wish to write notes to help you understand the code, you can use the `#` symbol to create a comment. Any text after the `#` symbol will be ignored by the computer. Try adding a comment above your first line of code and press **run**. You will see that the computer will ignore your comment.

```python
#This is my first line of code
print("Hello, World!)
```

![#Can't find image](../img/commentHello.png)

Be careful, if you remove the `#` symbol, your code will not work!
![#Can't find image](../img/commentHelloError.png)

{{% notice warning %}}

## HELP! I got a lot of red text!

If you see any red text, you have encountered some errors! Please ask for help. In particular, beware of the following when coding in Python:

1. Make sure the sentence you wish to print is **surrounded in quotation marks** and that the sentence is **inside the parentheses**.

![#Can't find image](../img/redLine.png)

2. Spacing in Python is very important. Make sure you don’t have any unnecessary spaces or tabs at the beginning or at the end of each line, as Python won’t be able to read the code otherwise. For example, don’t put any spaces before `print`, or any spaces after the last parenthesis in `print("Hello, World!)`.

{{% /notice %}}

# Activity 1

1. Without removing the quotation marks, try changing `"Hello, World"` to another sentence. (For example – `"My name is Nuvi!"`) Press **run** to see if anything changes.
2. Add another print below the current line to print a second sentence below the first sentence.
3. Press **run** to see if two sentences are printed out.

<iframe height="600px" width="100%" 
 src="https://repl.it/@nuevofoundation/python-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

We will use printing a lot in the later lessons, so make sure you understand this before continuing!
