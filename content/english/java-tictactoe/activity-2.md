---
title: "2. Read and Process Input"
description: "read input with Scanner class and check error case"
date: 2020-07-23T00:00:00Z
weight: 3
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

1. In Java, an efficient way to obtain user input is to use the `Scanner` class in `java.util package`. To use this class and all its methods, we need to `import` the class with the following line of code on the top of the file.
```java
import java.util.Scanner;
``` 

2. In `main()`, we need to first create a `Scanner` object called `sc` by calling its constructor (shown below).

   We want to `Scanner` to read our input from the standard input stream. To do that we need to pass in `System.in`(the standard input stream object).
```java
// Scanner class constructor
public Scanner(InputStream source);
```

3. In the previous activity, we prompt the user to enter numbers from 1 - 9. Hence, we will be expecting an `int` from the input stream. 
   
   To obtain the `int` the `Scanner` object stores, we call the method `nextInt()` on `sc`, the `Scanner` object.
```java
public int nextInt();
```

4. (optional) To test your program, add a print statement to prints out the value you store from `nextInt()`. 

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

5. In Java, we can deal with potential errors by putting the code that might cause an error in an `try-catch` block. 

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

6. In the `try` block, we get number inputs from users. However, not all the inputs are valid as we should only accept available spots on the board.

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

7. In the `catch` block, we know the player enters a non-number input. First, we need to ignore this invalid input by erasing this input from the `Scanner`. We do so by calling the method `next()` on the `Scanner` object we created. After, we should also print the statement to inform the player to re-enter a move `Invalid Position; re-enter your move (1-9):`.

8. (optional) Test your program by clicking `Run`, you should see the message `Invalid Position; re-enter your move (1-9):` if you entered a non-number input, or a number that isn't between 1 through 9.

9. Now we have a program that takes in one input and evaluates if it's valid, we want to ask the player to do it again until the game ends.

To continue prompting the user to enter his/her next move, we put the whole `try-catch` block in a `while loop`. This `while loop` takes in an argument of `true` meaning the program will continuing looping until instructed to stop. 

Note that we call `printBoard(board)` and prompt the user at the end of each iteration, shown below:
```java
while(true){
    // insert the try-catch block here

    printBoard(board);
    System.out.print("Enter your move (1-9): "); 
}
```

10. When a user enters an invalid input, we do not what the program to call `printBoard(board)` and print `Enter your move (1-9): `. 

In other words, we want to program to `continue` on to the next iteration of in the `while` loop. 


We put `continue;` in the code to indicate the computer to skip back and execute from to the top of the `while` loop again.

By the end of this exercise, you should have a program that prompts you to re-enter for any invalid inputs, and prints out an empty board with the prompt `Enter your move (1-9): ` for any valid inputs! Let's continue on the workshop to see how we should update our game board!