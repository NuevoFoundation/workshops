---
title: "Activity 4 - Putting it all together"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 13
---

## Activity 4

This activity has four parts. This is a great time to use your knowledge of comments, numbers, variables, and reading from console to complete the 4 activities. Some background information for each activity is provided below, and hints are provided in the code. After each part, press **run** and make sure there are no errors present in the console.

### Activity 4.1

First, let's introduce some more code into our game. Find the two lines of code which start with `TODO (ACTIVITY 4.1)` (one is at approximately line 60, and the other at approximately line 130). Delete both lines of code entirely. This unlocks the main behavior of the game, such as checking if the letter guessed by the player is found in the word to guess.

Unfortunately, after pressing **run**, it seems like the game does not wait for user input, and continuously guesses `'C'` instead! This is no good, so let's fix this in the next part.

### Activity 4.2

When the player makes a guess, we need to take the guessed letter and store it in a variable. The variable will be used to check if the letter appears in the word to guess. Use `Console.ReadLine` to wait for user input and store the user input in the input variable. Note: we have already declared the variable input already, so you do not need to use the `var` keyword.

To check if you have done this correctly, press **run**, and you should now be able to type in a letter into the console.

### Activity 4.3

Every time a letter is guessed correctly, we need to increment (add one to) the number of correctly guessed letters. Use the `lettersRevealed` variable to change the number of correctly guessed letters.
Press **run** to make sure no errors occur. We have also provided some code to print out the value of the `lettersRevealed` variable for testing purposes. Make sure to delete this when you are done testing, since this is something we do not want to reveal to the player!

### Activity 4.4

Every time a letter is guessed incorrectly, the player loses a life. Decrement (subtract one from) the number of lives, using the `lives` variable. We will also tell the player how many lives they have remaining, when they make an incorrect guess, by printing the number of lives to the console.
Check if you have done this correctly by pressing **run**, guessing an incorrect letter, and seeing if the correct number of lives are displayed on the console.

{{% notice info %}}

### Fun Fact - Bugs

Recall in **Activity 4.1** that after uncommenting some code, we experienced some unexpected behavior. Any problems or unexpected behaviors in the program are called **"bugs"**. We fixed the bug introduced in **Activity 4.1** by introducing user input in **Activity 4.2**.

Even if you implemented everything correctly in the previous parts, if you keep playing for a while, another issue still occurs. What is it? We will fix this bug in **Activity 6**.

{{% /notice %}}
