---
title: "4. Check the winner"
description: "write method to check the winner with an input board"
date: 2020-07-23T00:00:00Z
weight: 5
---

{{% notice tip %}}
#### Prerequisites (from Java: Basics) 
- activity-1: <a href="../../java-basics/activity-1" target="_blank">Print Statements and Comments</a>
- activity-2: <a href="../../java-basics/activity-2" target="_blank">Variables and Types</a>
- activity-3: <a href="../../java-basics/activity-3" target="_blank">Operators</a>
- activity-4: <a href="../../java-basics/activity-4" target="_blank">Control Structures</a>
- activity-5: <a href="../../java-basics/activity-5" target="_blank">Methods</a>
- activity-6: <a href="../../java-basics/activity-6" target="_blank">Object and Classes</a>
- activity-7: <a href="../../java-basics/activity-7" target="_blank">Data Structures (Array & ArrayList)</a>

These are the concepts from the `Java: Basics` workshop that we will use in this activity. Please refer to these activity to review or learn the concepts before continuing!
{{% /notice %}}

1. 



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
        return "It's a TIE! Try it again";
    }
}
```
