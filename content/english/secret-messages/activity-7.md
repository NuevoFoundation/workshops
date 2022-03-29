---
title: "Activity 7 - Input line"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: true
---

Congratulations!

You are very close to completely saving the nation.

All that remains is to be able to enter a complete sentence!

For this we only have to make a few small changes.

First, you need to use the statement to enter the string:getline()
```
string phrase;
getline(cin, phrase);
```
In this way, on the console we can enter a complete message, not a single word.

**Follow these steps**, and end the program to save the Kingdom:

1. In the main function, change the statement to 'cin >> name;' for 'getline(cin, name)'.

2. In both functions, add an if condition in the for cycle, so that if the character we are visiting is greater than or equal '>=' to the character 'a' and less than or equal '<=' to the character 'z', then let everything we had within the cycle be executed. This will serve not to encrypt exclamation points, commas, or spaces.

As an example, remember the structure of the input: 
First the message must go encrypted or encrypted, then a 1, if we want to encrypt the message, or 2, if we want to decrypt it. Finally, the keyword must go.

Create your own secret messages, or decrypt those of your peers!

{{< alert theme="warning" >}} **Be careful**, in this program we must always write the strings and characters in **lowercase letter**. {{< /alert >}}

Remember that you can always go back to the previous activities to remember something!

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/activity-7-english?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
