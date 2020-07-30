---
title: "Java: TicTacTow - Answer Key"
date: 2020-07-23T00:00:00Z
weight: 15
draft: false
hidden: true
---

# actitity-1: Game SetUp
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
public class TicTacToe_Nuevo {
    /*static ArrayList<Integer> playerMoves = new ArrayList<Integer>();
    static ArrayList<Integer> computerMoves = new ArrayList<Integer>();

    static String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};*/

    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        System.out.println("<<<TicTacToe>>>\n- Positions on the board is represented by number 1 - 9\n- player: 'X' computer: 'O'");
        printBoard();
        System.out.print("Enter your move (1-9): "); */
        while(true){
            /*int move;
			try {
				move = sc.nextInt();
				if (!(move > 0 && move <= 9) || playerMoves.contains(move) || computerMoves.contains(move)) {
					System.out.print("Invalid Position; re-enter your move (1-9): ");
					continue;
				}
			} catch (Exception e) {
                sc.next();
				System.out.print("Invalid Input; re-enter your move (1-9): ");
				continue;
            }

            placeMove(move, true);*/
            String winner = getWinner();
            if(winner.length() > 0){
                System.out.println("\n" + winner + "\n");
                break;
            }
            
            // placeMove(getComputerMove(), false);
            winner = getWinner();
            if(winner.length() > 0){
                System.out.println("\n" + winner + "\n");
                break;
            }
            System.err.print("");

            /* printBoard();
            System.out.print("Enter your move (1-9): "); */
        }
        sc.close();   // important
    }
    /*public static void printBoard(){
        System.out.println(" " + board[0] + " | " + board[1] + " | " + board[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + board[3] + " | " + board[4] + " | " + board[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + board[6] + " | " + board[7] + " | " + board[8] + " ");
    }
    public static int getComputerMove(){
        Random rand = new Random();
        int pos = rand.nextInt(9) + 1;
        while(playerMoves.contains(pos) || computerMoves.contains(pos)){
            pos = rand.nextInt(9) + 1;
        }
        return pos;
    }
    public static void placeMove(int move, boolean playerTurn){
        if(playerTurn){
            board[move - 1] = "X";
            playerMoves.add(move);
        }else{
            board[move - 1] = "O";
            computerMoves.add(move);
        }
    }*/
    public static String getWinner(){
        for(int i = 0; i < 8; i++){
            String checkWin = "";
            switch(i){
                case 0: checkWin = board[0] + board[1] + board[2];
                        break;
                case 1: checkWin = board[3] + board[4] + board[5];
                        break;
                case 2: checkWin = board[6] + board[7] + board[8];
                        break;
                case 3: checkWin = board[0] + board[3] + board[6];
                        break;
                case 4: checkWin = board[1] + board[4] + board[7];
                        break;
                case 5: checkWin = board[2] + board[5] + board[8];
                        break;
                case 6: checkWin = board[0] + board[4] + board[8];
                        break;
                case 7: checkWin = board[2] + board[4] + board[6];
                        break;
            }
            if(checkWin.equals("XXX")){
                return "Congradulations! You won the Game :)";
            }else if(checkWin.equals("OOO")){
                return "Game Over! \nYou lost the Game :(";
            }
        }
        if(playerMoves.size() + computerMoves.size() == 9){
                return "It's a TIE! Try it again";
        }else{
            return "";
        }
    }
}
```

# activity-5: AI Computer Move
```java
// reimplement getComputerMove()
public static int getComputerMove(){
    Random rand = new Random();
    int pos = rand.nextInt(9) + 1;
    while(playerMoves.contains(pos) || computerMoves.contains(pos)){
        pos = rand.nextInt(9) + 1;
    }
    return pos;
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
            if(ran < 0.2){
                board[getComputerMove(board) - 1] = "O";
            }else{
                board[getComputerMove2(board) - 1] = "O";
            }
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
    public static int getComputerMove2(String[] curBoard){
        int pos = 0;
        int bestScore = Integer.MIN_VALUE;
        for(int i = 1; i <= 9; i++){
            if(curBoard[i - 1].equals(" ")){
                curBoard[i - 1] = "O";
                int score = minimax(curBoard, false);
                curBoard[i - 1] = " ";
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

        // terminating state return score
        if(result.contains("TIE")) return 0;
        if(result.contains("won")) return -1;
        if(result.contains("lost")) return 1;
                
        // recurrence case
        int bestScore = (isMaximizing)? Integer.MIN_VALUE : Integer.MAX_VALUE;
        String symbol = (isMaximizing)? "O" : "X";
        for(int i = 1; i <=9; i++){
            if(curBoard[i - 1].equals(" ")){
                curBoard[i - 1] = symbol;
                int score = minimax(curBoard, true);
                curBoard[i - 1] = " ";
                if(isMaximizing) {
                    bestScore = Math.max(score, bestScore);
                }else{
                    bestScore = Math.min(score, bestScore);
                }
            }
        }

        return bestScore;
    }
}
```