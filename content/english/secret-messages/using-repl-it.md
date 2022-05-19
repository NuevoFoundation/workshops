---
title: "Using Repl.It"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

In order to help the Kin and Queen, we will develop a program, in a programming language called C++.  With that program we will be able to input a message, and the program will modify it to make it secret.

## Using Repl.it

To be able to run our C++ programs we will use a tool called Repl.it that will allow us to build and run C++ code in an interactive window like the one below. We will use that tool throughout the entire tutorial.

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/activity-0-english?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Before getting any further let's understand how these windows works. The file `main.cpp` contains the code, or instructions that the computer will understand and run.  Clicking on **Run** button will command the computer to execute the instructions in that file.  The results can be seen in the **console** tab, in the lower area of Repl.it. 

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
