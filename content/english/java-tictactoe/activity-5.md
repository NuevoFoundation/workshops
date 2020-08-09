---
title: "5. (Optional) AI Move"
description: ""
date: 2020-07-23T00:00:00Z
weight: 6
hidden: false
---
{{% notice tip %}}
#### This is a bonus activity!
To continue, you should have completed the Tic-Tac-Toe program from the previous exercises! 
{{% /notice %}}

### Let's make the computer think
Previously, we use a `Random` object to randomly generate a move for the computer, making the competitiveness of the computer is pretty low.

In this exercise, we want to increase the difficulty of the game by making optimal decisions for the computer.

We will do so by adding artificial intelligence into our program with the use the <b>Minimax</b> algorithm (a well-defined procedure that allows computers to solve problems).

### Minimax Algorithm
Minimax is an algorithm that is often used in two-player games to make optimal decisions for a player. 

- The algorithm makes optimal decision for the maximizer by examining all the possible future game states based on the current game board. 
- If there is a winner or tie, the game state will be given a score. (Score: computer wins (`positive value`), player wins (`negative value`), tie (`0`)).
- The two players are labeled as <b>maximizer</b> and <b>minimizer</b> respectedly. In this case, the computer is the maximizer, and the player is the minimizer. 
- The maximizer tries to get the highest score possible, and the minimizer tries to minimize the score of its opponent. 

<img src="../images/minimax.png" height="500"/> 

During the minimizing round, we pick the game state with the smallest score. And, in the maximizing round, we pick the game state with the largest score.

If you follow along through the maximizing/minimizing rounds on the picture above, you will note that the best move for the computer is to place `"X"` at position 8.

### Write the Method `getComputerMoveAI()`
In activity-3, you wrote the method `int getComputerMove(String[] curBoard)` to randomly generate a spot for the computer. Let's write another method called `getComputerMoveAI(String[] curBoard)` that returns the optimal move for the computer. 

We will write this method assuming we have the `int minimax(String[] curBoard, boolean isMaximizing)` method implemented, which you will write later.

1. For each available spot on the game board, place `"X"` at that spot and get the score for that board by calling `minimax()`. 
{{% notice hint %}}
- Note that we call the method `minimax()` inside of the implementation of itself. We call a function that calls itself during its execution a <b>recursive function</b>.
- Note you should pass `false` for the second argument since it'd be the minimizer's turn.
- You should change that spot back to `"O"` after getting the score, so you maintain the original state of the game board during the next iteration.
{{% /notice %}}

2. Track the largest score and its corresponding position of the board at each iteration. Return the position with the largest score.
{{% notice hint %}}
- Have a variable called `bestScore` that stores the current best score and have an initial value of `Integer.MIN_VALUE` (minimum value of an integer).
{{% /notice %}}

### Write the Method `minimax()`
As we discussed above, the `minimax()` method has the header `int minimax(String[] curBoard, boolean isMaximizing)`.

1. Call `getWinner()` on the board to check if there is a winner. If so, return the corresponding score (Score: computer wins (`1 * number of spots left + 1`), player wins (`-1 * number of spots left + 1`), tie (`0`)).

{{% notice note %}}
#### Why do we multiple the score by "number of spots left + 1"?
By including the factor of "number of spots left + 1" to the calculation of score, we give priority to the computer move that allows the computer to win in the fewest steps.

Specifically, the maximizer tries to maximize its score, and the move being make should have the largest score (the most spots left when the computer wins).
{{% /notice %}}

2-1. If it's maximizer's turn (`"X"`), for each available spot on the game board, place `"X"` at that spot and get the score for that board by calling `minimax()`.

2-2. If it's minimizer's turn (`"O"`), for each available spot on the game board, place `"O"` at that spot and get the score for that board by calling `minimax()`.

3-1. If it's maximizer's turn (`"X"`), track the largest score and the corresponding position at each iteration, and return that score.

3-2. If it's minimizer's turn (`"O"`), track the smallest score and the corresponding position at each iteration, and return that score.

### Test your methods
Copy and paste your two methods below `main()`. 

Click `Run` to test around your methods. We provided a given test of the example of the picture above. 

You can plug in different boards to test if you get a desirable output.
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaTicTacToeminimax?lite=true#Winner.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Update the Program
After testing the methods, update all the method calls of `getComputerMove()` to `getComputerMoveAI()` in your TicTacToe program. 

It should be way more challenging to win this time around😀! 