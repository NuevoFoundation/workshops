---
title: "Activity 7 - Input line"
date: 2019-07-25T13:24:17-07:00
weight: 8
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/xLAq5HggT6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Congratulations!

You are very close to completely saving the nation. All that remains is to be able to enter a complete sentence! For this we only have to make a few small changes. First, you need to use the statement to enter the `string:getline()`.
```
string phrase;
getline(cin, phrase);
```
By doing it this way, the console will be able to accept a complete message, not just a single word.

Follow these steps, and complete the program to save the kingdom:

1. In the `main` function, change the statement `cin >> name;` to `getline(cin, name);`.
2. In both functions, add an `if` condition in the `for` loop, and execute the contents of the `for` loop only if the current character is greater than or equal '>=' to the character 'a' and less than or equal '<=' to the character 'z'. By doing so, we can ignore encrypting and decrypting exclamation points, commas, spaces, and other special characters.

Don't forget how this program works:
1. First, the program asks for the user's name.
2. Next, we must decide if the message must be encrypted or decrypted by typing `1` (for encryption) or `2` (for decryption).
2. Finally, we type in the message to encrypt or decrypt.

Create your own secret messages, or decrypt those of your peers!

{{< alert theme="warning" >}} **Warning:** in this program we should always write the strings and characters in **lowercase letters**. {{< /alert >}}

Remember that you can always go back to the previous activities to review anything!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-7-english" target="_blank">Launch Replit</a>
