---
title: "2. Read and Process Input"
description: "Read input with Scanner class and check error cases"
date: 2021-10-14T00:00:00Z
prereq: "Set up the Board!"
difficulty: "Intermediate"
weight: 3
draft: false
---

## Importing Packages

In Java, an efficient way to obtain user input is to use the `Scanner` class in `java.util package`. To use this class and all its methods, we need to `import` the class with the following line of code on the top of the file.

```java
import java.util.Scanner;
```

## Using the Scanner Class

In `main()`, we need to first create a `Scanner` object called `sc` by calling its constructor (shown below).

We want to `Scanner` to read our input from the standard input stream. To do that we need to pass in `System.in`(the standard input stream object).

```java
// Create a Scanner object
Scanner sc = new Scanner(System.in);
```

## Obtaining User Input

In the previous activity, we prompt the user to enter numbers from 1 - 9. Hence, we will be expecting an `int` from the input stream.

To obtain the `int` the `Scanner` object stores, we call the method `nextInt()` on `sc`, the `Scanner` object.

```java
int input = sc.nextInt();
```

## Test Your Program (optional)

To test your program, add a print statement to print out the value you store from `nextInt()`.

Try to run your program, and type in some numbers and click `enter`. You should see your number being correctly printed out. For example:

```
<<<~  Tic  Tac  Toe  ~>>>
* Choose number 1 - 9 to place your move
* Player: 'X' Computer: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 2                 <------- the number you typed in
Input Number: 2                          <------- Print statement printed the inputted number correctly
```

{{% notice warning %}}
#### What happens when user type something that's not a number?

When writing programs, we can never expect users to type in the correct values even when it's spelled out in the prompt.

Since our program only expects an `int` input, the program will crash when you type in anything that is not an integer, such as: `hi`, `$`, `20.1`. You will see an error message like the following:

```
Exception in thread "main" java.util.InputMismatchException      <------ tells you what error it is
    at java.base/java.util.Scanner.throwFor(Scanner.java:939)
    at java.base/java.util.Scanner.next(Scanner.java:1594)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2258)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2212)
    at Main.main(Main.java:15)                                   <------ tells you which line of code causes the error (line 15 in Main.java)
```

Also, note that number inputs that are not in the range 1 - 9 wouldn't crash the program, but these are also inputs we don't want.
{{% /notice %}}

## Handling Invalid Inputs with Scanner

The Scanner class provides methods that check for valid or invalid inputs. For example, the method `hasNextInt` will check if the value of the user's input is an integer and returns `true` or `false`. This method can be used to ensure that the user's input is valid.

Use control structures to validate the users input. If the input is not valid, request for the valid input again. 

```java
if(sc.hasNextInt()) { //was an integer entered
	move = sc.nextInt(); // get integer input
   if (!(move > 0 && move <= 9)) { //is the integer between 1 and 9
		System.out.print("Invalid Position; re-enter your move (1-9): ");
   }
} else { // if an integer wasn't entered
   sc.next(); // clear the Scanner
	System.out.print("Invalid Input; re-enter your move (1-9): ");
}
```

## Test Your Program (optional)

Test your program by clicking `Run`, you should see the message `Invalid Position; re-enter your move (1-9):` if you entered a non-number input, or a number that isn't between 1 through 9.

## Taking Multiple Inputs

Now we have a program that takes in one input and evaluates if it's valid, we want to ask the player to do it again until the game ends.

To continue prompting the user to enter his/her next move, we put the whole `hasNextInt` if statement in a `while loop`. This `while loop` takes in an argument of `true` meaning the program will continuing looping until instructed to stop. 

Note that we call `printBoard(board)` and prompt the user at the end of each iteration, shown below:

```java
while(true){
    // insert the hasNextInt() if statement here

   // move these into the hasNextInt() if statement 
    printBoard(board);
    System.out.print("Enter your move (1-9): "); 
}
```

## Handling Invalid Input

When a user enters an invalid input, we do not want the program to call `printBoard(board)` and print `Enter your move (1-9): `.

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
