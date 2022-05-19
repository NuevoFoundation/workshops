---
title: "Activity 1 - Output"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

We first need to enter a message for our program to be able to create secret messages.

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/activity-1-english?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

To do that we are going to start by telling the computer to show in console for whom is that message. This is the command that we will be using.

```
cout << "Hello Developer!" << endl;
```

Let's learn more about this line of code, shall we?

{{% notice tip %}}

### Strings

Everything that we see wrapped in quotation marks (`""`) are called **string**s. A string is sequence of characters, numbers, letters or symbols.

In the line of code that we wrote before, `"Hello Developer!"` is a string. `"123"`, `"abc!"` or `"Hello"` are also examples of strings. However, `123`, `abc!` or `Hello!` are not strings since they are not wrapped between quotation marks.

### Print to Console

To print to the console, we use `cout`. Every `cout` will be followed by `<<`, while `endl` that means we've reached end of the line. Anything wrapped by `<<` will be printed to the console. In our case, if we hit **Run**, the string `Hello Developer!` will be printed to the console.

{{% /notice %}}

Copy the above line and paste it in the `main.cpp` file that we had at the beginning. **Run** the program and see what happens. Try changing the string to `"Hello world!"` or `"For the queen"`.

{{% notice warning %}}

### Help! 

If after clicking the **Run** button, an error message in red appears, it means that there is something wrong with your code. Please ask for help from your instructor.

You should also check for the following:
1. Ensure the spelling, capitalization, and symbols used match with the example given.
2. Make sure that you add a semicolon at the end of each line of code. 

{{% /notice %}}
