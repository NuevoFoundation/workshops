---
title: "3. Update the Game Board"
description: "learn to generate a move for computer and update the board"
date: 2020-07-23T00:00:00Z
prereq: "Set up the Board!, Read and Process Input"
difficulty: "Intermediate"
weight: 4
---

{{% notice tip %}}
#### Prerequisites (from Java: Basics) 
- activity-1: <a href="../../java-basics/activity-1" target="_blank">Print Statements and Comments</a>
- activity-2: <a href="../../java-basics/activity-2" target="_blank">Variables and Types</a>
- activity-4: <a href="../../java-basics/activity-4" target="_blank">Control Structures</a>
- activity-5: <a href="../../java-basics/activity-5" target="_blank">Methods</a>
- activity-6: <a href="../../java-basics/activity-6" target="_blank">Object and Classes</a>
- activity-7: <a href="../../java-basics/activity-7" target="_blank">Data Structures (Array & ArrayList)</a>

These are the concepts from the `Java: Basics` workshop that we will use in this activity. Please refer to these activity to review or learn the concepts before continuing!

#### Prerequisites 
{{% /notice %}}

In the last exercise, we have a program that prints out the board and prompt `Enter your move (1-9): ` to user with each valid move. However, the board stayed empty(shown below). In this exercise, we will learn how to update board and generate a random move for the computer.

```
<<<~  Tic  Tac  Toe  ~>>>
* Choose number 1 - 9 to place your move
* Player: 'X' Computer: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 1
   |   |   
---+---+---
   |   |                                    <--------------- The board doesn't have the player/computer moves
---+---+---
   |   |   
Enter your move (1-9): d
Invalid Input; re-enter your move (1-9): 3
   |   |   
---+---+---
   |   |                                    <--------------- The board doesn't have the player/computer moves
---+---+---
   |   |   
Enter your move (1-9): 
```
</br>

## 1. Displaying User Moves
After the `try-catch` block, before the method call `printBoard(board)`, update the `board` array with user's input at the corresponding index. 

Note that the player is represented by `"X"` on the game board. 

(Reminder: Java uses 0-indexing and the player was prompted to enter number from 1 to 9).

</br>

## 2. Setting Up Computer Moves
Create a new method `getComputerMove(String[] curBoard)` that produce a valid move for the computer (between 1 to 9) with an input of the current game board. 

Follow next step to implement the method.

</br>

## 3. Implementing the Computer's Movement
In `getComputerMove()`, we will randomly generate a number between 1 and 9 for the computer.

We will do so with the help of the class `Random` which is often used in Java to generate random numbers. 

To use this class and all its methods, we need to import the class with the following line of code on the top of the file.
```java
import java.util.Random;
```

Create a `Random` object by calling the constructor `Random()`. 

</br>

## 4. Generating Random Numbers
Call the method `int nextInt(int num)` on the `Random` object you created to generate a number from 1 to 9 randomly.

A method call to `int nextInt(int num)` will return a random number from 0 to `num-1`.

</br>

## 5. Checking for Valid Mood
After having a random number from 1 to 9, we need to check if the spot is available. 

Use a `while` loop to generate a valid move for the computer, if the previously randomly generate number is not an available spot!

Return the number once we find a valid move for the computer.

</br>

## 6. Update the Board Array
Just like step one, we should update the `board` array for the computer before the method call `printBoard(board)`.

Randomly generate a move by calling `getComputerMove()`!

Note that the computer is represented by `"O"` on the game board. 

</br>

## 7. Run the Program
`Run` the program now! The board should update both the player and computer's move correctly with each input as shown below:
```
<<<~  Tic  Tac  Toe  ~>>>
* Choose number 1 - 9 to place your move
* Player: 'X' Computer: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 1
 X |   |   
---+---+---
   |   |   
---+---+---
   | O |   
Enter your move (1-9): 1
Invalid Position; re-enter your move (1-9): 2
 X | X |   
---+---+---
   |   | O 
---+---+---
   | O |   
Enter your move (1-9): 
```

Everything looks like it's working well! We only need to determine who is the winner/loser the game, which we will implement in the next exercise!
