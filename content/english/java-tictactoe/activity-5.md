---
title: "5. (Optional) AI Move"
description: "Use Minimax algorithm to pick move for the computer"
date: 2020-07-23T00:00:00Z
weight: 6
difficulty: "Intermediate"
hidden: false
---
{{% notice tip %}}
#### This is a bonus activity!
To continue, you should have completed the Tic-Tac-Toe program from the previous exercises! 
#### Prerequisites (from Java: Basics) 
- activity-1: <a href="../../java-basics/activity-1" target="_blank">Print Statements and Comments</a>
- activity-2: <a href="../../java-basics/activity-2" target="_blank">Variables and Types</a>
- activity-3: <a href="../../java-basics/activity-3" target="_blank">Operators</a>
- activity-4: <a href="../../java-basics/activity-4" target="_blank">Control Structures</a>
- activity-5: <a href="../../java-basics/activity-5" target="_blank">Methods</a>
- activity-6: <a href="../../java-basics/activity-6" target="_blank">Object and Classes</a>
- activity-7: <a href="../../java-basics/activity-7" target="_blank">Data Structures (Array & ArrayList)</a>
{{% /notice %}}

### Let's make the computer think
Previously, we use a `Random` object to randomly generate a move for the computer. As a result, the competitiveness of the computer is fairly low.

In this exercise, we want to increase the difficulty of the game by making optimal decisions for the computer.

We will do so by adding artificial intelligence into our program with the use the <b>Minimax</b> algorithm (a well-defined procedure that allows computers to solve problems).

### Minimax Algorithm
Minimax is an algorithm that is used in two-player games to make optimal decisions for a player. 

- The algorithm makes optimal decision for the maximizer by examining all the possible future game states based on the current game board. 
- The two players are labeled as <b>maximizer</b> and <b>minimizer</b> respectedly. In this case, the computer is the maximizer, and the player is the minimizer. 
- If there is a winner or tie, that game state will be given a score.
- In our game specifically, we want the computer to win in fewest steps possible. Hence, we design the calculation of score for the game board as the following: 

   (computer wins (`1 * number of spots left + 1`), player wins (`-1 * number of spots left + 1`), tie (`0`)).
- While the maximizer tries to get the highest score possible, the minimizer tries to minimize the score of its opponent.  

Let's look at an example below:

<img src="../images/minimax.png" height="500"/> 

1. In the first row, we considered the 3 possible moves for `"O"`. 

2. We note that if the computer puts its move at position 8, the game will halt as the computer wins. That state will hence be given a score of `1 * number of spots left + 1` = `8`.

3. We would consider all the possible moves of `"X"` and `"O"` until all possibilities end with a winner or a tie.

4. At game states that don't have a winner or a tie, we pick the smallest score during minimizing rounds, and the largest score during maximizing rounds.

If you follow along through the maximizing/minimizing rounds on the picture above, you should note that the 3 possible moves for "O" at the starting game board have the scores of `0`(position 7), `3`(position 8), `0`(position 6). 

Hence, the optimal move for the computer is to place `"O"` at position 8.

### Write the Method `getComputerMoveAI()`
In activity-3, you wrote the method `int getComputerMove(String[] curBoard)` to randomly generate a spot for the computer. Let's write another method called `getComputerMoveAI(String[] curBoard)` that returns the optimal move for the computer. 

We will write this method assuming we have the `int minimax(String[] curBoard, boolean isMaximizing)` method implemented, which you will write later.

1. For each available spot on the game board, place `"O"` at that spot and get the score for that board by calling `minimax()`. 

{{% notice hint %}}
- Note that we call the method `minimax()` inside of the implementation of itself. We call a function that calls itself during its execution a <b>recursive function</b>.
- Note you should pass `false` for the second argument since it'd be the minimizer's turn.
- You should change that spot back to `" "` after getting the score, so you maintain the original state of the game board during the next iteration.
{{% /notice %}}

2. Track the largest score and its corresponding position of the board at each iteration. Return the position with the largest score.

{{% notice hint %}}
- Have a variable called `bestScore` that stores the current best score and have an initial value of `Integer.MIN_VALUE` (minimum value of an integer).
- This is an useful way to find the maximum value in a data structure. For example:
```java
// the following code find the maximum value in the array "nums"
int[] nums = {3, 5, -2, 10};
int largestNum = Integer.MIN_VALUE;
for(int i = 0; i < nums.length; i++){
    if(nums[i] > largestNum){
        largestNum = nums[i];
    }
}
return largestNum;
```
{{% /notice %}}

### Write the Method `minimax()`
As we discussed above, the `minimax()` method has the header `int minimax(String[] curBoard, boolean isMaximizing)`.

1. Call `getWinner()` on the board to check if there is a winner. If so, return the corresponding score (Score: computer wins (`1 * number of spots left + 1`), player wins (`-1 * number of spots left + 1`), tie (`0`)).

2-1. If it's maximizer's turn (`"O"`), for each available spot on the game board, place `"O"` at that spot and get the score for that board by calling `minimax()`.

2-2. If it's minimizer's turn (`"X"`), for each available spot on the game board, place `"X"` at that spot and get the score for that board by calling `minimax()`.

3-1. If it's maximizer's turn (`"O"`), track the largest score and the corresponding position at each iteration, and return that score.

3-2. If it's minimizer's turn (`"X"`), track the smallest score and the corresponding position at each iteration, and return that score.

### Test your methods
Copy and paste your two methods below `main()`. 

Click `Run` to test around your methods. We provided a given test of the example of the picture above. 

You can plug in different boards to test if you get a desirable output.
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaTicTacToeminimax?lite=true#Winner.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Update the Program
After testing the methods, update all the method calls of `getComputerMove()` to `getComputerMoveAI()` in your TicTacToe program. 

It should be way more challenging to win this time around😀! 