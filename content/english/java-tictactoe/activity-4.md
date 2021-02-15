---
title: "4. Check the winner"
description: "write method to check the winner with an input board"
date: 2020-07-23T00:00:00Z
prereq: "Set up the Board!, Read and Process Input, Update the Game Board"
difficulty: "Intermediate"
weight: 5
---

{{% notice tip %}}
#### Prerequisites (from Java: Basics) 
- activity-1: <a href="../../java-basics/activity-1" target="_blank">Print Statements and Comments</a>
- activity-2: <a href="../../java-basics/activity-2" target="_blank">Variables and Types</a>
- activity-3: <a href="../../java-basics/activity-3" target="_blank">Operators</a>
- activity-4: <a href="../../java-basics/activity-4" target="_blank">Control Structures</a>
- activity-5: <a href="../../java-basics/activity-5" target="_blank">Methods</a>
- activity-6: <a href="../../java-basics/activity-6" target="_blank">Object and Classes</a>
- activity-7: <a href="../../java-basics/activity-7" target="_blank">Data Structures (Array & ArrayList)</a>

These are the concepts from the `Java: Basics` workshop that we will use in this activity. Please refer to these activity to review or learn the concepts before continuing!
{{% /notice %}}

## 1. Displaying a Winner
Write a method `getWinner(String[] curBoard)` that returns the winner in a `String` with an `array` input of the current game board. 

- If the player wins, return `"Congratulations! \nYou won the Game :)"`.
- If the computer wins, return `"Game Over! \nYou lost the Game :("`.
- If there's a tie, return `"It's a TIE! Try again"`.
- If there isn't a winner yet, return `""`.

There are several ways to write this method. 

Give it a try in the following repl.it first; it will tell you if your method is correctly written!
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaTicTacToegetWinner?lite=true#Winner.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% notice note %}}
#### Ideas/Hints for writing the method `getWinner()`
- Concatenate `Strings` at the 3 positions that consist a horizontal, vertical, or diagonal row.
- Use `equals()` to check if each of the concatenated Strings is `"XXX"` or `"OOO"` for a winner. (You can even create another method that checks if an input `String` is `"XXX"` or `"OOO"`)
- If all the spots in the array is filled (a `for loop` can be helpful) and there is no winner, the game ends in a tie.
{{% /notice %}}

## 2. Calling the Winner Method 
In `main()`, call the method `getWinner()` after the line of code where you place the player's move, `"X"`. 

Check if the game should continue (when there is no winner or a tie). 

If there is a winner or a tie, print out the final board and the game result! And, add the line of code `break;`, which prompts the program to break out from the `while` loop!

</br>

## 3. Repeat Step Two
In `main()`, repeat the code in step 2 (check winner and print result if needed) after you place the computer's move, `"O"`.

</br>

## 4. Close the Scanner Object
Outside of the while loop, add the code `sc.close()` to close the `Scanner` object from reading any new inputs. 

It is good practice to close the `Scanner` object if we won't be getting any more inputs after we `break` from the `while` loop!

</br>

## 5. All Done :) !
You should now have a functioning TicTacToe game! I am so proud of you to finish this workshop! Good Job 👍!

</br>

##### As an overview, this should be the structure of your code:
<img src="../images/code.png" height="500"/> 
