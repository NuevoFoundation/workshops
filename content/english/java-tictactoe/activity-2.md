---
title: "2. Read and Process Input"
description: "read input with Scanner class and check error case"
date: 2020-07-23T00:00:00Z
prereq: "Set up the Board!"
difficulty: "Intermediate"
weight: 3
draft: false
---

{{% notice tip %}}
#### Prerequisites (from Java: Basics) 
- activity-1: <a href="../../java-basics/activity-1" target="_blank">Print Statements and Comments</a>
- activity-2: <a href="../../java-basics/activity-2" target="_blank">Variables and Types</a>
- activity-3: <a href="../../java-basics/activity-3" target="_blank">Operators</a>
- activity-4: <a href="../../java-basics/activity-4" target="_blank">Control Structures</a>
- activity-5: <a href="../../java-basics/activity-5" target="_blank">Methods</a>
- activity-6: <a href="../../java-basics/activity-6" target="_blank">Object and Classes</a>

These are the concepts from the `Java: Basics` workshop that we will use in this activity. Please refer to these activity to review or learn the concepts before continuing!
{{% /notice %}}

## 1. Importing Packages
In Java, an efficient way to obtain user input is to use the `Scanner` class in `java.util package`. To use this class and all its methods, we need to `import` the class with the following line of code on the top of the file.
```java
import java.util.Scanner;
``` 

## 2. Using the Scanner Class
In `main()`, we need to first create a `Scanner` object called `sc` by calling its constructor (shown below).

   We want to `Scanner` to read our input from the standard input stream. To do that we need to pass in `System.in`(the standard input stream object).
```java
// Scanner class constructor
public Scanner(InputStream source);
```

## 3. Obtaining User Input
In the previous activity, we prompt the user to enter numbers from 1 - 9. Hence, we will be expecting an `int` from the input stream. 
   
   To obtain the `int` the `Scanner` object stores, we call the method `nextInt()` on `sc`, the `Scanner` object.
```java
public int nextInt();
```

## 4. Test Your Program (optional)
To test your program, add a print statement to prints out the value you store from `nextInt()`. 

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
When writing programs, we can never expect user to type in the correct values even when it's spelled out in the prompt.

So, since our program only expects an `int` input. 

The program will crash when you type in anything that's not a number, such as: `hi`, `$`, `20.1`. You will see an error message like the following:
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

## 5. Handling Invalid Inputs with Scanner
The Scanner class provides methods which check for valid or invalid inputs. For example, the method
```java
public boolean hasNextInt();
```
will check if the value of the user's input is an integer and returns `true` or `false`. This method can be used to ensure that the user's input is valid. 

## 8. Test Your Program (optional)
Test your program by clicking `Run`, you should see the message `Invalid Position; re-enter your move (1-9):` if you entered a non-number input, or a number that isn't between 1 through 9.

## 9. Taking Multiple Inputs
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
