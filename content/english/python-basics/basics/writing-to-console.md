---
title: "Writing to Console (Print statement)"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="50%" height="500px" src="https://www.youtube.com/embed/NrbQCjlzhYc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Make your program talk to you!

**Print** statements are used to write something to the console. Use `print("Hello World")` to print *Hello World* in the output screen. We will later learn that print is a function and we use it to perform a print job. Whatever you pass to the `print` function is printed on the screen.
Let's start by doing a `print` statement. 

We will use printing a lot in the later lessons, so make sure you understand this before moving on to the next concept!

### Challenge 1
To start, write the following text into your Trinket main.py and click Run.

```python
print("Hello, World!")
```

Watch your console say "Hello, World!" on the screen to the right! `print` tells the computer to print the sentence within the parentheses `()` into the console window, or the screen on the right.

![alt text](../../img/print.png "hello world in python!")

<iframe src="https://trinket.io/embed/python/ce70252d93" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

{{% notice tip %}}
### Using " with printing

Did you notice that Hello, World! was surrounded by `"`? Did you try it without the `"` marks to see that it produced an error? But, if you tried `print(123)`, did you see that it works. That is because text (Strings in programming languages) requires  you specify that it is text by wrapping it in quote marks. But numbers do not require them.

Go back up and give try printing different things!
{{% /notice %}}

### Challenge 2

1. Without removing the quotation marks, try changing `"Hello, World"` to another sentence. (For example – `"My name is Nuvi!"`) Press **run** to see if anything changes.
2. Add another print below the current line to print a second sentence below the first sentence.
3. Press **run** to see if two sentences are printed out.

<iframe src="https://trinket.io/embed/python/ce70252d93" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

We will use printing a lot in the later lessons, so make sure you understand this before continuing!

{{% notice warning %}}

## HELP! I got a lot of red text!

If you see any red text, you have encountered some errors! Please ask for help. In particular, beware of the following when coding in Python:

1. Make sure the sentence you wish to print is **surrounded in quotation marks** and that the sentence is **inside the parentheses**.

![Example showing print statement done wrong (without quotation marks - print(Hello, World!)) and correctly (with quotation marks - print('Hello, World!'))](../../img/redLine.png)

2. Spacing in Python is very important. Make sure you don’t have any unnecessary spaces or tabs at the beginning or at the end of each line, as Python won’t be able to read the code otherwise. For example, don’t put any spaces before `print`, or any spaces after the last parenthesis in `print("Hello, World!)`.

{{% /notice %}}
