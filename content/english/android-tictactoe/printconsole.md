---
title: "Printing to Console"
date: 2020-07-27T14:17:07.42-07:00
draft: false
hidden: true
weight: 4
---

# Printing to Console
Sometimes the game or application might not work the way you expect it to or you want to write something to console for logging purposes. Outside of debugging the application, you can use ```System.out.println()``` to write your message. Lookout for your messages in the "logcat" window at the bottom of Android Studio:
![System.out.println width="70%"](../resources/_gen/images/println.png "Logcat window in Android Studio showing messages created using the System.out.printIn logging function")

{{% notice tip %}}
## Working Together

1. Without removing the quotation marks, try changing `"Restarting the Tac-Tic-Toe Game!"` to `"Restarting the Tic-Tac-Toe Game!"` or any other sentence you like. Press run to see if anything changes.
2. Add another `System.out.println` below the current line to print a second sentence below the first sentence.
3. Press run to see if two sentences are printed out. If you see any red text, please ask for help.

{{% /notice %}}

{{% notice warning %}}
## HELP! I got a lot of red text!

If you see any red text, you have encountered some errors! Please ask for help or check the debugging page at the end of this tutorial. Beware of the following when coding in C#:

1. `out` and `println` start with a lowercase letter
2. `System` starts with an uppercase letter
2. Make sure the sentence you wish to print is surrounded in quotation marks, and that the sentence is between the parentheses
3. Do not delete any curly braces `{` or `}`

{{% /notice %}}

`System.out.println` is helpful when you want to fix bugs in code, but your user (the person using the app) can’t see text printed with this function. But we can do this with toasts! A toast is a quick, small text that we make visible to the user. Here’s how to make a toast:
![Toast Example width="50%"](../resources/_gen/images/toast_example.png "toast example. You can use the toast.makeText function with arguments context, the message string, and Toast.LENGTH_LONG or Toast.LENGTH_SHORT to display a welcom message, such as Welcome to Tic-Tac-Toe")