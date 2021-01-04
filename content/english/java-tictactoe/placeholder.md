

## 5. Error Handling
In Java, we can deal with potential errors by putting the code that might cause an error in an `try-catch` block. 

   In the `try` block, we put the block of code that might cause an error.

   In the `catch` block, we put instructions on what to do if there is an error when executing the `try` block. We can then prevent the program from crashing this way.

   For example:
   ```java
   try{
        //  Block of code to try
   } catch(Exception e){
        //  Block of code to handle errors
   }
   ```
   Run your program and type in non-number inputs. Your program should not fail now!

## 6. The Try Block
In the `try` block, we get number inputs from users. However, not all the inputs are valid as we should only accept available spots on the board.

Use if statement(s) to check whether the number input is valid. (Hint: access the `board` array to check if the input is valid).

If it's not, print the statment `Invalid Position; re-enter your move (1-9):`.

{{% notice hint %}}
#### How to I check if two Strings are the same?
To check whether 2 Strings contains the same content, we call the method `equals()`. For example

```java
String s1 = "hi";
boolean b1 = s1.equals("hi"); // this is true
boolean b2 = s1.equals("HI"); // this is false
```
{{% /notice %}}

## 7. The Catch Block
In the `catch` block, we know the player enters a non-number input. First, we need to ignore this invalid input by erasing this input from the `Scanner`. We do so by calling the method `next()` on the `Scanner` object we created. After, we should also print the statement to inform the player to re-enter a move `Invalid Position; re-enter your move (1-9):`.

## 8. (optional) Test Your Program 
Test your program by clicking `Run`, you should see the message `Invalid Position; re-enter your move (1-9):` if you entered a non-number input, or a number that isn't between 1 through 9.

## 9. Taking Multiple Inputs
Now we have a program that takes in one input and evaluates if it's valid, we want to ask the player to do it again until the game ends.

To continue prompting the user to enter his/her next move, we put the whole `try-catch` block in a `while loop`. This `while loop` takes in an argument of `true` meaning the program will continuing looping until instructed to stop. 

Note that we call `printBoard(board)` and prompt the user at the end of each iteration, shown below:
```java
while(true){
    // insert the try-catch block here

    printBoard(board);
    System.out.print("Enter your move (1-9): "); 
}
```

## 10. Handling Invalid Input
When a user enters an invalid input, we do not what the program to call `printBoard(board)` and print `Enter your move (1-9): `. 

In other words, we want to program to `continue` on to the next iteration of in the `while` loop. 


We put `continue;` in the code to indicate the computer to skip back and execute from to the top of the `while` loop again.

By the end of this exercise, you should have a program that prompts you to re-enter for any invalid inputs, and prints out an empty board with the prompt `Enter your move (1-9): ` for any valid inputs!

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

Let's continue on the workshop to see how we should update our game board!