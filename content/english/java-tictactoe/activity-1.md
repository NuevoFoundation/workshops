---
title: "1. Set Up the Board!"
description: "Using print statements prompt the game rules and board"
date: 2020-07-23T00:00:00Z
weight: 2
---

{{% notice tip %}}
#### Prerequisites (from Java: Basics) 
- activity-1: <a href="../../java-basics/activity-1" target="_blank">Print Statements and Comments</a>
- activity-2: <a href="../../java-basics/activity-2" target="_blank">Variables and Types</a>
- activity-3: <a href="../../java-basics/activity-3" target="_blank">Operators</a>
- activity-5: <a href="../../java-basics/activity-5" target="_blank">Methods</a>
- activity-6: <a href="../../java-basics/activity-6" target="_blank">Object and Classes</a>
- activity-7: <a href="../../java-basics/activity-7" target="_blank">Data Structures (Array & ArrayList)</a>

These are the concepts from the `Java: Basics` workshop that we will use in this activity. Please refer to these activity to review or learn the concepts before continuing!
{{% /notice %}}

In this activity, we will have a program that prints out the game board and gaming prompt, like the output below:
```
<<<~  Tic  Tac  Toe  ~>>>
* Choose number 1 - 9 to place your move
* Player: 'X' Computer: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 2
 O | X |   
---+---+---
   |   |   
---+---+---
   |   |   
Enter your move (1-9): 
```
</br>

1. Notice that in the starter code, we have the class `Main` and the `main()` method. `main()` method is where the program starts whenever we click the `Run` button. 
```java
public class Main {
  public static void main(String[] args) {
  }
}
```

2. In `main()`, write print statement(s) to print the welcome statement and rules for the game!
```
<<<~  Tic  Tac  Toe  ~>>>
* Choose number 1 - 9 to place your move
* Player: 'X' Computer: 'O'
```

3. In this game, we note that we will have to track the symbol currently in each of the 9 positions on the board. 

   Hence, we will need to store 9 pieces of data in the program. Let's use an `array`(a data stucture) of size 9 to store these information. 

   As stated in the rules, on the game board, `"X"` is the player's move, `"O"` is a computer move, and `" "` is an available spot.

   With these information, let's declare an array `variable` called `board` with the values of 9 `" "` String (i.e `{" ", " ", " ", " ", " ", " ", " ", " ", " "}`).

4. Now we have the variable `board` storing current symbols on the game board, let's try to print out an empty game board using print statements (shown below). 

   Note that each game board consists of 5 lines, so it is reasonable to have 5 print statment to print out each board. 
   
   Each of the 9 blocks is a `String` of length 3, where the middle character is the current symbol stored in `board` at the corresponding position.

   You should have a program that has the output below after completing this step.
```
<<<~  Tic  Tac  Toe  ~>>>
* Choose number 1 - 9 to place your move
* Player: 'X' Computer: 'O'

   |   |  
---+---+---
   |   |  
---+---+---
   |   | 
```

5. As we know we will need to print out the current game board several times throughout the game, so it will be a good idea to move the block of code you write in step 4 to a method. 

   This method should take an input of `String[]` and prints out the current board. Note that this method should be written outside of `main()`.
   
   Let's write a method with the following header:
```java
public static void printBoard(String[] curBoard);
```

6. In `main()`, call the `printBoard()`, so it prints the initial board with labelled position. You can do this by creating another `String array` of the content `"1", "2", ..., "9"`.

   Have a line of code that prints `Enter your move (1-9): `
```
<<<~  Tic  Tac  Toe  ~>>>
* Choose number 1 - 9 to place your move
* Player: 'X' Computer: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 
```

7. Run your program, if it outputs the text above, you are ready to continue 👍!