---
title: "Activity 7 - Input line"
date: 2022-02-23
weight: 4
draft: true
---

Congratulations!

You are very close to completely saving the nation.

All that remains is to be able to enter a complete sentence!

For this we only have to make a few small changes.

First, you need to use the statement to enter the string:getline()

string phrase;
getline(cin, phrase);
In this way, on the console we can enter a complete message, not a single word.

Follow these steps, and end the program to save the Kingdom:

In the main function, change the statement to .cin >> name; getline(cin, name)

In both functions, add an if condition in the for cycle, so that if the character we are visiting is greater than or equal to the character and less than or equal to the character, then let everything we had within the cycle be executed. This will serve not to encrypt exclamation points, commas, or spaces.>=a<='z'

As an example, remember the structure of the input: First the message must go encrypted or encrypted, then a 1, if we want to encrypt the message, or 2, if we want to decrypt it. Finally, the keyword must go.

Create your own secret messages, or decrypt those of your peers!

{{< alert theme="warning" >}} Be careful, in this program we must always write the strings and characters in lowercase letter. {{< /alert >}}

Remember that you can always go back to the previous activities to remember something!

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/actividad-7?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin-allow-scripts allow-modals"></iframe>
