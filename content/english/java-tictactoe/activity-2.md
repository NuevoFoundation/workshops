---
title: "2. Read and Process Input"
description: "read input with Scanner class and check error case"
date: 2020-07-23T00:00:00Z
weight: 3
---

{{% notice tip %}}
#### Prerequisites (from Java: Basics) 
- activity-1: [Print Statements and Comments](../../java-basics/activity-1)
- activity-2: [Variables and Types](../../java-basics/activity-2)
- activity-3: [Operators](../../java-basics/activity-3)
- activity-4: [Control Structures](../../java-basics/activity-4)
- activity-5: [Methods](../../java-basics/activity-5)
- activity-6: [Object and Classes](../../java-basics/activity-6)

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

6. In the ``

```java
import java.util.Scanner;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        /*String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Choose number 1 - 9 to place your move\n* Player: 'X' Computer: 'O'\n");
        printBoard(startBoard);
        System.out.print("Enter your move (1-9): "); */

        while(true){
            int move;
			try {
				move = sc.nextInt();
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Invalid Position; re-enter your move (1-9): ");
					continue;
				}
			} catch (Exception e) {
                sc.next();
				System.out.print("Invalid Input; re-enter your move (1-9): ");
				continue;
            }

            printBoard();
            System.out.print("Enter your move (1-9): "); 
        }
        sc.close();  
    }

    /*public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }*/
}
```