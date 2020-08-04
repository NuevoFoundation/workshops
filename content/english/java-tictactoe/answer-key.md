---
title: "Java: TicTacTow - Answer Key"
date: 2020-07-23T00:00:00Z
weight: 15
draft: false
hidden: true
---

# activity-1: Game SetUp
```java
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Choose number 1 - 9 to place your move\n* Player: 'X' Computer: 'O'\n");
        printBoard(startBoard);
        System.out.print("Enter your move (1-9): "); 
        }

    public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
}
```

# activity-2: Read + Process Input
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

            printBoard(board);
            System.out.print("Enter your move (1-9): "); 
        }
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

# activity-3: Update Board
```java
// import java.util.Scanner;
import java.util.Random;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Choose number 1 - 9 to place your move\n* Player: 'X' Computer: 'O'\n");
        printBoard(startBoard);
        System.out.print("Enter your move (1-9): "); */

        while(true){
            /*int move;
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
            }*/

            board[move - 1] = "X";
            
            board[getComputerMove(board) - 1] = "O";

            /*printBoard(board);
            System.out.print("Enter your move (1-9): "); */s
        }
    }

    /*public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }*/
    public static int getComputerMove(String[] curBoard){
        Random rand = new Random();
        int pos = rand.nextInt(9) + 1;
        while(! curBoard[pos - 1].equals(" ")){
            pos = rand.nextInt(9) + 1;
        }
        return pos;
    }
}
```

# activity-4: Check Winner
```java
// import java.util.Scanner;
// import java.util.Random;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Choose number 1 - 9 to place your move\n* Player: 'X' Computer: 'O'\n");
        printBoard(startBoard);
        System.out.print("Enter your move (1-9): "); */

        while(true){
            /*int move;
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
            }*/

            // board[move - 1] = "X";
            String winner = getWinner(board);
            if(winner.length() > 0){
                printBoard(board);
                System.out.println("\n" + winner + "\n");
                break;
            }
            
            // board[getComputerMove(board) - 1] = "O";
            winner = getWinner(board);
            if(winner.length() > 0){
                printBoard(board);
                System.out.println("\n" + winner + "\n");
                break;
            }

            /*printBoard(board);
            System.out.print("Enter your move (1-9): "); */s
        }
        sc.close();  
    }

    /*public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
    public static int getComputerMove(String[] curBoard){
        Random rand = new Random();
        int pos = rand.nextInt(9) + 1;
        while(! curBoard[pos - 1].equals(" ")){
            pos = rand.nextInt(9) + 1;
        }
        return pos;
    }*/
    
    public static String getWinner(String[] curBoard){
        for(int i = 0; i < 8; i++){
            String checkWin = "";
            switch(i){
                case 0: checkWin = curBoard[0] + curBoard[1] + curBoard[2];
                        break;
                case 1: checkWin = curBoard[3] + curBoard[4] + curBoard[5];
                        break;
                case 2: checkWin = curBoard[6] + curBoard[7] + curBoard[8];
                        break;
                case 3: checkWin = curBoard[0] + curBoard[3] + curBoard[6];
                        break;
                case 4: checkWin = curBoard[1] + curBoard[4] + curBoard[7];
                        break;
                case 5: checkWin = curBoard[2] + curBoard[5] + curBoard[8];
                        break;
                case 6: checkWin = curBoard[0] + curBoard[4] + curBoard[8];
                        break;
                case 7: checkWin = curBoard[2] + curBoard[4] + curBoard[6];
                        break;
            }
            if(checkWin.equals("XXX")){
                return "Congratulations! \nYou won the Game :)";
            }else if(checkWin.equals("OOO")){
                return "Game Over! \nYou lost the Game :(";
            }
        }
        for(String move: curBoard){
            if(move.equals(" ")){
                return "";
            }
        }
        return "It's a TIE! Try again";
    }
}
```

# activity-5: AI Computer Move
```java
        public static int getComputerMoveAI(String[] curBoard){
            int pos = 0;
            int bestScore = Integer.MIN_VALUE;
            for(int i = 0; i < 9; i++){
                if(curBoard[i].equals(" ")){
                    curBoard[i] = "O";
                    int score = minimax(curBoard, false);
                    curBoard[i] = " ";
                    if(score > bestScore){
                        bestScore = score;
                        pos = i;
                    }
                }
            }
            return pos;
        }
    
        public static int minimax(String[] curBoard, boolean isMaximizing){
            String result = getWinner(curBoard);
    
            int factor = getFactor(curBoard);

            // terminating state return score
            if(result.contains("TIE")) return 0;
            if(result.contains("won")) return -1 * factor;
            if(result.contains("lost")) return 1 * factor;
                    
            // recurrence case
            int bestScore = (isMaximizing)? Integer.MIN_VALUE : Integer.MAX_VALUE;
            String symbol = (isMaximizing)? "O" : "X";
            for(int i = 0; i <9; i++){
                if(curBoard[i].equals(" ")){
                    curBoard[i] = symbol;
                    int score = minimax(curBoard, !isMaximizing);
                    curBoard[i] = " ";
                    if(isMaximizing) {
                        bestScore = Math.max(score, bestScore);
                    }else{
                        bestScore = Math.min(score, bestScore);
                    }
                }
            }
    
            return bestScore;
        }

    // return number of spots available + 1
    public static int getFactor(String[] curBoard){
        int counter = 1;
        for(int i = 0; i < 9; i++){
            if(curBoard[i].equals(" ")){
                counter++;
            }
        }
        return counter;
    }
```

# Full Code
```java
import java.util.Random;
import java.util.Scanner;

public class TicTacToe_Nuevo {
    public static void main(String args[]){
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};
        Scanner sc = new Scanner(System.in);

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Choose number 1 - 9 to place your move\n* Player: 'X' Computer: 'O'\n");
        printBoard(startBoard);
        System.out.print("Enter your move (1-9): "); 

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

            board[move - 1] = "X";
            String winner = getWinner(board);
            if(winner.length() > 0){
                printBoard(board);
                System.out.println("\n" + winner + "\n");
                break;
            }

            double ran = Math.random();
            /*if(ran < 0.2){
                board[getComputerMove(board) - 1] = "O";
            }else{*/
                board[getComputerMoveAI(board) - 1] = "O";
            //}
            winner = getWinner(board);
            if(winner.length() > 0){
                printBoard(board);
                System.out.println("\n" + winner + "\n");
                break;
            }

            printBoard(board);
            System.out.print("Enter your move (1-9): "); 
        }
        sc.close();  
    }

    public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
    public static String getWinner(String[] curBoard){
        for(int i = 0; i < 8; i++){
            String checkWin = "";
            switch(i){
                case 0: checkWin = curBoard[0] + curBoard[1] + curBoard[2];
                        break;
                case 1: checkWin = curBoard[3] + curBoard[4] + curBoard[5];
                        break;
                case 2: checkWin = curBoard[6] + curBoard[7] + curBoard[8];
                        break;
                case 3: checkWin = curBoard[0] + curBoard[3] + curBoard[6];
                        break;
                case 4: checkWin = curBoard[1] + curBoard[4] + curBoard[7];
                        break;
                case 5: checkWin = curBoard[2] + curBoard[5] + curBoard[8];
                        break;
                case 6: checkWin = curBoard[0] + curBoard[4] + curBoard[8];
                        break;
                case 7: checkWin = curBoard[2] + curBoard[4] + curBoard[6];
                        break;
            }
            if(checkWin.equals("XXX")){
                return "Congratulations! \nYou won the Game :)";
            }else if(checkWin.equals("OOO")){
                return "Game Over! \nYou lost the Game :(";
            }
        }
        for(String move: curBoard){
            if(move.equals(" ")){
                return "";
            }
        }
        return "It's a TIE! Try it again";
    }

    public static int getComputerMove(String[] curBoard){
        Random rand = new Random();
        int pos = rand.nextInt(9) + 1;
        while(! curBoard[pos - 1].equals(" ")){
            pos = rand.nextInt(9) + 1;
        }
        return pos;
    }

        // AI: computer move
        public static int getComputerMoveAI(String[] curBoard){
            int pos = 0;
            int bestScore = Integer.MIN_VALUE;
            for(int i = 0; i < 9; i++){
                if(curBoard[i].equals(" ")){
                    curBoard[i] = "O";
                    int score = minimax(curBoard, false);
                    curBoard[i] = " ";
                    if(score > bestScore){
                        bestScore = score;
                        pos = i;
                    }
                }
            }
            return pos;
        }
    
        public static int minimax(String[] curBoard, boolean isMaximizing){
            String result = getWinner(curBoard);
    
            int factor = getFactor(curBoard);

            // terminating state return score
            if(result.contains("TIE")) return 0;
            if(result.contains("won")) return -1 * factor;
            if(result.contains("lost")) return 1 * factor;
                    
            // recurrence case
            int bestScore = (isMaximizing)? Integer.MIN_VALUE : Integer.MAX_VALUE;
            String symbol = (isMaximizing)? "O" : "X";
            for(int i = 0; i <9; i++){
                if(curBoard[i].equals(" ")){
                    curBoard[i] = symbol;
                    int score = minimax(curBoard, !isMaximizing);
                    curBoard[i] = " ";
                    if(isMaximizing) {
                        bestScore = Math.max(score, bestScore);
                    }else{
                        bestScore = Math.min(score, bestScore);
                    }
                }
            }
    
            return bestScore;
        }

    // return number of spots available + 1
    public static int getFactor(String[] curBoard){
        int counter = 1;
        for(int i = 0; i < 9; i++){
            if(curBoard[i].equals(" ")){
                counter++;
            }
        }
        return counter;
    }
}
```
