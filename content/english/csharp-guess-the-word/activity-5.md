---
title: "Activity 5 - Use conditional statements"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 15
---

## Activity 5

This activity is split into two parts. Use your knowledge of `if`-`else` statements to complete the activities. As always, press **run** after completing each part to check for errors.

### Activity 5.1

After the player guesses a letter, and we have checked whether the letter appears in the word, we need to check if the entire word has been guessed. If the entire word has been correctly identified, we should let the computer know that the player has won the game. Use an `if`-statement to change the value of the won variable only if the number of letters correctly guessed equals the number of letters in the word to guess.

### Activity 5.2

At the end of the game, we should let the player know if they won or lost the game.

- If the player has won the game, print out to console `You won!`.
- Else, tell the player that they lost, and print out the correct answer. For example, if the player could not guess the correct answer `"Hello"`, print out `You lost! The answer was 'Hello'`.

To test both parts of the activity, set the word bank to only contain one two-letter word (see **Activity 2** if you forget how to do this). Press **run**, and correctly guess the word when playing the game. Make sure `You won!` is printed out. **Run** again, and check that `You lost!`is printed out when you lose the game.
