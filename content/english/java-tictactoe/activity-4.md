---
title: "4. Check the winner"
description: "write method to check the winner with an input board"
date: 2021-10-14T00:00:00Z
prereq: "Set up the Board!, Read and Process Input, Update the Game Board"
difficulty: "Intermediate"
weight: 5
---

## Displaying a Winner

Write a method `getWinner(String[] curBoard)` that returns the winner in a `String` with an `array` input of the current game board. 

- If the player wins, return `"Congratulations! \nYou won the Game :)"`.
- If the computer wins, return `"Game Over! \nYou lost the Game :("`.
- If there's a tie, return `"It's a TIE! Try again"`.
- If there isn't a winner yet, return `""`.

There are several ways to write this method.

Give it a try in the following Replit first; it will tell you if your method is correctly written!
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaTicTacToegetWinner" target="_blank">Launch Replit</a>

{{% notice note %}}
#### Ideas/Hints for writing the method `getWinner()`

- Concatenate `Strings` at the 3 positions that consist a horizontal, vertical, or diagonal row.
- Use `equals()` to check if each of the concatenated Strings is `"XXX"` or `"OOO"` for a winner. (You can even create another method that checks if an input `String` is `"XXX"` or `"OOO"`)
- If all the spots in the array is filled (a `for loop` can be helpful) and there is no winner, the game ends in a tie.
{{% /notice %}}

## Calling the Winner Method

In `main()`, call the method `getWinner()` after the line of code where you place the player's move, `"X"`.

Check if the game should continue (when there is no winner or a tie).

If there is a winner or a tie, print out the final board and the game result! And, add the line of code `break;`, which prompts the program to break out from the `while` loop!

## Repeat Step Above

In `main()`, repeat the code in the previous step (check winner and print result if needed) after you place the computer's move, `"O"`.

## Close the Scanner Object

Outside of the while loop, add the code `sc.close()` to close the `Scanner` object from reading any new inputs. 

It is good practice to close the `Scanner` object if we won't be getting any more inputs after we `break` from the `while` loop!

## All Done :)!

You should now have a functioning TicTacToe game! You should be so proud of yourself for finishing this workshop! Good Job 👍!

##### As an overview, this should be the structure of your code:
<img src="../images/code.png" height="500" alt="Tic Tac Toe: Your Java Project. void main(String args[]) that reads in player inputs, process inputs, and prompt each round of the game or print the winner of the game. void printBoard(String[] curBoard) is a method to print the game board. int getComputerMove(String[] curBoard) randomly returns an available move for the computer. String getWinner(String[] curBoard) returns the winner of the game/TIE or '' if the game should continue."/>
