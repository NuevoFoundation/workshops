---
title: "Using Repl.It"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

{{< youtube sdO27-l4aqM >}}

In order to help the Kin and Queen, we will develop a program, in a programming language called C++.  With that program we will be able to input a message, and the program will modify it to make it secret.

## Using Replit

Today you will be using Replit. Before starting, you will need to sign up for a Replit account, if you do not yet have one. 

Click the button below to sign up for a Replit account - you will need an email account in order to sign up. If you already have a Replit account, you can login to your account using the below button as well.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/signup" target="_blank">Sign up for Replit</a>

<img src="../media/replit-signup.png" height="300" alt="Replit sign up form" />

Next, launch the Replit console we will use today by clicking the below button. You should see the screen below.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-0-english" target="_blank">Launch Replit</a>

<img src="../media/replit-start-screen.png" height="300" alt="The starting screen of a repl" />

We will now fork the Repl, which simply means to make a copy of the program, so that we can make our own changes to it. Click on the "Fork Repl" button on the top right, and then the "Fork Repl" button.

<img src="../media/replit-fork.png" height="300" alt="Forking a repl to make a copy of the program" />

After forking the Replit, you will see a window similar to the one below:

<img src="../media/replit-window.png" height="300" alt="Replit window" />

{{% notice warning %}}
Every time you see the "Launch Replit" button, you will need to follow the above steps to fork the repl in order to complete an activity. Ask for help if you are having trouble with forking the repls!
{{%/notice %}}

Before getting any further let's understand how these windows works. The file `main.cpp` contains the code, or instructions that the computer will understand and run.  Clicking on **Run** button will command the computer to execute the instructions in that file.  The results can be seen in the **console** tab, in the lower area of Replit. 

Next, let's explain the code that we have in `main.cpp`. 

{{% notice tip %}}

### Libraries and "#include"

Go to the beginning of `main.cpp`. You will find there the following line:

```
#include <iostream>
```

This directive or instruction refers to the `iostream` library.  A **library** is a common place where a set of C++ functions, typically related to a particular common problem or topic, are grouped together. There are libraries to draw, to create and manage internet connections, to perform mathematical operations and for several many other purposes. `iostream` is a very basic library that allows us to receive or print out messages to and from the console.

### Comments

The grayed out line(s) in `main.cpp` starts with `//`. These are known as **comments**.  Comments are useful in our C++ programs as a way to document them better, and explain in more detail what the goal of the instructions is. Comments are not instructions and are actually ignored by the computer. 

### Namespace std
```
using namespace std;
```
This specific line allows us to access a few already reserved C++ words.  A **reserved word** is a word that has a specific meaning in a given programming language; due to that, it cannot be reused for any other purpose. Here, we are referencing the reserved word **std** to use the code from the already well-designed and developed C++ standard. `using namespace std` means we want to make reference to the standard namespace.

### Main Function
```
int main(){
    
    return 0;
}
```
`main` is a mandatory function in any C++ program. It is the entry point of our program. Within the open and closing braces `{ ... }` we will place all the instructions that we wish the computer to execute. After clicking **Run** the computer will execute those instructions. `return 0;` indicates the program has finished successfully its execution. If instructions were placed after that line, the computer would not execute them.
{{% /notice %}}

{{< alert theme="warning" >}}All the C++ instructions must end with a **semicolon** `;` {{< /alert >}}
